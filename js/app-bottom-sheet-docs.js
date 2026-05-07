const appBottomSheetDocs = (() => {
  const listItems = ['Dermatología', 'Endocrinología', 'Gastroenterología', 'Neurología', 'Oftalmología', 'Oncología', 'Pediatra', 'Psiquiatra', 'Traumatólogo'];

  const exportCss = `/* Bottom Sheet App - Compensar Design System
   Fuente: core/components/app/_bottom-sheet.scss */

.mp-bottom-sheet { width:min(100%,390px); display:flex; flex-direction:column; max-height:min(88vh,560px); padding-bottom:16px; overflow:hidden; border-radius:16px 16px 0 0; background:var(--use-surface-white,#fff); color:var(--use-text-primary,#111); box-shadow:2px 5px 16px rgba(0,0,0,.15); }
.mp-bottom-sheet__header { width:100%; min-height:36px; display:grid; place-items:center; padding:16px; border:0; background:transparent; }
.mp-bottom-sheet__handle { width:32px; height:4px; border-radius:100px; background:#79747e; }
.mp-bottom-sheet__content { display:grid; gap:12px; min-height:0; }
.mp-bottom-sheet__title { margin:0; padding:0 12px; font-size:18px; font-weight:700; line-height:1.5; text-align:center; }
.mp-bottom-sheet__search { min-height:56px; display:flex; align-items:center; gap:10px; margin:0 12px; padding:0 16px; border:1px solid var(--use-border-subtle,#e0e0e0); border-radius:16px; background:var(--use-surface-white,#fff); }
.mp-bottom-sheet__search input { min-width:0; flex:1; border:0; outline:0; background:transparent; color:var(--use-text-primary,#111); font:400 16px/1 Roboto,sans-serif; letter-spacing:.012em; }
.mp-bottom-sheet__search input::placeholder { color:var(--use-text-tertiary,#666); opacity:1; }
.mp-bottom-sheet__list { position:relative; max-height:336px; padding-right:8px; overflow:hidden; }
.mp-bottom-sheet__option { width:100%; min-height:56px; display:flex; align-items:center; padding:16px; border:0; background:var(--use-surface-white,#fff); color:var(--use-text-primary,#111); font:400 16px/1.5 Roboto,sans-serif; letter-spacing:.01em; text-align:left; cursor:pointer; }
.mp-bottom-sheet__option:hover, .mp-bottom-sheet__option:focus-visible, .mp-bottom-sheet__option.is-hover, .mp-bottom-sheet__option.is-focus { background:var(--use-surface-theme-gray-5,#f8f7f7); outline:none; }
.mp-bottom-sheet__option.is-selected { font-weight:700; }
.mp-bottom-sheet__scroll { position:absolute; right:0; top:16px; width:8px; height:150px; border-radius:12px; background:var(--use-text-tertiary,#666); }
.mp-bottom-sheet__section { display:grid; gap:8px; padding:8px 12px; }
.mp-bottom-sheet__section-title { margin:0; font-size:16px; font-weight:700; line-height:1.5; }
.mp-bottom-sheet__chips { display:flex; flex-wrap:wrap; gap:8px; }
.mp-bottom-sheet__chip { min-height:29px; padding:4px 12px; border:0; border-radius:16px; background:var(--mp-bs-chip-bg,#f3f0fa); color:var(--mp-bs-chip-text,#5d4992); font:400 14px/1.5 Roboto,sans-serif; white-space:nowrap; cursor:pointer; }
.mp-bottom-sheet__chip[aria-pressed="true"], .mp-bottom-sheet__chip.is-selected { background:var(--mp-bs-chip-active-bg,#775ebb); color:#fff; }
.mp-bottom-sheet__actions { display:grid; justify-items:center; gap:12px; padding:12px 16px 0; }
.mp-bottom-sheet__primary { min-height:48px; padding:14px 24px; border:0; border-radius:24px; background:linear-gradient(180deg,#ff6600 0%,#e63f0c 100%); color:#fff; font:700 16px/1 Roboto,sans-serif; }
.mp-bottom-sheet__secondary { min-height:48px; padding:14px 8px; border:0; border-radius:24px; background:transparent; color:var(--use-primary-default,#ff6600); font:700 16px/1 Roboto,sans-serif; }`;

  const exportSass = `// Bottom Sheet App - core/components/app/_bottom-sheet.scss
$mp-bottom-sheet-width: 390px;
$mp-bottom-sheet-radius: 16px;
$mp-bottom-sheet-item-height: 56px;
$mp-bottom-sheet-handle-width: 32px;
$mp-bottom-sheet-handle-height: 4px;

.mp-bottom-sheet {
  width: min(100%, $mp-bottom-sheet-width);
  display: flex;
  flex-direction: column;
  max-height: min(88vh, 560px);
  padding-bottom: var(--space-16);
  overflow: hidden;
  border-radius: $mp-bottom-sheet-radius $mp-bottom-sheet-radius 0 0;
  background: var(--use-surface-white);
  color: var(--use-text-primary);
  box-shadow: 2px 5px 16px rgba(0, 0, 0, .15);
}`;

  function findPage(node) {
    return node?.closest?.('[data-component-doc="app-bottom-sheet"]') || document.querySelector('[data-component-doc="app-bottom-sheet"]');
  }

  function escapeHtml(value) {
    return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }

  function listSheet(config = {}) {
    const placeholder = escapeHtml(config.query || 'Buscar');
    const state = config.state || '';
    const options = listItems.slice(0, config.compact ? 4 : 9).map((item, index) => {
      const stateClass = (state === 'hover' && index === 1) ? ' is-hover' : (state === 'focus' && index === 1) ? ' is-focus' : (state === 'selected' && index === 1) ? ' is-selected' : '';
      return `<button class="mp-bottom-sheet__option${stateClass}" type="button">${item}</button>`;
    }).join('');
    return `<div class="mp-bottom-sheet mp-bottom-sheet--list" role="dialog" aria-modal="true" aria-label="Seleccionar especialidad">
  <button class="mp-bottom-sheet__header" type="button" aria-label="Arrastrar o cerrar">
    <span class="mp-bottom-sheet__handle" aria-hidden="true"></span>
  </button>
  <div class="mp-bottom-sheet__content">
    <label class="mp-bottom-sheet__search">
      <input type="search" placeholder="${placeholder}" aria-label="Buscar">
      <i class="icon icon-magnifying-glass" aria-hidden="true"></i>
    </label>
    <div class="mp-bottom-sheet__list">
      ${options}
      <span class="mp-bottom-sheet__scroll" aria-hidden="true"></span>
    </div>
  </div>
</div>`;
  }

  function chip(label, selected = false) {
    return `<button class="mp-bottom-sheet__chip${selected ? ' is-selected' : ''}" type="button" aria-pressed="${selected ? 'true' : 'false'}">${escapeHtml(label)}</button>`;
  }

  function filtersSheet(config = {}) {
    const title = escapeHtml(config.title || 'Filtrar por');
    return `<div class="mp-bottom-sheet mp-bottom-sheet--filters" role="dialog" aria-modal="true" aria-labelledby="bottom-sheet-filter-title">
  <button class="mp-bottom-sheet__header" type="button" aria-label="Arrastrar o cerrar">
    <span class="mp-bottom-sheet__handle" aria-hidden="true"></span>
  </button>
  <div class="mp-bottom-sheet__content">
    <h2 class="mp-bottom-sheet__title" id="bottom-sheet-filter-title">${title}</h2>
    <section class="mp-bottom-sheet__section" aria-labelledby="filter-attention-title">
      <h3 class="mp-bottom-sheet__section-title" id="filter-attention-title">Tipo de atención</h3>
      <div class="mp-bottom-sheet__chips">${chip('Presencial', true)}${chip('Virtual')}</div>
    </section>
    <section class="mp-bottom-sheet__section" aria-labelledby="filter-status-title">
      <h3 class="mp-bottom-sheet__section-title" id="filter-status-title">Estado de la cita</h3>
      <div class="mp-bottom-sheet__chips">${chip('Próximas', true)}${chip('Pasadas', true)}${chip('Canceladas', true)}${chip('Reprogramadas', true)}</div>
    </section>
    <section class="mp-bottom-sheet__section" aria-labelledby="filter-sort-title">
      <h3 class="mp-bottom-sheet__section-title" id="filter-sort-title">Ordenar</h3>
      <div class="mp-bottom-sheet__chips">${chip('Cita más cercana', true)}${chip('Centro médico')}</div>
    </section>
  </div>
  <div class="mp-bottom-sheet__actions">
    <button class="mp-bottom-sheet__primary" type="button">Aplicar</button>
    <button class="mp-bottom-sheet__secondary" type="button">Limpiar</button>
  </div>
</div>`;
  }

  function stateFromPage(page) {
    return {
      variant: page.querySelector('[data-app-bottom-sheet-control="variant"]')?.value || 'list',
      title: page.querySelector('[data-app-bottom-sheet-control="title"]')?.value || 'Filtrar por',
      query: page.querySelector('[data-app-bottom-sheet-control="query"]')?.value || 'Buscar',
      theme: page.querySelector('[data-app-bottom-sheet-control="theme"]')?.value || 'light'
    };
  }

  function buildSheet(config = {}) {
    return config.variant === 'filters' ? filtersSheet(config) : listSheet(config);
  }

  function renderInto(container, config = {}) {
    if (container) container.innerHTML = buildSheet(config);
  }

  function renderAnatomy(page, variant = 'list') {
    if (!page) return;
    page.querySelectorAll('[data-app-bottom-sheet-anatomy]').forEach((button) => {
      const active = button.dataset.appBottomSheetAnatomy === variant;
      button.setAttribute('aria-pressed', String(active));
    });
    renderInto(page.querySelector('#app-bottom-sheet-anatomy-preview'), { variant });
  }

  function renderPlayground(page) {
    if (!page) return;
    const state = stateFromPage(page);
    const shell = page.querySelector('#app-bottom-sheet-preview-shell');
    if (shell) shell.dataset.theme = state.theme;
    renderInto(page.querySelector('#app-bottom-sheet-preview'), state);
    renderCode(page);
  }

  function renderDemos(page) {
    page.querySelectorAll('[data-app-bottom-sheet-demo]').forEach((node) => renderInto(node, { variant: node.dataset.appBottomSheetDemo, compact: true }));
    page.querySelectorAll('[data-app-bottom-sheet-state]').forEach((node) => renderInto(node, { variant: 'list', compact: true, state: node.dataset.appBottomSheetState }));
    page.querySelectorAll('[data-app-bottom-sheet-mode]').forEach((node) => renderInto(node, { variant: 'filters', title: 'Filtrar por' }));
  }

  function activeCodeTab(page) {
    return page.querySelector('[data-app-bottom-sheet-code-tab].active')?.dataset.appBottomSheetCodeTab || 'html';
  }

  function codeFor(tab, page) {
    if (tab === 'css') return exportCss;
    if (tab === 'sass') return exportSass;
    return buildSheet(stateFromPage(page));
  }

  function renderCode(page) {
    if (!page) return;
    ['html', 'css', 'sass'].forEach((tab) => {
      const pre = page.querySelector(`#app-bottom-sheet-code-${tab}`);
      if (pre) pre.textContent = codeFor(tab, page);
    });
  }

  function switchCodeTab(page, tab = 'html') {
    if (!page) return;
    page.querySelectorAll('[data-app-bottom-sheet-code-tab]').forEach((button) => {
      const active = button.dataset.appBottomSheetCodeTab === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    page.querySelectorAll('#app-bottom-sheet-code-html, #app-bottom-sheet-code-css, #app-bottom-sheet-code-sass').forEach((pre) => {
      pre.classList.toggle('active', pre.id === `app-bottom-sheet-code-${tab}`);
    });
    renderCode(page);
  }

  function downloadFile(name, text, type) {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function copyText(text, button) {
    if (!button || !text) return;
    navigator.clipboard?.writeText(text).then(() => {
      const original = button.innerHTML;
      button.innerHTML = '<i class="icon icon-check icon-16" aria-hidden="true"></i> Copiado';
      window.setTimeout(() => { button.innerHTML = original; }, 1500);
    });
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.appBottomSheetDocsDelegated === 'true') return;
    document.documentElement.dataset.appBottomSheetDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-app-bottom-sheet-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.appBottomSheetAnatomy);
        return;
      }
      const tab = event.target.closest('[data-app-bottom-sheet-code-tab]');
      if (tab) {
        switchCodeTab(findPage(tab), tab.dataset.appBottomSheetCodeTab);
        return;
      }
      const copy = event.target.closest('[data-app-bottom-sheet-copy-code]');
      if (copy) {
        const page = findPage(copy);
        const active = activeCodeTab(page);
        copyText(codeFor(active, page), copy);
        return;
      }
      const download = event.target.closest('[data-app-bottom-sheet-download]');
      if (download) {
        const page = findPage(download);
        const type = download.dataset.appBottomSheetDownload;
        if (type === 'html') downloadFile('mp-bottom-sheet.html', codeFor('html', page), 'text/html');
        if (type === 'css') downloadFile('mp-bottom-sheet.css', exportCss, 'text/css');
        if (type === 'sass') downloadFile('mp-bottom-sheet.scss', exportSass, 'text/x-scss');
      }
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-app-bottom-sheet-control]')) renderPlayground(findPage(event.target));
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-app-bottom-sheet-control]')) renderPlayground(findPage(event.target));
    });
  }

  function initAppBottomSheetDoc(root = document) {
    const page = root.querySelector('[data-component-doc="app-bottom-sheet"]');
    if (!page || page.dataset.appBottomSheetInitialized === 'true') return;
    renderAnatomy(page, 'list');
    renderPlayground(page);
    renderDemos(page);
    switchCodeTab(page, 'html');
    page.dataset.appBottomSheetInitialized = 'true';
  }

  return { initAppBottomSheetDoc, bindDelegatedEvents };
})();

window.appBottomSheetDocs = appBottomSheetDocs;

function bootAppBottomSheetDocs() {
  appBottomSheetDocs.bindDelegatedEvents();
  appBottomSheetDocs.initAppBottomSheetDoc(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => appBottomSheetDocs.initAppBottomSheetDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootAppBottomSheetDocs);
} else {
  bootAppBottomSheetDocs();
}
