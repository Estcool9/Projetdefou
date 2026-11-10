/* Contenu du dossier. Les sujets sont fictifs ; les études, les mécanismes et les chiffres sont réels. */
window.DOSSIER = {
  meta: {
    numero: 'Perturbateurs endocriniens',
    titre: 'Quatre enquêtes',
    sousTitre: 'un suspect permanent',
    question: 'Les perturbateurs endocriniens contribuent-ils aux difficultés d’apprentissage des nouvelles générations ?',
    auteurs: ['Bigot Mathis', 'Chapelin Amandric', 'Benard Coralie'],
    classe: 'CPI 1',
    matiere: 'Science du vivant'
  },

  pages: [

    /* ═════════════════════ FEUILLE RÉCAPITULATIVE ═════════════════════ */
    {
      id: 'recap',
      tab: 'Récap',
      tabLong: 'Feuille récapitulative',
      kind: 'recap'
    },

    /* ═════════════════════ ENQUÊTE 1 — LÉA ═════════════════════ */
    {
      id: 'enquete-1',
      tab: '01 Léa',
      tabLong: 'Enquête 1 — Léa',
      kind: 'case',
      num: '01',
      titre: 'Léa, trente mois, une dizaine de mots',
      cohorte: 'Cohorte SELMA, Suède',
      sujet: { nom: 'Léa T.', age: '30 mois', situation: 'Cadette d’une fratrie de deux' },
      question: 'Le retard de langage de Léa vient-il d’une exposition chimique pendant la grossesse, ou d’une autre cause que l’on confond souvent avec elle ?',
      contexte: [
        'Au bilan obligatoire des deux ans et demi, Léa produit une dizaine de mots. À cet âge, la moyenne se situe bien au-dessus de cent. Le médecin ne se contente pas de rassurer : un écart de cette taille justifie une enquête complète, parce que le langage à trente mois prédit en partie la lecture et la réussite scolaire des années plus tard.',
        'Ce qui n’est pas touché compte autant que ce qui l’est. Léa comprend tout ce qu’on lui dit et exécute sans aide des consignes à deux étapes — « va chercher ton manteau et donne-le à papa ». Elle joue normalement, imite son frère, cherche le regard des adultes et réclame leur attention. Seule la <em>production</em> de mots est déficitaire.',
        'Son frère aîné, lui, prononçait ses premiers mots à quatorze mois. La famille vit depuis 2019 dans un logement neuf, meublé neuf à l’emménagement. Léa est en crèche depuis ses dix mois, dans un groupe où personne n’a signalé de difficulté particulière.',
        'Les parents arrivent avec une conviction toute faite. Ils ont lu quelque part que « les plastiques rendent les enfants muets » et demandent un dosage. Le médecin accepte d’ouvrir une enquête, mais refuse de doser au hasard : il veut d’abord éliminer les causes fréquentes.',
        'Car c’est là toute la difficulté. Un retard de langage à trente mois a quatre causes courantes qui produisent presque exactement le même tableau : compréhension normale, production faible. La question n’est pas de savoir si un perturbateur endocrinien <em>peut</em> provoquer cela — c’est documenté — mais si c’est bien lui, ici, chez cette enfant.'
      ],
      figures: [
        { key: 'enq1b', legende: 'Les trois familles de substances retrouvées ensemble dans les prélèvements de début de grossesse.' },
        { key: 'enq1a', legende: 'Dans la cohorte SELMA, part des enfants exposés au-delà du niveau de préoccupation défini en laboratoire.' }
      ],
      indices: [
        { txt: 'Audiométrie et tympanométrie réalisées à 29 mois : audition normale des deux oreilles. Le carnet de santé ne mentionne aucune otite depuis la naissance.', src: 'Dossier médical — examen ORL' },
        { txt: 'Une seule langue est parlée au domicile et à la crèche. Aucun autre adulte ne s’adresse à Léa dans une autre langue.', src: 'Dossier — enquête familiale' },
        { txt: 'Léa pointe du doigt ce qu’elle veut montrer, cherche le regard de l’adulte pour partager, fait semblant de donner à manger à sa poupée et imite les gestes de son frère. Le bilan ne retrouve aucun signe du spectre de l’autisme.', src: 'Dossier — bilan développemental' },
        { txt: 'Elle exécute des consignes à deux étapes sans aide. La compréhension est intacte ; seule la production est touchée.', src: 'Dossier — bilan orthophonique' },
        { txt: 'La mère participait à une étude de cohorte. Ses prélèvements de sang et d’urine de début de grossesse contenaient simultanément des phtalates, du bisphénol A et des composés perfluorés. <strong>Aucune de ces substances ne dépassait sa limite réglementaire.</strong>', src: 'Résultat d’étude — cohorte SELMA, environ 2 000 paires mère-enfant' },
        { txt: 'Dans cette même cohorte, jusqu’à <strong>54 %</strong> des enfants avaient été exposés au-delà du niveau de préoccupation défini en laboratoire, et le risque de retard de langage à 30 mois était <strong>3,3 fois</strong> plus élevé entre le décile le plus exposé et le décile le moins exposé.', src: 'Caporale et al., Science, 2022' },
        { txt: 'Le mélange, reconstitué au laboratoire à partir de ces prélèvements réels, a perturbé l’action des hormones thyroïdiennes et freiné la différenciation des neurones dans des organoïdes de cerveau humain, chez le poisson zèbre et chez le xénope.', src: 'Expérimentation — Science, 2022' }
      ],
      suspects: [
        {
          ref: 'A', pe: true,
          nom: 'Le mélange de perturbateurs endocriniens',
          type: 'phtalates · bisphénol A · composés perfluorés',
          identite: 'Un cocktail de substances présentes en même temps dans le sang et l’urine de la grande majorité des femmes enceintes : emballages, contenants alimentaires, cosmétiques, poussière domestique.',
          soupcon: 'La cible annoncée correspond exactement : l’étude européenne qui a identifié ce mélange a mesuré un retard de langage à 30 mois, l’âge précis de Léa.',
          etudes: 'Dans la cohorte SELMA, jusqu’à 54 % des enfants avaient été exposés au-delà du niveau jugé préoccupant, et le risque de retard de langage était 3,3 fois plus élevé entre les 10 % les plus exposés et les 10 % les moins exposés.'
        },
        {
          ref: 'B', pe: false,
          nom: 'Une surdité passée inaperçue',
          type: 'otites séreuses à répétition',
          identite: 'Une baisse d’audition installée sans douleur, souvent après des otites répétées. L’enfant entend mal les sons aigus et n’apprend pas à les reproduire.',
          soupcon: 'C’est la première cause à éliminer devant tout retard de langage. Un enfant qui entend mal comprend souvent par le contexte, ce qui masque longtemps le problème.',
          etudes: 'Le dépistage auditif est recommandé avant tout autre bilan en cas de retard de langage, précisément parce que ce suspect est fréquent et traitable.'
        },
        {
          ref: 'C', pe: false,
          nom: 'Un environnement bilingue',
          type: 'deux langues à la maison',
          identite: 'Un enfant exposé à deux langues répartit son vocabulaire entre les deux. Compté dans une seule langue, il paraît en retard alors qu’il ne l’est pas.',
          soupcon: 'C’est l’origine d’un grand nombre de faux retards signalés à cet âge, et elle produit exactement le même tableau : compréhension normale, production faible.',
          etudes: 'Le vocabulaire total d’un enfant bilingue, compté sur les deux langues réunies, est comparable à celui d’un enfant monolingue.'
        },
        {
          ref: 'D', pe: false,
          nom: 'Un trouble du spectre de l’autisme',
          type: 'trouble du neurodéveloppement',
          identite: 'Trouble du neurodéveloppement dont le retard de langage est l’un des signes les plus précoces et les plus visibles.',
          soupcon: 'À 30 mois, un vocabulaire très pauvre est l’un des premiers motifs de consultation qui aboutit à ce diagnostic.',
          etudes: 'Le retard de langage y est accompagné d’autres signes : pointage absent, attention conjointe réduite, jeu symbolique pauvre, recherche limitée du regard.'
        }
      ],
      verdict: {
        coupable: 'A',
        titre: 'Le mélange de perturbateurs endocriniens',
        decisif: 'Indice 5. Trois familles de substances retrouvées ensemble dans les prélèvements de début de grossesse, et <strong>aucune au-dessus de sa limite réglementaire</strong>. C’est précisément la situation que l’étude SELMA a mise au jour : prise une par une, chaque substance est conforme ; c’est leur présence simultanée qui agit. Vouloir accuser le bisphénol A seul, ou les phtalates seuls, buterait sur le fait qu’aucun ne dépasse son seuil — et c’est la raison même pour laquelle les chercheurs ont reconstitué le cocktail réel au laboratoire au lieu de tester ses composants séparément.',
        eliminations: [
          'Indice 1 — audition normale, aucune otite : le suspect B tombe, et c’est la première porte à fermer devant tout retard de langage.',
          'Indice 2 — une seule langue au domicile et à la crèche : le suspect C tombe.',
          'Indice 3 — pointage, attention conjointe et jeu symbolique présents : le suspect D tombe.',
          'Indice 4 — compréhension intacte : l’atteinte porte bien sur la seule production du langage, la cible documentée du mélange.'
        ],
        lecon: 'Les parents avaient raison, mais pas pour les bonnes raisons. Ils accusaient « les plastiques » en bloc ; le vrai problème est l’effet cocktail, que la réglementation ne teste pas, puisqu’elle évalue les substances une par une. C’est la principale conclusion de politique publique que les auteurs tirent de leur travail.',
        limite: 'L’étude mesure un vocabulaire à 30 mois, pas un QI d’adulte, et établit une association, pas une causalité individuelle. Beaucoup d’enfants exposés au même mélange parlent normalement.',
        source: 'Caporale N. et al., « From cohorts to molecules: adverse impacts of endocrine disrupting mixtures », Science, vol. 375, n° 6582, 2022 — cohorte SELMA, projet européen EDC-MixRisk.'
      }
    },

    /* ═════════════════════ ENQUÊTE 2 — NOAH ═════════════════════ */
    {
      id: 'enquete-2',
      tab: '02 Noah',
      tabLong: 'Enquête 2 — Noah',
      kind: 'case',
      num: '02',
      titre: 'Noah, neuf ans, ne tient plus en place',
      cohorte: 'Étude HOME, Cincinnati',
      sujet: { nom: 'Noah B.', age: '9 ans', situation: 'CM1, enfant unique' },
      question: 'L’effondrement de l’attention de Noah a-t-il une cause chimique, médicale, sociale — ou une cause que personne ne regarde ?',
      contexte: [
        'L’enseignante de CM1 signale une agitation permanente et une attention qui ne tient pas dix minutes. Les résultats se sont effondrés en un trimestre, dans toutes les matières à la fois, y compris celles où Noah excellait.',
        'L’histoire d’avant est la pièce la plus importante du dossier. Du CP au CE2, les bulletins sont excellents et répètent la même formule : élève « calme et appliqué ». L’enseignante date la bascule avec précision — le mois de septembre dernier. Il y a donc un avant et un après, et l’enquête doit trouver ce qui s’est passé entre les deux.',
        'Les parents arrivent avec une demande précise : faire doser les polluants chez leur fils. Ils ont lu que « la pollution rend les enfants hyperactifs » et veulent une analyse de sang. Le médecin accepte, mais ouvre en parallèle une enquête complète sur les autres pistes.',
        'Leur soupçon est loin d’être absurde. L’hyperactivité fait partie des atteintes documentées pour les retardateurs de flamme : dans l’étude HOME, menée à Cincinnati, l’exposition avant la naissance est associée à une hausse de 3,3 points du score d’hyperactivité à cinq ans, et à un QI plus bas — même après avoir tenu compte du QI de la mère. Le suspect a un vrai mobile.',
        'Quatre pistes restent ouvertes : une exposition chimique ancienne, un trouble de l’attention jamais repéré, une souffrance scolaire, ou le mode de vie. L’arme qui tranchera cette enquête n’est pas une analyse de sang : c’est un calendrier.'
      ],
      figures: [
        { key: 'enq2a', legende: 'Relevés de l’enseignante et des parents sur deux années scolaires.' },
        { key: 'enq2b', legende: 'Durée de sommeil déclarée, relevée sur deux semaines par les parents.' }
      ],
      indices: [
        { txt: 'Bulletins du CP au CE2 : excellents, avec la mention répétée d’un élève « calme et appliqué ». L’enseignante date la bascule du mois de septembre dernier.', src: 'Dossier — bulletins scolaires' },
        { txt: 'Le diagnostic de trouble de l’attention exige des symptômes présents <strong>avant 12 ans</strong>, dans <strong>au moins deux contextes</strong>, et <strong>durables dans le temps</strong>. Ici, aucun symptôme n’existait avant l’âge de 8 ans.', src: 'Critère médical — critères diagnostiques du TDAH' },
        { txt: 'Emploi du temps déclaré : coucher vers 23 h 30, tablette jusqu’à l’extinction de la lumière, lever à 6 h 30. Soit sept heures de sommeil pour un âge où dix sont recommandées.', src: 'Dossier — carnet de sommeil tenu deux semaines' },
        { txt: 'Noah décrit sa classe comme « sympa », a gardé les mêmes amis, ne refuse jamais d’aller à l’école, et son agitation est tout aussi marquée le samedi matin à la maison qu’en classe.', src: 'Dossier — entretien avec l’enfant et les parents' },
        { txt: 'Le mobilier du domicile a été entièrement acheté en 2021, et le logement date de 2008. Analyse de la poussière domestique : aucune trace significative de composés bromés.', src: 'Dossier — prélèvement environnemental' },
        { txt: 'Les retardateurs de flamme ont été largement retirés du marché, et leurs concentrations <strong>baissent</strong> dans la population générale depuis une quinzaine d’années. Une exposition en hausse ne peut donc pas expliquer une dégradation récente.', src: 'Suivi des niveaux de PBDE en population' },
        { txt: 'Dans l’étude HOME, l’effet documenté des retardateurs de flamme résulte d’une exposition <strong>avant la naissance</strong>, mesurée dans le sérum maternel à la 16ᵉ semaine de grossesse. Il concerne un enfant dès ses premières années, pas une bascule survenue à 8 ans.', src: 'Chen et al., Environmental Health Perspectives, 2014' },
        { txt: 'Pendant trois semaines de vacances chez ses grands-parents, sans écran après 20 h et avec un coucher à 21 h, les parents décrivent un enfant « redevenu calme ». L’agitation réapparaît dans la semaine qui suit le retour.', src: 'Dossier — observation familiale' }
      ],
      suspects: [
        {
          ref: 'A', pe: true,
          nom: 'Les retardateurs de flamme',
          type: 'PBDE · BDE-47 · perturbateur endocrinien',
          identite: 'Composés bromés ajoutés aux mousses de canapés, aux tapis et aux boîtiers électroniques. Leur structure ressemble à celle des hormones thyroïdiennes : ils se font passer pour elles.',
          soupcon: 'L’hyperactivité est précisément l’atteinte que les études leur attribuent, et ils sont présents dans la poussière de n’importe quel salon meublé avant les années 2010.',
          etudes: 'Étude HOME, Cincinnati, 309 femmes prélevées à la 16ᵉ semaine de grossesse : QI plus bas à 5 ans même après prise en compte du QI de la mère, et hausse de 3,3 points du score d’hyperactivité.'
        },
        {
          ref: 'B', pe: false,
          nom: 'La dette de sommeil',
          type: 'écrans le soir · coucher tardif',
          identite: 'Un déficit de sommeil chronique, entretenu par les écrans en soirée. À neuf ans, le besoin se situe autour de dix heures par nuit.',
          soupcon: 'Un enfant en manque de sommeil ne s’endort pas en classe : il s’agite. C’est le symptôme trompeur par excellence.',
          etudes: 'Le lien entre dette de sommeil chronique, attention et résultats scolaires est établi, et constitue un facteur de confusion majeur dans toutes les recherches sur l’environnement et les apprentissages.'
        },
        {
          ref: 'C', pe: false,
          nom: 'Un trouble de l’attention',
          type: 'TDAH non diagnostiqué',
          identite: 'Trouble du neurodéveloppement associant inattention, agitation et impulsivité.',
          soupcon: 'C’est le diagnostic le plus fréquemment posé devant ce tableau exact, et il est souvent repéré tardivement, au moment où les exigences scolaires augmentent.',
          etudes: 'Le diagnostic exige des symptômes présents avant l’âge de 12 ans, dans au moins deux contextes différents, et durables — pas une apparition brutale et isolée.'
        },
        {
          ref: 'D', pe: false,
          nom: 'Une situation de harcèlement',
          type: 'souffrance scolaire',
          identite: 'Une souffrance à l’école qui se traduit par une incapacité à se concentrer, une irritabilité et une chute des résultats.',
          soupcon: 'La bascule est datée d’une rentrée scolaire, ce qui oriente immédiatement vers quelque chose qui s’est produit à l’école.',
          etudes: 'Ce tableau s’accompagne habituellement d’un évitement de l’école, d’un repli social, et d’une amélioration nette pendant les vacances dans tous les contextes.'
        }
      ],
      verdict: {
        coupable: 'B',
        titre: 'La dette de sommeil',
        decisif: 'Indices 1 et 8. C’est la chronologie qui résout cette enquête. Une bascule datée de septembre dernier, chez un élève jusque-là calme et appliqué, ne peut pas venir d’une exposition survenue avant sa naissance. Et surtout : l’agitation disparaît pendant trois semaines sans écran, puis revient dans la semaine du retour. <strong>Aucun toxique ne se comporte ainsi.</strong> Sept heures de sommeil pour dix recommandées suffisent à expliquer l’ensemble du tableau.',
        eliminations: [
          'Indice 2 — le trouble de l’attention exige des symptômes avant 12 ans, dans au moins deux contextes et durables ; ici rien avant 8 ans : le suspect C tombe.',
          'Indice 4 — aucun évitement de l’école, amis inchangés, agitation tout aussi forte le samedi à la maison : le suspect D tombe.',
          'Indices 5, 6 et 7 — mobilier de 2021, aucune trace de composés bromés dans la poussière, niveaux en baisse dans la population, et effet documenté d’origine prénatale : le suspect A tombe trois fois.'
        ],
        lecon: 'C’est le piège du suspect à la mode. Les parents réclamaient un dosage de polluants, et chercher de ce côté aurait coûté des mois à un enfant dont le problème est réversible en trois semaines. Le perturbateur endocrinien était pourtant un suspect parfaitement légitime : l’hyperactivité fait bien partie des atteintes qui lui sont attribuées. Ce sont les dates qui l’innocentent, pas l’absence de mobile.',
        limite: 'Rien n’interdit qu’un enfant cumule une dette de sommeil et une exposition chimique. Les indices de cette enquête ont été construits pour que la réponse soit unique ; un vrai dossier ne l’est jamais autant.',
        source: 'Chen A. et al., « Prenatal polybrominated diphenyl ether exposures and neurodevelopment in U.S. children through 5 years of age: the HOME Study », Environmental Health Perspectives, 2014.'
      }
    },

    /* ═════════════════════ ENQUÊTE 3 — INÈS ═════════════════════ */
    {
      id: 'enquete-3',
      tab: '03 Inès',
      tabLong: 'Enquête 3 — Inès',
      kind: 'case',
      num: '03',
      titre: 'Inès, six ans, et son frère de quatre ans',
      cohorte: 'Saturnisme infantile · cohorte INMA, Sabadell',
      sujet: { nom: 'Inès R.', age: '6 ans', situation: 'CP, un frère de 4 ans' },
      question: 'Qu’est-ce qui peut toucher deux enfants d’une même famille de la même façon, alors qu’ils n’ont pas partagé la même grossesse ?',
      contexte: [
        'Inès apprend à lire très laborieusement, se fatigue vite, ne tient pas en place. Elle se plaint en plus de douleurs au ventre que trois examens digestifs n’ont pas expliquées. C’est cette association — difficultés scolaires, agitation et douleurs abdominales — qui met le médecin en alerte : peu de causes produisent les trois en même temps.',
        'Son frère de quatre ans présente le même tableau : agitation, retard de langage, fatigue. Or les deux enfants sont nés de grossesses séparées de quatre ans, suivies dans deux maternités différentes, sans aucune particularité. Une exposition pendant la grossesse ne peut donc pas expliquer les deux à la fois.',
        'La famille habite un immeuble construit en 1931, jamais rénové. Les peintures s’écaillent dans la chambre des enfants et les encadrements de fenêtres sont dégradés. Le logement est exigu et bruyant ; les deux parents travaillent en horaires décalés.',
        'C’est précisément ce qui rend l’enquête difficile. La précarité accompagne presque toujours un logement ancien et dégradé, et le niveau de vie est l’un des facteurs les plus fortement liés aux résultats scolaires. Démêler l’exposition toxique du contexte social est le problème central de toute cette recherche — les deux vont presque toujours ensemble.',
        'Le perturbateur endocrinien de cette enquête, le bisphénol A, est un suspect sérieux pour une raison précise : contrairement à une exposition de grossesse, l’exposition alimentaire d’une famille est partagée par toute la fratrie. Il coche donc la case la plus importante du dossier. Et pourtant, c’est une étude qui va l’innocenter.'
      ],
      figures: [
        { key: 'enq3a', legende: 'Coupe d’un mur d’avant-guerre : les couches anciennes restent sous les peintures récentes.' },
        { key: 'enq3b', legende: 'Résultats de la cohorte INMA sur l’exposition prénatale au bisphénol A.' }
      ],
      indices: [
        { txt: 'L’immeuble a été construit en 1931 et n’a jamais été rénové. Peintures écaillées dans la chambre des enfants, encadrements de fenêtres dégradés.', src: 'Dossier — diagnostic du logement' },
        { txt: 'Les deux enfants sont nés de grossesses séparées de quatre ans, suivies dans deux maternités différentes, sans aucune particularité. La cause doit donc être partagée <strong>après</strong> les naissances.', src: 'Dossier — dossiers obstétricaux' },
        { txt: 'Bilan sanguin des deux enfants : hémoglobine, ferritine et saturation de la transferrine normales. Aucune carence en fer.', src: 'Dossier — numération et bilan martial' },
        { txt: 'La mère rapporte qu’Inès porte souvent les mains à la bouche, et qu’elle l’a surprise à plusieurs reprises en train de gratter et de mettre en bouche les écailles de peinture du mur de sa chambre.', src: 'Dossier — entretien parental' },
        { txt: 'Plombémie : élevée chez les deux enfants. Le cas est déclaré aux autorités sanitaires, comme la loi l’impose en France.', src: 'Dossier — analyse de sang · maladie à déclaration obligatoire' },
        { txt: 'Aucune mesure de bisphénol A n’a jamais été réalisée dans cette famille. Surtout : dans la cohorte INMA, qui a suivi 438 enfants à 1, 4 et 7 ans, l’exposition prénatale au bisphénol A <strong>n’était associée à aucun déficit des scores cognitifs</strong>, ni à 1 an ni à 4 ans. Les auteurs concluent qu’elle n’affecte pas le développement cognitif jusqu’à cet âge.', src: 'Casas et al., Environmental Research, 2015 — étude à décharge' },
        { txt: 'Après travaux de mise en sécurité et relogement temporaire, <strong>sans aucun changement de revenus, d’école ni d’accompagnement scolaire</strong>, les douleurs abdominales disparaissent en quelques semaines et l’attention des deux enfants s’améliore nettement.', src: 'Dossier — suivi après éviction de la source' },
        { txt: 'Un an plus tard, les difficultés de lecture d’Inès persistent en partie, et son score cognitif n’est remonté que partiellement.', src: 'Dossier — bilan de contrôle à un an' }
      ],
      suspects: [
        {
          ref: 'A', pe: true,
          nom: 'Le bisphénol A',
          type: 'BPA · perturbateur endocrinien',
          identite: 'Présent dans les résines intérieures des boîtes de conserve, certains contenants et les tickets de caisse. Imite l’œstrogène et interfère avec la fonction thyroïdienne. Interdit des contenants alimentaires en France depuis 2015.',
          soupcon: 'L’agitation des deux enfants correspond à une atteinte qui lui est attribuée, et l’exposition alimentaire d’une famille est, elle, bel et bien partagée par toute la fratrie.',
          etudes: 'Cohorte INMA, Sabadell : risque de symptômes d’hyperactivité à 4 ans multiplié par 1,72 chez les plus exposés. Mais la même étude n’a trouvé aucune association avec les scores cognitifs, ni à 1 an ni à 4 ans.'
        },
        {
          ref: 'B', pe: false,
          nom: 'Le plomb',
          type: 'saturnisme infantile',
          identite: 'Métal neurotoxique présent dans les peintures des logements construits avant 1949. Ce n’est pas un perturbateur endocrinien : il attaque directement le neurone en formation.',
          soupcon: 'C’est le seul suspect capable de produire en même temps des difficultés d’apprentissage, de l’agitation et des douleurs abdominales inexpliquées.',
          etudes: 'Causalité établie et reconnue : baisse du QI, troubles de l’attention, effets cognitifs en partie irréversibles. Maladie à déclaration obligatoire en France, dépistée par une simple prise de sang.'
        },
        {
          ref: 'C', pe: false,
          nom: 'Une carence en fer',
          type: 'anémie ferriprive',
          identite: 'Un manque de fer prolongé, fréquent chez le jeune enfant, qui retentit sur l’attention, la fatigue et les apprentissages.',
          soupcon: 'Elle produit presque exactement le même tableau que le plomb — fatigue, agitation, difficultés scolaires — et touche souvent toute une fratrie partageant la même alimentation.',
          etudes: 'La carence en fer de l’enfant est associée à des performances cognitives plus faibles et se corrige par une supplémentation. Elle se diagnostique par un dosage sanguin simple.'
        },
        {
          ref: 'D', pe: false,
          nom: 'Les conditions de vie',
          type: 'précarité · logement dégradé',
          identite: 'L’ensemble des facteurs sociaux qui pèsent sur les apprentissages : logement exigu, bruit, stress familial, accès réduit aux livres et aux soins.',
          soupcon: 'Ces facteurs accompagnent presque toujours un logement ancien et dégradé, et touchent tous les enfants d’un même foyer. Les confondre avec une cause toxique est l’erreur classique.',
          etudes: 'Le niveau socio-économique est l’un des facteurs les plus fortement associés aux résultats scolaires, et l’un des plus difficiles à démêler des expositions environnementales, puisque les deux vont souvent ensemble.'
        }
      ],
      verdict: {
        coupable: 'B',
        titre: 'Le plomb',
        decisif: 'Indices 2, 4 et 5. Deux enfants touchés de la même façon, nés de grossesses séparées de quatre ans et suivies dans deux maternités différentes : aucune exposition prénatale ne peut expliquer les deux à la fois. La cause est donc partagée et postnatale — elle est dans les murs. L’indice 4 décrit le geste d’ingestion, l’indice 5 apporte la preuve biologique. C’est la seule enquête du dossier où une simple prise de sang confirme directement le coupable.',
        eliminations: [
          'Indice 3 — hémoglobine, ferritine et saturation normales : le suspect C tombe.',
          'Indice 7 — l’amélioration survient après les travaux, sans aucun changement de revenus, d’école ni d’accompagnement : le suspect D tombe, car si la précarité était en cause, rien n’aurait bougé.',
          'Indice 6 — le bisphénol A n’a jamais été mesuré ici, et surtout la cohorte INMA, qui a suivi 438 enfants, n’a trouvé aucune association entre exposition prénatale au bisphénol A et scores cognitifs : le suspect A tombe.'
        ],
        lecon: 'L’indice 6 est le plus intéressant du dossier. Une étude qui a cherché un effet et ne l’a pas trouvé innocente un suspect aussi sûrement qu’une étude qui en trouve un l’accuse. Garder une telle étude au dossier, alors qu’elle affaiblit la thèse à laquelle on croit, est ce qui distingue une enquête d’un procès truqué.',
        limite: 'L’indice 8 ajoute la mauvaise nouvelle propre au plomb : l’exposition cesse, mais une partie des effets cognitifs demeure. C’est aussi ce qui rend ce dossier crédible — le plomb a longtemps été défendu avant d’être condamné.',
        source: 'Casas M. et al., Environmental Research, 2015 — cohorte INMA-Sabadell, 438 enfants. Saturnisme infantile : causalité établie, maladie à déclaration obligatoire en France ; peintures au plomb interdites depuis 1949.'
      }
    },

    /* ═════════════════════ ENQUÊTE 4 — GUILLAUME ═════════════════════ */
    {
      id: 'enquete-4',
      tab: '04 Guillaume',
      tabLong: 'Enquête 4 — Guillaume',
      kind: 'case',
      num: '04',
      titre: 'Guillaume, vingt-trois ans, n’obtient pas son permis',
      cohorte: 'Cohorte TIMOUN, Guadeloupe',
      sujet: { nom: 'Guillaume M.', age: '23 ans', situation: 'Père d’un enfant, magasinier' },
      question: 'Un adulte dont les apprentissages écrits se sont toujours bien passés peut-il échouer uniquement sur des tâches visuelles et spatiales ? Et si oui, depuis quand ?',
      contexte: [
        'Quatrième échec à l’examen de conduite. L’auto-école est précise dans ses reproches : il ne retient pas les itinéraires, réagit tard aux véhicules qui surgissent sur le côté, et décroche après une vingtaine de minutes.',
        'Le contraste est frappant. Guillaume a réussi le code du premier coup, en l’apprenant à l’écrit. Sa lecture, son orthographe et son raisonnement verbal sont normaux, et l’ont toujours été. Ce n’est donc pas un problème d’apprentissage en général : quelque chose ne fonctionne que sur un registre précis.',
        'Il a grandi en Guadeloupe, dans une famille de cultivateurs. Jusqu’à son départ à dix-huit ans, son alimentation reposait très largement sur les légumes-racines du jardin familial et les poissons de rivière. Il vit en métropole depuis cinq ans.',
        'Cette enquête est la plus fragile des quatre, et il faut le dire d’emblée : c’est la seule qui porte sur un adulte, alors que les études disponibles s’arrêtent à sept ans. Elle demande donc d’extrapoler. Un bon enquêteur signale ses propres points faibles plutôt que de les cacher.',
        'Quatre pistes sont ouvertes : un trouble visuel jamais corrigé, une anxiété d’examen entretenue par quatre échecs, un trouble de l’attention jamais repéré, ou une exposition ancienne. Trois d’entre elles se referment avec un examen ou une date.'
      ],
      figures: [
        { key: 'enq4a', legende: 'Résultats par domaine, rapportés à une moyenne de 100.' },
        { key: 'enq4b', legende: 'Le trajet d’un pesticide persistant, du sol à la prise de sang.' }
      ],
      indices: [
        { txt: 'Examen ophtalmologique complet : acuité de 10/10 aux deux yeux, champ visuel périphérique normal, vision des couleurs normale.', src: 'Dossier — bilan ophtalmologique' },
        { txt: 'Les mêmes difficultés apparaissent <strong>hors de toute situation d’évaluation</strong> : il se perd dans des trajets qu’il a faits dix fois comme passager, et ne retrouve pas sa voiture sur un parking de supermarché.', src: 'Dossier — entretien et mise en situation' },
        { txt: 'Bulletins scolaires de l’école primaire au lycée : élève décrit comme calme et attentif, aucune remarque d’agitation ni d’inattention, aucune difficulté signalée avant l’âge de 12 ans.', src: 'Dossier — bulletins · critère diagnostique du TDAH' },
        { txt: 'Bilan neuropsychologique complet : efficience intellectuelle globale dans la moyenne. Les scores faibles sont concentrés sur la mémoire visuelle, le repérage dans l’espace et la motricité fine. La lecture, l’orthographe et le raisonnement verbal sont normaux.', src: 'Dossier — bilan neuropsychologique' },
        { txt: 'Il a grandi en Guadeloupe dans une famille de cultivateurs. Jusqu’à son départ à 18 ans, son alimentation reposait très largement sur les légumes-racines du jardin familial et les poissons de rivière.', src: 'Dossier — enquête alimentaire rétrospective' },
        { txt: 'Une prise de sang réalisée à l’âge de 7 ans, dans le cadre d’une étude régionale de santé publique, montrait une concentration mesurable d’un insecticide organochloré.', src: 'Dossier — analyse de sang conservée' },
        { txt: 'Dans la cohorte TIMOUN, menée en Guadeloupe sur 1 042 femmes suivies depuis 2004, l’exposition prénatale est associée à 7 mois à une moindre préférence visuelle pour la nouveauté et à une motricité fine plus faible. Chez les 576 enfants réévalués à 7 ans, les capacités cognitives sont altérées par l’exposition <strong>pendant l’enfance</strong>.', src: 'Cohorte TIMOUN, Inserm' },
        { txt: 'Le chlordécone est interdit depuis 1993, mais l’exposition de la population antillaise reste généralisée par l’alimentation locale. Les auteurs précisent que les effets observés sont « relativement modérés et subtils au niveau individuel ».', src: 'TIMOUN, Inserm — limite énoncée par les auteurs' }
      ],
      suspects: [
        {
          ref: 'A', pe: true,
          nom: 'Le chlordécone',
          type: 'pesticide · perturbateur endocrinien',
          identite: 'Insecticide répandu dans les bananeraies de Guadeloupe et de Martinique de 1972 à 1993, interdit depuis. Les sols, les rivières, le bétail, les poissons et les légumes-racines resteront contaminés des siècles. Propriétés œstrogéniques.',
          soupcon: 'Le sujet a grandi au cœur de la zone contaminée, et les fonctions touchées — mémoire visuelle, repérage, motricité fine — sont exactement celles que la cohorte antillaise a mesurées.',
          etudes: 'Cohorte TIMOUN : à 7 mois, exposition prénatale associée à une moindre préférence visuelle pour la nouveauté et à une motricité fine plus faible. À 7 ans, sur 576 enfants, capacités cognitives altérées par l’exposition pendant l’enfance.'
        },
        {
          ref: 'B', pe: false,
          nom: 'Un trouble de l’attention',
          type: 'TDAH non diagnostiqué',
          identite: 'Trouble du neurodéveloppement associant inattention, agitation et impulsivité, parfois repéré seulement à l’âge adulte.',
          soupcon: '« Il décroche après vingt minutes » est la plainte la plus caractéristique de ce trouble, et beaucoup d’adultes ne sont diagnostiqués qu’après un échec répété comme celui-ci.',
          etudes: 'Le diagnostic exige des symptômes présents avant l’âge de 12 ans et dans plusieurs contextes — école, maison, loisirs — et non une difficulté limitée à une seule activité.'
        },
        {
          ref: 'C', pe: false,
          nom: 'Une anxiété de performance',
          type: 'stress de l’examen',
          identite: 'Une angoisse déclenchée par la situation d’évaluation, qui bloque la mémoire de travail au moment précis où il faudrait s’en servir.',
          soupcon: 'Quatre échecs successifs suffisent à installer la peur du cinquième. C’est l’explication la plus économique, et elle se renforce d’elle-même à chaque tentative.',
          etudes: 'Sa signature est contextuelle : les difficultés apparaissent en situation d’évaluation et disparaissent hors de celle-ci.'
        },
        {
          ref: 'D', pe: false,
          nom: 'Un trouble visuel non corrigé',
          type: 'acuité · champ visuel',
          identite: 'Une baisse d’acuité ou une amputation du champ visuel périphérique, jamais dépistée.',
          soupcon: '« Il réagit tard aux véhicules qui surgissent sur le côté » décrit littéralement un défaut de vision périphérique. C’est la première chose à vérifier chez un candidat qui échoue.',
          etudes: 'Un champ visuel suffisant est une condition médicale réglementaire de l’aptitude à la conduite : ce suspect se confirme ou s’élimine en un examen.'
        }
      ],
      verdict: {
        coupable: 'A',
        titre: 'Le chlordécone',
        decisif: 'Indice 6, confirmé par les indices 5 et 7. Un insecticide organochloré mesuré dans le sang à sept ans, chez un enfant élevé au cœur de la zone contaminée et nourri des produits du jardin familial, ne laisse qu’un suspect. Et le profil touché — mémoire visuelle, repérage dans l’espace, motricité fine, alors que la lecture et le raisonnement verbal sont intacts — correspond exactement aux fonctions que la cohorte TIMOUN a mesurées.',
        eliminations: [
          'Indice 1 — acuité et champ visuel normaux : le suspect D tombe.',
          'Indice 2 — les mêmes difficultés apparaissent comme passager et sur un parking, hors de toute évaluation : le suspect C tombe, puisque l’anxiété de performance ne se manifeste qu’en situation d’examen.',
          'Indice 3 — aucun symptôme avant 12 ans, élève calme et attentif, difficulté limitée aux tâches visuelles et spatiales : le suspect B tombe.'
        ],
        lecon: 'C’est l’enquête où le perturbateur endocrinien est coupable, et c’est aussi celle où il faut être le plus prudent. Les trois autres suspects ne tombent pas parce qu’ils sont absurdes, mais parce qu’un examen ou une date les écarte. C’est exactement ainsi qu’on construit une accusation défendable.',
        limite: 'Les auteurs de TIMOUN qualifient eux-mêmes les effets de « relativement modérés et subtils au niveau individuel » : leur poids vient de l’exposition généralisée de toute une population, pas de la gravité du cas par cas. <strong>Aucune étude ne permet d’affirmer que le chlordécone est la cause des échecs au permis d’une personne réelle.</strong> Dans la vie réelle, un tel dossier resterait ouvert.',
        source: 'Cohorte TIMOUN, Guadeloupe — Inserm, Sylvaine Cordier et Luc Multigner. 1 042 femmes suivies depuis 2004 ; 153 nourrissons évalués à 7 mois ; 576 enfants réévalués à 7 ans.'
      }
    },

    /* ═════════════════════ BILAN ═════════════════════ */
    {
      id: 'bilan',
      tab: 'Bilan',
      tabLong: 'Bilan et sources',
      kind: 'bilan'
    }
  ],

  bilan: {
    titre: 'Deux coupables sur quatre',
    chapo: 'C’est le résultat du dossier. C’est aussi, en résumé, l’état de la science sur la question.',
    table: [
      ['01 · Léa', 'Le mélange', 'Coupable', 'Le mélange de perturbateurs endocriniens', true],
      ['02 · Noah', 'Retardateurs de flamme', 'Innocenté par la chronologie', 'La dette de sommeil', false],
      ['03 · Inès', 'Bisphénol A', 'Innocenté par une étude négative', 'Le plomb', false],
      ['04 · Guillaume', 'Chlordécone', 'Coupable', 'Le chlordécone', true]
    ],
    reponse: [
      'Les perturbateurs endocriniens peuvent-ils contribuer aux difficultés d’apprentissage des nouvelles générations&nbsp;? La réponse est <strong>oui, dans certains cas, mais pas systématiquement</strong>. Plusieurs études montrent que ces substances peuvent perturber le fonctionnement des hormones thyroïdiennes, qui jouent un rôle essentiel dans le développement du cerveau avant la naissance. Ce lien est notamment étudié pour les difficultés liées au langage, et des résultats similaires ont été observés dans plusieurs études menées dans différents pays. Cependant, toutes les difficultés d’apprentissage ne s’expliquent pas par cette exposition&nbsp;: dans plusieurs enquêtes présentées dans ce dossier, d’autres facteurs, parfois beaucoup plus simples à identifier et à corriger, étaient à l’œuvre.',
      'En revanche, affirmer que les nouvelles générations seraient devenues «&nbsp;plus bêtes&nbsp;» reviendrait à aller trop loin par rapport à ce que montrent réellement les recherches. On observe effectivement une baisse du QI moyen dans plusieurs pays occidentaux depuis les générations nées autour de 1975. Une étude norvégienne menée sur environ 730&nbsp;000 conscrits a notamment montré que cette évolution était davantage liée à des facteurs environnementaux qu’à la génétique. Pour arriver à cette conclusion, les chercheurs ont comparé des frères issus des mêmes parents, ce qui permet de limiter l’influence de l’hérédité. Toutefois, cette étude n’a pas mesuré l’exposition aux perturbateurs endocriniens et ne permet donc pas de les désigner comme responsables de cette baisse.',
      'Un autre problème important concerne la manière dont les perturbateurs endocriniens sont réglementés. Aujourd’hui, les seuils de sécurité sont principalement évalués substance par substance, alors que, dans la réalité, nous sommes exposés à de nombreux produits chimiques en même temps, souvent à faibles doses. C’est ce qu’a cherché à étudier le programme SELMA, en s’intéressant aux effets d’un mélange de substances plutôt qu’à leurs effets individuels. Cela soulève une question importante&nbsp;: même si chaque substance respecte individuellement les limites autorisées, leur combinaison pourrait-elle malgré tout présenter un risque pour notre santé&nbsp;? C’est l’une des limites actuelles de l’évaluation des risques, et probablement l’un des points les plus importants à retenir de ce dossier.'
    ],
    etabli: [
      'Les hormones thyroïdiennes de la mère commandent la construction du cerveau du fœtus, et plusieurs substances courantes interfèrent avec elles.',
      'Un mélange reconstitué à partir de prélèvements réels perturbe des organoïdes de cerveau humain à des concentrations réalistes.',
      'Le signal sur le langage apparaît dans des cohortes indépendantes, en Suède comme au Danemark.',
      'Le plomb prouve qu’un polluant invisible peut coûter des points de QI à une population entière avant qu’on l’admette.'
    ],
    nonEtabli: [
      'La cause des difficultés d’une personne réelle. Les études comparent des groupes de centaines ou de milliers d’enfants.',
      'Le lien de cause à effet chez l’humain : les cohortes observent des associations, la causalité vient du laboratoire.',
      'Qu’une substance agisse seule. Dans la vie réelle, plusieurs causes s’additionnent le plus souvent.',
      'Que les générations récentes soient moins intelligentes. Le QI mesure la réussite à certains tests, pas l’intelligence entière.'
    ],
    sources: [
      'Caporale N. et al., « From cohorts to molecules: adverse impacts of endocrine disrupting mixtures », <em>Science</em>, vol. 375, n° 6582, 2022 — cohorte SELMA, projet européen EDC-MixRisk. <span class="src-use">Enquête 1</span>',
      'Chen A. et al., « Prenatal polybrominated diphenyl ether exposures and neurodevelopment in U.S. children through 5 years of age: the HOME Study », <em>Environmental Health Perspectives</em>, 2014. <span class="src-use">Enquête 2</span>',
      'Casas M. et al., « Exposure to bisphenol A during pregnancy and child neuropsychological development in the INMA-Sabadell cohort », <em>Environmental Research</em>, 2015 — résultats en partie négatifs. <span class="src-use">Enquête 3</span>',
      'Cordier S., Multigner L. et al., cohorte TIMOUN, Guadeloupe — <em>Environmental Research</em>, 2012, et <em>Environmental Health</em>, Inserm. <span class="src-use">Enquête 4</span>',
      'Saturnisme infantile — dépistage par plombémie, maladie à déclaration obligatoire en France ; interdiction des peintures au plomb depuis 1949. <span class="src-use">Enquête 3</span>',
      'Philippat C., Slama R. et al., « Prenatal exposure to nonpersistent endocrine disruptors and behavior in boys at 3 and 5 years », <em>Environmental Health Perspectives</em>, 2017 — cohorte EDEN, Inserm, 529 garçons.',
      '« Prenatal bisphenol A exposure is associated with language development but not with ADHD-related behavior in toddlers », <em>Environmental Research</em>, 2019 — Odense Child Cohort, Danemark.',
      'Bellanger M., Demeneix B., Grandjean P., Zoeller R. T., Trasande L., « Neurobehavioral deficits, diseases, and associated costs of exposure to endocrine-disrupting chemicals in the European Union », <em>Journal of Clinical Endocrinology &amp; Metabolism</em>, 2015.',
      'Bratsberg B., Rogeberg O., « Flynn effect and its reversal are both environmentally caused », <em>PNAS</em>, vol. 115, n° 26, 2018 — 730 000 conscrits norvégiens, naissances 1962-1991. <span class="src-use">Bilan</span>',
      'Taylor K. W. et al., « Fluoride exposure and children’s IQ scores: a systematic review and meta-analysis », <em>JAMA Pediatrics</em>, 2025 ; National Toxicology Program, monographie n° 8, 2024.'
    ],
    chiffres: [
      ['Enfants exposés au-delà du niveau de préoccupation', 'jusqu’à 54 %', 'SELMA, 2022'],
      ['Sur-risque de retard de langage à 30 mois, décile haut contre bas', '× 3,3', 'SELMA, 2022'],
      ['Hausse du score d’hyperactivité à 5 ans', '+ 3,3 points', 'HOME, 2014'],
      ['Risque de symptômes d’hyperactivité à 4 ans', '× 1,72', 'INMA, 2015'],
      ['Score psychomoteur à 1 an, tertile le plus exposé', '− 4,28 points', 'INMA, 2015'],
      ['Enfants de TIMOUN réévalués à 7 ans', '576', 'TIMOUN, Inserm'],
      ['Conscrits norvégiens analysés, naissances 1962-1991', '730 000', 'PNAS, 2018']
    ]
  }
};
