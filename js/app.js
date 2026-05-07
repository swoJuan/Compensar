/* ============================================================
   APP.JS — Funcionalidad compartida del Design System
   ============================================================ */

import {
  TOKENS,
  TOKEN_GROUPS,
  TEXT_TOKENS,
  TABLE_TOKENS,
  SEMANTIC_COLOR_TOKENS,
  SPACING_TOKENS,
  BORDER_RADIUS_TOKENS,
  SHADOW_TOKENS,
  SPACING
} from './tokens.js';

/* ——— THEME ——————————————————————————————————————————— */
export function setTheme(theme) {
  const modeKey = theme === 'high-contrast' ? 'highContrast' : theme;
  Object.values(TOKENS).forEach((token) => {
    if (!token?.css || !token?.modes) return;
    const value = token.modes[modeKey] ?? token.modes.light;
    if (value) document.documentElement.style.setProperty(token.css, value);
  });

  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-switcher button').forEach(b => b.classList.remove('active'));
  const map = { light: 'btn-light', dark: 'btn-dark', 'high-contrast': 'btn-hc' };
  document.getElementById(map[theme])?.classList.add('active');
  localStorage.setItem('ds-theme', theme);
  document.dispatchEvent(new CustomEvent('ds:theme-change', {
    detail: { theme }
  }));
}

/* ——— CODE TABS —————————————————————————————————————— */
export function switchTab(btn, targetId) {
  const block = btn.closest('.code-block');
  block.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
  block.querySelectorAll('.code-content pre').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  block.querySelector('#' + targetId)?.classList.add('active');
}

/* ——— COPY CODE —————————————————————————————————————— */
export function copyCode(btn) {
  const pre = btn.closest('.code-content').querySelector('pre.active');
  if (!pre) return;
  navigator.clipboard.writeText(pre.innerText || pre.textContent).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copiado`;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar`;
    }, 2000);
  });
}

/* ——— COPY TOKEN ————————————————————————————————————— */
export function copyToClipboard(text, msg = 'Copiado') {
  navigator.clipboard.writeText(text).then(() => showToast(`${msg}: ${text}`));
}

/* ——— TOAST ——————————————————————————————————————————— */
export function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ——— RENDER: Color grids (sección colores legacy) —— */
export function renderColorGrids() {
  for (const [gridId, tokens] of Object.entries(TOKEN_GROUPS)) {
    const el = document.getElementById(gridId);
    if (!el) continue;
    el.innerHTML = tokens.map(([name, cssVar, hex]) => `
      <div class="color-card" onclick="copyToClipboard('${cssVar}', 'CSS var copiado')" title="Clic para copiar ${cssVar}">
        <div class="color-swatch" style="background:${hex}"></div>
        <div class="color-info">
          <span class="color-name">${name}</span>
          <span class="color-var">${cssVar}</span>
          <span class="color-hex">${hex}</span>
        </div>
      </div>
    `).join('');
  }
}

/* ——— RENDER: Spacing ———————————————————————————————— */
export function renderSpacing() {
  const el = document.getElementById('spacing-list');
  if (!el) return;
  const maxPx = 256;
  el.innerHTML = SPACING.map(([token, val, px]) => `
    <div class="spacing-row">
      <span class="spacing-val">${val}</span>
      <div class="spacing-bar" style="width:${Math.min(px / maxPx * 100, 100)}%"></div>
      <span class="spacing-token">${token}</span>
      <button class="copy-token-btn" onclick="copyToClipboard('${token}', 'Token copiado')">📋 Copiar var</button>
    </div>
  `).join('');
}

/* ——— RENDER: Token tables ——————————————————————————— */
export function renderTokenTable(tableId, tokens) {
  const el = document.getElementById(tableId);
  if (!el) return;
  el.innerHTML = `
    <thead>
      <tr>
        <th>Token (Figma)</th>
        <th>CSS Variable</th>
        <th>Valor</th>
        <th>Descripción</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${tokens.map(([name, cssVar, hex, desc = '']) => `
        <tr>
          <td><span style="font-family:var(--font-code);font-size:12px">${name}</span></td>
          <td>
            <div class="token-name-cell">
              <span class="token-swatch-inline" style="background:${hex}"></span>
              <code style="font-family:var(--font-code);font-size:12px;color:var(--ui-accent)">${cssVar}</code>
            </div>
          </td>
          <td><code style="font-family:var(--font-code);font-size:12px">${hex}</code></td>
          <td style="color:var(--ui-text-muted);font-size:12px">${desc}</td>
          <td><button class="copy-token-btn" onclick="copyToClipboard('${cssVar}', 'Copiado')">📋</button></td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

/* ——— ACORDEÓN SIDEBAR ——————————————————————————————— */
// Mapeo: sectionId → data-group del acordeón correspondiente
const ACCORDION_MAP = {
  // Colores (4 sub-secciones → mismo acordeón)
  'colores-base':        'colores',
  'colores-producto':    'colores',
  'colores-uso':         'colores',
  'colores-utilidades':  'colores',
  // Icon System (3 sub-secciones → mismo acordeón)
  'iconos-intro':        'iconos',
  'iconos-conectar':     'iconos',
  'iconos-libreria':     'iconos',
};

export function initAccordions() {
  document.querySelectorAll('.sidebar-accordion').forEach(btn => {
    btn.addEventListener('click', () => {
      const group  = btn.dataset.group;
      const subnav = document.getElementById(`subnav-${group}`);
      const isOpen = btn.classList.contains('open');
      // Cerrar otros acordeones antes de abrir
      document.querySelectorAll('.sidebar-accordion.open').forEach(other => {
        if (other !== btn) {
          other.classList.remove('open');
          const otherNav = document.getElementById(`subnav-${other.dataset.group}`);
          otherNav?.classList.remove('open');
        }
      });
      btn.classList.toggle('open', !isOpen);
      subnav?.classList.toggle('open', !isOpen);
    });
  });
}

export function openAccordionFor(sectionId) {
  const group = ACCORDION_MAP[sectionId];
  if (!group) return;
  const btn    = document.querySelector(`.sidebar-accordion[data-group="${group}"]`);
  const subnav = document.getElementById(`subnav-${group}`);
  btn?.classList.add('open');
  subnav?.classList.add('open');
}

/* ——— SEARCH ——————————————————————————————————————————— */
export function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) {
      document.querySelectorAll('.sidebar-link').forEach(l => l.style.display = '');
      return;
    }
    document.querySelectorAll('.sidebar-link[href^="#"]').forEach(link => {
      const text = link.textContent.toLowerCase();
      link.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

/* ——— POST-LOAD: se llama después de inyectar cada sección —— */
export function onSectionReady(sectionId) {
  // 1. Abrir el acordeón correspondiente en el sidebar
  openAccordionFor(sectionId);

  // 2. Reinicializar funciones globales que los fragmentos usan con onclick
  //    (necesario porque los scripts del fragmento se re-ejecutan en <head>
  //    pero el contexto window debe estar disponible)
  window.showToast       = showToast;
  window.copyToClipboard = copyToClipboard;
  window.switchTab       = switchTab;
  window.copyCode        = copyCode;

  const ensureMauiDownloadButton = () => {
    const root = document.getElementById('colores');
    if (!root) return false;
    const downloads = root.querySelector('.ct-downloads');
    if (!downloads) return false;
    if (downloads.querySelector('#ct-download-maui')) return true;

    const btn = document.createElement('button');
    btn.id = 'ct-download-maui';
    btn.className = 'mp-btn mp-btn--primario mp-btn--icon-left ct-download-btn ct-download-btn--primary';
    btn.innerHTML = '<i class="icon icon-device-mobile icon-16" aria-hidden="true"></i> MAUI XAML';
    btn.addEventListener('click', () => {
      if (typeof window.ctDownloadMAUI === 'function') {
        window.ctDownloadMAUI();
        return;
      }
      showToast('La accion MAUI aun no esta lista. Intenta de nuevo.');
    });

    const firstAction = downloads.querySelector('.ct-download-btn');
    if (firstAction) {
      downloads.insertBefore(btn, firstAction);
    } else {
      downloads.appendChild(btn);
    }
    return true;
  };

  // 3. Lógica específica por sección
  switch (sectionId) {
    case 'espaciado':
      renderSpacing();
      break;
    case 'tokens-texto':
      renderTokenTable('table-text-tokens', TEXT_TOKENS);
      break;
    case 'tokens-tablas':
      renderTokenTable('table-table-tokens', TABLE_TOKENS);
      break;
    case 'tokens-colores':
      renderTokenTable('table-color-tokens', SEMANTIC_COLOR_TOKENS);
      break;
    case 'tokens-espaciado':
      renderTokenTable('table-spacing-tokens', SPACING_TOKENS);
      break;
    case 'tokens-border-radius':
      renderTokenTable('table-radius-tokens', BORDER_RADIUS_TOKENS);
      break;
    case 'tokens-sombras':
      renderTokenTable('table-shadow-tokens', SHADOW_TOKENS);
      break;
  }

  if (sectionId === 'fundamentos/colores' || sectionId === 'colores-base' || sectionId === 'colores-producto' || sectionId === 'colores-uso' || sectionId === 'colores-utilidades') {
    let tries = 0;
    const syncMauiButton = () => {
      const ready = ensureMauiDownloadButton();
      if (!ready && tries < 6) {
        tries += 1;
        setTimeout(syncMauiButton, 120);
      }
    };
    syncMauiButton();
  }
}

/* ——— INIT (se llama una sola vez al arrancar) ———————— */
export function init() {
  // Restaurar tema guardado
  const saved = localStorage.getItem('ds-theme');
  if (saved) setTheme(saved);

  // Inicializar acordeones del sidebar
  initAccordions();

  // Inicializar búsqueda en header
  initSearch();

  // Si el hash inicial es sub-ítem de acordeón, abrirlo de entrada
  const hash = location.hash.slice(1);
  if (hash) openAccordionFor(hash);

  // Exponer globals para onclick en fragmentos HTML
  window.setTheme        = setTheme;
  window.switchTab       = switchTab;
  window.copyCode        = copyCode;
  window.copyToClipboard = copyToClipboard;
  window.showToast       = showToast;
}
