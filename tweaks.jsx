/* 8LovePatterns — Tweaks: three expressive controls that reshape the whole feel.
   Mood (emotional accent), Voice (display type personality), Softness (shape language).
   All applied as CSS custom-property overrides on :root, so every token-driven
   component across the site re-skins at once. */

const LP_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "green",
  "voice": "bold",
  "softness": "rounded",
  "salesLayout": "editorial"
}/*EDITMODE-END*/;

/* ---- Mood: the "emotional intensity" accent that runs through CTAs, chips, highlights ---- */
const LP_MOODS = {
  green: { label:'Apple-Health green', accent:'#2FBE73', pressed:'#24A362', soft:'#E4F7EC',
    hero:['#2E8294','#236B7C'], glow:'47,190,115' },
  rose:  { label:'Tender rose', accent:'#E0627F', pressed:'#CC5070', soft:'#FBE6EC',
    hero:['#7C6BB0','#5E5193'], glow:'224,98,127' },
  sage:  { label:'Calm sage', accent:'#549A7E', pressed:'#43886C', soft:'#E2EFE8',
    hero:['#3E8C86','#2C6E72'], glow:'84,154,126' },
  plum:  { label:'Deep plum', accent:'#9667BE', pressed:'#8254AB', soft:'#EFE5F6',
    hero:['#4B4490','#332C6E'], glow:'150,103,190' },
};

/* ---- Voice: display weight (single typeface, Geist, everywhere — vary
   weight only, the way Apple does with SF Pro). No more family switching. ---- */
const LP_VOICES = {
  bold:    { label:'Bold',    font:"'Geist',system-ui,-apple-system,sans-serif", displayW:'800', headW:'700', tracking:'-0.02em' },
  regular: { label:'Regular', font:"'Geist',system-ui,-apple-system,sans-serif", displayW:'600', headW:'600', tracking:'-0.01em' },
  medium:  { label:'Medium',  font:"'Geist',system-ui,-apple-system,sans-serif", displayW:'700', headW:'600', tracking:'-0.015em' },
};

/* ---- Softness: shape language — radii + shadow diffusion move together ---- */
const LP_SOFTNESS = {
  crisp:   { label:'Crisp',   xs:'4px',  sm:'6px',  md:'10px', lg:'13px', xl:'18px',
    shMd:'0 6px 18px -8px rgba(20,20,43,.16)', shLg:'0 16px 40px -16px rgba(20,20,43,.2)', shCardMul:1 },
  rounded: { label:'Rounded', xs:'8px',  sm:'12px', md:'16px', lg:'22px', xl:'30px',
    shMd:'0 10px 28px -8px rgba(20,20,43,.14)', shLg:'0 24px 56px -16px rgba(20,20,43,.22)', shCardMul:1 },
  pillowy: { label:'Pillowy', xs:'14px', sm:'20px', md:'26px', lg:'34px', xl:'46px',
    shMd:'0 16px 40px -10px rgba(20,20,43,.16)', shLg:'0 34px 70px -18px rgba(20,20,43,.24)', shCardMul:1 },
};

function applyLpTweaks(t) {
  const r = document.documentElement.style;
  const m = LP_MOODS[t.mood] || LP_MOODS.coral;
  r.setProperty('--corail', m.accent);
  r.setProperty('--corail-600', m.pressed);
  r.setProperty('--corail-soft', m.soft);
  r.setProperty('--focus-ring', m.accent);
  r.setProperty('--sh-cta', `0 10px 22px -6px rgba(${m.glow},.45)`);
  r.setProperty('--lp-hero-a', m.hero[0]);
  r.setProperty('--lp-hero-b', m.hero[1]);
  r.setProperty('--lp-glow', m.glow);

  const v = LP_VOICES[t.voice] || LP_VOICES.bold;
  r.setProperty('--font-display', v.font);
  r.setProperty('--lp-display-weight', v.displayW);
  r.setProperty('--lp-head-weight', v.headW);
  r.setProperty('--lp-display-tracking', v.tracking);

  const s = LP_SOFTNESS[t.softness] || LP_SOFTNESS.rounded;
  r.setProperty('--r-xs', s.xs); r.setProperty('--r-sm', s.sm); r.setProperty('--r-md', s.md);
  r.setProperty('--r-lg', s.lg); r.setProperty('--r-xl', s.xl);
  r.setProperty('--sh-md', s.shMd); r.setProperty('--sh-lg', s.shLg);
}

function LpTweaks() {
  const [t, setTweak] = useTweaks(LP_TWEAK_DEFAULTS);
  useEffect(()=>{ applyLpTweaks(t); }, [t.mood, t.voice, t.softness]);
  // Sales page layout is a structural choice (not a CSS var): expose globally
  // and let SalesPage re-render on the 'tweakchange' event useTweaks fires.
  useEffect(()=>{ window.LP_SALES_LAYOUT = t.salesLayout || 'editorial'; }, [t.salesLayout]);

  const moodKeys = Object.keys(LP_MOODS);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood" />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'7px' }}>
        {moodKeys.map(k=>{
          const m = LP_MOODS[k], on = t.mood===k;
          return (
            <button key={k} onClick={()=>setTweak('mood', k)}
              style={{ display:'flex', alignItems:'center', gap:'8px', padding:'7px 9px', cursor:'default',
                borderRadius:'9px', border: on?`1.5px solid ${m.accent}`:'1px solid rgba(0,0,0,.1)',
                background: on?'rgba(255,255,255,.85)':'rgba(255,255,255,.5)', font:'inherit', color:'#29261b' }}>
              <span style={{ width:16, height:16, borderRadius:'50%', background:m.accent, boxShadow:'inset 0 0 0 3px rgba(255,255,255,.6)', flexShrink:0 }}></span>
              <span style={{ fontSize:'10.5px', fontWeight: on?600:500, whiteSpace:'nowrap' }}>{m.label}</span>
            </button>
          );
        })}
      </div>

      <TweakSection label="Voice" />
      <TweakRadio label="Display type" value={t.voice}
        options={Object.keys(LP_VOICES).map(k=>({ value:k, label:LP_VOICES[k].label }))}
        onChange={(v)=>setTweak('voice', v)} />

      <TweakSection label="Softness" />
      <TweakRadio label="Shape language" value={t.softness}
        options={Object.keys(LP_SOFTNESS).map(k=>({ value:k, label:LP_SOFTNESS[k].label }))}
        onChange={(v)=>setTweak('softness', v)} />

      <TweakSection label="Sales page" />
      <TweakRadio label="Layout" value={t.salesLayout||'editorial'}
        options={[{value:'editorial',label:'Editorial'},{value:'immersive',label:'Immersive'},{value:'report',label:'Report'}]}
        onChange={(v)=>setTweak('salesLayout', v)} />
    </TweaksPanel>
  );
}

Object.assign(window, { LpTweaks });
