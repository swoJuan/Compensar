import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const sourceDir = '/Users/juan.soto/Downloads/Compensar MP';
const modes = [
  ['light', 'Light.tokens.json', ':root,\n[data-theme="light"]'],
  ['dark', 'Dark.tokens.json', '[data-theme="dark"]'],
  ['highContrast', 'High Contrast.tokens.json', '[data-theme="high-contrast"]'],
];

const sourceFiles = Object.fromEntries(
  modes.map(([mode, filename]) => [mode, path.join(sourceDir, filename)]),
);

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function kebab(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function tokenName(pathParts) {
  return `--${pathParts.map(kebab).filter(Boolean).join('-')}`;
}

function sassName(pathParts) {
  return `$${pathParts.map(kebab).filter(Boolean).join('-')}`;
}

function flattenTokens(input, pathParts = [], output = []) {
  if (input && typeof input === 'object' && '$type' in input && '$value' in input) {
    output.push({
      path: pathParts,
      pathName: pathParts.join('/'),
      cssName: tokenName(pathParts),
      sassName: sassName(pathParts),
      type: input.$type,
      value: input.$value,
    });
    return output;
  }

  if (!input || typeof input !== 'object') return output;

  for (const [key, value] of Object.entries(input)) {
    if (key.startsWith('$')) continue;
    flattenTokens(value, [...pathParts, key], output);
  }

  return output;
}

function cssNameFromReference(reference) {
  return tokenName(reference.split('.'));
}

function formatCssValue(token) {
  const { type, value, path: tokenPath } = token;

  if (type === 'color') {
    if (value && typeof value === 'object' && typeof value.hex === 'string') {
      return value.hex.toLowerCase();
    }
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      return `var(${cssNameFromReference(value.slice(1, -1))})`;
    }
  }

  if (type === 'number') {
    const numeric = Number(value);
    const needsPx = tokenPath[0] === 'spacing' || tokenPath[0] === 'border-radius';
    return needsPx ? `${numeric}px` : String(numeric);
  }

  if (type === 'string') {
    if (tokenPath[0] === 'spacing' || tokenPath[0] === 'border-radius') {
      const numeric = Number(value);
      if (Number.isFinite(numeric)) return `${numeric}px`;
    }
    return String(value);
  }

  return String(value);
}

function formatSassValue(token) {
  const value = formatCssValue(token);
  if (value.startsWith('var(')) return value.replace(/^var\((--[^)]+)\)$/, 'var($1)');
  if (/^[a-zA-Z].*\s/.test(value)) return JSON.stringify(value);
  return value;
}

const modeTokens = Object.fromEntries(
  modes.map(([mode]) => [mode, flattenTokens(readJson(sourceFiles[mode]))]),
);

const basePaths = modeTokens.light.map(token => token.pathName);
for (const [mode, tokens] of Object.entries(modeTokens)) {
  const modePaths = tokens.map(token => token.pathName);
  const missing = basePaths.filter(name => !modePaths.includes(name));
  const extra = modePaths.filter(name => !basePaths.includes(name));
  if (missing.length || extra.length) {
    throw new Error(`Token shape mismatch in ${mode}. Missing: ${missing.join(', ')} Extra: ${extra.join(', ')}`);
  }
}

const tokensByPath = Object.fromEntries(
  modeTokens.light.map(token => [token.pathName, token]),
);

const normalized = {};
for (const pathName of basePaths) {
  const lightToken = tokensByPath[pathName];
  normalized[pathName] = {
    css: lightToken.cssName,
    sass: lightToken.sassName,
    type: lightToken.type,
    modes: Object.fromEntries(
      Object.entries(modeTokens).map(([mode, tokens]) => {
        const token = tokens.find(item => item.pathName === pathName);
        return [mode, formatCssValue(token)];
      }),
    ),
  };
}

function sectionTitle(title) {
  return `\n  /* ${title} */`;
}

function groupByTopLevel(tokens) {
  return tokens.reduce((acc, token) => {
    const group = token.path[0];
    acc[group] ||= [];
    acc[group].push(token);
    return acc;
  }, {});
}

function buildCss() {
  const lines = [
    '/* ============================================================',
    '   Compensar MP tokens',
    '   Generated from Figma token exports. Do not edit by hand.',
    '   Source: /Users/juan.soto/Downloads/Compensar MP/*.tokens.json',
    '   ============================================================ */',
    '',
  ];

  for (const [mode, , selector] of modes) {
    lines.push(`${selector} {`);
    const grouped = groupByTopLevel(modeTokens[mode]);
    for (const [group, tokens] of Object.entries(grouped)) {
      lines.push(sectionTitle(group));
      for (const token of tokens) {
        lines.push(`  ${token.cssName}: ${formatCssValue(token)};`);
      }
    }
    lines.push('}', '');
  }

  return `${lines.join('\n')}\n`;
}

function buildSass(partFilter, bannerName, footer = '') {
  const tokens = modeTokens.light.filter(token => partFilter(token.path));
  const lines = [
    '// ============================================================',
    `//  ${bannerName}`,
    '//  Generated from Figma token exports. Do not edit by hand.',
    '// ============================================================',
    '',
  ];

  for (const token of tokens) {
    lines.push(`${token.sassName}: ${formatSassValue(token)};`);
  }

  lines.push('', '$tokens-light: (');
  for (const token of tokens) {
    lines.push(`  '${token.pathName}': ${formatSassValue(token)},`);
  }
  lines.push(');', '');

  if (footer) lines.push(footer.trim(), '');
  return `${lines.join('\n')}\n`;
}

function buildJsTokens() {
  const colorTokens = modeTokens.light.filter(token => token.type === 'color');
  const spacingTokens = modeTokens.light.filter(token => token.path[0] === 'spacing');
  const radiusTokens = modeTokens.light.filter(token => token.path[0] === 'border-radius');
  const tokenGroups = colorTokens.reduce((acc, token) => {
    const groupId = `grid-${kebab(token.path.slice(0, 2).join('-'))}`;
    acc[groupId] ||= [];
    acc[groupId].push([token.pathName, token.cssName, formatCssValue(token)]);
    return acc;
  }, {});
  const textTokens = colorTokens
    .filter(token => token.path[0] === 'use' && token.path[1] === 'text')
    .map(token => [token.pathName, token.cssName, formatCssValue(token), '']);
  const tableTokens = colorTokens
    .filter(token => token.path[0] === 'use' && token.path[1] === 'tables')
    .map(token => [token.pathName, token.cssName, formatCssValue(token), '']);
  const spacing = spacingTokens.map(token => [
    token.cssName,
    formatCssValue(token),
    Number.parseFloat(formatCssValue(token)),
  ]);
  const radius = radiusTokens.map(token => [
    token.cssName,
    formatCssValue(token),
    Number.parseFloat(formatCssValue(token)),
  ]);

  return `/* ============================================================
   TOKEN DATA — Compensar MP
   Generated from Figma token exports. Do not edit by hand.
   ============================================================ */

export const TOKENS = ${JSON.stringify(normalized, null, 2)};

export const TOKEN_GROUPS = ${JSON.stringify(tokenGroups, null, 2)};

export const COLOR_TOKENS = ${JSON.stringify(colorTokens.map(token => [
  token.pathName,
  token.cssName,
  formatCssValue(token),
]), null, 2)};

export const TEXT_TOKENS = ${JSON.stringify(textTokens, null, 2)};

export const TABLE_TOKENS = ${JSON.stringify(tableTokens, null, 2)};

export const SPACING = ${JSON.stringify(spacing, null, 2)};

export const BORDER_RADIUS = ${JSON.stringify(radius, null, 2)};
`;
}

function buildBundleTokenBlock() {
  const js = buildJsTokens();
  return js
    .replaceAll('export const ', 'var ')
    .split('\n')
    .map(line => (line ? `  ${line}` : line))
    .join('\n');
}

fs.writeFileSync(path.join(rootDir, 'tokens/compensar.tokens.json'), `${JSON.stringify(normalized, null, 2)}\n`);
fs.writeFileSync(path.join(rootDir, 'css/tokens.css'), buildCss());
fs.writeFileSync(
  path.join(rootDir, 'core/abstracts/_tokens-colors.scss'),
  buildSass(pathParts => pathParts[0] === 'base' || pathParts[0] === 'product' || pathParts[0] === 'use', '_tokens-colors.scss'),
);
fs.writeFileSync(
  path.join(rootDir, 'core/abstracts/_tokens-spacing.scss'),
  buildSass(pathParts => pathParts[0] === 'spacing', '_tokens-spacing.scss', `
// Legacy Sass aliases used by the current core implementation.
// Values point to Figma-exported spacing tokens.
$space-0: 0;
$space-2: $spacing-2px;
$space-4: $spacing-4px;
$space-8: $spacing-8px;
$space-12: $spacing-12px;
$space-16: $spacing-16px;
$space-24: $spacing-24px;
$space-32: $spacing-32px;
$space-40: $spacing-40px;
$space-48: $spacing-48px;
$space-56: $spacing-56px;
$space-64: $spacing-64px;
$space-72: $spacing-72px;
$space-80: $spacing-80px;
$space-96: $spacing-96px;
$space-128: $spacing-128px;
`),
);
fs.writeFileSync(
  path.join(rootDir, 'core/abstracts/_tokens-radius.scss'),
  buildSass(pathParts => pathParts[0] === 'border-radius', '_tokens-radius.scss', `
// Legacy Sass aliases used by the current core implementation.
// Values point to Figma-exported radius tokens.
$radius-none: 0;
$radius-xs: $border-radius-xs;
$radius-sm: $border-radius-sm;
$radius-md: $border-radius-md;
$radius-lg: $border-radius-lg;
$radius-full: $border-radius-lg;
`),
);
fs.writeFileSync(path.join(rootDir, 'js/tokens.js'), buildJsTokens());

const bundlePath = path.join(rootDir, 'js/ds-bundle.js');
if (fs.existsSync(bundlePath)) {
  const bundle = fs.readFileSync(bundlePath, 'utf8');
  const start = bundle.indexOf('  /* ══════════════════════════════════════════════════════════\n     TOKENS DATA');
  const end = bundle.indexOf('  /* ══════════════════════════════════════════════════════════\n     APP', start);
  if (start !== -1 && end !== -1) {
    const replacement = `  /* ══════════════════════════════════════════════════════════\n     TOKENS DATA\n     ══════════════════════════════════════════════════════════ */\n${buildBundleTokenBlock()}\n\n`;
    fs.writeFileSync(bundlePath, `${bundle.slice(0, start)}${replacement}${bundle.slice(end)}`);
  }
}

console.log(`Generated ${basePaths.length} tokens for ${modes.length} modes.`);
