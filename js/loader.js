/* ============================================================
   LOADER.JS — Router SPA ligero para el Design System
   ============================================================ */

import { onSectionReady } from './app.js';

// ── Mapa de rutas: id-sección → ruta del fragmento ──────────
const ROUTES = {
  'introduccion':     'docs/intro.html',
  'principios':       'docs/foundations/principles.html',

  // Colores: todas las sub-secciones apuntan al mismo fragmento unificado
  'colores-base':         'docs/foundations/colors.html',
  'colores-producto':     'docs/foundations/colors.html',
  'colores-uso':          'docs/foundations/colors.html',
  'colores-utilidades':   'docs/foundations/colors.html',
  'fundamentos/colores':  'docs/foundations/colors.html',

  'tipografia':     'docs/app/fundamentos/typography.html',
  'espaciado':      'docs/app/fundamentos/spacing.html',
  'border-radius':  'docs/app/fundamentos/border-radius.html',
  'layout':         'docs/app/fundamentos/layout.html',
  'sombras':        'docs/app/fundamentos/shadows.html',

  'iconos-intro':    'docs/web/components/icons-intro.html',
  'iconos-conectar': 'docs/web/components/icons-connect.html',
  'iconos-libreria': 'docs/web/components/icons-library.html',

  'botones':       'docs/web/components/buttons.html',
  'inputs':        'docs/web/components/inputs.html',
  'badges':        'docs/web/components/badges.html',

  'tokens-texto':  'docs/tokens/tokens-text.html',
  'tokens-tablas': 'docs/tokens/tokens-tables.html',
};

// ── Targets de scroll dentro de docs compartidos ────────
// Cuando varias rutas comparten el mismo fragmento, scroll al
// elemento con ese id después de cargar (o de forma inmediata
// si el fragmento ya estaba cargado).
const SCROLL_TARGETS = {
  'colores-base':       'colors-base',
  'colores-producto':   'colors-product',
  'colores-uso':        'colors-semantic',
  'colores-utilidades': 'colors-utilities',
};

// Caché de fragmentos ya cargados
const CACHE = new Map();

// Sección activa actual y su ruta de fragmento
let currentSection = null;
let currentPath    = null;

/** Obtiene el HTML de un fragmento (con caché) */
async function fetchFragment(path) {
  if (CACHE.has(path)) return CACHE.get(path);
  const res = await fetch(path);
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${path}`);
  const html = await res.text();
  CACHE.set(path, html);
  return html;
}

/** Hace scroll hacia el target de una sección dentro del fragmento actual */
function scrollToTarget(sectionId) {
  const targetId = SCROLL_TARGETS[sectionId];
  if (!targetId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  // Pequeño delay para que el DOM esté pintado
  requestAnimationFrame(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/** Actualiza el estado visual del sidebar */
function updateSidebarActive(sectionId) {
  document.querySelectorAll('.sidebar-link').forEach(a => {
    const href = a.getAttribute('href');
    const isActive = href === `#${sectionId}`;
    a.classList.toggle('active', isActive);
  });
}

/** Navega a una sección por su id */
async function navigateTo(sectionId) {
  if (sectionId === currentSection) return;

  const path = ROUTES[sectionId];
  if (!path) {
    console.warn(`[router] Ruta no encontrada para: ${sectionId}`);
    return;
  }

  // ── Optimización mismo fragmento ─────────────────────────
  // Si la nueva sección usa el mismo archivo HTML que el actual,
  // no recargamos el DOM: solo hacemos scroll y actualizamos estado.
  if (path === currentPath) {
    history.pushState({ sectionId }, '', `#${sectionId}`);
    updateSidebarActive(sectionId);
    currentSection = sectionId;
    scrollToTarget(sectionId);
    onSectionReady(sectionId);
    return;
  }

  // ── Carga normal ─────────────────────────────────────────
  const content = document.getElementById('content');

  // Skeleton de carga mejorado
  content.innerHTML = `
    <div class="fragment-loading">
      <div class="fragment-loading-spinner"></div>
      <span class="fragment-loading-text">Cargando sección…</span>
    </div>
  `;

  try {
    const html = await fetchFragment(path);

    // Inyectar HTML del fragmento
    content.innerHTML = html;

    // Re-ejecutar <script> tags inline del fragmento
    content.querySelectorAll('script').forEach(oldScript => {
      const newScript = document.createElement('script');
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.head.appendChild(newScript);
      oldScript.remove();
    });

    // Actualizar URL
    history.pushState({ sectionId }, '', `#${sectionId}`);

    // Actualizar sidebar
    updateSidebarActive(sectionId);

    // Guardar estado
    currentSection = sectionId;
    currentPath    = path;

    // Scroll: al target de la sección o al top
    if (SCROLL_TARGETS[sectionId]) {
      scrollToTarget(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Callbacks post-carga
    onSectionReady(sectionId);

  } catch (err) {
    content.innerHTML = `
      <div class="fragment-error">
        <span class="material-symbols-rounded fragment-error-icon">error_outline</span>
        <strong>No se pudo cargar la sección</strong>
        <code>${path}</code>
        <small>${err.message}</small>
      </div>
    `;
    console.error('[router]', err);
  }
}

/** Inicializa el router */
function initRouter() {
  // Interceptar clicks en sidebar
  document.querySelectorAll('.sidebar-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').slice(1);
      navigateTo(sectionId);
    });
  });

  // Back / Forward del navegador
  window.addEventListener('popstate', e => {
    const id = e.state?.sectionId || location.hash.slice(1) || 'introduccion';
    navigateTo(id);
  });

  // Cargar sección inicial desde hash o la primera
  const initial = location.hash.slice(1) || 'introduccion';
  navigateTo(initial);
}

export { initRouter, navigateTo, ROUTES };
