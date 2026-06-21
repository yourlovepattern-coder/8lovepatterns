/* ============================================================================
   8LovePatterns — MOTEUR DE CALCUL
   Implémente fidèlement uploads/8lovepatterns_Moteur_de_calcul.md
   + les 3 arbitrages utilisateur (11 juin 2026) :
     · Section 1 : dénominateur = nombre RÉEL d'apparitions du pattern dans le
       Chapitre 1 × 4. Jamais de dénominateurs fixes écrits en dur.
     · Variante d'Ancre : celle jouée pendant le test (figée à l'arrivée au
       Chapitre 2), jamais recalculée après coup.
     · S3+S4 : stocké dans `intensite_poursuite`, ne modifie JAMAIS `axe`.
   Aucune autre règle que celles écrites dans la spec.
   ========================================================================== */

/* ---- Section 1 : PATTERN (Chapitre 1) ------------------------------------ */
function lpPatternCalc(answers){
  const T = window.LP_TEST;
  const sums = {}, counts = {}, fours = {};
  T.patterns.forEach(p => { sums[p.key]=0; counts[p.key]=0; fours[p.key]=0; });
  let allSum = 0, allN = 0;

  T.c1.forEach(q => {
    const a = answers[q.id] || {};
    q.reactions.forEach((r, ri) => {
      counts[r.pattern] += 1;                    /* apparitions réelles */
      const v = a[ri];
      if(v != null){
        sums[r.pattern] += v;
        allSum += v; allN += 1;
        if(v === 4) fours[r.pattern] += 1;       /* notes « Tout à fait moi » */
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
    .sort((a,b) => (scores[b]-scores[a]) || (fours[b]-fours[a]));
  const dominant = ranked[0], secondaire = ranked[1];

  let profil_type;
  if(scores[dominant] === scores[secondaire] && fours[dominant] === fours[secondaire]){
    profil_type = 'mixte';
  } else {
    profil_type = (scores[dominant] - scores[secondaire] >= 15) ? 'net' : 'melange';
  }

  /* Cas particuliers : moyenne de TOUTES les notes du chapitre 1 */
  const moyenne = allN ? (allSum / allN) : 0;

  return {
    scores, dominant, secondaire, profil_type,
    ecart: scores[dominant] - scores[secondaire],
    profil_tres_active: moyenne >= 3,
    profil_peu_declenche: moyenne <= 1,
  };
}

/* ---- Section 2 : ANCRE (Chapitre 2, sur la variante jouée) --------------- */
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

/* ---- Section 3 : SABOTAGE (Chapitre 3) ----------------------------------- */
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
     confiance, puis déficit de compétences. Du plus visible et structurant au
     plus fin : la défensivité est le mécanisme le plus central du sabotage et
     le plus parlant pour la personne, donc mise en avant à égalité.
     (L'ordre de T.sabotage encode cette priorité.) */
  let principal = T.sabotage[0].key;
  T.sabotage.forEach(s => { if(scores[s.key] > scores[principal]) principal = s.key; });

  return { scores, principal, intensite_poursuite };
}

/* ---- Section 3 (suite) : AXE, déduit du pattern uniquement --------------- */
const LP_AXE_MAP = {
  'Miroir':'poursuivant', 'Guetteur':'poursuivant', 'Sauveur':'poursuivant', 'Incendiaire':'poursuivant',
  'Fugitif':'distanciant', 'Bastion':'distanciant',
  'Caméléon':'transversal', 'Alchimiste':'transversal',
};
function lpAxe(dominant, secondaire, profil_type){
  const resolve = (k, other) => {
    if(LP_AXE_MAP[k] !== 'transversal') return LP_AXE_MAP[k];
    if(LP_AXE_MAP[other] && LP_AXE_MAP[other] !== 'transversal') return LP_AXE_MAP[other];
    return 'mixte';   /* le secondaire est aussi transversal */
  };
  if(profil_type === 'mixte'){
    /* Règle confirmée pour le profil mixte parfait :
       · même côté (deux poursuivants ou deux distanciants) → cette valeur ;
       · côtés opposés → mixte ;
       · l'un des deux transversal (Caméléon, Alchimiste) → l'autre donne l'axe. */
    const a1 = resolve(dominant, secondaire), a2 = resolve(secondaire, dominant);
    return a1 === a2 ? a1 : 'mixte';
  }
  return resolve(dominant, secondaire);
}

/* ---- Sections 4-6 : ordre d'exécution + objet résultat ------------------- */
function lpComputeResultat(answers, ancre_variante){
  const T = window.LP_TEST;

  /* 1. Garde-fou sécurité d'abord (prime sur tout, jamais sautée) */
  const safetyQ = T.c0.find(q => q.safety);
  const securite = (safetyQ && answers[safetyQ.id] != null)
    ? safetyQ.options[answers[safetyQ.id]].securite : 'ok';

  /* 2. Pattern */
  const pat = lpPatternCalc(answers);

  /* 3. La variante d'Ancre jouée pendant le test (figée par le flux) */
  const variante = ancre_variante || pat.dominant;

  /* 4. Ancre · 5. Sabotage */
  const anc = lpAncreCalc(answers, variante);
  const sab = lpSabotageCalc(answers);

  const lib = v => T.paliers.find(p => p.v === v) || {};
  const statutQ = T.c0[0], repQ = T.c0[1];

  /* 6. L'objet résultat final */
  return {
    securite,

    pattern_dominant: pat.dominant,
    pattern_dominant_score: pat.scores[pat.dominant],
    pattern_secondaire: pat.secondaire,
    pattern_secondaire_score: pat.scores[pat.secondaire],
    profil_type: pat.profil_type,
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
    axe: lpAxe(pat.dominant, pat.secondaire, pat.profil_type),

    contexte: {
      statut: answers[statutQ.id] != null ? statutQ.options[answers[statutQ.id]].branche : null,
      repetition: answers[repQ.id] != null ? repQ.options[answers[repQ.id]].repetition : null,
    },
  };
}

window.LP_ENGINE = {
  computeResultat: lpComputeResultat,
  patternCalc: lpPatternCalc,
  ancreCalc: lpAncreCalc,
  sabotageCalc: lpSabotageCalc,
};
