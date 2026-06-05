/* ============================================================================
   8LovePatterns, Item bank V1   (consumed by engine.jsx as window.LP_RAW_ITEMS)
   ----------------------------------------------------------------------------
   Every item is one I(...) call so weights are easy to read and tune later.
   I(id, itemType, phase, text,
     primaryDimension, secondaryDimension,
     archetypeWeights, anchorWeight, facet, discriminatesBetween,
     polarity, intensity)

   itemType : mechanism | situation | rupture_ex | contrast | anchor_direct | anchor_contextualized
   phase    : core | adaptive
   polarity : positive | reverse | contrast | positive_anchor
   intensity: low | medium | high
   Archetype keys: incendiaire guetteur cameleon sauveur bastion fugitif alchimiste miroir

   Texts are English (to match the site); ids / weights / dimensions / facets /
   discrimination pairs are exactly as specified in the V1 bank.
   ========================================================================== */

const LP_RAW_ITEMS = [];
function I(id, itemType, phase, text, pd, sd, aw, anchorWeight, facet, disc, polarity, intensity){
  LP_RAW_ITEMS.push({
    id, itemType, phase, responseType:'likert', text,
    primaryDimension: pd, secondaryDimension: sd || null,
    archetypeWeights: aw || {}, anchorWeight: anchorWeight || 0,
    facet: facet || null, discriminatesBetween: disc || [],
    polarity, intensity,
  });
}

/* ===== INCENDIAIRE (pursuit_intensity) =================================== */
I('INC_001','mechanism','core',"When I sense the other person is less present, I tend to look for a strong reaction to reassure myself.",'pursuit_intensity','hypervigilance',{incendiaire:1.4,guetteur:0.2,miroir:0.2},0,'response to uncertainty',['incendiaire','guetteur'],'positive','medium');
I('INC_002','mechanism','core',"I sometimes prefer a clear argument to a silence that leaves me in doubt.",'pursuit_intensity',null,{incendiaire:1.5,guetteur:0.2},0,'tolerance of silence',['incendiaire','guetteur','bastion'],'positive','medium');
I('INC_003','situation','adaptive',"If the other person turns cold or distant, I may want to create an intense moment to see whether they still care.",'pursuit_intensity','external_validation',{incendiaire:1.5,miroir:0.3},0,'affective test',['incendiaire','miroir'],'positive','high');
I('INC_004','mechanism','adaptive',"When I'm afraid of losing the other person, I can put on more pressure than I'd like to.",'pursuit_intensity','anchor_regulation',{incendiaire:1.3,guetteur:0.2},-0.2,'relational pressure',['incendiaire','guetteur'],'positive','medium');
I('INC_005','mechanism','adaptive',"I sometimes provoke tension to check whether the other person will stay, respond, or fight for the bond.",'pursuit_intensity',null,{incendiaire:1.7},-0.3,'defensive provocation',['incendiaire','guetteur','miroir'],'positive','high');
I('INC_006','situation','adaptive',"A relationship that feels too calm can sometimes make me feel a proof of love is missing.",'pursuit_intensity','external_validation',{incendiaire:1.2,miroir:0.4},0,'intensity as proof',['incendiaire','miroir','bastion'],'positive','medium');
I('INC_007','rupture_ex','adaptive',"After a breakup or some distance, I've looked for a reaction to find out whether the bond still existed.",'pursuit_intensity','external_validation',{incendiaire:1.4,miroir:0.3,guetteur:0.2},0,'reaction after losing the bond',['incendiaire','miroir','guetteur'],'positive','medium');
I('INC_008','mechanism','adaptive',"When I feel ignored, I can want to say or do something that forces the other person to take a stance.",'pursuit_intensity','hypervigilance',{incendiaire:1.5,guetteur:0.2},-0.2,'need for a clear stance',['incendiaire','guetteur'],'positive','high');

/* ===== CAMÉLÉON (self_adaptation) ======================================= */
I('CAM_001','mechanism','core',"I adapt quickly to what the other person likes, expects, or seems to want from me.",'self_adaptation','external_validation',{cameleon:1.5,miroir:0.2},0,'relational adaptation',['cameleon','miroir'],'positive','medium');
I('CAM_002','mechanism','core',"I can hide a part of myself to stay likable or to avoid creating tension.",'self_adaptation','emotional_fortress',{cameleon:1.4,bastion:0.2},-0.2,'inhibition to please',['cameleon','bastion'],'positive','medium');
I('CAM_003','situation','adaptive',"When I sense something displeases the other person, I quickly adjust my behavior.",'self_adaptation','hypervigilance',{cameleon:1.4,guetteur:0.2},0,'self-correction',['cameleon','guetteur'],'positive','medium');
I('CAM_004','mechanism','adaptive',"I sometimes struggle to know what I really want, because I'm so focused on what the other person wants.",'self_adaptation','external_validation',{cameleon:1.5,miroir:0.2,sauveur:0.2},-0.2,'losing touch with myself',['cameleon','sauveur','miroir'],'positive','high');
I('CAM_005','mechanism','adaptive',"I can accept things that don't suit me so I don't lose my place in the relationship.",'self_adaptation','rescuing',{cameleon:1.3,sauveur:0.3},-0.3,'excessive concession',['cameleon','sauveur'],'positive','high');
I('CAM_006','rupture_ex','adaptive',"After a breakup or some distance, I've changed how I act to become desirable again in the other person's eyes.",'self_adaptation','external_validation',{cameleon:1.2,miroir:0.5},0,'post-breakup adaptation',['cameleon','miroir'],'positive','medium');
I('CAM_007','situation','adaptive',"Early in a relationship, I can naturally become the version of myself that seems to fit the other person best.",'self_adaptation','external_validation',{cameleon:1.5,miroir:0.2},0,'identity malleability',['cameleon','miroir'],'positive','medium');
I('CAM_008','mechanism','adaptive',"I sometimes downplay my disagreements to preserve the harmony of the bond.",'self_adaptation','anchor_regulation',{cameleon:1.3,sauveur:0.2},-0.2,'avoiding disagreement',['cameleon','sauveur'],'positive','medium');

/* ===== SAUVEUR (rescuing) =============================================== */
I('SAU_001','mechanism','core',"When someone I love is struggling, I quickly feel that I have to do something.",'rescuing','self_adaptation',{sauveur:1.5,cameleon:0.2},0,'obligation to help',['sauveur','cameleon'],'positive','medium');
I('SAU_002','mechanism','core',"I feel more important in a relationship when I know the other person needs me.",'rescuing','external_validation',{sauveur:1.5,miroir:0.2},0,'worth through usefulness',['sauveur','miroir'],'positive','medium');
I('SAU_003','situation','adaptive',"I can pour a lot of energy into the other person, even when I'm starting to feel drained myself.",'rescuing','self_adaptation',{sauveur:1.4,cameleon:0.3},-0.3,'exhaustion through giving',['sauveur','cameleon'],'positive','high');
I('SAU_004','mechanism','adaptive',"I quickly spot the other person's wounds and tend to want to soothe them.",'rescuing','hypervigilance',{sauveur:1.4,guetteur:0.2},0,'emotional repair',['sauveur','guetteur'],'positive','medium');
I('SAU_005','mechanism','adaptive',"I'm sometimes afraid I'll be loved less if I'm not useful, present, or indispensable.",'rescuing','external_validation',{sauveur:1.4,miroir:0.3,cameleon:0.2},-0.2,'love conditioned on usefulness',['sauveur','miroir','cameleon'],'positive','high');
I('SAU_006','rupture_ex','adaptive',"After a breakup or some distance, I can stay available because I feel the other person still needs me.",'rescuing','self_adaptation',{sauveur:1.6,cameleon:0.2},-0.2,'availability after losing the bond',['sauveur','cameleon'],'positive','high');
I('SAU_007','situation','adaptive',"I can be drawn to wounded, unstable, or difficult people because I feel I can help them.",'rescuing','external_validation',{sauveur:1.5,miroir:0.2},-0.2,'attraction to repair',['sauveur','miroir'],'positive','medium');
I('SAU_008','mechanism','adaptive',"I find it hard to watch someone I love suffer without feeling responsible for making it better.",'rescuing','anchor_regulation',{sauveur:1.6},-0.3,'excessive responsibility',['sauveur','cameleon'],'positive','high');

/* ===== GUETTEUR (hypervigilance) ======================================== */
I('GUE_001','mechanism','core',"I notice changes in the other person's tone, rhythm, or availability very quickly.",'hypervigilance',null,{guetteur:1.5},0,'detecting variations',['guetteur','alchimiste'],'positive','medium');
I('GUE_002','situation','core',"A shorter, colder, or later message than usual can stay on my mind for a long time.",'hypervigilance','external_validation',{guetteur:1.5,miroir:0.2},-0.1,'rumination on signs',['guetteur','miroir'],'positive','medium');
I('GUE_003','mechanism','adaptive',"When something feels different, I find it hard to wait before looking for an explanation.",'hypervigilance','pursuit_intensity',{guetteur:1.3,incendiaire:0.3},-0.2,'urgency for an explanation',['guetteur','incendiaire'],'positive','medium');
I('GUE_004','situation','adaptive',"I can reread exchanges or go back over details to understand what has changed.",'hypervigilance','intellectualization',{guetteur:1.3,alchimiste:0.4},0,'relational investigation',['guetteur','alchimiste'],'positive','medium');
I('GUE_005','mechanism','adaptive',"Even when everything is fine, part of me stays alert to anything that might signal distance.",'hypervigilance',null,{guetteur:1.6},-0.2,'anticipating loss',['guetteur','bastion','fugitif'],'positive','high');
I('GUE_006','rupture_ex','adaptive',"After a breakup or some distance, I can watch for signs to understand whether the story is truly over.",'hypervigilance','external_validation',{guetteur:1.5,miroir:0.2},-0.1,'post-breakup surveillance',['guetteur','miroir','incendiaire'],'positive','high');
I('GUE_007','situation','adaptive',"When the other person shifts their attitude slightly, my mind can build several possible scenarios.",'hypervigilance','intellectualization',{guetteur:1.2,alchimiste:0.4},0,'mental scenarios',['guetteur','alchimiste'],'positive','medium');
I('GUE_008','mechanism','adaptive',"I sometimes need to check several small clues before I feel truly reassured in the bond.",'hypervigilance','external_validation',{guetteur:1.5,miroir:0.2},0,'accumulating proof',['guetteur','miroir'],'positive','medium');

/* ===== BASTION (emotional_fortress) ===================================== */
I('BAS_001','mechanism','core',"I'd rather handle what affects me on my own than clearly show that I need the other person.",'emotional_fortress','withdrawal',{bastion:1.5,fugitif:0.2},0,'defensive autonomy',['bastion','fugitif'],'positive','medium');
I('BAS_002','mechanism','core',"Even when I care deeply about someone, I can give the impression that I don't need anyone.",'emotional_fortress',null,{bastion:1.5},-0.1,'signal of distance',['bastion','fugitif'],'positive','medium');
I('BAS_003','mechanism','adaptive',"I find it hard to ask for tenderness, help, or reassurance without feeling exposed.",'emotional_fortress','external_validation',{bastion:1.4,miroir:0.2},-0.2,'difficulty asking',['bastion','miroir'],'positive','medium');
I('BAS_004','situation','adaptive',"When I'm hurt, I can become very calm, very distant, or hard to reach.",'emotional_fortress','withdrawal',{bastion:1.3,fugitif:0.4},-0.2,'closing under hurt',['bastion','fugitif'],'positive','high');
I('BAS_005','mechanism','adaptive',"I'd rather be seen as strong than risk being seen as dependent.",'emotional_fortress','external_validation',{bastion:1.5,miroir:0.1},-0.1,'dignity as armor',['bastion','miroir'],'positive','medium');
I('BAS_006','rupture_ex','adaptive',"After a breakup or some distance, I can show great composure even if inside I'm affected.",'emotional_fortress','withdrawal',{bastion:1.5,fugitif:0.2},0,'composure after breakup',['bastion','fugitif'],'positive','medium');
I('BAS_007','situation','adaptive',"When a conversation becomes too vulnerable, I can answer with control rather than with what I truly feel.",'emotional_fortress','intellectualization',{bastion:1.2,alchimiste:0.4},-0.2,'control facing vulnerability',['bastion','alchimiste'],'positive','medium');
I('BAS_008','mechanism','adaptive',"I sometimes need to keep an inner zone that no one can really reach.",'emotional_fortress','withdrawal',{bastion:1.4,fugitif:0.3},0,'protected inner space',['bastion','fugitif'],'positive','medium');

/* ===== FUGITIF (withdrawal) ============================================= */
I('FUG_001','mechanism','core',"When a relationship becomes too demanding, I need to take some distance to breathe.",'withdrawal','emotional_fortress',{fugitif:1.6,bastion:0.2},0,'need for air',['fugitif','bastion'],'positive','medium');
I('FUG_002','situation','core',"I can be very present at first, then close off once expectations become more concrete.",'withdrawal',null,{fugitif:1.5},-0.1,'retreat after closeness',['fugitif','bastion'],'positive','high');
I('FUG_003','mechanism','adaptive',"Facing an important emotional conversation, my first reflex can be to avoid it or put it off.",'withdrawal','emotional_fortress',{fugitif:1.3,bastion:0.3},-0.2,'avoiding confrontation',['fugitif','bastion'],'positive','medium');
I('FUG_004','mechanism','adaptive',"I can feel commitment as a loss of freedom, even when the person truly matters to me.",'withdrawal',null,{fugitif:1.6},0,'commitment as constraint',['fugitif','bastion','miroir'],'positive','high');
I('FUG_005','situation','adaptive',"When I feel expected or claimed, I can grow colder without really deciding to.",'withdrawal','emotional_fortress',{fugitif:1.4,bastion:0.3},-0.1,'automatic cooling',['fugitif','bastion'],'positive','medium');
I('FUG_006','rupture_ex','adaptive',"After a breakup or some distance, I can cut things off cleanly to avoid feeling for too long.",'withdrawal','emotional_fortress',{fugitif:1.5,bastion:0.3},-0.1,'cut-off after breakup',['fugitif','bastion'],'positive','high');
I('FUG_007','mechanism','adaptive',"The more the other person asks for clarity, the more I can feel an inner pressure that makes me want to pull away.",'withdrawal','pursuit_intensity',{fugitif:1.5,incendiaire:-0.2},-0.2,'pressure from clarification',['fugitif','incendiaire'],'contrast','high');
I('FUG_008','situation','adaptive',"I can love someone sincerely while mentally keeping an exit open.",'withdrawal','emotional_fortress',{fugitif:1.5,bastion:0.2},0,'mental exit',['fugitif','bastion'],'positive','medium');

/* ===== ALCHIMISTE (intellectualization) ================================= */
I('ALC_001','mechanism','core',"I analyze my relationships a lot to understand what's going on before showing what I feel.",'intellectualization','emotional_fortress',{alchimiste:1.5,bastion:0.2},0,'analysis before expression',['alchimiste','bastion'],'positive','medium');
I('ALC_002','mechanism','core',"I often look for a logical explanation for what I feel before accepting the emotion itself.",'intellectualization','anchor_regulation',{alchimiste:1.5},-0.1,'emotional rationalization',['alchimiste','guetteur'],'positive','medium');
I('ALC_003','situation','adaptive',"I can turn a wound into analysis rather than simply saying it hurt me.",'intellectualization','emotional_fortress',{alchimiste:1.4,bastion:0.3},-0.2,'intellectualized pain',['alchimiste','bastion'],'positive','high');
I('ALC_004','mechanism','adaptive',"I'm often more comfortable explaining my emotions than expressing them simply.",'intellectualization','emotional_fortress',{alchimiste:1.4,bastion:0.2},-0.1,'explaining rather than expressing',['alchimiste','bastion'],'positive','medium');
I('ALC_005','mechanism','adaptive',"I can understand a relationship very finely while struggling to let myself be fully touched by it.",'intellectualization','emotional_fortress',{alchimiste:1.5,bastion:0.2},-0.1,'cognitive distance',['alchimiste','bastion'],'positive','high');
I('ALC_006','rupture_ex','adaptive',"After a breakup or some distance, I can replay the story over and over to understand what really happened.",'intellectualization','hypervigilance',{alchimiste:1.3,guetteur:0.4},0,'post-breakup analysis',['alchimiste','guetteur'],'positive','medium');
I('ALC_007','situation','adaptive',"When I'm touched, my mind quickly goes to causes, patterns, or possible explanations.",'intellectualization','hypervigilance',{alchimiste:1.4,guetteur:0.2},0,'immediate causality',['alchimiste','guetteur'],'positive','medium');
I('ALC_008','mechanism','adaptive',"I sometimes need to understand an emotion before I allow myself to feel it fully.",'intellectualization','anchor_regulation',{alchimiste:1.5},-0.1,'cognitive permission',['alchimiste','bastion'],'positive','medium');

/* ===== MIROIR (external_validation) ===================================== */
I('MIR_001','mechanism','core',"The way the person I love sees me strongly shapes how I feel about myself.",'external_validation',null,{miroir:1.6},0,'worth dependent on the gaze',['miroir','cameleon'],'positive','medium');
I('MIR_002','situation','core',"When the other person desires me, chooses me, or values me, I immediately feel more solid.",'external_validation','pursuit_intensity',{miroir:1.5,incendiaire:0.2},0,'solidity through validation',['miroir','incendiaire'],'positive','medium');
I('MIR_003','mechanism','adaptive',"When I feel less chosen, I can quickly doubt my worth.",'external_validation','hypervigilance',{miroir:1.5,guetteur:0.2},-0.2,'doubting my worth',['miroir','guetteur'],'positive','high');
I('MIR_004','mechanism','adaptive',"I can look to the other person for confirmation that I'm interesting, desirable, or important enough.",'external_validation','self_adaptation',{miroir:1.5,cameleon:0.2},0,'confirmation of worth',['miroir','cameleon'],'positive','medium');
I('MIR_005','situation','adaptive',"I can compare how the other person treats me to how they treat or have treated others.",'external_validation','hypervigilance',{miroir:1.3,guetteur:0.3},-0.1,'affective comparison',['miroir','guetteur'],'positive','medium');
I('MIR_006','rupture_ex','adaptive',"After a breakup or some distance, I can wonder what this ending says about my personal worth.",'external_validation',null,{miroir:1.6},-0.2,'worth after rejection',['miroir','incendiaire','guetteur'],'positive','high');
I('MIR_007','mechanism','adaptive',"When I no longer feel desired or chosen, I can feel like I'm losing part of my identity.",'external_validation','self_adaptation',{miroir:1.6,cameleon:0.2},-0.2,'identity through desirability',['miroir','cameleon'],'positive','high');
I('MIR_008','situation','adaptive',"A drop in the other person's attention can make me wonder whether I'm still enough for them.",'external_validation','hypervigilance',{miroir:1.4,guetteur:0.3},-0.1,'attention as proof of worth',['miroir','guetteur'],'positive','medium');

/* ===== CONTRAST ITEMS (separate look-alike profiles) ==================== */
I('CON_001','contrast','core',"Facing a silence, I mostly try to understand the signs rather than provoke a reaction.",'hypervigilance','pursuit_intensity',{guetteur:1.2,incendiaire:-0.8},0,'silence: signs vs reaction',['guetteur','incendiaire'],'contrast','medium');
I('CON_002','contrast','core',"When I'm afraid of losing the bond, my reflex is more to make the other react than to quietly watch the clues.",'pursuit_intensity','hypervigilance',{incendiaire:1.2,guetteur:-0.8},-0.1,'reaction vs surveillance',['incendiaire','guetteur'],'contrast','medium');
I('CON_003','contrast','adaptive',"What hurts me most isn't only that the other leaves, it's what their leaving seems to say about my worth.",'external_validation','pursuit_intensity',{miroir:1.3,incendiaire:-0.2},-0.1,'bond vs worth',['miroir','incendiaire'],'contrast','high');
I('CON_004','contrast','adaptive',"When I suffer in a relationship, I tend to want strong proof of the bond more than proof of my personal worth.",'pursuit_intensity','external_validation',{incendiaire:1.2,miroir:-0.7},0,'proof of bond vs proof of worth',['incendiaire','miroir'],'contrast','medium');
I('CON_005','contrast','core',"In a relationship, I change myself more to be accepted than to become indispensable.",'self_adaptation','rescuing',{cameleon:1.2,sauveur:-0.7},0,'adaptation vs usefulness',['cameleon','sauveur'],'contrast','medium');
I('CON_006','contrast','adaptive',"I keep my place in a relationship mostly by helping the other, more than by becoming what they expect of me.",'rescuing','self_adaptation',{sauveur:1.2,cameleon:-0.7},0,'usefulness vs adaptation',['sauveur','cameleon'],'contrast','medium');
I('CON_007','contrast','adaptive',"When I'm hurt, I often stay present but closed off, rather than truly disappearing.",'emotional_fortress','withdrawal',{bastion:1.2,fugitif:-0.6},0,'closing vs fleeing',['bastion','fugitif'],'contrast','medium');
I('CON_008','contrast','adaptive',"When I feel too expected, I'd rather move away than stay present behind a solid front.",'withdrawal','emotional_fortress',{fugitif:1.2,bastion:-0.6},0,'fleeing vs front',['fugitif','bastion'],'contrast','medium');
I('CON_009','contrast','adaptive',"When something's wrong, I mostly look for concrete clues in the other's behavior rather than a big psychological explanation.",'hypervigilance','intellectualization',{guetteur:1.2,alchimiste:-0.5},0,'clue vs theory',['guetteur','alchimiste'],'contrast','medium');
I('CON_010','contrast','adaptive',"When a relationship troubles me, I mostly try to understand the overall pattern rather than check every small sign.",'intellectualization','hypervigilance',{alchimiste:1.2,guetteur:-0.5},0,'theory vs clue',['alchimiste','guetteur'],'contrast','medium');
I('CON_011','contrast','adaptive',"I can seem distant because I analyze too much, not necessarily because I want to flee.",'intellectualization','withdrawal',{alchimiste:1.1,fugitif:-0.4,bastion:0.2},0,'cognitive distance vs flight',['alchimiste','fugitif'],'contrast','medium');
I('CON_012','contrast','adaptive',"When I take distance, it's mostly to get some air, not to analyze what I feel.",'withdrawal','intellectualization',{fugitif:1.2,alchimiste:-0.5},0,'breathing vs analysis',['fugitif','alchimiste'],'contrast','medium');
I('CON_013','contrast','adaptive',"I can make myself desirable by adapting, but deep down what I'm seeking is to feel I'm still worth something.",'external_validation','self_adaptation',{miroir:1.2,cameleon:0.2},-0.1,'adaptation in service of worth',['miroir','cameleon'],'contrast','high');
I('CON_014','contrast','adaptive',"I change mostly to preserve the bond, not necessarily because I doubt my personal worth.",'self_adaptation','external_validation',{cameleon:1.2,miroir:-0.5},0,'bond vs worth',['cameleon','miroir'],'contrast','medium');
I('CON_015','contrast','adaptive',"When the other is fragile, I first think about what I can do to help, rather than what I should become to please them.",'rescuing','self_adaptation',{sauveur:1.2,cameleon:-0.5},0,'help vs adaptation',['sauveur','cameleon'],'contrast','medium');
I('CON_016','contrast','adaptive',"I sometimes prefer to keep control of my image rather than ask directly for what I need.",'emotional_fortress','external_validation',{bastion:1.1,miroir:0.2},-0.2,'strong image vs need',['bastion','miroir'],'contrast','medium');
I('CON_017','contrast','adaptive',"In tense moments, I tend to check where the other person stands more than to ask what it says about my worth.",'hypervigilance','external_validation',{guetteur:1.1,miroir:-0.4},0,'state of the bond vs self-worth',['guetteur','miroir'],'contrast','medium');
I('CON_018','contrast','adaptive',"In tense moments, what affects me most is feeling less chosen or less desirable.",'external_validation','hypervigilance',{miroir:1.2,guetteur:-0.3},-0.1,'affective worth',['miroir','guetteur'],'contrast','medium');
I('CON_019','contrast','adaptive',"I can stay very calm on the surface, even when inside I want the other person to reassure me.",'emotional_fortress','pursuit_intensity',{bastion:1.1,incendiaire:-0.3},0,'contained intensity',['bastion','incendiaire'],'contrast','medium');
I('CON_020','contrast','adaptive',"When I need reassurance, I find it hard to keep it to myself and it quickly comes out in the exchange.",'pursuit_intensity','emotional_fortress',{incendiaire:1.2,bastion:-0.5},-0.1,'expression under tension',['incendiaire','bastion'],'contrast','medium');
I('CON_021','contrast','adaptive',"When I sense tension, I'd rather understand what it means than immediately try to repair the other person.",'intellectualization','rescuing',{alchimiste:1.1,sauveur:-0.4},0,'understand vs repair',['alchimiste','sauveur'],'contrast','medium');
I('CON_022','contrast','adaptive',"When I sense tension, I quickly think about what I can do to relieve the other rather than analyze the situation.",'rescuing','intellectualization',{sauveur:1.1,alchimiste:-0.4},0,'repair vs understand',['sauveur','alchimiste'],'contrast','medium');
I('CON_023','contrast','adaptive',"When the relationship becomes intense, I move closer to get proof rather than away to find air.",'pursuit_intensity','withdrawal',{incendiaire:1.2,fugitif:-0.8},0,'pursuit vs flight',['incendiaire','fugitif'],'contrast','medium');
I('CON_024','contrast','adaptive',"When the relationship becomes intense, I move away to find air rather than seek immediate proof.",'withdrawal','pursuit_intensity',{fugitif:1.2,incendiaire:-0.8},0,'flight vs pursuit',['fugitif','incendiaire'],'contrast','medium');

/* ===== ANCHOR, direct ================================================== */
I('ANC_001','anchor_direct','core',"I can say what I feel without attacking, begging, or disappearing.",'anchor_regulation',null,{},1.5,'regulated expression',[],'positive_anchor','high');
I('ANC_002','anchor_direct','core',"I can hear a disagreement without automatically seeing it as rejection.",'anchor_regulation','hypervigilance',{guetteur:-0.2,miroir:-0.2},1.4,'tolerance of disagreement',[],'positive_anchor','medium');
I('ANC_003','anchor_direct','core',"When a relationship moves me, I can stay connected to my own needs.",'anchor_regulation','self_adaptation',{cameleon:-0.2,sauveur:-0.2},1.4,'staying myself',[],'positive_anchor','medium');
I('ANC_004','anchor_direct','core',"I can set a limit without trying to punish the other person.",'anchor_regulation','pursuit_intensity',{incendiaire:-0.2,bastion:-0.1},1.4,'regulated limit',[],'positive_anchor','medium');
I('ANC_005','anchor_direct','adaptive',"I can accept a period of uncertainty without wanting to resolve everything immediately.",'anchor_regulation','hypervigilance',{guetteur:-0.3,incendiaire:-0.2},1.5,'tolerance of uncertainty',[],'positive_anchor','high');
I('ANC_006','anchor_direct','adaptive',"I can acknowledge my part in a difficulty without carrying the whole relationship on my shoulders.",'anchor_regulation','rescuing',{sauveur:-0.3,cameleon:-0.1},1.4,'balanced responsibility',[],'positive_anchor','medium');
I('ANC_007','anchor_direct','adaptive',"I can ask for reassurance clearly, without turning my fear into a test.",'anchor_regulation','pursuit_intensity',{incendiaire:-0.4,miroir:-0.1},1.6,'clear request',[],'positive_anchor','high');
I('ANC_008','anchor_direct','adaptive',"I can take distance without cutting the bond abruptly.",'anchor_regulation','withdrawal',{fugitif:-0.4,bastion:-0.1},1.5,'regulated distance',[],'positive_anchor','high');
I('ANC_009','anchor_direct','adaptive',"I can stay myself even when I really want to be loved.",'anchor_regulation','self_adaptation',{cameleon:-0.4,miroir:-0.2},1.5,'stable identity',[],'positive_anchor','high');
I('ANC_010','anchor_direct','adaptive',"I can love someone without making that person the center of my identity.",'anchor_regulation','external_validation',{miroir:-0.4,cameleon:-0.1},1.5,'affective autonomy',[],'positive_anchor','high');
I('ANC_011','anchor_direct','adaptive',"After a breakup or some distance, I can seek clarity without trying to control the whole story.",'anchor_regulation','intellectualization',{alchimiste:-0.2,guetteur:-0.2},1.4,'clarity without control',[],'positive_anchor','medium');
I('ANC_012','anchor_direct','adaptive',"When my mechanism activates, I can sometimes recognize it before it fully decides for me.",'anchor_regulation',null,{},1.6,'awareness of the mechanism',[],'positive_anchor','high');

/* ===== ANCHOR, contextualized (one+ per archetype) ===================== */
I('ANC_INC_001','anchor_contextualized','adaptive',"When I'm afraid the other person will pull away, I can ask for clarification without provoking tension.",'anchor_regulation','pursuit_intensity',{incendiaire:-0.4},1.6,'regulated Incendiaire',[],'positive_anchor','high');
I('ANC_INC_002','anchor_contextualized','adaptive',"Even when I want a strong reaction, I can wait to understand what I feel before acting.",'anchor_regulation','pursuit_intensity',{incendiaire:-0.4},1.5,'contained impulse',[],'positive_anchor','high');
I('ANC_CAM_001','anchor_contextualized','adaptive',"When I sense the other expects something from me, I can check whether it really suits me before adapting.",'anchor_regulation','self_adaptation',{cameleon:-0.4},1.5,'regulated Caméléon',[],'positive_anchor','high');
I('ANC_CAM_002','anchor_contextualized','adaptive',"I can express a disagreement even when I'm afraid it will make the other person less close.",'anchor_regulation','self_adaptation',{cameleon:-0.4},1.5,'disagreement without self-erasure',[],'positive_anchor','high');
I('ANC_SAU_001','anchor_contextualized','adaptive',"When the other person suffers, I can be present without feeling entirely responsible for fixing them.",'anchor_regulation','rescuing',{sauveur:-0.4},1.6,'regulated Sauveur',[],'positive_anchor','high');
I('ANC_SAU_002','anchor_contextualized','adaptive',"I can help someone I love while keeping some energy for myself.",'anchor_regulation','rescuing',{sauveur:-0.4},1.5,'help with a limit',[],'positive_anchor','medium');
I('ANC_GUE_001','anchor_contextualized','adaptive',"When a sign worries me, I can wait for more before concluding the bond is threatened.",'anchor_regulation','hypervigilance',{guetteur:-0.4},1.5,'regulated Guetteur',[],'positive_anchor','high');
I('ANC_GUE_002','anchor_contextualized','adaptive',"I can ask a simple question instead of investigating in my head for hours.",'anchor_regulation','hypervigilance',{guetteur:-0.4},1.5,'direct checking',[],'positive_anchor','high');
I('ANC_BAS_001','anchor_contextualized','adaptive',"When I need reassurance, I can say so without feeling I'm losing my dignity.",'anchor_regulation','emotional_fortress',{bastion:-0.4},1.6,'regulated Bastion',[],'positive_anchor','high');
I('ANC_BAS_002','anchor_contextualized','adaptive',"I can show that I'm touched without feeling I'm becoming weak.",'anchor_regulation','emotional_fortress',{bastion:-0.4},1.5,'owned vulnerability',[],'positive_anchor','high');
I('ANC_FUG_001','anchor_contextualized','adaptive',"When I feel overwhelmed, I can ask for space without cutting the bond abruptly.",'anchor_regulation','withdrawal',{fugitif:-0.4},1.6,'regulated Fugitif',[],'positive_anchor','high');
I('ANC_FUG_002','anchor_contextualized','adaptive',"I can say I need time without leaving the other in a vague disappearance.",'anchor_regulation','withdrawal',{fugitif:-0.4},1.5,'clarified retreat',[],'positive_anchor','high');
I('ANC_ALC_001','anchor_contextualized','adaptive',"When I understand what's going on, I can also come back to what I simply feel.",'anchor_regulation','intellectualization',{alchimiste:-0.4},1.5,'regulated Alchimiste',[],'positive_anchor','high');
I('ANC_ALC_002','anchor_contextualized','adaptive',"I can say 'that hurt me' without having to explain it perfectly first.",'anchor_regulation','intellectualization',{alchimiste:-0.4},1.6,'emotion without over-analysis',[],'positive_anchor','high');
I('ANC_MIR_001','anchor_contextualized','adaptive',"When I feel less chosen, I can remind myself that it doesn't sum up my worth.",'anchor_regulation','external_validation',{miroir:-0.4},1.6,'regulated Miroir',[],'positive_anchor','high');
I('ANC_MIR_002','anchor_contextualized','adaptive',"I can receive the other's love without making it the only proof that I'm desirable or important.",'anchor_regulation','external_validation',{miroir:-0.4},1.5,'integrated validation',[],'positive_anchor','high');

Object.assign(window, { LP_RAW_ITEMS });
