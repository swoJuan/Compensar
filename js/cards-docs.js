const cardsDocs = (() => {
  const variants = {
    vertical: { label: 'Vertical', className: '' },
    raised: { label: 'Elevada', className: 'mp-card--raised' },
    compact: { label: 'Compacta', className: 'mp-card--compact' },
    interactive: { label: 'Interactiva', className: 'mp-card--interactive' },
    horizontal: { label: 'Horizontal', className: 'mp-card--horizontal mp-card--interactive' }
  };

  const images = {
    wellness: {
      src: 'https://picsum.photos/id/1011/800/450',
      alt: 'Persona caminando al aire libre'
    },
    family: {
      src: 'https://picsum.photos/id/1027/800/450',
      alt: 'Persona sonriendo en un entorno natural'
    },
    service: {
      src: 'https://picsum.photos/id/1035/800/450',
      alt: 'Paisaje urbano con servicio en contexto'
    }
  };

  const defaultState = {
    variant: 'vertical',
    state: 'default',
    withImage: true,
    withActions: true,
    imageChoice: 'wellness',
    title: 'Programa bienestar',
    subtitle: 'Beneficio destacado',
    body: 'Encuentra servicios, orientación y acompañamiento para cuidar tu bienestar y el de tu familia.',
    actionA: 'Guardar',
    actionB: 'Conocer más',
    theme: 'light'
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

  function iconMarkup(name, size = 20, extraClass = '') {
    return `<i class="icon icon-${name} icon-${size}${extraClass ? ` ${extraClass}` : ''}" aria-hidden="true"></i>`;
  }

  function selectedImage(state) {
    return images[state.imageChoice] || images.wellness;
  }

  function stateFromPage(page) {
    return {
      variant: page.querySelector('[data-card-control="variant"]')?.value || defaultState.variant,
      state: page.querySelector('[data-card-control="state"]')?.value || defaultState.state,
      withImage: page.querySelector('[data-card-control="image"]')?.checked ?? defaultState.withImage,
      withActions: defaultState.withActions,
      imageChoice: page.querySelector('[data-card-control="imageChoice"]')?.value || defaultState.imageChoice,
      title: page.querySelector('[data-card-control="title"]')?.value || defaultState.title,
      subtitle: page.querySelector('[data-card-control="subtitle"]')?.value || defaultState.subtitle,
      body: page.querySelector('[data-card-control="body"]')?.value || defaultState.body,
      actionA: page.querySelector('[data-card-control="actionA"]')?.value || defaultState.actionA,
      actionB: page.querySelector('[data-card-control="actionB"]')?.value || defaultState.actionB,
      theme: page.querySelector('[data-card-control="theme"]')?.value || defaultState.theme
    };
  }

  function mediaMarkup(state) {
    const image = selectedImage(state);
    return `<img class="mp-card__media" src="${image.src}" alt="${escapeHtml(image.alt)}">`;
  }

  function cardHtml(state) {
    const variant = variants[state.variant] || variants.vertical;
    const classNames = ['mp-card'];
    if (variant.className) classNames.push(variant.className);
    if (state.state === 'hover') classNames.push('mp-card--is-hover');
    if (state.state === 'focus') classNames.push('mp-card--is-focus');
    if (state.state === 'active') classNames.push('mp-card--is-active');
    if (state.state === 'disabled') classNames.push('mp-card--disabled');

    const interactive = classNames.some((name) => name.includes('interactive'));
    const disabled = state.state === 'disabled';
    const attrs = [];
    if (disabled) attrs.push('aria-disabled="true"');
    if (interactive && !disabled) attrs.push('tabindex="0"');

    return `<article class="${classNames.join(' ')}"${attrs.length ? ` ${attrs.join(' ')}` : ''}>
  ${state.withImage ? mediaMarkup(state) : ''}
  <div class="mp-card__content">
    <header class="mp-card__header">
      <div>
        <h3 class="mp-card__title">${escapeHtml(state.title)}</h3>
        <p class="mp-card__subtitle">${escapeHtml(state.subtitle)}</p>
      </div>
      ${interactive ? iconMarkup('arrow-right', 20, 'mp-card__icon') : ''}
    </header>
    <p class="mp-card__body">${escapeHtml(state.body)}</p>
    ${state.withActions ? `<footer class="mp-card__footer">
      <div class="mp-card__actions">
        <button type="button" class="mp-btn mp-btn--terciario">${escapeHtml(state.actionA)}</button>
        <button type="button" class="mp-btn mp-btn--primario">${escapeHtml(state.actionB)}</button>
      </div>
    </footer>` : ''}
  </div>
</article>`;
  }

  function cardNode(state) {
    const template = document.createElement('template');
    template.innerHTML = cardHtml(state).trim();
    return template.content.firstElementChild;
  }

  function anatomyState(page, variant) {
    return {
      ...defaultState,
      variant,
      withImage: page.querySelector('[data-card-toggle="image"]')?.checked ?? true,
      withActions: page.querySelector('[data-card-toggle="actions"]')?.checked ?? true
    };
  }

  function updateAnatomyMeasures(page, variant) {
    const width = page.querySelector('[data-card-anatomy-width]');
    const height = page.querySelector('[data-card-anatomy-height]');
    const padding = page.querySelector('[data-card-anatomy-padding]');

    if (variant === 'horizontal') {
      if (width) width.textContent = '640 px';
      if (height) height.textContent = '220 px';
      if (padding) padding.textContent = 'Padding 24 px';
      return;
    }

    if (variant === 'compact') {
      if (width) width.textContent = '353 px';
      if (height) height.textContent = '150 px';
      if (padding) padding.textContent = 'Padding 12 px';
      return;
    }

    if (width) width.textContent = '398 px';
    if (height) height.textContent = '536 px';
    if (padding) padding.textContent = 'Padding 24 px';
  }

  function renderAnatomy(page, variant = 'vertical') {
    if (!page) return;
    const preview = page.querySelector('#cards-anatomy-preview');
    const showLabels = page.querySelector('[data-card-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-card-toggle="measures"]')?.checked ?? true;
    const state = anatomyState(page, variant);

    page.querySelectorAll('[data-card-anatomy]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.cardAnatomy === variant));
    });
    page.querySelectorAll('.cards-doc-callout').forEach((item) => { item.hidden = !showLabels; });
    page.querySelectorAll('.cards-anatomy-measure').forEach((item) => { item.hidden = !showMeasures; });
    updateAnatomyMeasures(page, variant);

    preview?.replaceChildren(cardNode(state));
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      return cardCssExport();
    }

    if (tab === 'scss') {
      return cardScssExport();
    }

    return cardHtml(state);
  }

  function cardCssExport() {
    return `/* mp-card - Compensar Design System
   Fuente: core/components/web/_cards.scss
   Personalizacion completa del componente para dummy/demo. */

.mp-card { --mp-card-bg:var(--use-surface-white); --mp-card-border:var(--use-border-subtle); --mp-card-title:var(--use-text-primary); --mp-card-subtitle:var(--use-text-tertiary); --mp-card-body:var(--use-text-secondary); --mp-card-icon:var(--use-text-tertiary); --mp-card-media-bg:var(--use-surface-theme-gray-5); --mp-card-shadow:var(--shadow-1); --mp-card-hover-border:var(--use-border-hover); --mp-card-focus:var(--use-focus-outline); display:flex; flex-direction:column; gap:var(--space-16); width:min(100%,24.875rem); min-height:33.5rem; padding:var(--space-24); overflow:hidden; border:1px solid var(--mp-card-border); border-radius:24px; background:var(--mp-card-bg); box-shadow:var(--mp-card-shadow); color:var(--mp-card-body); transition:border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
.mp-card__media { display:block; width:100%; aspect-ratio:16 / 9; border-radius:16px; object-fit:cover; background:var(--mp-card-media-bg); }
.mp-card__content { min-width:0; display:flex; flex:1 1 auto; flex-direction:column; gap:var(--space-16); }
.mp-card__header { display:flex; align-items:flex-start; justify-content:space-between; gap:var(--space-12); }
.mp-card__title { margin:0; color:var(--mp-card-title); font-family:var(--font-body); font-size:var(--font-size-h5); font-weight:700; line-height:1.2; }
.mp-card__subtitle { margin:var(--space-4) 0 0; color:var(--mp-card-subtitle); font-family:var(--font-body); font-size:var(--font-size-sm); line-height:1.4; }
.mp-card__body { margin:0; color:var(--mp-card-body); font-family:var(--font-body); font-size:var(--font-size-md); line-height:1.5; }
.mp-card__icon { flex:0 0 auto; color:var(--mp-card-icon); }
.mp-card__footer, .mp-card__actions { display:flex; flex-wrap:wrap; gap:var(--space-8); align-items:center; justify-content:center; width:100%; margin-top:auto; }
.mp-card--flat { --mp-card-shadow:none; }
.mp-card--raised { --mp-card-shadow:var(--shadow-2); }
.mp-card--compact { width:min(100%,22.0625rem); min-height:9.375rem; padding:var(--space-12); }
.mp-card--interactive { cursor:pointer; }
.mp-card--interactive:hover, .mp-card--interactive.mp-card--is-hover { --mp-card-border:var(--mp-card-hover-border); --mp-card-shadow:var(--shadow-2); transform:translateY(calc(var(--space-4) * -1)); }
.mp-card--interactive:focus-visible, .mp-card--interactive.mp-card--is-focus { outline:2px solid var(--mp-card-focus); outline-offset:var(--space-4); }
.mp-card--interactive:active, .mp-card--interactive.mp-card--is-active { --mp-card-shadow:var(--shadow-1); transform:translateY(0); }
.mp-card--horizontal { width:min(100%,40rem); min-height:13.75rem; flex-direction:row; align-items:stretch; }
.mp-card--horizontal .mp-card__media { width:13.75rem; min-width:13.75rem; height:auto; aspect-ratio:auto; }
.mp-card[aria-disabled="true"], .mp-card--disabled { opacity:.64; pointer-events:none; }
[data-theme="dark"] .mp-card { --mp-card-bg:var(--base-neutral-90); --mp-card-border:var(--base-neutral-70); --mp-card-title:var(--base-neutral-10); --mp-card-subtitle:var(--base-neutral-30); --mp-card-body:var(--base-neutral-20); --mp-card-icon:var(--base-neutral-30); --mp-card-media-bg:var(--base-neutral-80); --mp-card-hover-border:var(--use-primary-default-dark); }
[data-theme="high-contrast"] .mp-card { --mp-card-bg:var(--base-neutral-black); --mp-card-border:var(--base-neutral-white); --mp-card-title:var(--base-neutral-white); --mp-card-subtitle:var(--base-neutral-white); --mp-card-body:var(--base-neutral-white); --mp-card-icon:var(--base-neutral-white); --mp-card-media-bg:var(--base-neutral-black); --mp-card-hover-border:var(--use-primary-default); border-width:1px; box-shadow:none; }
@media (max-width: 767.98px) { .mp-card { width:100%; min-height:auto; } .mp-card--horizontal { flex-direction:column; } .mp-card--horizontal .mp-card__media { width:100%; min-width:0; aspect-ratio:16 / 9; } }`;
  }

  function cardScssExport() {
    return `// mp-card - Compensar Design System
// Fuente productiva: core/components/web/_cards.scss
// Sass plano para dummy/demo.

@use '../../abstracts' as *;

${cardCssExport()}`;
  }

  function renderPlayground(page) {
    if (!page) return;
    const preview = page.querySelector('#cards-playground-preview');
    const output = page.querySelector('#cards-code-output');
    const tab = page.querySelector('[data-card-code-tab][aria-selected="true"]')?.dataset.cardCodeTab || 'html';
    const state = stateFromPage(page);

    if (preview) {
      preview.dataset.theme = state.theme;
      preview.replaceChildren(cardNode(state));
    }
    if (output) output.textContent = codeForTab(tab, state);
  }

  function renderStates(page) {
    if (!page) return;
    page.querySelectorAll('[data-card-state-demo]').forEach((slot) => {
      const stateName = slot.dataset.cardStateDemo || 'default';
      const state = {
        ...defaultState,
        variant: 'interactive',
        state: stateName,
        withImage: false,
        title: stateName === 'disabled' ? 'No disponible' : 'Card interactiva',
        body: 'Estado visual aplicado con clases del componente.'
      };
      slot.replaceChildren(cardNode(state));
    });
  }

  function renderVariants(page) {
    if (!page) return;
    page.querySelectorAll('[data-card-variant-demo]').forEach((slot) => {
      const variant = slot.dataset.cardVariantDemo || 'vertical';
      const state = {
        ...defaultState,
        variant,
        withActions: variant !== 'compact',
        withImage: variant !== 'compact',
        title: variants[variant]?.label || defaultState.title,
        body: variant === 'compact'
          ? 'Contenido breve para listados densos.'
          : defaultState.body
      };
      slot.replaceChildren(cardNode(state));
    });
  }

  function renderResponsive(page) {
    if (!page) return;
    page.querySelectorAll('[data-card-responsive-demo]').forEach((slot) => {
      const compact = slot.dataset.cardResponsiveDemo === 'mobile';
      const state = {
        ...defaultState,
        variant: compact ? 'vertical' : 'horizontal',
        withActions: false,
        title: compact ? 'Vista móvil' : 'Vista escritorio',
        body: compact
          ? 'La card ocupa el ancho disponible.'
          : 'La variante horizontal conserva imagen, contenido y jerarquía.'
      };
      slot.replaceChildren(cardNode(state));
    });
  }

  function renderModes(page) {
    if (!page) return;
    page.querySelectorAll('[data-card-mode-demo]').forEach((slot) => {
      const theme = slot.dataset.cardModeDemo || 'light';
      const state = {
        ...defaultState,
        variant: 'raised',
        theme,
        imageChoice: theme === 'high-contrast' ? 'service' : 'wellness',
        title: theme === 'high-contrast' ? 'Alto contraste' : theme === 'dark' ? 'Modo oscuro' : 'Light',
        body: 'La imagen se conserva sin filtros; cambian superficie, texto y borde por tokens.'
      };
      slot.replaceChildren(cardNode(state));
    });
  }

  function renderStaticCode(page, selectedTab = 'html') {
    if (!page) return;
    page.querySelectorAll('[data-card-static-code-tab]').forEach((button) => {
      const active = button.dataset.cardStaticCodeTab === selectedTab;
      button.setAttribute('aria-selected', String(active));
      button.classList.toggle('active', active);
    });
    page.querySelectorAll('#cards-code-html, #cards-code-angular, #cards-code-drupal').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `cards-code-${selectedTab}`);
    });
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

    renderAnatomy(page, 'vertical');
    renderPlayground(page);
    renderStates(page);
    renderVariants(page);
    renderResponsive(page);
    renderModes(page);
    renderStaticCode(page);
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
          const active = tab === codeTab;
          tab.setAttribute('aria-selected', String(active));
          tab.classList.toggle('active', active);
        });
        renderPlayground(page);
        return;
      }

      const staticTab = event.target.closest('[data-card-static-code-tab]');
      if (staticTab) {
        renderStaticCode(findPage(staticTab), staticTab.dataset.cardStaticCodeTab);
        return;
      }

      const copyBtn = event.target.closest('[data-copy-cards-code]');
      if (copyBtn) {
        const page = findPage(copyBtn);
        copyText(page?.querySelector('#cards-code-output')?.textContent || '', copyBtn);
        return;
      }

      const copyStatic = event.target.closest('[data-copy-cards-static-code]');
      if (copyStatic) {
        const page = findPage(copyStatic);
        const active = page?.querySelector('#cards-code-html.active, #cards-code-angular.active, #cards-code-drupal.active');
        const code = active?.querySelector('code')?.textContent || active?.textContent || '';
        copyText(code, copyStatic);
      }
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-card-control]')) {
        renderPlayground(findPage(event.target));
      }
      if (event.target.matches('[data-card-toggle]')) {
        const page = findPage(event.target);
        const active = page?.querySelector('[data-card-anatomy][aria-pressed="true"]')?.dataset.cardAnatomy || 'vertical';
        renderAnatomy(page, active);
      }
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-card-control]')) {
        renderPlayground(findPage(event.target));
      }
    });
  }

  return {
    initCardsDoc,
    bindDelegatedEvents,
    renderAnatomy,
    renderPlayground,
    renderStates,
    renderVariants,
    renderResponsive,
    renderModes
  };
})();

window.cardsDocs = cardsDocs;

(function bootCardsDocs() {
  cardsDocs.bindDelegatedEvents();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => cardsDocs.initCardsDoc(document));
  } else {
    cardsDocs.initCardsDoc(document);
  }
  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => cardsDocs.initCardsDoc(document));
    });
  }
})();

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => cardsDocs.initCardsDoc(document));
});
