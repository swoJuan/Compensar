/**
 * ============================================================
 *  THEME.JS — Theme Management
 *  Compensar Medicina Prepagada
 *  ============================================================
 * 
 * Manages light / dark / high-contrast themes
 * Persists to localStorage
 * Updates data-theme attribute on <html>
 * 
 * Usage:
 *   theme.init() // Auto-detect or restore from storage
 *   theme.set('dark')
 *   theme.get() // returns 'light', 'dark', or 'high-contrast'
 *   theme.on('change', (newTheme) => { ... })
 */

const theme = (() => {
  const state = {
    current: 'light',
    listeners: {}
  };

  const config = {
    storageKey: 'ds-theme',
    htmlAttr: 'data-theme',
    validThemes: ['light', 'dark', 'high-contrast']
  };

  /**
   * Initialize theme system
   * Priority: localStorage > prefers-color-scheme > default
   */
  function init() {
    let t = getFromStorage();

    if (!t) {
      // Try system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        t = 'dark';
      } else {
        t = 'light';
      }
    }

    if (!config.validThemes.includes(t)) {
      t = 'light';
    }

    set(t);
  }

  /**
   * Set theme
   */
  function set(newTheme) {
    if (!config.validThemes.includes(newTheme)) {
      console.warn(`Invalid theme: ${newTheme}`);
      return false;
    }

    document.documentElement.setAttribute(config.htmlAttr, newTheme);
    state.current = newTheme;
    saveToStorage(newTheme);
    
    emit('change', newTheme);
    updateUI(newTheme);
    document.dispatchEvent(new CustomEvent('ds:theme-change', { detail: { theme: newTheme } }));

    return true;
  }

  /**
   * Get current theme
   */
  function get() {
    return state.current;
  }

  /**
   * Cycle through themes
   */
  function cycle() {
    const idx = config.validThemes.indexOf(state.current);
    const nextIdx = (idx + 1) % config.validThemes.length;
    set(config.validThemes[nextIdx]);
  }

  /**
   * Update UI buttons/indicators
   */
  function updateUI(currentTheme) {
    // Update theme switcher buttons
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-theme-btn') === currentTheme) {
        btn.classList.add('active');
      }
    });
  }

  /**
   * Get from localStorage
   */
  function getFromStorage() {
    try {
      return localStorage.getItem(config.storageKey);
    } catch (e) {
      console.warn('localStorage not available');
      return null;
    }
  }

  /**
   * Save to localStorage
   */
  function saveToStorage(t) {
    try {
      localStorage.setItem(config.storageKey, t);
    } catch (e) {
      console.warn('localStorage not available');
    }
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
   * Public API
   */
  return {
    init,
    set,
    get,
    cycle,
    on
  };
})();
