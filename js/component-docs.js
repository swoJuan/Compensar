const componentDocs = (() => {
  const anatomy = {
    text: {
      label: 'Guardar',
      className: '',
      width: '108 px',
      widthPx: 108,
      paddingY: 16,
      paddingLeft: 32,
      paddingRight: 32,
      segments: [
        { type: 'pad-left', width: 32, label: 'PI 32 px' },
        { type: 'text', width: 44, label: 'Texto' },
        { type: 'pad-right', width: 32, label: 'PD 32 px' }
      ],
      padding: '16 px vertical · 32 px horizontal',
      html: '<button class="mp-btn mp-btn--primario">Guardar</button>'
    },
    'icon-left': {
      label: 'Guardar',
      className: 'mp-btn--icon-left',
      width: '132 px',
      widthPx: 132,
      paddingY: 12,
      paddingLeft: 16,
      paddingRight: 32,
      segments: [
        { type: 'pad-left', width: 16, label: 'PI 16 px' },
        { type: 'icon', width: 24, label: 'Icono' },
        { type: 'gap', width: 16, label: 'Gap 16 px' },
        { type: 'text', width: 44, label: 'Texto' },
        { type: 'pad-right', width: 32, label: 'PD 32 px' }
      ],
      padding: '12 px vertical · 16 px izquierda · 32 px derecha',
      html: '<button class="mp-btn mp-btn--primario mp-btn--icon-left"><span class="material-symbols-rounded" aria-hidden="true">download</span>Guardar</button>'
    },
    'icon-right': {
      label: 'Guardar',
      className: 'mp-btn--icon-right',
      width: '132 px',
      widthPx: 132,
      paddingY: 12,
      paddingLeft: 32,
      paddingRight: 16,
      segments: [
        { type: 'pad-left', width: 32, label: 'PI 32 px' },
        { type: 'text', width: 44, label: 'Texto' },
        { type: 'gap', width: 16, label: 'Gap 16 px' },
        { type: 'icon', width: 24, label: 'Icono' },
        { type: 'pad-right', width: 16, label: 'PD 16 px' }
      ],
      padding: '12 px vertical · 32 px izquierda · 16 px derecha',
      html: '<button class="mp-btn mp-btn--primario mp-btn--icon-right">Guardar<span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span></button>'
    },
    'icon-both': {
      label: 'Guardar',
      className: 'mp-btn--icon-both',
      width: '156 px',
      widthPx: 156,
      paddingY: 12,
      paddingLeft: 16,
      paddingRight: 16,
      segments: [
        { type: 'pad-left', width: 16, label: 'PI 16 px' },
        { type: 'icon', width: 24, label: 'Icono' },
        { type: 'gap', width: 16, label: 'Gap 16 px' },
        { type: 'text', width: 44, label: 'Texto' },
        { type: 'gap', width: 16, label: 'Gap 16 px' },
        { type: 'icon', width: 24, label: 'Icono' },
        { type: 'pad-right', width: 16, label: 'PD 16 px' }
      ],
      padding: '12 px vertical · 16 px horizontal',
      html: '<button class="mp-btn mp-btn--primario mp-btn--icon-both"><span class="material-symbols-rounded" aria-hidden="true">download</span>Guardar<span class="material-symbols-rounded" aria-hidden="true">expand_more</span></button>'
    },
    'icon-only': {
      label: '',
      className: 'mp-btn--icon-only',
      width: '56 px',
      widthPx: 56,
      paddingY: 12,
      paddingLeft: 16,
      paddingRight: 16,
      segments: [
        { type: 'pad-left', width: 16, label: 'PI 16 px' },
        { type: 'icon', width: 24, label: 'Icono' },
        { type: 'pad-right', width: 16, label: 'PD 16 px' }
      ],
      padding: '12 px vertical · 16 px horizontal',
      html: '<button class="mp-btn mp-btn--primario mp-btn--icon-only" aria-label="Descargar"><span class="material-symbols-rounded" aria-hidden="true">download</span></button>'
    }
  };

  const staticCode = {
    html: `<button class="mp-btn mp-btn--primario" type="button">
  Guardar
</button>`,
    variants: `<button class="mp-btn mp-btn--primario">Guardar</button>
<button class="mp-btn mp-btn--secundario">Ver planes</button>
<button class="mp-btn mp-btn--terciario">Cancelar</button>
<button class="mp-btn mp-btn--especial">Conocer planes</button>`,
    accessible: `<button
  class="mp-btn mp-btn--primario mp-btn--icon-only"
  type="button"
  aria-label="Descargar certificado">
  <span class="material-symbols-rounded" aria-hidden="true">download</span>
</button>`
  };

  const buttonExport = {
    meta: {
      component: 'Boton',
      cssPrefix: 'mp',
      source: 'Core + Figma Compensar v2',
      figmaNodes: ['5065:10698', '4498:2274', '4514:6801', '4514:7068'],
      updatedAt: '2026-05-04',
      notes: [
        'Archivo plano para dummy/demo. La fuente productiva sigue siendo core/components/web/_buttons.scss.',
        'No usa mixins. Mantiene tokens Figma como custom properties y clases mp-btn.'
      ]
    },
    tokens: {
      size: {
        height: '48px',
        tertiaryHeight: '32px',
        iconOnlyWidth: '56px',
        minTouchArea: '44px'
      },
      spacing: {
        gap: '16px',
        textPadding: '16px 32px',
        iconLeftPadding: '12px 32px 12px 16px',
        iconRightPadding: '12px 16px 12px 32px',
        iconBothPadding: '12px 16px',
        iconOnlyPadding: '12px 16px'
      },
      radius: {
        button: '24px',
        tertiary: '8px'
      },
      typography: {
        family: 'Roboto, Arial, sans-serif',
        size: '16px',
        weight: 700,
        lineHeight: 1,
        letterSpacing: '0.022em'
      },
      icon: {
        size: '24px'
      },
      themes: {
        light: {
          surface: '#ffffff',
          primaryDefault: '#ff6600',
          primaryHover: '#e63f0c',
          primaryActive: '#d43705',
          textOnPrimary: '#ffffff',
          textPrimary: '#111111',
          focus: '#006fff'
        },
        dark: {
          surface: '#292929',
          primaryDefault: '#ff9d5c',
          primaryHover: '#ff6600',
          primaryActive: '#e63f0c',
          textOnPrimary: '#111111',
          textPrimary: '#f5f5f5',
          focus: '#ff9d5c'
        },
        highContrast: {
          surface: '#000000',
          primaryDefault: '#ffff00',
          primaryHover: '#ffff00',
          primaryActive: '#ffff00',
          textOnPrimary: '#000000',
          textPrimary: '#ffffff',
          textLink: '#ffff00',
          focus: '#ffff00'
        }
      }
    },
    classes: [
      '.mp-btn',
      '.mp-btn--primario',
      '.mp-btn--secundario',
      '.mp-btn--terciario',
      '.mp-btn--especial',
      '.mp-btn--icon-left',
      '.mp-btn--icon-right',
      '.mp-btn--icon-both',
      '.mp-btn--icon-only',
      '.mp-btn--is-hover',
      '.mp-btn--is-focus',
      '.mp-btn--is-active',
      '.mp-btn--loading',
      '.w-100'
    ],
    anatomies: {
      text: {
        className: '.mp-btn',
        height: '48px',
        widthExample: '108px',
        padding: '16px 32px',
        gap: '0',
        content: ['text']
      },
      iconLeft: {
        className: '.mp-btn--icon-left',
        height: '48px',
        widthExample: '132px',
        padding: '12px 32px 12px 16px',
        gap: '16px',
        content: ['icon', 'text']
      },
      iconRight: {
        className: '.mp-btn--icon-right',
        height: '48px',
        widthExample: '132px',
        padding: '12px 16px 12px 32px',
        gap: '16px',
        content: ['text', 'icon']
      },
      iconBoth: {
        className: '.mp-btn--icon-both',
        height: '48px',
        widthExample: '156px',
        padding: '12px 16px',
        gap: '16px',
        content: ['icon', 'text', 'icon']
      },
      iconOnly: {
        className: '.mp-btn--icon-only',
        height: '48px',
        widthExample: '56px',
        padding: '12px 16px',
        gap: '0',
        content: ['icon'],
        accessibility: 'Requiere aria-label descriptivo.'
      }
    },
    variants: {
      primario: 'Accion principal. Fondo con token use-primary.',
      secundario: 'Accion secundaria. Fondo transparente, borde y texto con token use-primary.',
      terciario: 'Accion de baja jerarquia. Altura 32px y texto subrayado en hover.',
      especial: 'Accion destacada especial. Usa tokens violetas de producto.'
    },
    states: ['default', 'hover', 'focus', 'active', 'disabled', 'loading']
  };

  const buttonExportCss = `/* ==========================================================================
   Boton - Compensar Design System
   Fuente: core/components/web/_buttons.scss + tokens Figma Compensar v2
   Uso: estilos planos para dummy/demo. No contiene mixins.
   ========================================================================== */

:root,
[data-theme="light"] {
  --mp-btn-height: 48px;
  --mp-btn-tertiary-height: 32px;
  --mp-btn-icon-only-width: 56px;
  --mp-btn-min-touch-area: 44px;
  --mp-btn-gap: 16px;
  --mp-btn-padding-text: 16px 32px;
  --mp-btn-padding-icon-left: 12px 32px 12px 16px;
  --mp-btn-padding-icon-right: 12px 16px 12px 32px;
  --mp-btn-padding-icon-both: 12px 16px;
  --mp-btn-radius: 24px;
  --mp-btn-radius-tertiary: 8px;
  --mp-btn-font-family: Roboto, Arial, sans-serif;
  --mp-btn-font-size: 16px;
  --mp-btn-font-weight: 700;
  --mp-btn-letter-spacing: 0.022em;
  --mp-btn-icon-size: 24px;
  --mp-btn-border-width: 1.5px;
  --mp-btn-focus-width: 3px;
  --use-surface-white: #ffffff;
  --use-primary-default: #ff6600;
  --use-primary-hover: #e63f0c;
  --use-primary-active: #d43705;
  --use-text-on-dark-primary: #ffffff;
  --use-text-primary: #111111;
  --use-focus-outline: #006fff;
  --product-violet-50: #7b61c9;
  --product-violet-70: #4e3199;
  --base-neutral-30: #d9d9d9;
  --base-neutral-50: #999999;
}

[data-theme="dark"] {
  --use-surface-white: #292929;
  --use-primary-default: #ff9d5c;
  --use-primary-hover: #ff6600;
  --use-primary-active: #e63f0c;
  --use-text-on-dark-primary: #111111;
  --use-text-primary: #f5f5f5;
  --use-focus-outline: #ff9d5c;
  --product-violet-50: #c9b8ff;
  --product-violet-70: #a28dda;
}

[data-theme="high-contrast"] {
  --use-surface-white: #000000;
  --use-primary-default: #ffff00;
  --use-primary-hover: #ffff00;
  --use-primary-active: #ffff00;
  --use-text-on-dark-primary: #000000;
  --use-text-primary: #ffffff;
  --use-text-link: #ffff00;
  --use-focus-outline: #ffff00;
}

.mp-btn {
  --mp-btn-bg: transparent;
  --mp-btn-bg-hover: var(--mp-btn-bg);
  --mp-btn-bg-active: var(--mp-btn-bg-hover);
  --mp-btn-color: var(--use-text-primary);
  --mp-btn-border-color: transparent;
  --mp-btn-shadow-hover: 0 2px 8px rgb(255 102 0 / 35%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--mp-btn-gap);
  min-height: var(--mp-btn-height);
  min-width: var(--mp-btn-min-touch-area);
  padding: var(--mp-btn-padding-text);
  border: var(--mp-btn-border-width) solid var(--mp-btn-border-color);
  border-radius: var(--mp-btn-radius);
  background: var(--mp-btn-bg);
  color: var(--mp-btn-color);
  font-family: var(--mp-btn-font-family);
  font-size: var(--mp-btn-font-size);
  font-weight: var(--mp-btn-font-weight);
  letter-spacing: var(--mp-btn-letter-spacing);
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  vertical-align: middle;
  transition: background .2s, box-shadow .2s, opacity .15s;
}

.mp-btn .material-symbols-rounded {
  flex: 0 0 auto;
  font-size: var(--mp-btn-icon-size);
  line-height: 1;
}

.mp-btn:hover:not(:disabled),
.mp-btn.mp-btn--is-hover {
  background: var(--mp-btn-bg-hover);
  color: var(--mp-btn-color);
  border-color: var(--mp-btn-border-color);
  box-shadow: var(--mp-btn-shadow-hover);
}

.mp-btn:active:not(:disabled),
.mp-btn.mp-btn--is-active {
  background: var(--mp-btn-bg-active);
  color: var(--mp-btn-color);
  border-color: var(--mp-btn-border-color);
  box-shadow: inset 0 4px 4px rgb(0 0 0 / 18%);
}

.mp-btn:focus-visible,
.mp-btn.mp-btn--is-focus {
  outline: var(--mp-btn-focus-width) solid var(--use-focus-outline);
  outline-offset: var(--mp-btn-focus-width);
}

.mp-btn:disabled,
.mp-btn[aria-disabled="true"] {
  background: var(--base-neutral-30) !important;
  color: var(--base-neutral-50) !important;
  border-color: transparent !important;
  box-shadow: none !important;
  cursor: not-allowed;
  pointer-events: none;
}

.mp-btn--icon-left { padding: var(--mp-btn-padding-icon-left); }
.mp-btn--icon-right { padding: var(--mp-btn-padding-icon-right); }
.mp-btn--icon-both { padding: var(--mp-btn-padding-icon-both); }
.mp-btn--icon-only {
  width: var(--mp-btn-icon-only-width);
  min-width: var(--mp-btn-icon-only-width);
  padding: var(--mp-btn-padding-icon-both);
}
.mp-btn--loading { pointer-events: none; }
.mp-btn--loading .material-symbols-rounded { animation: mp-btn-spin .9s linear infinite; }
.w-100 { width: 100%; }

@keyframes mp-btn-spin {
  to { transform: rotate(360deg); }
}

.mp-btn--primario {
  --mp-btn-bg: linear-gradient(180deg, var(--use-primary-default) 0%, var(--use-primary-hover) 100%);
  --mp-btn-bg-hover: linear-gradient(180deg, var(--use-primary-active) 0%, var(--use-primary-default) 100%);
  --mp-btn-bg-active: var(--use-primary-active);
  --mp-btn-color: var(--use-text-on-dark-primary);
}

.mp-btn--secundario {
  --mp-btn-bg: transparent;
  --mp-btn-bg-hover: color-mix(in srgb, var(--use-primary-default) 8%, transparent);
  --mp-btn-bg-active: color-mix(in srgb, var(--use-primary-default) 14%, transparent);
  --mp-btn-color: var(--use-primary-default);
  --mp-btn-border-color: var(--use-primary-default);
}

.mp-btn--terciario {
  --mp-btn-bg: transparent;
  --mp-btn-bg-hover: color-mix(in srgb, var(--use-primary-default) 8%, transparent);
  --mp-btn-bg-active: color-mix(in srgb, var(--use-primary-default) 14%, transparent);
  --mp-btn-color: var(--use-primary-default);
  --mp-btn-border-width: 0;
  min-height: var(--mp-btn-tertiary-height);
  height: var(--mp-btn-tertiary-height);
  padding: 8px 24px;
  border-radius: var(--mp-btn-radius-tertiary);
}

.mp-btn--terciario:hover:not(:disabled),
.mp-btn--terciario.mp-btn--is-hover {
  text-decoration: underline;
}

.mp-btn--especial {
  --mp-btn-bg: linear-gradient(180deg, var(--product-violet-50) 0%, var(--product-violet-70) 100%);
  --mp-btn-bg-hover: linear-gradient(180deg, var(--product-violet-70) 0%, var(--product-violet-50) 100%);
  --mp-btn-bg-active: var(--product-violet-70);
  --mp-btn-color: var(--use-text-on-dark-primary);
}

[data-theme="high-contrast"] .mp-btn--primario,
[data-theme="high-contrast"] .mp-btn--especial {
  --mp-btn-bg: var(--use-primary-default);
  --mp-btn-bg-hover: var(--use-primary-default);
  --mp-btn-bg-active: var(--use-primary-default);
  --mp-btn-color: var(--use-text-on-dark-primary);
  --mp-btn-border-color: transparent;
}

[data-theme="high-contrast"] .mp-btn--secundario,
[data-theme="high-contrast"] .mp-btn--terciario {
  --mp-btn-bg: transparent;
  --mp-btn-bg-hover: transparent;
  --mp-btn-bg-active: transparent;
  --mp-btn-color: var(--use-text-link);
  --mp-btn-border-color: var(--use-text-link);
}

[data-theme="high-contrast"] .mp-btn--terciario {
  --mp-btn-border-width: 0;
  text-decoration: underline;
}`;

  const buttonExportScss = `// ==========================================================================
// Boton - Compensar Design System
// Fuente: core/components/web/_buttons.scss + tokens Figma Compensar v2
// Uso: estilos planos para dummy/demo. No contiene mixins.
// ==========================================================================

$mp-btn-height: 48px;
$mp-btn-tertiary-height: 32px;
$mp-btn-icon-only-width: 56px;
$mp-btn-min-touch-area: 44px;
$mp-btn-gap: 16px;
$mp-btn-radius: 24px;
$mp-btn-radius-tertiary: 8px;
$mp-btn-icon-size: 24px;
$mp-btn-border-width: 1.5px;
$mp-btn-focus-width: 3px;

$mp-btn-padding-text: 16px 32px;
$mp-btn-padding-icon-left: 12px 32px 12px 16px;
$mp-btn-padding-icon-right: 12px 16px 12px 32px;
$mp-btn-padding-icon-both: 12px 16px;

$mp-btn-font-family: Roboto, Arial, sans-serif;
$mp-btn-font-size: 16px;
$mp-btn-font-weight: 700;
$mp-btn-letter-spacing: 0.022em;

:root,
[data-theme="light"] {
  --mp-btn-height: #{$mp-btn-height};
  --mp-btn-tertiary-height: #{$mp-btn-tertiary-height};
  --mp-btn-icon-only-width: #{$mp-btn-icon-only-width};
  --mp-btn-min-touch-area: #{$mp-btn-min-touch-area};
  --mp-btn-gap: #{$mp-btn-gap};
  --mp-btn-padding-text: #{$mp-btn-padding-text};
  --mp-btn-padding-icon-left: #{$mp-btn-padding-icon-left};
  --mp-btn-padding-icon-right: #{$mp-btn-padding-icon-right};
  --mp-btn-padding-icon-both: #{$mp-btn-padding-icon-both};
  --mp-btn-radius: #{$mp-btn-radius};
  --mp-btn-radius-tertiary: #{$mp-btn-radius-tertiary};
  --mp-btn-font-family: #{$mp-btn-font-family};
  --mp-btn-font-size: #{$mp-btn-font-size};
  --mp-btn-font-weight: #{$mp-btn-font-weight};
  --mp-btn-letter-spacing: #{$mp-btn-letter-spacing};
  --mp-btn-icon-size: #{$mp-btn-icon-size};
  --mp-btn-border-width: #{$mp-btn-border-width};
  --mp-btn-focus-width: #{$mp-btn-focus-width};
  --use-surface-white: #ffffff;
  --use-primary-default: #ff6600;
  --use-primary-hover: #e63f0c;
  --use-primary-active: #d43705;
  --use-text-on-dark-primary: #ffffff;
  --use-text-primary: #111111;
  --use-focus-outline: #006fff;
  --product-violet-50: #7b61c9;
  --product-violet-70: #4e3199;
  --base-neutral-30: #d9d9d9;
  --base-neutral-50: #999999;
}

[data-theme="dark"] {
  --use-surface-white: #292929;
  --use-primary-default: #ff9d5c;
  --use-primary-hover: #ff6600;
  --use-primary-active: #e63f0c;
  --use-text-on-dark-primary: #111111;
  --use-text-primary: #f5f5f5;
  --use-focus-outline: #ff9d5c;
  --product-violet-50: #c9b8ff;
  --product-violet-70: #a28dda;
}

[data-theme="high-contrast"] {
  --use-surface-white: #000000;
  --use-primary-default: #ffff00;
  --use-primary-hover: #ffff00;
  --use-primary-active: #ffff00;
  --use-text-on-dark-primary: #000000;
  --use-text-primary: #ffffff;
  --use-text-link: #ffff00;
  --use-focus-outline: #ffff00;
}

${buttonExportCss.slice(buttonExportCss.indexOf('.mp-btn {'))}`;

  function makeButton({ variant = 'primario', kind = 'text', label = 'Guardar', state = 'default', fullWidth = false } = {}) {
    const cfg = anatomy[kind] || anatomy.text;
    const classes = ['mp-btn', `mp-btn--${variant}`];
    if (cfg.className) classes.push(cfg.className);
    if (state === 'hover') classes.push('mp-btn--is-hover');
    if (state === 'focus') classes.push('mp-btn--is-focus');
    if (state === 'active') classes.push('mp-btn--is-active');
    if (state === 'loading') classes.push('mp-btn--loading');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = classes.join(' ');
    if (state === 'disabled') button.disabled = true;
    if (state === 'loading') button.setAttribute('aria-busy', 'true');
    if (fullWidth) button.classList.add('w-100');
    if (kind === 'icon-only') button.setAttribute('aria-label', label || 'Descargar');

    const text = state === 'loading' ? 'Guardando...' : label;
    if (kind === 'icon-left' || kind === 'icon-both' || kind === 'icon-only' || state === 'loading') {
      button.appendChild(icon(state === 'loading' ? 'progress_activity' : 'download'));
    }
    if (kind !== 'icon-only') button.append(document.createTextNode(text || 'Guardar'));
    if (kind === 'icon-right' || kind === 'icon-both') {
      button.appendChild(icon(kind === 'icon-both' ? 'expand_more' : 'arrow_forward'));
    }
    return button;
  }

  function icon(name) {
    const span = document.createElement('span');
    span.className = 'material-symbols-rounded';
    span.setAttribute('aria-hidden', 'true');
    span.textContent = name;
    return span;
  }

  function buttonHtml({ variant, kind, label, state, fullWidth }) {
    const cfg = anatomy[kind] || anatomy.text;
    const classes = ['mp-btn', `mp-btn--${variant}`];
    if (cfg.className) classes.push(cfg.className);
    if (fullWidth) classes.push('w-100');
    const disabled = state === 'disabled' ? ' disabled' : '';
    const busy = state === 'loading' ? ' aria-busy="true"' : '';
    const text = state === 'loading' ? 'Guardando...' : (label || 'Guardar');
    const start = `<button class="${classes.join(' ')}" type="button"${disabled}${busy}`;
    if (kind === 'icon-only') {
      return `${start} aria-label="${text}">
  <span class="material-symbols-rounded" aria-hidden="true">${state === 'loading' ? 'progress_activity' : 'download'}</span>
</button>`;
    }
    const left = kind === 'icon-left' || kind === 'icon-both' || state === 'loading'
      ? `\n  <span class="material-symbols-rounded" aria-hidden="true">${state === 'loading' ? 'progress_activity' : 'download'}</span>`
      : '';
    const right = kind === 'icon-right' || kind === 'icon-both'
      ? `\n  <span class="material-symbols-rounded" aria-hidden="true">${kind === 'icon-both' ? 'expand_more' : 'arrow_forward'}</span>`
      : '';
    return `${start}>${left}
  ${text}${right}
</button>`;
  }

  function codeForTab(tab, state) {
    if (tab === 'css') {
      const cfg = anatomy[state.kind] || anatomy.text;
      return [
        '.mp-btn',
        `.mp-btn--${state.variant}`,
        cfg.className ? `.${cfg.className}` : null,
        state.fullWidth ? '.w-100' : null,
        state.theme !== 'light' ? `[data-theme="${state.theme}"]` : null
      ].filter(Boolean).join('\n');
    }
    if (tab === 'tokens') {
      const cfg = anatomy[state.kind] || anatomy.text;
      const themeTokens = state.theme === 'dark'
        ? `theme: dark
primary: var(--use-primary-default-dark, #ff9d5c)
surface-preview: var(--use-surface-white, #292929)
text-on-dark: #f5f5f5`
        : state.theme === 'high-contrast'
          ? `theme: high-contrast
surface-preview: var(--use-surface-white, #000000)
primary: var(--use-primary-default, #ffff00)
text-primary: var(--use-text-primary, #ffffff)
text-inverse: var(--use-text-inverse, #000000)
link/border: var(--use-text-link, #ffff00)`
          : `theme: light
primary: var(--use-primary-default)
surface-preview: var(--use-surface-white)`;
      return `height: 48px
padding: ${cfg.padding}
gap: 16px
icon-size: 24px
radius: var(--radius-md) /* 24px */
font: var(--font-size-btn) / var(--font-weight-bold)
${themeTokens}`;
    }
    return buttonHtml(state);
  }

  function initButtonDoc(root = document) {
    const page = root.querySelector('[data-component-doc="button"]');
    if (!page || page.dataset.initialized === 'true') return;

    try {
      initAnatomy(page);
      initPlayground(page);
      initStaticCode(page);
      page.dataset.initialized = 'true';
    } catch (error) {
      delete page.dataset.initialized;
      console.error('No se pudo inicializar la documentacion del boton.', error);
    }
  }

  function findButtonPage(target) {
    if (!target) return document.querySelector('[data-component-doc="button"]');
    return target.closest('[data-component-doc="button"]') || document.querySelector('[data-component-doc="button"]');
  }

  function renderAnatomy(page, kind) {
    if (!page) return;
    const preview = page.querySelector('#button-anatomy-preview');
    const width = page.querySelector('[data-anatomy-width]');
    const padding = page.querySelector('[data-anatomy-padding]');
    const guides = page.querySelector('[data-anatomy-guides]');
    const options = [...page.querySelectorAll('[data-anatomy-option]')];
    const labels = [...page.querySelectorAll('[data-callout]')];
    const measures = [...page.querySelectorAll('.button-doc-measure')];
    const hit = page.querySelector('.button-doc-callout--hit');
    const selectedKind = kind || options.find((button) => button.getAttribute('aria-pressed') === 'true')?.dataset.anatomyOption || 'text';
    const cfg = anatomy[selectedKind] || anatomy.text;
    const showLabels = page.querySelector('[data-anatomy-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-anatomy-toggle="measures"]')?.checked ?? true;
    const showHit = page.querySelector('[data-anatomy-toggle="hit"]')?.checked ?? true;

    if (!preview || !width || !padding || !options.length) return;

    preview.replaceChildren(makeButton({ kind: selectedKind, variant: 'primario', label: cfg.label || 'Descargar' }));
    width.textContent = cfg.width;
    padding.textContent = cfg.padding;
    renderAnatomyGuides(guides, cfg, showMeasures);
    options.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.anatomyOption === selectedKind));
    });
    labels.forEach((label) => {
      const isTextCallout = label.dataset.callout === 'text';
      const isIconCallout = label.dataset.callout === 'icon';
      const isStructurallyHidden = (selectedKind === 'icon-only' && isTextCallout) || (selectedKind === 'text' && isIconCallout);
      label.hidden = !showLabels || isStructurallyHidden;
    });
    measures.forEach((item) => { item.hidden = !showMeasures; });
    if (hit) hit.hidden = !showHit;
  }

  function renderAnatomyGuides(guides, cfg, showMeasures) {
    if (!guides) return;

    guides.hidden = !showMeasures;
    guides.style.setProperty('--anatomy-width', `${cfg.widthPx}px`);
    guides.replaceChildren();

    if (!showMeasures) return;

    let offset = 0;
    (cfg.segments || []).forEach((segment, index) => {
      if (segment.type === 'pad-left' || segment.type === 'pad-right' || segment.type === 'gap') {
        const band = document.createElement('span');
        band.className = `button-doc-guide-band button-doc-guide-band--${segment.type}`;
        band.style.left = `${offset}px`;
        band.style.width = `${segment.width}px`;
        guides.appendChild(band);

        const label = document.createElement('span');
        label.className = `button-doc-guide-label button-doc-guide-label--${segment.type}`;
        label.textContent = segment.label;
        label.style.left = `${offset + (segment.width / 2)}px`;
        if (segment.type === 'gap' && index > 3) label.classList.add('button-doc-guide-label--bottom');
        guides.appendChild(label);
      }
      offset += segment.width;
    });

    const vertical = document.createElement('span');
    vertical.className = 'button-doc-guide-label button-doc-guide-label--vertical';
    vertical.textContent = `PV ${cfg.paddingY} px`;
    guides.appendChild(vertical);
  }

  function getPlaygroundState(page) {
    return {
      variant: page.querySelector('[data-button-control="variant"]')?.value || 'primario',
      kind: page.querySelector('[data-button-control="anatomy"]')?.value || 'text',
      state: page.querySelector('[data-button-control="state"]')?.value || 'default',
      theme: page.querySelector('[data-button-control="theme"]')?.value || 'light',
      label: page.querySelector('[data-button-control="label"]')?.value || 'Guardar',
      fullWidth: page.querySelector('[data-button-control="fullWidth"]')?.checked || false
    };
  }

  function renderPlayground(page) {
    if (!page) return;
    const preview = page.querySelector('#button-playground-preview');
    const output = page.querySelector('#button-code-output');
    const activeTab = page.querySelector('[data-code-tab][aria-selected="true"]')?.dataset.codeTab || 'html';

    if (!preview || !output) return;

    const current = getPlaygroundState(page);
    preview.dataset.theme = current.theme;
    preview.dataset.bsTheme = current.theme === 'dark' ? 'dark' : 'light';
    preview.replaceChildren(makeButton(current));
    output.textContent = codeForTab(activeTab, current);
  }

  function renderStaticCode(page, key = 'html') {
    if (!page) return;
    const output = page.querySelector('#button-static-code');
    const tabs = [...page.querySelectorAll('[data-static-code-tab]')];

    if (!output || !tabs.length) return;

    output.textContent = staticCode[key] || staticCode.html;
    tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.staticCodeTab === key)));
  }

  function initAnatomy(page) {
    const preview = page.querySelector('#button-anatomy-preview');
    const width = page.querySelector('[data-anatomy-width]');
    const padding = page.querySelector('[data-anatomy-padding]');
    const options = [...page.querySelectorAll('[data-anatomy-option]')];
    const labels = [...page.querySelectorAll('[data-callout]')];
    const measures = [...page.querySelectorAll('.button-doc-measure')];
    const hit = page.querySelector('.button-doc-callout--hit');
    const toggles = {};

    if (!preview || !width || !padding || !options.length) return;

    page.querySelectorAll('[data-anatomy-toggle]').forEach((control) => {
      toggles[control.dataset.anatomyToggle] = control;
    });

    function applyVisibility(kind) {
      const showLabels = toggles.labels ? toggles.labels.checked : true;
      const showMeasures = toggles.measures ? toggles.measures.checked : true;
      const showHit = toggles.hit ? toggles.hit.checked : true;

      labels.forEach((label) => {
        const isTextCallout = label.dataset.callout === 'text';
        const isIconCallout = label.dataset.callout === 'icon';
        const isStructurallyHidden = (kind === 'icon-only' && isTextCallout) || (kind === 'text' && isIconCallout);
        label.hidden = !showLabels || isStructurallyHidden;
      });
      measures.forEach((item) => { item.hidden = !showMeasures; });
      if (hit) hit.hidden = !showHit;
    }

    options.forEach((button) => {
      button.addEventListener('click', () => renderAnatomy(page, button.dataset.anatomyOption));
    });

    page.querySelectorAll('[data-anatomy-toggle]').forEach((control) => {
      control.addEventListener('change', () => {
        const selected = options.find((button) => button.getAttribute('aria-pressed') === 'true');
        applyVisibility(selected ? selected.dataset.anatomyOption : 'text');
      });
    });

    renderAnatomy(page, 'text');
  }

  function initPlayground(page) {
    const preview = page.querySelector('#button-playground-preview');
    const output = page.querySelector('#button-code-output');
    const copy = page.querySelector('[data-copy-button-code]');
    const tabs = [...page.querySelectorAll('[data-code-tab]')];
    let activeTab = 'html';

    if (!preview || !output || !copy || !tabs.length) return;

    page.querySelectorAll('[data-button-control]').forEach((control) => {
      control.addEventListener('input', () => renderPlayground(page));
      control.addEventListener('change', () => renderPlayground(page));
    });

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        activeTab = tab.dataset.codeTab;
        tabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
        renderPlayground(page);
      });
    });

    copy.addEventListener('click', () => copyText(output.textContent, copy));
    renderPlayground(page);
  }

  function initStaticCode(page) {
    const output = page.querySelector('#button-static-code');
    const copy = page.querySelector('[data-copy-static-code]');
    const tabs = [...page.querySelectorAll('[data-static-code-tab]')];

    if (!output || !copy || !tabs.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => renderStaticCode(page, tab.dataset.staticCodeTab));
    });

    copy.addEventListener('click', () => copyText(output.textContent, copy));
    renderStaticCode(page, 'html');
  }

  function downloadButtonAsset(type, trigger) {
    const downloads = {
      css: {
        filename: 'mp-button-core.css',
        mime: 'text/css',
        content: buttonExportCss
      },
      scss: {
        filename: '_mp-button-core.scss',
        mime: 'text/x-scss',
        content: buttonExportScss
      },
      json: {
        filename: 'mp-button-core.tokens.json',
        mime: 'application/json',
        content: `${JSON.stringify(buttonExport, null, 2)}\n`
      }
    };
    const asset = downloads[type];
    if (!asset) return;

    const blob = new Blob([asset.content], { type: `${asset.mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = asset.filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    if (trigger) {
      const original = trigger.innerHTML;
      trigger.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">check</span>Descargado';
      window.setTimeout(() => { trigger.innerHTML = original; }, 1400);
    }
  }

  function copyText(text, button) {
    const write = navigator.clipboard
      ? navigator.clipboard.writeText(text)
      : Promise.reject(new Error('Clipboard API unavailable'));

    write.then(() => {
      const original = button.innerHTML;
      button.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">check</span>Copiado';
      window.setTimeout(() => { button.innerHTML = original; }, 1400);
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    });
  }

  function bindDelegatedEvents() {
    if (document.documentElement.dataset.componentDocsDelegated === 'true') return;
    document.documentElement.dataset.componentDocsDelegated = 'true';

    document.addEventListener('click', (event) => {
      const anatomyOption = event.target.closest('[data-anatomy-option]');
      const codeTab = event.target.closest('[data-code-tab]');
      const staticCodeTab = event.target.closest('[data-static-code-tab]');
      const buttonDownload = event.target.closest('[data-button-download]');

      if (anatomyOption) {
        renderAnatomy(findButtonPage(anatomyOption), anatomyOption.dataset.anatomyOption);
      }
      if (codeTab) {
        const page = findButtonPage(codeTab);
        page.querySelectorAll('[data-code-tab]').forEach((item) => {
          item.setAttribute('aria-selected', String(item === codeTab));
        });
        renderPlayground(page);
      }
      if (staticCodeTab) {
        renderStaticCode(findButtonPage(staticCodeTab), staticCodeTab.dataset.staticCodeTab);
      }
      if (buttonDownload) {
        downloadButtonAsset(buttonDownload.dataset.buttonDownload, buttonDownload);
      }
    });

    document.addEventListener('change', (event) => {
      if (event.target.matches('[data-anatomy-toggle]')) {
        renderAnatomy(findButtonPage(event.target));
      }
      if (event.target.matches('[data-button-control]')) {
        renderPlayground(findButtonPage(event.target));
      }
    });

    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-button-control]')) {
        renderPlayground(findButtonPage(event.target));
      }
    });
  }

  return { initButtonDoc, bindDelegatedEvents, renderAnatomy, renderPlayground, downloadButtonAsset };
})();

window.componentDocs = componentDocs;

function bootComponentDocs() {
  componentDocs.bindDelegatedEvents();
  componentDocs.initButtonDoc(document);
  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => componentDocs.initButtonDoc(document));
    });
  }
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => componentDocs.initButtonDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootComponentDocs);
} else {
  bootComponentDocs();
}
