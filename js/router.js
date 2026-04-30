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
    defaultSection: 'intro',
    fragmentBase: '/docs'
  };

  /**
   * Navigation map:
   * Defines all available sections and their fragment paths
   */
  const navigationMap = {
    // Intro & Fundamentos
    'intro': {
      label: 'Introducción',
      path: 'intro.html',
      icon: 'home',
      group: 'start'
    },
    'principios': {
      label: 'Principios',
      path: 'foundations/principles.html',
      icon: 'star',
      group: 'start'
    },

    // Fundamentos Compartidos
    'fundamentos/colores': {
      label: 'Colores',
      path: 'foundations/colors.html',
      icon: 'palette',
      group: 'fundamentos'
    },
    'fundamentos/tipografia': {
      label: 'Tipografía',
      path: 'app/fundamentos/typography.html',
      icon: 'text_fields',
      group: 'fundamentos'
    },
    'fundamentos/espaciado': {
      label: 'Espaciado',
      path: 'app/fundamentos/spacing.html',
      icon: 'space_bar',
      group: 'fundamentos'
    },
    'fundamentos/layout': {
      label: 'Layout',
      path: 'app/fundamentos/layout.html',
      icon: 'grid_view',
      group: 'fundamentos'
    },
    'fundamentos/sombras': {
      label: 'Sombras',
      path: 'app/fundamentos/shadows.html',
      icon: 'layers',
      group: 'fundamentos'
    },
    'fundamentos/border-radius': {
      label: 'Border Radius',
      path: 'app/fundamentos/border-radius.html',
      icon: 'rounded_corner',
      group: 'fundamentos'
    },

    // Web Components
    'web/componentes/botones': {
      label: 'Botones',
      path: 'web/components/buttons.html',
      icon: 'touch_app',
      group: 'web-componentes'
    },
    'web/componentes/inputs': {
      label: 'Inputs',
      path: 'web/components/inputs.html',
      icon: 'input',
      group: 'web-componentes'
    },
    'web/componentes/libreria': {
      label: 'Iconos',
      path: 'web/components/icons-library.html',
      icon: 'image',
      group: 'web-componentes'
    },

    // QA
    'qa/checklist': {
      label: 'QA Checklist',
      path: 'qa/checklist.html',
      icon: 'check_circle',
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
    const fragmentPath = `${config.fragmentBase}/${def.path}`;

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
      
      // Update active nav states
      updateActiveNav(section);
      
      // Emit event
      emit('navigate', section);

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
