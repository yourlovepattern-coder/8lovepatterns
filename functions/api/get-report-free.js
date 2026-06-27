/* ============================================================================
   LovePattern  .  /api/get-report-free   (Cloudflare Pages Function)  FREE TUNNEL
   ----------------------------------------------------------------------------
   Ported 1:1 from netlify/functions/get-report-free.mjs. Same path, same JSON
   response, same free-only assembly. Adapters only: context.request / context.env.
   No storage, no env required. Stateless: the result rides in the POST body.

   The free preview, keyed to the visitor's REAL profile (not the Miroir demo).
   Always assembled with { zones: 'free' }, so the paid blocks are never resolved
   and never serialized. The gate (get-report) remains the only door to paid
   content, and it opens only on Stripe payment_status === 'paid'.
   ============================================================================ */

import { assembleReport } from '../../report-engine/assembler.mjs';

import miroir from '../../netlify/functions/_content/miroir.js';
import bastion from '../../netlify/functions/_content/bastion.js';
import cameleon from '../../netlify/functions/_content/cameleon.js';
import fugitif from '../../netlify/functions/_content/fugitif.js';
import guetteur from '../../netlify/functions/_content/guetteur.js';
import sauveur from '../../netlify/functions/_content/sauveur.js';
import alchimiste from '../../netlify/functions/_content/alchimiste.js';
import incendiaire from '../../netlify/functions/_content/incendiaire.js';
const CONTENT = { miroir, bastion, cameleon, fugitif, guetteur, sauveur, alchimiste, incendiaire };

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

export async function onRequest(context) {
  const { request } = context;
  if (request.method !== 'POST') return json({ error: 'POST only' }, 405);

  let body = null;
  try { body = await request.json(); } catch (e) { return json({ error: 'bad json' }, 400); }

  const result = body && body.result;
  if (!result || typeof result !== 'object') return json({ error: 'no result' }, 400);

  const profil = result.pattern_dominant;
  const content = CONTENT[profil] || CONTENT.miroir;
  const lang = body.lang === 'en' ? 'en' : 'fr';

  /* zones: 'free' guarantees the paid blocks are never assembled or returned. */
  const free = assembleReport(content, result, { lang, zones: 'free' });
  if (!CONTENT[profil]) free.meta.unauthored = profil || null;
  return json(free);
}
