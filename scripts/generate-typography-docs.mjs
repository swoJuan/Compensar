import fs from 'node:fs';
import path from 'node:path';

// Typography docs do not generate copied assets.
// The Typography page downloads from the live core sources:
// - core/abstracts/_tokens-typography.scss
// - core/base/_typography.scss
// And the utilities tab renders from:
// - core/utils/_typography.scss
//
// Run via npm run docs:build as a quick validation command.

const root = process.cwd();
const tokenSource = path.join(root, 'core', 'abstracts', '_tokens-typography.scss');
const classesSource = path.join(root, 'core', 'base', '_typography.scss');
const utilsSource = path.join(root, 'core', 'utils', '_typography.scss');

const requiredClasses = [
  'mp-display-l',
  'mp-display-m',
  'mp-display-xl-mob',
  'mp-display-l-mob',
  'mp-display-m-mob',
  'mp-h1',
  'mp-h2',
  'mp-h3',
  'mp-h4',
  'mp-h5',
  'mp-h6',
  'mp-eyebrow',
  'mp-parrafo-xl',
  'mp-parrafo-l',
  'mp-body-2xl',
  'mp-body-xl',
  'mp-body-l',
  'mp-body-m',
  'mp-body-s',
  'mp-body-xs',
  'mp-btn',
  'mp-label',
  'mp-hint',
  'mp-placeholder'
];

function normalizePath(name) {
  return name.replace(/\\/g, '/');
}

function readRequired(file) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required typography source: ${normalizePath(path.relative(root, file))}`);
  }
  return fs.readFileSync(file, 'utf8');
}

const tokenScss = readRequired(tokenSource);
const classesScss = readRequired(classesSource);
const utilsScss = readRequired(utilsSource);
const sizeTokens = tokenScss.match(/^\$fs-[a-z0-9-]+:\s*[^;]+;/gim) || [];
const missingClasses = requiredClasses.filter((className) => !classesScss.includes(`.${className}`));
const utilityClasses = utilsScss.match(/\.u-[a-z0-9-]+\s*\{/gim) || [];

if (missingClasses.length) {
  throw new Error(`Missing typography classes in core/base/_typography.scss: ${missingClasses.join(', ')}`);
}

if (!utilityClasses.length) {
  throw new Error('Missing typography utilities in core/utils/_typography.scss');
}

console.log('Typography documentation uses live core sources.');
console.log(`Source: ${normalizePath(path.relative(root, tokenSource))} (${sizeTokens.length} size tokens)`);
console.log(`Source: ${normalizePath(path.relative(root, classesSource))} (${requiredClasses.length} required classes)`);
console.log(`Source: ${normalizePath(path.relative(root, utilsSource))} (${utilityClasses.length} utility classes)`);
console.log('No docs/foundations/downloads files are generated.');
