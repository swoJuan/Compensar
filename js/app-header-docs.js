const appHeaderDocs = (() => {
  function findPage(node) {
    return node?.closest?.('[data-component-doc="app-header"]') || document.querySelector('[data-component-doc="app-header"]');
  }

  function stateFromPage(page) {
    const variant = page.querySelector('[data-app-header-control="variant"]')?.value || 'home';
    const left = page.querySelector('[data-app-header-control="left"]')?.value || (variant === 'home' ? 'menu' : 'back');
    return {
      variant,
      title: page.querySelector('[data-app-header-control="title"]')?.value || 'Consentimiento',
      left,
      notification: page.querySelector('[data-app-header-control="notification"]')?.checked !== false
    };
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function actionHtml(type, label) {
    if (type === 'none') return '<span class="app-header-action app-header-action--empty" aria-hidden="true"></span>';
    const icon = type === 'back' ? 'arrow-left' : type === 'menu' ? 'align-justify' : 'bell';
    return `<button class="app-header-action" type="button" aria-label="${label}"><i class="icon icon-${icon}" aria-hidden="true"></i></button>`;
  }

  function brandHtml() {
    return `<div class="app-header-brand" aria-label="Compensar medicina prepagada">
      <span class="app-header-mark" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></span>
      <span class="app-header-brand-name">compensar</span>
      <span class="app-header-divider"></span>
      <span class="app-header-brand-service">medicina<br>prepagada</span>
    </div>`;
  }

  function buildHeader(state = {}) {
    const variant = state.variant || 'home';
    const left = state.left || (variant === 'home' ? 'menu' : 'back');
    const center = variant === 'home'
      ? brandHtml()
      : `<h2 class="app-header-title">${escapeHtml(state.title || 'Consentimiento')}</h2>`;
    const right = state.notification === false
      ? actionHtml('none', '')
      : actionHtml('bell', 'Notificaciones');
    return `<header class="app-mobile-header app-mobile-header--${variant}" aria-label="Header App">
      ${actionHtml(left, left === 'back' ? 'Volver' : 'Abrir menú')}
      ${center}
      ${right}
    </header>`;
  }

  function renderPreview(page) {
    if (!page) return;
    const preview = page.querySelector('#app-header-preview');
    if (preview) preview.innerHTML = buildHeader(stateFromPage(page));
  }

  function renderAnatomy(page, variant = 'home') {
    if (!page) return;
    page.querySelectorAll('[data-app-header-anatomy]').forEach((button) => {
      const active = button.dataset.appHeaderAnatomy === variant;
      button.setAttribute('aria-pressed', String(active));
    });
    const preview = page.querySelector('#app-header-anatomy-preview');
    if (preview) {
      preview.innerHTML = buildHeader({
        variant,
        left: variant === 'home' ? 'menu' : 'back',
        title: 'Consentimiento',
        notification: true
      });
    }
  }

  function switchCodeTab(page, tabId = 'xaml') {
    if (!page) return;
    page.querySelectorAll('[data-app-header-code-tab]').forEach((button) => {
      const active = button.dataset.appHeaderCodeTab === tabId;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    page.querySelectorAll('#app-header-code-xaml, #app-header-code-csharp, #app-header-code-tokens').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `app-header-code-${tabId}`);
    });
  }

  function switchCodeTabFromButton(button) {
    switchCodeTab(findPage(button), button?.dataset.appHeaderCodeTab);
  }

  function copyText(text, button) {
    if (!text || !button) return;
    navigator.clipboard?.writeText(text).then(() => {
      const original = button.innerHTML;
      button.innerHTML = '<i class="icon icon-check icon-16" aria-hidden="true"></i>Copiado';
      window.setTimeout(() => { button.innerHTML = original; }, 1600);
    });
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.appHeaderDocsDelegated === 'true') return;
    document.documentElement.dataset.appHeaderDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-app-header-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.appHeaderAnatomy);
        return;
      }

      const codeTab = event.target.closest('[data-app-header-code-tab]');
      if (codeTab) {
        switchCodeTabFromButton(codeTab);
        return;
      }

      const copyCode = event.target.closest('[data-app-header-copy-code]');
      if (copyCode) {
        const page = findPage(copyCode);
        const code = page?.querySelector('#app-header-code-xaml.active, #app-header-code-csharp.active, #app-header-code-tokens.active')?.textContent || '';
        copyText(code, copyCode);
      }
    });

    document.addEventListener('input', (event) => {
      if (!event.target.matches('[data-app-header-control]')) return;
      renderPreview(findPage(event.target));
    });

    document.addEventListener('change', (event) => {
      if (!event.target.matches('[data-app-header-control]')) return;
      const page = findPage(event.target);
      if (event.target.dataset.appHeaderControl === 'variant') {
        const left = page.querySelector('[data-app-header-control="left"]');
        if (left) left.value = event.target.value === 'home' ? 'menu' : 'back';
      }
      renderPreview(page);
    });
  }

  function initAppHeaderDoc(root = document) {
    const page = root.querySelector('[data-component-doc="app-header"]');
    if (!page || page.dataset.appHeaderInitialized === 'true') return;
    renderAnatomy(page, 'home');
    renderPreview(page);
    switchCodeTab(page, 'xaml');
    page.dataset.appHeaderInitialized = 'true';
  }

  return { initAppHeaderDoc, bindDelegatedEvents, switchCodeTabFromButton };
})();

window.appHeaderDocs = appHeaderDocs;

function bootAppHeaderDocs() {
  appHeaderDocs.bindDelegatedEvents();
  appHeaderDocs.initAppHeaderDoc(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => appHeaderDocs.initAppHeaderDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootAppHeaderDocs);
} else {
  bootAppHeaderDocs();
}
