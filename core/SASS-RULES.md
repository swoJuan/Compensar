# Compensar Design System — Sass Architecture Rules

## 1. Token consumption

| Layer | Use | Never |
|---|---|---|
| Component / utility | CSS custom properties `var(--color-primary)` | Raw Sass color vars `$color-brand-80` |
| Sass mixin / function | Sass token variables `$space-16`, `$fw-bold` | Hard-coded values `16px`, `700` |
| Bootstrap overrides | Remap `--bs-*` vars to our `--color-*` vars | Edit Bootstrap source files |

**Why:** CSS custom properties change value automatically in dark/high-contrast themes. Raw Sass vars compile to static values and break theming.

---

## 2. File structure rules

- One responsibility per file. A file named `_buttons.scss` contains only button styles.
- Partials always start with `_` (underscore). Only `core.scss` and page entry points lack it.
- `abstracts/` must produce zero CSS output. If a file in `abstracts/` generates selectors, move it to `base/` or `components/`.
- Import order in `core.scss` is fixed: Abstracts → Bootstrap → Base → Components → Utils → Vendor overrides. Never reorder.

---

## 3. Naming conventions

- **Sass variables:** `$category-scale[-modifier]` — e.g. `$color-brand-80`, `$space-16`, `$fw-semibold`.
- **CSS custom properties:** `--category-concept[-state]` — e.g. `--color-text-primary`, `--shadow-md`, `--space-8`.
- **Component classes:** BEM `.block__element--modifier` with a `.mp-` prefix for design system primitives, no prefix for page-level components.
- **Utility classes:** `.u-` prefix, then the property, then the value — e.g. `.u-fw-bold`, `.u-text-center`.

---

## 4. Adding a new token

1. **Color** → add raw value to `abstracts/_tokens-colors.scss`, then add semantic alias to `base/_theme.scss` (under `:root`, `[data-theme='dark']`, and `[data-theme='high-contrast']`).
2. **Spacing** → add to `abstracts/_tokens-spacing.scss` and map it in `$spacers`. Mirror in `base/_theme.scss` as `--space-{n}`.
3. **Radius / Shadow** → add to their respective token file + `base/_theme.scss`.
4. Never add a raw value directly in a component file — it will be invisible to the token inventory.

---

## 5. Adding a new component

1. Create `core/components/_name.scss`.
2. Open with `@use` declarations (only what you need, with namespaces).
3. Consume CSS custom properties for all theming. Use Sass vars only for compile-time constants (weights, line-heights).
4. Follow BEM: `.component`, `.component__element`, `.component--modifier`.
5. Register the new file in `core.scss` under the COMPONENTS block.
6. Write the HTML example in a comment at the bottom of the file.

---

## 6. Dark / high-contrast theme

- All theme variations live exclusively in `base/_theme.scss`.
- A component never has `[data-theme='dark']` blocks — the semantic CSS vars handle it automatically.
- Exception: vendor overrides in `vendors/_bootstrap-overrides.scss` may need `[data-theme='dark']` blocks to remap Bootstrap-generated vars.

---

## 7. Responsive breakpoints

- Always use the project mixins: `@include mx.sm`, `@include mx.md`, `@include mx.lg`, `@include mx.xl`, `@include mx.mobile-only`.
- Never write raw `@media (min-width: 768px)` — it will drift from the breakpoint tokens.

---

## 8. Bootstrap interaction

- The project extends Bootstrap, it does not replace it.
- Bootstrap variables are overridden in `abstracts/_variables.scss` using `!default`. Edit only that file.
- Post-compile Bootstrap style corrections go in `vendors/_bootstrap-overrides.scss` with a comment explaining the reason.
- Never import Bootstrap inside a component partial — it is imported once in `core.scss`.

---

## 9. What NOT to do

- ❌ `color: #FF6600;` — use `var(--color-primary)`.
- ❌ `font-size: 14px;` — use `var(--font-size-sm)`.
- ❌ `margin: 16px;` — use `var(--space-16)`.
- ❌ `@media (max-width: 767px)` — use `@include mx.mobile-only`.
- ❌ Nesting deeper than 3 levels.
- ❌ Using `!important` outside `utils/` files.
- ❌ Adding new icons directly to `icon-style.css` — update IcoMoon project and regenerate the font.
