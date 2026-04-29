# Compensar Design System

**Version:** 2.1.0  
**Status:** Production-ready  
**Updated:** April 2026

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Architecture](#architecture)
3. [For Developers](#for-developers)
4. [For QA](#for-qa)
5. [Project Structure](#project-structure)
6. [Sass as Source of Truth](#sass-as-source-of-truth)
7. [Component Development](#component-development)
8. [Theme System](#theme-system)
9. [Contributing](#contributing)

---

## 🚀 Quick Start

### Installation

```bash
npm install
```

Node.js >= 18.0.0 is required.

### Development Mode

```bash
npm run dev
```

This starts a Sass watcher in expanded mode with source maps. Open `design-system.html` in your browser.

### Build for Production

```bash
npm run build
```

Generates minified CSS in `css/core.css`.

### Serve Locally

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using VS Code Live Server extension
# Open index.html or design-system.html and start live server
```

Then navigate to: `http://localhost:8000/design-system.html`

---

## 🏗️ Architecture

### Core Philosophy

**Sass is the source of truth.**

- All design tokens (colors, spacing, typography, shadows, radius) are defined in Sass
- CSS custom properties (`--color-*`, `--space-*`) are generated from Sass and injected into `:root` in `base/_theme.scss`
- Components consume CSS custom properties, not hardcoded values
- This approach enables automatic theme switching (light, dark, high-contrast) without per-component logic

### File Organization

```
core/
├── abstracts/              # Sass variables, functions, mixins (NO CSS output)
│   ├── _tokens-*.scss      # Color, spacing, typography, radius, shadows
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _variables.scss     # Bootstrap overrides
├── base/                   # Global styles (reset, theme, typography)
│   ├── _theme.scss         # Theme tokens (:root, [data-theme='dark'], etc)
│   ├── _reset.scss
│   ├── _typography.scss
│   ├── _icons.scss
│   └── _accessibility.scss
├── components/             # Reusable UI patterns
│   ├── web/                # Web-specific components
│   │   ├── _buttons.scss
│   │   ├── _inputs.scss
│   │   ├── _alerts.scss
│   │   ├── _cards.scss
│   │   ├── _tables.scss
│   │   └── _index.scss
│   └── app/                # App-specific variants (iOS/Android)
│       └── _index.scss
├── utils/                  # Atomic utility classes (.u-*, .p-*, etc)
│   ├── _spacing.scss
│   ├── _colors.scss
│   ├── _typography.scss
│   └── _display.scss
├── vendors/                # 3rd-party overrides
│   ├── _bootstrap-overrides.scss
│   └── _google-icons.scss
└── core.scss               # Main entry point (imports everything in order)

css/
├── core.css                # Generated from core.scss
├── main.css                # Shell layout styles (design system UI)
└── tokens.css              # Generated CSS custom properties

js/
├── router.js               # Fragment loader + navigation
├── theme.js                # Theme switcher + persistence
└── code-copy.js            # Code block interactions

docs/
├── intro.html              # Shared: introduction
├── principles.html         # Shared: design principles
├── fundamentos/            # Shared: tokens (colors, typography, spacing, etc)
│   ├── colors.html
│   ├── typography.html
│   ├── spacing.html
│   ├── layout.html
│   ├── shadows.html
├── web/
│   └── components/         # Web component documentation
│       ├── buttons.html
│       ├── inputs.html
│       ├── alerts.html
│       ├── cards.html
│       ├── tables.html
│       ├── badges.html
│       └── icons-*.html
├── app/
│   ├── intro.html          # App-specific introduction
│   ├── fundamentos/        # App-specific token variations (if any)
│   └── components/         # App-specific components (future)
├── tokens/                 # Token reference tables
│   ├── tokens-tables.html
│   └── tokens-text.html
└── qa/
    └── checklist.html      # QA validation checklist

design-system.html          # Main shell (router, theme switcher, sidebar nav)
index.html                  # Landing page / entry point
app.html                    # (legacy) App-specific DS
drupal.html                 # (legacy) Drupal-specific DS
```

### Rendering Flow

```
design-system.html
    ↓ (loads on DOMContentLoaded)
theme.js → Initializes theme from localStorage or system preference
    ↓
router.js → Parses URL hash, loads fragment dynamically
    ↓
docs/*.html → Rendered into #main-content
    ↓
User interacts → code-copy.js handles tab switching and code copying
```

---

## 💻 For Developers

### Running Sass

**Watch Mode (Development):**
```bash
npm run dev
```
Outputs to `css/core.css` in expanded format with source maps.

**Build Mode (Production):**
```bash
npm run build
```
Outputs minified CSS to `css/core.css`.

### Adding a New Component

1. **Create the Sass file** in the correct platform folder:
   ```bash
   # Web component
   core/components/web/_my-component.scss
   
   # App component
   core/components/app/_my-component.scss
   ```

2. **Follow the pattern** from [core/EXAMPLE-component.scss](core/EXAMPLE-component.scss):
   ```scss
   @use '../../abstracts/mixins'           as *;
   @use '../../abstracts/tokens-spacing'   as *;
   @use '../../abstracts/tokens-radius'    as *;

   .my-component {
     display: flex;
     padding: $space-16;
     background: var(--color-surface-default);
     border-radius: $radius-md;
     transition: background 0.15s ease;
   }

   .my-component:hover {
     background: var(--color-surface-hover);
   }
   ```

3. **Register in the component index file**:
   ```scss
   // core/components/web/_index.scss
   @forward 'my-component';
   ```

4. **Document the component** in docs:
   ```bash
   docs/web/components/my-component.html
   ```
   Include: description, when to use, HTML example, states, accessibility notes.

5. **Test the theme**:
   - Verify light, dark, and high-contrast modes work
   - Use `data-theme="dark"` attribute on `<html>` to test

### Modifying Tokens

**Colors:**
1. Add raw value to `core/abstracts/_tokens-colors.scss`
2. Add semantic alias to `core/base/_theme.scss` in `:root`, `[data-theme='dark']`, and `[data-theme='high-contrast']`

**Spacing, Radius, Shadows:**
1. Add to `core/abstracts/_tokens-[type].scss`
2. Add CSS custom property to `core/base/_theme.scss`

**Typography:**
1. Add font variables to `core/abstracts/_tokens-typography.scss`
2. Create mixin in `core/abstracts/_mixins.scss` if needed

### Bootstrap Integration

The project extends Bootstrap 5, it does not replace it.

**To override Bootstrap:** Edit `core/abstracts/_variables.scss` (e.g., `$primary`, `$font-size-base`)

**To fix Bootstrap output:** Use `core/vendors/_bootstrap-overrides.scss` with a comment explaining the fix.

**Never:** Import Bootstrap inside a component partial or edit Bootstrap source files.

### Import Rules

Follow this order in `core.scss`:

```scss
// 1. Abstracts (tokens, functions, mixins, variables)
@use 'abstracts/...';

// 2. Bootstrap
@use 'bootstrap/scss/...';

// 3. Base (global styles, theme)
@use 'base/...';

// 4. Components (platform-specific)
@use 'components/web';
@use 'components/app';

// 5. Utils (atomic classes)
@use 'utils/...';

// 6. Vendor overrides
@use 'vendors/...';
```

### Code Quality

- **No nesting deeper than 3 levels**
- **No hardcoded values** (use tokens)
- **No `!important` outside `utils/`**
- **BEM naming:** `.component__element--modifier` with `.mp-` prefix for design system primitives
- **Mobile-first responsive design:** Use mixins from `_mixins.scss`
  ```scss
  @include mx.md { /* styles for 768px+ */ }
  @include mx.lg { /* styles for 992px+ */ }
  ```

---

## 🧪 For QA

### Accessing the Design System

**Live:** `design-system.html` → Sidebar navigation with all sections

**Navigation:**
- **Inicio** → Introduction & Principles
- **Fundamentos** → Design tokens (colors, typography, spacing, layout, shadows, radius)
- **Web** → Web components (buttons, inputs, alerts, cards, tables, badges, icons)
- **App** → App components (iOS/Android specific)
- **QA** → Validation checklist

### Testing Checklist

Use the **QA Checklist** in the sidebar to validate:
- ✓ Light / Dark / High-Contrast themes render correctly
- ✓ Buttons, inputs, alerts, cards, tables display properly
- ✓ Focus states are visible (keyboard navigation)
- ✓ Contrast meets WCAG AA
- ✓ Responsive breakpoints work (mobile, tablet, desktop)
- ✓ Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

### Theme Testing

**Light Mode:**
- Default mode
- Backgrounds: white/light gray
- Text: dark

**Dark Mode:**
- Click 🌙 in header
- Backgrounds: dark gray/charcoal
- Text: light/white
- Persists to localStorage

**High Contrast Mode:**
- Click ◑ in header
- Backgrounds: pure black
- Text: pure white
- Visible white borders on containers
- No image filters

### Accessibility Testing

**Keyboard Navigation:**
1. Press `Tab` to navigate interactive elements
2. Verify focus ring is clearly visible
3. Test `Enter`, `Escape`, `Arrow keys` in components

**Screen Reader:**
- Test with NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
- Verify semantic HTML (buttons are `<button>`, not `<div>`)
- Check `aria-label` and `role` attributes where needed

**Contrast:**
- Use browser DevTools to check contrast ratios
- Ensure text meets WCAG AA (4.5:1 for normal, 3:1 for large)

### Component States

For each component, test:
- **Rest state** → Default appearance
- **Hover state** → On mouse over (desktop)
- **Focus state** → On keyboard focus (Tab key)
- **Active/Pressed state** → While interacting
- **Disabled state** → `disabled` attribute or `.disabled` class
- **Loading state** → If applicable (spinners, etc)
- **Error state** → Validation feedback
- **Success state** → Confirmation feedback

### Responsive Testing

Test at these breakpoints:
- **Mobile:** < 480px (viewport width)
- **Tablet:** 480px – 768px
- **Desktop:** > 768px

Use browser DevTools Device Emulation or actual devices.

### Reporting Issues

Document bugs with:
1. **Component name** (e.g., "Button > Primary")
2. **Browser & OS** (Chrome 130 on macOS 14.6)
3. **Steps to reproduce**
4. **Expected vs. actual behavior**
5. **Screenshot or screen recording**
6. **Theme mode** (light/dark/high-contrast)

---

## 🎨 Theme System

The design system supports **3 themes** that are automatically applied via `data-theme` attribute on `<html>`:

### Light Mode (default)
```html
<html data-theme="light">
```

### Dark Mode
```html
<html data-theme="dark">
```
CSS variables in `base/_theme.scss`:
```scss
[data-theme='dark'] {
  --color-text: #fff;
  --color-bg: #1a1a1a;
  --color-surface: #2a2a2a;
  --color-border: #444;
  // ... more overrides
}
```

### High Contrast Mode
```html
<html data-theme="high-contrast">
```
Designed for accessibility:
- Pure black backgrounds
- Pure white text
- Visible white borders
- No opacity effects

**Important:** Components never have `[data-theme='dark']` selectors. They consume CSS variables that are already theme-aware.

---

## 🛠️ Sass Rules Summary

From [core/SASS-RULES.md](core/SASS-RULES.md):

| Rule | ❌ Don't | ✅ Do |
|------|---------|------|
| Colors | `color: #FF6600;` | `color: var(--color-primary);` |
| Spacing | `margin: 16px;` | `margin: var(--space-16);` |
| Typography | `font-size: 14px;` | `font-size: var(--font-size-sm);` |
| Responsive | `@media (min-width: 768px)` | `@include mx.md { }` |
| Nesting | > 3 levels deep | ≤ 3 levels deep |
| Bootstrap | Edit source | Use `_variables.scss` overrides |
| Icons | Hardcode paths | Use generated `_icons.scss` |

---

## 🔧 Component Development

### Shell Structure (All Docs)

Docs should contain **only the content**, not full HTML structure:

✅ **Correct:**
```html
<!-- docs/web/components/buttons.html -->
<div class="section-header">
  <h1>Botones</h1>
  <p>Botones primarios, secundarios, ghost</p>
</div>

<div class="mp-buttons-demo">
  <!-- Component examples -->
</div>
```

❌ **Incorrect (don't do this):**
```html
<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="..."></head>
<body>
  <!-- This duplicates the shell -->
</body>
</html>
```

### Code Block in Docs

For showing code examples:

```html
<div class="code-block">
  <div class="code-tabs">
    <button class="code-tab active" onclick="codeCopy.switchTab(this, 'code-html')">HTML</button>
    <button class="code-tab" onclick="codeCopy.switchTab(this, 'code-css')">CSS</button>
    <button class="code-copy-btn" onclick="codeCopy.copy(this)">
      📋 Copiar
    </button>
  </div>
  <div class="code-content">
    <pre id="code-html" class="active"><code>&lt;button class="btn btn-primary"&gt;Aceptar&lt;/button&gt;</code></pre>
    <pre id="code-css"><code>.btn-primary { background: var(--color-primary); }</code></pre>
  </div>
</div>
```

---

## 📦 Project Scripts

```bash
npm run sass:dev       # Watch + source maps (dev)
npm run sass:watch    # Watch expanded (dev)
npm run sass:build    # Minified (production)
npm run dev           # Alias: sass:watch
npm run build         # Alias: sass:build
```

---

## 🚢 Deployment

1. Run `npm run build` to generate production CSS
2. Commit all files (HTML, SCSS, JS, CSS, assets)
3. Server hosting can be static (any web server)
4. No build step required at runtime — all compiling happens locally
5. Share as a ZIP or deploy to a CDN/static host

---

## 📝 Contributing

### Adding a New Section

1. Create fragment in appropriate folder: `docs/{web,app,fundamentos}/*.html`
2. Add entry to `router.js`
3. Update this README if needed

### Adding a New Component

1. Create Sass file: `core/components/{web,app}/_name.scss`
2. Register in `_index.scss`
3. Create documentation: `docs/{web,app}/components/name.html`
4. Update router.js navigation map
5. Verify all themes work
6. Add QA tests to checklist

### Code Submission

- Follow Sass rules from [core/SASS-RULES.md](core/SASS-RULES.md)
- Test in all 3 themes
- Test keyboard navigation and contrast
- Document with HTML comments where complex logic exists

---

## 🔗 References

- [Sass Documentation](https://sass-lang.com)
- [Bootstrap 5 Docs](https://getbootstrap.com)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Questions?** Review [core/SASS-RULES.md](core/SASS-RULES.md) for detailed architecture rules.
