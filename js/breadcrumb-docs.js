const breadcrumbDocs = (() => {
  const exportCss = `/* mp-breadcrumb - Compensar Design System
   Fuente: core/components/web/_breadcrumb.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4629:87274
   Estilos planos para dummy/demo. */

.mp-breadcrumb {
  --mp-breadcrumb-gap: 16px;
  --mp-breadcrumb-padding-y: 12px;
  --mp-breadcrumb-icon-size: 20px;
  --mp-breadcrumb-separator-size: 16px;
  --mp-breadcrumb-link: var(--use-text-secondary, #333333);
  --mp-breadcrumb-previous: var(--use-text-tertiary, #666666);
  --mp-breadcrumb-current: var(--use-text-theme-violet, #4e3199);
  --mp-breadcrumb-hover: var(--use-primary-default, #ff6600);
  --mp-breadcrumb-focus: var(--use-text-primary, #111111);
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--mp-breadcrumb-padding-y) 0;
  color: var(--mp-breadcrumb-link);
  font-family: Roboto, Arial, sans-serif;
}

.mp-breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mp-breadcrumb-gap);
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.mp-breadcrumb__item {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-breadcrumb-gap);
  min-width: 0;
}

.mp-breadcrumb__link,
.mp-breadcrumb__current {
  display: inline-flex;
  align-items: center;
  min-height: 20px;
  border: 1px solid transparent;
  color: var(--mp-breadcrumb-link);
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.012em;
  text-decoration: none;
  white-space: nowrap;
}

.mp-breadcrumb__link {
  cursor: pointer;
  transition: color 0.16s ease, border-color 0.16s ease;
}

.mp-breadcrumb__link:hover,
.mp-breadcrumb__link.mp-breadcrumb__link--is-hover {
  color: var(--mp-breadcrumb-hover);
  text-decoration: none;
}

.mp-breadcrumb__link:focus-visible,
.mp-breadcrumb__link.mp-breadcrumb__link--is-focus {
  border-color: var(--mp-breadcrumb-focus);
  outline: none;
}

.mp-breadcrumb__link--previous {
  color: var(--mp-breadcrumb-previous);
  font-weight: 700;
}

.mp-breadcrumb__current {
  color: var(--mp-breadcrumb-current);
  font-weight: 700;
}

.mp-breadcrumb__home {
  width: var(--mp-breadcrumb-icon-size);
  height: var(--mp-breadcrumb-icon-size);
  flex: 0 0 var(--mp-breadcrumb-icon-size);
  color: currentColor;
  font-size: var(--mp-breadcrumb-icon-size);
  line-height: 1;
}

.mp-breadcrumb__separator {
  width: var(--mp-breadcrumb-separator-size);
  height: var(--mp-breadcrumb-separator-size);
  flex: 0 0 var(--mp-breadcrumb-separator-size);
  color: var(--mp-breadcrumb-previous);
  font-size: var(--mp-breadcrumb-separator-size);
  line-height: 1;
}

.mp-breadcrumb--block { padding: 24px; }
.mp-breadcrumb--compact { --mp-breadcrumb-gap: 8px; --mp-breadcrumb-padding-y: 8px; }

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

[data-theme="dark"] .mp-breadcrumb {
  --mp-breadcrumb-link: var(--base-neutral-10, #f5f5f5);
  --mp-breadcrumb-previous: var(--base-neutral-30, #d6d6d6);
  --mp-breadcrumb-current: var(--product-violet-30, #a28dda);
  --mp-breadcrumb-hover: var(--use-primary-default-dark, #ff9d5c);
  --mp-breadcrumb-focus: var(--base-neutral-white, #ffffff);
}

[data-theme="high-contrast"] .mp-breadcrumb {
  --mp-breadcrumb-link: var(--base-neutral-white, #ffffff);
  --mp-breadcrumb-previous: var(--base-neutral-white, #ffffff);
  --mp-breadcrumb-current: var(--use-primary-default, #ffff00);
  --mp-breadcrumb-hover: var(--use-primary-default, #ffff00);
  --mp-breadcrumb-focus: var(--base-neutral-white, #ffffff);
}

@media (max-width: 575.98px) {
  .mp-breadcrumb { --mp-breadcrumb-gap: 8px; }
  .mp-breadcrumb__list { flex-wrap: nowrap; overflow-x: auto; }
}`;

  const exportSass = `// mp-breadcrumb - Compensar Design System
// Fuente productiva: core/components/web/_breadcrumb.scss
// Sass plano para dummy/demo.

$mp-breadcrumb-gap: 16px;
$mp-breadcrumb-padding-y: 12px;
$mp-breadcrumb-icon-size: 20px;
$mp-breadcrumb-separator-size: 16px;

${exportCss}`;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));
  }

  function iconMarkup(name, className, hidden = true) {
    return `<i class="icon icon-${name} ${className}"${hidden ? ' aria-hidden="true"' : ''}></i>`;
  }

  function buildItems(config = {}) {
    const levels = Math.max(2, Math.min(Number(config.levels) || 3, 4));
    const parent = config.parent || 'Trámites';
    const current = config.current || 'Pagos';
    if (levels === 2) return ['Inicio', current];
    if (levels === 3) return ['Inicio', parent, current];
    return ['Inicio', 'Afiliados', parent, current];
  }

  function buildBreadcrumbHtml(config = {}) {
    const items = buildItems(config);
    const showHome = config.home !== false;
    const compact = config.compact === true;
    const block = config.block === true;
    const focusIndex = Number.isInteger(config.focusIndex) ? config.focusIndex : -1;
    const previousMode = config.previousMode === true;
    const classes = ['mp-breadcrumb'];
    if (compact) classes.push('mp-breadcrumb--compact');
    if (block) classes.push('mp-breadcrumb--block');

    const children = [];
    if (showHome) {
      children.push(`<li class="mp-breadcrumb__item"><a class="mp-breadcrumb__link${focusIndex === 0 ? ' mp-breadcrumb__link--is-focus' : ''}" href="#">
  ${iconMarkup('house', 'mp-breadcrumb__home')}
  <span class="visually-hidden">Inicio</span>
</a></li>`);
    }

    items.forEach((item, index) => {
      const isLast = index === items.length - 1;
      const safe = escapeHtml(item);
      const hasSeparator = index > 0;
      const separator = hasSeparator ? `${iconMarkup('caret-right', 'mp-breadcrumb__separator')}` : '';
      if (isLast) {
        children.push(`<li class="mp-breadcrumb__item">${separator}<span class="mp-breadcrumb__current" aria-current="page">${safe}</span></li>`);
        return;
      }
      const linkClasses = ['mp-breadcrumb__link'];
      if (previousMode && index === items.length - 2) linkClasses.push('mp-breadcrumb__link--previous');
      if (focusIndex === index + (showHome ? 1 : 0)) linkClasses.push('mp-breadcrumb__link--is-focus');
      children.push(`<li class="mp-breadcrumb__item">${separator}<a class="${linkClasses.join(' ')}" href="#">${safe}</a></li>`);
    });

    return `<nav class="${classes.join(' ')}" aria-label="Breadcrumb">
  <ol class="mp-breadcrumb__list">
    ${children.join('\n    ')}
  </ol>
</nav>`;
  }

  function stateFromPage(page) {
    return {
      levels: page.querySelector('[data-breadcrumb-control="levels"]')?.value || '3',
      theme: page.querySelector('[data-breadcrumb-control="theme"]')?.value || 'light',
      current: page.querySelector('[data-breadcrumb-control="current"]')?.value || 'Pagos',
      parent: page.querySelector('[data-breadcrumb-control="parent"]')?.value || 'Trámites',
      home: page.querySelector('[data-breadcrumb-control="home"]')?.checked !== false,
      compact: page.querySelector('[data-breadcrumb-control="compact"]')?.checked === true,
      block: page.querySelector('[data-breadcrumb-control="block"]')?.checked === true
    };
  }

  function findPage(node) {
    return node?.closest?.('[data-component-doc="breadcrumb"]') || document.querySelector('[data-component-doc="breadcrumb"]');
  }

  function renderBreadcrumb(container, config = {}) {
    if (!container) return;
    container.innerHTML = buildBreadcrumbHtml(config);
  }

  function renderAnatomy(page, state) {
    if (!page) return;
    const current = state || page.dataset.breadcrumbAnatomy || 'default';
    page.dataset.breadcrumbAnatomy = current;
    page.querySelectorAll('[data-breadcrumb-anatomy]').forEach((button) => {
      const active = button.dataset.breadcrumbAnatomy === current;
      button.setAttribute('aria-pressed', String(active));
    });
    const block = page.querySelector('[data-breadcrumb-anatomy-toggle="block"]')?.checked === true;
    renderBreadcrumb(page.querySelector('#breadcrumb-anatomy-preview'), {
      levels: 3,
      current: 'Pagos',
      parent: 'Trámites',
      previousMode: current === 'previous',
      focusIndex: current === 'focus' ? 2 : -1,
      block
    });
    const showMeasures = page.querySelector('[data-breadcrumb-anatomy-toggle="measures"]')?.checked !== false;
    const showLabels = page.querySelector('[data-breadcrumb-anatomy-toggle="labels"]')?.checked !== false;
    page.querySelectorAll('[data-breadcrumb-measure]').forEach((item) => { item.hidden = !showMeasures; });
    page.querySelectorAll('.breadcrumb-doc-callout').forEach((item) => { item.hidden = !showLabels; });
  }

  function renderPlayground(page) {
    if (!page) return;
    const state = stateFromPage(page);
    const preview = page.querySelector('#breadcrumb-preview-area');
    if (preview) {
      preview.dataset.theme = state.theme;
      renderBreadcrumb(preview, state);
    }
    const html = buildBreadcrumbHtml(state);
    const playgroundCode = page.querySelector('#breadcrumb-playground-code');
    if (playgroundCode) playgroundCode.textContent = html;
    renderStaticCode(page, html);
  }

  function renderStaticCode(page, htmlOverride) {
    if (!page) return;
    const html = htmlOverride || buildBreadcrumbHtml({ levels: 3, parent: 'Trámites', current: 'Pagos' });
    const slots = { html, css: exportCss, sass: exportSass };
    Object.entries(slots).forEach(([key, value]) => {
      const pre = page.querySelector(`#breadcrumb-code-${key}`);
      if (pre) pre.textContent = value;
    });
  }

  function renderStaticDemos(page) {
    if (!page) return;
    const stateDemos = {
      default: { levels: 2, home: false, current: 'Pagos' },
      active: { levels: 2, home: false, current: 'Pagos' },
      previous: { levels: 3, home: false, current: 'Pagos', parent: 'Trámites', previousMode: true },
      focus: { levels: 3, home: false, current: 'Pagos', parent: 'Trámites', focusIndex: 1 }
    };
    page.querySelectorAll('[data-breadcrumb-state-demo]').forEach((demo) => {
      renderBreadcrumb(demo, stateDemos[demo.dataset.breadcrumbStateDemo]);
    });
    page.querySelectorAll('[data-breadcrumb-mode-demo]').forEach((demo) => {
      renderBreadcrumb(demo, { levels: 3, parent: 'Trámites', current: 'Pagos' });
    });
  }

  function copyText(text, trigger) {
    if (!text) return;
    navigator.clipboard?.writeText(text).then(() => flashButton(trigger, 'Copiado'));
  }

  function flashButton(trigger, label) {
    if (!trigger) return;
    const original = trigger.innerHTML;
    trigger.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">check</span>${label}`;
    window.setTimeout(() => { trigger.innerHTML = original; }, 1400);
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function downloadableHtml() {
    return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Breadcrumb - Compensar Design System</title>
  <style>
${exportCss}
  </style>
</head>
<body>
${buildBreadcrumbHtml({ levels: 3, parent: 'Trámites', current: 'Pagos' })}
</body>
</html>`;
  }

  function bindBreadcrumbDelegated() {
    if (document.documentElement.dataset.breadcrumbDocsDelegated === 'true') return;
    document.documentElement.dataset.breadcrumbDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-breadcrumb-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.breadcrumbAnatomy);
        return;
      }

      const tab = event.target.closest('[data-breadcrumb-code-tab]');
      if (tab) {
        const page = findPage(tab);
        page.querySelectorAll('[data-breadcrumb-code-tab]').forEach((item) => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-selected', String(active));
        });
        page.querySelectorAll('#breadcrumb-code-html, #breadcrumb-code-css, #breadcrumb-code-sass').forEach((pre) => {
          pre.classList.toggle('active', pre.id === `breadcrumb-code-${tab.dataset.breadcrumbCodeTab}`);
        });
        return;
      }

      const copyPlayground = event.target.closest('[data-breadcrumb-copy-playground]');
      if (copyPlayground) {
        copyText(findPage(copyPlayground).querySelector('#breadcrumb-playground-code')?.textContent || '', copyPlayground);
        return;
      }

      const copyCode = event.target.closest('[data-breadcrumb-copy-code]');
      if (copyCode) {
        copyText(findPage(copyCode).querySelector('#breadcrumb-code-html.active, #breadcrumb-code-css.active, #breadcrumb-code-sass.active')?.textContent || '', copyCode);
        return;
      }

      const download = event.target.closest('[data-breadcrumb-download]');
      if (download) {
        const type = download.dataset.breadcrumbDownload;
        if (type === 'html') downloadFile('mp-breadcrumb.html', downloadableHtml(), 'text/html');
        if (type === 'css') downloadFile('mp-breadcrumb.css', exportCss, 'text/css');
        if (type === 'sass') downloadFile('mp-breadcrumb.scss', exportSass, 'text/x-scss');
        flashButton(download, 'Descargado');
      }
    });

    document.addEventListener('input', (event) => {
      if (!event.target.matches('[data-breadcrumb-control]')) return;
      renderPlayground(findPage(event.target));
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-breadcrumb-control]')) renderPlayground(findPage(event.target));
      if (event.target.matches('[data-breadcrumb-anatomy-toggle]')) renderAnatomy(findPage(event.target));
    });
  }

  function initBreadcrumbDocs(root = document) {
    const page = root.querySelector('[data-component-doc="breadcrumb"]');
    if (!page || page.dataset.breadcrumbInitialized === 'true') return;
    renderStaticCode(page);
    renderStaticDemos(page);
    renderAnatomy(page, 'default');
    renderPlayground(page);
    page.dataset.breadcrumbInitialized = 'true';
  }

  function syncTheme(theme) {
    const page = document.querySelector('[data-component-doc="breadcrumb"]');
    if (!page) return;
    const themeControl = page.querySelector('[data-breadcrumb-control="theme"]');
    if (themeControl) themeControl.value = theme || 'light';
    renderPlayground(page);
  }

  return { initBreadcrumbDocs, bindBreadcrumbDelegated, syncTheme };
})();

window.breadcrumbDocs = breadcrumbDocs;

function bootBreadcrumbDocs() {
  breadcrumbDocs.bindBreadcrumbDelegated();
  breadcrumbDocs.initBreadcrumbDocs(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => breadcrumbDocs.initBreadcrumbDocs(document));
});

document.addEventListener('ds:theme-change', (event) => {
  const theme = event?.detail?.theme || document.documentElement.getAttribute('data-theme') || 'light';
  breadcrumbDocs.syncTheme(theme);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootBreadcrumbDocs);
} else {
  bootBreadcrumbDocs();
}
