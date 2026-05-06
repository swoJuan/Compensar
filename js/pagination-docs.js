const paginationDocs = (() => {
  const exportMeta = {
    component: 'Paginacion',
    source: 'core/components/web/_pagination.scss',
    figma: {
      fileKey: '1zVGMpzqBgiBUqhmfFEAoT',
      nodeId: '4610:71122'
    },
    tokens: {
      itemMinWidth: '44px',
      itemHeight: '48px',
      padding: '16px',
      gap: '24px',
      compactGap: '8px',
      radius: '8px',
      text: 'Roboto Bold 16px / 100%, letter-spacing 2.2%'
    },
    classes: [
      '.mp-pagination',
      '.mp-pagination__list',
      '.mp-pagination__item',
      '.mp-pagination__link',
      '.mp-pagination__ellipsis',
      '.mp-pagination--compact',
      '.mp-pagination--center',
      '.mp-pagination--start'
    ],
    states: ['default', 'active', 'hover', 'focus', 'disabled']
  };

  const paginationExportCss = `/* mp-pagination - Compensar Design System
   Fuente: core/components/web/_pagination.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4610:71122
   Estilos planos para dummy/demo. */

.mp-pagination {
  --mp-pagination-gap: 24px;
  --mp-pagination-item-min: 44px;
  --mp-pagination-item-height: 48px;
  --mp-pagination-padding: 16px;
  --mp-pagination-radius: 8px;
  --mp-pagination-text: var(--use-primary-default, #ff6600);
  --mp-pagination-active-bg: var(--use-primary-default, #ff6600);
  --mp-pagination-active-text: var(--use-text-on-dark-primary, #ffffff);
  --mp-pagination-disabled-bg: var(--use-surface-theme-gray-5, #f8f7f7);
  --mp-pagination-disabled-text: var(--use-text-tertiary, #666666);
  --mp-pagination-focus: var(--use-text-primary, #111111);
  display: flex;
  flex-wrap: wrap;
  gap: var(--mp-pagination-gap);
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 16px 0 0;
  color: var(--mp-pagination-text);
}

.mp-pagination__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mp-pagination-gap);
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.mp-pagination__item {
  min-width: var(--mp-pagination-item-min);
  min-height: var(--mp-pagination-item-height);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.mp-pagination__link,
.mp-pagination__ellipsis {
  min-width: var(--mp-pagination-item-min);
  min-height: var(--mp-pagination-item-height);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--mp-pagination-padding);
  border: 2px solid transparent;
  border-radius: var(--mp-pagination-radius);
  background: transparent;
  color: var(--mp-pagination-text);
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.022em;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}

.mp-pagination__link {
  cursor: pointer;
  transition: background-color 0.16s ease, border-color 0.16s ease, color 0.16s ease;
}

.mp-pagination__link:hover,
.mp-pagination__link.mp-pagination__link--is-hover,
.mp-pagination__link[aria-current="page"],
.mp-pagination__link.is-active {
  background: var(--mp-pagination-active-bg);
  color: var(--mp-pagination-active-text);
}

.mp-pagination__link:focus-visible,
.mp-pagination__link.mp-pagination__link--is-focus {
  background: var(--mp-pagination-active-bg);
  border-color: var(--mp-pagination-focus);
  color: var(--mp-pagination-active-text);
  outline: none;
}

.mp-pagination__link[aria-disabled="true"],
.mp-pagination__link:disabled,
.mp-pagination__link.is-disabled {
  background: var(--mp-pagination-disabled-bg);
  color: var(--mp-pagination-disabled-text);
  cursor: not-allowed;
  pointer-events: none;
}

.mp-pagination__ellipsis { color: var(--use-text-tertiary, #666666); }
.mp-pagination__icon { font-size: 16px; line-height: 1; }
.mp-pagination--compact { --mp-pagination-gap: 8px; }
.mp-pagination--center { justify-content: center; }
.mp-pagination--start { justify-content: flex-start; }

[data-theme="dark"] .mp-pagination {
  --mp-pagination-text: var(--use-primary-default-dark, #ff9d5c);
  --mp-pagination-active-bg: var(--use-primary-default-dark, #ff9d5c);
  --mp-pagination-active-text: var(--base-neutral-100-negro, #111111);
  --mp-pagination-disabled-bg: var(--base-neutral-80, #4d4746);
  --mp-pagination-disabled-text: var(--base-neutral-40, #a4a4a4);
  --mp-pagination-focus: var(--base-neutral-10, #f5f5f5);
}

[data-theme="high-contrast"] .mp-pagination {
  --mp-pagination-text: var(--use-primary-default, #ffff00);
  --mp-pagination-active-bg: var(--use-primary-default, #ffff00);
  --mp-pagination-active-text: var(--use-text-inverse, #000000);
  --mp-pagination-disabled-bg: var(--base-neutral-black, #000000);
  --mp-pagination-disabled-text: var(--base-neutral-white, #ffffff);
  --mp-pagination-focus: var(--base-neutral-white, #ffffff);
}

[data-theme="high-contrast"] .mp-pagination__link[aria-disabled="true"],
[data-theme="high-contrast"] .mp-pagination__link:disabled,
[data-theme="high-contrast"] .mp-pagination__link.is-disabled {
  border-color: var(--base-neutral-white, #ffffff);
}

@media (max-width: 575.98px) {
  .mp-pagination {
    --mp-pagination-gap: 8px;
    justify-content: center;
  }

  .mp-pagination__link,
  .mp-pagination__ellipsis {
    padding-inline: 12px;
  }
}`;

  const paginationExportScss = `// mp-pagination - Compensar Design System
// Fuente productiva: core/components/web/_pagination.scss
// Sass plano para dummy/demo.

$mp-pagination-gap: 24px;
$mp-pagination-compact-gap: 8px;
$mp-pagination-item-min: 44px;
$mp-pagination-item-height: 48px;
$mp-pagination-padding: 16px;
$mp-pagination-radius: 8px;

${paginationExportCss}`;

  function iconMarkup(name, size = 16, extraClass = '') {
    return `<i class="icon icon-${name} icon-${size}${extraClass ? ` ${extraClass}` : ''}" aria-hidden="true"></i>`;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(Number(value) || min, min), max);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));
  }

  function paginationRange(current, total, maxVisible) {
    const safeTotal = clamp(total, 1, 99);
    const safeCurrent = clamp(current, 1, safeTotal);
    const visible = clamp(maxVisible, 5, 7);
    if (safeTotal <= visible) return Array.from({ length: safeTotal }, (_, index) => index + 1);

    const siblings = visible === 7 ? 1 : 0;
    const left = Math.max(safeCurrent - siblings, 2);
    const right = Math.min(safeCurrent + siblings, safeTotal - 1);
    const pages = [1];
    if (left > 2) pages.push('ellipsis-start');
    for (let page = left; page <= right; page += 1) pages.push(page);
    if (right < safeTotal - 1) pages.push('ellipsis-end');
    pages.push(safeTotal);
    return pages;
  }

  function stateFromPage(page) {
    const total = clamp(page.querySelector('[data-pagination-control="total"]')?.value || 10, 1, 99);
    return {
      page: clamp(page.querySelector('[data-pagination-control="page"]')?.value || 2, 1, total),
      total,
      visible: Number(page.querySelector('[data-pagination-control="visible"]')?.value || 5),
      align: page.querySelector('[data-pagination-control="align"]')?.value || 'end',
      theme: page.querySelector('[data-pagination-control="theme"]')?.value || 'light',
      label: page.querySelector('[data-pagination-control="label"]')?.value || 'Paginación de resultados',
      edges: page.querySelector('[data-pagination-control="edges"]')?.checked ?? true,
      compact: page.querySelector('[data-pagination-control="compact"]')?.checked || false
    };
  }

  function paginationClass(state = {}) {
    const classes = ['mp-pagination'];
    if (state.compact) classes.push('mp-pagination--compact');
    if (state.align === 'center') classes.push('mp-pagination--center');
    if (state.align === 'start') classes.push('mp-pagination--start');
    return classes.join(' ');
  }

  function pageItemHtml(content, attrs = '') {
    return `    <li class="mp-pagination__item">
      <button type="button" class="mp-pagination__link"${attrs}>${content}</button>
    </li>`;
  }

  function paginationHtml(state) {
    const current = clamp(state.page, 1, state.total);
    const total = clamp(state.total, 1, 99);
    const pages = paginationRange(current, total, state.visible);
    const items = [];

    if (state.edges) {
      const disabled = current === 1 ? ' disabled aria-disabled="true"' : '';
      items.push(pageItemHtml(iconMarkup('arrow-left', 16, 'mp-pagination__icon'), `${disabled} aria-label="Página anterior"`));
    }

    pages.forEach((page) => {
      if (typeof page === 'string') {
        items.push(`    <li class="mp-pagination__item">
      <span class="mp-pagination__ellipsis" aria-hidden="true">...</span>
    </li>`);
        return;
      }
      const active = page === current ? ' aria-current="page"' : '';
      items.push(pageItemHtml(String(page), `${active} aria-label="Página ${page}"`));
    });

    if (state.edges) {
      const disabled = current === total ? ' disabled aria-disabled="true"' : '';
      items.push(pageItemHtml(iconMarkup('arrow-right', 16, 'mp-pagination__icon'), `${disabled} aria-label="Página siguiente"`));
    }

    return `<nav class="${paginationClass(state)}" aria-label="${escapeHtml(state.label)}">
  <ul class="mp-pagination__list">
${items.join('\n')}
  </ul>
</nav>`;
  }

  function paginationNode(state) {
    const template = document.createElement('template');
    template.innerHTML = paginationHtml(state).trim();
    return template.content.firstElementChild;
  }

  function itemNode(stateName = 'default', compact = true) {
    const template = document.createElement('template');
    const attrs = stateName === 'active'
      ? ' aria-current="page" aria-label="Página 2"'
      : stateName === 'hover'
        ? ' aria-label="Página 2"'
        : stateName === 'focus'
          ? ' aria-label="Página 2"'
          : stateName === 'disabled'
            ? ' disabled aria-disabled="true" aria-label="Página 2 no disponible"'
            : ' aria-label="Página 2"';
    const linkClasses = ['mp-pagination__link'];
    if (stateName === 'active') linkClasses.push('is-active');
    if (stateName === 'hover') linkClasses.push('mp-pagination__link--is-hover');
    if (stateName === 'focus') linkClasses.push('mp-pagination__link--is-focus');
    if (stateName === 'disabled') linkClasses.push('is-disabled');
    template.innerHTML = `<nav class="mp-pagination${compact ? ' mp-pagination--compact mp-pagination--center' : ' mp-pagination--center'}" aria-label="Estado de paginación">
  <ul class="mp-pagination__list">
    <li class="mp-pagination__item">
      <button type="button" class="${linkClasses.join(' ')}"${attrs}>2</button>
    </li>
  </ul>
</nav>`;
    return template.content.firstElementChild;
  }

  function renderAnatomy(page, stateName) {
    if (!page) return;
    const active = stateName || page.querySelector('[data-pagination-anatomy][aria-pressed="true"]')?.dataset.paginationAnatomy || 'default';
    const preview = page.querySelector('#pagination-anatomy-preview');
    const showLabels = page.querySelector('[data-pagination-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-pagination-toggle="measures"]')?.checked ?? true;
    const compact = page.querySelector('[data-pagination-toggle="compact"]')?.checked || false;

    page.querySelectorAll('[data-pagination-anatomy]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.paginationAnatomy === active));
    });
    page.querySelectorAll('.pagination-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.pagination-measure').forEach((item) => { item.hidden = !showMeasures; });
    preview?.replaceChildren(itemNode(active, compact));
  }

  function renderPlayground(page) {
    if (!page) return;
    const state = stateFromPage(page);
    const preview = page.querySelector('#pagination-playground-preview');
    const output = page.querySelector('#pagination-code-output');
    const tab = page.querySelector('[data-pagination-code-tab][aria-selected="true"]')?.dataset.paginationCodeTab || 'html';

    if (preview) {
      preview.dataset.theme = state.theme;
      preview.replaceChildren(paginationNode(state));
    }

    if (output) {
      if (tab === 'css') output.textContent = paginationExportCss;
      else if (tab === 'scss') output.textContent = paginationExportScss;
      else output.textContent = paginationHtml(state);
    }
  }

  function renderExamples(page) {
    page.querySelector('[data-pagination-demo="good"]')?.replaceChildren(paginationNode({
      page: 3,
      total: 12,
      visible: 5,
      align: 'center',
      label: 'Ejemplo correcto',
      edges: true,
      compact: true
    }));
    page.querySelector('[data-pagination-demo="bad"]')?.replaceChildren(paginationNode({
      page: 1,
      total: 4,
      visible: 7,
      align: 'center',
      label: 'Ejemplo incorrecto',
      edges: true,
      compact: true
    }));
  }

  function renderStates(page) {
    page.querySelectorAll('[data-pagination-state-demo]').forEach((slot) => {
      slot.replaceChildren(itemNode(slot.dataset.paginationStateDemo || 'default', true));
    });
  }

  function renderModes(page) {
    page.querySelectorAll('[data-pagination-mode-demo]').forEach((slot) => {
      const theme = slot.dataset.paginationModeDemo || 'light';
      slot.closest('[data-theme]')?.setAttribute('data-theme', theme);
      slot.replaceChildren(paginationNode({
        page: 2,
        total: 5,
        visible: 5,
        align: 'center',
        label: `Paginación ${theme}`,
        edges: false,
        compact: true
      }));
    });
  }

  function downloadAsset(type, trigger) {
    const assets = {
      css: ['mp-pagination-core.css', 'text/css', paginationExportCss],
      scss: ['_mp-pagination-core.scss', 'text/x-scss', paginationExportScss],
      json: ['mp-pagination.tokens.json', 'application/json', `${JSON.stringify(exportMeta, null, 2)}\n`]
    };
    const asset = assets[type];
    if (!asset) return;
    const blob = new Blob([asset[2]], { type: `${asset[1]};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = asset[0];
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    flashButton(trigger, 'Descargado');
  }

  function copyText(text, button) {
    const write = navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject(new Error('Clipboard unavailable'));
    write.then(() => flashButton(button, 'Copiado')).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      flashButton(button, 'Copiado');
    });
  }

  function flashButton(button, label) {
    if (!button) return;
    const original = button.innerHTML;
    button.innerHTML = `${iconMarkup('check', 16)}${label}`;
    window.setTimeout(() => { button.innerHTML = original; }, 1400);
  }

  function findPage(target) {
    return target?.closest('[data-component-doc="pagination"]') || document.querySelector('[data-component-doc="pagination"]');
  }

  function initPaginationDoc(root = document) {
    const page = root.querySelector('[data-component-doc="pagination"]');
    if (!page || page.dataset.paginationInitialized === 'true') return;
    renderAnatomy(page, 'default');
    renderPlayground(page);
    renderExamples(page);
    renderStates(page);
    renderModes(page);
    page.dataset.paginationInitialized = 'true';
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.paginationDocsDelegated === 'true') return;
    document.documentElement.dataset.paginationDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-pagination-anatomy]');
      const codeTab = event.target.closest('[data-pagination-code-tab]');
      const copyCode = event.target.closest('[data-copy-pagination-code]');
      const download = event.target.closest('[data-pagination-download]');

      if (anatomy) renderAnatomy(findPage(anatomy), anatomy.dataset.paginationAnatomy);
      if (codeTab) {
        const page = findPage(codeTab);
        page.querySelectorAll('[data-pagination-code-tab]').forEach((tab) => {
          const active = tab === codeTab;
          tab.setAttribute('aria-selected', String(active));
          tab.classList.toggle('active', active);
        });
        renderPlayground(page);
      }
      if (copyCode) copyText(findPage(copyCode).querySelector('#pagination-code-output')?.textContent || '', copyCode);
      if (download) downloadAsset(download.dataset.paginationDownload, download);
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-pagination-control]')) renderPlayground(findPage(event.target));
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-pagination-control]')) renderPlayground(findPage(event.target));
      if (event.target.matches('[data-pagination-toggle]')) renderAnatomy(findPage(event.target));
    });
  }

  function syncTheme(theme) {
    const page = document.querySelector('[data-component-doc="pagination"]');
    if (!page) return;
    const themeControl = page.querySelector('[data-pagination-control="theme"]');
    if (themeControl) themeControl.value = theme;
    renderPlayground(page);
  }

  return { initPaginationDoc, bindDelegatedEvents, syncTheme };
})();

window.paginationDocs = paginationDocs;

function bootPaginationDocs() {
  paginationDocs.bindDelegatedEvents();
  paginationDocs.initPaginationDoc(document);
}

if (document.documentElement.dataset.paginationDocsThemeSync !== 'true') {
  document.documentElement.dataset.paginationDocsThemeSync = 'true';
  document.addEventListener('ds:theme-change', (event) => {
    const theme = event?.detail?.theme || document.documentElement.getAttribute('data-theme') || 'light';
    paginationDocs.syncTheme(theme);
  });
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => paginationDocs.initPaginationDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootPaginationDocs);
} else {
  bootPaginationDocs();
}
