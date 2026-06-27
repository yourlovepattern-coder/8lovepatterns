/* ============================================================================
   LovePattern  .  /api/stripe-webhook   (Cloudflare Pages Function)   THE ROBOT
   ----------------------------------------------------------------------------
   Ported 1:1 from netlify/functions/stripe-webhook.mjs. Same path, same
   responses, same Web Crypto signature check, same Resend email. Adapters only:
   context.request / context.env, and KV (store "orders") instead of Blobs.

   Stripe calls this after every event. On a completed checkout we:
     1. verify the Stripe signature (so only Stripe can trigger us)
     2. read the order token (metadata.token / client_reference_id)
     3. load the stashed test result, derive the buyer's profile name
     4. email a warm confirmation with a SECURE LINK to the on-demand report
        (rapport.html?session_id=...). That page re-verifies payment on every
        open via /api/get-report, so the link is safe to send by email.

   Required env:
     STRIPE_WEBHOOK_SECRET   whsec_... from your Stripe webhook endpoint
     RESEND_API_KEY          re_... (Resend)
   Optional:
     SITE_URL                https://8lovepatterns.com
     MAIL_FROM               defaults to "LovePattern <support@8lovepatterns.com>"
   Required binding: LP_KV (Workers KV namespace)
   ============================================================================ */

import { getStore } from '../../cf-store.js';
import { buildOrderEmail } from '../../email-template.mjs';
import { LP_PROFILE_NAMES } from '../../report-engine/assembler.mjs';

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== 'POST') return new Response('method not allowed', { status: 405 });

  /* Base the emailed report link on the origin that received this webhook (the
     deployed domain where get-report is live), so the link never points at a
     dead host. env.SITE_URL overrides to force a canonical domain if set. */
  const SITE = env.SITE_URL || new URL(request.url).origin;

  const sig = request.headers.get('stripe-signature') || '';
  const raw = await request.text();
  const secret = env.STRIPE_WEBHOOK_SECRET;

  const valid = await verifyStripeSignature(raw, sig, secret);
  if (!valid) return new Response('invalid signature', { status: 400 });

  let event;
  try { event = JSON.parse(raw); } catch (e) { return new Response('bad json', { status: 400 }); }

  console.log('[webhook] event:', event.type);
  if (event.type !== 'checkout.session.completed') return new Response('ignored', { status: 200 });

  const session = (event.data && event.data.object) || {};
  if (session.payment_status && session.payment_status !== 'paid') return new Response('not paid', { status: 200 });

  const email = (session.customer_details && session.customer_details.email) || session.customer_email;
  const token = (session.metadata && session.metadata.token) || session.client_reference_id;
  if (!email) { console.warn('[webhook] no email on session'); return new Response('no email', { status: 200 }); }

  // Load the order to personalize the email (profile name + language).
  let lang = 'fr', profileName = '';
  try {
    const order = token ? await getStore(env, 'orders').get(token, { type: 'json', consistency: 'strong' }) : null;
    if (order) {
      lang = order.lang === 'en' ? 'en' : 'fr';
      const profil = order.result && order.result.pattern_dominant;
      profileName = (profil && LP_PROFILE_NAMES[profil]) || '';
    }
  } catch (e) { console.error('[webhook] order load failed:', e && e.message); }

  const reportUrl = SITE + '/rapport.html?session_id=' + encodeURIComponent(session.id);
  const mail = buildOrderEmail({ lang, profileName, siteUrl: SITE, reportUrl });

  const sent = await sendWithResend(env, { to: email, subject: mail.subject, html: mail.html, text: mail.text });
  console.log('[webhook] Resend result:', sent);
  return new Response(sent ? 'sent' : 'email failed', { status: sent ? 200 : 500 });
}

/* ---- Resend ------------------------------------------------------------ */
async function sendWithResend(env, { to, subject, html, text }) {
  const key = env.RESEND_API_KEY;
  if (!key) { console.error('[webhook] RESEND_API_KEY missing'); return false; }
  const from = env.MAIL_FROM || 'LovePattern <support@8lovepatterns.com>';
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: 'Bearer ' + key, 'content-type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: 'support@8lovepatterns.com', subject, html, text }),
    });
    if (!res.ok) { const body = await res.text().catch(() => ''); console.error('[webhook] Resend rejected:', res.status, body.slice(0, 400)); }
    return res.ok;
  } catch (e) { console.error('[webhook] Resend threw:', e && e.message); return false; }
}

/* ---- Stripe signature check (no SDK, Web Crypto HMAC-SHA256) ------------ */
async function verifyStripeSignature(payload, sigHeader, secret) {
  try {
    if (!secret || !sigHeader) return false;
    const parts = {};
    sigHeader.split(',').forEach((kv) => { const i = kv.indexOf('='); if (i > 0) parts[kv.slice(0, i).trim()] = kv.slice(i + 1).trim(); });
    const t = parts.t, v1 = parts.v1;
    if (!t || !v1) return false;
    const age = Math.abs(Date.now() / 1000 - Number(t));
    if (!Number.isFinite(age) || age > 300) return false;
    const enc = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const mac = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(t + '.' + payload));
    const hex = Array.from(new Uint8Array(mac)).map((b) => b.toString(16).padStart(2, '0')).join('');
    if (hex.length !== v1.length) return false;
    let diff = 0;
    for (let i = 0; i < hex.length; i++) diff |= hex.charCodeAt(i) ^ v1.charCodeAt(i);
    return diff === 0;
  } catch (e) { return false; }
}
