// ============================================================
//  dropdown-docs.js
//  Lógica de documentación para el componente Dropdown / Select.
//  Patrón idéntico a selection-docs.js y component-docs.js.
//  Expone: window.dropdownDocs · { initDropdownDoc, bindDropdownDelegated }
// ============================================================

/* global router */
'use strict';

const dropdownDocs = (() => {

  // ──────────────────────────────────────────────────────────
  // Opciones de demo para el playground
  // ──────────────────────────────────────────────────────────
  const demoOptions = {
    simple: [
      { value: 'bog', label: 'Bogotá D.C.' },
      { value: 'med', label: 'Medellín' },
      { value: 'cal', label: 'Cali' },
      { value: 'bar', label: 'Barranquilla' },
      { value: 'car', label: 'Cartagena' },
      { value: 'buc', label: 'Bucaramanga' },
    ],
    grouped: [
      { group: 'Cundinamarca' },
      { value: 'bog', label: 'Bogotá D.C.' },
      { value: 'soa', label: 'Soacha' },
      { group: 'Antioquia' },
      { value: 'med', label: 'Medellín' },
      { value: 'env', label: 'Envigado' },
      { group: 'Valle del Cauca' },
      { value: 'cal', label: 'Cali' },
      { value: 'pal', label: 'Palmira' },
    ],
  };

  // ──────────────────────────────────────────────────────────
  // Código estático por tab
  // ──────────────────────────────────────────────────────────
  const staticCode = {
    html: `<!-- Dropdown simple -->
<div class="mp-dropdown-group">
  <label class="mp-dropdown-label" for="dd1">
    Ciudad
    <span class="mp-dropdown-required" aria-hidden="true">*</span>
  </label>
  <div class="mp-dropdown" id="dd1"
       role="combobox"
       aria-expanded="false"
       aria-haspopup="listbox"
       aria-controls="dd1-panel"
       aria-required="true">
    <button class="mp-dropdown__trigger" type="button"
            aria-controls="dd1-panel">
      <span class="mp-dropdown__value is-placeholder">Seleccionar</span>
      <span class="material-symbols-rounded mp-dropdown__caret"
            aria-hidden="true">expand_more</span>
    </button>
    <div class="mp-dropdown__panel" id="dd1-panel" role="listbox"
         aria-label="Ciudad">
      <div class="mp-dropdown__options">
        <div class="mp-dropdown__option" role="option"
             aria-selected="false" data-value="bog">Bogotá D.C.</div>
        <div class="mp-dropdown__option" role="option"
             aria-selected="false" data-value="med">Medellín</div>
        <div class="mp-dropdown__option mp-dropdown__option--selected"
             role="option" aria-selected="true" data-value="cal">Cali</div>
        <div class="mp-dropdown__option mp-dropdown__option--disabled"
             role="option" aria-disabled="true">Bucaramanga</div>
      </div>
    </div>
  </div>
  <span class="mp-dropdown-helper">Selecciona tu ciudad de residencia</span>
</div>`,

    multiple: `<!-- Dropdown multi-select -->
<div class="mp-dropdown-group">
  <label class="mp-dropdown-label" for="dd2">Ciudades</label>
  <div class="mp-dropdown" id="dd2"
       role="combobox"
       aria-expanded="false"
       aria-haspopup="listbox"
       aria-controls="dd2-panel">
    <button class="mp-dropdown__trigger" type="button"
            aria-controls="dd2-panel">
      <div class="mp-dropdown__chips">
        <span class="mp-dropdown__chip">
          Bogotá
          <button class="mp-dropdown__chip-remove"
                  type="button" aria-label="Quitar Bogotá">
            <span class="material-symbols-rounded">close</span>
          </button>
        </span>
        <span class="mp-dropdown__chip">
          Cali
          <button class="mp-dropdown__chip-remove"
                  type="button" aria-label="Quitar Cali">
            <span class="material-symbols-rounded">close</span>
          </button>
        </span>
      </div>
      <span class="material-symbols-rounded mp-dropdown__caret"
            aria-hidden="true">expand_more</span>
    </button>
    <div class="mp-dropdown__panel" id="dd2-panel"
         role="listbox" aria-multiselectable="true">
      <div class="mp-dropdown__options">
        <div class="mp-dropdown__option mp-dropdown__option--selected"
             role="option" aria-selected="true" data-value="bog">
          <span class="mp-dropdown__option-check"></span>
          Bogotá D.C.
        </div>
        <div class="mp-dropdown__option" role="option"
             aria-selected="false" data-value="med">
          <span class="mp-dropdown__option-check"></span>
          Medellín
        </div>
        <div class="mp-dropdown__option mp-dropdown__option--selected"
             role="option" aria-selected="true" data-value="cal">
          <span class="mp-dropdown__option-check"></span>
          Cali
        </div>
      </div>
    </div>
  </div>
</div>`,

    search: `<!-- Dropdown con búsqueda -->
<div class="mp-dropdown-group">
  <label class="mp-dropdown-label" for="dd3">Ciudad</label>
  <div class="mp-dropdown" id="dd3"
       role="combobox"
       aria-expanded="false"
       aria-haspopup="listbox"
       aria-controls="dd3-panel">
    <button class="mp-dropdown__trigger" type="button"
            aria-controls="dd3-panel">
      <span class="mp-dropdown__value is-placeholder">Seleccionar</span>
      <span class="material-symbols-rounded mp-dropdown__caret"
            aria-hidden="true">expand_more</span>
    </button>
    <div class="mp-dropdown__panel" id="dd3-panel" role="listbox">
      <!-- Campo de búsqueda sticky -->
      <div class="mp-dropdown__search">
        <span class="material-symbols-rounded" aria-hidden="true">search</span>
        <input class="mp-dropdown__search-input"
               type="text"
               placeholder="Buscar ciudad…"
               aria-label="Buscar ciudad"
               autocomplete="off">
      </div>
      <div class="mp-dropdown__options">
        <div class="mp-dropdown__option" role="option"
             aria-selected="false" data-value="bog">Bogotá D.C.</div>
        <div class="mp-dropdown__option" role="option"
             aria-selected="false" data-value="med">Medellín</div>
        <!-- Sin resultados (oculto por defecto) -->
        <div class="mp-dropdown__empty" hidden>Sin resultados</div>
      </div>
    </div>
  </div>
</div>`,

    accessible: `<!-- Dropdown accesible completo con error -->
<div class="mp-dropdown-group">
  <label class="mp-dropdown-label" for="dd-city">
    Ciudad de residencia
    <span class="mp-dropdown-required" aria-hidden="true">*</span>
  </label>
  <div class="mp-dropdown" id="dd-city"
       role="combobox"
       aria-expanded="false"
       aria-haspopup="listbox"
       aria-controls="dd-city-panel"
       aria-required="true">
    <button class="mp-dropdown__trigger error" type="button"
            aria-controls="dd-city-panel"
            aria-invalid="true"
            aria-describedby="dd-city-helper">
      <span class="mp-dropdown__value is-placeholder">Seleccionar</span>
      <span class="material-symbols-rounded mp-dropdown__caret"
            aria-hidden="true">expand_more</span>
    </button>
    <div class="mp-dropdown__panel" id="dd-city-panel"
         role="listbox" aria-label="Ciudad de residencia">
      <div class="mp-dropdown__options">
        <div class="mp-dropdown__option" role="option"
             aria-selected="false" data-value="bog">Bogotá D.C.</div>
        <div class="mp-dropdown__option" role="option"
             aria-selected="false" data-value="med">Medellín</div>
      </div>
    </div>
  </div>
  <span class="mp-dropdown-helper error" id="dd-city-helper" role="alert">
    <span class="material-symbols-rounded" aria-hidden="true"
          style="font-size:16px">error</span>
    Debes seleccionar una ciudad de residencia
  </span>
</div>`,
  };

  // ──────────────────────────────────────────────────────────
  // Meta de exports (sección Código)
  // ──────────────────────────────────────────────────────────
  const exportMeta = {
    component: 'Dropdown / Select',
    cssPrefix: 'mp',
    source: 'Core + Figma Compensar v2',
    figmaNodes: ['4530:13900', '4531:19809'],
    updatedAt: '2026-05-04',
    figmaSpecs: {
      triggerHeight: '56px',
      borderRadius: '16px',
      border: '1px solid',
      fontSize: '16px',
      padding: '16px',
      gap: '10px',
      caretSize: '24px',
      panelRadius: '0 0 16px 16px',
      panelMaxHeight: '256px (pendiente validar)',
      optionHeight: '48px (pendiente validar)',
    },
    tokens: {
      borderDefault: '--use-border-subtle → #e0e0e0',
      borderHover: '--use-border-hover → #e63f0c',
      borderActive: '--use-border-strong → #666',
      borderFocus: '--use-primary-default → #ff6600',
      borderError: '--use-state-error-icon',
      background: '--use-surface-white',
      textValue: '--use-text-primary → #111',
      textPlaceholder: '--use-text-tertiary → #666',
      optionHover: '--use-surface-theme-gray-5 → #f5f5f5',
      chipBg: '--use-primary-default 12%',
      required: '--use-state-error-mandatory → #bb4945',
    },
    classes: [
      '.mp-dropdown-group',
      '.mp-dropdown-label',
      '.mp-dropdown-required',
      '.mp-dropdown-helper',
      '.mp-dropdown',
      '.mp-dropdown__trigger',
      '.mp-dropdown__trigger[aria-expanded="true"]',
      '.mp-dropdown__trigger.error',
      '.mp-dropdown__value',
      '.mp-dropdown__value.is-placeholder',
      '.mp-dropdown__caret',
      '.mp-dropdown__chips',
      '.mp-dropdown__chip',
      '.mp-dropdown__chip-remove',
      '.mp-dropdown__panel',
      '.mp-dropdown__search',
      '.mp-dropdown__search-input',
      '.mp-dropdown__options',
      '.mp-dropdown__option',
      '.mp-dropdown__option--selected',
      '.mp-dropdown__option--disabled',
      '.mp-dropdown__option-check',
      '.mp-dropdown__group-header',
      '.mp-dropdown__divider',
      '.mp-dropdown__empty',
    ],
  };

  // ──────────────────────────────────────────────────────────
  // Helpers
  // ──────────────────────────────────────────────────────────

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function copyText(text, btn) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const icon = btn.querySelector('.material-symbols-rounded');
      if (icon) {
        const prev = icon.textContent;
        icon.textContent = 'check';
        setTimeout(() => { icon.textContent = prev; }, 1800);
      }
    }).catch(() => {});
  }

  // ──────────────────────────────────────────────────────────
  // Leer estado del playground
  // ──────────────────────────────────────────────────────────

  function getState(page) {
    const get = (attr, fallback = '') => {
      const el = page.querySelector(`[data-drp-control="${attr}"]`);
      if (!el) return fallback;
      if (el.type === 'checkbox') return el.checked;
      return el.value || fallback;
    };
    return {
      tipo:       get('tipo', 'simple'),
      state:      get('state', 'default'),
      theme:      get('theme', 'light'),
      label:      get('label', 'Seleccionar ciudad'),
      placeholder:get('placeholder', 'Seleccionar'),
      helperText: get('helperText', 'Elige una opción'),
      required:   get('required', false),
    };
  }

  // ──────────────────────────────────────────────────────────
  // Construir HTML del trigger según estado
  // ──────────────────────────────────────────────────────────

  function buildTriggerClass(state) {
    const cls = ['mp-dropdown__trigger'];
    if (state.state === 'error')   cls.push('error');
    return cls.join(' ');
  }

  function buildDropdownHtml(s) {
    const isOpen     = s.state === 'open';
    const isError    = s.state === 'error';
    const isDisabled = s.state === 'disabled';
    const requiredHtml = s.required
      ? `<span class="mp-dropdown-required" aria-hidden="true">*</span>`
      : '';
    const helperClass = isError ? 'mp-dropdown-helper error' : 'mp-dropdown-helper';
    const helperContent = isError
      ? `<span class="material-symbols-rounded" aria-hidden="true" style="font-size:16px">error</span> ${escHtml(s.helperText)}`
      : escHtml(s.helperText);

    let optionsHtml = '';
    if (s.tipo === 'multiple') {
      optionsHtml = demoOptions.simple.map(o =>
        `  <div class="mp-dropdown__option" role="option" aria-selected="false" data-value="${o.value}">
    <span class="mp-dropdown__option-check"></span>
    ${escHtml(o.label)}
  </div>`).join('\n');
    } else if (s.tipo === 'grouped') {
      optionsHtml = demoOptions.grouped.map(o =>
        o.group
          ? `  <div class="mp-dropdown__group-header">${escHtml(o.group)}</div>`
          : `  <div class="mp-dropdown__option" role="option" aria-selected="false" data-value="${o.value}">${escHtml(o.label)}</div>`
      ).join('\n');
    } else {
      optionsHtml = demoOptions.simple.map(o =>
        `  <div class="mp-dropdown__option" role="option" aria-selected="false" data-value="${o.value}">${escHtml(o.label)}</div>`
      ).join('\n');
    }

    const searchHtml = s.tipo === 'search'
      ? `<div class="mp-dropdown__search">
  <span class="material-symbols-rounded" aria-hidden="true">search</span>
  <input class="mp-dropdown__search-input" type="text" placeholder="Buscar…" autocomplete="off">
</div>
` : '';

    const panelHtml = `<div class="mp-dropdown__panel" role="listbox"${s.tipo === 'multiple' ? ' aria-multiselectable="true"' : ''}>
${searchHtml}<div class="mp-dropdown__options">
${optionsHtml}
</div>
</div>`;

    const multipleInner = s.tipo === 'multiple'
      ? `<div class="mp-dropdown__chips"></div>`
      : `<span class="mp-dropdown__value is-placeholder">${escHtml(s.placeholder)}</span>`;

    return `<div class="mp-dropdown-group">
  <label class="mp-dropdown-label">${escHtml(s.label)} ${requiredHtml}</label>
  <div class="mp-dropdown"${isOpen ? ' aria-expanded="true"' : ''}>
    <button class="${buildTriggerClass(s)}" type="button"
            aria-expanded="${isOpen}"
            aria-haspopup="listbox"
            ${isDisabled ? 'disabled' : ''}
            ${isError ? 'aria-invalid="true"' : ''}>
      ${multipleInner}
      <span class="material-symbols-rounded mp-dropdown__caret" aria-hidden="true">expand_more</span>
    </button>
    ${panelHtml}
  </div>
  <span class="${helperClass}">${helperContent}</span>
</div>`;
  }

  // ──────────────────────────────────────────────────────────
  // Código generado por tab
  // ──────────────────────────────────────────────────────────

  function buildCodeOutput(s, tab) {
    if (tab === 'css') {
      const cls = ['mp-dropdown-group', 'mp-dropdown', 'mp-dropdown__trigger'];
      if (s.state === 'error')   cls.push('mp-dropdown__trigger.error');
      if (s.state === 'open')    cls.push('[aria-expanded="true"]');
      if (s.state === 'disabled') cls.push(':disabled');
      if (s.tipo === 'multiple') cls.push('mp-dropdown__chips', 'mp-dropdown__chip', 'mp-dropdown__chip-remove', 'mp-dropdown__option-check');
      if (s.tipo === 'search')   cls.push('mp-dropdown__search', 'mp-dropdown__search-input');
      if (s.tipo === 'grouped')  cls.push('mp-dropdown__group-header', 'mp-dropdown__divider');
      return cls.map(c => `.${c}`).join('\n');
    }

    if (tab === 'tokens') {
      return `/* Tokens aplicados al estado: ${s.state} · variante: ${s.tipo} */
--use-border-subtle:          #e0e0e0   /* borde default */
--use-border-hover:           #E63F0C   /* borde hover (naranja brand) */
--use-border-strong:          #666666   /* borde active */
--use-primary-default:        #FF6600   /* borde focus / open */
--use-surface-white:          #FFFFFF   /* fondo trigger y panel */
--use-text-primary:           #111111   /* valor seleccionado */
--use-text-tertiary:          #666666   /* placeholder y caret */
--use-surface-theme-gray-5:   #F5F5F5   /* hover opción */
--use-state-error-icon:                 /* borde error */
--use-state-error-mandatory:  #bb4945   /* asterisco requerido */`;
    }

    return buildDropdownHtml(s);
  }

  // ──────────────────────────────────────────────────────────
  // Render playground
  // ──────────────────────────────────────────────────────────

  function renderPlayground(page) {
    const s = getState(page);

    // Preview
    const preview = page.querySelector('#drp-live-preview');
    if (preview) {
      const card = preview.closest('.drp-preview-card');
      if (card) card.dataset.theme = s.theme;
      preview.innerHTML = buildDropdownHtml(s);
    }

    // Código
    const activeTab = page.querySelector('[data-drp-code-tab][aria-selected="true"]');
    const tab = activeTab ? activeTab.dataset.drpCodeTab : 'html';
    const codeEl = page.querySelector('#drp-code-output');
    if (codeEl) codeEl.textContent = buildCodeOutput(s, tab);
  }

  // ──────────────────────────────────────────────────────────
  // Código estático
  // ──────────────────────────────────────────────────────────

  function renderStaticCode(page, key = 'html') {
    const codeEl = page.querySelector('#drp-static-code');
    if (codeEl) codeEl.textContent = staticCode[key] || staticCode.html;

    page.querySelectorAll('[data-drp-static-code-tab]').forEach(btn => {
      btn.setAttribute('aria-selected', String(btn.dataset.drpStaticCodeTab === key));
    });
  }

  // ──────────────────────────────────────────────────────────
  // Anatomía interactiva
  // ──────────────────────────────────────────────────────────

  const anatomyConfig = {
    simple: {
      height: '56 px', width: '320 px', panelH: 'max 256 px',
      description: 'Selección única · caret expand_more · padding 16 px',
      showPanel: true,
    },
    search: {
      height: '56 px', width: '320 px', panelH: 'max 256 px',
      description: 'Campo de búsqueda sticky en la parte superior del panel',
      showPanel: true,
    },
    multiple: {
      height: '56 px+', width: '320 px', panelH: 'max 256 px',
      description: 'Chips de selección dentro del trigger · panel permanece abierto',
      showPanel: true,
    },
    grouped: {
      height: '56 px', width: '320 px', panelH: 'max 256 px',
      description: 'Encabezados de grupo no seleccionables · 11 px uppercase',
      showPanel: true,
    },
  };

  function renderAnatomy(page, variant) {
    variant = variant || page.querySelector('[data-drp-anatomy-option][aria-selected="true"]')?.dataset.drpAnatomyOption || 'simple';

    // Actualizar botones
    page.querySelectorAll('[data-drp-anatomy-option]').forEach(btn => {
      btn.setAttribute('aria-selected', String(btn.dataset.drpAnatomyOption === variant));
    });

    const cfg = anatomyConfig[variant] || anatomyConfig.simple;
    const showLabels   = page.querySelector('[data-drp-anatomy-toggle="labels"]')?.checked !== false;
    const showMeasures = page.querySelector('[data-drp-anatomy-toggle="measures"]')?.checked !== false;

    // Badges de medida
    const hBadge = page.querySelector('[data-drp-anatomy-height]');
    const wBadge = page.querySelector('[data-drp-anatomy-width]');
    const pBadge = page.querySelector('[data-drp-anatomy-panel-h]');
    if (hBadge) hBadge.textContent = cfg.height;
    if (wBadge) wBadge.textContent = cfg.width;
    if (pBadge) pBadge.textContent = cfg.panelH;

    // Visibilidad
    page.querySelectorAll('.drp-doc-callout').forEach(c => {
      c.style.display = showLabels ? '' : 'none';
    });
    page.querySelectorAll('.drp-doc-measure').forEach(m => {
      m.style.display = showMeasures ? '' : 'none';
    });

    // Render del preview
    const render = page.querySelector('[data-drp-anatomy-render]');
    if (!render) return;

    let optionsHtml = '';
    if (variant === 'grouped') {
      optionsHtml = demoOptions.grouped.map(o =>
        o.group
          ? `<div class="mp-dropdown__group-header">${escHtml(o.group)}</div>`
          : `<div class="mp-dropdown__option${o.value === 'med' ? ' mp-dropdown__option--selected' : ''}" role="option" aria-selected="${o.value === 'med'}" data-value="${o.value}">${escHtml(o.label)}</div>`
      ).join('');
    } else {
      optionsHtml = demoOptions.simple.map(o =>
        `<div class="mp-dropdown__option${o.value === 'med' ? ' mp-dropdown__option--selected' : ''}" role="option" aria-selected="${o.value === 'med'}" data-value="${o.value}">${
          variant === 'multiple' ? '<span class="mp-dropdown__option-check"></span>' : ''
        }${escHtml(o.label)}</div>`
      ).join('');
    }

    const searchHtml = variant === 'search'
      ? `<div class="mp-dropdown__search">
          <span class="material-symbols-rounded" aria-hidden="true">search</span>
          <input class="mp-dropdown__search-input" type="text" placeholder="Buscar ciudad…" readonly>
        </div>` : '';

    // Anatomy usa <span> para el chip-remove (no <button>) porque el trigger
    // es un <button> y los navegadores no permiten <button> anidados — el parser
    // los mueve fuera del DOM rompiendo el layout.
    const triggerInner = variant === 'multiple'
      ? `<div class="mp-dropdown__chips">
           <span class="mp-dropdown__chip">Medellín <span class="mp-dropdown__chip-remove" aria-hidden="true"><span class="material-symbols-rounded">close</span></span></span>
         </div>`
      : `<span class="mp-dropdown__value">Medellín</span>`;

    const showPanel = cfg.showPanel;

    render.innerHTML = `
      <div class="mp-dropdown-group">
        <label class="mp-dropdown-label">Ciudad</label>
        <div class="mp-dropdown"${showPanel ? ' aria-expanded="true"' : ''}>
          <button class="mp-dropdown__trigger" type="button" aria-expanded="${showPanel}" style="pointer-events:none">
            ${triggerInner}
            <span class="material-symbols-rounded mp-dropdown__caret" aria-hidden="true">expand_more</span>
          </button>
          ${showPanel ? `
          <div class="mp-dropdown__panel" role="listbox" style="display:block;position:relative;border:1px solid var(--use-primary-default);margin-top:0">
            ${searchHtml}
            <div class="mp-dropdown__options">${optionsHtml}</div>
          </div>` : ''}
        </div>
        <span class="mp-dropdown-helper">${escHtml(cfg.description)}</span>
      </div>`;
  }

  // ──────────────────────────────────────────────────────────
  // Descargas
  // ──────────────────────────────────────────────────────────

  function downloadAsset(type, btn) {
    let content = '', filename = '', mime = 'text/plain';

    if (type === 'css') {
      content = `/* mp-dropdown — Compensar Design System v2 */
/* Fuente: Figma nodo 4530:13900 · Generado: ${new Date().toISOString().slice(0,10)} */

.mp-dropdown-group { display:flex;flex-direction:column;gap:.5rem;width:100% }
.mp-dropdown-label { font-size:1rem;font-weight:400;color:var(--use-text-primary);display:flex;gap:.25rem;align-items:center }
.mp-dropdown-required { color:var(--use-state-error-mandatory,#bb4945) }
.mp-dropdown { position:relative;width:100% }
.mp-dropdown__trigger { --mp-dd-border:var(--use-border-subtle);display:flex;align-items:center;gap:.625rem;width:100%;min-height:3.5rem;padding:.875rem 1rem;font-size:1rem;color:var(--use-text-primary);background:var(--use-surface-white);border:.0625rem solid var(--mp-dd-border);border-radius:1rem;cursor:pointer;transition:border-color .18s,box-shadow .18s }
.mp-dropdown__trigger:hover:not(:disabled):not(.error):not([aria-expanded="true"]) { --mp-dd-border:var(--use-border-hover) }
.mp-dropdown__trigger[aria-expanded="true"],.mp-dropdown__trigger:focus-visible:not(:disabled) { --mp-dd-border:var(--use-primary-default);border-color:var(--mp-dd-border);box-shadow:0 0 0 .1875rem color-mix(in srgb,var(--use-primary-default) 18%,transparent) }
.mp-dropdown__trigger[aria-expanded="true"] { border-bottom-left-radius:0;border-bottom-right-radius:0 }
.mp-dropdown__trigger.error { --mp-dd-border:var(--use-state-error-icon);border-color:var(--mp-dd-border);box-shadow:0 0 0 .1875rem color-mix(in srgb,var(--use-state-error-icon) 15%,transparent) }
.mp-dropdown__trigger:disabled { background:var(--use-surface-subtle);opacity:.65;cursor:not-allowed }
.mp-dropdown__value { flex:1 0 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap }
.mp-dropdown__value.is-placeholder { color:var(--use-text-tertiary) }
.mp-dropdown__caret { flex-shrink:0;font-size:1.5rem;color:var(--use-text-tertiary);transition:transform .2s }
.mp-dropdown__trigger[aria-expanded="true"] .mp-dropdown__caret { transform:rotate(180deg) }
.mp-dropdown__panel { position:absolute;top:100%;left:0;right:0;z-index:100;max-height:16rem;overflow-y:auto;background:var(--use-surface-white);border:.0625rem solid var(--use-primary-default);border-top:0;border-radius:0 0 1rem 1rem;box-shadow:0 .5rem 2rem rgba(17,17,17,.14);display:none }
.mp-dropdown[aria-expanded="true"] > .mp-dropdown__panel { display:block }
.mp-dropdown__option { display:flex;align-items:center;gap:.625rem;min-height:3rem;padding:.625rem 1rem;font-size:1rem;color:var(--use-text-primary);cursor:pointer;transition:background .12s }
.mp-dropdown__option:hover:not(.mp-dropdown__option--disabled) { background:var(--use-surface-theme-gray-5,#f5f5f5) }
.mp-dropdown__option--selected { color:var(--use-primary-default);font-weight:500;background:color-mix(in srgb,var(--use-primary-default) 8%,transparent) }
.mp-dropdown__option--disabled { opacity:.6;cursor:not-allowed }
.mp-dropdown-helper { font-size:.875rem;color:var(--use-text-tertiary);display:flex;align-items:flex-start;gap:.25rem }
.mp-dropdown-helper.error { color:var(--use-state-error-text);font-weight:500 }`;
      filename = 'mp-dropdown.css';
      mime = 'text/css';
    } else if (type === 'scss') {
      content = `// mp-dropdown — Compensar Design System v2
// Fuente: Figma nodo 4530:13900 · ${new Date().toISOString().slice(0,10)}
// IMPORTANTE: usa tokens semánticos, nunca colores base directos.

@use '../../abstracts/functions' as *;
@use '../../abstracts/tokens-spacing' as *;

.mp-dropdown-group {
  display: flex;
  flex-direction: column;
  gap: $space-8;
  width: 100%;
}

.mp-dropdown-label {
  font-size: rem(16px);
  font-weight: 400;
  color: var(--use-text-primary);
}

.mp-dropdown {
  position: relative;
  width: 100%;
}

.mp-dropdown__trigger {
  --mp-dd-border: var(--use-border-subtle);

  display: flex;
  align-items: center;
  gap: rem(10px);
  width: 100%;
  min-height: rem(56px);
  padding: rem(14px) rem(16px);
  font-size: rem(16px);
  color: var(--use-text-primary);
  background: var(--use-surface-white);
  border: rem(1px) solid var(--mp-dd-border);
  border-radius: rem(16px);
  cursor: pointer;
  transition: border-color 0.18s, box-shadow 0.18s;

  &:hover:not(:disabled):not(.error):not([aria-expanded='true']) {
    --mp-dd-border: var(--use-border-hover);
  }

  &[aria-expanded='true'],
  &:focus-visible:not(:disabled) {
    --mp-dd-border: var(--use-primary-default);
    border-color: var(--mp-dd-border);
    box-shadow: 0 0 0 rem(3px)
      color-mix(in srgb, var(--use-primary-default) 18%, transparent);
  }

  &[aria-expanded='true'] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    .mp-dropdown__caret { transform: rotate(180deg); }
  }

  &.error {
    --mp-dd-border: var(--use-state-error-icon);
    border-color: var(--mp-dd-border);
  }

  &:disabled {
    background: var(--use-surface-subtle);
    opacity: 0.65;
    cursor: not-allowed;
  }
}

.mp-dropdown__panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  max-height: rem(256px); // pendiente validar con diseño
  overflow-y: auto;
  background: var(--use-surface-white);
  border: rem(1px) solid var(--use-primary-default);
  border-top: 0;
  border-radius: 0 0 rem(16px) rem(16px);
  box-shadow: 0 rem(8px) rem(32px) rgba(17, 17, 17, 0.14);
  display: none;

  .mp-dropdown[aria-expanded='true'] > & { display: block; }
}

.mp-dropdown__option {
  display: flex;
  align-items: center;
  gap: rem(10px);
  min-height: rem(48px); // pendiente validar con diseño
  padding: rem(10px) rem(16px);
  font-size: rem(16px);
  color: var(--use-text-primary);
  cursor: pointer;
  transition: background 0.12s;

  &:hover:not(.mp-dropdown__option--disabled) {
    background: var(--use-surface-theme-gray-5, #f5f5f5);
  }

  &--selected {
    color: var(--use-primary-default);
    font-weight: 500;
    background: color-mix(in srgb, var(--use-primary-default) 8%, transparent);
  }

  &--disabled { opacity: 0.6; cursor: not-allowed; }
}`;
      filename = 'mp-dropdown.scss';
    } else if (type === 'json') {
      content = JSON.stringify(exportMeta, null, 2);
      filename = 'mp-dropdown.tokens.json';
      mime = 'application/json';
    }

    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);

    if (btn) {
      const icon = btn.querySelector('.material-symbols-rounded');
      if (icon) {
        const prev = icon.textContent;
        icon.textContent = 'check';
        setTimeout(() => { icon.textContent = prev; }, 1800);
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  // Inicialización
  // ──────────────────────────────────────────────────────────

  function initDropdownDoc(root = document) {
    const page = root.querySelector('[data-component-doc="dropdown"]');
    if (!page || page.dataset.dropdownInitialized === 'true') return;

    try {
      // Anatomía
      page.querySelectorAll('[data-drp-anatomy-option]').forEach(btn => {
        btn.addEventListener('click', () => renderAnatomy(page, btn.dataset.drpAnatomyOption));
      });
      page.querySelectorAll('[data-drp-anatomy-toggle]').forEach(ctrl => {
        ctrl.addEventListener('change', () => renderAnatomy(page));
      });
      renderAnatomy(page, 'simple');

      // Playground controles
      page.querySelectorAll('[data-drp-control]').forEach(ctrl => {
        ctrl.addEventListener('input',  () => renderPlayground(page));
        ctrl.addEventListener('change', () => renderPlayground(page));
      });

      // Playground code tabs
      page.querySelectorAll('[data-drp-code-tab]').forEach(tab => {
        tab.addEventListener('click', () => {
          page.querySelectorAll('[data-drp-code-tab]').forEach(t =>
            t.setAttribute('aria-selected', String(t === tab))
          );
          renderPlayground(page);
        });
      });

      // Copy playground
      const copyPG = page.querySelector('[data-drp-copy-playground]');
      if (copyPG) {
        copyPG.addEventListener('click', () => {
          copyText(page.querySelector('#drp-code-output')?.textContent || '', copyPG);
        });
      }

      renderPlayground(page);

      // Static code tabs
      page.querySelectorAll('[data-drp-static-code-tab]').forEach(tab => {
        tab.addEventListener('click', () => renderStaticCode(page, tab.dataset.drpStaticCodeTab));
      });

      // Copy static
      const copyStatic = page.querySelector('[data-drp-copy-static]');
      if (copyStatic) {
        copyStatic.addEventListener('click', () => {
          copyText(page.querySelector('#drp-static-code')?.textContent || '', copyStatic);
        });
      }

      renderStaticCode(page, 'html');

      // ── Panel toggle: delegación en page (funciona con innerHTML dinámico) ──
      function openDropdown(trigger) {
        const wrapper = trigger.closest('.mp-dropdown');
        trigger.setAttribute('aria-expanded', 'true');
        if (wrapper) wrapper.setAttribute('aria-expanded', 'true');
      }

      function closeDropdown(trigger) {
        const wrapper = trigger.closest('.mp-dropdown');
        trigger.setAttribute('aria-expanded', 'false');
        if (wrapper) wrapper.removeAttribute('aria-expanded');
      }

      function closeAllDropdowns() {
        page.querySelectorAll('.mp-dropdown__trigger[aria-expanded="true"]').forEach(t => closeDropdown(t));
      }

      // Delegado en page → funciona incluso después de que renderPlayground
      // reemplaza el innerHTML con nuevos triggers
      page.addEventListener('click', (e) => {
        // 1. Click en trigger
        const trigger = e.target.closest('.mp-dropdown__trigger');
        if (trigger && !trigger.disabled) {
          e.stopPropagation();
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          closeAllDropdowns();
          if (!isOpen) openDropdown(trigger);
          return;
        }

        // 2. Click en opción
        const option = e.target.closest('.mp-dropdown__option:not(.mp-dropdown__option--disabled)');
        if (option) {
          const panel   = option.closest('.mp-dropdown__panel');
          if (!panel) return;
          const wrapper = panel.closest('.mp-dropdown');
          const trig    = wrapper && wrapper.querySelector('.mp-dropdown__trigger');
          if (!trig || trig.disabled) return;

          // Marca seleccionada
          panel.querySelectorAll('.mp-dropdown__option').forEach(o => {
            o.classList.remove('mp-dropdown__option--selected');
            o.removeAttribute('aria-selected');
          });
          option.classList.add('mp-dropdown__option--selected');
          option.setAttribute('aria-selected', 'true');

          // Actualiza texto visible del trigger
          const valueEl = trig.querySelector('.mp-dropdown__value');
          if (valueEl) {
            valueEl.textContent = option.textContent.trim();
            valueEl.classList.remove('is-placeholder');
          }
          closeDropdown(trig);
          return;
        }

        // 3. Click fuera → cierra todos
        if (!e.target.closest('.mp-dropdown')) {
          closeAllDropdowns();
        }
      });

      // Cierra al hacer click fuera (document-level)
      const closeOnOutside = (e) => {
        if (!e.target.closest('[data-component-doc="dropdown"]')) closeAllDropdowns();
      };
      document.addEventListener('click', closeOnOutside);

      // Limpieza al navegar a otra sección
      if (typeof router !== 'undefined') {
        router.on('navigate', () => document.removeEventListener('click', closeOnOutside));
      }

      page.dataset.dropdownInitialized = 'true';
    } catch (e) {
      console.error('No se pudo inicializar la documentación del dropdown.', e);
    }
  }

  // Delegación global para descargas
  function bindDropdownDelegated() {
    if (document.documentElement.dataset.dropdownDocsDelegated === 'true') return;
    document.documentElement.dataset.dropdownDocsDelegated = 'true';

    document.addEventListener('click', e => {
      const dl = e.target.closest('[data-drp-download]');
      if (dl) downloadAsset(dl.dataset.drpDownload, dl);
    });
  }

  return { initDropdownDoc, bindDropdownDelegated };
})();

window.dropdownDocs = dropdownDocs;

// Boot automático
(function bootDropdownDocs() {
  dropdownDocs.bindDropdownDelegated();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => dropdownDocs.initDropdownDoc(document));
  } else {
    dropdownDocs.initDropdownDoc(document);
  }
  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => dropdownDocs.initDropdownDoc(document));
    });
  }
})();
