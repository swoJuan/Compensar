import fs from 'node:fs';
import path from 'node:path';

// Color docs no longer generate copied assets in docs/foundations.
// The Colors page reads the live core sources directly:
// - core/abstracts/_tokens-colors.scss
// - core/utils/_colors.scss
//
// Run via npm run docs:build as a quick validation command.

const root = process.cwd();
const tokenSource = path.join(root, 'core', 'abstracts', '_tokens-colors.scss');
const utilsSource = path.join(root, 'core', 'utils', '_colors.scss');

function normalizePath(name) {
  return name.replace(/\\/g, '/');
}

function readRequired(file) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required color source: ${normalizePath(path.relative(root, file))}`);
  }
  return fs.readFileSync(file, 'utf8');
}

function countColorTokens(source) {
  const matches = source.match(/^\$[a-z0-9-]+:\s*(?:#|var\(--)/gim);
  return matches ? matches.length : 0;
}

function countUtilities(source) {
  const matches = source.match(/^\.(?:bg|text|border)-[a-z0-9-]+\s*\{/gim);
  return matches ? matches.length : 0;
}

const tokenScss = readRequired(tokenSource);
const utilsScss = readRequired(utilsSource);

console.log('Color documentation uses live core sources.');
console.log(`Source: ${normalizePath(path.relative(root, tokenSource))} (${countColorTokens(tokenScss)} color tokens)`);
console.log(`Source: ${normalizePath(path.relative(root, utilsSource))} (${countUtilities(utilsScss)} color utilities)`);
console.log('No docs/foundations/downloads files are generated.');
