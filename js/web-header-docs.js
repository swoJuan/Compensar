const webHeaderDocs = (() => {
  const exportCss = `/* Header Web / Drupal - Compensar Design System
   Fuente: core/components/web/_header.scss */

.mp-web-header { --mp-web-header-bg:var(--use-surface-white,#fff); --mp-web-header-border:var(--use-border-subtle,#ddd); --mp-web-header-text:var(--use-text-primary,#111); --mp-web-header-muted:var(--use-text-secondary,#444); --mp-web-header-accent:var(--use-primary-default,#ff6600); --mp-web-header-focus:var(--use-focus-outline,#ff6600); width:100%; border:1px solid var(--mp-web-header-border); border-radius:8px; background:var(--mp-web-header-bg); color:var(--mp-web-header-text); font-family:Roboto,Arial,sans-serif; overflow:visible; }
.mp-web-header__utility { display:flex; justify-content:flex-end; align-items:center; gap:16px; min-height:36px; padding:8px 24px; border-bottom:1px solid var(--mp-web-header-border); background:var(--use-surface-theme-gray-5,#f8f7f7); }
.mp-web-header__utility-link,.mp-web-header__nav-link,.mp-web-header__dropdown-link { color:var(--mp-web-header-text); font-size:14px; line-height:1.4; letter-spacing:0; text-decoration:none; }
.mp-web-header__utility-link:hover,.mp-web-header__utility-link:focus-visible,.mp-web-header__nav-link:hover,.mp-web-header__nav-link:focus-visible,.mp-web-header__dropdown-link:hover,.mp-web-header__dropdown-link:focus-visible,.mp-web-header__nav-link--is-hover,.mp-web-header__dropdown-link--is-hover { color:var(--mp-web-header-accent); outline:none; }
.mp-web-header__main { display:grid; grid-template-columns:auto minmax(220px,1fr) auto auto; align-items:center; gap:16px; padding:12px 24px; }
.mp-web-header__brand { display:inline-flex; align-items:center; gap:8px; min-width:max-content; color:var(--mp-web-header-text); text-decoration:none; }
.mp-web-header__logo { width:44px; height:44px; display:grid; place-items:center; border-radius:8px; background:var(--mp-web-header-accent); color:#fff; font-weight:800; font-size:18px; line-height:1; }
.mp-web-header__brand-text { display:grid; gap:2px; }
.mp-web-header__brand-name { font-size:18px; font-weight:800; line-height:1.15; letter-spacing:0; }
.mp-web-header__brand-service { color:var(--mp-web-header-muted); font-size:14px; line-height:1.2; letter-spacing:0; }
.mp-web-header__search { position:relative; min-width:0; }
.mp-web-header__search-input { width:100%; min-height:44px; padding:0 44px 0 16px; border:1px solid var(--mp-web-header-border); border-radius:8px; background:var(--mp-web-header-bg); color:var(--mp-web-header-text); font-size:14px; letter-spacing:0; }
.mp-web-header__search-input:focus { border-color:var(--mp-web-header-focus); outline:none; box-shadow:0 0 0 3px color-mix(in srgb,var(--mp-web-header-focus) 22%,transparent); }
.mp-web-header__search-icon { position:absolute; top:50%; right:16px; transform:translateY(-50%); color:var(--mp-web-header-muted); pointer-events:none; }
.mp-web-header__cta { min-height:44px; display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:0 20px; border:1px solid var(--mp-web-header-accent); border-radius:8px; background:var(--mp-web-header-accent); color:#fff; font-size:14px; font-weight:800; line-height:1; letter-spacing:0; text-decoration:none; cursor:pointer; }
.mp-web-header__cta:hover,.mp-web-header__cta:focus-visible { background:var(--use-primary-hover,#e65300); border-color:var(--use-primary-hover,#e65300); outline:none; }
.mp-web-header__mobile-toggle { min-width:44px; min-height:44px; display:none; place-items:center; border:1px solid var(--mp-web-header-border); border-radius:8px; background:transparent; color:var(--mp-web-header-text); }
.mp-web-header__nav { position:relative; display:flex; align-items:center; gap:4px; padding:0 24px; border-top:1px solid var(--mp-web-header-border); }
.mp-web-header__nav-item { position:relative; }
.mp-web-header__nav-link { min-height:48px; display:inline-flex; align-items:center; gap:8px; padding:0 16px; border-bottom:3px solid transparent; font-weight:700; }
.mp-web-header__nav-link--active,.mp-web-header__nav-link[aria-current='page'] { border-bottom-color:var(--mp-web-header-accent); color:var(--mp-web-header-accent); }
.mp-web-header__nav-link:focus-visible,.mp-web-header__nav-link--is-focus { box-shadow:inset 0 0 0 2px var(--mp-web-header-focus); }
.mp-web-header__dropdown { position:absolute; z-index:20; top:calc(100% + 1px); left:0; width:min(720px,calc(100vw - 48px)); display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; padding:20px; border:1px solid var(--mp-web-header-border); border-radius:0 0 8px 8px; background:var(--mp-web-header-bg); box-shadow:0 8px 24px rgba(0,0,0,.12); }
.mp-web-header__dropdown[hidden] { display:none; }
.mp-web-header__dropdown-title { margin:0 0 8px; font-size:14px; font-weight:800; line-height:1.3; letter-spacing:0; }
.mp-web-header__dropdown-list { display:grid; gap:8px; padding:0; margin:0; list-style:none; }
.mp-web-header__dropdown-link { display:block; padding:8px; border-radius:8px; }
.mp-web-header__dropdown-link:hover,.mp-web-header__dropdown-link--is-hover { background:var(--use-surface-theme-gray-5,#f8f7f7); }
.mp-web-header__drawer { display:none; border-top:1px solid var(--mp-web-header-border); padding:16px; }
.mp-web-header--is-open .mp-web-header__drawer { display:grid; gap:12px; }
.mp-web-header__drawer-link { min-height:48px; display:flex; align-items:center; justify-content:space-between; padding:0 12px; border:1px solid var(--mp-web-header-border); border-radius:8px; color:var(--mp-web-header-text); font-size:14px; font-weight:700; text-decoration:none; }
.mp-web-header--zt { display:grid; grid-template-columns:minmax(220px,280px) 1fr; overflow:hidden; }
.mp-web-header--zt .mp-web-header__main { grid-column:1 / -1; grid-template-columns:auto auto minmax(0,1fr) auto; border-bottom:1px solid var(--mp-web-header-border); }
.mp-web-header__zt-menu { min-height:280px; padding:16px; border-right:1px solid var(--mp-web-header-border); background:var(--use-surface-theme-gray-5,#f8f7f7); }
.mp-web-header__zt-content { min-height:280px; padding:24px; }
.mp-web-header__module-list { display:grid; gap:8px; padding:0; margin:0; list-style:none; }
.mp-web-header__module-link { min-height:44px; display:flex; align-items:center; gap:8px; padding:0 12px; border-radius:8px; color:var(--mp-web-header-text); font-size:14px; font-weight:700; text-decoration:none; }
.mp-web-header__module-link:hover,.mp-web-header__module-link--active { background:var(--mp-web-header-bg); color:var(--mp-web-header-accent); }
@media (max-width:768px) { .mp-web-header__utility,.mp-web-header__search,.mp-web-header__nav { display:none; } .mp-web-header__main { grid-template-columns:auto 1fr auto; padding:12px 16px; } .mp-web-header__cta { display:none; } .mp-web-header__mobile-toggle { display:grid; } .mp-web-header__brand-name { font-size:16px; } .mp-web-header--zt { grid-template-columns:1fr; } .mp-web-header--zt .mp-web-header__main { grid-template-columns:auto 1fr auto; } .mp-web-header__zt-menu,.mp-web-header__zt-content { min-height:auto; border-right:0; } }`;

  const exportSass = `// Header Web / Drupal - core/components/web/_header.scss
// CSS plano compatible con Sass para demos descargables.
${exportCss}`;

  function findPage(node) {
    return node?.closest?.('[data-component-doc="web-header"]') || document.querySelector('[data-component-doc="web-header"]');
  }

  function esc(value) {
    return String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }

  function stateFromPage(page) {
    return {
      variant: page.querySelector('[data-web-header-control="variant"]')?.value || 'public',
      cta: page.querySelector('[data-web-header-control="cta"]')?.value || 'Afíliate',
      search: page.querySelector('[data-web-header-control="search"]')?.checked !== false,
      dropdown: page.querySelector('[data-web-header-control="dropdown"]')?.checked || false,
      open: page.querySelector('[data-web-header-control="open"]')?.checked || false
    };
  }

  function brandMarkup() {
    return `<a class="mp-web-header__brand" href="#" aria-label="Compensar home">
  <span class="mp-web-header__logo" aria-hidden="true">C</span>
  <span class="mp-web-header__brand-text">
    <span class="mp-web-header__brand-name">Compensar</span>
    <span class="mp-web-header__brand-service">Salud y bienestar</span>
  </span>
</a>`;
  }

  function searchMarkup() {
    return `<div class="mp-web-header__search">
  <label class="visually-hidden" for="mp-web-header-search">Buscar en Compensar</label>
  <input class="mp-web-header__search-input" id="mp-web-header-search" type="search" placeholder="Buscar trámites, servicios o sedes">
  <i class="icon icon-magnifying-glass mp-web-header__search-icon" aria-hidden="true"></i>
</div>`;
  }

  function dropdownMarkup(hidden = true) {
    return `<div class="mp-web-header__dropdown" ${hidden ? 'hidden' : ''}>
  <div>
    <h3 class="mp-web-header__dropdown-title">Servicios de salud</h3>
    <ul class="mp-web-header__dropdown-list">
      <li><a class="mp-web-header__dropdown-link mp-web-header__dropdown-link--is-hover" href="#">Medicina prepagada</a></li>
      <li><a class="mp-web-header__dropdown-link" href="#">Plan complementario</a></li>
      <li><a class="mp-web-header__dropdown-link" href="#">Directorio médico</a></li>
    </ul>
  </div>
  <div>
    <h3 class="mp-web-header__dropdown-title">Accesos rápidos</h3>
    <ul class="mp-web-header__dropdown-list">
      <li><a class="mp-web-header__dropdown-link" href="#">Pedir cita</a></li>
      <li><a class="mp-web-header__dropdown-link" href="#">Pagos y certificados</a></li>
      <li><a class="mp-web-header__dropdown-link" href="#">Oficinas y sedes</a></li>
    </ul>
  </div>
</div>`;
  }

  function publicHeader(config = {}) {
    const showSearch = config.search !== false;
    const showDropdown = config.dropdown || config.variant === 'dropdown';
    const open = config.open || config.variant === 'mobile';
    const cta = esc(config.cta || 'Afíliate');
    return `<header class="mp-web-header mp-web-header--public${open ? ' mp-web-header--is-open' : ''}" aria-label="Header principal">
  <div class="mp-web-header__utility">
    <a class="mp-web-header__utility-link" href="#">Personas</a>
    <a class="mp-web-header__utility-link" href="#">Empresas</a>
    <a class="mp-web-header__utility-link" href="#">Ayuda</a>
  </div>
  <div class="mp-web-header__main">
    ${brandMarkup()}
    ${showSearch ? searchMarkup() : '<span aria-hidden="true"></span>'}
    <a class="mp-web-header__cta" href="#">${cta}</a>
    <button class="mp-web-header__mobile-toggle" type="button" aria-label="Abrir menú" aria-expanded="${open ? 'true' : 'false'}"><i class="icon icon-hamburger icon-24" aria-hidden="true"></i></button>
  </div>
  <nav class="mp-web-header__nav" aria-label="Navegación principal">
    <div class="mp-web-header__nav-item">
      <a class="mp-web-header__nav-link mp-web-header__nav-link--active${config.state === 'hover' ? ' mp-web-header__nav-link--is-hover' : ''}" href="#" aria-current="page">Salud <i class="icon icon-caret-down icon-16" aria-hidden="true"></i></a>
      ${dropdownMarkup(!showDropdown)}
    </div>
    <div class="mp-web-header__nav-item"><a class="mp-web-header__nav-link${config.state === 'focus' ? ' mp-web-header__nav-link--is-focus' : ''}" href="#">Trámites</a></div>
    <div class="mp-web-header__nav-item"><a class="mp-web-header__nav-link" href="#">Sedes</a></div>
    <div class="mp-web-header__nav-item"><a class="mp-web-header__nav-link" href="#">Noticias</a></div>
  </nav>
  <nav class="mp-web-header__drawer" aria-label="Menú responsive">
    ${showSearch ? searchMarkup().replace('mp-web-header-search', 'mp-web-header-search-mobile') : ''}
    <a class="mp-web-header__drawer-link" href="#">Salud <i class="icon icon-caret-right icon-16" aria-hidden="true"></i></a>
    <a class="mp-web-header__drawer-link" href="#">Trámites <i class="icon icon-caret-right icon-16" aria-hidden="true"></i></a>
    <a class="mp-web-header__drawer-link" href="#">Sedes <i class="icon icon-caret-right icon-16" aria-hidden="true"></i></a>
    <a class="mp-web-header__drawer-link" href="#">${cta}</a>
  </nav>
</header>`;
  }

  function ztHeader() {
    return `<section class="mp-web-header mp-web-header--zt" aria-label="Header zona transaccional">
  <div class="mp-web-header__main">
    <button class="mp-web-header__mobile-toggle" type="button" aria-label="Abrir navegación"><i class="icon icon-hamburger icon-24" aria-hidden="true"></i></button>
    ${brandMarkup()}
    ${searchMarkup()}
    <button class="mp-user-chip mp-user-chip--compact" type="button" aria-label="Abrir menú de usuario">
      <span class="mp-avatar mp-avatar--sm mp-avatar--brand"><span class="mp-avatar__initials">AS</span></span>
      <span class="mp-user-chip__body"><span class="mp-user-chip__name">Ana Soto</span></span>
      <i class="icon icon-caret-down mp-user-chip__chevron" aria-hidden="true"></i>
    </button>
  </div>
  <aside class="mp-web-header__zt-menu" aria-label="Módulos">
    <ul class="mp-web-header__module-list">
      <li><a class="mp-web-header__module-link mp-web-header__module-link--active" href="#"><i class="icon icon-house icon-16" aria-hidden="true"></i> Inicio</a></li>
      <li><a class="mp-web-header__module-link" href="#"><i class="icon icon-calendar icon-16" aria-hidden="true"></i> Citas médicas</a></li>
      <li><a class="mp-web-header__module-link" href="#"><i class="icon icon-article icon-16" aria-hidden="true"></i> Certificados</a></li>
      <li><a class="mp-web-header__module-link" href="#"><i class="icon icon-credit-card icon-16" aria-hidden="true"></i> Pagos</a></li>
    </ul>
  </aside>
  <div class="mp-web-header__zt-content">
    <h3 class="mp-h3">Resumen de servicios</h3>
    <p class="mp-body-m">Contenido transaccional asociado al módulo seleccionado.</p>
  </div>
</section>`;
  }

  function build(config = {}) {
    if (config.variant === 'zt') return ztHeader();
    return publicHeader(config);
  }

  function renderAnatomy(page, variant = 'public') {
    if (!page) return;
    page.querySelectorAll('[data-web-header-anatomy]').forEach((button) => {
      const active = button.dataset.webHeaderAnatomy === variant;
      button.setAttribute('aria-pressed', String(active));
    });
    const preview = page.querySelector('#web-header-anatomy-preview');
    if (preview) preview.innerHTML = build({
      variant,
      dropdown: variant === 'dropdown',
      open: variant === 'mobile',
      search: true,
      cta: variant === 'zt' ? 'Ir al inicio' : 'Afíliate'
    });
  }

  function renderPlayground(page) {
    if (!page) return;
    const state = stateFromPage(page);
    const preview = page.querySelector('#web-header-playground-preview');
    if (preview) preview.innerHTML = build(state);
    const code = page.querySelector('#web-header-playground-code');
    if (code) code.textContent = build(state);
    renderCode(page);
  }

  function renderVariants(page) {
    page.querySelectorAll('[data-web-header-variant-demo]').forEach((node) => {
      const variant = node.dataset.webHeaderVariantDemo;
      node.innerHTML = build({ variant, dropdown: variant === 'dropdown', open: variant === 'mobile', cta: variant === 'mobile' ? 'Afíliate' : 'Oficina virtual' });
    });
  }

  function renderStates(page) {
    page.querySelectorAll('[data-web-header-state-demo]').forEach((node) => {
      node.innerHTML = build({ variant: 'public', search: false, cta: 'Afíliate', state: node.dataset.webHeaderStateDemo });
    });
  }

  function activeCodeTab(page) {
    return page?.querySelector('[data-web-header-code-tab].active')?.dataset.webHeaderCodeTab || 'html';
  }

  function codeFor(tab, page) {
    if (tab === 'css') return exportCss;
    if (tab === 'sass') return exportSass;
    return build(stateFromPage(page));
  }

  function renderCode(page) {
    ['html', 'css', 'sass'].forEach((tab) => {
      const pre = page.querySelector(`#web-header-code-${tab}`);
      if (pre) pre.textContent = codeFor(tab, page);
    });
  }

  function switchCodeTab(page, tab = 'html') {
    if (!page) return;
    page.querySelectorAll('[data-web-header-code-tab]').forEach((button) => {
      const active = button.dataset.webHeaderCodeTab === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    page.querySelectorAll('#web-header-code-html, #web-header-code-css, #web-header-code-sass').forEach((pre) => {
      pre.classList.toggle('active', pre.id === `web-header-code-${tab}`);
    });
    renderCode(page);
  }

  function downloadFile(name, text, type) {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.webHeaderDocsDelegated === 'true') return;
    document.documentElement.dataset.webHeaderDocsDelegated = 'true';
    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-web-header-anatomy]');
      if (anatomy) return renderAnatomy(findPage(anatomy), anatomy.dataset.webHeaderAnatomy);
      const tab = event.target.closest('[data-web-header-code-tab]');
      if (tab) return switchCodeTab(findPage(tab), tab.dataset.webHeaderCodeTab);
      const copy = event.target.closest('[data-web-header-copy-code]');
      if (copy) return navigator.clipboard?.writeText(codeFor(activeCodeTab(findPage(copy)), findPage(copy)));
      const copyPlayground = event.target.closest('[data-web-header-copy-playground]');
      if (copyPlayground) return navigator.clipboard?.writeText(build(stateFromPage(findPage(copyPlayground))));
      const download = event.target.closest('[data-web-header-download]');
      if (download) {
        const page = findPage(download);
        const type = download.dataset.webHeaderDownload;
        if (type === 'html') downloadFile('mp-web-header.html', codeFor('html', page), 'text/html');
        if (type === 'css') downloadFile('mp-web-header.css', exportCss, 'text/css');
        if (type === 'sass') downloadFile('mp-web-header.scss', exportSass, 'text/x-scss');
      }
    });
    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-web-header-control]')) renderPlayground(findPage(event.target));
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-web-header-control]')) renderPlayground(findPage(event.target));
    });
  }

  function initWebHeaderDocs(root = document) {
    const page = root.querySelector('[data-component-doc="web-header"]');
    if (!page || page.dataset.webHeaderInitialized === 'true') return;
    bindDelegatedEvents();
    renderAnatomy(page, 'public');
    renderPlayground(page);
    renderVariants(page);
    renderStates(page);
    switchCodeTab(page, 'html');
    page.dataset.webHeaderInitialized = 'true';
  }

  return { initWebHeaderDocs, bindDelegatedEvents };
})();

window.webHeaderDocs = webHeaderDocs;

function bootWebHeaderDocs() {
  webHeaderDocs.bindDelegatedEvents();
  webHeaderDocs.initWebHeaderDocs(document);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootWebHeaderDocs);
} else {
  bootWebHeaderDocs();
}
