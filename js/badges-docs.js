// ============================================================
//  badges-docs.js
//  Playground interactivo para el componente mp-badge.
//  Expone: window.badgeDocs · { initBadgeDocs, bindBadgeDelegated, syncTheme }
// ============================================================

const badgeDocs = (() => {

  // ── Icono por kind para el playground ───────────────────────
  const KIND_ICONS = {
    success: 'check_circle',
    warning: 'schedule',
    error: 'warning',
    info: 'info',
    neutral: 'circle'
  };

  // ── Labels por defecto ────────────────────────────────────────
  const KIND_LABELS = {
    success: 'Activo',
    warning: 'Pendiente',
    error: 'Error',
    info: 'Información',
    neutral: 'Inactivo'
  };

  // ──────────────────────────────────────────────────────────────
  // Construye el DOM de un badge desde opciones
  // ──────────────────────────────────────────────────────────────
  function makeBadge({ kind = 'success', leading = 'dot', size = '', variant = '', label = '' } = {}) {
    const span = document.createElement('span');
    const classes = ['mp-badge', `mp-badge--${kind}`];

    if (variant === 'outline') classes.push('mp-badge--outline');
    if (variant === 'count')   classes.push('mp-badge--count');
    if (size === 'sm')         classes.push('mp-badge--sm');
    if (size === 'lg')         classes.push(variant === 'count' ? 'mp-badge--count-lg' : 'mp-badge--lg');

    span.className = classes.join(' ');
    span.setAttribute('role', variant === 'count' ? 'status' : 'img');

    const displayLabel = label || KIND_LABELS[kind] || kind;

    if (variant === 'count') {
      span.textContent = displayLabel;
    } else {
      if (leading === 'dot') {
        const dot = document.createElement('span');
        dot.className = 'mp-badge-dot';
        dot.setAttribute('aria-hidden', 'true');
        span.appendChild(dot);
      } else if (leading === 'icon') {
        const icon = document.createElement('span');
        icon.className = 'material-symbols-rounded mp-badge-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = KIND_ICONS[kind] || 'circle';
        span.appendChild(icon);
      }
      span.appendChild(document.createTextNode(displayLabel));
    }

    return span;
  }

  // ──────────────────────────────────────────────────────────────
  // Lee el estado actual de los controles en la página
  // ──────────────────────────────────────────────────────────────
  function stateFromPage(page) {
    return {
      kind:    page.querySelector('[data-bdg-control="kind"]')?.value    || 'success',
      leading: page.querySelector('[data-bdg-control="leading"]')?.value || 'dot',
      size:    page.querySelector('[data-bdg-control="size"]')?.value    || '',
      variant: page.querySelector('[data-bdg-control="variant"]')?.value || '',
      label:   page.querySelector('[data-bdg-control="label"]')?.value   || ''
    };
  }

  // ──────────────────────────────────────────────────────────────
  // Genera el HTML de referencia para el playground
  // ──────────────────────────────────────────────────────────────
  function buildCode({ kind, leading, size, variant, label }) {
    const displayLabel = label || KIND_LABELS[kind] || kind;
    const classes = ['mp-badge', `mp-badge--${kind}`];
    if (variant === 'outline')  classes.push('mp-badge--outline');
    if (variant === 'count')    classes.push('mp-badge--count');
    if (size === 'sm')          classes.push('mp-badge--sm');
    if (size === 'lg')          classes.push(variant === 'count' ? 'mp-badge--count-lg' : 'mp-badge--lg');

    const role = variant === 'count' ? 'status' : 'img';
    const ariaLabel = `Estado: ${displayLabel}`;
    const classStr = classes.join(' ');

    if (variant === 'count') {
      return `<span class="${classStr}"\n      role="${role}" aria-label="${displayLabel}">${displayLabel}</span>`;
    }

    const inner = leading === 'dot'
      ? `\n  <span class="mp-badge-dot" aria-hidden="true"></span>\n  ${displayLabel}\n`
      : leading === 'icon'
        ? `\n  <span class="material-symbols-rounded mp-badge-icon" aria-hidden="true">${KIND_ICONS[kind] || 'circle'}</span>\n  ${displayLabel}\n`
        : `${displayLabel}`;

    return `<span class="${classStr}"\n      role="${role}" aria-label="${ariaLabel}">${inner}</span>`;
  }

  // ──────────────────────────────────────────────────────────────
  // Actualiza el preview y el código generado
  // ──────────────────────────────────────────────────────────────
  function renderPlayground(page) {
    if (!page) return;
    const state = stateFromPage(page);

    // Preview
    const previewArea = page.querySelector('#bdg-preview-area');
    if (previewArea) {
      previewArea.replaceChildren(makeBadge(state));
    }

    // Código
    const codeEl = page.querySelector('#bdg-playground-code');
    if (codeEl) {
      codeEl.textContent = buildCode(state);
    }

    // Sincroniza: si es contador, fuerza leading a "none" (no aplica)
    const leadingCtrl = page.querySelector('[data-bdg-control="leading"]');
    if (leadingCtrl) {
      leadingCtrl.disabled = state.variant === 'count';
    }
    const labelCtrl = page.querySelector('[data-bdg-control="label"]');
    if (labelCtrl && !labelCtrl.dataset.userEdited) {
      labelCtrl.value = KIND_LABELS[state.kind] || state.kind;
    }
  }

  // ──────────────────────────────────────────────────────────────
  // Manejo de tabs de código estático
  // ──────────────────────────────────────────────────────────────
  function switchCodeTab(page, tabId) {
    if (!page) return;
    page.querySelectorAll('[data-bdg-code-tab]').forEach((btn) => {
      const isActive = btn.dataset.bdgCodeTab === tabId;
      btn.setAttribute('aria-selected', String(isActive));
      btn.classList.toggle('active', isActive);
    });
    page.querySelectorAll('[id^="bdg-code-"]').forEach((pre) => {
      pre.classList.toggle('active', pre.id === `bdg-code-${tabId}`);
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Copia texto al portapapeles con feedback visual
  // ──────────────────────────────────────────────────────────────
  function copyText(text, btn) {
    const doWrite = () => {
      if (navigator.clipboard) return navigator.clipboard.writeText(text);
      const ta = document.createElement('textarea');
      ta.value = text;
      Object.assign(ta.style, { position: 'fixed', opacity: '0' });
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      return Promise.resolve();
    };
    doWrite().then(() => flashBtn(btn)).catch(() => {});
  }

  function flashBtn(btn) {
    if (!btn) return;
    const prev = btn.innerHTML;
    btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copiado';
    window.setTimeout(() => { btn.innerHTML = prev; }, 1400);
  }

  // ──────────────────────────────────────────────────────────────
  // Busca la página de badges
  // ──────────────────────────────────────────────────────────────
  function findPage(target) {
    return target?.closest('[data-component-doc="badges"]')
      || document.querySelector('[data-component-doc="badges"]');
  }

  // ──────────────────────────────────────────────────────────────
  // Delegación de eventos global (click + change/input)
  // ──────────────────────────────────────────────────────────────
  function bindBadgeDelegated() {
    if (document.documentElement.dataset.badgeDocsDelegated === 'true') return;
    document.documentElement.dataset.badgeDocsDelegated = 'true';

    document.addEventListener('click', (e) => {
      // Tabs de código estático
      const codeTab = e.target.closest('[data-bdg-code-tab]');
      if (codeTab) {
        switchCodeTab(findPage(codeTab), codeTab.dataset.bdgCodeTab);
        return;
      }

      // Copiar código playground
      const copyPlayground = e.target.closest('[data-bdg-copy-playground]');
      if (copyPlayground) {
        const page = findPage(copyPlayground);
        const text = page?.querySelector('#bdg-playground-code')?.textContent || '';
        copyText(text, copyPlayground);
        return;
      }

      // Copiar código estático (tab activo)
      const copyCode = e.target.closest('[data-bdg-copy-code]');
      if (copyCode) {
        const page = findPage(copyCode);
        const activeCode = page?.querySelector('[id^="bdg-code-"].active');
        copyText(activeCode?.textContent || '', copyCode);
        return;
      }
    });

    document.addEventListener('change', (e) => {
      if (e.target.matches('[data-bdg-control]')) {
        const page = findPage(e.target);
        // Si el usuario cambió el kind y no editó el label manualmente, resetear
        if (e.target.dataset.bdgControl === 'kind') {
          const labelCtrl = page?.querySelector('[data-bdg-control="label"]');
          if (labelCtrl && !labelCtrl.dataset.userEdited) {
            labelCtrl.value = KIND_LABELS[e.target.value] || e.target.value;
          }
        }
        renderPlayground(page);
      }
    });

    document.addEventListener('input', (e) => {
      if (e.target.matches('[data-bdg-control="label"]')) {
        e.target.dataset.userEdited = 'true';
        renderPlayground(findPage(e.target));
      }
    });
  }

  // ──────────────────────────────────────────────────────────────
  // Inicialización de la página
  // ──────────────────────────────────────────────────────────────
  function initBadgeDocs(root = document) {
    const page = root.querySelector('[data-component-doc="badges"]');
    if (!page || page.dataset.badgeInitialized === 'true') return;

    renderPlayground(page);
    page.dataset.badgeInitialized = 'true';
  }

  // ──────────────────────────────────────────────────────────────
  // Sincronización de tema global
  // ──────────────────────────────────────────────────────────────
  function syncTheme() {
    // Los badges no necesitan ajustar controles de tema —
    // los modos de color son boxes con data-theme fijo y el playground
    // hereda el tema del documento vía CSS cascade.
    // No se requiere acción extra.
  }

  return { initBadgeDocs, bindBadgeDelegated, syncTheme };
})();

window.badgeDocs = badgeDocs;

// ── Boot automático ───────────────────────────────────────────
(function bootBadgeDocs() {
  badgeDocs.bindBadgeDelegated();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => badgeDocs.initBadgeDocs(document));
  } else {
    badgeDocs.initBadgeDocs(document);
  }
  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => badgeDocs.initBadgeDocs(document));
    });
  }
})();

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => badgeDocs.initBadgeDocs(document));
});
