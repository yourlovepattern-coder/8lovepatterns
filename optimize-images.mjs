// One-off script: convert assets/**/*.png to sibling .webp files, sized to the
// real max display dimensions found in the site's CSS/JSX (see AUDIT notes in
// the lot-2 brief). Run manually with `node optimize-images.mjs` — not part
// of `npm run build`.
//
// Rules (target = 2x the largest CSS display size found for that image group):
//   - assets/logo_mascot.png            -> skipped (favicon, stays PNG-only)
//   - assets/archetypes/*_avatar.png    -> fit inside 184x184  (Avatar component, max 92px CSS)
//   - assets/archetypes/{code}.png      -> fit inside 720x1200 (SalesImmersive hero, max 360px CSS width)
//   - assets/science/*.png              -> fit inside 400x400  (ScienceCard portrait, max 200px CSS box)
//   - anything else (assets/hero/*.png) -> no resize, recompress only (no CSS reference found; see report)
//
// Never upscales (withoutEnlargement), always preserves alpha (archetype art is cut out).

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = 'assets';
const SKIP = new Set(['logo_mascot.png']);
const WEBP_QUALITY = 82;

function walk(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(full));
    else if (entry.name.toLowerCase().endsWith('.png')) results.push(full);
  }
  return results;
}

function targetBox(relPath) {
  const base = path.basename(relPath);
  if (base.endsWith('_avatar.png')) return { width: 184, height: 184 };
  if (relPath.split(path.sep).join('/').startsWith('assets/archetypes/')) return { width: 720, height: 1200 };
  if (relPath.split(path.sep).join('/').startsWith('assets/science/')) return { width: 400, height: 400 };
  return null; // no known display size -> recompress only, keep native dimensions
}

async function run() {
  const files = walk(ASSETS_DIR).sort();
  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;

  for (const file of files) {
    const rel = path.relative('.', file).split(path.sep).join('/');
    const base = path.basename(file);
    if (SKIP.has(base)) {
      console.log(`skip   ${rel} (excluded: favicon)`);
      continue;
    }

    const before = fs.statSync(file).size;
    const box = targetBox(rel);
    const out = file.replace(/\.png$/i, '.webp');

    let pipeline = sharp(file);
    if (box) {
      pipeline = pipeline.resize({ width: box.width, height: box.height, fit: 'inside', withoutEnlargement: true });
    }
    await pipeline.webp({ quality: WEBP_QUALITY, alphaQuality: 100 }).toFile(out);

    const after = fs.statSync(out).size;
    totalBefore += before;
    totalAfter += after;
    converted++;

    const meta = await sharp(out).metadata();
    console.log(
      `${box ? 'resize' : 'recode'} ${rel} -> ${path.basename(out)} ` +
      `(${meta.width}x${meta.height}, ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB)`
    );
  }

  console.log('');
  console.log(`Converted ${converted} files.`);
  console.log(`Total before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total after:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
}

run();
