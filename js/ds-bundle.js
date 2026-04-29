/* ============================================================
   DS-BUNDLE.JS — Design System Compensar · Build único
   Combina tokens.js + app.js + loader.js sin ES modules
   Funciona con file:// y http:// sin necesidad de servidor
   ============================================================ */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     TOKENS DATA
     ══════════════════════════════════════════════════════════ */
  var TOKEN_GROUPS = {
    'grid-neutral': [
      ['base/neutral/100 (Negro)', '--base-neutral-100', '#111111'],
      ['base/neutral/90',  '--base-neutral-90',  '#292929'],
      ['base/neutral/80',  '--base-neutral-80',  '#333333'],
      ['base/neutral/70',  '--base-neutral-70',  '#666666'],
      ['base/neutral/60',  '--base-neutral-60',  '#7f7f7f'],
      ['base/neutral/50',  '--base-neutral-50',  '#a4a4a4'],
      ['base/neutral/40',  '--base-neutral-40',  '#b8b8b8'],
      ['base/neutral/30',  '--base-neutral-30',  '#cccccc'],
      ['base/neutral/20',  '--base-neutral-20',  '#e0e0e0'],
      ['base/neutral/10',  '--base-neutral-10',  '#f5f5f5'],
    ],
    'grid-brand': [
      ['base/brand/80',            '--base-brand-80',      '#ff6600'],
      ['base/primary/30',          '--base-primary-30',    '#e65c00'],
      ['base/primary/20',          '--base-primary-20',    '#cc5200'],
      ['Main Color/Naranja Claro', '--main-naranja-claro', '#ff7e06'],
      ['Main Color/Naranja Dark',  '--main-naranja-dark',  '#ff6600'],
      ['Main Color/Amarillo',      '--main-amarillo',      '#ff980d'],
      ['Main Color/Dark',          '--main-dark',          '#ff9d5c'],
      ['Colors/Naranja/600*',      '--colors-naranja-600', '#ff6600'],
    ],
    'grid-green': [
      ['base/green-1/100', '--base-green-100', '#0d3d1f'],
      ['base/green-1/90',  '--base-green-90',  '#166936'],
      ['base/green-1/80',  '--base-green-80',  '#0b853d'],
      ['base/green-1/70',  '--base-green-70',  '#22a152'],
      ['base/green-1/60',  '--base-green-60',  '#44bd75'],
      ['base/green-1/50',  '--base-green-50',  '#9fe0b8'],
      ['base/green-1/40',  '--base-green-40',  '#e6f7e8'],
      ['base/green-1/30',  '--base-green-30',  '#f7faf8'],
    ],
    'grid-yellow': [
      ['base/yellow/100', '--base-yellow-100', '#634a1a'],
      ['base/yellow/90',  '--base-yellow-90',  '#967229'],
      ['base/yellow/80',  '--base-yellow-80',  '#bf9034'],
      ['base/yellow/70',  '--base-yellow-70',  '#ffc154'],
      ['base/yellow/60',  '--base-yellow-60',  '#fcce72'],
      ['base/yellow/50',  '--base-yellow-50',  '#fce1ac'],
      ['base/yellow/40',  '--base-yellow-40',  '#fff2d9'],
      ['base/yellow/30',  '--base-yellow-30',  '#fff9ef'],
    ],
    'grid-blue': [
      ['base/blue/100', '--base-blue-100', '#2d4a67'],
      ['base/blue/90',  '--base-blue-90',  '#18428f'],
      ['base/blue/80',  '--base-blue-80',  '#1f53b5'],
      ['base/blue/70',  '--base-blue-70',  '#296ff0'],
      ['base/blue/60',  '--base-blue-60',  '#5c91f2'],
      ['base/blue/50',  '--base-blue-50',  '#9fbef5'],
      ['base/blue/40',  '--base-blue-40',  '#d4e2fa'],
      ['base/blue/30',  '--base-blue-30',  '#e6f1fb'],
    ],
    'grid-red': [
      ['base/red/100', '--base-red-100', '#521a14'],
      ['base/red/90',  '--base-red-90',  '#7d291f'],
      ['base/red/80',  '--base-red-80',  '#9e3328'],
      ['base/red/70',  '--base-red-70',  '#d14434'],
      ['base/red/60',  '--base-red-60',  '#db7165'],
      ['base/red/50',  '--base-red-50',  '#ebada7'],
      ['base/red/40',  '--base-red-40',  '#f2d8d5'],
      ['base/red/30',  '--base-red-30',  '#f7eeed'],
    ],
    'grid-accent': [
      ['product/accent/100', '--product-accent-100', '#03838a'],
      ['product/accent/90',  '--product-accent-90',  '#24939d'],
      ['product/accent/80',  '--product-accent-80',  '#47a4af'],
      ['product/accent/70',  '--product-accent-70',  '#6bb4c0'],
      ['product/accent/60',  '--product-accent-60',  '#8fc5d0'],
      ['product/accent/50',  '--product-accent-50',  '#b3d7e0'],
      ['product/accent/40',  '--product-accent-40',  '#e1f7fe'],
      ['product/accent/30',  '--product-accent-30',  '#f2fcff'],
    ],
    'grid-turquesa': [
      ['Colors/Turquesa/50',   '--colors-turquesa-50',   '#ebfffe'],
      ['Colors/Turquesa/100',  '--colors-turquesa-100',  '#d0fffd'],
      ['Colors/Turquesa/200',  '--colors-turquesa-200',  '#a0fffc'],
      ['Colors/Turquesa/300',  '--colors-turquesa-300',  '#71fffa'],
      ['Colors/Turquesa/400',  '--colors-turquesa-400',  '#41fff8'],
      ['Colors/Turquesa/500',  '--colors-turquesa-500',  '#12fff7'],
      ['Colors/Turquesa/600*', '--colors-turquesa-600',  '#00e1d9'],
      ['Colors/Turquesa/700',  '--colors-turquesa-700',  '#00c0b9'],
      ['Colors/Turquesa/800',  '--colors-turquesa-800',  '#009f99'],
      ['Colors/Turquesa/900',  '--colors-turquesa-900',  '#007d79'],
      ['Colors/Turquesa/1000', '--colors-turquesa-1000', '#005c59'],
    ],
    'grid-violeta': [
      ['Colors/Violeta/50',   '--colors-violeta-50',   '#efecf9'],
      ['Colors/Violeta/100',  '--colors-violeta-100',  '#e0d9f3'],
      ['Colors/Violeta/200',  '--colors-violeta-200',  '#c1b3e7'],
      ['Colors/Violeta/300',  '--colors-violeta-300',  '#a28dda'],
      ['Colors/Violeta/400*', '--colors-violeta-400',  '#8367ce'],
      ['Colors/Violeta/500',  '--colors-violeta-500',  '#6d4cc5'],
      ['Colors/Violeta/600',  '--colors-violeta-600',  '#5b3ab4'],
      ['Colors/Violeta/700',  '--colors-violeta-700',  '#4e3199'],
      ['Colors/Violeta/800',  '--colors-violeta-800',  '#40297e'],
      ['Colors/Violeta/900',  '--colors-violeta-900',  '#322064'],
      ['Colors/Violeta/1000', '--colors-violeta-1000', '#251749'],
    ],
    'grid-gris': [
      ['Colors/Gris/50',   '--colors-gris-50',   '#f8f7f7'],
      ['Colors/Gris/100',  '--colors-gris-100',  '#eceaea'],
      ['Colors/Gris/200',  '--colors-gris-200',  '#d9d5d5'],
      ['Colors/Gris/300',  '--colors-gris-300',  '#c6c1c0'],
      ['Colors/Gris/400*', '--colors-gris-400',  '#b3acab'],
      ['Colors/Gris/500',  '--colors-gris-500',  '#a09796'],
      ['Colors/Gris/600',  '--colors-gris-600',  '#8c8280'],
      ['Colors/Gris/700',  '--colors-gris-700',  '#786e6c'],
      ['Colors/Gris/800',  '--colors-gris-800',  '#635a59'],
      ['Colors/Gris/900',  '--colors-gris-900',  '#4d4746'],
      ['Colors/Gris/1000', '--colors-gris-1000', '#383333'],
    ],
  };

  var TEXT_TOKENS = [
    ['use/text/primary',  '--use-text-primary', '#111111', 'Texto principal del cuerpo'],
    ['use/text/heading',  '--use-text-heading', '#111111', 'Encabezados H1'],
    ['use/text/h2',       '--use-text-h2',      '#383b3b', 'Encabezado H2'],
    ['use/text/h3 h4 h5', '--use-text-h3-h5',  '#515151', 'Encabezados H3–H5'],
    ['use/text/label',    '--use-text-label',   '#111111', 'Etiquetas de formulario'],
    ['use/text/link',     '--use-text-link',    '#ff6600', 'Color de enlaces'],
    ['use/text/eyebrown', '--use-text-eyebrow', '#9e9e9e', 'Texto eyebrow / secundario'],
  ];

  var TABLE_TOKENS = [
    ['use/tables/Filter',  '--use-tables-filter',  '#e3e7ed', 'Fondo de fila filtro'],
    ['use/tables/Stripes', '--use-tables-stripes', '#f5f5f7', 'Fondo fila alterna'],
    ['use/tables/Head',    '--use-tables-head',    '#a5d7d5', 'Encabezado de tabla'],
  ];

  var SPACING = [
    ['--space-1',  '2px',   2],
    ['--space-2',  '4px',   4],
    ['--space-3',  '8px',   8],
    ['--space-4',  '16px',  16],
    ['--space-5',  '24px',  24],
    ['--space-6',  '32px',  32],
    ['--space-7',  '48px',  48],
    ['--space-8',  '64px',  64],
    ['--space-9',  '96px',  96],
    ['--space-10', '128px', 128],
    ['--space-11', '192px', 192],
    ['--space-12', '256px', 256],
  ];

  /* ══════════════════════════════════════════════════════════
     APP — THEME, TABS, COPY, TOAST
     ══════════════════════════════════════════════════════════ */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-switcher button').forEach(function(b) { b.classList.remove('active'); });
    var map = { light: 'btn-light', dark: 'btn-dark', 'high-contrast': 'btn-hc' };
    var btn = document.getElementById(map[theme]);
    if (btn) btn.classList.add('active');
    try { localStorage.setItem('ds-theme', theme); } catch(e) {}
  }

  function switchTab(btn, targetId) {
    var block = btn.closest('.code-block');
    block.querySelectorAll('.code-tab').forEach(function(t) { t.classList.remove('active'); });
    block.querySelectorAll('.code-content pre').forEach(function(p) { p.classList.remove('active'); });
    btn.classList.add('active');
    var target = block.querySelector('#' + targetId);
    if (target) target.classList.add('active');
  }

  function copyCode(btn) {
    var pre = btn.closest('.code-content').querySelector('pre.active');
    if (!pre) return;
    navigator.clipboard.writeText(pre.innerText || pre.textContent).then(function() {
      btn.classList.add('copied');
      btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copiado';
      setTimeout(function() {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar';
      }, 2000);
    });
  }

  function copyToClipboard(text, msg) {
    msg = msg || 'Copiado';
    navigator.clipboard.writeText(text).then(function() { showToast(msg + ': ' + text); });
  }

  function showToast(msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function() { t.classList.remove('show'); }, 2400);
  }

  /* ── Render: Color grids ─────────────────────────────── */
  function renderColorGrids() {
    for (var gridId in TOKEN_GROUPS) {
      if (!TOKEN_GROUPS.hasOwnProperty(gridId)) continue;
      var el = document.getElementById(gridId);
      if (!el) continue;
      var tokens = TOKEN_GROUPS[gridId];
      el.innerHTML = tokens.map(function(t) {
        return '<div class="color-card" onclick="copyToClipboard(\'' + t[1] + '\', \'CSS var copiado\')" title="Clic para copiar ' + t[1] + '">' +
          '<div class="color-swatch" style="background:' + t[2] + '"></div>' +
          '<div class="color-info">' +
            '<span class="color-name">' + t[0] + '</span>' +
            '<span class="color-var">' + t[1] + '</span>' +
            '<span class="color-hex">' + t[2] + '</span>' +
          '</div>' +
        '</div>';
      }).join('');
    }
  }

  /* ── Render: Spacing ─────────────────────────────────── */
  function renderSpacing() {
    var el = document.getElementById('spacing-list');
    if (!el) return;
    var maxPx = 256;
    el.innerHTML = SPACING.map(function(s) {
      return '<div class="spacing-row">' +
        '<span class="spacing-val">' + s[1] + '</span>' +
        '<div class="spacing-bar" style="width:' + Math.min(s[2] / maxPx * 100, 100) + '%"></div>' +
        '<span class="spacing-token">' + s[0] + '</span>' +
        '<button class="copy-token-btn" onclick="copyToClipboard(\'' + s[0] + '\', \'Token copiado\')">📋 Copiar var</button>' +
      '</div>';
    }).join('');
  }

  /* ── Render: Token tables ────────────────────────────── */
  function renderTokenTable(tableId, tokens) {
    var el = document.getElementById(tableId);
    if (!el) return;
    el.innerHTML = '<thead><tr><th>Token (Figma)</th><th>CSS Variable</th><th>Valor</th><th>Descripción</th><th></th></tr></thead>' +
      '<tbody>' + tokens.map(function(t) {
        return '<tr>' +
          '<td><span style="font-family:var(--font-code);font-size:12px">' + t[0] + '</span></td>' +
          '<td><div class="token-name-cell">' +
            '<span class="token-swatch-inline" style="background:' + t[2] + '"></span>' +
            '<code style="font-family:var(--font-code);font-size:12px;color:var(--ui-accent)">' + t[1] + '</code>' +
          '</div></td>' +
          '<td><code style="font-family:var(--font-code);font-size:12px">' + t[2] + '</code></td>' +
          '<td style="color:var(--ui-text-muted);font-size:12px">' + (t[3] || '') + '</td>' +
          '<td><button class="copy-token-btn" onclick="copyToClipboard(\'' + t[1] + '\', \'Copiado\')">📋</button></td>' +
        '</tr>';
      }).join('') + '</tbody>';
  }

  /* ── Accordion sidebar ───────────────────────────────── */
  var ACCORDION_MAP = {
    'colores-base':        'colores',
    'colores-producto':    'colores',
    'colores-uso':         'colores',
    'colores-utilidades':  'colores',
    'iconos-intro':        'iconos',
    'iconos-conectar':     'iconos',
    'iconos-libreria':     'iconos',
  };

  function initAccordions() {
    document.querySelectorAll('.sidebar-accordion').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var group  = btn.dataset.group;
        var subnav = document.getElementById('subnav-' + group);
        var isOpen = btn.classList.contains('open');
        document.querySelectorAll('.sidebar-accordion.open').forEach(function(other) {
          if (other !== btn) {
            other.classList.remove('open');
            var otherNav = document.getElementById('subnav-' + other.dataset.group);
            if (otherNav) otherNav.classList.remove('open');
          }
        });
        btn.classList.toggle('open', !isOpen);
        if (subnav) subnav.classList.toggle('open', !isOpen);
      });
    });
  }

  function openAccordionFor(sectionId) {
    var group = ACCORDION_MAP[sectionId];
    if (!group) return;
    var btn    = document.querySelector('.sidebar-accordion[data-group="' + group + '"]');
    var subnav = document.getElementById('subnav-' + group);
    if (btn)    btn.classList.add('open');
    if (subnav) subnav.classList.add('open');
  }

  /* ── Search ──────────────────────────────────────────── */
  function initSearch() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    input.addEventListener('input', function() {
      var q = input.value.toLowerCase().trim();
      document.querySelectorAll('.sidebar-link[href^="#"]').forEach(function(link) {
        if (!q) { link.style.display = ''; return; }
        link.style.display = link.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }

  /* ── onSectionReady ──────────────────────────────────── */
  function onSectionReady(sectionId) {
    openAccordionFor(sectionId);
    // Re-exponer globals para onclick inline en fragmentos
    window.showToast       = showToast;
    window.copyToClipboard = copyToClipboard;
    window.switchTab       = switchTab;
    window.copyCode        = copyCode;
    window.setTheme        = setTheme;

    switch (sectionId) {
      case 'espaciado':    renderSpacing();    break;
      case 'colores-base':
      case 'colores-producto':
      case 'colores-uso':
      case 'colores-utilidades': renderColorGrids(); break;
      case 'tokens-texto':  renderTokenTable('table-text-tokens',  TEXT_TOKENS);  break;
      case 'tokens-tablas': renderTokenTable('table-table-tokens', TABLE_TOKENS); break;
    }
  }

  /* ══════════════════════════════════════════════════════════
     ROUTER / LOADER
     ══════════════════════════════════════════════════════════ */

  /* Detectar plataforma — app.html inyecta window.DS_PLATFORM='app' */
  var PLATFORM = (window.DS_PLATFORM === 'app') ? 'app' : 'drupal';

  /* Rutas base (Drupal / ZT) */
  var ROUTES = {
    'introduccion':       'fragments/intro.html',
    'principios':         'fragments/principles.html',
    'colores-base':       'fragments/fundamentos/colors.html',
    'colores-producto':   'fragments/fundamentos/colors.html',
    'colores-uso':        'fragments/fundamentos/colors.html',
    'colores-utilidades': 'fragments/fundamentos/colors.html',
    'tipografia':         'fragments/fundamentos/typography.html',
    'espaciado':          'fragments/fundamentos/spacing.html',
    'border-radius':      'fragments/fundamentos/border-radius.html',
    'layout':             'fragments/fundamentos/layout.html',
    'sombras':            'fragments/fundamentos/shadows.html',
    'iconos-intro':       'fragments/components/icons-intro.html',
    'iconos-conectar':    'fragments/components/icons-connect.html',
    'iconos-libreria':    'fragments/components/icons-library.html',
    'botones':            'fragments/components/buttons.html',
    'inputs':             'fragments/components/inputs.html',
    'badges':             'fragments/components/badges.html',
    'tokens-texto':       'fragments/tokens/tokens-text.html',
    'tokens-tablas':      'fragments/tokens/tokens-tables.html',
  };

  /* Rutas específicas de App (.NET MAUI) — sobreescriben ROUTES cuando PLATFORM='app' */
  var APP_ROUTES = {
    'introduccion':       'fragments/app/intro.html',
    'colores-base':       'fragments/app/fundamentos/colors.html',
    'colores-producto':   'fragments/app/fundamentos/colors.html',
    'colores-uso':        'fragments/app/fundamentos/colors.html',
    'colores-utilidades': 'fragments/app/fundamentos/colors.html',
    'tipografia':         'fragments/app/fundamentos/typography.html',
    'espaciado':          'fragments/app/fundamentos/spacing.html',
    'layout':             'fragments/app/fundamentos/layout.html',
  };

  function resolveRoute(sectionId) {
    if (PLATFORM === 'app' && APP_ROUTES[sectionId]) return APP_ROUTES[sectionId];
    return ROUTES[sectionId];
  }

  var SCROLL_TARGETS = {
    'colores-base':       'colors-base',
    'colores-producto':   'colors-product',
    'colores-uso':        'colors-semantic',
    'colores-utilidades': 'colors-utilities',
  };

  var CACHE = {};
  var currentSection = null;
  var currentPath    = null;

  function fetchFragment(path, cb) {
    if (CACHE[path]) { cb(null, CACHE[path]); return; }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        CACHE[path] = xhr.responseText;
        cb(null, xhr.responseText);
      } else {
        cb(new Error('HTTP ' + xhr.status + ' — ' + path));
      }
    };
    xhr.onerror = function() { cb(new Error('Network error — ' + path)); };
    xhr.send();
  }

  function scrollToTarget(sectionId) {
    var targetId = SCROLL_TARGETS[sectionId];
    if (!targetId) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    requestAnimationFrame(function() {
      var el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function updateSidebarActive(sectionId) {
    document.querySelectorAll('.sidebar-link').forEach(function(a) {
      var href = a.getAttribute('href');
      a.classList.toggle('active', href === '#' + sectionId);
    });
  }

  /*
   * navigateTo(sectionId, pushHistory)
   *   pushHistory = true  → navegación por clic en sidebar (agrega al historial)
   *   pushHistory = false → navegación por back/forward (el navegador ya actualizó
   *                         el historial, NO volvemos a hacer pushState)
   */
  function navigateTo(sectionId, pushHistory) {
    if (pushHistory === undefined) pushHistory = true;
    if (sectionId === currentSection) return;

    var path = resolveRoute(sectionId);
    if (!path) { console.warn('[router] Ruta no encontrada: ' + sectionId); return; }

    // ── Mismo fragmento, solo scroll ───────────────────────
    if (path === currentPath) {
      if (pushHistory) history.pushState({ sectionId: sectionId }, '', '#' + sectionId);
      updateSidebarActive(sectionId);
      currentSection = sectionId;
      scrollToTarget(sectionId);
      onSectionReady(sectionId);
      return;
    }

    // ── Carga de fragmento nuevo ────────────────────────────
    var content = document.getElementById('content');
    content.innerHTML =
      '<div class="fragment-loading">' +
        '<div class="fragment-loading-spinner"></div>' +
        '<span class="fragment-loading-text">Cargando sección…</span>' +
      '</div>';

    fetchFragment(path, function(err, html) {
      if (err) {
        content.innerHTML =
          '<div class="fragment-error">' +
            '<span class="material-symbols-rounded fragment-error-icon">error_outline</span>' +
            '<strong>No se pudo cargar la sección</strong>' +
            '<code>' + path + '</code>' +
            '<small>' + err.message + '</small>' +
          '</div>';
        console.error('[router]', err);
        return;
      }

      content.innerHTML = html;

      // Mover <link rel="stylesheet|preload"> al <head> para que carguen correctamente
      content.querySelectorAll('link[rel="stylesheet"], link[rel="preload"]').forEach(function(old) {
        var href = old.getAttribute('href');
        if (!href) return;
        // Evitar duplicados
        if (document.head.querySelector('link[href="' + href + '"]')) { old.remove(); return; }
        var l = document.createElement('link');
        Array.from(old.attributes).forEach(function(a) { l.setAttribute(a.name, a.value); });
        document.head.appendChild(l);
        old.remove();
      });

      // Re-ejecutar scripts inline del fragmento
      content.querySelectorAll('script').forEach(function(old) {
        var s = document.createElement('script');
        if (old.src) { s.src = old.src; }
        else { s.textContent = old.textContent; }
        document.head.appendChild(s);
        old.remove();
      });

      // Solo tocar el historial si vino de un clic del usuario
      if (pushHistory) {
        history.pushState({ sectionId: sectionId }, '', '#' + sectionId);
      }

      updateSidebarActive(sectionId);
      currentSection = sectionId;
      currentPath    = path;

      if (SCROLL_TARGETS[sectionId]) scrollToTarget(sectionId);
      else window.scrollTo({ top: 0, behavior: 'instant' });

      onSectionReady(sectionId);
    });
  }

  function initRouter() {
    // ── Clics en sidebar → push al historial ───────────────
    document.querySelectorAll('.sidebar-link[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo(link.getAttribute('href').slice(1), true);
      });
    });

    // ── Back / Forward del navegador → NO push al historial ─
    window.addEventListener('popstate', function(e) {
      var id = (e.state && e.state.sectionId) || location.hash.slice(1) || 'introduccion';
      navigateTo(id, false); // false = el navegador ya movió el historial
    });
    // ── Carga inicial: replaceState para no duplicar la entrada ─
    var initial = location.hash.slice(1) || 'introduccion';
    // Registrar el estado inicial en el historial actual (sin añadir entrada nueva)
    history.replaceState({ sectionId: initial }, '', '#' + initial);
    navigateTo(initial, false); // false = ya hicimos replaceState arriba
  }

  /* ══════════════════════════════════════════════════════════
     INIT
     ══════════════════════════════════════════════════════════ */
  function init() {
    var saved;
    try { saved = localStorage.getItem('ds-theme'); } catch(e) {}
    if (saved) setTheme(saved);
    initAccordions();
    initSearch();
    var hash = location.hash.slice(1);
    if (hash) openAccordionFor(hash);
    window.setTheme        = setTheme;
    window.switchTab       = switchTab;
    window.copyCode        = copyCode;
    window.copyToClipboard = copyToClipboard;
    window.showToast       = showToast;
  }

  /* ── Auto-arranque ───────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function() {
    init();
    initRouter();
  });

})();
