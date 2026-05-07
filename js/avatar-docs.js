const avatarDocs = (() => {
  const photoUrl = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=160&q=80';

  const exportCss = `/* Avatar / User chip - Compensar Design System
   Fuente: core/components/web/_avatar.scss */

.mp-avatar { --mp-avatar-size:40px; width:var(--mp-avatar-size); height:var(--mp-avatar-size); min-width:var(--mp-avatar-size); display:inline-flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid var(--use-border-subtle,#e0e0e0); border-radius:50%; background:var(--use-surface-theme-gray-5,#f8f7f7); color:var(--use-text-primary,#111); font:700 14px/1 Roboto,Arial,sans-serif; letter-spacing:0; text-transform:uppercase; vertical-align:middle; }
.mp-avatar__image { width:100%; height:100%; display:block; object-fit:cover; }
.mp-avatar__initials, .mp-avatar__icon { display:inline-flex; align-items:center; justify-content:center; width:100%; height:100%; }
.mp-avatar--sm { --mp-avatar-size:32px; font-size:14px; }
.mp-avatar--md { --mp-avatar-size:40px; }
.mp-avatar--lg { --mp-avatar-size:56px; font-size:18px; }
.mp-avatar--xl { --mp-avatar-size:72px; font-size:22px; }
.mp-avatar--brand { background:var(--use-primary-default,#ff6600); border-color:var(--use-primary-default,#ff6600); color:var(--use-text-on-dark-primary,#fff); }
.mp-avatar--teal { background:var(--product-accent-100,#03838a); border-color:var(--product-accent-100,#03838a); color:#fff; }
.mp-avatar--violet { background:var(--product-violet-50,#6d4cc5); border-color:var(--product-violet-50,#6d4cc5); color:#fff; }
.mp-user-chip { display:inline-flex; align-items:center; gap:8px; max-width:100%; min-height:48px; padding:4px 12px 4px 4px; border:1px solid var(--use-border-subtle,#e0e0e0); border-radius:999px; background:var(--use-surface-white,#fff); color:var(--use-text-primary,#111); font-family:Roboto,Arial,sans-serif; text-decoration:none; }
.mp-user-chip__body { min-width:0; display:grid; gap:2px; }
.mp-user-chip__name, .mp-user-chip__meta { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; letter-spacing:0; }
.mp-user-chip__name { font-size:14px; font-weight:700; line-height:1.25; }
.mp-user-chip__meta { font-size:14px; font-weight:400; line-height:1.25; color:var(--use-text-secondary,#333); }
.mp-user-chip__chevron { flex:0 0 auto; color:var(--use-text-secondary,#333); font-size:16px; }
button.mp-user-chip, a.mp-user-chip { cursor:pointer; transition:background-color .16s ease,border-color .16s ease,box-shadow .16s ease; }
button.mp-user-chip:hover, a.mp-user-chip:hover, .mp-user-chip--is-hover { background:var(--use-surface-theme-gray-5,#f8f7f7); border-color:var(--use-border-hover,#e63f0c); }
button.mp-user-chip:focus-visible, a.mp-user-chip:focus-visible, .mp-user-chip--is-focus { outline:none; border-color:var(--use-focus-outline,#ff6600); box-shadow:0 0 0 3px color-mix(in srgb,var(--use-focus-outline,#ff6600) 24%,transparent); }
.mp-user-chip--compact { min-height:40px; padding:3px 8px 3px 3px; }
.mp-user-chip--compact .mp-avatar { --mp-avatar-size:32px; }
.mp-user-chip--compact .mp-user-chip__meta { display:none; }
.mp-avatar-group { display:inline-flex; align-items:center; padding-left:8px; }
.mp-avatar-group .mp-avatar { margin-left:-8px; box-shadow:0 0 0 2px var(--use-surface-white,#fff); }`;

  const exportSass = `// Avatar / User chip - core/components/web/_avatar.scss
// CSS plano compatible con Sass para demos descargables.
${exportCss}`;

  function findPage(node) {
    return node?.closest?.('[data-component-doc="avatar"]') || document.querySelector('[data-component-doc="avatar"]');
  }

  function escapeHtml(value) {
    return String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }

  function avatarMarkup(config = {}) {
    const size = config.size || 'md';
    const content = config.content || 'photo';
    const tone = content === 'initials' ? ' mp-avatar--teal' : '';
    const sizeClass = size !== 'md' ? ` mp-avatar--${size}` : '';
    if (content === 'photo') {
      return `<span class="mp-avatar${sizeClass}"><img class="mp-avatar__image" src="${photoUrl}" alt=""></span>`;
    }
    if (content === 'icon') {
      return `<span class="mp-avatar${sizeClass}"><i class="icon icon-user mp-avatar__icon" aria-hidden="true"></i></span>`;
    }
    return `<span class="mp-avatar${sizeClass}${tone}"><span class="mp-avatar__initials">AR</span></span>`;
  }

  function userChipMarkup(config = {}) {
    const state = config.state || 'default';
    const stateClass = state === 'hover' ? ' mp-user-chip--is-hover' : state === 'focus' ? ' mp-user-chip--is-focus' : '';
    const name = escapeHtml(config.name || 'Dra. Ana Ruiz');
    const meta = escapeHtml(config.meta || 'Medicina general');
    return `<button class="mp-user-chip${stateClass}" type="button" aria-label="Abrir menú de ${name}">
  ${avatarMarkup(config)}
  <span class="mp-user-chip__body">
    <span class="mp-user-chip__name">${name}</span>
    <span class="mp-user-chip__meta">${meta}</span>
  </span>
  <i class="icon icon-caret-down mp-user-chip__chevron" aria-hidden="true"></i>
</button>`;
  }

  function groupMarkup() {
    return `<div class="mp-avatar-group" aria-label="3 usuarios">
  <span class="mp-avatar"><img class="mp-avatar__image" src="${photoUrl}" alt=""></span>
  <span class="mp-avatar mp-avatar--violet"><span class="mp-avatar__initials">MR</span></span>
  <span class="mp-avatar mp-avatar--brand"><span class="mp-avatar__initials">+2</span></span>
</div>`;
  }

  function stateFromPage(page) {
    return {
      kind: page.querySelector('[data-avatar-control="kind"]')?.value || 'chip',
      content: page.querySelector('[data-avatar-control="content"]')?.value || 'photo',
      size: page.querySelector('[data-avatar-control="size"]')?.value || 'md',
      state: page.querySelector('[data-avatar-control="state"]')?.value || 'default',
      name: page.querySelector('[data-avatar-control="name"]')?.value || 'Dra. Ana Ruiz',
      meta: page.querySelector('[data-avatar-control="meta"]')?.value || 'Medicina general'
    };
  }

  function build(config = {}) {
    if (config.kind === 'avatar') return avatarMarkup(config);
    if (config.kind === 'group') return groupMarkup();
    return userChipMarkup(config);
  }

  function renderPlayground(page) {
    const preview = page.querySelector('#avatar-playground-preview');
    if (preview) preview.innerHTML = build(stateFromPage(page));
    renderCode(page);
  }

  function renderAnatomy(page, kind = 'chip') {
    page.querySelectorAll('[data-avatar-anatomy]').forEach((button) => {
      const active = button.dataset.avatarAnatomy === kind;
      button.setAttribute('aria-pressed', String(active));
    });
    const preview = page.querySelector('#avatar-anatomy-preview');
    if (preview) preview.innerHTML = build({ kind, content: kind === 'group' ? 'initials' : 'photo' });
  }

  function renderStates(page) {
    page.querySelectorAll('[data-avatar-state-demo]').forEach((node) => {
      node.innerHTML = userChipMarkup({ state: node.dataset.avatarStateDemo, content: 'initials', name: 'Ana Ruiz', meta: 'Afiliada' });
    });
  }

  function activeCodeTab(page) {
    return page.querySelector('[data-avatar-code-tab].active')?.dataset.avatarCodeTab || 'html';
  }

  function codeFor(tab, page) {
    if (tab === 'css') return exportCss;
    if (tab === 'sass') return exportSass;
    return build(stateFromPage(page));
  }

  function renderCode(page) {
    ['html', 'css', 'sass'].forEach((tab) => {
      const pre = page.querySelector(`#avatar-code-${tab}`);
      if (pre) pre.textContent = codeFor(tab, page);
    });
  }

  function switchCodeTab(page, tab = 'html') {
    page.querySelectorAll('[data-avatar-code-tab]').forEach((button) => {
      const active = button.dataset.avatarCodeTab === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    page.querySelectorAll('#avatar-code-html, #avatar-code-css, #avatar-code-sass').forEach((pre) => {
      pre.classList.toggle('active', pre.id === `avatar-code-${tab}`);
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
    if (document.documentElement.dataset.avatarDocsDelegated === 'true') return;
    document.documentElement.dataset.avatarDocsDelegated = 'true';
    document.addEventListener('click', (event) => {
      const anatomy = event.target.closest('[data-avatar-anatomy]');
      if (anatomy) return renderAnatomy(findPage(anatomy), anatomy.dataset.avatarAnatomy);
      const tab = event.target.closest('[data-avatar-code-tab]');
      if (tab) return switchCodeTab(findPage(tab), tab.dataset.avatarCodeTab);
      const copy = event.target.closest('[data-avatar-copy-code]');
      if (copy) navigator.clipboard?.writeText(codeFor(activeCodeTab(findPage(copy)), findPage(copy)));
      const download = event.target.closest('[data-avatar-download]');
      if (download) {
        const page = findPage(download);
        const type = download.dataset.avatarDownload;
        if (type === 'html') downloadFile('mp-avatar.html', codeFor('html', page), 'text/html');
        if (type === 'css') downloadFile('mp-avatar.css', exportCss, 'text/css');
        if (type === 'sass') downloadFile('mp-avatar.scss', exportSass, 'text/x-scss');
      }
    });
    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-avatar-control]')) renderPlayground(findPage(event.target));
    });
    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-avatar-control]')) renderPlayground(findPage(event.target));
    });
  }

  function initAvatarDocs(root = document) {
    const page = root.querySelector('[data-component-doc="avatar"]');
    if (!page || page.dataset.avatarInitialized === 'true') return;
    bindDelegatedEvents();
    renderAnatomy(page, 'chip');
    renderPlayground(page);
    renderStates(page);
    switchCodeTab(page, 'html');
    page.dataset.avatarInitialized = 'true';
  }

  return { initAvatarDocs, bindDelegatedEvents };
})();

window.avatarDocs = avatarDocs;
