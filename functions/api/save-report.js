/* ============================================================================
   8LovePatterns  .  /api/save-report   (Cloudflare Pages Function)
   ----------------------------------------------------------------------------
   Ported 1:1 from netlify/functions/save-report.mjs. Same path, same JSON
   responses, same CORS headers, same size guard. Adapters only: context.request
   / context.env, and KV (store "reports") instead of @netlify/blobs.

   Called by the browser at checkout, BEFORE the buyer leaves for Stripe. It
   stashes the buyer's already-built report PDF (base64) under a random id.

   Security: this endpoint is open (anyone could POST a blob), but a stored blob
   does nothing on its own. The only abuse surface is storage spam, capped by the
   size guard below.
   Required binding: LP_KV (Workers KV namespace)
   ============================================================================ */

import { getStore } from '../../cf-store.js';

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

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === 'OPTIONS') return json({ ok: true });
  if (request.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: 'bad json' }, 400); }

  const id = body && body.id;
  const pdf = body && body.pdf;
  console.log('[save-report] POST received | id:', id, '| pdf chars:', pdf ? pdf.length : 0);
  if (!id || typeof id !== 'string' || !/^[\w-]{8,80}$/.test(id)) return json({ error: 'bad id' }, 400);
  if (!pdf || typeof pdf !== 'string') return json({ error: 'missing pdf' }, 400);
  if (pdf.length > MAX_PDF_CHARS) { console.error('[save-report] pdf too large:', pdf.length); return json({ error: 'pdf too large' }, 413); }

  const record = {
    pdf,
    lang: body.lang === 'fr' ? 'fr' : 'en',
    profileName: (typeof body.profileName === 'string' ? body.profileName : '').slice(0, 80),
    ts: Date.now(),
  };

  try {
    const store = getStore(env, 'reports');
    await store.setJSON(id, record);
    console.log('[save-report] stored OK | id:', id);
  } catch (e) {
    console.error('[save-report] store FAILED | id:', id, '| error:', e && e.message);
    return json({ error: 'store failed', detail: String((e && e.message) || e) }, 500);
  }
  return json({ ok: true });
}
