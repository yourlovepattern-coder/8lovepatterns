/* ============================================================================
   8LovePatterns — ÉCRAN DE RÉSULTAT GRATUIT (séquence en 5 temps)
   Source : uploads/8lovepatterns_Ecran_resultat_gratuit.md. Le moteur ne change
   pas, seul l'affichage. Cette page MONTRE : pattern dominant (nom + signature
   + miroir), Ancre verticale en profondeur, phrase de coût, porte vers le
   rapport. Elle NE MONTRE PLUS : graphe des 8 patterns, secondaire nommé,
   scores de sabotage, axe. L'objet technique n'apparaît qu'avec ?lpdev=1.
   ========================================================================== */
const { useState: rsUseState, useEffect: rsUseEffect, useRef: rsUseRef } = React;

/* ---- Micro-textes (FR validé du document + EN fidèle) -------------------- */
const LP_RESULT_TEXTS = {
  intro:   { fr:"Tes réponses dessinent un mécanisme précis.", en:"Your answers draw a precise mechanism." },
  presence:{ fr:"Présent chez toi à {N} %", en:"Present in you at {N}%" },
  presenceMixte:{ fr:"Présents chez toi à {N} % chacun", en:"Present in you at {N}% each" },
  melange: { fr:"Un autre mécanisme est très proche derrière. Ton rapport en tient compte.",
             en:"Another mechanism is right behind it. Your report takes it into account." },
  mixte:   { fr:"Deux mécanismes cohabitent chez toi à parts égales. C'est rare, et ça change la lecture.",
             en:"Two mechanisms live in you in equal measure. It is rare, and it changes the reading." },
  tresActive:   { fr:"Tes réponses montrent que plusieurs mécanismes sont à vif en ce moment. C'est le signe d'une période chargée, pas d'un défaut.",
                  en:"Your answers show that several mechanisms are raw right now. It is the sign of a heavy period, not a flaw." },
  peuDeclenche: { fr:"Tes réponses montrent peu d'activation en ce moment. Ton mécanisme existe, mais il dort. Le rapport t'aidera à le reconnaître quand il se réveille.",
                  en:"Your answers show little activation right now. Your mechanism exists, but it is asleep. The report will help you recognize it when it wakes." },
  vigilance:{ fr:"Une note douce : certaines de tes réponses méritent qu'on y revienne avec soin. Sois indulgente avec toi en lisant la suite.",
              en:"A gentle note: some of your answers deserve to be revisited with care. Be kind to yourself as you read on." },
  ancreTitle: { fr:"À quel point ce mécanisme te tient", en:"How deeply this mechanism holds you" },
  surface:    { fr:"Surface", en:"Surface" },
  fond:       { fr:"Fond", en:"Bottom" },
  ancreNormal:{ fr:"La plupart du temps, tu es ici : « {P} ». Mais quand ton point sensible est touché, tu descends jusqu'à : « {B} ».",
                en:"Most of the time, you are here: \u201c{P}\u201d. But when your sensitive spot is touched, you go down to: \u201c{B}\u201d." },
  ancreEgal:  { fr:"Tu es ici : « {P} ». C'est ta profondeur, même quand ton point sensible est touché.",
                en:"You are here: \u201c{P}\u201d. That is your depth, even when your sensitive spot is touched." },
  espoir:     { fr:"Cette profondeur n'est pas une condamnation. C'est une position. Et une position, ça se remonte.",
                en:"This depth is not a sentence. It is a position. And a position can be climbed back up." },
  porteTitle:   { fr:"Ton rapport complet est prêt", en:"Your complete report is ready" },
  porteAccroche:{ fr:"Ce que tu viens de lire, c'est la surface. Ton rapport complet descend là où ça se joue vraiment.",
                  en:"What you just read is the surface. Your complete report goes down to where it really plays out." },
  cards: [
    { title:{ fr:"Ton deuxième mécanisme", en:"Your second mechanism" },
      teaser:{ fr:"Un autre schéma est presque aussi fort chez toi. Il change toute la lecture.",
               en:"Another pattern is almost as strong in you. It changes the whole reading." } },
    { title:{ fr:"Ta boucle complète", en:"Your complete loop" },
      teaser:{ fr:"Le scénario exact que tu rejoues, étape par étape, et où il se casse.",
               en:"The exact scenario you keep replaying, step by step, and where it breaks." } },
    { title:{ fr:"Ton levier de sabotage", en:"Your sabotage lever" },
      teaser:{ fr:"La façon précise dont ton mécanisme abîme tes relations, mesurée par tes réponses.",
               en:"The precise way your mechanism damages your relationships, measured by your answers." } },
    { title:{ fr:"Ta carte des 8 schémas", en:"Your map of the 8 patterns" },
      teaser:{ fr:"Tes scores détaillés sur les huit mécanismes.",
               en:"Your detailed scores across the eight mechanisms." } },
    { title:{ fr:"En couple : ta dynamique", en:"In a relationship: your dynamic" },
      teaser:{ fr:"Comment ton schéma danse avec celui de l'autre, et pourquoi vous tournez en rond.",
               en:"How your pattern dances with the other person's, and why you keep going in circles." } },
    { title:{ fr:"Ton premier pas", en:"Your first step" },
      teaser:{ fr:"Le seul geste à faire cette semaine, adapté à ta profondeur d'Ancre.",
               en:"The one thing to do this week, adapted to your Anchor depth." } },
  ],
  cta:    { fr:"Obtenir mon rapport complet", en:"Get my full report" },
  retake: { fr:"Refaire le test", en:"Retake the test" },
  pendingTitle:{ fr:"Ton rapport est en préparation.", en:"Your report is in preparation." },
  pendingBody: { fr:"Le rapport complet rédigé arrive très bientôt. Ton résultat est gardé en attendant.",
                 en:"The complete written report is coming very soon. Your result is kept safe in the meantime." },
  pendingBack: { fr:"Revenir à mon résultat", en:"Back to my result" },

  patterns: {
    'Incendiaire': {
      signature:{ fr:"Tu mets le feu pour vérifier qu'on t'aime.", en:"You set fires to check that you are loved." },
      miroir:{ fr:"Quand tout est trop calme, quelque chose en toi s'inquiète. Alors tu lances une pique, tu montes le ton, tu crées la vague. Pas pour faire mal. Pour voir s'il réagit, s'il se bat, s'il tient à toi. Une dispute, au moins, c'est une preuve qu'on existe l'un pour l'autre.",
              en:"When everything is too calm, something in you starts to worry. So you throw a jab, you raise the tone, you make a wave. Not to hurt. To see if they react, if they fight, if they care. An argument, at least, is proof that you exist for each other." },
      cout:{ fr:"À force de tester le lien, c'est le lien qui finit par lâcher.", en:"By testing the bond again and again, it is the bond that ends up giving way." },
      rupture:{ fr:"Et depuis la rupture, ce besoin de réaction n'a sans doute pas disparu. Il cherche juste une autre porte.",
                en:"And since the breakup, that need for a reaction probably has not gone away. It is just looking for another door." } },
    'Miroir': {
      signature:{ fr:"Tu te reflètes pour te sentir exister dans le lien.", en:"You mirror the other to feel you exist in the bond." },
      miroir:{ fr:"Ses goûts deviennent tes goûts, ses amis tes amis, ses envies tes envies. Sur le moment, ça ressemble à l'amour. Et puis un jour, on te demande ce que toi tu veux, et il y a ce petit blanc. Ce blanc, c'est l'endroit où tu as disparu.",
              en:"Their tastes become your tastes, their friends your friends, their wishes your wishes. In the moment, it looks like love. Then one day someone asks what you want, and there is that small blank. That blank is the place where you disappeared." },
      cout:{ fr:"On ne peut pas t'aimer vraiment si on ne te rencontre jamais.", en:"No one can truly love you if they never get to meet you." },
      rupture:{ fr:"Et depuis la rupture, ce n'est pas seulement lui qui manque. C'est la forme que tu avais dans son regard.",
                en:"And since the breakup, it is not only them you miss. It is the shape you had in their eyes." } },
    'Fugitif': {
      signature:{ fr:"Tu pars avant qu'on puisse te quitter.", en:"You leave before anyone can leave you." },
      miroir:{ fr:"Tout va bien, et justement c'est ça le problème. Dès que ça devient sérieux, tu trouves des défauts, tu te sens à l'étroit, tu regardes la sortie. Tu appelles ça ton indépendance. Mais une partie de toi sait que c'est de la fuite.",
              en:"Everything is fine, and that is exactly the problem. As soon as it gets serious, you find flaws, you feel cramped, you look at the exit. You call it your independence. But a part of you knows it is flight." },
      cout:{ fr:"Tu laisses filer des histoires qui auraient pu être les bonnes.", en:"You let go of relationships that might have been the right ones." },
      rupture:{ fr:"Et cette rupture, une partie de toi l'avait peut-être préparée bien avant qu'elle arrive.",
                en:"And this breakup, a part of you may have prepared it long before it happened." } },
    'Bastion': {
      signature:{ fr:"Tu te protèges si bien qu'on ne t'atteint plus.", en:"You protect yourself so well that no one reaches you anymore." },
      miroir:{ fr:"Quand ça devient émotionnel, tu réponds que ça va. Tu gères, tu encaisses, tu ne montres rien. Les gens te croient solide, et tu l'es. Mais derrière le mur, il y a quelqu'un que presque personne n'a jamais rencontré.",
              en:"When things get emotional, you answer that you are fine. You cope, you take the hits, you show nothing. People believe you are solid, and you are. But behind the wall, there is someone almost no one has ever met." },
      cout:{ fr:"L'autre finit par s'épuiser à essayer de t'atteindre.", en:"The other person ends up exhausted from trying to reach you." },
      rupture:{ fr:"Et même la rupture, tu l'as peut-être traversée sans laisser personne voir ce qu'elle t'a fait.",
                en:"And even the breakup, you may have gone through it without letting anyone see what it did to you." } },
    'Guetteur': {
      signature:{ fr:"Tu surveilles l'amour au lieu de le vivre.", en:"You watch over love instead of living it." },
      miroir:{ fr:"Tu relis les messages, tu décortiques un silence, tu notes un changement de ton. Tout est analysé, tout est indice. Tu appelles ça de la lucidité. Mais à force de chercher la preuve que quelque chose cloche, tu finis toujours par la trouver.",
              en:"You reread the messages, you dissect a silence, you note a change of tone. Everything is analyzed, everything is a clue. You call it clear-sightedness. But by hunting for proof that something is wrong, you always end up finding it." },
      cout:{ fr:"Une relation surveillée en permanence finit par étouffer.", en:"A relationship under constant watch ends up suffocating." },
      rupture:{ fr:"Et depuis la rupture, ton esprit continue l'enquête, à rejouer chaque signe que tu aurais dû voir.",
                en:"And since the breakup, your mind keeps up the investigation, replaying every sign you should have seen." } },
    'Sauveur': {
      signature:{ fr:"Tu te rends indispensable pour être sûr d'être gardé.", en:"You make yourself indispensable to be sure you are kept." },
      miroir:{ fr:"Ses problèmes passent avant les tiens, toujours. Tu portes, tu répares, tu anticipes ses besoins avant même qu'il les sente. Donner, c'est ta façon d'aimer. Mais au fond, c'est aussi ta façon de t'assurer qu'on ne pourra pas se passer de toi.",
              en:"Their problems come before yours, always. You carry, you fix, you anticipate their needs before they even feel them. Giving is your way of loving. But deep down, it is also your way of making sure no one can do without you." },
      cout:{ fr:"On finit par aimer ce que tu fais, plus ce que tu es.", en:"People end up loving what you do, no longer who you are." },
      rupture:{ fr:"Et depuis la rupture, le plus dur n'est peut-être pas l'absence. C'est de ne plus avoir personne à porter.",
                en:"And since the breakup, the hardest part may not be the absence. It is no longer having anyone to carry." } },
    'Caméléon': {
      signature:{ fr:"Tu deviens ce qu'on attend pour ne pas être rejeté.", en:"You become what is expected so you will not be rejected." },
      miroir:{ fr:"Tu sens ce que l'autre veut entendre, et tu le dis. Tu lisses, tu arrondis, tu t'ajustes. Tout le monde te trouve facile à vivre. Mais toi, tu sais que personne n'a jamais rencontré la version non négociée de toi.",
              en:"You sense what the other person wants to hear, and you say it. You smooth, you soften, you adjust. Everyone finds you easy to be around. But you know that no one has ever met the unnegotiated version of you." },
      cout:{ fr:"À force de plaire à tout le monde, tu ne sais plus qui tu es.", en:"By pleasing everyone, you no longer know who you are." },
      rupture:{ fr:"Et depuis la rupture, tu te demandes peut-être lequel de vous deux il a quitté : toi, ou le rôle que tu jouais.",
                en:"And since the breakup, you may be wondering which of you they left: you, or the role you were playing." } },
    'Alchimiste': {
      signature:{ fr:"Tu comprends tout pour ne rien sentir.", en:"You understand everything so you feel nothing." },
      miroir:{ fr:"Quand ça fait mal, tu analyses. Tu expliques ta douleur avec des mots justes, tu décortiques la relation comme un dossier. Tout est clair dans ta tête. Mais l'autre, lui, ne te sent jamais vraiment touché. Et toi non plus, parfois.",
              en:"When it hurts, you analyze. You explain your pain with precise words, you dissect the relationship like a case file. Everything is clear in your head. But the other person never really feels you moved. And sometimes, neither do you." },
      cout:{ fr:"On ne crée pas d'intimité avec quelqu'un qui survole ses propres émotions.", en:"No one builds intimacy with someone who flies over their own emotions." },
      rupture:{ fr:"Et cette rupture, tu l'as probablement déjà toute expliquée. Comprise, oui. Traversée, pas encore.",
                en:"And this breakup, you have probably already explained it all. Understood, yes. Lived through, not yet." } },
  },
};

/* ---- helpers -------------------------------------------------------------- */
function lpFill(s, map){ return s.replace(/\{(\w+)\}/g, (m,k)=> map[k]!=null ? map[k] : m); }

/* Apparition progressive (document : « apparition progressive »).
   Implémentation 100% CSS (classe .lp-reveal dans colors_and_type.css) : l'état
   final VISIBLE est la base, l'animation d'entrée n'est qu'un enrichissement et
   ne peut jamais laisser le contenu caché. Le décalage en cascade donne le
   rythme des 5 temps. Aucune dépendance à IntersectionObserver. */
function Reveal({ children, style, delay=0 }){
  return <div className="lp-reveal" style={{ '--d': delay+'ms', ...style }}>{children}</div>;
}

/* ---- Temps 3 : l'Ancre, échelle verticale de profondeur ------------------- */
function AnchorDepth({ R }){
  const tx = useTx();
  const T = window.LP_TEST;
  const X = LP_RESULT_TEXTS;
  const pos = R.ancre_position;
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'8px' }}>
        <span style={{ fontSize:'.74rem', fontWeight:800, letterSpacing:'.11em', textTransform:'uppercase', color:'var(--ink-3)' }}>{tx(X.surface)}</span>
      </div>
      <div style={{ position:'relative', paddingLeft:'clamp(72px, 10vw, 96px)' }}>
        {/* colonne d'eau : claire en surface, sombre au fond */}
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'clamp(52px, 7vw, 64px)', borderRadius:'28px',
          background:'linear-gradient(180deg, color-mix(in srgb, var(--fam-ancre) 14%, var(--paper)) 0%, color-mix(in srgb, var(--fam-ancre) 45%, var(--encre)) 58%, var(--encre) 100%)',
          boxShadow:'inset 0 2px 10px rgba(255,255,255,.35), inset 0 -6px 16px rgba(0,0,0,.25)' }}>
          {/* l'ancre, à la position de la personne */}
          <div style={{ position:'absolute', left:'50%', top:`${pos*20+10}%`, transform:'translate(-50%,-50%)',
            width:44, height:44, borderRadius:'50%', background:'var(--surface)', display:'grid', placeItems:'center',
            boxShadow:'0 6px 18px -4px rgba(0,0,0,.4), 0 0 0 3px color-mix(in srgb, var(--fam-ancre) 55%, transparent)', color:'var(--encre)' }}>
            <Icon name="anchor" size={22}/>
          </div>
        </div>
        {/* les 5 paliers, de la surface au fond */}
        <div style={{ display:'flex', flexDirection:'column' }}>
          {T.paliers.map(p=>{
            const here = p.v===pos;
            return (
              <div key={p.v} style={{ minHeight:64, display:'flex', alignItems:'center', padding:'8px 0 8px 16px',
                borderRadius:'var(--r-md)', background: here?'var(--fam-ancre-soft)':'transparent',
                border: here?'1.5px solid var(--fam-ancre)':'1.5px solid transparent' }}>
                <span style={{ fontSize: here?'1.02rem':'.94rem', fontWeight: here?700:500, lineHeight:1.4,
                  color: here?'var(--ink)':'var(--ink-2)' }}>{tx(p)}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop:'8px' }}>
        <span style={{ fontSize:'.74rem', fontWeight:800, letterSpacing:'.11em', textTransform:'uppercase', color:'var(--ink-3)' }}>{tx(X.fond)}</span>
      </div>
    </div>
  );
}

/* ---- écran provisoire d'achat --------------------------------------------- */
function PendingReport({ onBack }){
  const tx = useTx();
  const X = LP_RESULT_TEXTS;
  return (
    <div style={{ maxWidth:560, margin:'clamp(40px,10vw,110px) auto 0', textAlign:'center' }}>
      <div style={{ display:'grid', placeItems:'center', width:64, height:64, borderRadius:'50%', margin:'0 auto 20px',
        background:'var(--or-soft)', color:'#8A6516' }}><Icon name="sparkle" size={28}/></div>
      <h1 className="lp-h1">{tx(X.pendingTitle)}</h1>
      <p className="lp-lead" style={{ marginTop:14 }}>{tx(X.pendingBody)}</p>
      <div style={{ marginTop:28 }}>
        <Button variant="dark" onClick={onBack}>{tx(X.pendingBack)}</Button>
      </div>
    </div>
  );
}

/* ---- result_v2 bridge ----------------------------------------------------
   The live engine (test_engine.jsx) emits CAPITALIZED, accented pattern keys
   ('Miroir', 'Caméléon', ...). The secure report system (assembler + the
   _content/<profil>.js modules + the get-report CONTENT registry) keys on the
   lowercase ASCII profile ids ('miroir', 'cameleon', ...). We bridge here when
   persisting the result the server will read, so the gated path resolves the
   right content module. Everything else in R is left untouched. */
const LP_PROFILE_KEY = {
  'Miroir':'miroir', 'Fugitif':'fugitif', 'Bastion':'bastion', 'Guetteur':'guetteur',
  'Sauveur':'sauveur', 'Cam\u00e9l\u00e9on':'cameleon', 'Alchimiste':'alchimiste', 'Incendiaire':'incendiaire',
};
function lpToProfileKey(k){ return LP_PROFILE_KEY[k] || (typeof k === 'string' ? k.toLowerCase() : k); }
function lpResultV2(R){
  return Object.assign({}, R, {
    pattern_dominant: lpToProfileKey(R.pattern_dominant),
    pattern_secondaire: lpToProfileKey(R.pattern_secondaire),
    ancre_variante: lpToProfileKey(R.ancre_variante),
  });
}
const LP_RESULT_V2_KEY = 'lovepattern_result_v2';

/* ---- L'ÉCRAN DE RÉSULTAT GRATUIT (5 temps) -------------------------------- */
function TestResult({ answers, ancreVariant, onRestart, go }){
  const tx = useTx();
  const T = window.LP_TEST;
  const X = LP_RESULT_TEXTS;
  const R = React.useMemo(()=> window.LP_ENGINE.computeResultat(answers, ancreVariant), [answers, ancreVariant]);
  const [gateDone,setGateDone] = rsUseState(R.securite!=='alerte');
  const [pending,setPending] = rsUseState(false);
  const dev = /[?&]lpdev=1/.test(window.location.search);

  /* Persist the engine result (in the profile-key shape the server reads) so
     the "Recevoir mon plan" CTA can hand it to /api/create-checkout, and so
     rapport.html can recover it on the success_url round-trip. */
  rsUseEffect(()=>{
    try { localStorage.setItem(LP_RESULT_V2_KEY, JSON.stringify(lpResultV2(R))); } catch(e){}
  }, [R]);

  function startPlanCheckout(){
    try {
      if (window.LP_STRIPE && typeof window.LP_STRIPE.checkoutSession === 'function') {
        window.LP_STRIPE.checkoutSession(lpResultV2(R));
        return;
      }
    } catch(e){}
    setPending(true);   /* fallback if stripe-config is unavailable */
  }

  /* Sécurité = alerte : l'écran de soutien passe TOUJOURS avant (inchangé). */
  if(R.securite==='alerte' && !gateDone){
    return <SafetyScreen onContinue={()=>setGateDone(true)} go={go}/>;
  }
  if(pending) return <PendingReport onBack={()=>setPending(false)}/>;

  const patOf = k => T.patterns.find(p=>p.key===k) || { key:k, fr:k, en:k };
  const isMixte = R.profil_type==='mixte';
  /* Profil mixte : le miroir affiché est celui de la variante d'Ancre jouée. */
  const mirrorKey = isMixte ? R.ancre_variante : R.pattern_dominant;
  const PT = X.patterns[mirrorKey];
  const posLbl = tx(T.paliers.find(p=>p.v===R.ancre_position));
  const basLbl = tx(T.paliers.find(p=>p.v===R.ancre_bascule));
  const isRupture = R.contexte.statut==='rupture';

  return (
    <div style={{ maxWidth:720, margin:'0 auto' }}>

      {/* ===== Temps 1 — LA RÉVÉLATION (plein écran, sobre, centré) ===== */}
      <section style={{ minHeight:'calc(100vh - 230px)', display:'flex', flexDirection:'column',
        justifyContent:'center', alignItems:'center', textAlign:'center', padding:'clamp(20px,4vw,40px) 0' }}>
        <Reveal>
          <p style={{ margin:0, fontSize:'.95rem', fontWeight:600, color:'var(--ink-2)', letterSpacing:'.01em' }}>{tx(X.intro)}</p>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-.02em', color:'var(--ink)',
            fontSize: isMixte ? 'clamp(2rem, 1rem + 4vw, 3.4rem)' : 'clamp(2.6rem, 1.4rem + 5vw, 4.6rem)',
            lineHeight:1.08, margin:'18px 0 0', textWrap:'balance' }}>
            {isMixte ? <span>{tx(patOf(R.pattern_dominant))}<span style={{ color:'var(--ink-3)', fontWeight:400, padding:'0 .35em' }}>&amp;</span>{tx(patOf(R.pattern_secondaire))}</span>
                     : tx(patOf(R.pattern_dominant))}
          </h1>
          <p style={{ margin:'20px auto 0', maxWidth:520, fontFamily:'var(--font-display)', fontWeight:600,
            fontSize:'clamp(1.15rem, .95rem + 1vw, 1.5rem)', lineHeight:1.4, color:'var(--corail)', textWrap:'balance' }}>
            {tx(PT.signature)}
          </p>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginTop:26, padding:'9px 20px',
            borderRadius:'var(--r-pill)', background:'var(--encre)', color:'#fff', fontWeight:700, fontSize:'.98rem' }}>
            {lpFill(tx(isMixte ? X.presenceMixte : X.presence), { N: R.pattern_dominant_score })}
          </div>
          {R.profil_type==='melange' && (
            <p style={{ margin:'16px auto 0', maxWidth:440, fontSize:'.92rem', color:'var(--ink-3)', fontWeight:600 }}>{tx(X.melange)}</p>
          )}
          {isMixte && (
            <p style={{ margin:'16px auto 0', maxWidth:460, fontSize:'.95rem', color:'var(--ink-2)', fontWeight:600 }}>{tx(X.mixte)}</p>
          )}
        </Reveal>
      </section>

      {/* ===== Temps 2 — LE MIROIR ===== */}
      <Reveal>
        <section style={{ maxWidth:620, margin:'0 auto', padding:'clamp(10px,2vw,20px) 0' }}>
          <p style={{ margin:0, fontSize:'clamp(1.12rem, 1rem + .6vw, 1.32rem)', lineHeight:1.72, color:'var(--ink)', textWrap:'pretty' }}>
            {tx(PT.miroir)}{isRupture && <span> {tx(PT.rupture)}</span>}
          </p>
        </section>
      </Reveal>

      {/* Cas particuliers : très activé / peu déclenché (discret, après le Temps 2) */}
      {(R.profil_tres_active || R.profil_peu_declenche) && (
        <Reveal>
          <p style={{ maxWidth:620, margin:'26px auto 0', fontSize:'.92rem', lineHeight:1.6, color:'var(--ink-3)', fontWeight:600 }}>
            {tx(R.profil_tres_active ? X.tresActive : X.peuDeclenche)}
          </p>
        </Reveal>
      )}

      {/* Sécurité = vigilance : note douce entre le Temps 2 et le Temps 3 */}
      {R.securite==='vigilance' && (
        <Reveal>
          <div style={{ maxWidth:620, margin:'26px auto 0', background:'var(--corail-soft)', border:'1px solid #F1C9C1',
            borderRadius:'var(--r-lg)', padding:'16px 20px', color:'#9A3A2E', fontSize:'.96rem', lineHeight:1.55 }}>
            {tx(X.vigilance)}
          </div>
        </Reveal>
      )}

      {/* ===== Temps 3 — TON ANCRE (la star de la page) ===== */}
      <Reveal>
        <section style={{ margin:'clamp(54px,8vw,90px) auto 0', maxWidth:640 }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(1.4rem, 1.1rem + 1.2vw, 1.9rem)',
            color:'var(--ink)', margin:'0 0 26px', textAlign:'center', textWrap:'balance' }}>{tx(X.ancreTitle)}</h2>
          <AnchorDepth R={R}/>
          <p style={{ margin:'26px auto 0', maxWidth:560, fontSize:'1.05rem', lineHeight:1.65, color:'var(--ink)' }}>
            {R.ancre_position===R.ancre_bascule
              ? lpFill(tx(X.ancreEgal),   { P: posLbl })
              : lpFill(tx(X.ancreNormal), { P: posLbl, B: basLbl })}
          </p>
          <p style={{ margin:'18px auto 0', maxWidth:560, fontFamily:'var(--font-display)', fontWeight:600,
            fontSize:'1.12rem', lineHeight:1.5, color:'var(--fam-ancre)' }}>
            {tx(X.espoir)}
          </p>
        </section>
      </Reveal>

      {/* ===== Temps 4 — CE QUE ÇA TE COÛTE ===== */}
      <Reveal>
        <section style={{ margin:'clamp(54px,8vw,90px) auto 0', maxWidth:620, textAlign:'center' }}>
          <p style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:700,
            fontSize:'clamp(1.35rem, 1.05rem + 1.4vw, 1.95rem)', lineHeight:1.35, color:'var(--ink)', textWrap:'balance' }}>
            {tx(PT.cout)}
          </p>
        </section>
      </Reveal>

      {/* ===== Temps 5 — LA PORTE ===== */}
      <Reveal>
        <section style={{ margin:'clamp(60px,9vw,100px) auto 0', paddingBottom:'clamp(40px,6vw,70px)' }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(1.4rem, 1.1rem + 1.2vw, 1.9rem)',
            color:'var(--ink)', margin:0, textAlign:'center' }}>{tx(X.porteTitle)}</h2>
          <p className="lp-lead" style={{ margin:'14px auto 0', maxWidth:520, textAlign:'center' }}>{tx(X.porteAccroche)}</p>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'14px', marginTop:'clamp(26px,4vw,38px)' }}>
            {X.cards.map((c,i)=>(
              <div key={i} style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)',
                padding:'18px 20px', boxShadow:'var(--sh-xs)', position:'relative', overflow:'hidden' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'9px' }}>
                  <span style={{ display:'grid', placeItems:'center', width:30, height:30, borderRadius:'50%', flexShrink:0,
                    background:'var(--paper-2)', color:'var(--ink-3)' }}><Icon name="lock" size={15}/></span>
                  <span style={{ fontWeight:700, fontSize:'1.02rem', color:'var(--ink)' }}>{tx(c.title)}</span>
                </div>
                <p style={{ margin:0, fontSize:'.93rem', lineHeight:1.5, color:'var(--ink-2)' }}>{tx(c.teaser)}</p>
                {/* contenu verrouillé : lignes floutées */}
                <div aria-hidden="true" style={{ marginTop:'13px', filter:'blur(4px)', userSelect:'none', pointerEvents:'none' }}>
                  <div style={{ height:9, borderRadius:'5px', background:'var(--hairline)', width:'92%' }}></div>
                  <div style={{ height:9, borderRadius:'5px', background:'var(--hairline)', width:'78%', marginTop:'7px' }}></div>
                  <div style={{ height:9, borderRadius:'5px', background:'var(--hairline)', width:'85%', marginTop:'7px' }}></div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'16px', marginTop:'clamp(28px,4vw,40px)' }}>
            <Button size="lg" icon="arrow-right" onClick={startPlanCheckout}>{tx(X.cta)}</Button>
            <Button variant="ghost" onClick={onRestart}>{tx(X.retake)}</Button>
          </div>

          {/* objet technique : uniquement en mode développement (?lpdev=1) */}
          {dev && (
            <details style={{ marginTop:'34px' }}>
              <summary style={{ cursor:'pointer', fontWeight:700, fontSize:'.88rem', color:'var(--ink-3)' }}>Objet résultat (dev)</summary>
              <pre style={{ marginTop:10, background:'var(--paper-2)', border:'1px solid var(--hairline)', borderRadius:'var(--r-md)',
                padding:'14px 16px', fontSize:'.76rem', lineHeight:1.5, overflowX:'auto', color:'var(--ink-2)' }}>{JSON.stringify(R, null, 2)}</pre>
            </details>
          )}
        </section>
      </Reveal>
    </div>
  );
}

Object.assign(window, { TestResult, LP_RESULT_TEXTS });
