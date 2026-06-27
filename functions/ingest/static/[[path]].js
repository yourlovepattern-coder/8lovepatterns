/* ============================================================================
   8LovePatterns  .  PostHog reverse proxy  .  /ingest/static/*  (assets)
   ----------------------------------------------------------------------------
   Cloudflare Pages port of the netlify.toml redirect:
       from = "/ingest/static/*"
       to   = "https://eu-assets.i.posthog.com/static/:splat"  status=200 force

   This route carries an extra static segment ("static"), so Cloudflare Pages
   matches it BEFORE the broader functions/ingest/[[path]].js catch-all. It MUST
   come first (PostHog loads /ingest/static/array.js), exactly like the ordered
   redirect rules in netlify.toml. The upstream Response is returned as-is so
   Content-Encoding is preserved (PostHog parsing depends on it).
   ============================================================================ */

const ASSET_HOST = 'eu-assets.i.posthog.com';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  // /ingest/static/array.js -> https://eu-assets.i.posthog.com/static/array.js
  const upstream = 'https://' + ASSET_HOST + url.pathname.replace(/^\/ingest/, '') + url.search;

  const headers = new Headers(request.headers);
  headers.delete('cookie');

  const init = {
    method: request.method,
    headers,
    body: (request.method === 'GET' || request.method === 'HEAD') ? null : await request.arrayBuffer(),
    redirect: 'manual',
  };
  return fetch(upstream, init);
}
