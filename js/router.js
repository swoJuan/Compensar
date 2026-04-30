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
    defaultSection: 'fundamentos/colores',
    fragmentBase: '/docs'
  };

  /**
   * Navigation map:
   * Defines all available sections and their fragment paths
   */
  const navigationMap = {
    'fundamentos/colores': {
      label: 'Colores',
      path: 'foundations/colors.html',
      icon: 'palette',
      group: 'fundamentos'
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
