const selectionDocs = (() => {
  function iconMarkup(name, size = 16, extraClass = '') {
    return `<i class="icon icon-${name} icon-${size}${extraClass ? ` ${extraClass}` : ''}" aria-hidden="true"></i>`;
  }

  const specs = {
    checkbox: {
      label: 'Checkbox',
      width: '92 px',
      height: '44 px',
      gap: 'Gap 8 px',
      control: 'Icono 24 px · caja visual 18 px',
      state: 'Marcado / desmarcado',
      selectedState: 'checked',
      tokens: 'control: 24px\nvisual: 18px\nhit-area: 44px\ngap: 8px\nlabel: 16px Roboto Regular'
    },
    radio: {
      label: 'Radio',
      width: '92 px',
      height: '44 px',
      gap: 'Gap 8 px',
      control: 'Icono 24 px · punto interno 8 px',
      state: 'Una opción por grupo',
      selectedState: 'checked',
      tokens: 'control: 24px\nvisual: 18px\nhit-area: 44px\ngap: 8px\nlabel: 16px Roboto Regular'
    },
    switch: {
      label: 'Switch',
      width: '104 px',
      height: '40 px',
      gap: 'Gap 10 px',
      control: 'Track 52 x 32 px · knob 28 px',
      state: 'On / Off inmediato',
      selectedState: 'on',
      tokens: 'switch-width: 52px\nswitch-height: 40px\ntrack-height: 32px\nknob: 28px\ngap: 10px'
    }
  };

  const staticCode = {
    checkbox: `<label class="mp-choice mp-checkbox">
  <span class="mp-choice__field">
    <input class="form-check-input mp-choice__input" type="checkbox">
    <span class="mp-choice__control" aria-hidden="true"></span>
  </span>
  <span class="mp-choice__text">
    <span class="mp-choice__label">Label</span>
  </span>
</label>`,
    radio: `<label class="mp-choice mp-radio">
  <span class="mp-choice__field">
    <input class="form-check-input mp-choice__input" type="radio" name="plan">
    <span class="mp-choice__control" aria-hidden="true"></span>
  </span>
  <span class="mp-choice__text">
    <span class="mp-choice__label">Label</span>
  </span>
</label>`,
    switch: `<label class="mp-switch">
  <span class="mp-switch__field">
    <input class="form-check-input mp-switch__input" type="checkbox" role="switch">
    <span class="mp-switch__track" aria-hidden="true"></span>
  </span>
  <span class="mp-switch__text">
    <span class="mp-switch__label">Label</span>
  </span>
</label>`
  };

  const exportJson = {
    component: 'Checkbox / Radio / Switch',
    source: 'core/components/web/_selection-controls.scss',
    figma: {
      fileKey: '1zVGMpzqBgiBUqhmfFEAoT',
      nodeId: '4540:38053'
    },
    classes: [
      '.mp-choice',
      '.mp-checkbox',
      '.mp-radio',
      '.mp-switch',
      '.mp-choice--error',
      '.mp-switch--error'
    ],
    tokens: {
      choiceControl: '24px',
      choiceVisual: '18px',
      hitArea: '44px',
      choiceGap: '8px',
      switchWidth: '52px',
      switchHeight: '40px',
      switchTrackHeight: '32px',
      switchKnob: '28px',
      label: 'Roboto Regular 16px',
      helper: 'Roboto Regular 14px'
    },
    modes: {
      light: {
        selected: 'var(--use-primary-default)',
        label: 'var(--use-text-primary)',
        surface: 'var(--use-surface-white)'
      },
      dark: {
        selected: 'var(--use-primary-default-dark, #ff9d5c)',
        label: 'var(--use-text-primary)',
        surface: '#292929'
      },
      highContrast: {
        selected: 'var(--use-primary-default, #ffff00)',
        label: 'var(--use-text-primary, #ffffff)',
        surface: '#000000'
      }
    }
  };

  function makeControl({ kind = 'checkbox', state = 'default', label = 'Label', helper = false, name = 'selection-demo' } = {}) {
    const isSwitch = kind === 'switch';
    const selected = state === 'selected';
    const error = state === 'error';
    const disabled = state === 'disabled';
    const focus = state === 'focus';

    if (isSwitch) {
      const root = document.createElement('label');
      root.className = `mp-switch${error ? ' mp-switch--error' : ''}`;
      root.innerHTML = `
        <span class="mp-switch__field">
          <input class="form-check-input mp-switch__input${focus ? ' is-focus-demo' : ''}" type="checkbox" role="switch"${selected || error ? ' checked' : ''}${disabled ? ' disabled' : ''}>
          <span class="mp-switch__track" aria-hidden="true"></span>
        </span>
        <span class="mp-switch__text">
          <span class="mp-switch__label">${escapeHtml(label || 'Label')}</span>
          <span class="mp-switch__helper">${iconMarkup('warning-circle', 16)} Campo obligatorio</span>
        </span>`;
      if (helper || error) root.querySelector('.mp-switch__helper').style.display = 'inline-flex';
      return root;
    }

    const root = document.createElement('label');
    root.className = `mp-choice mp-${kind}${error ? ' mp-choice--error' : ''}`;
    const type = kind === 'radio' ? 'radio' : 'checkbox';
    root.innerHTML = `
      <span class="mp-choice__field">
        <input class="form-check-input mp-choice__input${focus ? ' is-focus-demo' : ''}" type="${type}"${type === 'radio' ? ` name="${name}"` : ''}${selected || error ? ' checked' : ''}${disabled ? ' disabled' : ''}>
        <span class="mp-choice__control" aria-hidden="true"></span>
      </span>
      <span class="mp-choice__text">
        <span class="mp-choice__label">${escapeHtml(label || 'Label')}</span>
        <span class="mp-choice__helper">${iconMarkup('warning-circle', 16)} Campo obligatorio</span>
      </span>`;
    if (helper || error) root.querySelector('.mp-choice__helper').style.display = 'inline-flex';
    return root;
  }

  function stateFromPage(page) {
    return {
      kind: page.querySelector('[data-selection-control="kind"]')?.value || 'checkbox',
      state: page.querySelector('[data-selection-control="state"]')?.value || 'default',
      theme: page.querySelector('[data-selection-control="theme"]')?.value || 'light',
      label: page.querySelector('[data-selection-control="label"]')?.value || 'Label',
      helper: page.querySelector('[data-selection-control="helper"]')?.checked || false
    };
  }

  function renderAnatomy(page, kind) {
    const activeKind = kind || page.querySelector('[data-selection-anatomy][aria-pressed="true"]')?.dataset.selectionAnatomy || 'checkbox';
    const spec = specs[activeKind] || specs.checkbox;
    const preview = page.querySelector('#selection-anatomy-preview');
    const hitbox = page.querySelector('[data-selection-hitbox]');
    const showMeasures = page.querySelector('[data-selection-toggle="measures"]')?.checked ?? true;
    const showHit = page.querySelector('[data-selection-toggle="hit"]')?.checked ?? true;
    const showHelper = page.querySelector('[data-selection-toggle="helper"]')?.checked ?? false;

    page.querySelectorAll('[data-selection-anatomy]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item.dataset.selectionAnatomy === activeKind));
    });
    page.querySelector('[data-selection-measure="width"]').textContent = spec.width;
    page.querySelector('[data-selection-measure="height"]').textContent = spec.height;
    page.querySelector('[data-selection-measure="gap"]').textContent = spec.gap;
    page.querySelector('[data-selection-callout="control"]').textContent = spec.control;
    page.querySelector('[data-selection-callout="state"]').textContent = spec.state;
    page.querySelectorAll('.selection-measure').forEach((item) => { item.hidden = !showMeasures; });
    if (hitbox) {
      hitbox.hidden = !showHit;
      hitbox.classList.toggle('selection-hitbox--switch', activeKind === 'switch');
    }
    preview.replaceChildren(makeControl({ kind: activeKind, state: 'selected', helper: showHelper }));
  }

  function renderPlayground(page) {
    const preview = page.querySelector('#selection-playground-preview');
    const output = page.querySelector('#selection-code-output');
    const tab = page.querySelector('[data-selection-code-tab][aria-selected="true"]')?.dataset.selectionCodeTab || 'html';
    const state = stateFromPage(page);
    preview.dataset.theme = state.theme;
    preview.dataset.bsTheme = state.theme === 'dark' ? 'dark' : 'light';
    preview.replaceChildren(makeControl(state));
    output.textContent = codeForTab(tab, state);
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      const base = state.kind === 'switch' ? ['.mp-switch'] : ['.mp-choice', `.mp-${state.kind}`];
      if (state.state === 'error') base.push(state.kind === 'switch' ? '.mp-switch--error' : '.mp-choice--error');
      if (state.theme !== 'light') base.push(`[data-theme="${state.theme}"]`);
      return base.join('\n');
    }
    if (tab === 'tokens') {
      const spec = specs[state.kind] || specs.checkbox;
      return `${spec.tokens}
state: ${state.state}
theme: ${state.theme}
selected-color: ${state.theme === 'dark' ? 'var(--use-primary-default-dark, #ff9d5c)' : state.theme === 'high-contrast' ? 'var(--use-primary-default, #ffff00)' : 'var(--use-primary-default)'}`;
    }
    return htmlForState(state);
  }

  function htmlForState(state) {
    const checked = state.state === 'selected' || state.state === 'error';
    const disabled = state.state === 'disabled';
    const error = state.state === 'error';
    if (state.kind === 'switch') {
      return `<label class="mp-switch${error ? ' mp-switch--error' : ''}">
  <span class="mp-switch__field">
    <input class="form-check-input mp-switch__input" type="checkbox" role="switch"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}>
    <span class="mp-switch__track" aria-hidden="true"></span>
  </span>
  <span class="mp-switch__text">
    <span class="mp-switch__label">${escapeHtml(state.label)}</span>${state.helper || error ? `\n    <span class="mp-switch__helper">${iconMarkup('warning-circle', 16)} Campo obligatorio</span>` : ''}
  </span>
</label>`;
    }
    return `<label class="mp-choice mp-${state.kind}${error ? ' mp-choice--error' : ''}">
  <span class="mp-choice__field">
    <input class="form-check-input mp-choice__input" type="${state.kind === 'radio' ? 'radio" name="selection-demo' : 'checkbox'}"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}>
    <span class="mp-choice__control" aria-hidden="true"></span>
  </span>
  <span class="mp-choice__text">
    <span class="mp-choice__label">${escapeHtml(state.label)}</span>${state.helper || error ? `\n    <span class="mp-choice__helper">${iconMarkup('warning-circle', 16)} Campo obligatorio</span>` : ''}
  </span>
</label>`;
  }

  function renderStates(page) {
    page.querySelectorAll('[data-selection-state-demo]').forEach((slot) => {
      const state = slot.dataset.selectionStateDemo;
      slot.replaceChildren(
        makeControl({ kind: 'checkbox', state, label: 'Label', name: `checkbox-${state}` }),
        makeControl({ kind: 'radio', state, label: 'Label', name: `radio-${state}` }),
        makeControl({ kind: 'switch', state, label: 'Label' })
      );
    });
  }

  function renderStaticCode(page, key = 'checkbox') {
    const output = page.querySelector('#selection-static-code');
    if (!output) return;
    output.textContent = staticCode[key] || staticCode.checkbox;
    page.querySelectorAll('[data-selection-static-tab]').forEach((tab) => {
      tab.setAttribute('aria-selected', String(tab.dataset.selectionStaticTab === key));
    });
  }

  function downloadAsset(type, trigger) {
    const assets = {
      css: ['mp-selection-controls-core.css', 'text/css', buildCssExport()],
      scss: ['_mp-selection-controls-core.scss', 'text/x-scss', buildScssExport()],
      json: ['mp-selection-controls.tokens.json', 'application/json', `${JSON.stringify(exportJson, null, 2)}\n`]
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

  function buildCssExport() {
    return `/* Checkbox / Radio / Switch - Compensar Design System
   Fuente: core/components/web/_selection-controls.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4540:38053
   Estilos planos para dummy/demo. */

:root,
[data-theme="light"] {
  --mp-choice-control-size: 24px;
  --mp-choice-visual-size: 18px;
  --mp-choice-hit-size: 44px;
  --mp-choice-gap: 8px;
  --mp-switch-width: 52px;
  --mp-switch-height: 40px;
  --mp-switch-track-height: 32px;
  --mp-switch-knob: 28px;
  --use-primary-default: #ff6600;
  --use-text-primary: #111111;
  --use-text-tertiary: #666666;
  --use-text-on-dark-primary: #ffffff;
  --use-surface-white: #ffffff;
  --use-state-error-icon: #d92d20;
  --use-state-error-text-error-field: #b42318;
  --use-focus-outline: #006fff;
  --color-focus-ring-width: 3px;
}

[data-theme="dark"] {
  --use-primary-default-dark: #ff9d5c;
  --use-text-primary: #f5f5f5;
  --use-text-tertiary: #e0e0e0;
  --use-surface-white: #292929;
}

[data-theme="high-contrast"] {
  --use-primary-default: #ffff00;
  --use-text-primary: #ffffff;
  --use-text-inverse: #000000;
  --use-surface-white: #000000;
  --use-focus-outline: #ffff00;
}

.mp-choice {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--mp-choice-gap);
  min-height: var(--mp-choice-hit-size);
  color: var(--use-text-primary);
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: .01em;
}

.mp-choice__field {
  position: relative;
  display: inline-grid;
  place-items: center;
  flex: 0 0 var(--mp-choice-hit-size);
  width: var(--mp-choice-hit-size);
  height: var(--mp-choice-hit-size);
}

.mp-choice__input {
  position: absolute;
  inset: 0;
  width: var(--mp-choice-hit-size);
  height: var(--mp-choice-hit-size);
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.mp-choice__control {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: var(--mp-choice-control-size);
  height: var(--mp-choice-control-size);
}

.mp-choice__control::before {
  content: "";
  width: var(--mp-choice-visual-size);
  height: var(--mp-choice-visual-size);
  border: 1.5px solid var(--use-text-primary);
  background: transparent;
}

.mp-checkbox .mp-choice__control::before { border-radius: 2px; }
.mp-radio .mp-choice__control::before { border-radius: 50%; }

.mp-choice__input:checked + .mp-choice__control::before {
  border-color: var(--use-primary-default);
  background: var(--use-primary-default);
}

.mp-checkbox .mp-choice__input:checked + .mp-choice__control::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 6px;
  border-left: 2px solid var(--use-text-on-dark-primary);
  border-bottom: 2px solid var(--use-text-on-dark-primary);
  transform: rotate(-45deg);
}

.mp-radio .mp-choice__input:checked + .mp-choice__control::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--use-text-on-dark-primary);
}

.mp-choice__input:focus-visible + .mp-choice__control,
.mp-choice__input.is-focus-demo + .mp-choice__control {
  outline: var(--color-focus-ring-width) solid var(--use-focus-outline);
  outline-offset: 2px;
  border-radius: 999px;
}

.mp-choice__text {
  display: grid;
  gap: 4px;
  padding-top: 10px;
}

.mp-choice__helper {
  display: none;
  gap: 4px;
  color: var(--use-state-error-text-error-field);
  font-size: 14px;
}

.mp-choice--error .mp-choice__helper { display: inline-flex; }
.mp-choice--error .mp-choice__control::before { border-color: var(--use-state-error-icon); }
.mp-choice:has(.mp-choice__input:disabled) { opacity: .38; cursor: not-allowed; }

.mp-switch {
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  min-height: 44px;
  color: var(--use-text-primary);
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.mp-switch__field {
  position: relative;
  width: var(--mp-switch-width);
  height: var(--mp-switch-height);
}

.mp-switch__input {
  position: absolute;
  inset: 0;
  width: var(--mp-switch-width);
  height: var(--mp-switch-height);
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.mp-switch__track {
  position: absolute;
  left: 0;
  top: 4px;
  width: var(--mp-switch-width);
  height: var(--mp-switch-track-height);
  border-radius: 999px;
  background: #999999;
}

.mp-switch__track::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: var(--mp-switch-knob);
  height: var(--mp-switch-knob);
  border-radius: 50%;
  background: var(--use-surface-white);
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  transition: transform .18s;
}

.mp-switch__input:checked + .mp-switch__track {
  background: var(--use-primary-default);
}

.mp-switch__input:checked + .mp-switch__track::after {
  transform: translateX(20px);
}

.mp-switch__input:focus-visible + .mp-switch__track,
.mp-switch__input.is-focus-demo + .mp-switch__track {
  outline: var(--color-focus-ring-width) solid var(--use-focus-outline);
  outline-offset: 2px;
}

.mp-switch__text {
  display: grid;
  gap: 4px;
  padding-top: 8px;
}

.mp-switch__helper {
  display: none;
  gap: 4px;
  color: var(--use-state-error-text-error-field);
  font-size: 14px;
}

.mp-switch--error .mp-switch__helper { display: inline-flex; }
.mp-switch:has(.mp-switch__input:disabled) { opacity: .38; cursor: not-allowed; }

[data-theme="dark"] .mp-choice__input:checked + .mp-choice__control::before,
[data-theme="dark"] .mp-switch__input:checked + .mp-switch__track {
  background: var(--use-primary-default-dark);
  border-color: var(--use-primary-default-dark);
}
`;
  }

  function buildScssExport() {
    return `// Checkbox / Radio / Switch - estilos planos para dummy/demo\n// Fuente productiva: core/components/web/_selection-controls.scss\n\n$mp-choice-control-size: 24px;\n$mp-choice-visual-size: 18px;\n$mp-choice-hit-size: 44px;\n$mp-choice-gap: 8px;\n$mp-switch-width: 52px;\n$mp-switch-height: 40px;\n$mp-switch-track-height: 32px;\n$mp-switch-knob: 28px;\n\n// Copiar las clases productivas desde core/components/web/_selection-controls.scss.\n`;
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

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));
  }

  function findPage(target) {
    return target?.closest('[data-component-doc="selection-controls"]') || document.querySelector('[data-component-doc="selection-controls"]');
  }

  function initSelectionDoc(root = document) {
    const page = root.querySelector('[data-component-doc="selection-controls"]');
    if (!page || page.dataset.selectionInitialized === 'true') return;
    renderAnatomy(page, 'checkbox');
    renderPlayground(page);
    renderStates(page);
    renderStaticCode(page, 'checkbox');
    page.dataset.selectionInitialized = 'true';
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.selectionDocsDelegated === 'true') return;
    document.documentElement.dataset.selectionDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-selection-anatomy]');
      const codeTab = event.target.closest('[data-selection-code-tab]');
      const staticTab = event.target.closest('[data-selection-static-tab]');
      const copyCode = event.target.closest('[data-copy-selection-code]');
      const copyStatic = event.target.closest('[data-copy-selection-static]');
      const download = event.target.closest('[data-selection-download]');
      if (anatomy) renderAnatomy(findPage(anatomy), anatomy.dataset.selectionAnatomy);
      if (codeTab) {
        const page = findPage(codeTab);
        page.querySelectorAll('[data-selection-code-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === codeTab)));
        renderPlayground(page);
      }
      if (staticTab) renderStaticCode(findPage(staticTab), staticTab.dataset.selectionStaticTab);
      if (copyCode) copyText(findPage(copyCode).querySelector('#selection-code-output')?.textContent || '', copyCode);
      if (copyStatic) copyText(findPage(copyStatic).querySelector('#selection-static-code')?.textContent || '', copyStatic);
      if (download) downloadAsset(download.dataset.selectionDownload, download);
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-selection-control]')) renderPlayground(findPage(event.target));
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-selection-control]')) renderPlayground(findPage(event.target));
      if (event.target.matches('[data-selection-toggle]')) renderAnatomy(findPage(event.target));
    });
  }

  return { initSelectionDoc, bindDelegatedEvents };
})();

window.selectionDocs = selectionDocs;

function bootSelectionDocs() {
  selectionDocs.bindDelegatedEvents();
  selectionDocs.initSelectionDoc(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => selectionDocs.initSelectionDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootSelectionDocs);
} else {
  bootSelectionDocs();
}
