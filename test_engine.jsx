/* ============================================================================
   8LovePatterns — MOTEUR DE CALCUL  (v2 : deux axes + routage par pôle)
   ----------------------------------------------------------------------------
   Fidèle à uploads/8lovepatterns_Moteur_de_calcul.md + les 3 arbitrages
   utilisateur (11 juin 2026) :
     · Section 1 : dénominateur = nombre RÉEL d'apparitions du pattern × 4.
     · Variante d'Ancre : celle jouée pendant le test (figée à la fin de
       l'Étage 1), jamais recalculée après coup.
     · S3+S4 : stocké dans `intensite_poursuite`, ne modifie JAMAIS `axe`.

   NOUVEAU v2 (brief) :
     · lpAxesCalc : deux moyennes 0-4 sur les 8 items d'axe (T.axes).
     · Routage par pôle : SECURE_MAX / POLE_GAP en tête, faciles à régler. Les
       moyennes d'axe choisissent les mécanismes éligibles ; le dominant est le
       mieux classé PARMI les éligibles par lpPatternCalc (inchangé).
     · `axe` du résultat dérivé des moyennes d'axe (fallback LP_AXE_MAP).
     · Route sécure : deux axes bas -> aucun mécanisme forcé.
   ========================================================================== */

/* ---- Constantes de routage (faciles à régler) ---------------------------- */
const SECURE_MAX = 1.0;   /* les deux axes <= 1.0 -> route sécure */
const POLE_GAP   = 0.5;   /* écart mini pour trancher un pôle */
const CONF_GAP   = 10;    /* écart % mini entre les 2 premiers pour une confiance nette */

const LP_POLE_ANXIEUX    = ['Guetteur', 'Miroir', 'Sauveur', 'Incendiaire'];
const LP_POLE_DISTANCIANT = ['Fugitif', 'Bastion'];
const LP_POLE_TOUS = ['Miroir', 'Fugitif', 'Bastion', 'Guetteur', 'Sauveur', 'Caméléon', 'Alchimiste', 'Incendiaire'];

/* ---- Section 1 : PATTERN (Étage 1 Phase B) -------------------------------- */
function lpPatternCalc(answers){
  const T = window.LP_TEST;
  const sums = {}, counts = {}, fours = {}, threes = {};
  T.patterns.forEach(p => { sums[p.key]=0; counts[p.key]=0; fours[p.key]=0; threes[p.key]=0; });
  let allSum = 0, allN = 0;

  T.c1.forEach(q => {
    const a = answers[q.id] || {};
    q.reactions.forEach((r, ri) => {
      counts[r.pattern] += 1;                    /* apparitions réelles */
      const v = a[ri];
      if(v != null){
        sums[r.pattern] += v;
        allSum += v; allN += 1;
        if(v === 4) fours[r.pattern]  += 1;      /* notes « Tout à fait moi » */
        if(v === 3) threes[r.pattern] += 1;      /* notes « Plutôt moi »       */
      }
    });
  });

  /* Étapes 2-3 : max = apparitions réelles × 4 ; score % arrondi à l'entier */
  const scores = {};
  T.patterns.forEach(p => {
    const max = counts[p.key] * 4;
    scores[p.key] = max ? Math.round((sums[p.key] / max) * 100) : 0;
  });

  /* Étape 4 : classement décroissant. Égalité de % : départage par le nombre
     de « Tout à fait moi ». Si toujours égalité entre 1er et 2e : profil
     mixte assumé, les deux à parts égales (jamais par l'ordre de la liste). */
  const ranked = T.patterns.map(p => p.key)
    .sort((a,b) => (scores[b]-scores[a]) || (fours[b]-fours[a]) || (threes[b]-threes[a]));
  const dominant = ranked[0], secondaire = ranked[1];

  let profil_type;
  if(scores[dominant] === scores[secondaire] && fours[dominant] === fours[secondaire]){
    profil_type = 'mixte';
  } else {
    profil_type = (scores[dominant] - scores[secondaire] >= 15) ? 'net' : 'melange';
  }

  /* Cas particuliers : moyenne de TOUTES les notes de la Phase B */
  const moyenne = allN ? (allSum / allN) : 0;

  return {
    scores, fours, threes, dominant, secondaire, profil_type,
    ecart: scores[dominant] - scores[secondaire],
    profil_tres_active: moyenne >= 3,
    profil_peu_declenche: moyenne <= 1,
  };
}

/* ---- Section 1 bis : LES DEUX AXES (Étage 1 Phase A) ---------------------- *
   Deux moyennes 0-4 sur les items de T.axes : `anxiete` (AX*) et `evitement`
   (AV*). Servent au routage ET aux coordonnées de la carte du rapport payant. */
function lpAxesCalc(answers){
  const T = window.LP_TEST;
  const sum = { anxiete:0, evitement:0 }, n = { anxiete:0, evitement:0 };
  (T.axes || []).forEach(q => {
    const v = answers[q.id];
    if(v != null && (q.axe === 'anxiete' || q.axe === 'evitement')){
      sum[q.axe] += v; n[q.axe] += 1;
    }
  });
  return {
    anxiete:   n.anxiete   ? (sum.anxiete   / n.anxiete)   : 0,
    evitement: n.evitement ? (sum.evitement / n.evitement) : 0,
  };
}

/* ---- Routage : les moyennes d'axe -> mécanismes éligibles ----------------- */
function lpEligibles(axes){
  if(axes.anxiete <= SECURE_MAX && axes.evitement <= SECURE_MAX){
    return { secure:true, list:[] };
  }
  if(axes.anxiete >= axes.evitement + POLE_GAP){
    return { secure:false, list: LP_POLE_ANXIEUX };
  }
  if(axes.evitement >= axes.anxiete + POLE_GAP){
    return { secure:false, list: LP_POLE_DISTANCIANT };
  }
  return { secure:false, list: LP_POLE_TOUS };   /* écart faible OU les deux hauts */
}

/* ---- Figement : le mécanisme dominant à la fin de l'Étage 1 --------------- *
   Le dominant = le mieux classé par lpPatternCalc PARMI les éligibles. Les
   égalités suivent la logique existante (départage par les « Tout à fait moi »).
   Retourne aussi les moyennes d'axe (pour la carte + l'axe du résultat). */
function lpFreeze(answers){
  const axes = lpAxesCalc(answers);
  const elig = lpEligibles(axes);
  if(elig.secure){
    return { secure:true, axes, dominant:null, secondaire:null, eligibles:[], low_confidence:false };
  }
  const pat = lpPatternCalc(answers);
  /* Tri parmi les éligibles : score %, puis « Tout à fait moi », puis « Plutôt
     moi ». L'ordre du tableau n'est PLUS jamais un départage. S'il reste une
     égalité parfaite après ces trois couches, c'est un vrai profil mixte : on
     le signale (low_confidence) au lieu de trancher en silence par la liste. */
  const ranked = elig.list.slice()
    .sort((a,b) => (pat.scores[b]-pat.scores[a]) || (pat.fours[b]-pat.fours[a]) || (pat.threes[b]-pat.threes[a]));
  const dominant = ranked[0], secondaire = ranked[1];
  const low_confidence = ((pat.scores[dominant] - pat.scores[secondaire]) < CONF_GAP);
  return { secure:false, axes, dominant, secondaire, eligibles: elig.list, low_confidence };
}

/* ---- Section 2 : ANCRE (Étage 2, sur la variante jouée) ------------------- */
function lpAncreCalc(answers, variante){
  const T = window.LP_TEST;
  const qs = (T.ancre && T.ancre[variante]) || [];
  const counts = [0,0,0,0,0];
  let total = 0;
  qs.forEach(q => {
    const idx = answers[q.id];
    if(idx != null){ counts[q.options[idx].palier] += 1; total += 1; }
  });
  if(!total) return { counts, position: 0, bascule: 0 };

  /* Position dominante = palier le plus fréquent. Égalité : TOUJOURS le plus
     profond (règle de prudence). Parcours ascendant avec >= : le plus profond
     des ex æquo gagne. */
  let position = 0, best = 0;
  for(let p = 0; p <= 4; p++){
    if(counts[p] > 0 && counts[p] >= best){ best = counts[p]; position = p; }
  }
  /* Zone de bascule = palier le plus profond choisi au moins une fois */
  let bascule = 0;
  for(let p = 4; p >= 0; p--){ if(counts[p] > 0){ bascule = p; break; } }

  return { counts, position, bascule };
}

/* ---- Section 3 : SABOTAGE (Étage 2 bis) ---------------------------------- */
function lpSabotageCalc(answers){
  const T = window.LP_TEST;
  const raw = { defensivite:0, confiance:0, competences:0 };
  let intensite_poursuite = 0;
  T.c3.forEach(q => {
    const v = answers[q.id];
    if(v != null){
      raw[q.dimension] += v;
      if(q.axe === 'poursuivant') intensite_poursuite += v;   /* S3 + S4, sur 8 */
    }
  });
  const scores = {};
  Object.keys(raw).forEach(k => { scores[k] = Math.round((raw[k] / 8) * 100); });

  /* Levier principal = dimension au plus haut score.
     Règle d'égalité (confirmée) : priorité défensivité, puis difficulté de
     confiance, puis déficit de compétences. (L'ordre de T.sabotage encode
     cette priorité.) */
  let principal = T.sabotage[0].key;
  T.sabotage.forEach(s => { if(scores[s.key] > scores[principal]) principal = s.key; });

  return { scores, principal, intensite_poursuite };
}

/* ---- Section 3 (suite) : AXE ---------------------------------------------- *
   v2 : l'axe du résultat est dérivé des moyennes d'axe (plus défendable).
   Fallback LP_AXE_MAP (déduit du pattern) si les axes manquent. */
const LP_AXE_MAP = {
  'Miroir':'poursuivant', 'Guetteur':'poursuivant', 'Sauveur':'poursuivant', 'Incendiaire':'poursuivant',
  'Fugitif':'distanciant', 'Bastion':'distanciant',
  'Caméléon':'transversal', 'Alchimiste':'transversal',
};
function lpAxeFromAxes(axes){
  if(!axes) return null;
  const d = axes.anxiete - axes.evitement;
  if(Math.abs(d) < POLE_GAP) return 'mixte';
  return d > 0 ? 'poursuivant' : 'distanciant';
}
function lpAxe(dominant, secondaire, profil_type){
  const resolve = (k, other) => {
    if(LP_AXE_MAP[k] !== 'transversal') return LP_AXE_MAP[k];
    if(LP_AXE_MAP[other] && LP_AXE_MAP[other] !== 'transversal') return LP_AXE_MAP[other];
    return 'mixte';   /* le secondaire est aussi transversal */
  };
  if(profil_type === 'mixte'){
    const a1 = resolve(dominant, secondaire), a2 = resolve(secondaire, dominant);
    return a1 === a2 ? a1 : 'mixte';
  }
  return resolve(dominant, secondaire);
}

/* ---- BLOC 0 : lookups robustes (l'ordre des questions peut bouger) -------- */
function lpFindC0(field){
  const T = window.LP_TEST;
  return (T.c0 || []).find(q => q.options && q.options.some(o => field in o)) || null;
}
function lpC0Value(answers, field){
  const q = lpFindC0(field);
  if(!q) return null;
  const idx = answers[q.id];
  return (idx != null && q.options[idx]) ? q.options[idx][field] : null;
}

/* ---- Sections 4-6 : ordre d'exécution + objet résultat ------------------- */
function lpComputeResultat(answers, frozen){
  const T = window.LP_TEST;

  /* 1. Garde-fou sécurité d'abord (prime sur tout, jamais sautée) */
  const safetyQ = T.c0.find(q => q.safety);
  const securite = (safetyQ && answers[safetyQ.id] != null)
    ? safetyQ.options[answers[safetyQ.id]].securite : 'ok';

  /* Contexte non scoré (personnalisation). */
  const contexte = {
    sexe:       lpC0Value(answers, 'sexe'),
    age:        lpC0Value(answers, 'age'),
    statut:     lpC0Value(answers, 'branche'),
    repetition: lpC0Value(answers, 'repetition'),
  };

  /* 2. Figement : reçu du flux (variante jouée) ou recalculé. */
  const fr = frozen || lpFreeze(answers);
  const axes = fr.axes || lpAxesCalc(answers);

  /* Scores pattern (carte des 8 + drapeaux d'intensité). */
  const pat = lpPatternCalc(answers);

  /* --- Route sécure : aucun mécanisme forcé, pas d'Ancre. --- */
  if(fr.secure){
    return {
      securite,
      secure: true,
      low_confidence: fr.low_confidence,
      axes,
      axe: lpAxeFromAxes(axes),
      tous_les_scores_pattern: pat.scores,
      profil_tres_active: pat.profil_tres_active,
      profil_peu_declenche: pat.profil_peu_declenche,
      contexte,
    };
  }

  /* --- Route mécanisme --- */
  const dominant = fr.dominant, secondaire = fr.secondaire;
  const ecart = pat.scores[dominant] - pat.scores[secondaire];
  let profil_type;
  if(pat.scores[dominant] === pat.scores[secondaire] && pat.fours[dominant] === pat.fours[secondaire]){
    profil_type = 'mixte';
  } else {
    profil_type = (ecart >= 15) ? 'net' : 'melange';
  }

  const variante = dominant;                 /* la variante jouée = le figé */
  const anc = lpAncreCalc(answers, variante);
  const sab = lpSabotageCalc(answers);
  const lib = v => T.paliers.find(p => p.v === v) || {};

  return {
    securite,
    secure: false,
    low_confidence: fr.low_confidence,
    axes,

    pattern_dominant: dominant,
    pattern_dominant_score: pat.scores[dominant],
    pattern_secondaire: secondaire,
    pattern_secondaire_score: pat.scores[secondaire],
    profil_type,
    tous_les_scores_pattern: pat.scores,
    profil_tres_active: pat.profil_tres_active,
    profil_peu_declenche: pat.profil_peu_declenche,

    ancre_position: anc.position,
    ancre_position_libelle: { fr: lib(anc.position).fr, en: lib(anc.position).en },
    ancre_bascule: anc.bascule,
    ancre_bascule_libelle: { fr: lib(anc.bascule).fr, en: lib(anc.bascule).en },
    ancre_variante: variante,

    sabotage_principal: sab.principal,
    sabotage_scores: sab.scores,
    intensite_poursuite: sab.intensite_poursuite,
    axe: lpAxeFromAxes(axes) || lpAxe(dominant, secondaire, profil_type),

    contexte,
  };
}

window.LP_ENGINE = {
  computeResultat: lpComputeResultat,
  patternCalc: lpPatternCalc,
  axesCalc: lpAxesCalc,
  eligibles: lpEligibles,
  freeze: lpFreeze,
  ancreCalc: lpAncreCalc,
  sabotageCalc: lpSabotageCalc,
};
