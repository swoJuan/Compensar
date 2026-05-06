const accordionDocs = (() => {
  const exportCss = `/* mp-accordion - Compensar Design System
   Fuente: core/components/web/_accordion.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4622:76590 */

.mp-accordion {
  --mp-accordion-border: var(--use-border-default, #d9d9d9);
  --mp-accordion-bg: var(--use-surface-white, #ffffff);
  --mp-accordion-text: var(--use-text-primary, #111111);
  --mp-accordion-radius: 24px;
  --mp-accordion-padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.mp-accordion__item {
  overflow: hidden;
  border: 1px solid var(--mp-accordion-border);
  border-radius: var(--mp-accordion-radius);
  background: var(--mp-accordion-bg);
}

.mp-accordion__trigger {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  padding: var(--mp-accordion-padding);
  border: 0;
  background: transparent;
  color: var(--mp-accordion-text);
  cursor: pointer;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  text-align: left;
  transition: background 0.15s ease;
}

.mp-accordion__trigger:hover,
.mp-accordion__trigger.mp-accordion__trigger--is-hover {
  background: color-mix(in srgb, var(--mp-accordion-border) 35%, transparent);
}

.mp-accordion__trigger:focus-visible,
.mp-accordion__trigger.mp-accordion__trigger--is-focus {
  border-radius: var(--mp-accordion-radius);
  outline: 2px solid var(--use-primary-default, #ff6600);
  outline-offset: -2px;
}

.mp-accordion__title {
  flex: 1 0 0;
  min-width: 0;
}

.mp-accordion__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: var(--mp-accordion-text);
  transition: transform 0.25s ease;
}

.mp-accordion__item.is-open .mp-accordion__icon {
  transform: rotate(180deg);
}

.mp-accordion__panel {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.mp-accordion__item.is-open .mp-accordion__panel {
  max-height: 2000px;
}

.mp-accordion__content {
  padding: var(--mp-accordion-padding);
  border-top: 1px solid var(--mp-accordion-border);
  color: var(--mp-accordion-text);
}

.mp-accordion--flush {
  gap: 0;
}

.mp-accordion--flush .mp-accordion__item {
  border-radius: 0;
}

.mp-accordion--flush .mp-accordion__item:first-child {
  border-radius: var(--mp-accordion-radius) var(--mp-accordion-radius) 0 0;
}

.mp-accordion--flush .mp-accordion__item:last-child {
  border-radius: 0 0 var(--mp-accordion-radius) var(--mp-accordion-radius);
}

.mp-accordion--flush .mp-accordion__item + .mp-accordion__item {
  border-top: 0;
}

[data-theme="dark"] .mp-accordion {
  --mp-accordion-border: var(--use-border-default, #4a4a4a);
  --mp-accordion-bg: var(--use-surface-white, #1f1f1f);
  --mp-accordion-text: var(--use-text-primary, #f5f5f5);
}

[data-theme="high-contrast"] .mp-accordion {
  --mp-accordion-border: var(--use-border-default, #ffffff);
  --mp-accordion-bg: var(--use-background-page, #000000);
  --mp-accordion-text: var(--use-text-primary, #ffffff);
}

[data-theme="high-contrast"] .mp-accordion__item {
  border-width: 2px;
}

[data-theme="high-contrast"] .mp-accordion__content {
  border-top-width: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .mp-accordion__panel,
  .mp-accordion__icon {
    transition: none;
  }
}`;

  const exportSass = `// mp-accordion - Compensar Design System
// Fuente productiva: core/components/web/_accordion.scss

$mp-accordion-radius: 24px;
$mp-accordion-padding: 16px;

${exportCss}`;

  const sampleItems = [
    {
      title: 'Cobertura médica internacional',
      content: 'Asistencia médica de urgencias durante viajes internacionales, según las condiciones del plan.'
    },
    {
      title: 'Cancelación de viaje',
      content: 'Reembolso de gastos no recuperables por cancelación imprevista antes del inicio del viaje.'
    },
    {
      title: 'Pérdida de equipaje',
      content: 'Orientación e indemnización según cobertura contratada para eventos reportados en transporte.'
    }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));
  }

  function iconMarkup(className = 'mp-accordion__icon icon icon-caret-down icon-24') {
    return `<i class="${className}" aria-hidden="true"></i>`;
  }

  function buildAccordionHtml(config = {}) {
    const count = Math.max(1, Math.min(Number(config.count) || 3, sampleItems.length));
    const openIndex = Number.isInteger(config.openIndex) ? config.openIndex : 0;
    const variant = config.variant === 'flush' ? ' mp-accordion--flush' : '';
    const exclusive = config.exclusive === true;
    const state = config.state || 'default';
    const prefix = config.prefix || 'accordion';
    const sourceItems = Array.isArray(config.items) && config.items.length ? config.items : sampleItems;
    const items = sourceItems.slice(0, count);

    return `<div class="mp-accordion${variant}"${exclusive ? ' data-exclusive="true"' : ''}>
  ${items.map((item, index) => {
    const isOpen = index === openIndex;
    const triggerId = `${prefix}-trigger-${index + 1}`;
    const panelId = `${prefix}-panel-${index + 1}`;
    const triggerClasses = ['mp-accordion__trigger'];
    if (state === 'hover' && index === 0) triggerClasses.push('mp-accordion__trigger--is-hover');
    if (state === 'focus' && index === 0) triggerClasses.push('mp-accordion__trigger--is-focus');
    return `<div class="mp-accordion__item${isOpen ? ' is-open' : ''}">
    <button class="${triggerClasses.join(' ')}" type="button" id="${triggerId}" aria-expanded="${isOpen}" aria-controls="${panelId}">
      <span class="mp-accordion__title">${escapeHtml(item.title)}</span>
      ${iconMarkup()}
    </button>
    <div class="mp-accordion__panel" id="${panelId}" role="region" aria-labelledby="${triggerId}">
      <div class="mp-accordion__content">
        <p class="mp-body-m">${escapeHtml(item.content)}</p>
      </div>
    </div>
  </div>`;
  }).join('\n  ')}
</div>`;
  }

  function setAccordionPanelHeights(root) {
    root.querySelectorAll('.mp-accordion__item').forEach((item) => {
      const panel = item.querySelector('.mp-accordion__panel');
      if (!panel) return;
      panel.style.maxHeight = item.classList.contains('is-open') ? `${panel.scrollHeight}px` : '0px';
    });
  }

  function bindAccordion(root) {
    root.querySelectorAll('.mp-accordion').forEach((accordion) => {
      if (accordion.dataset.accordionBound === 'true') {
        setAccordionPanelHeights(accordion);
        return;
      }
      accordion.dataset.accordionBound = 'true';
      accordion.querySelectorAll('.mp-accordion__trigger').forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const item = trigger.closest('.mp-accordion__item');
          const current = item.closest('.mp-accordion');
          const isOpen = item.classList.contains('is-open');

          if (current.dataset.exclusive === 'true' && !isOpen) {
            current.querySelectorAll('.mp-accordion__item').forEach((other) => {
              other.classList.remove('is-open');
              other.querySelector('.mp-accordion__trigger')?.setAttribute('aria-expanded', 'false');
            });
          }

          item.classList.toggle('is-open', !isOpen);
          trigger.setAttribute('aria-expanded', String(!isOpen));
          setAccordionPanelHeights(current);
        });
      });
      setAccordionPanelHeights(accordion);
    });
  }

  function stateFromPage(page) {
    return {
      count: page.querySelector('[data-accordion-control="count"]')?.value || '3',
      theme: page.querySelector('[data-accordion-control="theme"]')?.value || 'light',
      variant: page.querySelector('[data-accordion-control="variant"]')?.value || 'default',
      exclusive: page.querySelector('[data-accordion-control="exclusive"]')?.checked === true,
      openIndex: page.querySelector('[data-accordion-control="open"]')?.checked === true ? 0 : -1
    };
  }

  function updatePlayground(page) {
    const state = stateFromPage(page);
    const preview = page.querySelector('#accordion-preview-area');
    const code = page.querySelector('#accordion-playground-code');
    if (!preview || !code) return;
    const html = buildAccordionHtml(state);
    preview.dataset.theme = state.theme;
    preview.innerHTML = html;
    code.textContent = html;
    bindAccordion(preview);
  }

  function renderAnatomy(page, state = 'default') {
    const preview = page.querySelector('#accordion-anatomy-preview');
    if (!preview) return;
    preview.innerHTML = buildAccordionHtml({
      count: 1,
      openIndex: state === 'closed' ? -1 : 0,
      state,
      prefix: `accordion-anatomy-${state}`
    });
    bindAccordion(preview);
  }

  function renderStates(page) {
    page.querySelectorAll('[data-accordion-state-demo]').forEach((target) => {
      const state = target.dataset.accordionStateDemo;
      const isExpandedState = state === 'open' || state === 'hover' || state === 'focus';
      target.innerHTML = buildAccordionHtml({
        count: 1,
        openIndex: isExpandedState ? 0 : -1,
        state,
        prefix: `accordion-state-${state}`,
        items: [{
          title: 'Cobertura médica',
          content: 'Asistencia de urgencias según las condiciones del plan.'
        }]
      });
      bindAccordion(target);
    });
  }

  function renderModes(page) {
    page.querySelectorAll('[data-accordion-mode-demo]').forEach((target) => {
      target.innerHTML = buildAccordionHtml({
        count: 2,
        openIndex: 0,
        variant: target.dataset.accordionModeDemo === 'high-contrast' ? 'flush' : 'default',
        prefix: `accordion-mode-${target.dataset.accordionModeDemo}`
      });
      bindAccordion(target);
    });
  }

  function setCodeTab(page, tab) {
    const html = buildAccordionHtml({ count: 3, openIndex: 0 });
    const slots = { html, css: exportCss, sass: exportSass };
    page.querySelectorAll('[data-accordion-code-tab]').forEach((button) => {
      const active = button.dataset.accordionCodeTab === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    Object.keys(slots).forEach((key) => {
      const pre = page.querySelector(`#accordion-code-${key}`);
      if (!pre) return;
      pre.classList.toggle('active', key === tab);
      pre.textContent = slots[key];
    });
  }

  function copyText(text) {
    if (navigator.clipboard) return navigator.clipboard.writeText(text);
    const area = document.createElement('textarea');
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    return Promise.resolve();
  }

  function downloadFile(name, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function downloadableHtml() {
    return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>mp-accordion</title>
  <style>
${exportCss}
  </style>
</head>
<body>
${buildAccordionHtml({ count: 3, openIndex: 0 })}
</body>
</html>`;
  }

  function initAccordionDocs(scope = document) {
    const page = scope.querySelector('[data-component-doc="accordion"]');
    if (!page) return;

    page.querySelectorAll('[data-accordion-control]').forEach((control) => {
      control.addEventListener('input', () => updatePlayground(page));
      control.addEventListener('change', () => updatePlayground(page));
    });

    page.querySelectorAll('[data-accordion-anatomy]').forEach((button) => {
      button.addEventListener('click', () => {
        page.querySelectorAll('[data-accordion-anatomy]').forEach((item) => {
          const active = item === button;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        renderAnatomy(page, button.dataset.accordionAnatomy);
      });
    });

    page.querySelectorAll('[data-accordion-anatomy-toggle]').forEach((toggle) => {
      toggle.addEventListener('change', () => {
        const type = toggle.dataset.accordionAnatomyToggle;
        page.classList.toggle(`accordion-doc--hide-${type}`, !toggle.checked);
      });
    });

    page.querySelectorAll('[data-accordion-code-tab]').forEach((button) => {
      button.addEventListener('click', () => setCodeTab(page, button.dataset.accordionCodeTab));
    });

    page.querySelector('[data-accordion-copy-playground]')?.addEventListener('click', () => {
      copyText(page.querySelector('#accordion-playground-code')?.textContent || '');
    });

    page.querySelector('[data-accordion-copy-code]')?.addEventListener('click', () => {
      const active = page.querySelector('.code-tab.active')?.dataset.accordionCodeTab || 'html';
      const source = page.querySelector(`#accordion-code-${active}`)?.textContent || '';
      copyText(source);
    });

    page.querySelectorAll('[data-accordion-download]').forEach((button) => {
      button.addEventListener('click', () => {
        const type = button.dataset.accordionDownload;
        if (type === 'html') downloadFile('mp-accordion.html', downloadableHtml(), 'text/html');
        if (type === 'css') downloadFile('mp-accordion.css', exportCss, 'text/css');
        if (type === 'sass') downloadFile('mp-accordion.scss', exportSass, 'text/x-scss');
      });
    });

    renderAnatomy(page);
    renderStates(page);
    renderModes(page);
    updatePlayground(page);
    setCodeTab(page, 'html');
    bindAccordion(page);
  }

  return { initAccordionDocs, buildAccordionHtml, bindAccordion };
})();

window.accordionDocs = accordionDocs;
