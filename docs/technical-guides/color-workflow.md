# Color Documentation Workflow

This document is the single technical reference for how the color documentation and downloads stay in sync.

## Purpose

Keep one source of truth for color tokens and utility classes.

## Source Of Truth

The Colors page reads these live core files directly:

- `core/abstracts/_tokens-colors.scss`
- `core/utils/_colors.scss`

Do not maintain copied color download files inside `docs/foundations`.

## Runtime Behavior In `colors.html`

The Colors page fetches the core files directly:

1. Token tables are rendered from `core/abstracts/_tokens-colors.scss`.
2. Utility sections are rendered from `core/utils/_colors.scss`.
3. Download buttons generate files in the browser from those two files:
   - CSS
   - SCSS
   - JSON
   - Copy variables

This means changes in the two core SCSS files are reflected after refreshing the portal page.

## Validation Command

Run:

```bash
npm run docs:build
```

This no longer generates copied files. It validates that the two core color sources exist and reports the number of color tokens and utility classes found.

## Required Validation After Changes

1. Update only the source files:
   - `core/abstracts/_tokens-colors.scss`
   - `core/utils/_colors.scss`
2. Refresh `docs/foundations/colors.html` in the browser.
3. Confirm base, product, semantic, and utilities sections show updated values/classes.
4. Confirm download buttons generate updated files:
   - CSS
   - SCSS
   - JSON
   - Copy variables

## Troubleshooting

1. New utility does not appear:
   - Ensure the class follows `.bg-*`, `.text-*`, or `.border-*`.
   - Refresh the Colors page.
2. Download output looks stale:
   - Confirm the browser is not caching aggressively.
   - Reload the page.
3. Token does not appear:
   - Confirm it is declared in `core/abstracts/_tokens-colors.scss` as a Sass variable with a color-like value: `#...` or `var(--...)`.
