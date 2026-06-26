/* ============================================================================
   LovePattern  .  /api/get-report   (Netlify Function)   THE GATE
   ----------------------------------------------------------------------------
   Step 2 of the secure purchase, and the heart of the fix. The browser lands on
   rapport.html?session_id=cs_... and calls this. We:
     1. retrieve the Checkout Session from Stripe with the SECRET key
     2. verify payment_status === 'paid'  (cannot be forged client-side)
     3. read the token from metadata, load the stashed test result
     4. assemble the report SERVER-SIDE from the block store
     5. return ONLY this person's report (free + paid), as JSON

   If the session is unpaid, unknown, or expired, we return 402 and NO content.
   The paid blocks live under ./_content and are bundled into this function;
   they are never served as static assets, so the browser cannot read them
   except as the assembled JSON it is entitled to.

   Required env: STRIPE_SECRET_KEY
   ============================================================================ */

import { getStore } from '@netlify/blobs';
import { assembleReport } from '../../report-engine/assembler.mjs';

/* Static content registry (bundler-safe). One import per authored profile.
   Only profiles present here can be assembled; others fall back to free-only. */
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
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) { console.error('[get-report] STRIPE_SECRET_KEY missing'); return json({ error: 'not configured' }, 500); }

  const url = new URL(req.url);
  const sessionId = url.searchParams.get('session_id');
  if (!sessionId || !/^cs_[\w]+$/.test(sessionId)) return json({ error: 'bad session id' }, 400);

  // 1 . retrieve the session from Stripe
  let session;
  try {
    const res = await fetch('https://api.stripe.com/v1/checkout/sessions/' + encodeURIComponent(sessionId), {
      headers: { authorization: 'Bearer ' + secret },
    });
    session = await res.json();
    if (!res.ok) { console.warn('[get-report] Stripe retrieve failed:', JSON.stringify(session).slice(0, 300)); return json({ error: 'session not found' }, 404); }
  } catch (e) {
    console.error('[get-report] Stripe fetch threw:', e && e.message);
    return json({ error: 'stripe unreachable' }, 502);
  }

  // 2 . the only thing that unlocks paid content
  if (session.payment_status !== 'paid') {
    return json({ error: 'not paid', payment_status: session.payment_status || 'unknown' }, 402);
  }

  // 3 . load the stashed result
  const token = (session.metadata && session.metadata.token) || session.client_reference_id;
  if (!token) return json({ error: 'no order token' }, 404);

  let order = null;
  try {
    order = await getStore('orders').get(token, { type: 'json', consistency: 'strong' });
  } catch (e) { console.error('[get-report] blob get threw:', e && e.message); }
  if (!order || !order.result) return json({ error: 'order not found' }, 404);

  // Real amount actually charged, straight from the verified Stripe session.
  // amount_total is in the currency's minor unit (cents); the client converts
  // it to the major unit for purchase_completed. No price is ever hard-coded.
  const payment = {
    amount_total: typeof session.amount_total === 'number' ? session.amount_total : null,
    currency: session.currency || null,
  };

  // 4 + 5 . assemble server-side and return only this report
  const profil = order.result.pattern_dominant;
  const content = CONTENT[profil];
  if (!content) {
    // Profile not yet authored: return free zone only, flagged, so the page can
    // still greet the buyer instead of erroring. (Author its _content file.)
    const fallback = CONTENT.miroir;
    const free = assembleReport(fallback, order.result, { lang: order.lang, zones: 'free' });
    free.meta.unauthored = profil;
    free.payment = payment;
    return json(free);
  }

  const report = assembleReport(content, order.result, { lang: order.lang });
  report.payment = payment;
  return json(report);
};

export const config = { path: '/api/get-report' };
