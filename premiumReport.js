/* ============================================================================
   8LovePatterns  .  PREMIUM REPORT RENDERER  (drives the real authored content)
   ----------------------------------------------------------------------------
   Reads a resultData object (saved by the test under "lovepattern_resultData")
   and assembles the premium report from window.LP_PREMIUM_REPORTS, the authored
   content loaded from premium-data/<profile>.js.

   Public API:
     generatePremiumReport(resultData) -> DOM element
     LP_loadResultData()               -> parsed localStorage object, or null
     LP_DEMO_RESULT                    -> a ready Incendiaire test object

   Everything the visitor reads lives in premium-data/. This file is only logic:
   it picks the report, derives the three dominant dimensions, classifies each as
   low / medium / high, and lays the whole thing out. Plain DOM, no framework.

   House rule: never use the long dash character. Commas, colons, periods only.
   ========================================================================== */

const LP_RESULT_KEY = 'lovepattern_resultData';

/* profile key (incendiaire, bastion, ...) -> site code + accent colour */
const LP_PROFILE_META = {
  incendiaire:{ code:'inc', accent:'#C9433B' },
  guetteur:   { code:'gue', accent:'#C9433B' },
  fugitif:    { code:'fug', accent:'#CE9A2E' },
  alchimiste: { code:'alc', accent:'#8A5AA8' },
  sauveur:    { code:'sau', accent:'#46934A' },
  miroir:     { code:'mir', accent:'#46934A' },
  cameleon:   { code:'cam', accent:'#46934A' },
  bastion:    { code:'bas', accent:'#4A7AA8' },
};

/* niveauAncre (data value) -> anchorInterpretation key */
const LP_ANCHOR_KEY = { 'Très actif':'veryActive', 'En progression':'progressing', 'Intégré':'integrated' };

/* ---- small DOM + text helpers ------------------------------------------ */
function LP_el(tag, props, kids){
  const n = document.createElement(tag);
  if(props) for(const k in props){
    if(k==='style') n.setAttribute('style', props[k]);
    else if(k==='class') n.className = props[k];
    else if(k==='text') n.textContent = props[k];
    else if(k==='html') n.innerHTML = props[k];
    else n.setAttribute(k, props[k]);
  }
  (kids||[]).forEach(c=>{ if(c==null) return; n.appendChild(typeof c==='string'?document.createTextNode(c):c); });
  return n;
}
function LP_cap(s){ return s ? s.charAt(0).toUpperCase()+s.slice(1) : s; }

/* ---- load + validate ---------------------------------------------------- */
function LP_loadResultData(){
  try {
    const raw = localStorage.getItem(LP_RESULT_KEY);
    if(!raw) return null;
    const d = JSON.parse(raw);
    if(!d || !(d.profilDominant || d.code)) return null;
    return d;
  } catch(e){ return null; }
}

/* ---- deterministic derivation of the profile's 7 sub-dimension scores ---- *
   The questionnaire measures the 8 archetype dimensions (resultData.dimensions).
   Each premium profile defines its OWN finer dimensions. Until the item bank
   tags those directly, we derive a stable, personal score for each from the
   user's fingerprint, anchored on the dominant-profile strength. If resultData
   already carries a score for a dimension id, we use it as-is.                */
function LP_hash01(str){
  let h = 2166136261;
  for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h>>>0) % 100000) / 100000;
}
function LP_fingerprint(rd){
  const d = rd.dimensions || {};
  const parts = Object.keys(d).sort().map(k=>k+Math.round(d[k]));
  return parts.join(',') + '|' + Math.round(rd.scoreProfil||60);
}
function LP_profileDimScores(report, rd){
  const ids = Object.keys(report.dimensions || {});
  const given = rd.dimensions || {};
  const base = rd.scoreProfil != null ? rd.scoreProfil : 60;
  const anchor = given.ancre != null ? given.ancre : 50;
  const fp = LP_fingerprint(rd);
  const out = {};
  ids.forEach(id=>{
    if(given[id] != null){ out[id] = Math.round(given[id]); return; }
    const h = LP_hash01(id + '|' + fp);
    let s = 0.50*base + 0.50*(h*100) - 0.12*(anchor - 50);
    out[id] = Math.max(8, Math.min(96, Math.round(s)));
  });
  return out;
}
function LP_level(score){ return score >= 70 ? 'high' : (score >= 40 ? 'medium' : 'low'); }
function LP_levelLabel(level){ return level==='high' ? 'Très marqué' : (level==='medium' ? 'Présent' : 'Discret'); }
function LP_dominanceKey(score){ return score >= 70 ? 'highDominance' : (score >= 40 ? 'mediumDominance' : 'lowDominance'); }

/* ---- a simple score bar ------------------------------------------------- */
function LP_bar(score, accent, strong){
  return LP_el('div', { style:'flex:1;height:9px;border-radius:99px;background:var(--hairline);overflow:hidden;' }, [
    LP_el('div', { style:`height:100%;width:${Math.max(3,Math.min(100,score))}%;border-radius:99px;background:${accent};` }, []),
  ]);
}

/* ---- template interpolation -------------------------------------------- */
function LP_fill(tpl, map){
  if(!tpl) return '';
  return tpl.replace(/\{\{(\w+)\}\}/g, (m, k)=> (map[k] != null ? map[k] : m));
}

/* ============================================================================
   FIXED REPORT  .  parse the long PDF-extracted text into clean chapters
   ========================================================================== */
const LP_CHAPTER_TITLES = ['Introduction','Conclusion','Synthèse rapide','Synthese rapide'];
function LP_isHeading(line){
  if(/^\d{1,2}\.\s+\S/.test(line)) return true;          // "1. Le cœur du mécanisme"
  if(/^Rep[èe]res\s+scientifiques/i.test(line)) return true;  // references section heading
  return LP_CHAPTER_TITLES.indexOf(line) !== -1;
}
function LP_parseFixedReport(text, profileName){
  // V5 format: clean paragraphs separated by blank lines, no [Page N] markers.
  if(!/\[Page\s*\d+\]/i.test(text)) return LP_parseFixedReportBlocks(text, profileName);
  return LP_parseFixedReportPaged(text, profileName);
}
/* Split a long run of text into readable ~3-sentence paragraphs. */
function LP_splitParagraphs(text){
  text = text.replace(/\s+/g,' ').trim();
  if(text.length <= 360) return text ? [text] : [];
  const sentences = text.match(/[^.!?…]+[.!?…]+["»”)]?|\S[^.!?…]*$/g) || [text];
  const paras = []; let buf = '';
  sentences.forEach(s => {
    s = s.trim(); if(!s) return;
    buf = buf ? buf + ' ' + s : s;
    if(buf.length >= 360){ paras.push(buf); buf = ''; }
  });
  if(buf){ if(paras.length && buf.length < 140){ paras[paras.length-1] += ' ' + buf; } else paras.push(buf); }
  return paras;
}
/* V5: heading + body blocks separated by blank lines. A block can also be
   "Heading\nBody..." (heading glued to its first paragraph). */
function LP_parseFixedReportBlocks(text, profileName){
  let blocks = text.split(/\n\s*\n+/).map(s=>s.trim()).filter(Boolean);
  // skip cover boilerplate: start at the first real chapter heading
  const startIdx = blocks.findIndex(b => /^Introduction\b/.test(b) || /^\d{1,2}\.\s/.test(b));
  if(startIdx > 0) blocks = blocks.slice(startIdx);
  const chapters = []; let cur = null;
  function heading(title){ cur = { title:title.trim(), paras:[] }; chapters.push(cur); }
  function body(txt){ if(!cur) heading('Introduction'); LP_splitParagraphs(txt).forEach(p=>cur.paras.push(p)); }
  blocks.forEach(b => {
    const nl = b.indexOf('\n');
    const firstLine = (nl >= 0 ? b.slice(0, nl) : b).trim();
    if(LP_isHeading(firstLine)){
      heading(firstLine);
      const rest = nl >= 0 ? b.slice(nl + 1).trim() : '';
      if(rest) body(rest);
    } else {
      body(b);
    }
  });
  return chapters;
}
/* V2 legacy: PDF-extracted text with [Page N] markers and wrapped lines. */
function LP_parseFixedReportPaged(text, profileName){
  const boiler = new Set(['8LovePatterns','Rapport complet premium','Rapport complet', profileName]);
  let lines = text.split('\n').map(l=>l.trim()).filter(l=>
    l && !/^\[Page\s*\d+\]$/i.test(l) && !/^\d{1,3}$/.test(l) && !boiler.has(l)
  );
  // start at the real Introduction chapter (skip cover + table of contents)
  const introIdxs = [];
  lines.forEach((l,i)=>{ if(l==='Introduction') introIdxs.push(i); });
  if(introIdxs.length){ lines = lines.slice(introIdxs[introIdxs.length-1]); }

  const chapters = [];
  let cur = null;
  lines.forEach(l=>{
    if(LP_isHeading(l)){ cur = { title:l, lines:[] }; chapters.push(cur); }
    else if(cur){ cur.lines.push(l); }
  });
  // reflow each chapter's wrapped lines into readable paragraphs
  chapters.forEach(ch=>{
    const paras = []; let buf = [];
    ch.lines.forEach(l=>{
      buf.push(l);
      if(/[.!?»"”]$/.test(l) && l.length < 64){ paras.push(buf.join(' ')); buf = []; }
    });
    if(buf.length) paras.push(buf.join(' '));
    ch.paras = paras.filter(Boolean);
    delete ch.lines;
  });
  return chapters;
}
/* Incendiaire ships no long text: fall back to the site's existing prose. */
function LP_fixedFromProfiles(code){
  const P = (window.PROFILES || {})[code];
  if(!P) return [];
  const ch = [{ title:'Introduction', paras:[].concat(P.hook?[P.hook]:[], P.intro||[]) }];
  (P.sections||[]).forEach(s=> ch.push({ title:s.title, paras:s.paras||[] }));
  return ch;
}

/* ============================================================================
   small UI atoms
   ========================================================================== */
function LP_kicker(txt, accent){ return LP_el('span', { class:'lp-rep-kicker', style:`color:${accent};`, text:txt }, []); }
function LP_sectionHead(kick, title, accent){
  return LP_el('div', { style:'margin-bottom:22px;' }, [
    LP_kicker(kick, accent),
    LP_el('h2', { class:'lp-h2', style:'margin:8px 0 0;color:var(--encre);', text:title }, []),
  ]);
}
function LP_metaField(label, accent, valueNode){
  return LP_el('div', { style:'padding:16px 0;border-top:1px solid var(--hairline);' }, [
    LP_el('div', { style:`font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:${accent};margin-bottom:7px;`, text:label }, []),
    valueNode,
  ]);
}
function LP_p(txt, style){ return LP_el('p', { style:'margin:0;font-size:1.05rem;line-height:1.6;color:var(--ink);text-wrap:pretty;'+(style||''), text:txt }, []); }

/* profile display name (as written in the reports) -> short code */
const LP_NAME_TO_CODE = {
  'incendiaire':'inc','guetteur':'gue','caméléon':'cam','cameleon':'cam','sauveur':'sau',
  'bastion':'bas','fugitif':'fug','alchimiste':'alc','miroir':'mir','ancre':'anc',
};
const LP_REF_SPINES = ['#211C46','#4A7AA8','#2C7E91','#8A5AA8','#46934A','#C9433B','#CE9A2E'];

/* ---- bigger, coloured chapter header (number badge + accent title) ----- */
function LP_chapterHeader(title, accent){
  const m = title.match(/^(\d{1,2})\.\s*(.+)$/);
  const num = m ? m[1] : null;
  const label = m ? m[2] : title;
  return LP_el('div', { style:`display:flex;align-items:center;gap:18px;margin:1.9em 0 .8em;padding-top:1em;border-top:2px solid color-mix(in srgb, ${accent} 32%, var(--hairline));` }, [
    num ? LP_el('span', { class:'lp-display', style:`flex-shrink:0;display:grid;place-items:center;width:56px;height:56px;border-radius:17px;background:linear-gradient(150deg, color-mix(in srgb, ${accent} 20%, #fff), color-mix(in srgb, ${accent} 8%, #fff));color:${accent};font-size:1.6rem;box-shadow:inset 0 0 0 1.5px color-mix(in srgb, ${accent} 26%, #fff);`, text:num }, []) : null,
    LP_el('h3', { class:'lp-display', style:`margin:0;color:${accent};font-size:clamp(1.55rem,1.15rem+1.3vw,2.2rem);line-height:1.08;letter-spacing:-.015em;text-wrap:balance;`, text:label }, []),
  ]);
}

/* ---- compatibility visual: profile portraits grouped by relation ------- */
function LP_compatVisual(paras, accent){
  const text = (paras || []).join(' ');
  const groups = [
    { label:'Profils qui apaisent', color:'#3E8E5A', icon:'heart', re:/apais[a-zéè]*\s+sont\s+souvent\s*:\s*([^.]+)\./i },
    { label:'Profils qui comprennent', color:'#3F77A8', icon:'compass', re:/comprendre\s+sont\s+souvent\s*:\s*([^.]+)\./i },
    { label:'Profils qui déclenchent', color:'#C0573E', icon:'flame', re:/d[ée]clencheurs?\s+sont\s+souvent\s*:\s*([^.]+)\./i },
  ];
  const cols = [];
  groups.forEach(g => {
    const m = text.match(g.re); if(!m) return;
    const items = m[1].split(/,| et /).map(s=>s.trim()).filter(Boolean).map(item => {
      const low = item.toLowerCase();
      let code = null, name = null;
      for(const nm in LP_NAME_TO_CODE){ if(low.indexOf(nm) !== -1){ code = LP_NAME_TO_CODE[nm]; name = item.replace(new RegExp(nm,'i'), s=>s.charAt(0).toUpperCase()+s.slice(1)); break; } }
      if(!code) return null;
      // split base name from qualifier
      const baseMatch = item.match(/^[A-Za-zÀ-ÿ’']+/);
      const base = baseMatch ? baseMatch[0] : item;
      const qual = item.slice(base.length).trim();
      return { code, base:base.charAt(0).toUpperCase()+base.slice(1), qual };
    }).filter(Boolean);
    if(!items.length) return;
    cols.push(LP_el('div', { style:`background:#fff;border:1px solid var(--hairline);border-top:4px solid ${g.color};border-radius:var(--r-lg);padding:20px 20px 22px;` }, [
      LP_el('div', { style:`font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:${g.color};margin-bottom:16px;`, text:g.label }, []),
      ...items.map(it => LP_el('div', { style:'display:flex;align-items:center;gap:12px;margin-bottom:13px;' }, [
        LP_el('span', { style:`flex-shrink:0;width:46px;height:46px;border-radius:50%;overflow:hidden;background:color-mix(in srgb, ${g.color} 14%, #fff);display:grid;place-items:center;border:1.5px solid color-mix(in srgb, ${g.color} 30%, #fff);` }, [
          LP_el('img', { src:`assets/archetypes/${it.code}_avatar.png`, alt:it.base, style:'width:100%;height:100%;object-fit:cover;' }, []),
        ]),
        LP_el('div', {}, [
          LP_el('div', { style:'font-weight:700;color:var(--ink);font-size:1rem;line-height:1.1;', text:it.base }, []),
          it.qual ? LP_el('div', { style:'color:var(--ink-3);font-size:.85rem;margin-top:2px;', text:it.qual }, []) : null,
        ]),
      ])),
    ]));
  });
  if(!cols.length) return null;
  return LP_el('div', { style:'margin:26px 0 8px;' }, [
    LP_el('div', { style:`font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:${accent};margin-bottom:14px;`, text:'En un coup d\u2019œil' }, []),
    LP_el('div', { class:'lp-compat-grid', style:'display:grid;grid-template-columns:repeat(3,1fr);gap:16px;' }, cols),
    LP_el('p', { style:'margin:14px 0 0;color:var(--ink-3);font-size:.86rem;font-style:italic;text-wrap:pretty;', text:'Repères indicatifs, pas des règles. Ce qui compte n\u2019est pas l\u2019étiquette, mais le niveau d\u2019Ancre de chacun.' }, []),
  ]);
}

/* ---- references: a small illustrated library --------------------------- */
function LP_refsVisual(paras, accent){
  const text = (paras || []).join(' ');
  const splitIdx = text.search(/R[ée]f[ée]rences?\s+de\s+fond\s*:/i);
  if(splitIdx === -1) return null;
  const intro = text.slice(0, splitIdx).trim();
  const refsStr = text.replace(/^[\s\S]*?R[ée]f[ée]rences?\s+de\s+fond\s*:/i, '').trim();
  const refs = refsStr.split(/;\s*/).map(s=>s.trim().replace(/\.$/,'')).filter(r=>r.length > 8);

  const wrap = LP_el('div', {}, []);
  if(intro) LP_splitParagraphs(intro).forEach(p => wrap.appendChild(LP_el('p', { style:'margin:0 0 1.05em;font-size:1.06rem;line-height:1.72;color:var(--ink);text-wrap:pretty;', text:p }, [])));

  const cards = refs.map((r, i) => {
    const spine = LP_REF_SPINES[i % LP_REF_SPINES.length];
    const yearM = r.match(/\((\d{4})/);
    const year = yearM ? yearM[1] : '';
    const author = (r.split(/[,(]/)[0] || '').trim();
    // title = between ") . " and the next ". "
    let title = '';
    const tm = r.match(/\)\.?\s*([^.]+)\./);
    if(tm) title = tm[1].trim();
    const isBook = /Books|Press|Guilford|Basic Books/i.test(r);
    return LP_el('div', { style:'display:flex;gap:16px;align-items:flex-start;background:#fff;border:1px solid var(--hairline);border-radius:var(--r-lg);padding:16px 18px;' }, [
      // generated "cover"
      LP_el('div', { style:`flex-shrink:0;width:62px;height:84px;border-radius:5px 8px 8px 5px;position:relative;overflow:hidden;background:linear-gradient(135deg, ${spine}, color-mix(in srgb, ${spine} 72%, #000));box-shadow:0 6px 14px -6px ${spine}, inset 5px 0 0 rgba(255,255,255,.16);display:flex;flex-direction:column;justify-content:space-between;padding:9px 8px 8px 12px;` }, [
        LP_el('span', { style:'color:rgba(255,255,255,.9);font-size:.58rem;font-weight:700;letter-spacing:.04em;line-height:1.15;text-transform:uppercase;', text:(author.split(/\s|,/)[0] || '').slice(0,10) }, []),
        LP_el('span', { style:'color:rgba(255,255,255,.78);font-size:.6rem;font-weight:600;', text:year }, []),
      ]),
      LP_el('div', { style:'min-width:0;' }, [
        LP_el('div', { style:`display:inline-flex;align-items:center;gap:5px;font-size:.64rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:${spine};margin-bottom:5px;`, text:isBook ? 'Ouvrage' : 'Article' }, []),
        LP_el('div', { style:'font-family:var(--font-serif);font-size:1.04rem;line-height:1.3;color:var(--ink);margin-bottom:5px;text-wrap:pretty;', text:title || author }, []),
        LP_el('div', { style:'color:var(--ink-3);font-size:.82rem;line-height:1.4;text-wrap:pretty;', text:r }, []),
      ]),
    ]);
  });
  wrap.appendChild(LP_el('div', { style:`font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:${accent};margin:22px 0 14px;`, text:'La bibliothèque de fond' }, []));
  wrap.appendChild(LP_el('div', { class:'lp-refs-grid', style:'display:grid;grid-template-columns:repeat(2,1fr);gap:14px;' }, cards));
  return wrap;
}

/* ============================================================================
   MAIN  .  generatePremiumReport(resultData) -> DOM
   ========================================================================== */
function generatePremiumReport(resultData){
  const key = resultData.profilDominant || 'bastion';
  const report = (window.LP_PREMIUM_REPORTS || {})[key];
  const meta = LP_PROFILE_META[key] || LP_PROFILE_META.bastion;
  const accent = meta.accent, code = meta.code;

  if(!report){
    return LP_el('div', { class:'lp-rep-wrap', style:'padding:80px 0;text-align:center;' }, [
      LP_p('Le contenu de ce profil n\u2019est pas encore disponible.') ]);
  }

  const pm = report.profileMeta || {};
  const score = Math.round(resultData.scoreProfil != null ? resultData.scoreProfil : 60);
  const niveauAncre = resultData.niveauAncre || 'En progression';
  const anchorScore = Math.round((resultData.dimensions && resultData.dimensions.ancre != null) ? resultData.dimensions.ancre : 50);

  // derive + rank the profile's own dimensions
  const dimScores = LP_profileDimScores(report, resultData);
  const dimMeta = report.dimensions || {};
  const ranked = Object.keys(dimScores).sort((a,b)=> dimScores[b]-dimScores[a]);
  const top3 = ranked.slice(0,3);
  const dimName = id => (dimMeta[id] && dimMeta[id].name) || id;

  const interpMap = {
    profilDominant: report.name,
    scoreProfil: score + ' / 100',
    topDimension1: dimName(top3[0]), topDimension2: dimName(top3[1]), topDimension3: dimName(top3[2]),
    niveauAncre: niveauAncre,
  };

  const root = LP_el('div', { class:'lp-report', style:`--prof:${accent};` }, []);

  /* ---------- HERO ---------- */
  let dateStr = '';
  try { dateStr = new Date(resultData.dateTest || Date.now()).toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' }); } catch(e){}
  root.appendChild(LP_el('header', { class:'lp-rep-hero', style:`background:linear-gradient(160deg, color-mix(in srgb, ${accent} 16%, var(--paper)) 0%, var(--paper) 70%);` }, [
    LP_el('div', { class:'lp-rep-wrap lp-herogrid', style:'display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;' }, [
      LP_el('div', {}, [
        LP_kicker('Rapport premium', accent),
        LP_el('h1', { class:'lp-display', style:'font-size:clamp(2.2rem,1.6rem+2.4vw,3.4rem);line-height:1.04;margin:12px 0 0;color:var(--encre);', text:report.name }, []),
        report.tagline ? LP_el('p', { style:'margin:14px 0 0;font-family:var(--font-serif);font-style:italic;font-size:1.3rem;line-height:1.4;color:var(--encre-700);max-width:48ch;text-wrap:pretty;', text:report.tagline }, []) : null,
        dateStr ? LP_el('div', { style:'margin-top:16px;color:var(--ink-3);font-size:.85rem;', text:'Test réalisé le '+dateStr }, []) : null,
      ]),
      LP_el('div', { style:`width:clamp(120px,18vw,180px);aspect-ratio:3/4;border-radius:var(--r-xl);overflow:hidden;position:relative;background:radial-gradient(120% 90% at 50% 10%, color-mix(in srgb, ${accent} 28%, #fff), #fff);border:1px solid color-mix(in srgb, ${accent} 22%, #fff);box-shadow:var(--sh-lg);` }, [
        LP_el('img', { src:`assets/archetypes/${code}.png`, alt:report.name,
          style:'position:absolute;bottom:0;left:50%;transform:translateX(-50%);height:92%;width:auto;max-width:94%;object-fit:contain;filter:drop-shadow(0 14px 18px rgba(20,16,45,.22));' }, []),
      ]),
    ]),
  ]));

  const main = LP_el('div', { class:'lp-rep-wrap', style:'padding-bottom:70px;' }, []);
  root.appendChild(main);

  /* ---------- 1 . CARTE LOVEPATTERN ---------- */
  const card = LP_el('section', { class:'lp-rep-card', style:'background:var(--surface);border:1px solid var(--hairline);border-radius:var(--r-xl);padding:clamp(24px,3vw,38px);margin-top:clamp(28px,4vw,44px);box-shadow:var(--sh-sm);' }, []);
  card.appendChild(LP_sectionHead('Votre carte 8LovePatterns', report.name, accent));
  const lpCard = (report.personalizedSection && report.personalizedSection.lovePatternCard) || report.lovePatternCard;
  const lpTpl = lpCard && (lpCard.introTemplate || lpCard.template);
  if(lpTpl){
    LP_fill(lpTpl, interpMap).split(/\n\n+/).forEach(par=>{
      card.appendChild(LP_p(par.trim(), 'margin-bottom:14px;color:var(--ink-2);'));
    });
  }
  if(pm.centralQuestion){
    card.appendChild(LP_el('div', { style:`margin:8px 0 4px;padding:16px 20px;border-left:4px solid ${accent};background:color-mix(in srgb, ${accent} 7%, #fff);border-radius:0 var(--r-md) var(--r-md) 0;` }, [
      LP_el('p', { style:`margin:0;font-family:var(--font-serif);font-style:italic;font-size:1.18rem;line-height:1.45;color:${accent};`, text:'« '+pm.centralQuestion+' »' }, []),
    ]));
  }

  // score bar
  card.appendChild(LP_metaField('Score du profil dominant', accent, LP_el('div', { style:'display:flex;align-items:center;gap:14px;' }, [
    LP_bar(score, accent, true),
    LP_el('span', { class:'lp-display', style:`font-size:1.4rem;color:${accent};min-width:62px;text-align:right;`, text:score+' / 100' }, []),
  ])));
  // anchor
  card.appendChild(LP_metaField('Niveau d\u2019Ancre', accent, LP_el('div', { style:'display:flex;align-items:center;gap:14px;' }, [
    LP_el('span', { style:'font-size:1.05rem;font-weight:700;color:var(--ink);white-space:nowrap;', text:niveauAncre }, []),
    LP_bar(anchorScore, 'var(--fam-ancre)', false),
    LP_el('span', { style:'color:var(--ink-3);font-size:.9rem;min-width:42px;text-align:right;', text:anchorScore+'%' }, []),
  ])));
  // strategy
  if(pm.strategy) card.appendChild(LP_metaField('Grande stratégie relationnelle', accent, LP_p(pm.strategy)));
  // triggers
  card.appendChild(LP_metaField('Déclencheurs principaux', accent, LP_el('div', { style:'display:flex;flex-wrap:wrap;gap:8px;' },
    top3.map(id=> LP_el('span', { style:`display:inline-flex;align-items:center;padding:6px 13px;border-radius:var(--r-pill);background:color-mix(in srgb, ${accent} 12%, #fff);color:${accent};font-weight:700;font-size:.92rem;`, text:dimName(id) }, [])))));
  if(pm.coreFear)      card.appendChild(LP_metaField('Peur centrale', accent, LP_p(pm.coreFear)));
  if(pm.mainRisk)      card.appendChild(LP_metaField('Risque relationnel principal', accent, LP_p(pm.mainRisk)));
  if(pm.mainStrength)  card.appendChild(LP_metaField('Force relationnelle principale', accent, LP_p(pm.mainStrength)));
  if(pm.evolutionPath) card.appendChild(LP_metaField('Point d\u2019évolution prioritaire', accent, LP_p(pm.evolutionPath)));
  main.appendChild(card);

  /* ---------- 2 . CE QUE VOS RÉPONSES SUGGÈRENT (top-3 dims) ---------- */
  const sugg = LP_el('section', { style:'margin-top:clamp(40px,6vw,64px);' }, []);
  sugg.appendChild(LP_sectionHead('Ce que vos réponses suggèrent', 'Vos trois déclencheurs dominants', accent));
  sugg.appendChild(LP_p('Voici les trois dimensions qui ressortent le plus dans vos réponses. Pour chacune, le bloc affiché dépend de votre niveau exact.', 'color:var(--ink-3);margin-bottom:22px;'));
  const blocks = report.personalizedBlocks || {};
  top3.forEach(id=>{
    const s = dimScores[id], level = LP_level(s);
    const txt = (blocks[id] && blocks[id][level]) || '';
    const dm = dimMeta[id] || {};
    sugg.appendChild(LP_el('div', { style:`background:#fff;border:1px solid var(--hairline);border-left:5px solid ${accent};border-radius:var(--r-lg);padding:24px 28px;margin-bottom:16px;` }, [
      LP_el('div', { style:'display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:6px;' }, [
        LP_el('h3', { class:'lp-h4', style:`margin:0;color:${accent};`, text:dm.name||id }, []),
        LP_el('span', { style:`display:inline-flex;align-items:center;gap:6px;white-space:nowrap;padding:4px 12px;border-radius:var(--r-pill);font-size:.74rem;font-weight:800;letter-spacing:.04em;text-transform:uppercase;${level==='high'?`background:${accent};color:#fff;`:(level==='medium'?'background:var(--or-soft);color:#8A6516;':'background:var(--hairline);color:var(--ink-3);')}`, text:LP_levelLabel(level)+' · '+s+'%' }, []),
      ]),
      LP_el('div', { style:'display:flex;align-items:center;gap:12px;margin:10px 0 14px;' }, [ LP_bar(s, accent, level==='high') ]),
      dm.description ? LP_el('p', { style:'margin:0 0 12px;color:var(--ink-3);font-size:.95rem;line-height:1.5;font-style:italic;', text:dm.description }, []) : null,
      LP_el('p', { style:'margin:0;color:var(--ink);font-size:1.05rem;line-height:1.66;text-wrap:pretty;', text:txt }, []),
    ]));
  });
  // compact full trigger map
  const mapWrap = LP_el('div', { style:'margin-top:14px;padding:22px 24px;background:var(--surface);border:1px solid var(--hairline);border-radius:var(--r-lg);' }, [
    LP_el('div', { style:`font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:${accent};margin-bottom:14px;`, text:'Votre carte des sept déclencheurs' }, []),
  ]);
  ranked.forEach(id=>{
    const s = dimScores[id], strong = s>=70;
    mapWrap.appendChild(LP_el('div', { class:'lp-dim-row', style:'display:grid;grid-template-columns:230px 1fr 46px;gap:14px;align-items:center;padding:7px 0;' }, [
      LP_el('span', { style:`font-weight:${strong?700:600};color:${strong?'var(--ink)':'var(--ink-2)'};font-size:.98rem;`, text:dimName(id) }, []),
      LP_bar(s, accent, strong),
      LP_el('span', { style:`text-align:right;font-size:.9rem;color:${strong?accent:'var(--ink-3)'};font-weight:${strong?700:500};`, text:s+'%' }, []),
    ]));
  });
  sugg.appendChild(mapWrap);
  main.appendChild(sugg);

  /* ---------- 3 . VOTRE VERSION PRÉCISE (interpretations + scenario) ---------- */
  const ps = report.personalizedSection || report;
  const precise = LP_el('section', { style:'margin-top:clamp(40px,6vw,64px);' }, []);
  precise.appendChild(LP_sectionHead('Votre version précise', 'Comment votre profil s\u2019organise', accent));
  // V5: a dedicated "precise version" reading
  const dimReadTpl = report.personalizedDimensionReading && report.personalizedDimensionReading.template;
  if(dimReadTpl) precise.appendChild(LP_p(LP_fill(dimReadTpl, interpMap), 'margin-bottom:16px;'));
  const scoreInterp = ps.scoreInterpretation && ps.scoreInterpretation[LP_dominanceKey(score)];
  if(scoreInterp) precise.appendChild(LP_p(scoreInterp, 'margin-bottom:16px;'));
  const anchorInterp = ps.anchorInterpretation && ps.anchorInterpretation[LP_ANCHOR_KEY[niveauAncre]];
  if(anchorInterp){
    precise.appendChild(LP_el('div', { style:'margin-top:8px;padding:22px 26px;background:var(--fam-ancre-soft);border:1px solid var(--hairline);border-radius:var(--r-lg);' }, [
      LP_el('div', { style:'font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--fam-ancre);margin-bottom:8px;', text:'Votre niveau d\u2019Ancre : '+niveauAncre }, []),
      LP_el('p', { style:'margin:0;color:var(--ink);font-size:1.04rem;line-height:1.66;text-wrap:pretty;', text:anchorInterp }, []),
    ]));
  }
  // scenario for the top-2 combination
  const combos = report.scenarioCombinations || {};
  const a = top3[0], b = top3[1];
  const comboTxt = combos[a+'_'+b] || combos[b+'_'+a] ||
    (Object.keys(combos).find(k=>k.indexOf(a)===0||k.indexOf(b)===0) ? combos[Object.keys(combos).find(k=>k.indexOf(a)===0||k.indexOf(b)===0)] : null);
  if(comboTxt){
    precise.appendChild(LP_el('div', { style:'margin-top:24px;' }, [
      LP_el('h3', { class:'lp-h4', style:`margin:0 0 10px;color:${accent};`, text:'Votre scénario relationnel probable' }, []),
      LP_p(comboTxt),
    ]));
  }
  main.appendChild(precise);

  /* ---------- 4 . LE RAPPORT COMPLET (fixed chapters) ---------- */
  let chapters = [];
  const fixedText = report.fixedReportText || (report.fixedReport && report.fixedReport.fixedReportText);
  if(fixedText){
    chapters = LP_parseFixedReport(fixedText, report.name);
  } else {
    chapters = LP_fixedFromProfiles(code);   // incendiaire fallback to site prose
  }
  if(chapters.length){
    const full = LP_el('section', { style:'margin-top:clamp(48px,7vw,80px);' }, []);
    full.appendChild(LP_sectionHead('Le rapport complet', report.name, accent));
    chapters.forEach(ch=>{
      full.appendChild(LP_chapterHeader(ch.title, accent));
      if(/R[ée]p[èe]res\s+scientifiques/i.test(ch.title)){
        const refs = LP_refsVisual(ch.paras, accent);
        if(refs){ full.appendChild(refs); }
        else { (ch.paras||[]).forEach(p=> full.appendChild(LP_el('p', { style:'margin:0 0 1.05em;font-size:1.06rem;line-height:1.72;color:var(--ink);text-wrap:pretty;', text:p }, []))); }
      } else {
        (ch.paras||[]).forEach(p=> full.appendChild(LP_el('p', { style:'margin:0 0 1.05em;font-size:1.06rem;line-height:1.72;color:var(--ink);text-wrap:pretty;', text:p }, [])));
        if(/Compatibilit/i.test(ch.title)){ const v = LP_compatVisual(ch.paras, accent); if(v) full.appendChild(v); }
      }
    });
    main.appendChild(full);
  }

  /* ---------- 5 . PLAN D'ACTION PRIORITAIRE (top-3) ---------- */
  const actions = report.personalizedActions || {};
  const plan = LP_el('section', { style:'margin-top:clamp(48px,7vw,80px);' }, []);
  plan.appendChild(LP_sectionHead('Premiers pas concrets personnalisés', 'Votre plan d\u2019action prioritaire', accent));
  plan.appendChild(LP_p('Trois leviers, un par déclencheur dominant.', 'color:var(--ink-3);margin-bottom:22px;'));
  top3.forEach(id=>{
    const ac = actions[id]; if(!ac) return;
    const dm = dimMeta[id] || {};
    const rows = [];
    if(ac.advice) rows.push(['Le conseil', ac.advice, 'var(--ink)']);
    if(ac.avoidPhrase) rows.push(['Une phrase à éviter', '« '+ac.avoidPhrase+' »', '#A23A33']);
    if(ac.alternativePhrase) rows.push(['À privilégier', '« '+ac.alternativePhrase+' »', '#2F6B45']);
    if(ac.exercise) rows.push(['Mini-exercice', ac.exercise, 'var(--ink)']);
    plan.appendChild(LP_el('div', { style:'background:#fff;border:1px solid var(--hairline);border-radius:var(--r-lg);padding:24px 28px;margin-bottom:16px;' }, [
      LP_el('h3', { class:'lp-h4', style:`margin:0 0 4px;color:${accent};`, text:dm.name||id }, []),
      ...rows.map(([lab,val,col])=> LP_el('div', { style:'padding:12px 0;border-top:1px solid var(--hairline);' }, [
        LP_el('div', { style:'font-size:.68rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-3);margin-bottom:5px;', text:lab }, []),
        LP_el('p', { style:`margin:0;font-size:1.03rem;line-height:1.58;color:${col};text-wrap:pretty;`, text:val }, []),
      ])),
    ]));
  });
  main.appendChild(plan);

  /* ---------- 6 . SYNTHÈSE PERSONNALISÉE ---------- */
  const fs = report.finalPersonalSummaryTemplate;
  if(fs && fs.template){
    const triggerSummary = top3.map(id=> (dimName(id)||'').toLowerCase()).join(', ').replace(/,([^,]*)$/, ' et$1') + ' s\u2019activent';
    const synthMap = Object.assign({}, interpMap, {
      personalizedTriggerSummary: triggerSummary,
      personalizedFearSummary: triggerSummary,
      personalizedRisk: (pm.mainRisk||'').replace(/\.$/,'').toLowerCase(),
      personalizedStrength: (pm.mainStrength||'').replace(/\.$/,'').toLowerCase(),
    });
    const body = LP_fill(fs.template, synthMap);
    const synth = LP_el('section', { style:`margin-top:clamp(48px,7vw,80px);position:relative;overflow:hidden;border-radius:var(--r-xl);padding:clamp(30px,5vw,52px);color:#fff;background:linear-gradient(140deg, color-mix(in srgb, ${accent} 72%, #20183a), ${accent});` }, [
      LP_el('div', { style:'position:absolute;top:-30%;right:-8%;width:46%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle, rgba(255,255,255,.2), transparent 70%);' }, []),
      LP_el('div', { style:'position:relative;' }, [
        LP_el('span', { style:'font-size:.72rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.82);', text:'Synthèse personnalisée' }, []),
        LP_el('h2', { class:'lp-h2', style:'color:#fff;margin:10px 0 16px;', text:'En une page' }, []),
        ...body.split(/\n\n+/).map(par=> LP_el('p', { style:'margin:0 0 14px;font-size:1.1rem;line-height:1.7;color:rgba(255,255,255,.92);text-wrap:pretty;max-width:64ch;', text:par.trim() }, [])),
        LP_el('p', { style:'margin:14px 0 0;font-size:.82rem;color:rgba(255,255,255,.62);line-height:1.6;max-width:64ch;', text:'8LovePatterns est un outil de réflexion personnelle, inspiré de la psychologie de l\u2019attachement. Ce rapport ne pose aucun diagnostic et ne remplace pas un accompagnement psychologique.' }, []),
      ]),
    ]);
    main.appendChild(synth);
  }

  return root;
}

/* ---- demo / test data (Incendiaire) ------------------------------------ *
   Includes explicit Incendiaire sub-dimension scores so the test report is
   predictable. For real results these are derived from the answers.          */
const LP_DEMO_RESULT = {
  profilDominant:'incendiaire', code:'inc', scoreProfil:82, strategy:'Je poursuis pour ne pas perdre le lien',
  niveauAncre:'En progression', gripLevel:'Very active',
  dimensions:{
    silence:91, flouRelationnel:84, besoinPreuve:78, peurRemplacement:66,
    intensiteEmotionnelle:73, besoinClarification:69, reactionConflit:58, ancre:58,
  },
  declencheursPrincipaux:['silence','flouRelationnel','besoinPreuve'],
  dateTest:new Date().toISOString(),
};

Object.assign(window, { LP_RESULT_KEY, LP_PROFILE_META, LP_loadResultData, generatePremiumReport, LP_DEMO_RESULT });
