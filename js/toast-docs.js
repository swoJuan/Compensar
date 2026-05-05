const toastDocs = (() => {
  const specs = {
    success: { label: 'Success', icon: 'check-circle', title: 'Toast title', message: 'Toast message', role: 'status' },
    info: { label: 'Info', icon: 'info', title: 'Información importante', message: 'Revisa la información antes de continuar.', role: 'status' },
    warning: { label: 'Warning', icon: 'warning', title: 'Revisa antes de continuar', message: 'Hay información que puede afectar el proceso.', role: 'status' },
    error: { label: 'Error', icon: 'warning-circle', title: 'No fue posible continuar', message: 'Inténtalo nuevamente.', role: 'alert' }
  };

  function iconMarkup(name, size = 16, extraClass = '') {
    return `<i class="icon icon-${name} icon-${size}${extraClass ? ` ${extraClass}` : ''}" aria-hidden="true"></i>`;
  }

  const exportJson = {
    component: 'Toast',
    source: 'core/components/web/_toasts.scss',
    figma: { fileKey: '1zVGMpzqBgiBUqhmfFEAoT', nodeId: '4590:22197' },
    classes: ['.mp-toast', '.mp-toast--info', '.mp-toast--success', '.mp-toast--warning', '.mp-toast--error', '.mp-toast-region'],
    behavior: { autoClose: '5s', manualClose: true, recommendedPosition: 'top-right', maxVisible: '1-2' },
    tokens: {
      maxWidth: '350px',
      figmaWidthObserved: '427px',
      heightExample: '78px',
      padding: '16px',
      gap: '16px',
      radius: '12px',
      iconSize: '32px',
      closeSize: '24px',
      title: 'Roboto SemiBold 16px / 1.3',
      body: 'Roboto Regular 14px / 1.5'
    }
  };

  function stateFromPage(page) {
    return {
      kind: page.querySelector('[data-toast-control="kind"]')?.value || 'success',
      theme: page.querySelector('[data-toast-control="theme"]')?.value || 'light',
      title: page.querySelector('[data-toast-control="title"]')?.value || 'Toast title',
      message: page.querySelector('[data-toast-control="message"]')?.value || 'Toast message',
      close: page.querySelector('[data-toast-control="close"]')?.checked ?? true
    };
  }

  function makeToast({ kind = 'success', title, message, close = true } = {}) {
    const spec = specs[kind] || specs.success;
    const root = document.createElement('div');
    root.className = `mp-toast mp-toast--${kind}`;
    root.setAttribute('role', spec.role);
    root.innerHTML = `
      ${iconMarkup(spec.icon, 32, 'mp-toast__icon')}
      <div class="mp-toast__content">
        <p class="mp-toast__title">${escapeHtml(title || spec.title)}</p>
        <p class="mp-toast__body">${escapeHtml(message || spec.message)}</p>
      </div>
      ${close ? `<button type="button" class="mp-btn mp-btn--terciario mp-btn--icon-only mp-toast__close" aria-label="Cerrar toast">${iconMarkup('x', 16)}</button>` : ''}`;
    return root;
  }

  function renderAnatomy(page, kind) {
    if (!page) return;
    const activeKind = kind || page.querySelector('[data-toast-anatomy][aria-pressed="true"]')?.dataset.toastAnatomy || 'success';
    const preview = page.querySelector('#toast-anatomy-preview');
    const showLabels = page.querySelector('[data-toast-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-toast-toggle="measures"]')?.checked ?? true;
    const close = page.querySelector('[data-toast-toggle="close"]')?.checked ?? true;
    page.querySelectorAll('[data-toast-anatomy]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item.dataset.toastAnatomy === activeKind));
    });
    page.querySelectorAll('.toast-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.toast-measure').forEach((item) => { item.hidden = !showMeasures; });
    preview.replaceChildren(makeToast({ kind: activeKind, close }));
  }

  function renderPlayground(page) {
    if (!page) return;
    const preview = page.querySelector('#toast-playground-preview');
    const output = page.querySelector('#toast-code-output');
    const tab = page.querySelector('[data-toast-code-tab][aria-selected="true"]')?.dataset.toastCodeTab || 'html';
    const state = stateFromPage(page);
    preview.dataset.theme = state.theme;
    preview.replaceChildren(makeToast(state));
    output.textContent = codeForTab(tab, state);
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      const classes = ['.mp-toast', `.mp-toast--${state.kind}`, '.mp-toast-region'];
      if (state.theme !== 'light') classes.push(`[data-theme="${state.theme}"]`);
      return classes.join('\n');
    }
    if (tab === 'tokens') {
      return `max-width: 350px
auto-close: 5s
padding: 16px
gap: 16px
border-radius: 12px
icon-size: 32px
close-size: 24px
title: Roboto SemiBold 16px / 1.3
body: Roboto Regular 14px / 1.5
theme: ${state.theme}`;
    }
    return htmlForState(state);
  }

  function htmlForState(state) {
    const spec = specs[state.kind] || specs.success;
    return `<div class="mp-toast-region" aria-live="polite" aria-atomic="true">
  <div class="mp-toast mp-toast--${state.kind}" role="${spec.role}">
    ${iconMarkup(spec.icon, 32, 'mp-toast__icon')}
    <div class="mp-toast__content">
      <p class="mp-toast__title">${escapeHtml(state.title)}</p>
      <p class="mp-toast__body">${escapeHtml(state.message)}</p>
    </div>${state.close ? `\n    <button type="button" class="mp-btn mp-btn--terciario mp-btn--icon-only mp-toast__close" aria-label="Cerrar toast">\n      ${iconMarkup('x', 16)}\n    </button>` : ''}
  </div>
</div>`;
  }

  function renderStates(page) {
    page.querySelectorAll('[data-toast-state-demo]').forEach((slot) => {
      const kind = slot.dataset.toastStateDemo;
      const spec = specs[kind] || specs.success;
      slot.replaceChildren(makeToast({ kind, title: spec.title, message: spec.message }));
    });
  }

  function renderStaticCode(page, key = 'success') {
    const output = page.querySelector('#toast-static-code');
    if (!output) return;
    const spec = specs[key] || specs.success;
    output.textContent = htmlForState({ kind: key, title: spec.title, message: spec.message, close: true });
    page.querySelectorAll('[data-toast-static-tab]').forEach((tab) => {
      tab.setAttribute('aria-selected', String(tab.dataset.toastStaticTab === key));
    });
  }

  function showDemo(page) {
    if (!page) return;
    const state = stateFromPage(page);
    let region = document.querySelector('.toast-live-region');
    if (!region) {
      region = document.createElement('div');
      region.className = 'toast-live-region';
      region.setAttribute('aria-live', 'polite');
      region.setAttribute('aria-atomic', 'true');
      document.body.appendChild(region);
    }
    const toast = makeToast(state);
    region.replaceChildren(toast);
    const close = toast.querySelector('.mp-toast__close');
    const removeToast = () => {
      toast.classList.add('mp-toast--is-leaving');
      window.setTimeout(() => toast.remove(), 180);
    };
    close?.addEventListener('click', removeToast);
    window.setTimeout(() => {
      if (toast.isConnected) removeToast();
    }, 5000);
  }

  function downloadAsset(type, trigger) {
    const assets = {
      css: ['mp-toast-core.css', 'text/css', buildCssExport()],
      scss: ['_mp-toast-core.scss', 'text/x-scss', buildScssExport()],
      json: ['mp-toast.tokens.json', 'application/json', `${JSON.stringify(exportJson, null, 2)}\n`]
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
    return `/* Toast - Compensar Design System
   Fuente: core/components/web/_toasts.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4590:22197 */

.mp-toast {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: min(100%, 350px);
  max-width: 350px;
  min-height: 78px;
  padding: 16px;
  border: 1px solid var(--mp-toast-border);
  border-radius: 12px;
  background: var(--mp-toast-bg);
  color: var(--mp-toast-body);
  font-family: Roboto, Arial, sans-serif;
}

.mp-toast__icon { width: 32px; height: 32px; font-size: 32px; color: var(--mp-toast-title); }
.mp-toast__content { display: grid; gap: 4px; flex: 1 1 auto; }
.mp-toast .mp-toast__title { margin: 0; color: var(--mp-toast-title); font-size: 16px; font-weight: 600; line-height: 1.3; }
.mp-toast .mp-toast__body { margin: 0; color: var(--mp-toast-body); font-size: 14px; line-height: 1.5; }
.mp-toast__close { width: 24px; height: 24px; min-width: 24px; min-height: 24px; }
.mp-toast--success { --mp-toast-bg: #e6f7e8; --mp-toast-border: #44bd75; --mp-toast-title: #0d3d1f; --mp-toast-body: #0d3d1f; }
.mp-toast--info { --mp-toast-bg: #e6f1fb; --mp-toast-border: #6c9fd0; --mp-toast-title: #2d4a67; --mp-toast-body: #0b3954; }
.mp-toast--warning { --mp-toast-bg: #fff2d9; --mp-toast-border: #fcce72; --mp-toast-title: #111111; --mp-toast-body: #111111; }
.mp-toast--error { --mp-toast-bg: #f7eeed; --mp-toast-border: #db7165; --mp-toast-title: #521a14; --mp-toast-body: #521a14; }
.mp-toast-region { position: fixed; z-index: 1080; top: 24px; right: 24px; display: grid; gap: 12px; width: min(350px, calc(100vw - 48px)); }
`;
  }

  function buildScssExport() {
    return `// Toast - estilos planos para dummy/demo
// Fuente productiva: core/components/web/_toasts.scss

$mp-toast-max-width: 350px;
$mp-toast-auto-close: 5s;
$mp-toast-padding: 16px;
$mp-toast-gap: 16px;
$mp-toast-radius: 12px;
$mp-toast-icon-size: 32px;
$mp-toast-close-size: 24px;
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
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[char]));
  }

  function findPage(target) {
    return target?.closest('[data-component-doc="toasts"]') || document.querySelector('[data-component-doc="toasts"]');
  }

  function initToastDoc(root = document) {
    const page = root.querySelector('[data-component-doc="toasts"]');
    if (!page || page.dataset.toastInitialized === 'true') return;
    renderAnatomy(page, 'success');
    renderPlayground(page);
    renderStates(page);
    renderStaticCode(page, 'success');
    page.dataset.toastInitialized = 'true';
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.toastDocsDelegated === 'true') return;
    document.documentElement.dataset.toastDocsDelegated = 'true';
    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-toast-anatomy]');
      const codeTab = event.target.closest('[data-toast-code-tab]');
      const staticTab = event.target.closest('[data-toast-static-tab]');
      const copyCode = event.target.closest('[data-copy-toast-code]');
      const copyStatic = event.target.closest('[data-copy-toast-static]');
      const download = event.target.closest('[data-toast-download]');
      const demo = event.target.closest('[data-toast-demo]');
      if (anatomy) renderAnatomy(findPage(anatomy), anatomy.dataset.toastAnatomy);
      if (codeTab) {
        const page = findPage(codeTab);
        page.querySelectorAll('[data-toast-code-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === codeTab)));
        renderPlayground(page);
      }
      if (staticTab) renderStaticCode(findPage(staticTab), staticTab.dataset.toastStaticTab);
      if (copyCode) copyText(findPage(copyCode).querySelector('#toast-code-output')?.textContent || '', copyCode);
      if (copyStatic) copyText(findPage(copyStatic).querySelector('#toast-static-code')?.textContent || '', copyStatic);
      if (download) downloadAsset(download.dataset.toastDownload, download);
      if (demo) showDemo(findPage(demo));
    });
    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-toast-control]')) {
        const page = findPage(event.target);
        renderPlayground(page);
        renderAnatomy(page, event.target.dataset.toastControl === 'kind' ? event.target.value : undefined);
      }
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-toast-control]')) {
        const page = findPage(event.target);
        renderPlayground(page);
        renderAnatomy(page, event.target.dataset.toastControl === 'kind' ? event.target.value : undefined);
      }
      if (event.target.matches('[data-toast-toggle]')) renderAnatomy(findPage(event.target));
    });
  }

  return { initToastDoc, bindDelegatedEvents };
})();

window.toastDocs = toastDocs;

function bootToastDocs() {
  toastDocs.bindDelegatedEvents();
  toastDocs.initToastDoc(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => toastDocs.initToastDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootToastDocs);
} else {
  bootToastDocs();
}
