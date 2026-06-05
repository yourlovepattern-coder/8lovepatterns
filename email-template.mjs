/* ============================================================================
   8LovePatterns  .  Transactional email (order confirmation + report attached)
   ----------------------------------------------------------------------------
   buildOrderEmail({ lang, profileName, siteUrl }) -> { subject, preheader, html, text }

   Used in two places:
     . email-preview.html         (visual preview, both languages)
     . netlify/functions/stripe-webhook  (the robot that actually sends it)

   House rule: never use the long dash character. Commas, colons, periods only.
   ========================================================================== */

const BRAND = {
  paper:   '#FBF7F1',
  card:    '#FFFFFF',
  ink:     '#211C46',
  ink2:    '#57527A',
  ink3:    '#8A86A3',
  corail:  '#EE6352',
  or:      '#C7973F',
  hair:    '#EAE3D7',
  font:    "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  display: "'Bricolage Grotesque', 'Hanken Grotesk', -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
};

/* ---- the words, per language ------------------------------------------- */
const COPY = {
  fr: {
    subject:   'Ton rapport 8LovePatterns est arrivé',
    preheader: 'Ta commande est validée. Ton rapport complet est en pièce jointe.',
    hi:        'Bonjour,',
    paras: [
      'Merci. Tu viens de t\u2019offrir un vrai moment d\u2019honn\u00eatet\u00e9 avec toi-m\u00eame, et ce n\u2019est pas rien.',
      'Ta commande est valid\u00e9e, et ton rapport complet t\u2019attend en pi\u00e8ce jointe (PDF). Il est \u00e0 toi : garde-le, relis-le, reviens-y quand tu en auras besoin.',
      'Une chose, juste avant. Ce rapport n\u2019est pas un verdict, et ce qu\u2019il d\u00e9crit n\u2019est pas un d\u00e9faut : c\u2019est une fa\u00e7on que tu as trouv\u00e9e, un jour, de te prot\u00e9ger. On a tous la n\u00f4tre. Oser la regarder, comme maintenant, c\u2019est d\u00e9j\u00e0 le d\u00e9but de quelque chose.',
      'Prends ton temps avec ces pages, et sois doux avec toi. \u00c7a va aller.',
      'Une question ? R\u00e9ponds simplement \u00e0 ce mail, on est l\u00e0.',
    ],
    signoff:   'Avec soin,',
    team:      'L\u2019\u00e9quipe 8LovePatterns',
    attach:    'Pi\u00e8ce jointe',
    attachName:'Ton rapport complet (PDF)',
    footnote:  'Tu re\u00e7ois ce message car tu as command\u00e9 ton rapport complet sur 8lovepatterns.com.',
  },
  en: {
    subject:   'Your 8LovePatterns report is here',
    preheader: 'Your order is confirmed. Your full report is attached.',
    hi:        'Hi,',
    paras: [
      'First, thank you. You just gave yourself a real moment of honesty, and that takes courage.',
      'Your order is confirmed, and your full report is waiting for you, attached as a PDF. It is yours to keep: read it, sit with it, come back to it whenever you need to.',
      'One thing before you open it. This report is not a verdict, and what it describes is not a flaw: it is a way you once found to protect yourself when love felt unsafe. We all have ours. Choosing to look at it, the way you are right now, is already the start of something.',
      'Take your time with these pages, and be gentle with yourself. You are going to be okay.',
      'If any question comes up, just reply to this email. We are here.',
    ],
    signoff:   'With care,',
    team:      'The 8LovePatterns team',
    attach:    'Attached',
    attachName:'Your full report (PDF)',
    footnote:  'You are receiving this because you ordered your full report on 8lovepatterns.com.',
  },
};

function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

export function buildOrderEmail(opts = {}) {
  const lang = (opts.lang === 'fr') ? 'fr' : 'en';
  const c = COPY[lang];
  const site = opts.siteUrl || 'https://8lovepatterns.com';
  const logo = site + '/assets/logo_mascot.png';
  const profile = opts.profileName ? String(opts.profileName) : '';
  const attachLabel = profile ? (c.attachName.replace('(PDF)', '') + '\u00b7 ' + profile + ' (PDF)') : c.attachName;

  const paras = c.paras.map(p =>
    `<p style="margin:0 0 18px;font-family:${BRAND.font};font-size:16px;line-height:1.62;color:${BRAND.ink2};">${esc(p)}</p>`
  ).join('');

  const html =
`<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="color-scheme" content="light"/>
<title>${esc(c.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.paper};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${BRAND.paper};">${esc(c.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.paper};padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;width:100%;">

      <!-- brand -->
      <tr><td align="center" style="padding:8px 0 24px;">
        <img src="${logo}" width="40" height="40" alt="" style="display:inline-block;vertical-align:middle;border:0;"/>
        <span style="display:inline-block;vertical-align:middle;margin-left:10px;font-family:${BRAND.display};font-weight:800;font-size:20px;letter-spacing:-.01em;color:${BRAND.ink};">8LovePatterns</span>
      </td></tr>

      <!-- card -->
      <tr><td style="background:${BRAND.card};border:1px solid ${BRAND.hair};border-radius:22px;padding:36px 34px;">

        <div style="height:4px;width:46px;border-radius:999px;background:${BRAND.corail};margin:0 0 22px;"></div>

        <p style="margin:0 0 18px;font-family:${BRAND.display};font-weight:700;font-size:22px;line-height:1.25;color:${BRAND.ink};">${esc(c.hi)}</p>

        ${paras}

        <!-- attachment chip -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px 0 6px;width:100%;">
          <tr><td style="background:${BRAND.paper};border:1px solid ${BRAND.hair};border-radius:14px;padding:14px 16px;">
            <table role="presentation" cellpadding="0" cellspacing="0"><tr>
              <td valign="middle" style="padding-right:12px;">
                <span style="display:inline-block;width:34px;height:34px;border-radius:9px;background:${BRAND.corail};text-align:center;line-height:34px;">
                  <span style="font-family:${BRAND.display};font-weight:800;font-size:12px;color:#fff;">PDF</span>
                </span>
              </td>
              <td valign="middle">
                <div style="font-family:${BRAND.font};font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:${BRAND.ink3};">${esc(c.attach)}</div>
                <div style="font-family:${BRAND.font};font-size:15px;font-weight:600;color:${BRAND.ink};">${esc(attachLabel)}</div>
              </td>
            </tr></table>
          </td></tr>
        </table>

        <p style="margin:24px 0 2px;font-family:${BRAND.font};font-size:16px;line-height:1.5;color:${BRAND.ink2};">${esc(c.signoff)}</p>
        <p style="margin:0;font-family:${BRAND.display};font-weight:700;font-size:16px;color:${BRAND.ink};">${esc(c.team)}</p>

      </td></tr>

      <!-- footer -->
      <tr><td align="center" style="padding:22px 18px 8px;">
        <p style="margin:0 0 6px;font-family:${BRAND.font};font-size:13px;color:${BRAND.ink3};">
          <a href="mailto:support@8lovepatterns.com" style="color:${BRAND.ink2};text-decoration:none;">support@8lovepatterns.com</a>
        </p>
        <p style="margin:0;font-family:${BRAND.font};font-size:12px;line-height:1.5;color:${BRAND.ink3};">${esc(c.footnote)}</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;

  const text = [c.hi, '', ...c.paras, '', c.signoff, c.team, '', c.footnote || ''].join('\n');

  return { subject: c.subject, preheader: c.preheader, html, text };
}

export default buildOrderEmail;
