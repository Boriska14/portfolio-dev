export type ProjectId =
  | 'digital-twin'
  | 'track-sentry-vision'
  | 'eneo'
  | 'supply-chain'
  | 'smart-home'
  | 'jeffrey'
  | 'wuendjo'
  | 'mate-consulting';

export interface DiagramNode {
  id: string;
  label: string;
  sublabel: string;
  emphasis?: 'primary' | 'secondary' | 'neutral';
}

export interface ProjectEntry {
  id: ProjectId;
  index: string;
  shortTitle: string;
  title: string;
  categoryLabel: string;
  period: string;
  summary: string;
  context: string;
  objective: string;
  role: string;
  architectureNote: string;
  diagramNodes: DiagramNode[];
  diagramFooter: string;
  realisation: string;
  result: string;
  nextAndLearnings: string;
  technologies: string[];
  liveUrl?: string;
  liveLabel?: string;
  previewImage?: string;
}

export interface ArchiveRowItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  context: string;
  period: string;
  tags: string[];
  detail: string;
  liveUrl?: string;
  previewImage?: string;
}

export interface ExperienceRow {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlight: string;
}

export interface CompetenceAxis {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  domains: {
    label: string;
    detail: string;
  }[];
}

export const PROFILE = {
  fullName: 'Boriska Mbilongo',
  heroTitle:
    'Ingénieure en conception et intégration de solutions numériques – IoT, Cloud & Informatique industrielle',
  heroTagline:
    'Je conçois et j’intègre des solutions techniques qui relient le monde physique aux systèmes numériques.',
  aboutLead:
    'Ingénieure en systèmes d’information orientée conception et intégration de solutions numériques, avec un intérêt marqué pour l’IoT, le cloud et l’informatique industrielle.',
  aboutJourney:
    'Diplômée de l’UCAC-ICAM en informatique et management des systèmes d’information (titre CTI 2026), j’ai évolué entre le Cameroun, la France et la Belgique en conjuguant génie logiciel, systèmes connectés et transformation numérique (notamment comme consultante en transformation digitale chez MINERVE Share and Grow).',
  aboutApproach:
    'Mon approche repose sur le concret : partir du besoin opérationnel sur le terrain, prototyper rapidement pour lever les risques techniques, intégrer proprement capteurs, API et bases de données, puis structurer des systèmes fiables et reproductibles.',
  aboutBalance:
    'Je privilégie des projets utiles, techniquement exigeants et menés dans un rythme de travail soutenable qui préserve la qualité de conception dans la durée.',
  email: 'danya-maylis.mbilongo@2026.icam.fr',
  phone: '+237 657 571 091',
  location: 'Cameroun · France · Belgique',
  linkedinUrl: 'https://www.linkedin.com/in/boriska-mbilongo',
  githubUrl: 'https://github.com/boriska-mbilongo',
  closingQuote:
    'Une carrière ambitieuse doit financer la liberté de vivre, pas la remplacer.',
};

export const PUBLICATION = {
  title:
    'Towards Sustainable Digital Transformation in SMEs: Integrating IoT, Digital Twins, and AI for Enhanced Manufacturing Efficiency',
  authors: 'Zeina Elrawashdeh, Paul-Eric Dossou & Boriska Mbilongo',
  venue: 'Actes de FAIM 2025 · Springer Nature',
  roleSummary:
    'Intervention et co-écriture sur l’intégration pragmatique de l’IoT, des jumeaux numériques modulaires (Flask, RabbitMQ, MongoDB, Docker) et de la maintenance prédictive pour les PME industrielles.',
  url: 'https://www.researchgate.net/publication/397657540_Towards_Sustainable_Digital_Transformation_in_SMEs_Integrating_IoT_Digital_Twins_and_AI_for_Enhanced_Manufacturing_Efficiency',
};

export const KEY_RESULTS = [
  { metric: '-80 %', label: 'd’erreurs de traitement automatisé' },
  { metric: '-30 %', label: 'temps de déploiement via CI/CD' },
  { metric: '+15 %', label: 'performances applicatives mesurées' },
];

export const STRATEGIC_PILLARS = [
  {
    index: '01',
    keyword: 'Fiabilité',
    title: 'Fiabiliser les flux critiques',
    description:
      'Transformer les contrôles manuels et traitements dispersés en applications métier auditées et mesurables.',
  },
  {
    index: '02',
    keyword: 'Continuité',
    title: 'Relier terrain, IoT & Cloud',
    description:
      'Connecter capteurs, microcontrôleurs et simulateurs aux systèmes d’information via MQTT, RabbitMQ et API REST.',
  },
  {
    index: '03',
    keyword: 'Impact',
    title: 'Livrer des architectures durables',
    description:
      'Concevoir des services modulaires conteneurisés sous Docker, testés et prêts à évoluer avec les équipes.',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    phase: 'Diagnostic & Cadrage',
    summary:
      'Immersion auprès des équipes métier ou recherche pour clarifier les contraintes terrain, modéliser les données (UML, Merise, GRAI) et prioriser l’essentiel.',
    outputs: 'Spécifications · Modèles de données · Architecture cible',
  },
  {
    step: '02',
    phase: 'Prototypage ciblé',
    summary:
      'Validation rapide de la chaîne critique (lecteur matériel, flux MQTT/RabbitMQ, API ou modèle) afin de lever les risques techniques au plus tôt.',
    outputs: 'Preuve de concept · Contrats d’API · Tests de charge',
  },
  {
    step: '03',
    phase: 'Architecture & Intégration',
    summary:
      'Développement modulaire en Python (Django, Flask, FastAPI), Java ou Node.js/React avec persistance SQL/NoSQL adaptée à chaque usage.',
    outputs: 'Services découplés · PostgreSQL / MongoDB · Interfaces web',
  },
  {
    step: '04',
    phase: 'Industrialisation & Transfert',
    summary:
      'Conteneurisation reproductible Docker, automatisation CI/CD sous GitLab, tests automatisés et documentation claire pour la reprise en équipe.',
    outputs: 'Docker Compose · Pipelines GitLab CI/CD · Documentation',
  },
];

export const HUB_LOCATIONS = [
  {
    city: 'Douala · Yaoundé',
    country: 'Cameroun',
    scope: 'Ancrage initial, missions DSI & transformation digitale.',
  },
  {
    city: 'Grand Paris Sud',
    country: 'France',
    scope: 'Cursus ingénieur CTI & recherche Industrie 4.0.',
  },
  {
    city: 'Mons',
    country: 'Belgique',
    scope: 'Échange universitaire & systèmes ferroviaires connectés.',
  },
];

export const CERTIFICATIONS_AND_ENGAGEMENTS = [
  {
    group: 'Formation & Certifications',
    items: [
      'Diplôme d’ingénieur en informatique et management des SI (Titre CTI) · UCAC-ICAM, 2026',
      'CCNA (Cisco Certified Network Associate) · Cisco Networking Academy, fév. 2023',
      'Internet of Things Fundamentals (IoT) · Udemy, fév. 2024',
      'TOEIC Anglais B2 (niveau professionnel) · ETS, fév. 2024',
    ],
  },
  {
    group: 'Conseil & Engagements',
    items: [
      'Consultante en transformation digitale (temps partiel) · MINERVE Share and Grow (2024–2026)',
      'Intervenante Girls in ICT Day · Institut français du Cameroun, Douala (avril 2024)',
      'You Give « Un Cartable, Un Sourire » · Collecte de 400 000 FCFA pour 22 enfants (2026)',
      'Communication digitale (Likabo, Djine Care, Linnov) & collectif étudiant COCFET / ARIS',
    ],
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    id: 'digital-twin',
    index: '01',
    shortTitle: 'Jumeau numérique',
    title: 'Jumeau numérique – Plateforme robotique LIFE',
    categoryLabel: 'Projet académique 4e année & Recherche · ICAM Grand Paris Sud',
    period: '09/2024 – 02/2025',
    summary:
      'Exploration et prototypage d’un jumeau numérique reliant simulation robotique (ROS / Gazebo), messagerie asynchrone et supervision web pour la maintenance prédictive.',
    context:
      'Mené durant une mission de recherche de cinq mois à l’ICAM Grand Paris Sud (supervision : M. Paul-Eric Dossou) autour de la salle robotique expérimentale LIFE. Malgré des équipements avancés, la plateforme manquait d’une vue unifiée et en temps réel des données et positions des robots.',
    objective:
      'Prototyper un système complexe capable de capter les états issus des simulateurs robotiques, de les transporter sans blocage vers des services orientés API et de restituer des indicateurs exploitables pour le pilotage et la maintenance.',
    role:
      'Conception de l’architecture d’intégration et développement complet de la chaîne : intégration SCRAM sur RabbitMQ, passerelle ROS / Gazebo, API REST Python/Flask, stockage MongoDB, conteneurisation Docker et rédaction de documentation technique. Ces travaux ont nourri le chapitre publié chez Springer (FAIM 2025).',
    architectureNote:
      'Architecture orientée services et découplée par broker RabbitMQ (Producer / Consumer) afin de protéger la boucle temps réel des simulateurs tout en alimentant l’API Flask et MongoDB.',
    diagramNodes: [
      {
        id: 'sim',
        label: 'Simulateurs terrain',
        sublabel: 'ROS · Gazebo · FlexSim',
        emphasis: 'neutral',
      },
      {
        id: 'broker',
        label: 'Broker asynchrone',
        sublabel: 'RabbitMQ (SCRAM · Producer/Consumer)',
        emphasis: 'primary',
      },
      {
        id: 'api',
        label: 'Backend orienté services',
        sublabel: 'Python Flask · API REST · Scénarios',
        emphasis: 'secondary',
      },
      {
        id: 'storage',
        label: 'Données & Supervision',
        sublabel: 'MongoDB · Tableau de bord web',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Environnement reproductible Docker / Git avec documentation technique de reprise',
    realisation:
      'Mise en place des flux asynchrones RabbitMQ, extraction des positions et mesures depuis ROS/Gazebo, implémentation des routes REST Flask, persistance NoSQL dans MongoDB et interface web responsive dédiée aux scénarios et KPI.',
    result:
      'Jumeau numérique fonctionnel et reproductible pour les travaux de recherche du laboratoire, valorisé par une co-publication scientifique dans les actes de FAIM 2025 (Springer Nature).',
    nextAndLearnings:
      'Apprentissage concret du découplage événementiel entre simulation robotique et web, de la reproductibilité Docker et de l’écart entre modèles simulés et contraintes matérielles réelles.',
    technologies: ['Python', 'Flask', 'ROS', 'Gazebo', 'RabbitMQ', 'SCRAM', 'MongoDB', 'Docker', 'Git'],
    liveUrl:
      'https://www.researchgate.net/publication/397657540_Towards_Sustainable_Digital_Transformation_in_SMEs_Integrating_IoT_Digital_Twins_and_AI_for_Enhanced_Manufacturing_Efficiency',
    liveLabel: 'Publication ResearchGate',
  },
  {
    id: 'track-sentry-vision',
    index: '02',
    shortTitle: 'Track Sentry Vision',
    title: 'Track Sentry Vision – Surveillance ferroviaire Edge-to-Cloud',
    categoryLabel: 'Ingénieure logicielle & TFE · UMONS (Mons, Belgique)',
    period: '02/2026 – 07/2026',
    summary:
      'Plateforme de surveillance ferroviaire intelligente combinant acquisition temps réel Edge-to-Cloud de capteurs multimodaux et modèles de vision par ordinateur pour défauts de rails et obstacles.',
    context:
      'Projet mené à l’Université de Mons (UMONS, Faculté Polytechnique). La surveillance des voies ferrées exige de capter en continu des signaux physiques hétérogènes au plus près de la voie tout en détectant par vision des défauts rares et des obstacles sous contrainte temps réel.',
    objective:
      'Concevoir une chaîne logicielle Edge-to-Cloud fiable reliant des capteurs multimodaux au Cloud, et valider des architectures de vision par ordinateur rapides et économes en annotations.',
    role:
      'Développement des modules logiciels Python dédiés à l’acquisition, à la synchronisation et à la transmission temps réel des données capteurs (vibrations, acoustique, température), et réalisation des expérimentations de vision par ordinateur (DualSightNet et RT-DETR avec Active Learning).',
    architectureNote:
      'Pipeline Edge-to-Cloud découplé reliant les capteurs terrain aux services Cloud conteneurisés (MQTT / Docker), complété par deux modules PyTorch d’analyse visuelle.',
    diagramNodes: [
      {
        id: 'sensors',
        label: 'Capteurs multimodaux',
        sublabel: 'Vibrations · Acoustique · Température',
        emphasis: 'neutral',
      },
      {
        id: 'edge',
        label: 'Collecte Edge Python',
        sublabel: 'Synchronisation & traitement temps réel',
        emphasis: 'primary',
      },
      {
        id: 'cloud',
        label: 'Transport & Cloud',
        sublabel: 'Broker MQTT · Conteneurs Docker',
        emphasis: 'secondary',
      },
      {
        id: 'vision',
        label: 'Vision & Diagnostic',
        sublabel: 'DualSightNet · RT-DETR · Alertes',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Chaîne Edge-to-Cloud intégrée à Track Sentry Vision et validation expérimentale CUDA / PyTorch',
    realisation:
      'Écriture de composants Python modulaires pour ingérer, horodater et transmettre les signaux capteurs vers le Cloud, puis entraînement et évaluation par validation croisée de DualSightNet (défauts de surface du rail) et RT-DETR piloté par Active Learning.',
    result:
      'Chaîne Edge-to-Cloud opérationnelle intégrée à la plateforme de l’UMONS, associée à 98,0 % de Balanced Accuracy sur la classification des défauts de rails et 90,8 % mAP@50:95 à 55 FPS en détection d’obstacles tout en réduisant l’effort d’annotation.',
    nextAndLearnings:
      'Maîtrise de la synchronisation de flux capteurs hétérogènes sous contrainte temps réel, gestion des déséquilibres de classes extrêmes et analyse du décalage entre données synthétiques et images réelles de terrain.',
    technologies: ['Python', 'Edge-to-Cloud', 'Capteurs multimodaux', 'MQTT', 'Docker', 'PyTorch', 'DualSightNet', 'RT-DETR'],
  },
  {
    id: 'eneo',
    index: '03',
    shortTitle: 'Mission ENEO DSI',
    title: 'Mission ENEO DSI – Système de rapprochement des ventes',
    categoryLabel: 'Stage Développement Full Stack (DISI / DASI · BSOF) · Douala',
    period: '01/2024 – 03/2024',
    summary:
      'Application web métier Django / PostgreSQL pour automatiser le rapprochement des ventes multi-canaux, fiabiliser les contrôles et accélérer les déploiements via CI/CD.',
    context:
      'Stage au sein de la Direction de l’Innovation et des Systèmes d’Information (DISI / DASI, équipe BSOF) d’ENEO Cameroon. Les données de ventes (post-paiement, prépaiement, agences, portail web, Mobile Money) étaient rapprochées manuellement, générant lenteurs, fautes de saisie et absence de traçabilité.',
    objective:
      'Concevoir une application métier centralisée permettant d’importer, valider et rapprocher automatiquement les encaissements et factures tout en garantissant une piste d’audit complète.',
    role:
      'Analyse des besoins avec les équipes métier, modélisation UML (3 profils : Administrateur, Utilisateur standard, Partenaire) et Merise (MCD/MCT), développement de l’application Django / PostgreSQL, optimisation SQL et mise en place de pipelines CI/CD sous GitLab.',
    architectureNote:
      'Application modulaire Django structurée en quatre briques métier indépendantes, avec gestion fine des rôles utilisateurs et intégration continue GitLab CI/CD.',
    diagramNodes: [
      {
        id: 'sources',
        label: 'Flux CSV hétérogènes',
        sublabel: 'Agences · Prépaiement · Mobile Money',
        emphasis: 'neutral',
      },
      {
        id: 'import',
        label: 'Import & Validation',
        sublabel: 'Mappage dynamique · Contrôles format',
        emphasis: 'secondary',
      },
      {
        id: 'engine',
        label: 'Moteur Django',
        sublabel: 'Rapprochement auto / assisté · Alertes',
        emphasis: 'primary',
      },
      {
        id: 'audit',
        label: 'PostgreSQL & Audit',
        sublabel: 'Piste d’audit · Exports CSV / PDF / Excel',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Gestion agile sous Jira Software et déploiements automatisés GitLab CI/CD',
    realisation:
      'Réalisation des quatre modules : import en masse et mappage CSV, moteur de rapprochement automatique et manuel assisté par lots, alertes sur anomalies ou doublons, et tableaux de bord avec exports et piste d’audit complète.',
    result:
      'Réduction de 80 % des erreurs de traitement grâce à l’automatisation des rapprochements, gain de 30 % sur le temps de déploiement (CI/CD) et amélioration de 15 % des performances applicatives.',
    nextAndLearnings:
      'Compréhension concrète des exigences d’une DSI critique : importance de la modélisation des données en amont, des tests de non-régression et de la traçabilité opérationnelle.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'UML', 'Merise', 'GitLab CI/CD', 'Jira'],
  },
  {
    id: 'supply-chain',
    index: '04',
    shortTitle: 'Supply Chain',
    title: 'Supply Chain – Analyse de performance GRAI & Multi-services',
    categoryLabel: 'Projet d’architecture SI · ICAM Grand Paris Sud',
    period: '2024 – 2025',
    summary:
      'Outil d’analyse de performance logistique fondé sur la méthode GRAI, implémenté en architecture multi-services Python (FastAPI / Flask) avec SQL, NoSQL et Docker.',
    context:
      'Projet visant à évaluer les flux logistiques et centres de décision selon la méthode GRAI tout en préparant le raccordement des indicateurs de performance (KPI) à des progiciels existants (ERP / WMS).',
    objective:
      'Mettre en place une architecture claire séparant la validation des contrats d’API, le calcul des indicateurs décisionnels et le stockage hybride des données structurées et événementielles.',
    role:
      'Analyse des besoins et des flux logistiques, conception du modèle de données polyglotte (PostgreSQL + MongoDB), découpage des services FastAPI / Flask et orchestration des conteneurs avec Docker Compose.',
    architectureNote:
      'Séparation nette entre l’API d’entrée typée (FastAPI / OpenAPI) et la logique d’analyse GRAI (Flask), adossées à deux moteurs de persistance complémentaires.',
    diagramNodes: [
      {
        id: 'ui',
        label: 'Supervision KPI',
        sublabel: 'Tableaux de bord React',
        emphasis: 'neutral',
      },
      {
        id: 'gateway',
        label: 'Passerelle API',
        sublabel: 'FastAPI · Validation OpenAPI',
        emphasis: 'primary',
      },
      {
        id: 'core',
        label: 'Service métier GRAI',
        sublabel: 'Flask · Calcul d’écarts & KPI',
        emphasis: 'secondary',
      },
      {
        id: 'db',
        label: 'Stockage hybride',
        sublabel: 'PostgreSQL (SQL) + MongoDB (NoSQL)',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Orchestration multi-conteneurs Docker Compose · Connecteur ERP / WMS',
    realisation:
      'Développement des endpoints FastAPI documentés via OpenAPI, implémentation des calculs GRAI sous Flask, modélisation relationnelle des commandes (PostgreSQL) et stockage souple des traces d’événements (MongoDB).',
    result:
      'Plateforme conteneurisée reproductible permettant d’analyser les écarts décisionnels sur la chaîne logistique et de restituer des KPI consolidés.',
    nextAndLearnings:
      'Arbitrage pratique entre SQL et NoSQL selon la structure des données, maîtrise de Docker Compose en réseau interne et structuration propre des contrats d’API.',
    technologies: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'Docker Compose', 'React', 'Méthode GRAI'],
  },
  {
    id: 'smart-home',
    index: '05',
    shortTitle: 'Smart Home Access',
    title: 'Smart Home Access – Contrôle d’accès IoT connecté',
    categoryLabel: 'Projet académique IoT & Web · Cursus ingénieur',
    period: '2024',
    summary:
      'Chaîne IoT complète reliant lecteur matériel Arduino / Raspberry Pi, protocole MQTT, backend Node.js et tableau de bord React pour gérer des accès en direct.',
    context:
      'Projet académique conçu pour relier concrètement des composants matériels contraints à un système d’information web temps réel autour d’un parcours de contrôle d’accès par badge.',
    objective:
      'Assurer la vérification instantanée des autorisations lors du passage d’un badge physique, la révocation à distance depuis le web et la continuité de fonctionnement en cas d’aléa réseau.',
    role:
      'Conception de bout en bout du parcours d’accès : câblage et code embarqué sur Arduino / Raspberry Pi, configuration des échanges MQTT, développement du serveur Node.js/Express et de l’interface React.',
    architectureNote:
      'Architecture événementielle légère basée sur MQTT pour découpler les capteurs matériels de la logique de décision serveur et de l’interface de suivi.',
    diagramNodes: [
      {
        id: 'hardware',
        label: 'Boîtier d’accès',
        sublabel: 'Lecteur · Arduino & Raspberry Pi',
        emphasis: 'neutral',
      },
      {
        id: 'mqtt',
        label: 'Protocole IoT',
        sublabel: 'Broker MQTT (Topics badge / état)',
        emphasis: 'primary',
      },
      {
        id: 'server',
        label: 'Serveur applicatif',
        sublabel: 'Node.js & Express · Droits & logs',
        emphasis: 'secondary',
      },
      {
        id: 'dashboard',
        label: 'Interface web',
        sublabel: 'React & Chart.js · Révocation live',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Communication bidirectionnelle temps réel et historique des accès',
    realisation:
      'Lecture matérielle des identifiants sur Arduino, publication vers le Raspberry Pi et le broker MQTT, vérification des droits côté Node.js avec renvoi de commande d’ouverture, et tableau de bord React pour activer, bloquer et tracer les badges.',
    result:
      'Chaîne fonctionnelle validée de la présentation du badge physique jusqu’à la mise à jour instantanée du journal d’accès dans le navigateur.',
    nextAndLearnings:
      'Prise de conscience des contraintes de fiabilité propres à l’IoT : gestion des déconnexions Wi-Fi temporaires, file locale sur Raspberry Pi et validation stricte des messages avant actionnement.',
    technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'Express', 'React', 'Chart.js'],
  },
  {
    id: 'jeffrey',
    index: '06',
    shortTitle: 'Jeffrey',
    title: 'Jeffrey – Assistant personnel de productivité & d’organisation',
    categoryLabel: 'Projet personnel · Automatisation & Backend',
    period: 'Projet personnel',
    summary:
      'Assistant personnel conçu pour centraliser mes tâches, rappels quotidiens, notes rapides et priorités techniques au sein d’une interface unifiée sans friction.',
    context:
      'En menant de front missions d’ingénierie, projets de recherche et engagements associatifs, la dispersion entre carnets, listes de tâches et agendas ralentissait le suivi quotidien des priorités.',
    objective:
      'Créer un outil personnel léger, rapide à interroger, capable d’enregistrer une consigne en langage direct, de structurer les rappels actifs et de conserver un historique clair sans multiplier les applications.',
    role:
      'Conception fonctionnelle, architecture de l’API REST, développement de la logique de traitement des commandes en Python / Node.js et réalisation de l’interface React épurée.',
    architectureNote:
      'Architecture simple et modulaire centrée sur une boucle rapide : saisie d’intention, normalisation via API REST, classement par priorité/échéance et stockage persistant des tâches.',
    diagramNodes: [
      {
        id: 'input',
        label: 'Interface de saisie',
        sublabel: 'Web React · Commandes & notes',
        emphasis: 'neutral',
      },
      {
        id: 'parser',
        label: 'Moteur de traitement',
        sublabel: 'Python / Node.js · Routage d’actions',
        emphasis: 'primary',
      },
      {
        id: 'api',
        label: 'API REST & Rappels',
        sublabel: 'Planification · Statuts & priorités',
        emphasis: 'secondary',
      },
      {
        id: 'memory',
        label: 'Mémoire persistante',
        sublabel: 'Base structurée · Historique & tâches',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Conçu pour une latence minimale et un usage quotidien sobre sans surcharge visuelle',
    realisation:
      'Développement d’un moteur de traitement des requêtes permettant d’ajouter, filtrer et clôturer des rappels ou notes techniques, adossé à une API REST légère et une interface web réactive.',
    result:
      'Assistant personnel opérationnel utilisé au quotidien pour centraliser mes engagements, échéances techniques et suivis de projets.',
    nextAndLearnings:
      'Ce projet a renforcé mon attention à la simplicité d’usage : un outil interne n’est adopté durablement que s’il réduit la friction de saisie. Prochaines évolutions : synchronisation calendrier et notifications ciblées.',
    technologies: ['Python', 'Node.js', 'API REST', 'React', 'Automatisation'],
  },
  {
    id: 'wuendjo',
    index: '07',
    shortTitle: 'Wuendjo',
    title: 'Wuendjo – Organisation collaborative de voyage',
    categoryLabel: 'Projet personnel · Application web en ligne',
    period: 'Déployé sur Vercel',
    summary:
      'Application web collaborative pour préparer un voyage en groupe ou en solo : suivi de budget Recharts, suggestions locales, jeux de piste et guides visas.',
    context:
      'Organiser un voyage à plusieurs ou en autonomie oblige souvent à jongler entre feuilles de calcul budgétaires, notes d’itinéraires et recherches dispersées sur les formalités administratives.',
    objective:
      'Réunir dans un outil web unique les fonctionnalités réellement utiles à la préparation d’un séjour, utilisables sans inscription complexe ni courbe d’apprentissage.',
    role:
      'Conception produit, ergonomie responsive, développement front-end en React, intégration des graphiques financiers Recharts et déploiement continu sur Vercel.',
    architectureNote:
      'Application web monopage (SPA) modulaire construite en React, découpée par modules métier indépendants et hébergée en continu sur Vercel.',
    diagramNodes: [
      {
        id: 'users',
        label: 'Voyageurs',
        sublabel: 'Parcours Groupe ou Solo',
        emphasis: 'neutral',
      },
      {
        id: 'modules',
        label: 'Modules React',
        sublabel: 'Itinéraire · Suggestions · Visas · Jeux',
        emphasis: 'primary',
      },
      {
        id: 'charts',
        label: 'Suivi budgétaire',
        sublabel: 'Graphiques Recharts par poste',
        emphasis: 'secondary',
      },
      {
        id: 'hosting',
        label: 'Diffusion web',
        sublabel: 'Build & déploiement Vercel',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Application publique accessible en ligne sur ordinateur et mobile',
    realisation:
      'Développement des modules disponibles en ligne : planification de séjour solo ou collaboratif, visualisation budgétaire via Recharts, recommandations de destinations/activités/restaurants, guides visas et jeux de piste intégrés.',
    result:
      'Application déployée et accessible publiquement sur wuendjo.vercel.app, démontrant la capacité à livrer un produit web complet de l’idée à la mise en production.',
    nextAndLearnings:
      'Priorisation des fonctionnalités centrées sur l’usage réel. Prochaines étapes prévues : persistance multi-utilisateurs temps réel et partage synchronisé des dépenses entre participants.',
    technologies: ['React', 'JavaScript', 'Recharts', 'Design responsive', 'Vercel'],
    liveUrl: 'https://wuendjo.vercel.app/',
    previewImage: '/assets/sites/wuendjo.png',
  },
  {
    id: 'mate-consulting',
    index: '08',
    shortTitle: 'MATE Consulting',
    title: 'MATE Consulting – Site web de gestion financière externalisée',
    categoryLabel: 'Projet web professionnel · Déployé sur Vercel',
    period: 'En ligne',
    summary:
      'Site web responsive conçu pour présenter l’offre d’externalisation financière agile de MATE Consulting aux PME/TPE et simplifier la prise de rendez-vous.',
    context:
      'MATE Consulting accompagne des dirigeants de PME et TPE sur la précomptabilité, le suivi financier et les outils d’aide à la décision. Le cabinet souhaitait un support web clair, crédible et orienté conversion.',
    objective:
      'Structurer une interface lisible traduisant des prestations financières techniques en bénéfices concrets et permettant aux prospects de réserver directement un premier échange de 30 minutes.',
    role:
      'Conception de l’architecture éditoriale, design d’interface sobre centré sur la clarté client, développement front-end en React et déploiement continu sur Vercel.',
    architectureNote:
      'Application front-end React modulaire pensée mobile-first, structurant l’offre de précomptabilité, les outils d’aide à la décision et le tunnel direct de prise de contact.',
    diagramNodes: [
      {
        id: 'visitor',
        label: 'Dirigeants PME / TPE',
        sublabel: 'Navigation mobile & ordinateur',
        emphasis: 'neutral',
      },
      {
        id: 'offer',
        label: 'Vitrine React',
        sublabel: 'Positionnement · Offre précomptabilité',
        emphasis: 'primary',
      },
      {
        id: 'tools',
        label: 'Aide à la décision',
        sublabel: 'Présentation des indicateurs & pilotage',
        emphasis: 'secondary',
      },
      {
        id: 'cta',
        label: 'Prise de contact',
        sublabel: 'Réservation échange 30 min · Vercel',
        emphasis: 'neutral',
      },
    ],
    diagramFooter: 'Site web déployé en production sur mateconsulting-pi.vercel.app',
    realisation:
      'Intégration des pages et sections de présentation de l’externalisation financière, hiérarchisation claire des services (précomptabilité, tableaux de bord de pilotage) et mise en place du parcours vers la prise de rendez-vous.',
    result:
      'Site web en ligne sur mateconsulting-pi.vercel.app offrant une présentation structurée, rapide et accessible sur tous les formats d’écran.',
    nextAndLearnings:
      'Travail d’ergonomie axé sur la lisibilité d’une offre B2B technique. Prochaines évolutions envisageables : simulateur d’accompagnement comptable et calendrier de réservation intégré.',
    technologies: ['React', 'JavaScript', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://mateconsulting-pi.vercel.app/',
    previewImage: '/assets/sites/mateconsulting.png',
  },
];

export const ARCHIVE_ROWS: ArchiveRowItem[] = [
  {
    id: 'sparte-pic',
    index: 'A1',
    title: 'Contrôle d’accès biométrique sur microcontrôleur PIC',
    subtitle: 'Sparte Robotics (Douala, Cameroun) · Stage IoT & Embarqué',
    context: 'Intégration matérielle et logicielle en C / C++ sur liaison série UART',
    period: '05/2023 – 07/2023',
    tags: ['C / C++', 'PIC', 'UART'],
    detail:
      'Montage électronique complet et écriture du firmware en C pour lire une empreinte biométrique sur port série et piloter le verrouillage directement depuis un microcontrôleur PIC.',
  },
  {
    id: 'glitch-mag',
    index: 'A2',
    title: 'GLITCH Magazine',
    subtitle: 'Projet éditorial personnel cité sur le CV',
    context: 'Magazine web indépendant organisé par volumes, articles, notes et courrier',
    period: 'En ligne · Vercel',
    tags: ['React', 'Next.js', 'Édition'],
    detail:
      'Conception d’un magazine indépendant mêlant articles, réflexions et formats éditoriaux soignés sur le web.',
    liveUrl: 'https://creative-glitch.vercel.app/',
    previewImage: '/assets/sites/creative-glitch.png',
  },
  {
    id: 'zone-groupe',
    index: 'A3',
    title: 'Zone Groupe',
    subtitle: 'Boutique d’électronique & négociation directe WhatsApp',
    context: 'Catalogue, panier et finalisation directe des commandes par messagerie',
    period: 'En ligne · Vercel',
    tags: ['React', 'E-commerce', 'Vercel'],
    detail:
      'Boutique en ligne adaptée aux habitudes d’achat locales, intégrant catalogue, panier et négociation directe du prix avant validation sur WhatsApp.',
    liveUrl: 'https://zone-groupe-sigma.vercel.app/',
    previewImage: '/assets/sites/zone-groupe.png',
  },
];

export const COMPETENCE_AXES: CompetenceAxis[] = [
  {
    id: 'architecture-si',
    index: '01',
    title: 'Architecture & SI',
    subtitle: 'Concevoir des systèmes logiciels modulaires, testés et maintenables.',
    domains: [
      {
        label: 'Architecture applicative',
        detail: 'Python (Django, Flask, FastAPI, SQLAlchemy), Java / Spring Boot, Node.js / Express, React',
      },
      {
        label: 'API & intégration',
        detail: 'API REST, contrats OpenAPI (Swagger), JSON, messagerie asynchrone (RabbitMQ), passerelles ERP / WMS',
      },
      {
        label: 'Données',
        detail: 'Modélisation relationnelle UML & Merise, PostgreSQL (SQL) et MongoDB (NoSQL)',
      },
      {
        label: 'Cloud, tests & déploiement',
        detail: 'Docker, Docker Compose, CI/CD GitLab, Git, Linux, tests unitaires (pytest, JUnit, Postman)',
      },
    ],
  },
  {
    id: 'iot-industrie',
    index: '02',
    title: 'IoT & industrie',
    subtitle: 'Relier capteurs, automates et systèmes de supervision numériques.',
    domains: [
      {
        label: 'Capteurs & embarqué',
        detail: 'Capteurs multimodaux, microcontrôleurs PIC (C/C++), Arduino et Raspberry Pi',
      },
      {
        label: 'Protocoles IoT & industriels',
        detail: 'MQTT, communication série UART ; culture et intégration industrielle OPC UA et Modbus',
      },
      {
        label: 'Edge & temps réel',
        detail: 'Pipelines Python edge-to-cloud, traitement du signal, gestion des coupures et fiabilité terrain',
      },
      {
        label: 'Supervision & jumeaux numériques',
        detail: 'Couplage simulation ROS / Gazebo, SCRAM, suivi temps réel et tableaux de bord Chart.js / React',
      },
    ],
  },
  {
    id: 'transformation',
    index: '03',
    title: 'Transformation',
    subtitle: 'Cadrer les besoins métier et coordonner l’intégration de bout en bout.',
    domains: [
      {
        label: 'Analyse des besoins',
        detail: 'Recueil terrain, formalisation des processus, cartographie GRAI et automatisation de workflows',
      },
      {
        label: 'Cadrage & documentation',
        detail: 'Spécifications fonctionnelles, modélisation des rôles utilisateurs et documentation technique',
      },
      {
        label: 'Gestion de projet',
        detail: 'Méthodes Agile et Scrum, suivi sous Jira Software, priorisation incrémentale des livrables',
      },
      {
        label: 'Coordination',
        detail: 'Interface entre équipes DSI, recherche et utilisateurs finaux (Français natif · Anglais TOEIC B2)',
      },
    ],
  },
];
