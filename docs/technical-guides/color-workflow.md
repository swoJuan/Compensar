# Color Documentation Workflow

This document is the single technical reference for how the color documentation is generated and kept in sync.

## Purpose

Keep these three things aligned at all times:

1. Source tokens from abstracts.
2. Color utility classes from utils.
3. Rendered docs and downloadable files in the Colors page.

## Source of Truth

1. Abstract color tokens:
   - core/abstracts/_tokens-colors.scss
2. Utility classes:
   - core/utils/_colors.scss

## Build Pipeline

### Step 1: Regenerate base token artifacts (when token source changes)

Run:

node scripts/generate-figma-tokens.mjs

This refreshes:

- tokens/compensar.tokens.json
- css/tokens.css
- core/abstracts/_tokens-colors.scss

### Step 2: Regenerate docs color assets

Run:

npm run docs:build

This executes scripts/generate-color-docs.mjs and refreshes:

- docs/foundations/color-tokens.css
- docs/foundations/_color-tokens.scss
- docs/foundations/color-tokens.json
- docs/foundations/colors-abstract.scss
- docs/foundations/colors-utils.scss

## Runtime Behavior in colors.html

The Colors page reads generated files first:

1. Colors tables and semantic rows are rendered from:
   - docs/foundations/colors-abstract.scss
   - docs/foundations/color-tokens.json
2. Utilities section is rendered from:
   - docs/foundations/colors-utils.scss
3. Download actions use generated files as primary source.

If generated files are missing, fallback logic keeps the page usable.

## Required Validation After Changes

1. Open docs/foundations/colors.html.
2. Confirm base, product, semantic, and utilities sections show updated values/classes.
3. Confirm download buttons generate updated files:
   - CSS
   - SCSS
   - JSON
   - Copy variables
4. Validate Light, Dark, and High Contrast values.

## Recommended Team Rule

After any change in either file below, always run npm run docs:build before commit:

- core/abstracts/_tokens-colors.scss
- core/utils/_colors.scss

## Troubleshooting

1. New utility does not appear in Utilities section:
   - Ensure class follows .bg-, .text-, or .border- prefix.
   - Run npm run docs:build again.
2. Download output looks stale:
   - Confirm generated files were refreshed in docs/foundations.
3. Semantic values do not match expected theme:
   - Verify token mode values in tokens/compensar.tokens.json.
