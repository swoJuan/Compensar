const modalDocs = (() => {
  const specs = {
    warning: { label: 'Warning', icon: 'warning', title: 'La cita no fue posible agendarla', message: 'Por favor intenta más tarde o puedes comunicarte con uno de nuestros asesores a través de Vita.' },
    info: { label: 'Info', icon: 'info', title: 'Información importante', message: 'Revisa esta información antes de continuar.' },
    success: { label: 'Success', icon: 'check_circle', title: 'Solicitud completada', message: 'La operación se realizó correctamente.' },
    error: { label: 'Error', icon: 'error', title: 'No fue posible continuar', message: 'Inténtalo nuevamente o comunícate con soporte.' }
  };

  const sizeMap = {
    sm: { label: 'Pequeño', dialogClass: 'modal-sm', width: '300px' },
    md: { label: 'Mediano', dialogClass: '', width: '479px' },
    lg: { label: 'Grande', dialogClass: 'modal-lg', width: '800px' }
  };

  const exportJson = {
    component: 'Modal',
    source: 'core/components/web/_modals.scss',
    figma: { fileKey: '1zVGMpzqBgiBUqhmfFEAoT', nodeId: '4595:28317' },
    bootstrapBase: ['.modal', '.modal-dialog', '.modal-content', '.modal-sm', '.modal-lg'],
    classes: ['.mp-modal', '.mp-modal--info', '.mp-modal--success', '.mp-modal--warning', '.mp-modal--error'],
    sizes: { small: '300px', medium: '479px', large: '800px' },
    tokens: {
      overlay: '#111111 at 30%',
      contentWidth: '479px',
      contentPadding: '24px',
      contentGap: '24px',
      radius: '12px',
      border: '1px #cccccc',
      shadow: '2px 5px 16px rgba(0,0,0,.15)',
      iconContainer: '64px',
      iconInner: '32px',
      close: '32px',
      title: 'Roboto Bold 28px / 1.2',
      body: 'Roboto Regular 18px / 1.3'
    }
  };

  function stateFromPage(page) {
    return {
      kind: page.querySelector('[data-modal-control="kind"]')?.value || 'warning',
      size: page.querySelector('[data-modal-control="size"]')?.value || 'md',
      theme: page.querySelector('[data-modal-control="theme"]')?.value || 'light',
      title: page.querySelector('[data-modal-control="title"]')?.value || specs.warning.title,
      message: page.querySelector('[data-modal-control="message"]')?.value || specs.warning.message,
      action: page.querySelector('[data-modal-control="action"]')?.value || 'Acción',
      secondary: page.querySelector('[data-modal-control="secondary"]')?.checked ?? false
    };
  }

  function makeModalShell({ kind = 'warning', size = 'md', title, message, action = 'Acción', secondary = false } = {}) {
    const spec = specs[kind] || specs.warning;
    const sizeSpec = sizeMap[size] || sizeMap.md;
    const root = document.createElement('div');
    const sizeClass = size === 'sm' ? ' mp-modal--sm' : size === 'lg' ? ' mp-modal--lg' : '';
    root.className = `mp-modal mp-modal-static mp-modal--${kind}${sizeClass}`;
    root.innerHTML = `
      <div class="modal-dialog modal-dialog-centered mp-modal__dialog ${sizeSpec.dialogClass}">
        <div class="modal-content mp-modal__content" role="document">
          <button type="button" class="mp-btn mp-btn--terciario mp-btn--icon-only mp-modal__close" aria-label="Cerrar modal" data-modal-close>
            <span class="material-symbols-rounded" aria-hidden="true">close</span>
          </button>
          <span class="mp-modal__icon">
            <span class="material-symbols-rounded" aria-hidden="true">${spec.icon}</span>
          </span>
          <h2 class="mp-modal__title">${escapeHtml(title || spec.title)}</h2>
          <p class="mp-modal__body">${escapeHtml(message || spec.message)}</p>
          <div class="mp-modal__actions">
            ${secondary ? '<button type="button" class="mp-btn mp-btn--secundario" data-modal-close>Cancelar</button>' : ''}
            <button type="button" class="mp-btn mp-btn--primario" data-modal-close>${escapeHtml(action)}</button>
          </div>
        </div>
      </div>`;
    return root;
  }

  function renderAnatomy(page, kind) {
    if (!page) return;
    const activeKind = kind || page.querySelector('[data-modal-anatomy][aria-pressed="true"]')?.dataset.modalAnatomy || 'warning';
    const preview = page.querySelector('#modal-anatomy-preview');
    const showLabels = page.querySelector('[data-modal-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-modal-toggle="measures"]')?.checked ?? true;
    const secondary = page.querySelector('[data-modal-toggle="secondary"]')?.checked ?? false;
    page.querySelectorAll('[data-modal-anatomy]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item.dataset.modalAnatomy === activeKind));
    });
    page.querySelectorAll('.modal-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.modal-measure').forEach((item) => { item.hidden = !showMeasures; });
    preview.replaceChildren(makeModalShell({ kind: activeKind, size: 'md', secondary }));
  }

  function renderPlayground(page) {
    if (!page) return;
    const preview = page.querySelector('#modal-playground-preview');
    const output = page.querySelector('#modal-code-output');
    const tab = page.querySelector('[data-modal-code-tab][aria-selected="true"]')?.dataset.modalCodeTab || 'html';
    const state = stateFromPage(page);
    preview.dataset.theme = state.theme;
    preview.replaceChildren(makeModalShell(state));
    output.textContent = codeForTab(tab, state);
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      const classes = ['.modal', '.modal-dialog', '.modal-content', '.mp-modal', `.mp-modal--${state.kind}`];
      if (state.size === 'sm') classes.push('.modal-sm');
      if (state.size === 'lg') classes.push('.modal-lg');
      if (state.theme !== 'light') classes.push(`[data-theme="${state.theme}"]`);
      return classes.join('\n');
    }
    if (tab === 'tokens') {
      return `overlay: #111111 / 30%
width-sm: 300px
width-md: 479px
width-lg: 800px
padding: 24px
gap: 24px
border-radius: 12px
border: 1px #cccccc
shadow: 2px 5px 16px rgba(0,0,0,.15)
icon-container: 64px
icon-inner: 32px
close: 32px
title: Roboto Bold 28px / 1.2
body: Roboto Regular 18px / 1.3`;
    }
    return htmlForState(state);
  }

  function htmlForState(state) {
    const spec = specs[state.kind] || specs.warning;
    const sizeClass = sizeMap[state.size]?.dialogClass ? ` ${sizeMap[state.size].dialogClass}` : '';
    return `<div class="modal mp-modal mp-modal--${state.kind} fade" id="modal-example" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-example-title" aria-describedby="modal-example-description">
  <div class="modal-dialog modal-dialog-centered${sizeClass} mp-modal__dialog">
    <div class="modal-content mp-modal__content">
      <button type="button" class="mp-btn mp-btn--terciario mp-btn--icon-only mp-modal__close" data-bs-dismiss="modal" aria-label="Cerrar modal">
        <span class="material-symbols-rounded" aria-hidden="true">close</span>
      </button>
      <span class="mp-modal__icon">
        <span class="material-symbols-rounded" aria-hidden="true">${spec.icon}</span>
      </span>
      <h2 class="mp-modal__title" id="modal-example-title">${escapeHtml(state.title)}</h2>
      <p class="mp-modal__body" id="modal-example-description">${escapeHtml(state.message)}</p>
      <div class="mp-modal__actions">${state.secondary ? '\n        <button type="button" class="mp-btn mp-btn--secundario" data-bs-dismiss="modal">Cancelar</button>' : ''}
        <button type="button" class="mp-btn mp-btn--primario" data-bs-dismiss="modal">${escapeHtml(state.action)}</button>
      </div>
    </div>
  </div>
</div>`;
  }

  function renderStaticCode(page) {
    const output = page.querySelector('#modal-static-code');
    if (!output) return;
    output.textContent = htmlForState({
      kind: 'warning',
      size: 'md',
      title: specs.warning.title,
      message: specs.warning.message,
      action: 'Acción',
      secondary: true
    });
  }

  function showDemo(page, trigger) {
    if (!page) return;
    const state = stateFromPage(page);
    document.querySelector('.modal-live-layer')?.remove();
    const layer = document.createElement('div');
    layer.className = 'modal-live-layer';
    layer.dataset.theme = state.theme;
    layer.innerHTML = '<div class="mp-modal-backdrop"></div>';
    const modal = document.createElement('div');
    modal.className = `modal mp-modal mp-modal--open mp-modal--${state.kind}`;
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-live-title');
    modal.setAttribute('aria-describedby', 'modal-live-description');
    modal.appendChild(makeModalShell(state).querySelector('.modal-dialog'));
    modal.querySelector('.mp-modal__title').id = 'modal-live-title';
    modal.querySelector('.mp-modal__body').id = 'modal-live-description';
    layer.appendChild(modal);
    document.body.appendChild(layer);

    const close = () => {
      layer.remove();
      trigger?.focus();
      document.removeEventListener('keydown', onKeydown);
    };
    const onKeydown = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') trapFocus(event, modal);
    };
    layer.addEventListener('click', (event) => {
      if (event.target.closest('[data-modal-close]')) close();
    });
    document.addEventListener('keydown', onKeydown);
    window.requestAnimationFrame(() => {
      (modal.querySelector('[data-modal-close]') || modal).focus();
    });
  }

  function trapFocus(event, container) {
    const focusable = [...container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      .filter((item) => !item.disabled && item.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function downloadAsset(type, trigger) {
    const assets = {
      css: ['mp-modal-core.css', 'text/css', buildCssExport()],
      scss: ['_mp-modal-core.scss', 'text/x-scss', buildScssExport()],
      json: ['mp-modal.tokens.json', 'application/json', `${JSON.stringify(exportJson, null, 2)}\n`]
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
    return `/* Modal - Compensar Design System
   Fuente: core/components/web/_modals.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4595:28317 */

.mp-modal { --mp-modal-width: 479px; --mp-modal-bg: #ffffff; --mp-modal-border: #cccccc; --mp-modal-text: #111111; --mp-modal-overlay: rgba(17,17,17,.30); font-family: Roboto, Arial, sans-serif; }
.mp-modal .modal-dialog { max-width: var(--mp-modal-width); }
.mp-modal .modal-dialog.modal-sm { --mp-modal-width: 300px; }
.mp-modal .modal-dialog.modal-lg { --mp-modal-width: 800px; }
.mp-modal .modal-content { display: flex; align-items: center; gap: 24px; padding: 24px; border: 1px solid var(--mp-modal-border); border-radius: 12px; background: var(--mp-modal-bg); color: var(--mp-modal-text); box-shadow: 2px 5px 16px rgba(0,0,0,.15); text-align: center; }
.mp-modal__close { position: absolute; top: 19px; right: 23px; width: 32px; height: 32px; }
.mp-modal__icon { display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border: 5px solid #fff2d9; border-radius: 48px; background: #ffc154; }
.mp-modal__icon .material-symbols-rounded { font-size: 32px; }
.mp-modal .mp-modal__title { margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; }
.mp-modal .mp-modal__body { margin: 0; font-size: 18px; line-height: 1.3; }
.mp-modal__actions { display: flex; justify-content: center; gap: 24px; width: 100%; }
`;
  }

  function buildScssExport() {
    return `// Modal - estilos planos para dummy/demo
// Fuente productiva: core/components/web/_modals.scss

$mp-modal-width-sm: 300px;
$mp-modal-width-md: 479px;
$mp-modal-width-lg: 800px;
$mp-modal-padding: 24px;
$mp-modal-gap: 24px;
$mp-modal-radius: 12px;
$mp-modal-icon: 64px;
$mp-modal-icon-inner: 32px;
$mp-modal-close: 32px;
$mp-modal-overlay: rgba(17, 17, 17, .30);
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
    button.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">check</span>${label}`;
    window.setTimeout(() => { button.innerHTML = original; }, 1400);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[char]));
  }

  function findPage(target) {
    return target?.closest('[data-component-doc="modals"]') || document.querySelector('[data-component-doc="modals"]');
  }

  function initModalDoc(root = document) {
    const page = root.querySelector('[data-component-doc="modals"]');
    if (!page || page.dataset.modalInitialized === 'true') return;
    renderAnatomy(page, 'warning');
    renderPlayground(page);
    renderStaticCode(page);
    page.dataset.modalInitialized = 'true';
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.modalDocsDelegated === 'true') return;
    document.documentElement.dataset.modalDocsDelegated = 'true';
    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-modal-anatomy]');
      const codeTab = event.target.closest('[data-modal-code-tab]');
      const copyCode = event.target.closest('[data-copy-modal-code]');
      const copyStatic = event.target.closest('[data-copy-modal-static]');
      const download = event.target.closest('[data-modal-download]');
      const demo = event.target.closest('[data-modal-demo]');
      if (anatomy) renderAnatomy(findPage(anatomy), anatomy.dataset.modalAnatomy);
      if (codeTab) {
        const page = findPage(codeTab);
        page.querySelectorAll('[data-modal-code-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === codeTab)));
        renderPlayground(page);
      }
      if (copyCode) copyText(findPage(copyCode).querySelector('#modal-code-output')?.textContent || '', copyCode);
      if (copyStatic) copyText(findPage(copyStatic).querySelector('#modal-static-code')?.textContent || '', copyStatic);
      if (download) downloadAsset(download.dataset.modalDownload, download);
      if (demo) showDemo(findPage(demo), demo);
    });
    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-modal-control]')) {
        renderPlayground(findPage(event.target));
      }
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-modal-control]')) {
        renderPlayground(findPage(event.target));
      }
      if (event.target.matches('[data-modal-toggle]')) renderAnatomy(findPage(event.target));
    });
  }

  return { initModalDoc, bindDelegatedEvents };
})();

window.modalDocs = modalDocs;

function bootModalDocs() {
  modalDocs.bindDelegatedEvents();
  modalDocs.initModalDoc(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => modalDocs.initModalDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootModalDocs);
} else {
  bootModalDocs();
}
