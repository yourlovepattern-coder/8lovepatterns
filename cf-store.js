/* ============================================================================
   8LovePatterns  .  Cloudflare KV shim  (Netlify Blobs compatibility layer)
   ----------------------------------------------------------------------------
   The Netlify functions used @netlify/blobs: getStore('orders') / getStore(
   'reports') with .setJSON(key, value) and .get(key, { type: 'json' }).
   Cloudflare has no Blobs; the native equivalent is Workers KV.

   This shim exposes the exact same tiny surface the functions need, backed by a
   SINGLE KV namespace binding (env.LP_KV). The former "orders" and "reports"
   stores are kept isolated by a "<store>:" key prefix, so one namespace replaces
   both Netlify stores with zero collision risk (the keys are random tokens).

   Consistency note: the Netlify reads passed consistency:'strong'. KV is
   eventually consistent and cannot honor that, but every read in this codebase
   happens AFTER a Stripe round trip (the buyer leaves for Checkout and comes
   back, or Stripe calls the webhook) — seconds to minutes later, well inside
   KV's global propagation window. So the looser guarantee is safe here.

   TTL note: Netlify Blobs persist by default; we mirror that by NOT setting a KV
   expiration (the report link emailed to the buyer must keep working for days).
   ============================================================================ */

export function getStore(env, name) {
  const kv = env && env.LP_KV;
  if (!kv) throw new Error('LP_KV binding missing (bind a KV namespace named LP_KV)');
  const k = (key) => name + ':' + key;
  return {
    /* Mirrors blobs.get(key, { type: 'json' | 'text' }). consistency option is
       accepted and ignored (KV is eventually consistent). */
    async get(key, opts = {}) {
      const type = opts && opts.type === 'json' ? 'json' : 'text';
      try {
        return await kv.get(k(key), { type });
      } catch (e) {
        throw new Error('LP_KV get failed: ' + (e && e.message ? e.message : String(e)));
      }
    },
    /* Mirrors blobs.setJSON(key, value). */
    async setJSON(key, value) {
      try {
        return await kv.put(k(key), JSON.stringify(value));
      } catch (e) {
        throw new Error('LP_KV put failed: ' + (e && e.message ? e.message : String(e)));
      }
    },
  };
}
