/* ============================================================================
   LovePattern  .  REPORT RENDERER  (browser, DOM only)
   ----------------------------------------------------------------------------
   Consumes the JSON produced by report-engine/assembler.mjs and lays out the
   reference gabarit: free zone, paid zone, the five VISUELs, book cards.

   It NEVER contains content and NEVER decides entitlement. It just draws what
   it is handed. The paid array is empty unless the server returned it.

   Public: window.LP_RENDER.renderReport(report, mountEl)
   House rule: never the long dash.
   ============================================================================ */
(function () {
  function el(tag, props, kids) {
    const n = document.createElement(tag);
    if (props) for (const k in props) {
      if (k === 'style') n.setAttribute('style', props[k]);
      else if (k === 'class') n.className = props[k];
      else if (k === 'html') n.innerHTML = props[k];
      else if (k === 'text') n.textContent = props[k];
      else n.setAttribute(k, props[k]);
    }
    (kids || []).forEach((c) => { if (c == null) return; n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  const A = () => LP_RENDER._accent || '#46934A';

  /* ---- shared atoms ----------------------------------------------------- */
  function kicker(txt) { return el('span', { class: 'rp-kicker', style: `color:${A()};` }, [txt]); }
  function sectionTitle(title, kick) {
    return el('div', { style: 'margin:0 0 18px;' }, [
      kick ? kicker(kick) : null,
      el('h2', { class: 'rp-h2', style: 'margin:6px 0 0;color:var(--encre);' }, [title]),
    ]);
  }
  function para(txt) { return el('p', { class: 'rp-p' }, [txt]); }
  function callout(c) {
    const tone = c.tone === 'care' ? '#C9433B' : A();
    const bg = c.tone === 'care' ? 'var(--corail-soft, #FBEAE6)' : `color-mix(in srgb, ${A()} 8%, #fff)`;
    return el('div', { style: `margin:18px 0 2px;padding:16px 20px;border-left:4px solid ${tone};background:${bg};border-radius:0 var(--r-md) var(--r-md) 0;` }, [
      el('p', { style: `margin:0;font-family:var(--font-serif);font-style:italic;font-size:1.08rem;line-height:1.55;color:${tone};text-wrap:pretty;` }, [c.text]),
    ]);
  }

  /* ---- VISUEL 1 . anchor scale (surface->fond, marked at position) ------ */
  function vAnchorScale(b) {
    const d = b.data || {}, v = b.visual || {};
    const pos = d.position != null ? d.position : 2;
    const rows = (v.paliers || []).map((p) => {
      const here = p.v === pos;
      const bascule = p.v === d.bascule && d.bascule !== pos;
      return el('div', { style: `display:grid;grid-template-columns:54px 1fr;gap:16px;align-items:center;padding:13px 16px;border-radius:var(--r-md);${here ? `background:color-mix(in srgb, ${A()} 13%, #fff);box-shadow:inset 0 0 0 2px ${A()};` : ''}` }, [
        el('div', { style: `display:grid;place-items:center;width:54px;height:54px;border-radius:50%;font-family:var(--font-display);font-size:1.4rem;${here ? `background:${A()};color:#fff;` : `background:var(--paper-2,#F1ECE2);color:var(--ink-3);`}` }, [String(p.v)]),
        el('div', {}, [
          el('div', { style: `font-size:1.02rem;line-height:1.45;color:${here ? 'var(--encre)' : 'var(--ink-2)'};font-weight:${here ? 700 : 500};text-wrap:pretty;` }, [p.phrase]),
          bascule ? el('div', { style: `margin-top:3px;font-size:.8rem;font-weight:700;color:${A()};` }, ['your tension drop']) : null,
        ]),
      ]);
    });
    return figure(b, el('div', {}, [
      el('div', { style: 'display:flex;flex-direction:column;gap:6px;' }, rows),
      v.subtitle ? el('p', { style: 'margin:16px 0 0;font-style:italic;color:var(--ink-3);font-size:.95rem;text-wrap:pretty;' }, [v.subtitle]) : null,
    ]));
  }

  /* ---- VISUEL 2 . the loop (4 steps in a ring) -------------------------- */
  function vLoop(b) {
    const v = b.visual || {};
    const steps = v.steps || [];
    const cells = steps.map((s, i) => el('div', { style: `position:relative;background:#fff;border:1px solid var(--hairline);border-top:3px solid ${A()};border-radius:var(--r-lg);padding:18px 18px;` }, [
      el('div', { style: `display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:color-mix(in srgb, ${A()} 14%, #fff);color:${A()};font-family:var(--font-display);font-size:1rem;margin-bottom:10px;` }, [String(i + 1)]),
      el('div', { style: 'font-size:1rem;line-height:1.5;color:var(--ink);text-wrap:pretty;' }, [s]),
    ]));
    return figure(b, el('div', {}, [
      el('div', { class: 'rp-loop', style: 'display:grid;grid-template-columns:1fr 1fr;gap:14px;position:relative;' }, cells),
      el('p', { style: `margin:16px 0 0;text-align:center;font-family:var(--font-serif);font-style:italic;color:${A()};font-size:1.05rem;` }, ['\u21ba ' + (v.caption || '')]),
    ]));
  }

  /* ---- VISUEL 3 . spillover table --------------------------------------- */
  function vTable(b) {
    const v = b.visual || {};
    const head = el('div', { style: `display:grid;grid-template-columns:1fr 1fr;gap:0;background:${A()};color:#fff;border-radius:var(--r-md) var(--r-md) 0 0;` }, [
      el('div', { style: 'padding:13px 18px;font-weight:700;font-size:.95rem;' }, [v.leftHead || '']),
      el('div', { style: 'padding:13px 18px;font-weight:700;font-size:.95rem;border-left:1px solid rgba(255,255,255,.25);' }, [v.rightHead || '']),
    ]);
    const rows = (v.rows || []).map((r, i) => el('div', { style: `display:grid;grid-template-columns:1fr 1fr;gap:0;background:${i % 2 ? 'var(--surface,#fff)' : '#fff'};` }, [
      el('div', { style: 'padding:14px 18px;font-size:1rem;line-height:1.45;color:var(--ink);border-top:1px solid var(--hairline);' }, [r[0]]),
      el('div', { style: 'padding:14px 18px;font-size:1rem;line-height:1.45;color:var(--ink-2);border-top:1px solid var(--hairline);border-left:1px solid var(--hairline);text-wrap:pretty;' }, [r[1]]),
    ]));
    return figure(b, el('div', { style: 'border:1px solid var(--hairline);border-radius:var(--r-md);overflow:hidden;' }, [head, ...rows]));
  }

  /* ---- VISUEL 4 . identity / synthesis card ----------------------------- */
  function vIdentity(b) {
    const f = b.fields || {};
    const code = LP_RENDER._code || 'mir';
    function row(label, value) {
      if (value == null || value === '') return null;
      return el('div', { style: 'display:flex;justify-content:space-between;gap:16px;align-items:baseline;padding:11px 0;border-top:1px solid rgba(255,255,255,.16);' }, [
        el('span', { style: 'font-size:.74rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.62);' }, [label]),
        el('span', { style: 'font-weight:600;color:#fff;text-align:right;text-wrap:pretty;' }, [String(value)]),
      ]);
    }
    const card = el('div', { style: `position:relative;overflow:hidden;border-radius:var(--r-xl);padding:clamp(24px,4vw,38px);color:#fff;background:linear-gradient(145deg, color-mix(in srgb, ${A()} 78%, #1b1530), ${A()});box-shadow:var(--sh-lg);` }, [
      el('div', { style: 'position:absolute;top:-30%;right:-10%;width:46%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle, rgba(255,255,255,.18), transparent 70%);' }, []),
      el('div', { style: 'position:relative;display:flex;align-items:center;gap:18px;margin-bottom:14px;' }, [
        el('div', { style: 'width:64px;height:64px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.12);display:grid;place-items:center;flex-shrink:0;' }, [
          el('img', { src: `assets/archetypes/${code}_avatar.png`, alt: '', style: 'width:100%;height:100%;object-fit:cover;' }, []),
        ]),
        el('div', {}, [
          el('div', { style: 'font-size:.72rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.7);' }, ['Summary card']),
          el('div', { class: 'rp-display', style: 'font-size:1.7rem;line-height:1.05;margin-top:4px;' }, [f.profil || '']),
        ]),
      ]),
      el('div', { style: 'position:relative;' }, [
        row('Dominant pattern', f.dominantScore != null ? `${f.profil} ${f.dominantScore}%` : f.profil),
        row('Second mechanism', f.secondaire ? (f.secondaireScore != null ? `${f.secondaire} ${f.secondaireScore}%` : f.secondaire) : null),
        row('Anchor', f.palierLibelle ? `level ${f.palier} \u00b7 ${f.palierLibelle}` : `level ${f.palier}`),
        row('Tension drop', (f.bascule != null && f.bascule !== f.palier) ? `down to level ${f.bascule}` : null),
        row('Sabotage lever', f.sabotage),
        row('Axis', f.axe),
      ]),
    ]);
    return figure(b, card);
  }

  /* ---- VISUEL 5 . compatibility columns --------------------------------- */
  function vCompat(b) {
    const v = b.visual || {};
    const toneColor = { apaise: '#3E8E5A', comprend: '#3F77A8', declenche: '#C0573E' };
    const cols = (v.columns || []).map((c) => {
      const color = toneColor[c.tone] || A();
      return el('div', { style: `background:#fff;border:1px solid var(--hairline);border-top:4px solid ${color};border-radius:var(--r-lg);padding:20px;` }, [
        el('div', { style: `font-size:.72rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:${color};margin-bottom:14px;` }, [c.label]),
        el('div', { style: 'display:flex;flex-direction:column;gap:11px;margin-bottom:14px;' }, (c.items || []).map((it) => el('div', { style: 'display:flex;align-items:center;gap:11px;' }, [
          el('span', { style: `width:42px;height:42px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1.5px solid color-mix(in srgb, ${color} 32%, #fff);background:color-mix(in srgb, ${color} 12%, #fff);display:grid;place-items:center;` }, [
            el('img', { src: `assets/archetypes/${it.code}_avatar.png`, alt: '', style: 'width:100%;height:100%;object-fit:cover;' }, []),
          ]),
          el('span', { style: 'font-weight:700;color:var(--ink);font-size:.97rem;text-wrap:pretty;' }, [it.name]),
        ]))),
        el('p', { style: 'margin:0;color:var(--ink-2);font-size:.92rem;line-height:1.5;text-wrap:pretty;' }, [c.blurb || '']),
      ]);
    });
    return figure(b, el('div', { class: 'rp-compat', style: 'display:grid;grid-template-columns:repeat(3,1fr);gap:16px;' }, cols));
  }

  /* wrap any visual with its [VISUEL n] label + optional title ------------ */
  function figure(b, body) {
    const v = b.visual || {};
    return el('section', { class: 'rp-block', style: 'margin:clamp(34px,5vw,56px) 0 0;' }, [
      b.title ? sectionTitle(b.title) : null,
      el('div', { style: 'margin-top:14px;' }, [body]),
    ]);
  }

  /* ---- prose / cta / disclaimer / books / exercises --------------------- */
  function renderProse(b) {
    return el('section', { class: 'rp-block', style: 'margin:clamp(34px,5vw,56px) 0 0;' }, [
      b.title ? sectionTitle(b.title) : null,
      b.lead ? el('p', { style: `margin:0 0 14px;font-family:var(--font-serif);font-size:1.2rem;line-height:1.45;color:${A()};text-wrap:pretty;` }, [b.lead]) : null,
      ...(b.paras || []).map(para),
      ...(b.callouts || []).map(callout),
    ]);
  }
  function renderExercises(b) {
    return el('section', { class: 'rp-block', style: 'margin:clamp(34px,5vw,56px) 0 0;' }, [
      b.title ? sectionTitle(b.title) : null,
      el('div', { style: 'display:flex;flex-direction:column;gap:14px;' }, (b.exercises || []).map((e) => el('div', { style: `background:#fff;border:1px solid var(--hairline);border-radius:var(--r-lg);padding:18px 22px;` }, [
        el('div', { style: `font-weight:800;color:${A()};margin-bottom:6px;font-size:1.02rem;` }, [e.label]),
        el('p', { class: 'rp-p', style: 'margin:0;' }, [e.body]),
      ]))),
      ...(b.callouts || []).map(callout),
    ]);
  }
  function renderBooks(b) {
    const spines = ['#211C46', '#4A7AA8', '#46934A', '#8A5AA8', '#C9433B', '#CE9A2E'];
    const cards = (b.books || []).map((bk, i) => {
      const spine = spines[i % spines.length];
      const cover = bk.cover
        ? el('img', { src: bk.cover, alt: bk.title, style: 'width:74px;height:104px;object-fit:cover;border-radius:4px 7px 7px 4px;flex-shrink:0;box-shadow:0 6px 16px -6px rgba(0,0,0,.4);' }, [])
        : el('div', { style: `width:74px;height:104px;border-radius:4px 7px 7px 4px;flex-shrink:0;background:linear-gradient(135deg,${spine},color-mix(in srgb,${spine} 70%,#000));box-shadow:0 6px 16px -6px ${spine}, inset 5px 0 0 rgba(255,255,255,.14);display:flex;flex-direction:column;justify-content:flex-end;padding:9px;` }, [
            el('span', { style: 'color:rgba(255,255,255,.92);font-size:.62rem;font-weight:700;line-height:1.2;text-wrap:pretty;' }, [bk.title]),
          ]);
      return el('div', { style: 'display:flex;gap:16px;background:#fff;border:1px solid var(--hairline);border-radius:var(--r-lg);padding:16px 18px;align-items:flex-start;' }, [
        cover,
        el('div', { style: 'min-width:0;' }, [
          el('div', { style: 'font-family:var(--font-serif);font-size:1.12rem;color:var(--encre);line-height:1.25;' }, [bk.title]),
          el('div', { style: 'color:var(--ink-3);font-size:.9rem;margin:2px 0 8px;' }, [bk.author + (bk.price ? '  \u00b7  ' + bk.price : '')]),
          el('p', { style: 'margin:0 0 10px;color:var(--ink-2);font-size:.95rem;line-height:1.5;text-wrap:pretty;' }, [bk.blurb]),
          bk.url
            ? el('a', { href: bk.url, target: '_blank', rel: 'sponsored noopener', style: `display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:.88rem;color:${A()};text-decoration:none;` }, ['View on Amazon \u2192'])
            : null,
        ]),
      ]);
    });
    return el('section', { class: 'rp-block', style: 'margin:clamp(34px,5vw,56px) 0 0;' }, [
      b.title ? sectionTitle(b.title) : null,
      b.lead ? el('p', { class: 'rp-p' }, [b.lead]) : null,
      el('div', { style: 'display:flex;flex-direction:column;gap:14px;margin-top:6px;' }, cards),
    ]);
  }
  function renderCta(b, onClick) {
    const btn = el('button', { class: 'rp-cta', type: 'button' }, [(b.cta && b.cta.label) || 'Continue', el('span', { style: 'font-size:1.1em;' }, ['\u2192'])]);
    if (onClick) btn.addEventListener('click', onClick);
    return el('div', { style: 'margin:clamp(36px,5vw,56px) 0 0;text-align:center;' }, [btn]);
  }
  function renderDisclaimer(b) {
    return el('section', { style: 'margin:clamp(40px,6vw,64px) 0 0;padding-top:22px;border-top:1px solid var(--hairline);' }, (b.paras || []).map((p) => el('p', { style: 'margin:0;font-size:.86rem;line-height:1.6;color:var(--ink-3);font-style:italic;text-wrap:pretty;' }, [p])));
  }

  function renderBlock(b, opts) {
    switch (b.type) {
      case 'prose': return renderProse(b);
      case 'exercises': return renderExercises(b);
      case 'bookcards': return renderBooks(b);
      case 'cta': return renderCta(b, opts && opts.onCta);
      case 'disclaimer': return renderDisclaimer(b);
      case 'identityCard': return vIdentity(b);
      case 'visual':
        if (b.visual && b.visual.kind === 'anchorScale') return vAnchorScale(b);
        if (b.visual && b.visual.kind === 'loop') return vLoop(b);
        if (b.visual && b.visual.kind === 'spilloverTable') return vTable(b);
        if (b.visual && b.visual.kind === 'compatColumns') return vCompat(b);
        return el('div', {}, []);
      default: return el('div', {}, []);
    }
  }

  /* ---- hero + zone dividers --------------------------------------------- */
  function hero(meta) {
    let dateStr = '';
    try { dateStr = new Date(meta.dateTest || Date.now()).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) {}
    return el('header', { style: `background:linear-gradient(160deg, color-mix(in srgb, ${A()} 15%, var(--paper)) 0%, var(--paper) 72%);padding:clamp(30px,5vw,56px) 0 clamp(22px,4vw,36px);` }, [
      el('div', { class: 'rp-wrap', style: 'display:grid;grid-template-columns:1fr auto;gap:26px;align-items:center;' }, [
        el('div', {}, [
          kicker('Your report'),
          el('h1', { class: 'rp-display', style: 'font-size:clamp(2.2rem,1.6rem+2.4vw,3.4rem);line-height:1.04;margin:10px 0 0;color:var(--encre);' }, [meta.nom]),
          el('div', { style: 'margin-top:12px;display:flex;flex-wrap:wrap;gap:8px;' }, [
            chip(`Level ${meta.palier}`),
            meta.palierLibelle ? chip(meta.palierLibelle) : null,
            meta.secondaireNom ? chip('+ ' + meta.secondaireNom) : null,
          ]),
          dateStr ? el('div', { style: 'margin-top:14px;color:var(--ink-3);font-size:.85rem;' }, ['Test taken on ' + dateStr]) : null,
        ]),
        el('div', { style: `width:clamp(110px,16vw,160px);aspect-ratio:3/4;border-radius:var(--r-xl);overflow:hidden;position:relative;background:radial-gradient(120% 90% at 50% 10%, color-mix(in srgb, ${A()} 26%, #fff), #fff);border:1px solid color-mix(in srgb, ${A()} 20%, #fff);box-shadow:var(--sh-lg);` }, [
          el('img', { src: `assets/archetypes/${meta.code}.png`, alt: meta.nom, style: 'position:absolute;bottom:0;left:50%;transform:translateX(-50%);height:92%;width:auto;max-width:94%;object-fit:contain;filter:drop-shadow(0 12px 16px rgba(20,16,45,.2));' }, []),
        ]),
      ]),
    ]);
  }
  function chip(t) { return el('span', { style: `display:inline-flex;align-items:center;padding:5px 12px;border-radius:var(--r-pill);background:color-mix(in srgb, ${A()} 12%, #fff);color:${A()};font-weight:700;font-size:.82rem;` }, [t]); }

  function zoneDivider(label) {
    return el('div', { class: 'rp-wrap', style: 'display:flex;align-items:center;gap:16px;margin:clamp(40px,6vw,68px) auto 0;' }, [
      el('span', { style: 'height:1px;flex:1;background:var(--hairline);' }, []),
      el('span', { style: `font-size:.72rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:${A()};` }, [label]),
      el('span', { style: 'height:1px;flex:1;background:var(--hairline);' }, []),
    ]);
  }

  /* ============================ MAIN ===================================== */
  function renderReport(report, mount, opts) {
    opts = opts || {};
    LP_RENDER._accent = (report.meta && report.meta.accent) || '#46934A';
    LP_RENDER._code = (report.meta && report.meta.code) || 'mir';
    mount.innerHTML = '';
    mount.appendChild(hero(report.meta || {}));

    const paid = report.paid || [];
    const free = el('div', { class: 'rp-wrap' }, []);
    (report.free || []).forEach((b) => {
      if (paid.length && b.type === 'cta') return;
      free.appendChild(renderBlock(b, opts));
    });
    mount.appendChild(free);

    if (paid.length) {
      mount.appendChild(zoneDivider('Your plan'));
      const paidWrap = el('div', { class: 'rp-wrap' }, []);
      paid.forEach((b) => paidWrap.appendChild(renderBlock(b, opts)));
      mount.appendChild(paidWrap);
    } else if (opts.lockedNotice) {
      mount.appendChild(zoneDivider('Your plan'));
      const lock = el('div', { class: 'rp-wrap', style: 'padding:clamp(34px,5vw,56px) 0;' }, [opts.lockedNotice]);
      mount.appendChild(lock);
    }
  }

  window.LP_RENDER = { renderReport, renderBlock, el };
})();
