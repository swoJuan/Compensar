const emptyStateDocs = (() => {
  function findPage(node) {
    return node?.closest?.('[data-component-doc="empty-state"]') || document.querySelector('[data-component-doc="empty-state"]');
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

  function flashButton(button, label = 'Copiado') {
    if (!button) return;
    const original = button.innerHTML;
    button.innerHTML = `<i class="icon icon-check icon-16" aria-hidden="true"></i> ${label}`;
    window.setTimeout(() => { button.innerHTML = original; }, 1600);
  }

  function setCodeTab(page, tabName = 'html') {
    if (!page) return;
    page.querySelectorAll('[data-est-code-tab]').forEach((tab) => {
      const active = tab.dataset.estCodeTab === tabName;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    page.querySelectorAll('#est-code-html, #est-code-scss, #est-code-angular').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `est-code-${tabName}`);
    });
  }

  function setCodeTabFromButton(button) {
    if (!button) return;
    setCodeTab(findPage(button), button.dataset.estCodeTab);
  }

  function stateFromPage(page) {
    return {
      icon: page.querySelector('#est-ctrl-icon')?.value || 'icon-package',
      variant: page.querySelector('#est-ctrl-variant')?.value || '',
      title: page.querySelector('#est-ctrl-title')?.value || 'Sin resultados',
      desc: page.querySelector('#est-ctrl-desc')?.value || 'Intenta con otros términos de búsqueda.',
      action: page.querySelector('#est-ctrl-action')?.value || 'none'
    };
  }

  function buildEmptyStateHtml(state) {
    const variantClass = state.variant ? ` ${state.variant}` : '';
    const actionHTML = {
      none: '',
      primary: '  <div class="mp-empty-state__action"><button type="button" class="mp-btn mp-btn--primario">Crear nuevo</button></div>',
      secondary: '  <div class="mp-empty-state__action"><button type="button" class="mp-btn mp-btn--secundario">Ver todo</button></div>',
      both: '  <div class="mp-empty-state__action"><button type="button" class="mp-btn mp-btn--primario">Crear nuevo</button><button type="button" class="mp-btn mp-btn--secundario">Ver todo</button></div>'
    }[state.action] || '';
    const iconHTML = state.variant === 'mp-empty-state--text-only'
      ? ''
      : `  <div class="mp-empty-state__icon"><i class="icon ${escapeHtml(state.icon)}" aria-hidden="true"></i></div>\n`;
    const actionLine = actionHTML ? `\n${actionHTML}` : '';

    return `<div class="mp-empty-state${variantClass}">
${iconHTML}  <h5 class="mp-h5 mp-empty-state__title"><strong>${escapeHtml(state.title)}</strong></h5>
  <p class="mp-body-l mp-empty-state__desc">${escapeHtml(state.desc)}</p>${actionLine}
</div>`;
  }

  function renderPlayground(page) {
    if (!page) return;
    const live = page.querySelector('#est-live');
    if (!live) return;
    live.outerHTML = buildEmptyStateHtml(stateFromPage(page)).replace('<div class="mp-empty-state', '<div id="est-live" class="mp-empty-state');
  }

  function copyPlayground(page, button) {
    const live = page?.querySelector('#est-live');
    if (!live) return;
    navigator.clipboard?.writeText(live.outerHTML).then(() => flashButton(button));
  }

  function copyCode(page, button) {
    const activePanel = page?.querySelector('#est-code-html.active code, #est-code-scss.active code, #est-code-angular.active code');
    if (!activePanel) return;
    navigator.clipboard?.writeText(activePanel.textContent || '').then(() => flashButton(button));
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.emptyStateDocsDelegated === 'true') return;
    document.documentElement.dataset.emptyStateDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const codeTab = event.target.closest('[data-est-code-tab]');
      if (codeTab) {
        setCodeTabFromButton(codeTab);
        return;
      }

      const copyPlaygroundButton = event.target.closest('#est-copy-btn');
      if (copyPlaygroundButton) {
        copyPlayground(findPage(copyPlaygroundButton), copyPlaygroundButton);
        return;
      }

      const copyCodeButton = event.target.closest('[data-est-copy-code]');
      if (copyCodeButton) {
        copyCode(findPage(copyCodeButton), copyCodeButton);
      }
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('#est-ctrl-icon, #est-ctrl-variant, #est-ctrl-title, #est-ctrl-desc, #est-ctrl-action')) {
        renderPlayground(findPage(event.target));
      }
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('#est-ctrl-icon, #est-ctrl-variant, #est-ctrl-title, #est-ctrl-desc, #est-ctrl-action')) {
        renderPlayground(findPage(event.target));
      }
    });
  }

  function initEmptyStateDoc(root = document) {
    const page = root.querySelector('[data-component-doc="empty-state"]');
    if (!page || page.dataset.emptyStateInitialized === 'true') return;
    setCodeTab(page, 'html');
    renderPlayground(page);
    page.dataset.emptyStateInitialized = 'true';
  }

  return { initEmptyStateDoc, bindDelegatedEvents, setCodeTabFromButton };
})();

window.emptyStateDocs = emptyStateDocs;

function bootEmptyStateDocs() {
  emptyStateDocs.bindDelegatedEvents();
  emptyStateDocs.initEmptyStateDoc(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => emptyStateDocs.initEmptyStateDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootEmptyStateDocs);
} else {
  bootEmptyStateDocs();
}
