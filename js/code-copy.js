/**
 * ============================================================
 *  CODE-COPY.JS — Code Block Interactions
 *  Compensar Medicina Prepagada
 *  ============================================================
 * 
 * Features:
 * - Copy code blocks to clipboard
 * - Switch between code tabs (HTML / CSS / etc)
 * - Toast notifications
 * 
 * HTML Structure Expected:
 * 
 * <div class="code-block">
 *   <div class="code-tabs">
 *     <button class="code-tab active" onclick="codeCopy.switchTab(this, 'code-html')">HTML</button>
 *     <button class="code-tab" onclick="codeCopy.switchTab(this, 'code-css')">CSS</button>
 *     <button class="code-copy-btn" onclick="codeCopy.copy(this)">
 *       <svg>...</svg> Copiar
 *     </button>
 *   </div>
 *   <div class="code-content">
 *     <pre id="code-html" class="active"><code>...</code></pre>
 *     <pre id="code-css"><code>...</code></pre>
 *   </div>
 * </div>
 */

const codeCopy = (() => {
  const config = {
    toastSelector: '#toast',
    toastDuration: 2000
  };

  /**
   * Switch between code tabs
   */
  function switchTab(btn, targetId) {
    const block = btn.closest('.code-block');
    if (!block) return;

    // Deactivate all tabs and code blocks in this block
    block.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
    block.querySelectorAll('.code-content pre').forEach(p => p.classList.remove('active'));

    // Activate clicked tab and corresponding code block
    btn.classList.add('active');
    const target = block.querySelector('#' + targetId);
    if (target) {
      target.classList.add('active');
    }
  }

  /**
   * Copy code to clipboard
   */
  function copy(btn) {
    const block = btn.closest('.code-block');
    if (!block) return;

    const activeCode = block.querySelector('.code-content pre.active');
    if (!activeCode) {
      showToast('No hay código para copiar');
      return;
    }

    const text = activeCode.innerText || activeCode.textContent;

    navigator.clipboard.writeText(text).then(() => {
      showToast('✓ Código copiado');
      
      // Visual feedback
      const originalHTML = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = '✓ Copiado';

      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = originalHTML;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      showToast('Error al copiar');
    });
  }

  /**
   * Copy token value
   */
  function copyToken(text, label = '') {
    navigator.clipboard.writeText(text).then(() => {
      const msg = label ? `${label}: ${text}` : text;
      showToast(`✓ Copiado: ${msg}`);
    }).catch(err => {
      console.error('Failed to copy:', err);
      showToast('Error al copiar');
    });
  }

  /**
   * Show toast notification
   */
  function showToast(msg) {
    const toastEl = document.querySelector(config.toastSelector);
    if (!toastEl) {
      console.log('Toast:', msg); // Fallback to console
      return;
    }

    toastEl.textContent = msg;
    toastEl.classList.add('show');

    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, config.toastDuration);
  }

  /**
   * Public API
   */
  return {
    switchTab,
    copy,
    copyToken,
    showToast
  };
})();
