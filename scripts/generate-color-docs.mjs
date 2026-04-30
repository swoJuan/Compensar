import fs from 'node:fs';
import path from 'node:path';

// Builds docs/foundations download sources from the real token JSON and color utilities SCSS.
// Run via: npm run docs:build

const root = process.cwd();
const docsDir = path.join(root, 'docs', 'foundations');
const tokenFile = path.join(root, 'tokens', 'compensar.tokens.json');
const abstractSource = path.join(root, 'core', 'abstracts', '_tokens-colors.scss');
const utilsSource = path.join(root, 'core', 'utils', '_colors.scss');
const tokenCssDest = path.join(docsDir, 'color-tokens.css');
const tokenScssDest = path.join(docsDir, '_color-tokens.scss');
const tokenJsonDest = path.join(docsDir, 'color-tokens.json');
const abstractDest = path.join(docsDir, 'colors-abstract.scss');
const utilsDest = path.join(docsDir, 'colors-utils.scss');

function normalizePath(name) {
  return name.replace(/\\/g, '/');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function cssVar(token) {
  return token.css;
}

function sortKey(a, b) {
  const aParts = a.split('/');
  const bParts = b.split('/');
  const order = [
    'base/brand', 'base/neutral', 'base/blue', 'base/cyan-blue', 'base/green-1', 'base/red', 'base/yellow',
    'product/violet', 'product/gray', 'product/teal', 'product/accent', 'product/medicina',
    'use/text', 'use/background', 'use/border', 'use/state', 'use/icon', 'use/badge', 'use/alert', 'use/other'
  ];
  const aGroup = aParts.slice(0, 2).join('/');
  const bGroup = bParts.slice(0, 2).join('/');
  const aIndex = order.indexOf(aGroup) === -1 ? Number.MAX_SAFE_INTEGER : order.indexOf(aGroup);
  const bIndex = order.indexOf(bGroup) === -1 ? Number.MAX_SAFE_INTEGER : order.indexOf(bGroup);
  if (aIndex !== bIndex) return aIndex - bIndex;
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i += 1) {
    const partA = aParts[i] || '';
    const partB = bParts[i] || '';
    if (partA === partB) continue;
    const nA = Number(partA);
    const nB = Number(partB);
    if (!Number.isNaN(nA) && !Number.isNaN(nB)) return nA - nB;
    return partA.localeCompare(partB, 'es', { numeric: true });
  }
  return 0;
}

function buildCss(tokens) {
  const lines = [];
  lines.push('/* ============================================================');
  lines.push('   Compensar MP color tokens');
  lines.push('   Generated from tokens/compensar.tokens.json');
  lines.push('   ============================================================ */\n');

  const groups = Array.from(new Set(Object.keys(tokens).map(key => key.split('/').slice(0, 2).join('/'))));
  groups.sort((a, b) => sortKey(a, b));

  const emitGroup = (mode) => {
    lines.push(`${mode.selector} {`);
    Object.keys(tokens).sort(sortKey).forEach(key => {
      const token = tokens[key];
      const value = token.modes[mode.key] ?? token.modes.light ?? '';
      if (value === '') return;
      if (key.split('/').slice(0, 2).join('/') !== groups.find(g => sortKey(key, g) >= 0)) {
        // no-op
      }
      lines.push(`  ${token.css}: ${value};`);
    });
    lines.push('}\n');
  };

  emitGroup({ key: 'light', selector: ':root' });
  emitGroup({ key: 'dark', selector: '[data-theme="dark"]' });
  emitGroup({ key: 'highContrast', selector: '[data-theme="high-contrast"]' });

  return lines.join('\n');
}

function buildScss(tokens) {
  const lines = [];
  lines.push('// ============================================================');
  lines.push('// Compensar MP color tokens');
  lines.push('// Generated from tokens/compensar.tokens.json');
  lines.push('// ============================================================\n');
  lines.push(':root {');
  Object.keys(tokens).sort(sortKey).forEach(key => {
    const token = tokens[key];
    const value = token.modes.light ?? '';
    if (value === '') return;
    lines.push(`  ${token.css}: ${value};`);
  });
  lines.push('}\n');

  lines.push('[data-theme="dark"] {');
  Object.keys(tokens).sort(sortKey).forEach(key => {
    const token = tokens[key];
    const value = token.modes.dark ?? token.modes.light ?? '';
    if (value === '') return;
    lines.push(`  ${token.css}: ${value};`);
  });
  lines.push('}\n');

  lines.push('[data-theme="high-contrast"] {');
  Object.keys(tokens).sort(sortKey).forEach(key => {
    const token = tokens[key];
    const value = token.modes.highContrast ?? token.modes.light ?? '';
    if (value === '') return;
    lines.push(`  ${token.css}: ${value};`);
  });
  lines.push('}\n');

  return lines.join('\n');
}

function writeFile(dest, content) {
  fs.writeFileSync(dest, `${content}\n`, 'utf8');
  console.log(`Written ${normalizePath(path.relative(root, dest))}`);
}

function run() {
  ensureDir(docsDir);
  const raw = fs.readFileSync(tokenFile, 'utf8');
  const tokens = JSON.parse(raw);
  writeFile(tokenJsonDest, JSON.stringify(tokens, null, 2));
  writeFile(tokenCssDest, buildCss(tokens));
  writeFile(tokenScssDest, buildScss(tokens));
  fs.copyFileSync(abstractSource, abstractDest);
  console.log(`Copied ${normalizePath(path.relative(root, abstractDest))}`);
  fs.copyFileSync(utilsSource, utilsDest);
  console.log(`Copied ${normalizePath(path.relative(root, utilsDest))}`);
}

run();
