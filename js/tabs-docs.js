// ============================================================
//  tabs-docs.js
//  Playground interactivo para el componente mp-tab / mp-tabs.
//  Expone: window.tabsDocs · { initTabsDoc, bindTabsDelegated, syncTheme }
// ============================================================

const tabsDocs = (() => {

  // ── Etiquetas de ejemplo ──────────────────────────────────────
  const TAB_LABELS = ['Servicios', 'Beneficios', 'Historial', 'Documentos', 'Contacto'];
  const TAB_ICONS  = ['work', 'favorite', 'history', 'description', 'call'];
  const PANEL_CONTENT = [
    'Contenido de Servicios: aquí encontrarás todas las prestaciones disponibles.',
    'Contenido de Beneficios: revisa los programas a los que tienes acceso.',
    'Contenido de Historial: consulta tus movimientos y transacciones anteriores.',
    'Contenido de Documentos: descarga tus certificados y comprobantes.',
    'Contenido de Contacto: canales de atención al afiliado.'
  ];

  // ──────────────────────────────────────────────────────────────
  // Renderiza anatomía interactiva
  // ──────────────────────────────────────────────────────────────
  function renderAnatomy(page, kind) {
    if (!page) return;
    const iconToggle = page.querySelector('[data-tab-anatomy-toggle="icon"]');
    const requestedKind = kind
      || page.querySelector('[data-tab-anatomy][aria-pressed="true"]')?.dataset.tabAnatomy
      || (iconToggle?.checked ? 'icon' : 'text');
    const activeKind = requestedKind === 'icon' ? 'icon' : 'text';
    const withIcon = activeKind === 'icon';
    const showLabels = page.querySelector('[data-tab-anatomy-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-tab-anatomy-toggle="measures"]')?.checked ?? true;
    const preview = page.querySelector('#tab-anatomy-preview');

    page.querySelectorAll('[data-tab-anatomy]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item.dataset.tabAnatomy === activeKind));
    });
    if (iconToggle) iconToggle.checked = withIcon;

    page.querySelectorAll('.tab-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.tab-anatomy-measure').forEach((item) => { item.hidden = !showMeasures; });
    page.querySelectorAll('[data-tab-anatomy-icon-callout]').forEach((item) => { item.hidden = !showLabels || !withIcon; });
    page.querySelectorAll('[data-tab-anatomy-gap]').forEach((item) => { item.hidden = !showMeasures || !withIcon; });

    const width = page.querySelector('[data-tab-anatomy-width]');
    if (width) width.textContent = withIcon ? '118 px' : '86 px';

    if (!preview) return;
    const strip = document.createElement('div');
    strip.className = 'mp-tabs';
    strip.setAttribute('role', 'tablist');
    strip.setAttribute('aria-label', 'Anatomía del tab');

    const tab = document.createElement('button');
    tab.className = 'mp-tab';
    tab.type = 'button';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('aria-controls', 'tab-anatomy-panel');
    tab.id = 'tab-anatomy-tab';

    if (withIcon) {
      const icon = document.createElement('span');
      icon.className = 'material-symbols-rounded mp-tab__icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = 'favorite';
      tab.appendChild(icon);
    }

    tab.appendChild(document.createTextNode('Title tab'));
    strip.appendChild(tab);
    preview.replaceChildren(strip);
  }

  // ──────────────────────────────────────────────────────────────
  // Lee el estado actual de los controles
  // ──────────────────────────────────────────────────────────────
  function stateFromPage(page) {
    return {
      count:    parseInt(page.querySelector('[data-tab-control="count"]')?.value    || '3', 10),
      icon:     page.querySelector('[data-tab-control="icon"]')?.value              || 'none',
      disabled: page.querySelector('[data-tab-control="disabled"]')?.value          || 'none'
    };
  }

  // ──────────────────────────────────────────────────────────────
  // Construye el strip de tabs + paneles en el preview
  // ──────────────────────────────────────────────────────────────
  function buildPreview(page, state, activeIndex) {
    const stageEl = page.querySelector('#tab-preview-area');
    const panelEl = page.querySelector('#tab-preview-panel');
    if (!stageEl || !panelEl) return;

    const { count, icon, disabled } = state;
    const ns = 'pg'; // namespace para IDs únicos en el playground

    // Strip
    const strip = document.createElement('div');
    strip.className = 'mp-tabs';
    strip.setAttribute('role', 'tablist');
    strip.setAttribute('aria-label', 'Playground tabs');
    strip.setAttribute('data-tab-playground', 'true');

    for (let i = 0; i < count; i++) {
      const isActive   = i === activeIndex;
      const isDisabled = disabled === 'last' && i === count - 1;

      const btn = document.createElement('button');
      btn.className = 'mp-tab' + (isActive ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(isActive));
      btn.setAttribute('aria-controls', `${ns}-panel-${i}`);
      btn.setAttribute('id', `${ns}-tab-${i}`);
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
      btn.setAttribute('data-tab-pg-index', String(i));

      if (isDisabled) {
        btn.disabled = true;
        btn.removeAttribute('tabindex');
      }

      if (icon === 'left') {
        const iconEl = document.createElement('span');
        iconEl.className = 'material-symbols-rounded mp-tab__icon';
        iconEl.setAttribute('aria-hidden', 'true');
        iconEl.textContent = TAB_ICONS[i] || 'tab';
        btn.appendChild(iconEl);
      }

      btn.appendChild(document.createTextNode(TAB_LABELS[i] || `Tab ${i + 1}`));
      strip.appendChild(btn);
    }

    stageEl.replaceChildren(strip);

    // Panel content
    const activeLabel = TAB_LABELS[activeIndex] || `Tab ${activeIndex + 1}`;
    const content     = PANEL_CONTENT[activeIndex] || `Contenido del panel ${activeLabel}.`;
    panelEl.textContent = content;
  }

  // ──────────────────────────────────────────────────────────────
  // Genera el snippet de código para el playground
  // ──────────────────────────────────────────────────────────────
  function buildCode(state) {
    const { count, icon, disabled } = state;
    const lines = [];

    lines.push('<div class="mp-tabs" role="tablist" aria-label="…">');
    for (let i = 0; i < count; i++) {
      const isFirst    = i === 0;
      const isDisabled = disabled === 'last' && i === count - 1;
      const label      = TAB_LABELS[i] || `Tab ${i + 1}`;
      const iconName   = TAB_ICONS[i]  || 'tab';

      let inner = '';
      if (icon === 'left') {
        inner = `\n    <span class="material-symbols-rounded mp-tab__icon" aria-hidden="true">${iconName}</span>\n    ${label}\n  `;
      } else {
        inner = label;
      }

      const attrs = [
        'class="mp-tab' + (isFirst ? ' is-active' : '') + '"',
        'role="tab"',
        `aria-selected="${isFirst ? 'true' : 'false'}"`,
        `aria-controls="panel-${i}"`,
        `id="tab-${i}"`,
        ...(isFirst ? [] : ['tabindex="-1"']),
        ...(isDisabled ? ['disabled'] : [])
      ].join(' ');

      lines.push(`  <button ${attrs}>${inner}</button>`);
    }
    lines.push('</div>');
    lines.push('');
    for (let i = 0; i < count; i++) {
      const label = TAB_LABELS[i] || `Tab ${i + 1}`;
      const hiddenAttr = i === 0 ? '' : ' hidden';
      lines.push(`<div role="tabpanel" id="panel-${i}" aria-labelledby="tab-${i}" class="mp-tab-panel"${hiddenAttr}>`);
      lines.push(`  Contenido de ${label}...`);
      lines.push('</div>');
    }
    return lines.join('\n');
  }

  // ──────────────────────────────────────────────────────────────
  // Actualiza preview + código
  // ──────────────────────────────────────────────────────────────
  function renderPlayground(page, activeIndex) {
    if (!page) return;
    const state = stateFromPage(page);

    // Clamp activeIndex a rango válido
    const maxActive = state.disabled === 'last' ? state.count - 2 : state.count - 1;
    const idx = Math.min(activeIndex ?? 0, Math.max(0, maxActive));

    buildPreview(page, state, idx);

    const codeEl = page.querySelector('#tab-playground-code');
    if (codeEl) codeEl.textContent = buildCode(state);

    // Persiste índice activo
    page.dataset.tabActiveIndex = String(idx);
  }

  // ──────────────────────────────────────────────────────────────
  // Manejo de tabs de código estático
  // ──────────────────────────────────────────────────────────────
  function switchCodeTab(page, tabId) {
    if (!page) return;
    page.querySelectorAll('[data-tab-code-tab]').forEach((btn) => {
      const isActive = btn.dataset.tabCodeTab === tabId;
      btn.setAttribute('aria-selected', String(isActive));
      btn.classList.toggle('active', isActive);
    });
    page.querySelectorAll('[id^="tab-code-"]').forEach((pre) => {
      pre.classList.toggle('active', pre.id === `tab-code-${tabId}`);
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Utilidades de copia
  // ──────────────────────────────────────────────────────────────
  function copyText(text, btn) {
    const doWrite = () => {
      if (navigator.clipboard) return navigator.clipboard.writeText(text);
      const ta = document.createElement('textarea');
      ta.value = text;
      Object.assign(ta.style, { position: 'fixed', opacity: '0' });
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      return Promise.resolve();
    };
    doWrite().then(() => flashBtn(btn)).catch(() => {});
  }

  function flashBtn(btn) {
    if (!btn) return;
    const prev = btn.innerHTML;
    btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copiado';
    window.setTimeout(() => { btn.innerHTML = prev; }, 1400);
  }

  // ──────────────────────────────────────────────────────────────
  // Encuentra el root de la página de tabs
  // ──────────────────────────────────────────────────────────────
  function findPage(target) {
    return target?.closest('[data-component-doc="tabs"]')
      || document.querySelector('[data-component-doc="tabs"]');
  }

  // ──────────────────────────────────────────────────────────────
  // Inicializa los tabs del preview rápido (no-playground)
  // ──────────────────────────────────────────────────────────────
  function initPreviewTabs(page) {
    // Los tabs estáticos del preview y variantes también deben ser clicables
    page.querySelectorAll('.mp-tabs:not([data-tab-playground])').forEach((strip) => {
      const tabs   = Array.from(strip.querySelectorAll('[role="tab"]:not([disabled])'));
      const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls') || ''));

      tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
          tabs.forEach((t, j) => {
            const isActive = j === i;
            t.setAttribute('aria-selected', String(isActive));
            t.classList.toggle('is-active', isActive);
            t.setAttribute('tabindex', isActive ? '0' : '-1');
          });
          panels.forEach((panel, j) => {
            if (panel) panel.hidden = j !== i;
          });
        });
      });
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Delegación de eventos global
  // ──────────────────────────────────────────────────────────────
  function bindTabsDelegated() {
    if (document.documentElement.dataset.tabDocsDelegated === 'true') return;
    document.documentElement.dataset.tabDocsDelegated = 'true';

    document.addEventListener('click', (e) => {
      // Tab de playground clicado
      const pgTab = e.target.closest('[data-tab-pg-index]');
      if (pgTab) {
        const page = findPage(pgTab);
        if (!page) return;
        const idx = parseInt(pgTab.dataset.tabPgIndex || '0', 10);
        renderPlayground(page, idx);
        return;
      }

      // Tabs de código
      const codeTab = e.target.closest('[data-tab-code-tab]');
      if (codeTab) {
        switchCodeTab(findPage(codeTab), codeTab.dataset.tabCodeTab);
        return;
      }

      // Opciones de anatomía
      const anatomy = e.target.closest('[data-tab-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.tabAnatomy);
        return;
      }

      // Copiar playground
      const copyPg = e.target.closest('[data-tab-copy-playground]');
      if (copyPg) {
        const page = findPage(copyPg);
        const text = page?.querySelector('#tab-playground-code')?.textContent || '';
        copyText(text, copyPg);
        return;
      }

      // Copiar código estático
      const copyCode = e.target.closest('[data-tab-copy-code]');
      if (copyCode) {
        const page = findPage(copyCode);
        const activeCode = page?.querySelector('[id^="tab-code-"].active');
        copyText(activeCode?.textContent || '', copyCode);
        return;
      }
    });

    document.addEventListener('change', (e) => {
      if (e.target.matches('[data-tab-anatomy-toggle]')) {
        const nextKind = e.target.matches('[data-tab-anatomy-toggle="icon"]') ? (e.target.checked ? 'icon' : 'text') : undefined;
        renderAnatomy(findPage(e.target), nextKind);
        return;
      }

      if (e.target.matches('[data-tab-control]')) {
        const page = findPage(e.target);
        const currentIdx = parseInt(page?.dataset?.tabActiveIndex || '0', 10);
        renderPlayground(page, currentIdx);
      }
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Inicialización de la página
  // ──────────────────────────────────────────────────────────────
  function initTabsDoc(root = document) {
    const page = root.querySelector('[data-component-doc="tabs"]');
    if (!page || page.dataset.tabInitialized === 'true') return;

    renderAnatomy(page);
    renderPlayground(page, 0);
    initPreviewTabs(page);
    page.dataset.tabInitialized = 'true';
  }

  // ──────────────────────────────────────────────────────────────
  // Sincronización de tema (no requiere acción extra)
  // ──────────────────────────────────────────────────────────────
  function syncTheme() {}

  return { initTabsDoc, bindTabsDelegated, renderAnatomy, syncTheme };
})();

window.tabsDocs = tabsDocs;

// ── Boot automático ───────────────────────────────────────────
(function bootTabsDocs() {
  tabsDocs.bindTabsDelegated();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tabsDocs.initTabsDoc(document));
  } else {
    tabsDocs.initTabsDoc(document);
  }
  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => tabsDocs.initTabsDoc(document));
    });
  }
})();

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => tabsDocs.initTabsDoc(document));
});
