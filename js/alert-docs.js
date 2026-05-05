const alertDocs = (() => {
  const specs = {
    info: {
      label: 'Info',
      icon: 'info',
      title: 'Información importante demo',
      message: 'Revisa la información demo antes de continuar.',
      role: 'status',
      gap: 'Gap 8 px',
      tokens: 'background: use/state/info/bg #e6f1fb\nborder: use/state/info/border #6c9fd0\ntext: use/state/info/text #2d4a67\nicon: 32px\ngap: 8px'
    },
    success: {
      label: 'Success',
      icon: 'check-circle',
      title: 'Acción completada',
      message: 'La información se guardó correctamente.',
      role: 'status',
      gap: 'Gap 16 px',
      tokens: 'background: use/state/success/bg #e6f7e8\nborder: use/state/success/border #44bd75\ntext: use/state/success/text #0d3d1f\nicon: 32px\ngap: 16px'
    },
    warning: {
      label: 'Warning',
      icon: 'warning',
      title: 'Revisa antes de continuar',
      message: 'Hay información que puede afectar el proceso.',
      role: 'status',
      gap: 'Gap 16 px',
      tokens: 'background: use/state/warning/bg #fff2d9\nborder: use/state/warning/border #fcce72\ntext: use/state/warning/text #111111\nicon: 32px\ngap: 16px'
    },
    error: {
      label: 'Error',
      icon: 'warning-circle',
      title: 'No fue posible continuar',
      message: 'Corrige los datos marcados e inténtalo nuevamente.',
      role: 'alert',
      gap: 'Gap 8 px',
      tokens: 'background: use/state/error/bg #f7eeed\nborder: use/state/error/border #db7165\ntext: use/state/error/text #521a14\nicon: 32px\ngap: 8px'
    }
  };

  function iconMarkup(name, size = 16, extraClass = '') {
    return `<i class="icon icon-${name} icon-${size}${extraClass ? ` ${extraClass}` : ''}" aria-hidden="true"></i>`;
  }

  const exportJson = {
    component: 'Alertas',
    source: 'core/components/web/_alerts.scss',
    figma: {
      fileKey: '1zVGMpzqBgiBUqhmfFEAoT',
      nodeId: '4574:1918'
    },
    classes: [
      '.mp-alert',
      '.mp-alert--info',
      '.mp-alert--success',
      '.mp-alert--warning',
      '.mp-alert--error',
      '.mp-alert--dismissible'
    ],
    tokens: {
      padding: '16px',
      borderWidth: '1px',
      radius: '12px',
      iconSize: '32px',
      contentGap: '4px',
      title: 'Roboto SemiBold 16px / 1.3',
      body: 'Roboto Regular 14px / 1.5',
      widthExample: '361px',
      minHeightExample: '78px'
    },
    modes: {
      light: {
        info: { bg: '#e6f1fb', border: '#6c9fd0', text: '#2d4a67' },
        success: { bg: '#e6f7e8', border: '#44bd75', text: '#0d3d1f' },
        warning: { bg: '#fff2d9', border: '#fcce72', text: '#111111' },
        error: { bg: '#f7eeed', border: '#db7165', text: '#521a14' }
      },
      dark: {
        info: { bg: '#18428f', border: '#296ff0', text: '#f5f5f5' },
        success: { bg: '#0b853d', border: '#22a152', text: '#f5f5f5' },
        warning: { bg: '#967229', border: '#fcbf44', text: '#f5f5f5' },
        error: { bg: '#7d291f', border: '#d14434', text: '#f5f5f5' }
      },
      highContrast: {
        info: { bg: '#102c5e', border: '#296ff0', text: '#ffffff' },
        success: { bg: '#0d3d1f', border: '#22a152', text: '#ffffff' },
        warning: { bg: '#634a1a', border: '#fcbf44', text: '#ffffff' },
        error: { bg: '#521a14', border: '#d14434', text: '#ffffff' }
      }
    }
  };

  function makeAlert({ kind = 'info', title, message, dismissible = false, focus = false } = {}) {
    const spec = specs[kind] || specs.info;
    const root = document.createElement('div');
    root.className = `mp-alert mp-alert--${kind}${dismissible ? ' mp-alert--dismissible' : ''}${focus ? ' mp-alert--is-focus' : ''}`;
    root.setAttribute('role', spec.role);
    root.innerHTML = `
      ${iconMarkup(spec.icon, 32, 'mp-alert__icon')}
      <div class="mp-alert__content">
        <p class="mp-alert__title">${escapeHtml(title || spec.title)}</p>
        <p class="mp-alert__body">${escapeHtml(message || spec.message)}</p>
      </div>
      ${dismissible ? `<button type="button" class="mp-btn mp-btn--terciario mp-btn--icon-only mp-alert__close" aria-label="Cerrar alerta">${iconMarkup('x', 16)}</button>` : ''}`;

    // Colors are handled entirely by the CSS cascade via [data-theme] on the
    // parent container — no inline overrides here so tokens resolve correctly.
    return root;
  }

  function stateFromPage(page) {
    return {
      kind: page.querySelector('[data-alert-control="kind"]')?.value || 'info',
      theme: page.querySelector('[data-alert-control="theme"]')?.value || 'light',
      title: page.querySelector('[data-alert-control="title"]')?.value || 'Información importante demo',
      message: page.querySelector('[data-alert-control="message"]')?.value || 'Revisa la información demo antes de continuar.',
      dismissible: page.querySelector('[data-alert-control="dismissible"]')?.checked || false,
      focus: page.querySelector('[data-alert-control="focus"]')?.checked || false
    };
  }

  function renderAnatomy(page, kind) {
    if (!page) return;
    const activeKind = kind || page.querySelector('[data-alert-anatomy][aria-pressed="true"]')?.dataset.alertAnatomy || 'info';
    const spec = specs[activeKind] || specs.info;
    const preview = page.querySelector('#alert-anatomy-preview');
    const stage = page.querySelector('[data-alert-anatomy-stage]');
    const showLabels = page.querySelector('[data-alert-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-alert-toggle="measures"]')?.checked ?? true;
    const dismissible = page.querySelector('[data-alert-toggle="dismissible"]')?.checked || false;

    page.querySelectorAll('[data-alert-anatomy]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item.dataset.alertAnatomy === activeKind));
    });
    if (stage) stage.dataset.theme = stateFromPage(page).theme;
    page.querySelector('[data-alert-measure="gap"]').textContent = spec.gap;
    page.querySelector('[data-alert-callout="spacing"]').textContent = `${spec.label}: ${spec.gap.replace('Gap ', '')}.`;
    page.querySelectorAll('.alert-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.alert-measure').forEach((item) => { item.hidden = !showMeasures; });
    preview.replaceChildren(makeAlert({ kind: activeKind, dismissible, theme: stateFromPage(page).theme }));
  }

  function renderPlayground(page) {
    if (!page) return;
    const preview = page.querySelector('#alert-playground-preview');
    const output = page.querySelector('#alert-code-output');
    const tab = page.querySelector('[data-alert-code-tab][aria-selected="true"]')?.dataset.alertCodeTab || 'html';
    const state = stateFromPage(page);
    preview.dataset.theme = state.theme;
    preview.replaceChildren(makeAlert(state));
    output.textContent = codeForTab(tab, state);
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      const classes = ['.mp-alert', `.mp-alert--${state.kind}`];
      if (state.dismissible) classes.push('.mp-alert--dismissible');
      if (state.focus) classes.push('.mp-alert--is-focus');
      if (state.theme !== 'light') classes.push(`[data-theme="${state.theme}"]`);
      return classes.join('\n');
    }
    if (tab === 'tokens') {
      const spec = specs[state.kind] || specs.info;
      const modeKey = state.theme === 'high-contrast' ? 'highContrast' : state.theme;
      const mode = exportJson.modes[modeKey]?.[state.kind] || exportJson.modes.light[state.kind];
      return `${spec.tokens}
theme: ${state.theme}
mode-background: ${mode.bg}
mode-border: ${mode.border}
mode-text: ${mode.text}
padding: 16px
border-radius: 12px
content-gap: 4px`;
    }
    return htmlForState(state);
  }

  function htmlForState(state) {
    const spec = specs[state.kind] || specs.info;
    return `<div class="mp-alert mp-alert--${state.kind}${state.dismissible ? ' mp-alert--dismissible' : ''}" role="${spec.role}">
  ${iconMarkup(spec.icon, 32, 'mp-alert__icon')}
  <div class="mp-alert__content">
    <p class="mp-alert__title">${escapeHtml(state.title)}</p>
    <p class="mp-alert__body">${escapeHtml(state.message)}</p>
  </div>${state.dismissible ? `\n  <button type="button" class="mp-btn mp-btn--terciario mp-btn--icon-only mp-alert__close" aria-label="Cerrar alerta">\n    ${iconMarkup('x', 16)}\n  </button>` : ''}
</div>`;
  }

  function renderStates(page) {
    const currentTheme = stateFromPage(page).theme;
    page.querySelectorAll('[data-alert-state-demo]').forEach((slot) => {
      const kind = slot.dataset.alertStateDemo;
      const spec = specs[kind] || specs.info;
      // Propagate the active theme so [data-theme] CSS cascade applies to alerts inside.
      slot.dataset.theme = currentTheme;
      slot.replaceChildren(makeAlert({ kind, title: spec.title, message: spec.message }));
    });
  }

  function renderStaticCode(page, key = 'info') {
    const output = page.querySelector('#alert-static-code');
    if (!output) return;
    const spec = specs[key] || specs.info;
    output.textContent = htmlForState({ kind: key, title: spec.title, message: spec.message, dismissible: key === 'error' });
    page.querySelectorAll('[data-alert-static-tab]').forEach((tab) => {
      tab.setAttribute('aria-selected', String(tab.dataset.alertStaticTab === key));
    });
  }

  function downloadAsset(type, trigger) {
    const assets = {
      css: ['mp-alert-core.css', 'text/css', buildCssExport()],
      scss: ['_mp-alert-core.scss', 'text/x-scss', buildScssExport()],
      json: ['mp-alert.tokens.json', 'application/json', `${JSON.stringify(exportJson, null, 2)}\n`]
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
    return `/* Alertas - Compensar Design System
   Fuente: core/components/web/_alerts.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4574:1918
   Estilos planos para dummy/demo. */

:root,
[data-theme="light"] {
  --mp-alert-padding: 16px;
  --mp-alert-radius: 12px;
  --mp-alert-icon-size: 32px;
  --mp-alert-content-gap: 4px;
  --use-state-info-bg: #e6f1fb;
  --use-state-info-border: #6c9fd0;
  --use-state-info-text: #2d4a67;
  --use-state-success-bg: #e6f7e8;
  --use-state-success-border: #44bd75;
  --use-state-success-text: #0d3d1f;
  --use-state-warning-bg: #fff2d9;
  --use-state-warning-border: #fcce72;
  --use-state-warning-text: #111111;
  --use-state-error-bg: #f7eeed;
  --use-state-error-border: #db7165;
  --use-state-error-text: #521a14;
}

.mp-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--mp-alert-gap, 8px);
  width: 100%;
  min-height: 78px;
  padding: var(--mp-alert-padding);
  border: 1px solid var(--mp-alert-border);
  border-radius: var(--mp-alert-radius);
  background: var(--mp-alert-bg);
  color: var(--mp-alert-body);
  font-family: Roboto, Arial, sans-serif;
}

.mp-alert__icon {
  flex: 0 0 var(--mp-alert-icon-size);
  width: var(--mp-alert-icon-size);
  height: var(--mp-alert-icon-size);
  color: var(--mp-alert-title);
  font-size: var(--mp-alert-icon-size);
}

.mp-alert__content { display: grid; gap: var(--mp-alert-content-gap); }
.mp-alert__title { margin: 0; color: var(--mp-alert-title); font-size: 16px; font-weight: 600; line-height: 1.3; }
.mp-alert__body { margin: 0; color: var(--mp-alert-body); font-size: 14px; line-height: 1.5; }
.mp-alert--info { --mp-alert-bg: #e6f1fb; --mp-alert-border: #6c9fd0; --mp-alert-title: #2d4a67; --mp-alert-body: #0b3954; --mp-alert-gap: 8px; }
.mp-alert--success { --mp-alert-bg: #e6f7e8; --mp-alert-border: #44bd75; --mp-alert-title: #0d3d1f; --mp-alert-body: #0d3d1f; --mp-alert-gap: 16px; }
.mp-alert--warning { --mp-alert-bg: #fff2d9; --mp-alert-border: #fcce72; --mp-alert-title: #111111; --mp-alert-body: #111111; --mp-alert-gap: 16px; }
.mp-alert--error { --mp-alert-bg: #f7eeed; --mp-alert-border: #db7165; --mp-alert-title: #521a14; --mp-alert-body: #521a14; --mp-alert-gap: 8px; }
[data-theme="dark"] .mp-alert--info { --mp-alert-bg: #18428f; --mp-alert-border: #296ff0; --mp-alert-title: #f5f5f5; --mp-alert-body: #f5f5f5; }
[data-theme="dark"] .mp-alert--success { --mp-alert-bg: #0b853d; --mp-alert-border: #22a152; --mp-alert-title: #f5f5f5; --mp-alert-body: #f5f5f5; }
[data-theme="dark"] .mp-alert--warning { --mp-alert-bg: #967229; --mp-alert-border: #fcbf44; --mp-alert-title: #f5f5f5; --mp-alert-body: #f5f5f5; }
[data-theme="dark"] .mp-alert--error { --mp-alert-bg: #7d291f; --mp-alert-border: #d14434; --mp-alert-title: #f5f5f5; --mp-alert-body: #f5f5f5; }
[data-theme="high-contrast"] .mp-alert--info { --mp-alert-bg: #102c5e; --mp-alert-border: #296ff0; --mp-alert-title: #ffffff; --mp-alert-body: #ffffff; }
[data-theme="high-contrast"] .mp-alert--success { --mp-alert-bg: #0d3d1f; --mp-alert-border: #22a152; --mp-alert-title: #ffffff; --mp-alert-body: #ffffff; }
[data-theme="high-contrast"] .mp-alert--warning { --mp-alert-bg: #634a1a; --mp-alert-border: #fcbf44; --mp-alert-title: #ffffff; --mp-alert-body: #ffffff; }
[data-theme="high-contrast"] .mp-alert--error { --mp-alert-bg: #521a14; --mp-alert-border: #d14434; --mp-alert-title: #ffffff; --mp-alert-body: #ffffff; }
`;
  }

  function buildScssExport() {
    return `// Alertas - estilos planos para dummy/demo
// Fuente productiva: core/components/web/_alerts.scss

$mp-alert-padding: 16px;
$mp-alert-radius: 12px;
$mp-alert-icon-size: 32px;
$mp-alert-content-gap: 4px;

// Copiar las clases productivas desde core/components/web/_alerts.scss.
`;
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
    return target?.closest('[data-component-doc="alerts"]') || document.querySelector('[data-component-doc="alerts"]');
  }

  function syncThemeWithPortal(page, explicitTheme) {
    if (!page) return;
    const themeControl = page.querySelector('[data-alert-control="theme"]');
    if (!themeControl) return;
    const globalTheme = explicitTheme || document.documentElement.getAttribute('data-theme') || 'light';
    if ([...themeControl.options].some((opt) => opt.value === globalTheme)) {
      themeControl.value = globalTheme;
    }
  }

  function initAlertDoc(root = document) {
    const page = root.querySelector('[data-component-doc="alerts"]');
    if (!page || page.dataset.alertInitialized === 'true') return;
    syncThemeWithPortal(page);
    renderAnatomy(page, 'info');
    renderPlayground(page);
    renderStates(page);
    renderStaticCode(page, 'info');
    page.dataset.alertInitialized = 'true';
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.alertDocsDelegated === 'true') return;
    document.documentElement.dataset.alertDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-alert-anatomy]');
      const codeTab = event.target.closest('[data-alert-code-tab]');
      const staticTab = event.target.closest('[data-alert-static-tab]');
      const copyCode = event.target.closest('[data-copy-alert-code]');
      const copyStatic = event.target.closest('[data-copy-alert-static]');
      const download = event.target.closest('[data-alert-download]');
      if (anatomy) renderAnatomy(findPage(anatomy), anatomy.dataset.alertAnatomy);
      if (codeTab) {
        const page = findPage(codeTab);
        page.querySelectorAll('[data-alert-code-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === codeTab)));
        renderPlayground(page);
      }
      if (staticTab) renderStaticCode(findPage(staticTab), staticTab.dataset.alertStaticTab);
      if (copyCode) copyText(findPage(copyCode).querySelector('#alert-code-output')?.textContent || '', copyCode);
      if (copyStatic) copyText(findPage(copyStatic).querySelector('#alert-static-code')?.textContent || '', copyStatic);
      if (download) downloadAsset(download.dataset.alertDownload, download);
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-alert-control]')) {
        const page = findPage(event.target);
        renderPlayground(page);
        renderAnatomy(page, event.target.dataset.alertControl === 'kind' ? event.target.value : undefined);
      }
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-alert-control]')) {
        const page = findPage(event.target);
        renderPlayground(page);
        renderAnatomy(page, event.target.dataset.alertControl === 'kind' ? event.target.value : undefined);
      }
      if (event.target.matches('[data-alert-toggle]')) renderAnatomy(findPage(event.target));
    });
  }

  // Sincroniza el tema global con el playground, anatomía y tarjetas de estado
  function syncTheme(theme) {
    const page = document.querySelector('[data-component-doc="alerts"]');
    if (!page) return;
    const themeControl = page.querySelector('[data-alert-control="theme"]');
    if (themeControl) themeControl.value = theme;
    renderPlayground(page);
    renderAnatomy(page);
    renderStates(page);
  }

  return { initAlertDoc, bindDelegatedEvents, syncTheme };
})();

window.alertDocs = alertDocs;

function bootAlertDocs() {
  alertDocs.bindDelegatedEvents();
  alertDocs.initAlertDoc(document);
}

if (document.documentElement.dataset.alertDocsThemeSync !== 'true') {
  document.documentElement.dataset.alertDocsThemeSync = 'true';
  document.addEventListener('ds:theme-change', (event) => {
    const theme = event?.detail?.theme || document.documentElement.getAttribute('data-theme') || 'light';
    alertDocs.syncTheme(theme);
  });
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => alertDocs.initAlertDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootAlertDocs);
} else {
  bootAlertDocs();
}
