const cardsDocs = (() => {
  const variants = {
    flat: { label: 'Flat', className: 'mp-card--flat' },
    raised: { label: 'Raised', className: 'mp-card--raised' },
    interactive: { label: 'Interactive', className: 'mp-card--interactive' },
    horizontal: { label: 'Horizontal', className: 'mp-card--horizontal mp-card--interactive' }
  };

  const defaultState = {
    variant: 'flat',
    state: 'default',
    withImage: true,
    title: 'Título de la card',
    subtitle: 'Subtítulo opcional',
    body: 'Descripción breve que explica el contenido principal de la tarjeta.',
    actionA: 'Cancelar',
    actionB: 'Continuar',
    theme: 'light'
  };

  const exportJson = {
    component: 'Cards',
    source: 'core/components/web/_cards.scss',
    figma: {
      fileKey: '1zVGMpzqBgiBUqhmfFEAoT',
      nodeId: '4606:31924'
    },
    classes: [
      '.mp-card',
      '.mp-card--flat',
      '.mp-card--raised',
      '.mp-card--interactive',
      '.mp-card--horizontal',
      '.mp-card--disabled',
      '.mp-card__media',
      '.mp-card__header',
      '.mp-card__title',
      '.mp-card__subtitle',
      '.mp-card__body',
      '.mp-card__footer',
      '.mp-card__actions'
    ],
    tokens: {
      radius: '16px',
      padding: '16px',
      gap: '16px',
      minHeight: '220px',
      mediaRatio: '16 / 9',
      title: 'Heading 5',
      body: 'Body M'
    }
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));
  }

  function iconMarkup(name, size = 16) {
    return `<i class="icon icon-${name} icon-${size}" aria-hidden="true"></i>`;
  }

  function stateFromPage(page) {
    return {
      variant: page.querySelector('[data-card-control="variant"]')?.value || defaultState.variant,
      state: page.querySelector('[data-card-control="state"]')?.value || defaultState.state,
      withImage: page.querySelector('[data-card-control="image"]')?.checked ?? defaultState.withImage,
      title: page.querySelector('[data-card-control="title"]')?.value || defaultState.title,
      subtitle: page.querySelector('[data-card-control="subtitle"]')?.value || defaultState.subtitle,
      body: page.querySelector('[data-card-control="body"]')?.value || defaultState.body,
      actionA: page.querySelector('[data-card-control="actionA"]')?.value || defaultState.actionA,
      actionB: page.querySelector('[data-card-control="actionB"]')?.value || defaultState.actionB,
      theme: page.querySelector('[data-card-control="theme"]')?.value || defaultState.theme
    };
  }

  function mediaMarkup() {
    return `<img class="mp-card__media" src="https://picsum.photos/800/450?grayscale" alt="Imagen de referencia para la card">`;
  }

  function cardHtml(state) {
    const variant = variants[state.variant] || variants.flat;
    const classNames = ['mp-card', variant.className];
    if (state.state === 'hover') classNames.push('mp-card--is-hover');
    if (state.state === 'focus') classNames.push('mp-card--is-focus');
    if (state.state === 'active') classNames.push('mp-card--is-active');
    if (state.state === 'disabled') classNames.push('mp-card--disabled');

    return `<article class="${classNames.join(' ')}"${state.state === 'disabled' ? ' aria-disabled="true"' : ''}>
  ${state.withImage ? mediaMarkup() : ''}
  <div class="mp-card__content">
    <header class="mp-card__header">
      <div>
        <h3 class="mp-card__title">${escapeHtml(state.title)}</h3>
        <p class="mp-card__subtitle">${escapeHtml(state.subtitle)}</p>
      </div>
      ${iconMarkup('arrow-right', 20)}
    </header>
    <p class="mp-card__body">${escapeHtml(state.body)}</p>
    <footer class="mp-card__footer">
      <div class="mp-card__actions">
        <button type="button" class="mp-btn mp-btn--terciario">${escapeHtml(state.actionA)}</button>
        <button type="button" class="mp-btn mp-btn--primario">${escapeHtml(state.actionB)}</button>
      </div>
    </footer>
  </div>
</article>`;
  }

  function cardNode(state) {
    const template = document.createElement('template');
    template.innerHTML = cardHtml(state).trim();
    return template.content.firstElementChild;
  }

  function renderAnatomy(page, variant = 'flat') {
    if (!page) return;
    const preview = page.querySelector('#cards-anatomy-preview');
    const showLabels = page.querySelector('[data-card-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-card-toggle="measures"]')?.checked ?? true;

    page.querySelectorAll('[data-card-anatomy]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.cardAnatomy === variant));
    });
    page.querySelectorAll('.cards-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.cards-doc-measure').forEach((item) => { item.hidden = !showMeasures; });

    const state = { ...defaultState, variant };
    preview.replaceChildren(cardNode(state));
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      const classes = ['.mp-card', variants[state.variant]?.className || '.mp-card--flat'];
      if (state.state !== 'default') classes.push(`.mp-card--is-${state.state}`);
      if (!state.withImage) classes.push('// sin .mp-card__media');
      return classes.join('\n');
    }
    if (tab === 'tokens') {
      return `radius: 16px\npadding: 16px\ngap: 16px\nmin-height: 220px\nmedia-ratio: 16/9\ntheme: ${state.theme}`;
    }
    return cardHtml(state);
  }

  function renderPlayground(page) {
    if (!page) return;
    const preview = page.querySelector('#cards-playground-preview');
    const output = page.querySelector('#cards-code-output');
    const tab = page.querySelector('[data-card-code-tab][aria-selected="true"]')?.dataset.cardCodeTab || 'html';
    const state = stateFromPage(page);

    preview.dataset.theme = state.theme;
    preview.replaceChildren(cardNode(state));
    output.textContent = codeForTab(tab, state);
  }

  function renderStates(page) {
    if (!page) return;
    page.querySelectorAll('[data-card-state-demo]').forEach((slot) => {
      const variant = slot.dataset.cardStateDemo || 'flat';
      const state = {
        ...defaultState,
        variant,
        state: variant === 'interactive' ? 'hover' : 'default'
      };
      slot.replaceChildren(cardNode(state));
    });
  }

  function downloadAsset(type, trigger) {
    const assets = {
      css: ['mp-card-core.css', 'text/css', buildCssExport()],
      scss: ['_mp-card-core.scss', 'text/x-scss', buildScssExport()],
      json: ['mp-card.tokens.json', 'application/json', `${JSON.stringify(exportJson, null, 2)}\n`]
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
    return `/* Cards - Compensar Design System\n   Fuente: core/components/web/_cards.scss */\n\n.mp-card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: min(100%, 420px);\n  min-height: 220px;\n  padding: 16px;\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  background: var(--color-surface);\n  box-shadow: var(--shadow-1);\n}\n\n.mp-card--raised { box-shadow: var(--shadow-2); }\n.mp-card--flat { box-shadow: none; }\n.mp-card--interactive:hover { transform: translateY(-2px); box-shadow: var(--shadow-2); }\n.mp-card__media { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 12px; }\n.mp-card__header { display: flex; justify-content: space-between; gap: 12px; }\n.mp-card__footer { margin-top: auto; }\n`;
  }

  function buildScssExport() {
    return `// Cards - variables planas para dummy/demo\n$mp-card-radius: 16px;\n$mp-card-padding: 16px;\n$mp-card-gap: 16px;\n$mp-card-min-height: 220px;\n$mp-card-max-width: 420px;\n`;
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

  function findPage(target) {
    return target?.closest('[data-component-doc="cards"]') || document.querySelector('[data-component-doc="cards"]');
  }

  function initCardsDoc(root = document) {
    const page = root.querySelector('[data-component-doc="cards"]');
    if (!page || page.dataset.cardsInitialized === 'true') return;

    renderAnatomy(page, 'flat');
    renderPlayground(page);
    renderStates(page);
    page.dataset.cardsInitialized = 'true';
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.cardsDocsDelegated === 'true') return;
    document.documentElement.dataset.cardsDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-card-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.cardAnatomy);
        return;
      }

      const codeTab = event.target.closest('[data-card-code-tab]');
      if (codeTab) {
        const page = findPage(codeTab);
        if (!page) return;
        page.querySelectorAll('[data-card-code-tab]').forEach((tab) => {
          tab.setAttribute('aria-selected', String(tab === codeTab));
        });
        renderPlayground(page);
        return;
      }

      const copyBtn = event.target.closest('[data-copy-cards-code]');
      if (copyBtn) {
        const page = findPage(copyBtn);
        copyText(page?.querySelector('#cards-code-output')?.textContent || '', copyBtn);
        return;
      }

      const download = event.target.closest('[data-cards-download]');
      if (download) {
        downloadAsset(download.dataset.cardsDownload, download);
      }
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-card-control]')) {
        renderPlayground(findPage(event.target));
      }
      if (event.target.matches('[data-card-toggle]')) {
        const page = findPage(event.target);
        const active = page?.querySelector('[data-card-anatomy][aria-pressed="true"]')?.dataset.cardAnatomy || 'flat';
        renderAnatomy(page, active);
      }
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-card-control]')) {
        renderPlayground(findPage(event.target));
      }
    });
  }

  bindDelegatedEvents();

  return {
    initCardsDoc,
    renderAnatomy,
    renderPlayground,
    renderStates
  };
})();

window.cardsDocs = cardsDocs;
