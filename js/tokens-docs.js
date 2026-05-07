import {
  COLOR_TOKENS,
  TEXT_TOKENS,
  TABLE_TOKENS,
  SPACING_TOKENS,
  BORDER_RADIUS_TOKENS,
  SHADOW_TOKENS
} from './tokens.js';

const semanticTokenDocs = (() => {
  const colorTokens = COLOR_TOKENS
    .filter(([name]) => name.startsWith('use/'))
    .map(([name, cssVar, value]) => [name, cssVar, value, 'Color semántico de uso.']);

  const tables = {
    'tokens/colores': ['table-color-tokens', colorTokens],
    'tokens-colores': ['table-color-tokens', colorTokens],
    'tokens/espaciado': ['table-spacing-tokens', SPACING_TOKENS],
    'tokens-espaciado': ['table-spacing-tokens', SPACING_TOKENS],
    'tokens/border-radius': ['table-radius-tokens', BORDER_RADIUS_TOKENS],
    'tokens-border-radius': ['table-radius-tokens', BORDER_RADIUS_TOKENS],
    'tokens/sombras': ['table-shadow-tokens', SHADOW_TOKENS],
    'tokens-sombras': ['table-shadow-tokens', SHADOW_TOKENS],
    'tokens/texto': ['table-text-tokens', TEXT_TOKENS],
    'tokens-texto': ['table-text-tokens', TEXT_TOKENS],
    'tokens/tablas': ['table-table-tokens', TABLE_TOKENS],
    'tokens-tablas': ['table-table-tokens', TABLE_TOKENS]
  };

  function escape(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function copy(text) {
    navigator.clipboard?.writeText(text);
    if (typeof window.showToast === 'function') window.showToast(`Copiado: ${text}`);
  }

  function swatch(value) {
    const safe = escape(value);
    const isShadow = safe.includes('rgba') && safe.includes('rem');
    if (isShadow) {
      return `<span class="token-swatch-inline" style="background:var(--use-surface-white,#fff);box-shadow:${safe}"></span>`;
    }
    return `<span class="token-swatch-inline" style="background:${safe}"></span>`;
  }

  function renderTokenTable(tableId, tokens) {
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
        ${tokens.map(([name, cssVar, value, desc = '']) => `
          <tr>
            <td><span style="font-family:var(--font-code);font-size:12px">${escape(name)}</span></td>
            <td>
              <div class="token-name-cell">
                ${swatch(value)}
                <code style="font-family:var(--font-code);font-size:12px;color:var(--ui-accent)">${escape(cssVar)}</code>
              </div>
            </td>
            <td><code style="font-family:var(--font-code);font-size:12px">${escape(value)}</code></td>
            <td style="color:var(--ui-text-muted);font-size:12px">${escape(desc)}</td>
            <td><button class="copy-token-btn" type="button" data-semantic-token-copy="${escape(cssVar)}">Copiar</button></td>
          </tr>
        `).join('')}
      </tbody>
    `;
  }

  function init(root = document, sectionId = location.hash.slice(1)) {
    const current = tables[sectionId] || Object.values(tables).find(([tableId]) => root.getElementById?.(tableId) || document.getElementById(tableId));
    if (!current) return;
    renderTokenTable(current[0], current[1]);
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('click', (event) => {
      const button = event.target.closest('[data-semantic-token-copy]');
      if (button) copy(button.dataset.semanticTokenCopy);
    });

    document.addEventListener('component-docs:init', (event) => {
      init(document, event.detail?.section);
    });
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => init()));
    window.addEventListener('hashchange', () => requestAnimationFrame(() => init()));
  }

  return { init };
})();

if (typeof window !== 'undefined') window.semanticTokenDocs = semanticTokenDocs;
