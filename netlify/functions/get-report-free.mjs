/* ============================================================================
   LovePattern  .  /api/get-report-free   (Netlify Function)   FREE TUNNEL
   ----------------------------------------------------------------------------
   The free preview, keyed to the visitor's REAL profile (not the Miroir demo).
   The result screen / rapport.html POSTs the test result here; we assemble and
   return ONLY the free zone.

   This endpoint takes NO money and grants NO paid content. It calls the same
   assembler as the gate, but always with { zones: 'free' }, so the paid blocks
   are never resolved and never serialized. Even a crafted request cannot pull a
   paid block out of here: the paid zone is dropped before assembly, server-side.
   The gate (get-report.mjs) remains the only door to paid content, and it opens
   only on Stripe payment_status === 'paid'.

   No env required. Stateless: the result rides in the POST body.
   ============================================================================ */

import { assembleReport } from '../../report-engine/assembler.mjs';

import miroir from './_content/miroir.js';
import bastion from './_content/bastion.js';
import cameleon from './_content/cameleon.js';
import fugitif from './_content/fugitif.js';
import guetteur from './_content/guetteur.js';
import sauveur from './_content/sauveur.js';
import alchimiste from './_content/alchimiste.js';
import incendiaire from './_content/incendiaire.js';
const CONTENT = { miroir, bastion, cameleon, fugitif, guetteur, sauveur, alchimiste, incendiaire };

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);

  let body = null;
  try { body = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400); }

  const result = body && body.result;
  if (!result || typeof result !== 'object') return json({ error: 'no result' }, 400);

  const profil = result.pattern_dominant;
  const content = CONTENT[profil] || CONTENT.miroir;
  const lang = body.lang === 'en' ? 'en' : 'fr';

  /* zones: 'free' guarantees the paid blocks are never assembled or returned. */
  const free = assembleReport(content, result, { lang, zones: 'free' });
  if (!CONTENT[profil]) free.meta.unauthored = profil || null;
  return json(free);
};

export const config = { path: '/api/get-report-free' };
