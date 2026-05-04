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

  const syncButtonPlaygroundTheme = (theme) => {
    const page = document.querySelector('[data-component-doc="button"]');
    if (!page) return;
    const themeControl = page.querySelector('[data-button-control="theme"]');
    if (!themeControl) return;
    themeControl.value = theme;
    componentDocs.renderPlayground(page);
  };

  document.addEventListener('ds:theme-change', (event) => {
    const theme = event?.detail?.theme || document.documentElement.getAttribute('data-theme') || 'light';
    syncButtonPlaygroundTheme(theme);
  });

  syncButtonPlaygroundTheme(document.documentElement.getAttribute('data-theme') || 'light');

  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => componentDocs.initButtonDoc(document));
    });
  }
}

document.addEventListener('component-docs:init', () => {
  window.requestAnimationFrame(() => componentDocs.initButtonDoc(document));
  window.requestAnimationFrame(() => inputDocs.initInputDoc(document));
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootComponentDocs);
} else {
  bootComponentDocs();
}

// ============================================================
//  INPUT DOCS — Playground, Anatomía, Código y Descargas
//  Paralelo a componentDocs para el componente mp-input.
// ============================================================
const inputDocs = (() => {

  // ──────────────────────────────────────────────────────────
  // Configuración de anatomía por variante
  // ──────────────────────────────────────────────────────────
  const anatomyConfig = {
    simple: {
      label: 'Simple',
      iconLeft: '',
      iconRight: '',
      tipo: 'text',
      height: '56 px',
      width: '320 px',
      padding: '16 px horizontal',
      description: 'Sin íconos · padding 16 px · altura 56 px'
    },
    'icon-left': {
      label: 'Ícono izquierdo',
      iconLeft: 'search',
      iconRight: '',
      tipo: 'text',
      height: '56 px',
      width: '320 px',
      padding: '50 px izquierda (16 + 24 + 10) · 16 px derecha',
      description: 'Ícono decorativo izquierdo · gap ícono→texto 10 px'
    },
    'icon-right': {
      label: 'Ícono derecho',
      iconLeft: '',
      iconRight: 'visibility',
      tipo: 'password',
      height: '56 px',
      width: '320 px',
      padding: '16 px izquierda · 50 px derecha (16 + 24 + 10)',
      description: 'Ícono accionable derecho · se renderiza como button'
    },
    'icon-both': {
      label: 'Íconos dobles',
      iconLeft: 'attach_money',
      iconRight: 'info',
      tipo: 'number',
      height: '56 px',
      width: '320 px',
      padding: '50 px horizontal (16 + 24 + 10) cada lado',
      description: 'Ícono contextual izquierdo + información/acción derecha'
    },
    textarea: {
      label: 'Textarea',
      iconLeft: '',
      iconRight: '',
      tipo: 'textarea',
      height: 'min 112 px',
      width: '320 px',
      padding: '8 px vertical · 16 px horizontal',
      description: 'Área de texto · resize vertical · min-height 112 px'
    },
    select: {
      label: 'Select',
      iconLeft: '',
      iconRight: 'expand_more',
      tipo: 'select',
      height: '56 px',
      width: '320 px',
      padding: '16 px izquierda · 50 px derecha (ícono expand_more)',
      description: 'Lista nativa · ícono expand_more fijo · mismo estilo que input'
    }
  };

  // ──────────────────────────────────────────────────────────
  // Código estático (sección 10)
  // ──────────────────────────────────────────────────────────
  const staticCode = {
    html: `<div class="mp-input-group">
  <label class="mp-input-label" for="inp1">Nombre</label>
  <div class="mp-input-wrapper">
    <input class="mp-input-field" id="inp1" type="text" placeholder="Tu nombre">
  </div>
  <span class="mp-input-helper">Texto de apoyo</span>
</div>`,
    variants: `<!-- Simple -->
<div class="mp-input-group">
  <label class="mp-input-label" for="i1">Label</label>
  <div class="mp-input-wrapper">
    <input class="mp-input-field" id="i1" type="text" placeholder="Placeholder">
  </div>
</div>

<!-- Ícono izquierdo -->
<div class="mp-input-group">
  <label class="mp-input-label" for="i2">Buscar</label>
  <div class="mp-input-wrapper">
    <span class="material-symbols-rounded mp-input-icon mp-input-icon--left" aria-hidden="true">search</span>
    <input class="mp-input-field has-icon-left" id="i2" type="search" placeholder="Buscar…">
  </div>
</div>

<!-- Textarea -->
<div class="mp-input-group">
  <label class="mp-input-label" for="i3">Observaciones</label>
  <div class="mp-input-wrapper">
    <textarea class="mp-input-field mp-textarea" id="i3" placeholder="Describe tu solicitud…" rows="3"></textarea>
  </div>
</div>

<!-- Select -->
<div class="mp-input-group">
  <label class="mp-input-label" for="i4">Tipo <span class="mp-input-required" aria-hidden="true">*</span></label>
  <div class="mp-input-wrapper">
    <select class="mp-input-field mp-select" id="i4">
      <option value="" disabled selected>Selecciona…</option>
      <option>Opción A</option>
      <option>Opción B</option>
    </select>
    <span class="material-symbols-rounded mp-input-icon mp-input-icon--right" aria-hidden="true">expand_more</span>
  </div>
</div>`,
    accessible: `<!-- Campo requerido con error accesible -->
<div class="mp-input-group">
  <label class="mp-input-label" for="email1">
    Correo electrónico
    <span class="mp-input-required" aria-hidden="true">*</span>
  </label>
  <div class="mp-input-wrapper">
    <span class="material-symbols-rounded mp-input-icon mp-input-icon--left" aria-hidden="true">mail</span>
    <input
      class="mp-input-field has-icon-left error"
      id="email1"
      type="email"
      required
      aria-required="true"
      aria-invalid="true"
      aria-describedby="email1-helper"
      value="usuario@">
  </div>
  <span class="mp-input-helper error" id="email1-helper">
    <span class="material-symbols-rounded" aria-hidden="true" style="font-size:16px">error</span>
    Formato inválido. Ej: usuario@compensar.com
  </span>
</div>

<!-- Contraseña con toggle accesible -->
<div class="mp-input-group">
  <label class="mp-input-label" for="pass1">Contraseña</label>
  <div class="mp-input-wrapper">
    <input class="mp-input-field has-icon-right" id="pass1" type="password"
           aria-describedby="pass1-helper">
    <button type="button"
            class="mp-input-icon mp-input-icon--right interactive"
            aria-label="Mostrar contraseña"
            onclick="this.previousElementSibling.type = this.previousElementSibling.type === 'password' ? 'text' : 'password'">
      <span class="material-symbols-rounded" aria-hidden="true">visibility</span>
    </button>
  </div>
  <span class="mp-input-helper" id="pass1-helper">Mínimo 8 caracteres</span>
</div>`
  };

  // ──────────────────────────────────────────────────────────
  // Exportables CSS/SCSS/JSON (descargas sección 10)
  // ──────────────────────────────────────────────────────────
  const inputExportMeta = {
    component: 'Input',
    cssPrefix: 'mp',
    source: 'Core + Figma Compensar v2',
    figmaNodes: ['4517:7746', '4527:13712'],
    updatedAt: '2026-05-04',
    figmaSpecs: {
      height: '56px',
      borderRadius: '16px',
      border: '1px solid',
      fontSize: '16px',
      padding: '16px',
      iconSize: '24px',
      iconPadding: '50px',
      iconGap: '10px'
    },
    tokens: {
      borderDefault: '--use-border-subtle → base-neutral-20 ≈ #e0e0e0',
      borderHover: '--use-border-hover → use-primary-hover = #e63f0c',
      borderActive: '--use-border-strong → base-neutral-70 = #666',
      borderFocus: '--use-primary-default = #ff6600',
      borderError: '--use-state-error-icon',
      borderRadius: '--radius-sm = 16px',
      background: '--use-surface-white',
      textPrimary: '--use-text-primary = #111',
      textTertiary: '--use-text-tertiary = #666 (placeholder, icons)',
      required: '--use-state-error-mandatory = #bb4945',
      focusRing: '3px · color-mix use-primary-default 18%'
    },
    classes: [
      '.mp-input-group',
      '.mp-input-label',
      '.mp-input-required',
      '.mp-input-wrapper',
      '.mp-input-field',
      '.mp-input-field.has-icon-left',
      '.mp-input-field.has-icon-right',
      '.mp-input-field.mp-textarea',
      '.mp-input-field.mp-select',
      '.mp-input-field.error',
      '.mp-input-field.success',
      '.mp-input-field.filled',
      '.mp-input-field.is-focus-demo',
      '.mp-input-icon',
      '.mp-input-icon--left',
      '.mp-input-icon--right',
      '.mp-input-icon--right.interactive',
      '.mp-input-helper',
      '.mp-input-helper.error',
      '.mp-input-helper.success'
    ],
    states: ['default', 'hover', 'focus', 'active', 'error', 'success', 'disabled']
  };

  const inputExportCss = `/* ==========================================================================
   Input - Compensar Design System
   Fuente: core/components/web/_inputs.scss + tokens Figma Compensar v2
   Figma: nodo 4517:7746
   Uso: estilos planos para dummy/demo. No contiene mixins.
   ========================================================================== */

:root,
[data-theme="light"] {
  --use-border-subtle: #e0e0e0;
  --use-border-hover: #e63f0c;
  --use-border-strong: #666666;
  --use-border-default: #d9d9d9;
  --use-primary-default: #ff6600;
  --use-surface-white: #ffffff;
  --use-surface-subtle: #f5f5f5;
  --use-text-primary: #111111;
  --use-text-tertiary: #666666;
  --use-state-error-icon: #c0392b;
  --use-state-error-text: #c0392b;
  --use-state-error-mandatory: #bb4945;
  --use-state-success-border: #27ae60;
  --use-state-success-text: #1a7a42;
  --use-focus-outline: #006fff;
}

[data-theme="dark"] {
  --use-surface-white: #292929;
  --use-text-primary: #f5f5f5;
  --use-text-tertiary: #aaaaaa;
  --use-border-subtle: rgba(255,255,255,0.18);
  --use-primary-default: #ff9d5c;
  --use-border-hover: #ff9d5c;
}

[data-theme="high-contrast"] {
  --use-surface-white: #000000;
  --use-text-primary: #ffffff;
  --use-text-tertiary: #cccccc;
  --use-border-subtle: #ffffff;
  --use-primary-default: #ffff00;
  --use-border-hover: #ffff00;
  --use-state-error-icon: #ff6666;
  --use-focus-outline: #ffff00;
}

.mp-input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.mp-input-label {
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.012em;
  color: var(--use-text-primary);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
}

.mp-input-required {
  color: var(--use-state-error-mandatory, #bb4945);
  letter-spacing: 0.02em;
}

.mp-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.mp-input-field {
  width: 100%;
  height: 56px;
  padding: 0 16px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.012em;
  line-height: 1;
  color: var(--use-text-primary);
  background: var(--use-surface-white);
  border: 1px solid var(--use-border-subtle);
  border-radius: 16px;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s;
  appearance: none;
  -webkit-appearance: none;
}

.mp-input-field::placeholder {
  color: var(--use-text-tertiary);
  opacity: 1;
}

.mp-input-field:hover:not(:disabled):not(.error):not(:focus) {
  border-color: var(--use-border-hover);
}

.mp-input-field:active:not(:disabled):not(.error) {
  border-color: var(--use-border-strong);
}

.mp-input-field:focus:not(:disabled) {
  border-color: var(--use-primary-default);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--use-primary-default) 18%, transparent);
}

.mp-input-field.error {
  border-color: var(--use-state-error-icon);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--use-state-error-icon) 15%, transparent);
}

.mp-input-field:disabled {
  background: var(--use-surface-subtle);
  color: var(--use-text-tertiary);
  border-color: var(--use-border-subtle);
  cursor: not-allowed;
  opacity: 0.65;
}

.mp-input-field.filled:not(:focus):not(.error):not(:disabled) {
  border-color: var(--use-border-default);
}

.mp-input-field.has-icon-left  { padding-left:  50px; }
.mp-input-field.has-icon-right { padding-right: 50px; }

.mp-input-field.mp-textarea {
  height: auto;
  min-height: 112px;
  padding: 8px 16px;
  resize: vertical;
  line-height: 1.6;
}

.mp-input-field.mp-select {
  padding-right: 50px;
  cursor: pointer;
  appearance: none;
}

.mp-input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--use-text-tertiary);
  font-size: 24px;
  line-height: 1;
  pointer-events: none;
  display: flex;
  align-items: center;
}

.mp-input-icon--left  { left:  12px; }
.mp-input-icon--right { right: 12px; }

.mp-input-icon--right.interactive {
  pointer-events: auto;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.15s;
}

.mp-input-icon--right.interactive:hover { color: var(--use-text-primary); }
.mp-input-icon--right.interactive:focus-visible {
  outline: 3px solid var(--use-focus-outline);
  outline-offset: 2px;
  border-radius: 4px;
}

.mp-input-helper {
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.012em;
  line-height: 1.45;
  color: var(--use-text-tertiary);
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

.mp-input-helper.error   { color: var(--use-state-error-text);   font-weight: 500; }
.mp-input-helper.success { color: var(--use-state-success-text); }

[data-theme="high-contrast"] .mp-input-field {
  border-width: 2px;
  border-color: #ffffff;
  background: #000000;
  color: #ffffff;
}

[data-theme="high-contrast"] .mp-input-field:focus:not(:disabled) {
  outline: 3px solid var(--use-focus-outline);
  outline-offset: 2px;
  box-shadow: none;
}`;

  // ──────────────────────────────────────────────────────────
  // Builders de HTML del campo
  // ──────────────────────────────────────────────────────────
  function makeInputGroup({ tipo = 'text', state = 'default', iconLeft = '', iconRight = '',
    label = 'Label', placeholder = 'Placeholder', helperText = 'Texto de apoyo', required = false } = {}) {

    const group = document.createElement('div');
    group.className = 'mp-input-group';
    group.style.cssText = 'width:100%;max-width:320px';

    // Label
    const lbl = document.createElement('label');
    lbl.className = 'mp-input-label';
    lbl.setAttribute('for', 'pg-inp-field');
    lbl.textContent = label;
    if (required) {
      const req = document.createElement('span');
      req.className = 'mp-input-required';
      req.setAttribute('aria-hidden', 'true');
      req.textContent = '*';
      lbl.appendChild(req);
    }
    group.appendChild(lbl);

    // Wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'mp-input-wrapper';

    // Ícono izquierdo
    if (iconLeft) {
      const ic = document.createElement('span');
      ic.className = 'material-symbols-rounded mp-input-icon mp-input-icon--left';
      ic.setAttribute('aria-hidden', 'true');
      ic.textContent = iconLeft;
      wrapper.appendChild(ic);
    }

    // Campo
    let field;
    const fieldClasses = ['mp-input-field'];
    if (iconLeft)  fieldClasses.push('has-icon-left');
    if (iconRight) fieldClasses.push('has-icon-right');

    if (state === 'hover')   { /* inline style */ }
    if (state === 'focus')   fieldClasses.push('is-focus-demo');
    if (state === 'error')   fieldClasses.push('error');
    if (state === 'success') fieldClasses.push('filled');

    if (tipo === 'textarea') {
      field = document.createElement('textarea');
      field.className = fieldClasses.join(' ') + ' mp-textarea';
      field.placeholder = placeholder;
      field.rows = 3;
      if (state === 'disabled') field.disabled = true;
    } else if (tipo === 'select') {
      field = document.createElement('select');
      field.className = fieldClasses.join(' ') + ' mp-select';
      const opt0 = document.createElement('option');
      opt0.value = ''; opt0.disabled = true; opt0.selected = true;
      opt0.textContent = placeholder;
      field.appendChild(opt0);
      ['Opción A', 'Opción B', 'Opción C'].forEach(o => {
        const opt = document.createElement('option');
        opt.textContent = o;
        field.appendChild(opt);
      });
      if (state === 'disabled') field.disabled = true;
    } else {
      field = document.createElement('input');
      field.className = fieldClasses.join(' ');
      field.type = tipo;
      field.placeholder = placeholder;
      field.id = 'pg-inp-field';
      if (state === 'hover')   field.style.borderColor = 'var(--use-border-hover)';
      if (state === 'error')   { field.setAttribute('aria-invalid', 'true'); field.value = 'Valor inválido'; }
      if (state === 'success') field.value = 'valor@compensar.com';
      if (state === 'disabled') field.disabled = true;
    }
    if (required) { field.setAttribute('required', ''); field.setAttribute('aria-required', 'true'); }
    if (helperText) field.setAttribute('aria-describedby', 'pg-inp-helper');

    wrapper.appendChild(field);

    // Ícono derecho
    if (iconRight) {
      const ic = document.createElement('span');
      ic.className = 'material-symbols-rounded mp-input-icon mp-input-icon--right';
      ic.setAttribute('aria-hidden', 'true');
      ic.textContent = tipo === 'select' ? 'expand_more' : iconRight;
      wrapper.appendChild(ic);
    }

    group.appendChild(wrapper);

    // Helper
    if (helperText) {
      const hlp = document.createElement('span');
      hlp.className = 'mp-input-helper' + (state === 'error' ? ' error' : state === 'success' ? ' success' : '');
      hlp.id = 'pg-inp-helper';
      if (state === 'error')   hlp.textContent = '✕ ' + (helperText || 'Mensaje de error');
      else if (state === 'success') hlp.textContent = '✓ ' + helperText;
      else hlp.textContent = helperText;
      group.appendChild(hlp);
    }

    return group;
  }

  function inputHtml({ tipo, state, iconLeft, iconRight, label, placeholder, helperText, required }) {
    const id = 'inp1';
    const helpId = 'inp1-helper';
    const fieldClasses = ['mp-input-field'];
    if (iconLeft)  fieldClasses.push('has-icon-left');
    if (iconRight) fieldClasses.push('has-icon-right');
    if (state === 'focus')   fieldClasses.push('is-focus-demo');
    if (state === 'error')   fieldClasses.push('error');
    if (state === 'success') fieldClasses.push('filled');
    if (tipo === 'textarea') fieldClasses.push('mp-textarea');
    if (tipo === 'select')   fieldClasses.push('mp-select');

    const labelRequired = required ? `\n    <span class="mp-input-required" aria-hidden="true">*</span>` : '';
    const ariaInvalid    = state === 'error' ? '\n       aria-invalid="true"' : '';
    const ariaReq        = required ? '\n       required aria-required="true"' : '';
    const ariaDescribedby = helperText ? `\n       aria-describedby="${helpId}"` : '';
    const disabledAttr   = state === 'disabled' ? '\n       disabled' : '';

    const iconLeftHtml = iconLeft
      ? `\n    <span class="material-symbols-rounded mp-input-icon mp-input-icon--left" aria-hidden="true">${iconLeft}</span>`
      : '';
    const iconRightHtml = iconRight
      ? `\n    <span class="material-symbols-rounded mp-input-icon mp-input-icon--right" aria-hidden="true">${iconRight}</span>`
      : '';

    let fieldHtml = '';
    if (tipo === 'textarea') {
      fieldHtml = `\n    <textarea class="${fieldClasses.join(' ')}" id="${id}"${ariaDescribedby}${ariaReq}${ariaInvalid}${disabledAttr}\n             placeholder="${placeholder}" rows="3"></textarea>`;
    } else if (tipo === 'select') {
      fieldHtml = `\n    <select class="${fieldClasses.join(' ')}" id="${id}"${ariaDescribedby}${ariaReq}${ariaInvalid}${disabledAttr}>
      <option value="" disabled selected>${placeholder}</option>
      <option>Opción A</option>
      <option>Opción B</option>
    </select>${iconRightHtml}`;
    } else {
      fieldHtml = `\n    <input class="${fieldClasses.join(' ')}" id="${id}" type="${tipo}"${ariaDescribedby}${ariaReq}${ariaInvalid}${disabledAttr}\n           placeholder="${placeholder}">${iconRightHtml}`;
    }

    const helperClass = state === 'error' ? ' error' : state === 'success' ? ' success' : '';
    const helperHtml = helperText
      ? `\n  <span class="mp-input-helper${helperClass}" id="${helpId}">${helperText}</span>`
      : '';

    return `<div class="mp-input-group">
  <label class="mp-input-label" for="${id}">${label}${labelRequired}
  </label>
  <div class="mp-input-wrapper">${iconLeftHtml}${fieldHtml}
  </div>${helperHtml}
</div>`;
  }

  function cssClassesFor({ tipo, state, iconLeft, iconRight, theme }) {
    const classes = ['mp-input-field'];
    if (iconLeft)  classes.push('has-icon-left');
    if (iconRight) classes.push('has-icon-right');
    if (tipo === 'textarea') classes.push('mp-textarea');
    if (tipo === 'select')   classes.push('mp-select');
    if (state === 'error')   classes.push('error');
    if (state === 'success') classes.push('filled');
    if (theme !== 'light')   classes.push(`/* [data-theme="${theme}"] */`);
    return classes.join('\n');
  }

  function tokensFor({ theme }) {
    const base = `height: 56px
padding: 16px horizontal
border-radius: 16px (--radius-sm)
border: 1px solid var(--use-border-subtle)
font-size: 16px Roboto
icon-size: 24px
icon-padding: 50px (16 + 24 + 10)`;
    if (theme === 'dark') return base + `

theme: dark
--use-surface-white: #292929
--use-text-primary: #f5f5f5
--use-primary-default: #ff9d5c`;
    if (theme === 'high-contrast') return base + `

theme: high-contrast
--use-surface-white: #000000
--use-text-primary: #ffffff
--use-primary-default: #ffff00
--use-border-subtle: #ffffff`;
    return base + `

theme: light
--use-border-subtle: #e0e0e0
--use-border-hover: #e63f0c (use-primary-hover)
--use-border-strong: #666666
--use-primary-default: #ff6600 (focus + ring)`;
  }

  // ──────────────────────────────────────────────────────────
  // Estado del playground
  // ──────────────────────────────────────────────────────────
  function getPlaygroundState(page) {
    return {
      tipo:        page.querySelector('[data-inp-control="tipo"]')?.value       || 'text',
      state:       page.querySelector('[data-inp-control="state"]')?.value      || 'default',
      iconLeft:    page.querySelector('[data-inp-control="iconLeft"]')?.value   || '',
      iconRight:   page.querySelector('[data-inp-control="iconRight"]')?.value  || '',
      theme:       page.querySelector('[data-inp-control="theme"]')?.value      || 'light',
      label:       page.querySelector('[data-inp-control="label"]')?.value      || 'Label',
      placeholder: page.querySelector('[data-inp-control="placeholder"]')?.value || 'Placeholder',
      helperText:  page.querySelector('[data-inp-control="helperText"]')?.value || 'Texto de apoyo',
      required:    page.querySelector('[data-inp-control="required"]')?.checked || false
    };
  }

  // ──────────────────────────────────────────────────────────
  // Render playground
  // ──────────────────────────────────────────────────────────
  function renderPlayground(page) {
    const preview  = page.querySelector('#inp-playground-preview');
    const output   = page.querySelector('#inp-code-output');
    const activeTab = page.querySelector('[data-inp-code-tab][aria-selected="true"]')?.dataset.inpCodeTab || 'html';
    if (!preview || !output) return;

    const s = getPlaygroundState(page);
    preview.dataset.theme = s.theme;

    preview.replaceChildren(makeInputGroup(s));

    if (activeTab === 'css')    output.textContent = cssClassesFor(s);
    else if (activeTab === 'tokens') output.textContent = tokensFor(s);
    else output.textContent = inputHtml(s);
  }

  // ──────────────────────────────────────────────────────────
  // Render código estático
  // ──────────────────────────────────────────────────────────
  function renderStaticCode(page, key = 'html') {
    const output = page.querySelector('#inp-static-code');
    const tabs   = [...page.querySelectorAll('[data-inp-static-code-tab]')];
    if (!output || !tabs.length) return;
    output.textContent = staticCode[key] || staticCode.html;
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.inpStaticCodeTab === key)));
  }

  // ──────────────────────────────────────────────────────────
  // Render anatomía
  // ──────────────────────────────────────────────────────────
  function renderAnatomy(page, variant) {
    const options    = [...page.querySelectorAll('[data-inp-anatomy-option]')];
    const preview    = page.querySelector('#inp-anatomy-preview');
    const height     = page.querySelector('[data-inp-anatomy-height]');
    const width      = page.querySelector('[data-inp-anatomy-width]');
    const paddingEl  = page.querySelector('[data-inp-anatomy-padding]');
    const callouts   = [...page.querySelectorAll('[data-inp-callout]')];
    const measures   = [...page.querySelectorAll('.inp-doc-measure')];
    const showLabels  = page.querySelector('[data-inp-anatomy-toggle="labels"]')?.checked ?? true;
    const showMeasures = page.querySelector('[data-inp-anatomy-toggle="measures"]')?.checked ?? true;

    const selected = variant || options.find(b => b.getAttribute('aria-pressed') === 'true')?.dataset.inpAnatomyOption || 'simple';
    const cfg = anatomyConfig[selected] || anatomyConfig.simple;

    options.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.inpAnatomyOption === selected)));

    if (height) height.textContent = cfg.height;
    if (width)  width.textContent  = cfg.width;
    if (paddingEl) paddingEl.textContent = cfg.padding;

    // Toggle callouts
    callouts.forEach(c => {
      const key = c.dataset.inpCallout;
      const isIconCallout = key === 'icon';
      const hasIcon = cfg.iconLeft || cfg.iconRight;
      c.hidden = !showLabels || (isIconCallout && !hasIcon);
    });
    measures.forEach(m => { m.hidden = !showMeasures; });

    // Rebuild preview
    if (!preview) return;
    const group = document.createElement('div');
    group.className = 'mp-input-group';

    const lbl = document.createElement('label');
    lbl.className = 'mp-input-label';
    lbl.innerHTML = 'Label <span class="mp-input-required" aria-hidden="true">*</span>';
    group.appendChild(lbl);

    const wrapper = document.createElement('div');
    wrapper.className = 'mp-input-wrapper';

    if (cfg.iconLeft) {
      const ic = document.createElement('span');
      ic.className = 'material-symbols-rounded mp-input-icon mp-input-icon--left';
      ic.setAttribute('aria-hidden', 'true');
      ic.textContent = cfg.iconLeft;
      wrapper.appendChild(ic);
    }

    if (cfg.tipo === 'textarea') {
      const ta = document.createElement('textarea');
      ta.className = 'mp-input-field mp-textarea';
      ta.placeholder = 'Placeholder';
      ta.rows = 3;
      wrapper.appendChild(ta);
    } else if (cfg.tipo === 'select') {
      const sel = document.createElement('select');
      sel.className = 'mp-input-field mp-select';
      const opt = document.createElement('option');
      opt.textContent = 'Selecciona una opción'; opt.disabled = true; opt.selected = true;
      sel.appendChild(opt);
      ['Opción A', 'Opción B'].forEach(o => {
        const op = document.createElement('option'); op.textContent = o; sel.appendChild(op);
      });
      wrapper.appendChild(sel);
    } else {
      const inp = document.createElement('input');
      inp.className = 'mp-input-field' + (cfg.iconLeft ? ' has-icon-left' : '') + (cfg.iconRight ? ' has-icon-right' : '');
      inp.type = cfg.tipo;
      inp.placeholder = 'Placeholder';
      wrapper.appendChild(inp);
    }

    if (cfg.iconRight) {
      const ic = document.createElement('span');
      ic.className = 'material-symbols-rounded mp-input-icon mp-input-icon--right';
      ic.setAttribute('aria-hidden', 'true');
      ic.textContent = cfg.iconRight;
      wrapper.appendChild(ic);
    }

    group.appendChild(wrapper);

    const helper = document.createElement('span');
    helper.className = 'mp-input-helper';
    helper.textContent = 'Texto de apoyo';
    group.appendChild(helper);

    preview.replaceChildren(group);
  }

  // ──────────────────────────────────────────────────────────
  // Descargas
  // ──────────────────────────────────────────────────────────
  function downloadInputAsset(type, trigger) {
    const assets = {
      css: {
        filename: 'mp-input-core.css',
        mime: 'text/css',
        content: inputExportCss
      },
      scss: {
        filename: '_mp-input-core.scss',
        mime: 'text/x-scss',
        content: `// Input - Compensar Design System
// Figma: nodo 4517:7746
// Uso: plano para dummy/demo.
${inputExportCss}`
      },
      json: {
        filename: 'mp-input-core.tokens.json',
        mime: 'application/json',
        content: JSON.stringify(inputExportMeta, null, 2) + '\n'
      }
    };
    const asset = assets[type];
    if (!asset) return;

    const blob = new Blob([asset.content], { type: `${asset.mime};charset=utf-8` });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = asset.filename;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);

    if (trigger) {
      const orig = trigger.innerHTML;
      trigger.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">check</span>Descargado';
      setTimeout(() => { trigger.innerHTML = orig; }, 1400);
    }
  }

  // ──────────────────────────────────────────────────────────
  // Copy helper
  // ──────────────────────────────────────────────────────────
  function copyText(text, btn) {
    const write = navigator.clipboard
      ? navigator.clipboard.writeText(text)
      : Promise.reject();
    write.then(() => flashCopied(btn)).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      flashCopied(btn);
    });
  }

  function flashCopied(btn) {
    if (!btn) return;
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">check</span>Copiado';
    setTimeout(() => { btn.innerHTML = orig; }, 1400);
  }

  // ──────────────────────────────────────────────────────────
  // Init
  // ──────────────────────────────────────────────────────────
  function initInputDoc(root = document) {
    const page = root.querySelector('[data-component-doc="input"]');
    if (!page || page.dataset.inputInitialized === 'true') return;

    try {
      // Anatomía
      page.querySelectorAll('[data-inp-anatomy-option]').forEach(btn => {
        btn.addEventListener('click', () => renderAnatomy(page, btn.dataset.inpAnatomyOption));
      });
      page.querySelectorAll('[data-inp-anatomy-toggle]').forEach(ctrl => {
        ctrl.addEventListener('change', () => renderAnatomy(page));
      });
      renderAnatomy(page, 'simple');

      // Playground controles
      page.querySelectorAll('[data-inp-control]').forEach(ctrl => {
        ctrl.addEventListener('input',  () => renderPlayground(page));
        ctrl.addEventListener('change', () => renderPlayground(page));
      });

      // Playground tabs de código
      page.querySelectorAll('[data-inp-code-tab]').forEach(tab => {
        tab.addEventListener('click', () => {
          page.querySelectorAll('[data-inp-code-tab]').forEach(t =>
            t.setAttribute('aria-selected', String(t === tab))
          );
          renderPlayground(page);
        });
      });

      // Copy playground
      const copyPG = page.querySelector('[data-inp-copy-playground]');
      if (copyPG) {
        copyPG.addEventListener('click', () => {
          copyText(page.querySelector('#inp-code-output')?.textContent || '', copyPG);
        });
      }

      renderPlayground(page);

      // Código estático tabs
      page.querySelectorAll('[data-inp-static-code-tab]').forEach(tab => {
        tab.addEventListener('click', () => renderStaticCode(page, tab.dataset.inpStaticCodeTab));
      });

      // Copy estático
      const copyStatic = page.querySelector('[data-inp-copy-static]');
      if (copyStatic) {
        copyStatic.addEventListener('click', () => {
          copyText(page.querySelector('#inp-static-code')?.textContent || '', copyStatic);
        });
      }

      renderStaticCode(page, 'html');

      page.dataset.inputInitialized = 'true';
    } catch (e) {
      console.error('No se pudo inicializar la documentación del input.', e);
    }
  }

  // Delegación global para downloads
  function bindInputDelegated() {
    if (document.documentElement.dataset.inputDocsDelegated === 'true') return;
    document.documentElement.dataset.inputDocsDelegated = 'true';

    document.addEventListener('click', e => {
      const dl = e.target.closest('[data-inp-download]');
      if (dl) downloadInputAsset(dl.dataset.inpDownload, dl);
    });
  }

  return { initInputDoc, bindInputDelegated };
})();

window.inputDocs = inputDocs;

// Boot input docs junto con el boot principal
(function bootInputDocs() {
  inputDocs.bindInputDelegated();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => inputDocs.initInputDoc(document));
  } else {
    inputDocs.initInputDoc(document);
  }
  if (typeof router !== 'undefined') {
    router.on('navigate', () => {
      window.requestAnimationFrame(() => inputDocs.initInputDoc(document));
    });
  }
})();
