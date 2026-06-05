/* ============================================================================
   8LovePatterns  .  /api/save-report   (Netlify Function, v2)
   ----------------------------------------------------------------------------
   Called by the browser at checkout, BEFORE the buyer leaves for Stripe.
   It stashes the buyer's already-built report PDF (base64) under a random id.
   The Stripe webhook later reads it back by that id and emails it.

   Storage: Netlify Blobs (store "reports"). No PII beyond the PDF + language.
   Security: this endpoint is open (anyone could POST a blob), but a stored
   blob does nothing on its own. Emails are only sent by stripe-webhook, which
   requires a valid Stripe signature, i.e. a real paid session. The only abuse
   surface is storage spam, capped by the size guard below + Blobs TTL cleanup.
   ============================================================================ */

import { getStore } from '@netlify/blobs';

const MAX_PDF_CHARS = 9_000_000; // ~6.7 MB decoded; plenty for a report

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'content-type',
      'access-control-allow-methods': 'POST, OPTIONS',
    },
  });
}

export default async (req) => {
  if (req.method === 'OPTIONS') return json({ ok: true });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  let body;
  try { body = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400); }

  const id = body && body.id;
  const pdf = body && body.pdf;
  if (!id || typeof id !== 'string' || !/^[\w-]{8,80}$/.test(id)) return json({ error: 'bad id' }, 400);
  if (!pdf || typeof pdf !== 'string') return json({ error: 'missing pdf' }, 400);
  if (pdf.length > MAX_PDF_CHARS) return json({ error: 'pdf too large' }, 413);

  const record = {
    pdf,
    lang: body.lang === 'fr' ? 'fr' : 'en',
    profileName: (typeof body.profileName === 'string' ? body.profileName : '').slice(0, 80),
    ts: Date.now(),
  };

  try {
    const store = getStore('reports');
    await store.setJSON(id, record);
  } catch (e) {
    return json({ error: 'store failed' }, 500);
  }
  return json({ ok: true });
};

export const config = { path: '/api/save-report' };
