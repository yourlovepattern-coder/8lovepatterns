/* ============================================================================
   8LovePatterns  .  PostHog reverse proxy  .  /ingest/*  (catch-all)
   ----------------------------------------------------------------------------
   Cloudflare Pages port of the netlify.toml redirect:
       from = "/ingest/*"  to = "https://eu.i.posthog.com/:splat"  status=200 force

   Cloudflare Pages cannot proxy to an EXTERNAL host via _redirects (a 200 rule
   there only rewrites to same-project paths), so the proxy is a Function, as the
   official PostHog Cloudflare guide recommends.

   This file handles everything under /ingest EXCEPT /ingest/static/*, which is
   caught first by the more specific functions/ingest/static/[[path]].js (a route
   with an extra static segment wins over this catch-all). Paired with
   api_host:'https://8lovepatterns.com/ingest' in posthog-init.js.
   ============================================================================ */

const API_HOST = 'eu.i.posthog.com';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  // strip the /ingest prefix -> forward the rest verbatim (the Netlify :splat)
  const upstream = 'https://' + API_HOST + url.pathname.replace(/^\/ingest/, '') + url.search;

  const headers = new Headers(request.headers);
  headers.delete('cookie');
  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) headers.set('X-Forwarded-For', ip); // preserve geo accuracy at the origin

  const init = {
    method: request.method,
    headers,
    body: (request.method === 'GET' || request.method === 'HEAD') ? null : await request.arrayBuffer(),
    redirect: 'manual',
  };
  return fetch(upstream, init);
}
