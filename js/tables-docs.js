const tablesDocs = (() => {
  const variants = {
    basic: { label: 'Basica', className: '' },
    striped: { label: 'Striped', className: 'table-striped' },
    hover: { label: 'Hover', className: 'table-hover' },
    bordered: { label: 'Bordered', className: 'table-bordered' },
    compact: { label: 'Compacta', className: 'table-sm mp-table--compact' }
  };

  const rows = [
    { date: '25/08/2023', status: 'En tramite', statusClass: 'mp-badge--warning', file: '-' },
    { date: '25/08/2023', status: 'Gestionado', statusClass: 'mp-badge--success', file: 'certificado.pdf' },
    { date: '26/08/2023', status: 'Pendiente', statusClass: 'mp-badge--neutral', file: '-' },
    { date: '27/08/2023', status: 'Gestionado', statusClass: 'mp-badge--success', file: 'historial.pdf' }
  ];

  const defaultState = {
    variant: 'striped',
    type: 'actions',
    rows: 3,
    theme: 'light',
    pagination: true
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    }[char]));
  }

  function iconMarkup(name, size = 16) {
    return `<i class="icon icon-${name} icon-${size}" aria-hidden="true"></i>`;
  }

  function stateFromPage(page) {
    return {
      variant: page.querySelector('[data-table-control="variant"]')?.value || defaultState.variant,
      type: page.querySelector('[data-table-control="type"]')?.value || defaultState.type,
      rows: Number(page.querySelector('[data-table-control="rows"]')?.value || defaultState.rows),
      theme: page.querySelector('[data-table-control="theme"]')?.value || defaultState.theme,
      pagination: page.querySelector('[data-table-toggle="pagination"]')?.checked ?? defaultState.pagination
    };
  }

  function tableClasses(state) {
    const variant = variants[state.variant] || variants.basic;
    return ['table', 'mp-table', variant.className].filter(Boolean).join(' ');
  }

  function selectionCell(index) {
    return `<td class="mp-table__cell--center">
      <input class="form-check-input" type="checkbox" aria-label="Seleccionar fila ${index + 1}"${index === 1 ? ' checked' : ''}>
    </td>`;
  }

  function actionCell(row) {
    if (row.file === '-') {
      return '<td class="mp-table__actions">-</td>';
    }

    return `<td class="mp-table__actions">
      <button type="button" class="mp-btn mp-btn--terciario mp-btn--icon-only" aria-label="Descargar ${escapeHtml(row.file)}">
        ${iconMarkup('download')}
      </button>
    </td>`;
  }

  function paginationHtml() {
    return `<nav class="mp-pagination" aria-label="Paginacion de tabla">
  <ul class="mp-pagination__list">
    <li class="mp-pagination__item">
      <button type="button" class="mp-pagination__link" aria-label="Pagina anterior">${iconMarkup('arrow-left', 16)}</button>
    </li>
    <li class="mp-pagination__item">
      <button type="button" class="mp-pagination__link" aria-current="page">1</button>
    </li>
    <li class="mp-pagination__item">
      <button type="button" class="mp-pagination__link">2</button>
    </li>
    <li class="mp-pagination__item">
      <button type="button" class="mp-pagination__link">3</button>
    </li>
    <li class="mp-pagination__item">
      <button type="button" class="mp-pagination__link" aria-label="Pagina siguiente">${iconMarkup('arrow-right', 16)}</button>
    </li>
  </ul>
    </nav>`;
  }

  function tableHtml(state = defaultState) {
    const type = state.type || defaultState.type;
    const visibleRows = rows.slice(0, state.rows || defaultState.rows);
    const selectable = type === 'selectable';
    const withActions = type === 'actions' || type === 'selectable';

    return `<div class="table-responsive mp-table-wrap">
  <table class="${tableClasses(state)}">
    <thead>
      <tr>
        ${selectable ? '<th scope="col" class="mp-table__cell--center"><input class="form-check-input" type="checkbox" aria-label="Seleccionar todas las filas"></th>' : ''}
        <th scope="col">Fecha solicitud</th>
        <th scope="col">Estado</th>
        <th scope="col" class="mp-table__cell--center">Descargar</th>
      </tr>
    </thead>
    <tbody>
      ${visibleRows.map((row, index) => `<tr${selectable && index === 1 ? ' class="mp-table__row--selected"' : ''}>
        ${selectable ? selectionCell(index) : ''}
        <td>${escapeHtml(row.date)}</td>
        <td><span class="mp-badge ${row.statusClass}">${escapeHtml(row.status)}</span></td>
        ${withActions ? actionCell(row) : `<td class="mp-table__actions">${escapeHtml(row.file)}</td>`}
      </tr>`).join('')}
    </tbody>
  </table>
  ${state.pagination ? paginationHtml() : ''}
</div>`;
  }

  function tableNode(state) {
    const template = document.createElement('template');
    template.innerHTML = tableHtml(state).trim();
    return template.content.firstElementChild;
  }

  function renderAnatomy(page, type = 'basic') {
    if (!page) return;
    const preview = page.querySelector('#table-anatomy-preview');
    const showLabels = page.querySelector('[data-table-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-table-toggle="measures"]')?.checked ?? true;
    const showPagination = page.querySelector('[data-table-toggle="pagination"]')?.checked ?? true;
    const state = { ...defaultState, type, variant: type === 'basic' ? 'striped' : 'hover', pagination: showPagination };

    page.querySelectorAll('[data-table-anatomy]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.tableAnatomy === type));
    });
    page.querySelectorAll('.table-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.table-doc-measure').forEach((item) => { item.hidden = !showMeasures; });
    preview?.replaceChildren(tableNode(state));
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      return tableCssExport();
    }

    if (tab === 'scss') {
      return tableScssExport();
    }

    return tableHtml(state);
  }

  function tableCssExport() {
    return `/* mp-table - Compensar Design System
   Fuente: core/components/web/_tables.scss
   Personalizacion completa del componente para dummy/demo. */

.mp-table-wrap, .table-wrap { width:100%; overflow-x:auto; border:1px solid var(--use-border-subtle); border-radius:12px; background:var(--use-surface-white); }
.mp-table, .table.mp-table { --mp-table-bg:var(--use-surface-white); --mp-table-head-bg:var(--use-tables-head); --mp-table-bg-alt:var(--use-tables-stripes); --mp-table-bg-hover:var(--use-tables-filter); --mp-table-bg-selected:var(--use-surface-orange); --mp-table-border:var(--use-border-subtle); --mp-table-text:var(--use-text-primary); --mp-table-muted:var(--use-text-secondary); --mp-table-accent:var(--use-primary-default); width:100%; min-width:40rem; margin:0; border-collapse:separate; border-spacing:0; color:var(--mp-table-text); background:var(--mp-table-bg); font-family:var(--font-body); font-size:var(--font-size-md); line-height:1.3; vertical-align:middle; }
.mp-table > :not(caption) > * > *, .table.mp-table > :not(caption) > * > * { min-height:3rem; padding:var(--space-16) var(--space-8); border-bottom:1px dashed var(--mp-table-border); color:var(--mp-table-text); background:transparent; box-shadow:none; }
.mp-table thead th, .table.mp-table thead th { font-weight:700; white-space:nowrap; background:var(--mp-table-head-bg); }
.mp-table tbody tr, .table.mp-table tbody tr { transition:background-color .15s ease; }
.mp-table.table-striped > tbody > tr:nth-of-type(odd) > *, .mp-table.mp-table--striped > tbody > tr:nth-of-type(odd) > * { background:var(--mp-table-bg-alt); }
.mp-table.table-hover > tbody > tr:hover > *, .mp-table.mp-table--hover > tbody > tr:hover > *, .mp-table tbody tr.mp-table__row--hover > * { background:var(--mp-table-bg-hover); }
.mp-table.table-sm > :not(caption) > * > *, .mp-table.mp-table--compact > :not(caption) > * > * { min-height:3rem; padding:var(--space-12) var(--space-8); }
.mp-table.table-bordered > :not(caption) > * > *, .mp-table.mp-table--bordered > :not(caption) > * > * { border-right:1px solid var(--mp-table-border); }
.mp-table tbody tr[aria-selected="true"] > *, .mp-table tbody tr.mp-table__row--selected > * { background:var(--mp-table-bg-selected); }
.mp-table__cell--number { text-align:right; font-variant-numeric:tabular-nums; }
.mp-table__cell--center, .mp-table__actions { text-align:center; }
.mp-table__actions { white-space:nowrap; }
.mp-table__empty, .mp-table__loading { min-height:11.25rem; display:grid; place-items:center; gap:var(--space-12); padding:var(--space-32); border-radius:var(--space-12); background:var(--use-surface-theme-gray-5); color:var(--use-text-secondary); text-align:center; }
.mp-table__spinner { width:1.5rem; height:1.5rem; border:2px solid var(--use-border-subtle); border-top-color:var(--use-primary-default); border-radius:50%; animation:mp-table-spin .8s linear infinite; }
@keyframes mp-table-spin { to { transform:rotate(360deg); } }
.mp-pagination { display:flex; gap:var(--space-24); justify-content:flex-end; align-items:center; padding:var(--space-16) 0 0; }
.mp-pagination__list { display:flex; flex-wrap:wrap; gap:var(--space-24); align-items:center; justify-content:center; margin:0; padding:0; list-style:none; }
.mp-pagination__item { min-width:2.75rem; min-height:3rem; display:inline-flex; align-items:center; justify-content:center; }
.mp-pagination__link { min-width:2.75rem; min-height:3rem; display:inline-flex; align-items:center; justify-content:center; padding:var(--space-16); border:2px solid transparent; border-radius:var(--space-8); background:transparent; color:var(--use-primary-default); font-weight:700; line-height:1; letter-spacing:.022em; }
.mp-pagination__link[aria-current="page"], .mp-pagination__link:hover { background:var(--use-primary-default); color:var(--use-text-on-dark-primary); }
[data-theme="dark"] .mp-table-wrap { background:var(--base-neutral-100-negro); border-color:var(--base-neutral-70); }
[data-theme="dark"] .mp-table { --mp-table-bg:var(--base-neutral-100-negro); --mp-table-head-bg:var(--base-neutral-90); --mp-table-bg-alt:var(--base-neutral-90); --mp-table-bg-hover:var(--base-neutral-80); --mp-table-bg-selected:var(--base-neutral-80); --mp-table-border:var(--base-neutral-70); --mp-table-text:var(--base-neutral-10); --mp-table-muted:var(--base-neutral-30); --mp-table-accent:var(--use-primary-default-dark); }
[data-theme="high-contrast"] .mp-table-wrap { background:var(--base-neutral-black); border-color:var(--base-neutral-white); }
[data-theme="high-contrast"] .mp-table { --mp-table-bg:var(--base-neutral-black); --mp-table-head-bg:var(--base-neutral-100-negro); --mp-table-bg-alt:var(--base-neutral-black); --mp-table-bg-hover:var(--base-neutral-100-negro); --mp-table-bg-selected:var(--base-neutral-100-negro); --mp-table-border:var(--base-neutral-white); --mp-table-text:var(--base-neutral-white); --mp-table-muted:var(--base-neutral-white); --mp-table-accent:var(--use-primary-default); }`;
  }

  function tableScssExport() {
    return `// mp-table - Compensar Design System
// Fuente productiva: core/components/web/_tables.scss
// Sass plano para dummy/demo.

@use '../../abstracts' as *;

${tableCssExport()}`;
  }

  function renderPlayground(page) {
    if (!page) return;
    const state = stateFromPage(page);
    const preview = page.querySelector('#table-playground-preview');
    const output = page.querySelector('#table-code-output');
    const selectedTab = page.querySelector('[data-table-code-tab][aria-selected="true"]')?.dataset.tableCodeTab || 'html';

    if (preview) {
      preview.dataset.theme = state.theme;
      preview.replaceChildren(tableNode(state));
    }
    if (output) output.textContent = codeForTab(selectedTab, state);
  }

  function renderVariants(page) {
    if (!page) return;
    page.querySelectorAll('[data-table-variant-demo]').forEach((slot) => {
      const type = slot.dataset.tableVariantDemo || 'basic';
      const state = {
        ...defaultState,
        type: type === 'compact' ? 'actions' : type,
        variant: type === 'compact' ? 'compact' : type === 'basic' ? 'striped' : 'hover',
        rows: 2,
        pagination: false
      };
      slot.replaceChildren(tableNode(state));
    });
  }

  function renderResponsive(page) {
    if (!page) return;
    page.querySelectorAll('[data-table-responsive-demo]').forEach((slot) => {
      const state = { ...defaultState, variant: 'hover', type: 'actions', rows: 4, pagination: true };
      slot.replaceChildren(tableNode(state));
    });
  }

  function renderModes(page) {
    if (!page) return;
    page.querySelectorAll('[data-table-mode-demo]').forEach((slot) => {
      const theme = slot.dataset.tableModeDemo || 'light';
      const state = { ...defaultState, variant: 'hover', type: 'actions', rows: 2, pagination: false };
      const node = tableNode(state);
      slot.closest('[data-theme]')?.setAttribute('data-theme', theme);
      slot.replaceChildren(node);
    });
  }

  function renderStaticCode(page, selectedTab = 'html') {
    if (!page) return;
    page.querySelectorAll('[data-table-static-code-tab]').forEach((button) => {
      const active = button.dataset.tableStaticCodeTab === selectedTab;
      button.setAttribute('aria-selected', String(active));
      button.classList.toggle('active', active);
    });
    page.querySelectorAll('#table-code-html, #table-code-angular, #table-code-drupal').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `table-code-${selectedTab}`);
    });
  }

  function flashButton(button, label) {
    if (!button) return;
    const original = button.innerHTML;
    button.innerHTML = `${iconMarkup('check')}${label}`;
    window.setTimeout(() => { button.innerHTML = original; }, 1400);
  }

  function copyText(text, button) {
    const write = navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject(new Error('Clipboard unavailable'));
    write.then(() => flashButton(button, 'Copiado')).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.className = 'visually-hidden';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      flashButton(button, 'Copiado');
    });
  }

  function findPage(target) {
    return target?.closest('[data-component-doc="tables"]') || document.querySelector('[data-component-doc="tables"]');
  }

  function initTablesDoc(root = document) {
    const page = root.querySelector('[data-component-doc="tables"]');
    if (!page || page.dataset.tablesInitialized === 'true') return;

    renderAnatomy(page, 'basic');
    renderPlayground(page);
    renderVariants(page);
    renderResponsive(page);
    renderModes(page);
    renderStaticCode(page);
    page.dataset.tablesInitialized = 'true';
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.tablesDocsDelegated === 'true') return;
    document.documentElement.dataset.tablesDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-table-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.tableAnatomy);
        return;
      }

      const codeTab = event.target.closest('[data-table-code-tab]');
      if (codeTab) {
        const page = findPage(codeTab);
        if (!page) return;
        page.querySelectorAll('[data-table-code-tab]').forEach((tab) => {
          const active = tab === codeTab;
          tab.setAttribute('aria-selected', String(active));
          tab.classList.toggle('active', active);
        });
        renderPlayground(page);
        return;
      }

      const staticTab = event.target.closest('[data-table-static-code-tab]');
      if (staticTab) {
        renderStaticCode(findPage(staticTab), staticTab.dataset.tableStaticCodeTab);
        return;
      }

      const copyPlayground = event.target.closest('[data-table-copy-playground]');
      if (copyPlayground) {
        const page = findPage(copyPlayground);
        copyText(page?.querySelector('#table-code-output')?.textContent || '', copyPlayground);
        return;
      }

      const copyStatic = event.target.closest('[data-table-copy-static]');
      if (copyStatic) {
        const page = findPage(copyStatic);
        const active = page?.querySelector('#table-code-html.active, #table-code-angular.active, #table-code-drupal.active');
        const code = active?.querySelector('code')?.textContent || active?.textContent || '';
        copyText(code, copyStatic);
      }
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-table-control]')) {
        renderPlayground(findPage(event.target));
      }
      if (event.target.matches('[data-table-toggle]')) {
        const page = findPage(event.target);
        const active = page?.querySelector('[data-table-anatomy][aria-pressed="true"]')?.dataset.tableAnatomy || 'basic';
        renderAnatomy(page, active);
      }
    });
  }

  return {
    initTablesDoc,
    bindDelegatedEvents,
    renderAnatomy,
    renderPlayground,
    renderVariants,
    renderResponsive,
    renderModes
  };
})();

window.tablesDocs = tablesDocs;

(function bootTablesDocs() {
  tablesDocs.bindDelegatedEvents();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tablesDocs.initTablesDoc(document));
  } else {
    tablesDocs.initTablesDoc(document);
  }
  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => tablesDocs.initTablesDoc(document));
    });
  }
})();

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => tablesDocs.initTablesDoc(document));
});
