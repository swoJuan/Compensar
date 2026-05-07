const stepperDocs = (() => {

  /* ── Export strings ───────────────────────────────────── */
  const exportCss = `/* mp-stepper - Compensar Design System
   Fuente: core/components/web/_stepper.scss
   Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4693:4707 */

.mp-stepper {
  --mp-stepper-done:    var(--use-primary-default, #ff6600);
  --mp-stepper-current: var(--use-primary-default, #ff6600);
  --mp-stepper-pending: var(--use-border-default, #cccccc);
  --mp-stepper-gap:     var(--space-12, 12px);
  --mp-stepper-h:       2px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.mp-stepper__head {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mp-stepper__count {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--use-text-secondary);
  margin: 0;
}

.mp-stepper__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--use-text-primary);
  margin: 0;
}

.mp-stepper__track {
  display: flex;
  gap: var(--mp-stepper-gap);
  align-items: center;
  padding: 12px 0;
}

.mp-stepper__bar {
  flex: 1;
  height: var(--mp-stepper-h);
  background: var(--mp-stepper-pending);
  border-radius: 999px;
  transition: background .25s ease;
}

.mp-stepper__bar.is-done    { background: var(--mp-stepper-done); }
.mp-stepper__bar.is-current { background: var(--mp-stepper-current); }

/* Compact */
.mp-stepper--compact .mp-stepper__head  { display: none; }
.mp-stepper--compact .mp-stepper__track { padding: 8px 0; }

/* Dark mode */
[data-theme='dark'] .mp-stepper {
  --mp-stepper-pending: var(--use-border-default, #4d4d4d);
}

/* High contrast */
[data-theme='high-contrast'] .mp-stepper {
  --mp-stepper-done:    var(--base-neutral-white, #ffffff);
  --mp-stepper-current: var(--base-neutral-white, #ffffff);
  --mp-stepper-pending: var(--base-neutral-50, #808080);
  --mp-stepper-h:       3px;
}`;

  const exportSass = `// mp-stepper - Compensar Design System
// Fuente: core/components/web/_stepper.scss
// Figma: 1zVGMpzqBgiBUqhmfFEAoT / 4693:4707
@use 'abstracts' as *;

${exportCss}`;

  /* ── Builder ──────────────────────────────────────────── */
  function buildStepperHtml(config = {}) {
    const total   = config.total   || 3;
    const current = config.current || 2;
    const compact = config.compact || false;
    const titles  = config.titles  || [
      'Datos personales',
      'Elige la fecha y hora',
      'Confirmación y envío',
      'Documentos requeridos',
      'Revisión final'
    ];

    const bars = Array.from({ length: total }, (_, i) => {
      const cls = i < current - 1 ? ' is-done' : i === current - 1 ? ' is-current' : '';
      return `    <div class="mp-stepper__bar${cls}"></div>`;
    }).join('\n');

    const headHtml = compact ? '' : `  <div class="mp-stepper__head">
    <span class="mp-stepper__count">Paso ${current} de ${total}</span>
    <h3 class="mp-stepper__title">${titles[(current - 1) % titles.length]}</h3>
  </div>
`;

    return `<div class="mp-stepper${compact ? ' mp-stepper--compact' : ''}" role="group" aria-label="Progreso del formulario">
${headHtml}  <div class="mp-stepper__track" role="progressbar" aria-valuenow="${current}" aria-valuemin="1" aria-valuemax="${total}" aria-label="Paso ${current} de ${total}">
${bars}
  </div>
</div>`;
  }

  /* ── Code tabs ────────────────────────────────────────── */
  function setCodeTab(page, tab) {
    const html = buildStepperHtml({ total: 3, current: 2, compact: false });
    const slots = { html, css: exportCss, sass: exportSass };

    page.querySelectorAll('[data-stepper-code-tab]').forEach(btn => {
      const active = btn.dataset.stepperCodeTab === tab;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    Object.keys(slots).forEach(key => {
      const pre = page.querySelector(`#stepper-code-${key}`);
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
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a);
    a.click(); a.remove();
    URL.revokeObjectURL(url);
  }

  function downloadableHtml() {
    return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>mp-stepper</title>
  <style>
${exportCss}
  </style>
</head>
<body>
${buildStepperHtml({ total: 3, current: 2 })}
</body>
</html>`;
  }

  /* ── Anatomy ──────────────────────────────────────────── */
  function renderAnatomy(page, state) {
    const preview = page.querySelector('#stepper-anatomy-preview');
    if (!preview) return;

    const cfg = {
      paso1:   { total: 3, current: 1, compact: false },
      paso2:   { total: 3, current: 2, compact: false },
      paso3:   { total: 3, current: 3, compact: false },
      compact: { total: 4, current: 2, compact: true  }
    }[state] || { total: 3, current: 2, compact: false };

    preview.innerHTML = buildStepperHtml({ ...cfg });

    const totalEl = page.querySelector('[data-stepper-measure="total"]');
    if (totalEl) totalEl.textContent = cfg.total + ' barras';
    const doneEl = page.querySelector('[data-stepper-measure="done"]');
    if (doneEl) doneEl.textContent = (cfg.current - 1) + ' done';

    page.querySelectorAll('.stepper-doc-callout--head').forEach(el => {
      el.style.display = cfg.compact ? 'none' : '';
    });
    const compactNote = page.querySelector('.stepper-doc-callout--compact-note');
    if (compactNote) compactNote.style.display = cfg.compact ? '' : 'none';
  }

  /* ── Init ─────────────────────────────────────────────── */
  function initStepperDocs(scope = document) {
    const page = scope.querySelector('[data-component-doc="stepper"]') ||
                 scope.querySelector('[data-guideline-doc="form-patterns"]');
    if (!page) return;

    /* anatomy segmented control */
    page.querySelectorAll('[data-stepper-anatomy]').forEach(btn => {
      btn.addEventListener('click', () => {
        page.querySelectorAll('[data-stepper-anatomy]').forEach(b => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        renderAnatomy(page, btn.dataset.stepperAnatomy);
      });
    });

    /* toggle measures/labels */
    page.querySelectorAll('[data-stepper-toggle]').forEach(toggle => {
      toggle.addEventListener('change', () => {
        page.classList.toggle('stepper-doc--hide-' + toggle.dataset.stepperToggle, !toggle.checked);
      });
    });

    /* code tabs */
    page.querySelectorAll('[data-stepper-code-tab]').forEach(btn => {
      btn.addEventListener('click', () => setCodeTab(page, btn.dataset.stepperCodeTab));
    });

    /* copy code */
    page.querySelector('[data-stepper-copy-code]')?.addEventListener('click', () => {
      const active = page.querySelector('.code-tab.active')?.dataset.stepperCodeTab || 'html';
      const source = page.querySelector(`#stepper-code-${active}`)?.textContent || '';
      copyText(source);
    });

    /* downloads */
    page.querySelectorAll('[data-stepper-download]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.stepperDownload;
        if (type === 'html') downloadFile('mp-stepper.html', downloadableHtml(), 'text/html');
        if (type === 'css')  downloadFile('mp-stepper.css',  exportCss, 'text/css');
        if (type === 'sass') downloadFile('mp-stepper.scss', exportSass, 'text/x-scss');
      });
    });

    /* initial render */
    renderAnatomy(page, 'paso2');
    setCodeTab(page, 'html');
  }

  return { initStepperDocs, buildStepperHtml };
})();

window.stepperDocs = stepperDocs;
