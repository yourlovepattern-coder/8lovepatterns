/* ============================================================================
   8LovePatterns  .  /api/stripe-webhook   (Netlify Function, v2)  THE ROBOT
   ----------------------------------------------------------------------------
   Stripe calls this URL after every event. On a completed checkout we:
     1. verify the Stripe signature (so only Stripe can trigger us)
     2. read client_reference_id  -> the id of the stashed report PDF
     3. read the buyer's email    -> from the Stripe session
     4. email the warm confirmation + the PDF (via Resend)
     5. delete the stashed PDF

   Required environment variables (set in Netlify, never in the code):
     STRIPE_WEBHOOK_SECRET   the "whsec_..." from your Stripe webhook endpoint
     RESEND_API_KEY          your Resend API key (re_...)
   Optional:
     MAIL_FROM               defaults to "8LovePatterns <support@8lovepatterns.com>"
   ============================================================================ */

import { getStore } from '@netlify/blobs';
import { buildOrderEmail } from '../../email-template.mjs';

const SITE = 'https://8lovepatterns.com';

export default async (req) => {
  if (req.method !== 'POST') return new Response('method not allowed', { status: 405 });

  const sig = req.headers.get('stripe-signature') || '';
  const raw = await req.text();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  const valid = await verifyStripeSignature(raw, sig, secret);
  if (!valid) return new Response('invalid signature', { status: 400 });

  let event;
  try { event = JSON.parse(raw); } catch (e) { return new Response('bad json', { status: 400 }); }

  // We only act on a fully completed checkout.
  console.log('[webhook] event received:', event.type);
  if (event.type !== 'checkout.session.completed') return new Response('ignored', { status: 200 });

  const session = event.data && event.data.object ? event.data.object : {};
  const id = session.client_reference_id;
  const email = (session.customer_details && session.customer_details.email) || session.customer_email;
  console.log('[webhook] client_reference_id:', id, '| email present:', !!email);

  if (!id || !email) return new Response('no ref or email', { status: 200 });

  // Fetch the stashed report. The browser POSTs it to /api/save-report just
  // before redirecting to Stripe, so by now it should be there. We read with
  // STRONG consistency (always the latest write, even across regions) and retry
  // a few times to absorb the few seconds of propagation lag.
  let record = null;
  let getErr = null;
  const store = getStore('reports');
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      record = await store.get(id, { type: 'json', consistency: 'strong' });
    } catch (e) { getErr = e; console.error('[webhook] blobs get threw (attempt ' + attempt + '):', e && e.message); }
    if (record && record.pdf) { console.log('[webhook] report found on attempt', attempt, '| pdf chars:', record.pdf.length); break; }
    if (attempt < 5) await new Promise((r) => setTimeout(r, 1300));
  }

  if (!record || !record.pdf) {
    // Could not find the stored PDF. Either save-report failed to write it, or
    // it has not propagated yet. Return 500 so Stripe retries this webhook later
    // (its backoff gives the blob time to appear). The logs above say which.
    console.warn('[webhook] NO REPORT for id', id, '| getErr:', getErr && getErr.message, '| asking Stripe to retry');
    return new Response('no report stored', { status: 500 });
  }

  const lang = record.lang === 'fr' ? 'fr' : 'en';
  const mail = buildOrderEmail({ lang, profileName: record.profileName, siteUrl: SITE });

  const sent = await sendWithResend({
    to: email,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    pdfBase64: record.pdf,
    lang,
  });

  console.log('[webhook] Resend send result:', sent);
  if (sent) {
    try { await store.delete(id); } catch (e) {}
    return new Response('sent', { status: 200 });
  }
  // Returning 500 makes Stripe retry the webhook later (good: transient email errors recover).
  return new Response('email failed', { status: 500 });
};

/* ---- Resend ------------------------------------------------------------ */
async function sendWithResend({ to, subject, html, text, pdfBase64, lang }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) { console.error('[webhook] RESEND_API_KEY missing'); return false; }
  const from = process.env.MAIL_FROM || '8LovePatterns <support@8lovepatterns.com>';
  const filename = lang === 'fr' ? 'Mon-rapport-8LovePatterns.pdf' : 'My-8LovePatterns-report.pdf';
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: 'Bearer ' + key, 'content-type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: 'support@8lovepatterns.com',
        subject,
        html,
        text,
        attachments: [{ filename, content: pdfBase64 }],
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error('[webhook] Resend rejected:', res.status, body.slice(0, 400));
    }
    return res.ok;
  } catch (e) { console.error('[webhook] Resend threw:', e && e.message); return false; }
}

/* ---- Stripe signature check (no SDK, Web Crypto HMAC-SHA256) ------------ */
async function verifyStripeSignature(payload, sigHeader, secret) {
  try {
    if (!secret || !sigHeader) return false;
    const parts = {};
    sigHeader.split(',').forEach((kv) => {
      const i = kv.indexOf('=');
      if (i > 0) parts[kv.slice(0, i).trim()] = kv.slice(i + 1).trim();
    });
    const t = parts.t, v1 = parts.v1;
    if (!t || !v1) return false;

    // Reject very old timestamps (replay guard): 5 minutes.
    const age = Math.abs(Date.now() / 1000 - Number(t));
    if (!Number.isFinite(age) || age > 300) return false;

    const enc = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey(
      'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const mac = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(t + '.' + payload));
    const hex = Array.from(new Uint8Array(mac)).map((b) => b.toString(16).padStart(2, '0')).join('');

    if (hex.length !== v1.length) return false;
    let diff = 0;
    for (let i = 0; i < hex.length; i++) diff |= hex.charCodeAt(i) ^ v1.charCodeAt(i);
    return diff === 0;
  } catch (e) { return false; }
}

export const config = { path: '/api/stripe-webhook' };
