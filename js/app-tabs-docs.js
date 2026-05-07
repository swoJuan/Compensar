const appTabsDocs = (() => {
  const labels = ['Video', 'Photos', 'Audio', 'Docs', 'More'];
  const icons = ['video-camera', 'image', 'music-note', 'article', 'dots-three'];

  function findPage(node) {
    return node?.closest?.('[data-component-doc="app-tabs"]') || document.querySelector('[data-component-doc="app-tabs"]');
  }

  function stateFromPage(page) {
    return {
      style: page.querySelector('[data-app-tabs-control="style"]')?.value || 'primary',
      type: page.querySelector('[data-app-tabs-control="type"]')?.value || 'fixed',
      config: page.querySelector('[data-app-tabs-control="config"]')?.value || 'label',
      count: Number(page.querySelector('[data-app-tabs-control="count"]')?.value || 3)
    };
  }

  function buildTabs(state = {}, activeIndex = 0) {
    const count = Math.max(2, Math.min(Number(state.count) || 3, 5));
    const classes = ['app-tabs', `app-tabs--${state.style || 'primary'}`, `app-tabs--${state.type || 'fixed'}`];
    if (state.config === 'icon-label') classes.push('app-tabs--with-icons');
    if (state.config === 'icon') classes.push('app-tabs--icon-only');
    const buttons = labels.slice(0, count).map((label, index) => {
      const active = index === activeIndex;
      const icon = `<i class="icon icon-${icons[index]}" aria-hidden="true"></i>`;
      const content = state.config === 'icon'
        ? icon
        : state.config === 'icon-label'
          ? `${icon}<span>${label}</span>`
          : label;
      return `<button class="app-tab${active ? ' is-active' : ''}" type="button" role="tab" aria-selected="${active}" data-app-tabs-preview-tab="${index}">${content}</button>`;
    }).join('');
    return `<div class="${classes.join(' ')}" role="tablist" aria-label="Tabs App">${buttons}</div>`;
  }

  function renderPreview(page, activeIndex = 0) {
    if (!page) return;
    const preview = page.querySelector('#app-tabs-preview');
    if (preview) preview.innerHTML = buildTabs(stateFromPage(page), activeIndex);
    page.dataset.appTabsActiveIndex = String(activeIndex);
  }

  function renderAnatomy(page, config = 'label') {
    if (!page) return;
    page.querySelectorAll('[data-app-tabs-anatomy]').forEach((button) => {
      const active = button.dataset.appTabsAnatomy === config;
      button.setAttribute('aria-pressed', String(active));
    });
    const preview = page.querySelector('#app-tabs-anatomy-preview');
    if (preview) preview.innerHTML = buildTabs({ style: 'primary', type: 'fixed', config, count: 3 }, 0);
  }

  function switchCodeTab(page, tabId = 'xaml') {
    if (!page) return;
    page.querySelectorAll('[data-app-tabs-code-tab]').forEach((button) => {
      const active = button.dataset.appTabsCodeTab === tabId;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    page.querySelectorAll('#app-tabs-code-xaml, #app-tabs-code-csharp, #app-tabs-code-tokens').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `app-tabs-code-${tabId}`);
    });
  }

  function switchCodeTabFromButton(button) {
    if (!button) return;
    switchCodeTab(findPage(button), button.dataset.appTabsCodeTab);
  }

  function copyText(text, button) {
    if (!text) return;
    navigator.clipboard?.writeText(text).then(() => {
      const original = button.innerHTML;
      button.innerHTML = '<i class="icon icon-check icon-16" aria-hidden="true"></i>Copiado';
      window.setTimeout(() => { button.innerHTML = original; }, 1600);
    });
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.appTabsDocsDelegated === 'true') return;
    document.documentElement.dataset.appTabsDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-app-tabs-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.appTabsAnatomy);
        return;
      }

      const previewTab = event.target.closest('[data-app-tabs-preview-tab]');
      if (previewTab) {
        renderPreview(findPage(previewTab), Number(previewTab.dataset.appTabsPreviewTab || 0));
        return;
      }

      const codeTab = event.target.closest('[data-app-tabs-code-tab]');
      if (codeTab) {
        switchCodeTabFromButton(codeTab);
        return;
      }

      const copyCode = event.target.closest('[data-app-tabs-copy-code]');
      if (copyCode) {
        const page = findPage(copyCode);
        const code = page?.querySelector('#app-tabs-code-xaml.active, #app-tabs-code-csharp.active, #app-tabs-code-tokens.active')?.textContent || '';
        copyText(code, copyCode);
      }
    });

    document.addEventListener('change', (event) => {
      if (!event.target.matches('[data-app-tabs-control]')) return;
      renderPreview(findPage(event.target), 0);
    });
  }

  function initAppTabsDoc(root = document) {
    const page = root.querySelector('[data-component-doc="app-tabs"]');
    if (!page || page.dataset.appTabsInitialized === 'true') return;
    renderAnatomy(page, 'label');
    renderPreview(page, 0);
    switchCodeTab(page, 'xaml');
    page.dataset.appTabsInitialized = 'true';
  }

  return { initAppTabsDoc, bindDelegatedEvents, switchCodeTabFromButton };
})();

window.appTabsDocs = appTabsDocs;

function bootAppTabsDocs() {
  appTabsDocs.bindDelegatedEvents();
  appTabsDocs.initAppTabsDoc(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => appTabsDocs.initAppTabsDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootAppTabsDocs);
} else {
  bootAppTabsDocs();
}
