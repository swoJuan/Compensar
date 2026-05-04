/**
 * ============================================================
 *  ROUTER.JS — Design System Fragment Loader
 *  Compensar Medicina Prepagada
 *  ============================================================
 * 
 * Usage:
 *   router.init()
 *   router.navigate('web/components/buttons')
 *   router.on('navigate', (section) => { ... })
 */

const router = (() => {
  const state = {
    currentSection: null,
    fragments: {},
    listeners: {}
  };

  const config = {
    containerSelector: '#main-content',
    defaultSection: 'inicio',
    fragmentBase: '/docs'
  };

  /**
   * Navigation map:
   * Defines all available sections and their fragment paths
   */
  const navigationMap = {
    'inicio': {
      label: 'Inicio',
      path: 'intro.html',
      icon: 'home',
      group: 'inicio'
    },
    'fundamentos/principios': {
      label: 'Principios',
      path: 'foundations/principles.html',
      icon: 'stars',
      group: 'fundamentos'
    },
    'fundamentos/colores': {
      label: 'Colores',
      path: 'foundations/colors.html',
      icon: 'palette',
      group: 'fundamentos'
    },
    'app/intro': {
      label: 'Introducción App',
      path: 'app/intro.html',
      icon: 'phone_iphone',
      group: 'app'
    },
    'app/fundamentos/tipografia': {
      label: 'Tipografía',
      path: 'transversales/fundamentos/typography.html',
      icon: 'title',
      group: 'app-fundamentos'
    },
    'app/fundamentos/espaciado': {
      label: 'Espaciado',
      path: 'transversales/fundamentos/spacing.html',
      icon: 'space_bar',
      group: 'app-fundamentos'
    },
    'app/fundamentos/layout': {
      label: 'Layout',
      path: 'app/fundamentos/layout.html',
      icon: 'view_quilt',
      group: 'app-fundamentos'
    },
    'app/fundamentos/sombras': {
      label: 'Sombras',
      path: 'transversales/fundamentos/shadows.html',
      icon: 'layers',
      group: 'app-fundamentos'
    },
    'app/fundamentos/radius': {
      label: 'Border radius',
      path: 'transversales/fundamentos/border-radius.html',
      icon: 'rounded_corner',
      group: 'app-fundamentos'
    },
    'web/componentes/botones': {
      label: 'Botones',
      path: 'transversales/components/buttons.html',
      icon: 'smart_button',
      group: 'web-componentes'
    },
    'web/componentes/inputs': {
      label: 'Inputs',
      path: 'transversales/components/inputs.html',
      icon: 'input',
      group: 'web-componentes'
    },
    'web/componentes/seleccion': {
      label: 'Checkbox / Radio / Switch',
      path: 'transversales/components/selection-controls.html',
      icon: 'check_box',
      group: 'web-componentes'
    },
    'web/componentes/alertas': {
      label: 'Alertas',
      path: 'transversales/components/alerts.html',
      icon: 'notification_important',
      group: 'web-componentes'
    },
    'web/componentes/toast': {
      label: 'Toast',
      path: 'transversales/components/toasts.html',
      icon: 'notifications',
      group: 'web-componentes'
    },
    'web/componentes/modales': {
      label: 'Modales',
      path: 'transversales/components/modals.html',
      icon: 'web_asset',
      group: 'web-componentes'
    },
    'web/componentes/badges': {
      label: 'Badges',
      path: 'web/components/badges.html',
      icon: 'award_star',
      group: 'web-componentes'
    },
    'web/componentes/iconos/intro': {
      label: 'Iconos',
      path: 'web/components/icons-intro.html',
      icon: 'interests',
      group: 'web-iconos'
    },
    'web/componentes/iconos/libreria': {
      label: 'Biblioteca',
      path: 'web/components/icons-library.html',
      icon: 'category',
      group: 'web-iconos'
    },
    'web/componentes/iconos/conectar': {
      label: 'Conexión',
      path: 'web/components/icons-connect.html',
      icon: 'hub',
      group: 'web-iconos'
    },
    'tokens/tablas': {
      label: 'Tablas de tokens',
      path: 'tokens/tokens-tables.html',
      icon: 'table_chart',
      group: 'tokens'
    },
    'tokens/texto': {
      label: 'Tokens de texto',
      path: 'tokens/tokens-text.html',
      icon: 'text_fields',
      group: 'tokens'
    },
    'qa/checklist': {
      label: 'Checklist QA',
      path: 'qa/checklist.html',
      icon: 'fact_check',
      group: 'qa'
    }
  };

  /**
   * Initialize router
   */
  function init(customConfig = {}) {
    Object.assign(config, customConfig);
    
    // Handle hash changes
    window.addEventListener('hashchange', () => {
      const section = getHashSection();
      if (section) navigate(section);
    });

    // Load initial section from hash or default
    const initialSection = getHashSection() || config.defaultSection;
    navigate(initialSection);
  }

  /**
   * Get section from URL hash
   */
  function getHashSection() {
    const hash = window.location.hash.slice(1); // Remove #
    return hash || null;
  }

  /**
   * Navigate to a section
   */
  async function navigate(section) {
    if (!navigationMap[section]) {
      console.warn(`Section not found: ${section}`);
      return false;
    }

    if (state.currentSection === section) return true;

    const def = navigationMap[section];
    const fragmentVersion = '20260504-10';
    const fragmentPath = `${config.fragmentBase}/${def.path}?v=${fragmentVersion}`;

    try {
      const response = await fetch(fragmentPath);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const html = await response.text();
      const container = document.querySelector(config.containerSelector);
      if (container) {
        container.innerHTML = html;
      }

      state.currentSection = section;
      window.location.hash = `#${section}`;
      document.body.classList.toggle('component-doc-full',
        section === 'web/componentes/botones' ||
        section === 'web/componentes/seleccion' ||
        section === 'web/componentes/alertas' ||
        section === 'web/componentes/toast' ||
        section === 'web/componentes/modales' ||
        section === 'web/componentes/inputs'
      );

      // Update active nav states
      updateActiveNav(section);

      // Emit event
      emit('navigate', section);
      document.dispatchEvent(new CustomEvent('component-docs:init', {
        detail: { section }
      }));
      if (window.componentDocs) {
        window.requestAnimationFrame(() => window.componentDocs.initButtonDoc(document));
      }
      if (window.selectionDocs) {
        window.requestAnimationFrame(() => window.selectionDocs.initSelectionDoc(document));
      }
      if (window.alertDocs) {
        window.requestAnimationFrame(() => window.alertDocs.initAlertDoc(document));
      }
      if (window.toastDocs) {
        window.requestAnimationFrame(() => window.toastDocs.initToastDoc(document));
      }
      if (window.modalDocs) {
        window.requestAnimationFrame(() => window.modalDocs.initModalDoc(document));
      }
      if (window.inputDocs) {
        window.requestAnimationFrame(() => window.inputDocs.initInputDoc(document));
      }

      return true;
    } catch (error) {
      console.error(`Failed to load fragment: ${fragmentPath}`, error);
      const container = document.querySelector(config.containerSelector);
      if (container) {
        container.innerHTML = `
          <div class="alert alert-danger" role="alert">
            <strong>Error:</strong> No se pudo cargar la sección. 
            Por favor recarga la página.
          </div>
        `;
      }
      return false;
    }
  }

  /**
   * Update navigation active states
   */
  function updateActiveNav(section) {
    // Remove all active states
    document.querySelectorAll('[data-nav-item]').forEach(item => {
      item.classList.remove('active');
    });

    // Set current active
    const activeItem = document.querySelector(`[data-nav-item="${section}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }

  /**
   * Get navigation map (for rendering nav UI)
   */
  function getNav() {
    return navigationMap;
  }

  /**
   * Event emitter
   */
  function on(event, callback) {
    if (!state.listeners[event]) {
      state.listeners[event] = [];
    }
    state.listeners[event].push(callback);
  }

  function emit(event, data) {
    if (state.listeners[event]) {
      state.listeners[event].forEach(cb => cb(data));
    }
  }

  /**
   * Get current section
   */
  function getCurrent() {
    return state.currentSection;
  }

  /**
   * Public API
   */
  return {
    init,
    navigate,
    getNav,
    getCurrent,
    on,
    emit
  };
})();
