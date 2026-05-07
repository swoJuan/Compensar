const loadingDocs = (() => {
  const exportCss = `/* mp-loading - Compensar Design System
   Fuente: core/components/web/_loading.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4610:73484
   Estilos planos para dummy/demo. */

.mp-loading {
  --mp-loading-size: 48px;
  --mp-loading-bar-width: 4px;
  --mp-loading-bar-height: 12px;
  --mp-loading-gap: 16px;
  --mp-loading-color: var(--use-text-tertiary, #666666);
  --mp-loading-text: var(--use-text-secondary, #333333);
  --mp-loading-bg: transparent;
  --mp-loading-overlay-bg: color-mix(in srgb, var(--use-surface-white, #ffffff) 88%, transparent);
  display: inline-flex;
  flex-direction: column;
  gap: var(--mp-loading-gap);
  align-items: center;
  justify-content: center;
  padding: 0;
  background: var(--mp-loading-bg);
  color: var(--mp-loading-text);
  text-align: center;
}

.mp-loading__spinner {
  position: relative;
  width: var(--mp-loading-size);
  height: var(--mp-loading-size);
  flex: 0 0 var(--mp-loading-size);
  color: var(--mp-loading-color);
  animation: mp-loading-rotate 0.9s linear infinite;
}

.mp-loading__bar {
  position: absolute;
  left: 50%;
  top: 0;
  width: var(--mp-loading-bar-width);
  height: var(--mp-loading-bar-height);
  border-radius: var(--radius-full, 9999px);
  background: currentColor;
  opacity: 0.28;
  transform-origin: 50% calc(var(--mp-loading-size) / 2);
  animation: mp-loading-fade 0.9s linear infinite;
}

.mp-loading__bar:nth-child(1) { transform: translateX(-50%) rotate(0deg); animation-delay: -0.7875s; }
.mp-loading__bar:nth-child(2) { transform: translateX(-50%) rotate(45deg); animation-delay: -0.675s; }
.mp-loading__bar:nth-child(3) { transform: translateX(-50%) rotate(90deg); animation-delay: -0.5625s; }
.mp-loading__bar:nth-child(4) { transform: translateX(-50%) rotate(135deg); animation-delay: -0.45s; }
.mp-loading__bar:nth-child(5) { transform: translateX(-50%) rotate(180deg); animation-delay: -0.3375s; }
.mp-loading__bar:nth-child(6) { transform: translateX(-50%) rotate(225deg); animation-delay: -0.225s; }
.mp-loading__bar:nth-child(7) { transform: translateX(-50%) rotate(270deg); animation-delay: -0.1125s; }
.mp-loading__bar:nth-child(8) { transform: translateX(-50%) rotate(315deg); animation-delay: 0s; }

.mp-loading__text {
  max-width: 320px;
  margin: 0;
  color: var(--mp-loading-text);
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
}

.mp-loading--sm {
  --mp-loading-size: 32px;
  --mp-loading-bar-width: 3px;
  --mp-loading-bar-height: 8px;
  --mp-loading-gap: 8px;
}

.mp-loading--lg {
  --mp-loading-size: 64px;
  --mp-loading-bar-width: 5px;
  --mp-loading-bar-height: 16px;
  --mp-loading-gap: 24px;
}

.mp-loading--inline {
  flex-direction: row;
  text-align: left;
}

.mp-loading--overlay {
  width: 100%;
  min-height: 240px;
  padding: 40px;
  border-radius: 16px;
  background: var(--mp-loading-overlay-bg);
}

.mp-loading--inverse {
  --mp-loading-color: var(--use-text-on-dark-primary, #ffffff);
  --mp-loading-text: var(--use-text-on-dark-primary, #ffffff);
  --mp-loading-overlay-bg: color-mix(in srgb, var(--base-neutral-black, #000000) 72%, transparent);
}

.mp-loading.is-paused .mp-loading__spinner,
.mp-loading.is-paused .mp-loading__bar {
  animation-play-state: paused;
}

[data-theme="dark"] .mp-loading {
  --mp-loading-color: var(--base-neutral-40, #a4a4a4);
  --mp-loading-text: var(--base-neutral-10, #f5f5f5);
  --mp-loading-overlay-bg: color-mix(in srgb, var(--base-neutral-90, #211b1a) 92%, transparent);
}

[data-theme="high-contrast"] .mp-loading {
  --mp-loading-color: var(--base-neutral-white, #ffffff);
  --mp-loading-text: var(--base-neutral-white, #ffffff);
  --mp-loading-overlay-bg: var(--base-neutral-black, #000000);
}

[data-theme="high-contrast"] .mp-loading--overlay {
  border: 1px solid var(--base-neutral-white, #ffffff);
}

@keyframes mp-loading-rotate {
  to { transform: rotate(360deg); }
}

@keyframes mp-loading-fade {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.28; }
}

@media (prefers-reduced-motion: reduce) {
  .mp-loading__spinner,
  .mp-loading__bar {
    animation-duration: 2.4s;
  }
}`;

  const animationCss = `/* mp-loading animation - CSS */
.mp-loading__spinner {
  animation: mp-loading-rotate 0.9s linear infinite;
}

.mp-loading__bar {
  animation: mp-loading-fade 0.9s linear infinite;
}

.mp-loading__bar:nth-child(1) { animation-delay: -0.7875s; }
.mp-loading__bar:nth-child(2) { animation-delay: -0.675s; }
.mp-loading__bar:nth-child(3) { animation-delay: -0.5625s; }
.mp-loading__bar:nth-child(4) { animation-delay: -0.45s; }
.mp-loading__bar:nth-child(5) { animation-delay: -0.3375s; }
.mp-loading__bar:nth-child(6) { animation-delay: -0.225s; }
.mp-loading__bar:nth-child(7) { animation-delay: -0.1125s; }
.mp-loading__bar:nth-child(8) { animation-delay: 0s; }

@keyframes mp-loading-rotate {
  to { transform: rotate(360deg); }
}

@keyframes mp-loading-fade {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.28; }
}

@media (prefers-reduced-motion: reduce) {
  .mp-loading__spinner,
  .mp-loading__bar {
    animation-duration: 2.4s;
  }
}`;

  const exportSass = `// mp-loading - Compensar Design System
// Fuente productiva: core/components/web/_loading.scss
// Sass plano para dummy/demo.

$mp-loading-size: 48px;
$mp-loading-bar-width: 4px;
$mp-loading-bar-height: 12px;
$mp-loading-gap: 16px;

${exportCss}`;

  const animationSass = `// mp-loading animation - Sass
$mp-loading-duration: 0.9s;
$mp-loading-reduced-duration: 2.4s;

.mp-loading__spinner {
  animation: mp-loading-rotate $mp-loading-duration linear infinite;
}

.mp-loading__bar {
  animation: mp-loading-fade $mp-loading-duration linear infinite;
}

@for $i from 1 through 8 {
  .mp-loading__bar:nth-child(#{$i}) {
    animation-delay: -($mp-loading-duration - ($i * ($mp-loading-duration / 8)));
  }
}

@keyframes mp-loading-rotate {
  to { transform: rotate(360deg); }
}

@keyframes mp-loading-fade {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.28; }
}

@media (prefers-reduced-motion: reduce) {
  .mp-loading__spinner,
  .mp-loading__bar {
    animation-duration: $mp-loading-reduced-duration;
  }
}`;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));
  }

  function spinnerMarkup() {
    return `<span class="mp-loading__spinner" aria-hidden="true">
    <span class="mp-loading__bar"></span>
    <span class="mp-loading__bar"></span>
    <span class="mp-loading__bar"></span>
    <span class="mp-loading__bar"></span>
    <span class="mp-loading__bar"></span>
    <span class="mp-loading__bar"></span>
    <span class="mp-loading__bar"></span>
    <span class="mp-loading__bar"></span>
  </span>`;
  }

  function buildLoadingHtml(config = {}) {
    const size = config.size || '';
    const layout = config.layout || 'default';
    const paused = config.paused || config.state === 'paused';
    const showText = config.showText !== false;
    const text = config.text || 'Estamos buscando opciones para ti...';
    const classes = ['mp-loading'];
    if (size) classes.push(`mp-loading--${size}`);
    if (layout === 'inline') classes.push('mp-loading--inline');
    if (layout === 'overlay') classes.push('mp-loading--overlay');
    if (config.inverse) classes.push('mp-loading--inverse');
    if (paused) classes.push('is-paused');
    const label = escapeHtml(text);
    return `<div class="${classes.join(' ')}" role="status" aria-live="polite" aria-busy="true"${showText ? '' : ` aria-label="${label}"`}>
  ${spinnerMarkup()}
  ${showText ? `<span class="mp-loading__text">${label}</span>` : ''}
</div>`;
  }

  function stateFromPage(page) {
    return {
      size: page.querySelector('[data-loading-control="size"]')?.value || '',
      layout: page.querySelector('[data-loading-control="layout"]')?.value || 'default',
      theme: page.querySelector('[data-loading-control="theme"]')?.value || 'light',
      state: page.querySelector('[data-loading-control="state"]')?.value || 'running',
      showText: page.querySelector('[data-loading-control="showText"]')?.checked !== false,
      text: page.querySelector('[data-loading-control="text"]')?.value || 'Estamos buscando opciones para ti...'
    };
  }

  function findPage(node) {
    return node?.closest?.('[data-component-doc="loading"]') || document.querySelector('[data-component-doc="loading"]');
  }

  function renderLoading(container, config = {}) {
    if (!container) return;
    container.innerHTML = buildLoadingHtml(config);
  }

  function renderAnatomy(page, variant) {
    if (!page) return;
    const current = variant || page.dataset.loadingAnatomy || 'default';
    page.dataset.loadingAnatomy = current;
    page.querySelectorAll('[data-loading-anatomy]').forEach((button) => {
      const active = button.dataset.loadingAnatomy === current;
      button.setAttribute('aria-pressed', String(active));
    });
    const paused = page.querySelector('[data-loading-anatomy-toggle="paused"]')?.checked;
    renderLoading(page.querySelector('#loading-anatomy-preview'), {
      layout: current,
      paused,
      text: 'Estamos buscando opciones para ti...'
    });
    const showMeasures = page.querySelector('[data-loading-anatomy-toggle="measures"]')?.checked !== false;
    const showLabels = page.querySelector('[data-loading-anatomy-toggle="labels"]')?.checked !== false;
    page.querySelectorAll('[data-loading-measure]').forEach((item) => { item.hidden = !showMeasures; });
    page.querySelectorAll('.loading-doc-callout').forEach((item) => { item.hidden = !showLabels; });
  }

  function renderPlayground(page) {
    if (!page) return;
    const state = stateFromPage(page);
    const preview = page.querySelector('#loading-preview-area');
    if (preview) {
      preview.dataset.theme = state.theme;
      renderLoading(preview, state);
    }
    const html = buildLoadingHtml(state);
    const activeTab = page.querySelector('[data-loading-code-tab].active')?.dataset.loadingCodeTab || 'html';
    const playgroundCode = page.querySelector('#loading-playground-code');
    if (playgroundCode) playgroundCode.textContent = html;
    const output = {
      html,
      css: exportCss,
      sass: exportSass
    };
    const activeOutput = page.querySelector(`#loading-code-${activeTab}`);
    if (activeOutput) activeOutput.textContent = output[activeTab];
  }

  function renderStaticCode(page) {
    if (!page) return;
    const html = buildLoadingHtml({ text: 'Estamos buscando opciones para ti...' });
    const slots = {
      html: html,
      css: exportCss,
      sass: exportSass
    };
    Object.entries(slots).forEach(([key, value]) => {
      const pre = page.querySelector(`#loading-code-${key}`);
      if (pre) pre.textContent = value;
    });
  }

  function setCodeTab(page, tabName = 'html') {
    if (!page) return;
    page.querySelectorAll('[data-loading-code-tab]').forEach((item) => {
      const active = item.dataset.loadingCodeTab === tabName;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    page.querySelectorAll('#loading-code-html, #loading-code-css, #loading-code-sass').forEach((pre) => {
      pre.classList.toggle('active', pre.id === `loading-code-${tabName}`);
    });
  }

  function setCodeTabFromButton(button) {
    if (!button) return;
    setCodeTab(findPage(button), button.dataset.loadingCodeTab);
  }

  function renderStaticDemos(page) {
    if (!page) return;
    const demos = {
      default: { text: 'Estamos buscando opciones para ti...' },
      inline: { layout: 'inline', size: 'sm', text: 'Cargando resultados...' },
      overlay: { layout: 'overlay', text: 'Actualizando información...' },
      paused: { state: 'paused', size: 'sm', text: 'Animación reducida' }
    };
    page.querySelectorAll('[data-loading-state-demo]').forEach((demo) => {
      renderLoading(demo, demos[demo.dataset.loadingStateDemo]);
    });
    page.querySelectorAll('[data-loading-mode-demo]').forEach((demo) => {
      renderLoading(demo, { size: 'sm', text: 'Cargando...' });
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

  function downloadFromButton(button) {
    if (!button) return;
    const type = button.dataset.loadingDownload;
    if (type === 'html') downloadFile('mp-loading.html', downloadableHtml(), 'text/html');
    if (type === 'css') downloadFile('mp-loading.css', exportCss, 'text/css');
    if (type === 'sass') downloadFile('mp-loading.scss', exportSass, 'text/x-scss');
    if (type === 'animation-css') downloadFile('mp-loading-animation.css', animationCss, 'text/css');
    if (type === 'animation-sass') downloadFile('mp-loading-animation.scss', animationSass, 'text/x-scss');
    flashButton(button, 'Descargado');
  }

  function downloadableHtml() {
    return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Loading - Compensar Design System</title>
  <style>
${exportCss}
  </style>
</head>
<body>
${buildLoadingHtml({ text: 'Estamos buscando opciones para ti...' })}
</body>
</html>`;
  }

  function bindLoadingDelegated() {
    if (document.documentElement.dataset.loadingDocsDelegated === 'true') return;
    document.documentElement.dataset.loadingDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-loading-anatomy]');
      if (anatomy) {
        renderAnatomy(findPage(anatomy), anatomy.dataset.loadingAnatomy);
        return;
      }

      const tab = event.target.closest('[data-loading-code-tab]');
      if (tab) {
        setCodeTabFromButton(tab);
        return;
      }

      const copyPlayground = event.target.closest('[data-loading-copy-playground]');
      if (copyPlayground) {
        copyText(findPage(copyPlayground).querySelector('#loading-playground-code')?.textContent || '', copyPlayground);
        return;
      }

      const copyCode = event.target.closest('[data-loading-copy-code]');
      if (copyCode) {
        copyText(findPage(copyCode).querySelector('#loading-code-html.active, #loading-code-css.active, #loading-code-sass.active')?.textContent || '', copyCode);
        return;
      }

      const download = event.target.closest('[data-loading-download]');
      if (download) {
        downloadFromButton(download);
      }
    });

    document.addEventListener('input', (event) => {
      if (!event.target.matches('[data-loading-control]')) return;
      renderPlayground(findPage(event.target));
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-loading-control]')) renderPlayground(findPage(event.target));
      if (event.target.matches('[data-loading-anatomy-toggle]')) renderAnatomy(findPage(event.target));
    });
  }

  function initLoadingDocs(root = document) {
    const page = root.querySelector('[data-component-doc="loading"]');
    if (!page || page.dataset.loadingInitialized === 'true') return;
    renderStaticCode(page);
    setCodeTab(page, 'html');
    renderStaticDemos(page);
    renderAnatomy(page, 'default');
    renderPlayground(page);
    page.dataset.loadingInitialized = 'true';
  }

  function syncTheme(theme) {
    const page = document.querySelector('[data-component-doc="loading"]');
    if (!page) return;
    const themeControl = page.querySelector('[data-loading-control="theme"]');
    if (themeControl) themeControl.value = theme || 'light';
    renderPlayground(page);
  }

  return { initLoadingDocs, bindLoadingDelegated, syncTheme, setCodeTabFromButton, downloadFromButton };
})();

window.loadingDocs = loadingDocs;

function bootLoadingDocs() {
  loadingDocs.bindLoadingDelegated();
  loadingDocs.initLoadingDocs(document);
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => loadingDocs.initLoadingDocs(document));
});

document.addEventListener('ds:theme-change', (event) => {
  const theme = event?.detail?.theme || document.documentElement.getAttribute('data-theme') || 'light';
  loadingDocs.syncTheme(theme);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootLoadingDocs);
} else {
  bootLoadingDocs();
}
