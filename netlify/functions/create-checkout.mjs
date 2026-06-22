/* ============================================================================
   LovePattern  .  /api/create-checkout   (Netlify Function)
   ----------------------------------------------------------------------------
   Step 1 of the secure purchase. Called by the browser when the visitor clicks
   "Recevoir mon plan". It:
     1. receives the test RESULT (small: profile, palier, secondary, statut...)
     2. stashes it in Netlify Blobs under a random token
     3. creates a Stripe Checkout Session (server-side, with the SECRET key)
        carrying that token in metadata, and a success_url that comes back to
        rapport.html with the real {CHECKOUT_SESSION_ID}
     4. returns the Stripe-hosted checkout URL

   The browser NEVER receives any paid content here. It only gets a Stripe URL.
   The result it sends is its own test outcome: tampering only changes the
   buyer's own report, never unlocks someone else's, and they still pay.

   Required env (set in Netlify, never in code):
     STRIPE_SECRET_KEY   sk_live_... (or sk_test_... in test mode)
   Optional env:
     STRIPE_PRICE_ID     price_... (a 29 USD one-time price). If unset, an inline
                         2900-cent USD price is used. Stripe Adaptive Pricing
                         (enabled on the account) localizes the presentment
                         currency at checkout from this USD base.
     SITE_URL            https://8lovepatterns.com (defaults below)
   ============================================================================ */

import { getStore } from '@netlify/blobs';

const SITE = process.env.SITE_URL || 'https://8lovepatterns.com';

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) { console.error('[create-checkout] STRIPE_SECRET_KEY missing'); return json({ error: 'not configured' }, 500); }

  let body;
  try { body = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400); }

  const result = body && body.result;
  if (!result || typeof result !== 'object' || !result.pattern_dominant) {
    return json({ error: 'missing result' }, 400);
  }
  const lang = body.lang === 'en' ? 'en' : 'fr';

  // 1 + 2 . stash the result under a random token (TTL handled by Blobs cleanup)
  const token = 'ord_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 12);
  try {
    const store = getStore('orders');
    await store.setJSON(token, { result, lang, ts: Date.now() });
  } catch (e) {
    console.error('[create-checkout] blob store failed:', e && e.message);
    return json({ error: 'store failed' }, 500);
  }

  // 3 . create the Stripe Checkout Session (form-encoded, no SDK)
  const params = new URLSearchParams();
  params.set('mode', 'payment');
  params.set('success_url', SITE + '/rapport.html?session_id={CHECKOUT_SESSION_ID}');
  params.set('cancel_url', SITE + '/index.html');
  params.set('client_reference_id', token);
  params.set('metadata[token]', token);
  params.set('metadata[profil]', String(result.pattern_dominant));
  params.set('locale', lang === 'fr' ? 'fr' : 'en');
  params.set('allow_promotion_codes', 'true');

  const priceId = process.env.STRIPE_PRICE_ID;
  if (priceId) {
    params.set('line_items[0][price]', priceId);
    params.set('line_items[0][quantity]', '1');
  } else {
    /* Base price: 29 USD. With Stripe Adaptive Pricing enabled on the account,
       Stripe presents a localized currency/amount to the buyer automatically. */
    params.set('line_items[0][price_data][currency]', 'usd');
    params.set('line_items[0][price_data][unit_amount]', '2900');
    params.set('line_items[0][price_data][product_data][name]', 'LovePattern, full report');
    params.set('line_items[0][quantity]', '1');
  }

  let session;
  try {
    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: { authorization: 'Bearer ' + secret, 'content-type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    session = await res.json();
    if (!res.ok) { console.error('[create-checkout] Stripe error:', JSON.stringify(session).slice(0, 400)); return json({ error: 'stripe error' }, 502); }
  } catch (e) {
    console.error('[create-checkout] Stripe fetch threw:', e && e.message);
    return json({ error: 'stripe unreachable' }, 502);
  }

  return json({ url: session.url, id: session.id });
};

export const config = { path: '/api/create-checkout' };
