/* 8LovePatterns — production build.
   Transforms every .jsx file (JSX -> React.createElement, es2020) with esbuild
   in "transform" mode (no bundling, no modules), then concatenates the result
   with the plain .js files in the exact order index.html used to load them.
   Every file keeps declaring its variables/components in the global scope,
   exactly like the Babel-in-browser setup it replaces — nothing here adds
   import/export or wraps files in modules. Output: app.js at the repo root. */

import { transform } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';

/* Exact load order from index.html — do not reorder. Later files rely on
   globals (React components, data, helpers) declared by earlier ones. */
const FILES = [
  'profiles.js',
  'profiles_content.js',
  'report-engine/render.js',
  'report-engine/assembler.client.js',
  'free_content.client.js',
  'data.jsx',
  'items.jsx',
  'items_fr.js',
  'engine.jsx',
  'ui.jsx',
  'lang.jsx',
  'content.jsx',
  'sections.jsx',
  'tweaks-panel.jsx',
  'tweaks.jsx',
  'chrome.jsx',
  'Home.jsx',
  'flow.jsx',
  'test_data_ancre.jsx',
  'test_data.jsx',
  'test_engine.jsx',
  'test_result.jsx',
  'test.jsx',
  'Profile.jsx',
  'pages.jsx',
  'stripe-config.jsx',
  'sales.jsx',
  'App.jsx',
];

/* Verified safe: esbuild's minifier only renames bindings it can prove are
   local (function/block scope). These files declare everything at the top
   level with no import/export, so global names (window.PROFILES, function
   App(), the Object.assign(window, {...}) exports, etc.) survive untouched.
   Escape hatch for debugging a minified-only issue: MINIFY=0 npm run build */
const MINIFY = process.env.MINIFY !== '0';

async function compile(path) {
  const source = await readFile(path, 'utf8');
  if (!path.endsWith('.jsx')) return source; // already plain JS, pass through
  const result = await transform(source, {
    loader: 'jsx',
    target: 'es2020',
    minify: MINIFY,
    sourcefile: path,
  });
  return result.code;
}

async function main() {
  const chunks = [];
  for (const file of FILES) {
    const code = await compile(file);
    chunks.push(`/* ---- ${file} ---- */\n${code}`);
  }
  const output = chunks.join('\n');
  await writeFile('app.js', output);
  const kb = (Buffer.byteLength(output) / 1024).toFixed(1);
  console.log(`app.js written: ${FILES.length} files, ${kb} KB${MINIFY ? ' (minified)' : ''}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
