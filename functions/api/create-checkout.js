/* ============================================================================
   LovePattern  .  /api/create-checkout   (Cloudflare Pages Function)
   ----------------------------------------------------------------------------
   Ported 1:1 from netlify/functions/create-checkout.mjs. Same path, same JSON
   responses, same Stripe logic. Differences are only the runtime adapters:
     . signature: Cloudflare's onRequest(context) instead of default(req)
     . env: context.env.X instead of process.env.X
     . storage: Cloudflare KV (cf-store.js) instead of @netlify/blobs

   Step 1 of the secure purchase. Called by the browser when the visitor clicks
   "Recevoir mon plan". It:
     1. receives the test RESULT (small: profile, palier, secondary, statut...)
     2. stashes it in KV (store "orders") under a random token
     3. creates a Stripe Checkout Session (server-side, with the SECRET key)
        carrying that token in metadata, and a success_url that comes back to
        rapport.html with the real {CHECKOUT_SESSION_ID}
     4. returns the Stripe-hosted checkout URL

   Required env (set in Cloudflare, never in code):
     STRIPE_SECRET_KEY   sk_live_... (or sk_test_... in test mode)
   Optional env:
     STRIPE_PRICE_ID     price_... (a 29 USD one-time price). If unset, an inline
                         2900-cent USD price is used. Stripe Adaptive Pricing
                         (enabled on the account) localizes the presentment
                         currency at checkout from this USD base.
     SITE_URL            optional override for the return domain. If unset, the
                         buyer is returned to the request's own origin (so it
                         works on pages.dev and the custom domain unchanged).
   Required binding: LP_KV (Workers KV namespace)
   ============================================================================ */

import { getStore } from '../../cf-store.js';

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  /* Return the buyer to the SAME origin they checked out from (pages.dev today,
     the custom domain after the switch) so the relative /api/get-report fetch on
     rapport.html hits a live function. env.SITE_URL overrides if ever set to
     force a canonical domain. */
  const SITE = env.SITE_URL || new URL(request.url).origin;

  const secret = env.STRIPE_SECRET_KEY;
  if (!secret) { console.error('[create-checkout] STRIPE_SECRET_KEY missing'); return json({ error: 'not configured' }, 500); }

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: 'bad json' }, 400); }

  const result = body && body.result;
  if (!result || typeof result !== 'object' || !result.pattern_dominant) {
    return json({ error: 'missing result' }, 400);
  }
  const lang = body.lang === 'en' ? 'en' : 'fr';

  // 1 + 2 . stash the result under a random token
  const token = 'ord_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 12);
  try {
    const store = getStore(env, 'orders');
    await store.setJSON(token, { result, lang, ts: Date.now() });
  } catch (e) {
    console.error('[create-checkout] kv store failed:', e && e.message);
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

  const priceId = env.STRIPE_PRICE_ID;
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
}
