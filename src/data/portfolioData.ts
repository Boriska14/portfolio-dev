export type ProjectCategory = 'Professionnel' | 'Académique' | 'Personnel';

export interface ArchitectureLayer {
  layer: string;
  component: string;
  detail: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  period: string;
  country: 'Cameroun' | 'France' | 'Belgique';
  context: string;
  domain: string;
  summary: string;
  problem: string;
  architectureSummary: string;
  architectureLayers: ArchitectureLayer[];
  technologies: string[];
  role: string;
  challenges: string[];
  results: string[];
  demoType:
    | 'umons-tsv'
    | 'eneo'
    | 'digital-twin'
    | 'supply-chain'
    | 'sparte-biometric'
    | 'ugecam'
    | 'smart-home'
    | 'wuendjo'
    | 'jeffrey'
    | 'mateconsulting'
    | 'creative-glitch'
    | 'zone-groupe';
  repoUrl: string;
  liveUrl?: string;
  previewImage?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: {
    name: string;
    context: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  type: 'Professionnel' | 'Académique';
  country: 'Cameroun' | 'France' | 'Belgique';
  period: string;
  role: string;
  organization: string;
  location: string;
  focus: string;
  summary: string;
  deliverables: string[];
  stack: string[];
}

export interface EngagementItem {
  id: string;
  category: string;
  title: string;
  context: string;
  detail: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  reference: string;
}

export const PROFILE = {
  fullName: 'Boriska Mbilongo',
  title: 'Ingénieure informatique : Développement applicatif, IoT & Cloud',
  school: 'UCAC-ICAM · Diplôme d’ingénieur en informatique et management des systèmes d’information (CTI, 2026)',
  location: 'Cameroun.France.Belgique · Mobilité internationale',
  phone: '+237 657 571 091',
  email: 'danya-maylis.mbilongo@2026.icam.fr',
  githubUrl: 'https://github.com/boriska-mbilongo',
  linkedinUrl: 'https://www.linkedin.com/in/boriska-mbilongo',
  heroGreeting: 'Boriska Mbilongo · Ingénieure informatique',
  heroHeadline:
    'Développer des logiciels fiables, des objets connectés jusqu’au Cloud.',
  bioLead:
    'Ingénieure diplômée de l’UCAC-ICAM (titre CTI, 2026), j’ai travaillé et étudié entre le Cameroun, la France et la Belgique. J’aime partir d’un problème concret : vérifier des données sensibles, automatiser des processus critiques ou suivre l’état d’un rail, pour écrire un logiciel clair et utile sur le terrain.',
  bioSecondary:
    'Je travaille principalement en Python (Django, Flask, FastAPI, PyTorch), Java et Node.js/React, avec une vraie curiosité pour l’embarqué (microcontrôleurs PIC, Arduino, Raspberry Pi), la vision par ordinateur, les bases PostgreSQL/MongoDB et Docker.',
};

export const KEY_OUTCOMES = [
  {
    value: '-80 %',
    label: 'd’erreurs de traitement',
    context: 'Réconciliation des ventes automatisée chez ENEO',
  },
  {
    value: '-30 %',
    label: 'de temps de déploiement',
    context: 'Pipelines CI/CD mis en place chez ENEO',
  },
  {
    value: '+15 %',
    label: 'de performances applicatives',
    context: 'Optimisation Django et PostgreSQL',
  },
  {
    value: '3 pays',
    label: 'd’expérience terrain',
    context: 'Cameroun.France.Belgique',
  },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'umons-track-sentry-vision',
    title: 'Track Sentry Vision : Surveillance ferroviaire intelligente',
    subtitle: 'Architecture Edge-to-Cloud temps réel & Deep Learning ferroviaire (DualSightNet / RT-DETR)',
    category: 'Académique',
    period: '02/2026 – 07/2026',
    country: 'Belgique',
    context: 'UMONS · Faculté Polytechnique (Polytech Mons), Belgique',
    domain: 'Surveillance ferroviaire · Edge-to-Cloud & Vision par ordinateur',
    summary:
      'Projet Track Sentry Vision mené à l’UMONS (dir. Prof. Saïd Mahmoudi & Tanguy Vansnick) : plateforme complète de surveillance ferroviaire combinant l’acquisition temps réel Edge-to-Cloud de capteurs multimodaux (vibrations, acoustique, température) et des modèles Deep Learning pour la classification des défauts du rail (DualSightNet) et la détection d’obstacles (RT-DETR).',
    problem:
      'La surveillance ferroviaire doit traiter simultanément des flux capteurs hétérogènes au plus près de la voie et détecter par vision des défauts rares (ratio jusqu’à 1:354 sur RailSurface-7) ou des obstacles sous contrainte temps réel (< 100 ms), tout en limitant le coût d’annotation.',
    architectureSummary:
      'Chaîne complète reliant l’acquisition Edge-to-Cloud en Python (capteurs multimodaux, synchronisation, MQTT/Docker) à deux pipelines PyTorch 2.0 / CUDA : DualSightNet (ResNet50 + Swin-Tiny + ECA) et RT-DETR piloté par Active Learning (Diversity Sampling K-Means).',
    architectureLayers: [
      {
        layer: '01 · Terrain & Edge-to-Cloud',
        component: 'Capteurs multimodaux & modules Python',
        detail: 'Acquisition, synchronisation temporelle et remontée temps réel des signaux vibratoires, acoustiques et thermiques de la voie vers le Cloud (MQTT, Docker).',
      },
      {
        layer: '02 · Classification des rails',
        component: 'DualSightNet (ResNet50 + Swin-Tiny + ECA)',
        detail: 'Fusion dynamique via gate paramétrique, Geometry Attention multi-têtes et convolutions à dilatations (1, 2, 3) avec Focal Loss pondérée sur RailSurface-7 (8 classes en vue frontale et verticale).',
      },
      {
        layer: '03 · Détection & Active Learning',
        component: 'RT-DETR + Diversity Sampling (K-Means)',
        detail: 'Détection temps réel sur 5 classes d’obstacles à 18,2 ms/image (55 FPS) sur SynRailObs : amorçage sur 600 images et sélection par lots de 75 images pour atteindre 90,8 % mAP@50:95 en 6 itérations.',
      },
    ],
    technologies: ['Python', 'PyTorch 2.0', 'CUDA', 'Edge-to-Cloud', 'MQTT', 'Docker', 'ResNet50', 'Swin-Tiny', 'RT-DETR', 'Active Learning'],
    role: 'Développement des modules Python Edge-to-Cloud de traitement des capteurs multimodaux et conception expérimentale complète du TFE (DualSightNet, RT-DETR, validation croisée 5 folds, études d’ablation, analyse du reality gap).',
    challenges: [
      'Aligner dans le temps des flux capteurs multimodaux à fréquences différentes tout en maintenant un faible délai Edge-to-Cloud.',
      'Gérer un déséquilibre extrême de classes (8 images pour Grooves contre 2 830 pour Flakings) via Focal Loss pondérée et validation croisée stratifiée.',
      'Éviter la stagnation de l’incertitude pure (67,6 % mAP) grâce au Diversity Sampling et mesurer le reality gap synthétique → réel (71,2 % sur 50 images réelles).',
    ],
    results: [
      'Chaîne Edge-to-Cloud opérationnelle intégrée à la plateforme Track Sentry Vision de l’UMONS.',
      '98,0 % Balanced Accuracy (± 0,007) et 0,940 F1 pondéré en vue frontale (+15,5 pts vs EfficientNet-B0), avec +23,8 pts F1 sur Joints et +23,6 pts sur Grooves.',
      '90,8 % mAP@50:95 sur SynRailObs en 6 itérations (1 050 images) à 55 FPS, réduisant de 30 à 40 % l’effort d’annotation.',
    ],
    demoType: 'umons-tsv',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'eneo-rapprochement',
    title: 'ENEO : Application de réconciliation des ventes',
    subtitle: 'Django / PostgreSQL, modélisation UML & Merise, 4 modules métier et CI/CD',
    category: 'Professionnel',
    period: '08/01/2024 – 29/03/2024',
    country: 'Cameroun',
    context: 'ENEO Cameroon · DISI / DASI (équipe BSOF), Douala',
    domain: 'Développement Full Stack & DevOps',
    summary:
      'Conception et réalisation d’une application de réconciliation des ventes au sein de l’équipe BSOF (Business Service and Others Functions) de la DISI/DASI d’ENEO Cameroon, pour fiabiliser le rapprochement entre factures, encaissements et compteurs d’électricité.',
    problem:
      'Le processus manuel de réconciliation entre données de ventes (post-paiement, prépaiement, agences, my.eneocameroon.cm, Mobile Money) et compteurs entraînait lenteurs, fautes de saisie, absence de traçabilité et retards de facturation.',
    architectureSummary:
      'Application web modélisée en UML (3 rôles : Administrateur, Utilisateur standard, Partenaire) et Merise (MCD/MCT), structurée en 4 modules sous Django et PostgreSQL avec pipelines CI/CD.',
    architectureLayers: [
      {
        layer: '01 · Importation CSV',
        component: 'Mappage & validation des flux',
        detail: 'Import en masse et incrémentiel de fichiers CSV, mappage dynamique des champs et détection des erreurs de format ou valeurs aberrantes.',
      },
      {
        layer: '02 · Rapprochement & Alertes',
        component: 'Moteur automatique & assisté',
        detail: 'Algorithmes de rapprochement automatique ou manuel assisté, validation par lots, gestion des exceptions et alertes sur écarts/doublons.',
      },
      {
        layer: '03 · Rapports & CI/CD',
        component: 'Tableaux de bord, audit & GitLab',
        detail: 'Visualisation des ventes réconciliées, exports CSV/PDF/Excel, journalisation (piste d’audit), droits d’accès par rôle et déploiement continu.',
      },
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'UML', 'Merise', 'Jira Software', 'CI/CD', 'GitLab'],
    role: 'Stagiaire à la DISI/DASI (BSOF), encadrée par M. Humphrey Ojong (ENEO) et M. Karl Nyabe (UCAC-ICAM) : analyse des besoins, modélisation UML/Merise, développement des 4 modules en Django/PostgreSQL et mise en place des pipelines CI/CD.',
    challenges: [
      'Harmoniser des fichiers de ventes hétérogènes (post-paiement, prépayé, Mobile Money) via un moteur de mappage CSV flexible.',
      'Gérer 3 profils d’utilisation distincts (Administrateur, Utilisateur standard, Partenaire) avec piste d’audit complète.',
      'Optimiser les requêtes PostgreSQL pour réduire la latence des rapprochements et tableaux de bord.',
    ],
    results: [
      '80 % d’erreurs de traitement en moins grâce à la réconciliation automatisée des ventes.',
      '30 % de temps gagné sur les déploiements avec les pipelines CI/CD.',
      '15 % de performances applicatives en plus sur les opérations internes.',
    ],
    demoType: 'eneo',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'digital-twin-predictive',
    title: 'Jumeau numérique : Cas de la salle LIFE (ICAM Grand Paris Sud)',
    subtitle: 'Python / Flask, SCRAM via RabbitMQ, simulations ROS / Gazebo & MongoDB',
    category: 'Académique',
    period: '09/2024 – 02/2025',
    country: 'France',
    context: 'ICAM Grand Paris Sud Europe · Supervision : M. Paul-Eric Dossou',
    domain: 'Recherche & Industrie 4.0',
    summary:
      'Mission scientifique de recherche de 5 mois à l’ICAM Grand Paris Sud sur la conception et l’implémentation d’un jumeau numérique de la plateforme robotique LIFE (salle LIFE), reliant simulations ROS/Gazebo, broker RabbitMQ (SCRAM), API Flask et graphes de connaissances.',
    problem:
      'Malgré des technologies robotiques avancées, la plateforme LIFE manquait de visibilité temps réel sur les données et positions des robots, freinant la coordination, le pilotage et la réactivité.',
    architectureSummary:
      'Architecture orientée services reliant le broker RabbitMQ (Producer/Consumer pour SCRAM), les simulations ROS/Gazebo et FlexSim, un moteur d’inférences et constructeur de scénarios, et une interface web ergonomique Python/Flask adossée à MongoDB.',
    architectureLayers: [
      {
        layer: '01 · Broker & Simulation',
        component: 'SCRAM via RabbitMQ + ROS / Gazebo',
        detail: 'Intégration de SCRAM par messagerie asynchrone RabbitMQ (Producer/Consumer) et extraction des entités et positions depuis ROS et Gazebo.',
      },
      {
        layer: '02 · Coordination & Calcul',
        component: 'API REST Flask & Moteur d’inférences',
        detail: 'Module de coordination, capitalisation des connaissances, solveurs et constructeur de scénarios pour l’aide à la décision.',
      },
      {
        layer: '03 · Persistance & IHM',
        component: 'MongoDB, Interface Web & Docker',
        detail: 'Stockage des mesures et données de simulation, interface web responsive (tableaux de bord & KPI) et environnement reproductible Docker/Git.',
      },
    ],
    technologies: ['Python', 'Flask', 'RabbitMQ', 'SCRAM', 'ROS', 'Gazebo', 'MongoDB', 'Docker', 'Git'],
    role: 'Mission de recherche en 4e année d’ingénierie (supervision M. Paul-Eric Dossou) : intégration SCRAM/RabbitMQ, passerelle ROS/Gazebo, développement web Flask/MongoDB et co-écriture de l’article publié chez Springer (FAIM 2025).',
    challenges: [
      'Synchroniser en temps réel les positions et états issus des simulateurs ROS/Gazebo avec l’interface web de suivi.',
      'Découpler les échanges de messages entre composants via le broker RabbitMQ pour préserver la fiabilité.',
      'Rendre l’ensemble reproductible et documenté (Docker/Git) en appui aux projets analogues du laboratoire (SupplyChain, Valuator).',
    ],
    results: [
      'Jumeau numérique fonctionnel de la salle LIFE offrant une vue temps réel des robots et des indicateurs de performance.',
      'Travaux valorisés par un chapitre scientifique publié dans les actes de FAIM 2025 chez Springer Nature.',
    ],
    demoType: 'digital-twin',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'sparte-biometric-pic',
    title: 'Contrôle d’accès biométrique sur microcontrôleur PIC',
    subtitle: 'Montage électronique et code embarqué C/C++',
    category: 'Professionnel',
    period: '05/2023 – 07/2023',
    country: 'Cameroun',
    context: 'Sparte Robotics · Douala, Cameroun',
    domain: 'IoT & Embarqué',
    summary:
      'Conception d’un dispositif de contrôle d’accès par empreinte digitale sur microcontrôleur PIC, du câblage matériel jusqu’au programme embarqué.',
    problem:
      'Faire fonctionner une lecture biométrique fiable et l’ouverture d’un accès directement sur un microcontrôleur aux ressources réduites, sans dépendre d’un ordinateur.',
    architectureSummary:
      'Un capteur d’empreintes relié en liaison série UART au microcontrôleur PIC programmé en C, qui pilote ensuite le mécanisme d’ouverture.',
    architectureLayers: [
      {
        layer: '01 · Capteur',
        component: 'Module biométrique UART',
        detail: 'Acquisition de l’empreinte et envoi des données sur port série.',
      },
      {
        layer: '02 · Logique embarquée',
        component: 'Microcontrôleur PIC (C/C++)',
        detail: 'Enregistrement des profils, comparaison et gestion des délais d’ouverture.',
      },
      {
        layer: '03 · Commande',
        component: 'Verrou et signaux',
        detail: 'Déclenchement matériel et retour visuel/sonore immédiat pour l’utilisateur.',
      },
    ],
    technologies: ['C', 'C++', 'Microcontrôleur PIC', 'Communication série', 'IoT'],
    role: 'Stagiaire IoT et systèmes embarqués : câblage complet et écriture du programme embarqué.',
    challenges: [
      'Gérer la mémoire limitée du microcontrôleur et les délais de réponse du port série.',
    ],
    results: [
      'Prototype complet de contrôle d’accès testé et validé sur carte réelle.',
    ],
    demoType: 'sparte-biometric',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'supply-chain-microservices',
    title: 'SupplyChain : Analyse de performance GRAI & Multi-services Docker',
    subtitle: 'Méthode GRAI, tableaux de bord KPI, FastAPI / Flask, PostgreSQL & MongoDB',
    category: 'Académique',
    period: '2024 – 2025',
    country: 'France',
    context: 'ICAM Grand Paris Sud · Projet analogue',
    domain: 'Cloud, Logistique & Modélisation GRAI',
    summary:
      'Application d’analyse et d’optimisation de la performance logistique basée sur la méthode GRAI (Graphes à Réseaux d’Activités Interconnectées), implémentée en architecture multi-services Python (FastAPI/Flask) avec PostgreSQL, MongoDB et Docker.',
    problem:
      'Évaluer les processus de la chaîne logistique, repérer les écarts de performance et connecter les indicateurs (KPI) aux systèmes existants (ERP, WMS) tout en garantissant l’intégrité des commandes (SQL) et la souplesse des événements (NoSQL).',
    architectureSummary:
      'Modélisation structurelle GRAI couplée à des conteneurs Docker : API FastAPI en entrée, logique métier Flask, tableau de bord d’indicateurs React et double stockage PostgreSQL / MongoDB.',
    architectureLayers: [
      {
        layer: '01 · Modèle GRAI & API',
        component: 'FastAPI & Cartographie GRAI',
        detail: 'Structuration des centres de décision, détection des écarts de performance et validation OpenAPI.',
      },
      {
        layer: '02 · Métier & Tableaux de bord',
        component: 'Flask & React',
        detail: 'Calcul des indicateurs clés de performance (KPI) logistiques et restitution visuelle interactive.',
      },
      {
        layer: '03 · Persistance & ERP/WMS',
        component: 'PostgreSQL + MongoDB + Docker Compose',
        detail: 'Double stockage SQL/NoSQL et passerelle d’intégration ERP/WMS orchestrée sous Docker.',
      },
    ],
    technologies: ['Python', 'FastAPI', 'Flask', 'Méthode GRAI', 'PostgreSQL', 'MongoDB', 'Docker Compose', 'React'],
    role: 'Conception de l’outil d’analyse basée sur GRAI à Grand Paris Sud, découpage des services Python et orchestration Docker Compose.',
    challenges: [
      'Traduire les grilles décisionnelles GRAI en indicateurs concrets et synchroniser SQL/NoSQL lors du suivi des flux.',
    ],
    results: [
      'Plateforme conteneurisée intégrant modélisation GRAI, tableau de bord KPI et double persistance SQL/NoSQL.',
    ],
    demoType: 'supply-chain',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'valuator-ugecam',
    title: 'Valuator UGECAM : Évaluation des équipements médicaux',
    subtitle: 'Recueil des retours employés & patients, accès par rôle et tableaux de bord',
    category: 'Professionnel',
    period: '2024 – 2025',
    country: 'France',
    context: 'UGECAM · Projet analogue ICAM Grand Paris Sud',
    domain: 'Santé & Développement Applicatif',
    summary:
      'Outil d’évaluation conçu pour recueillir et analyser de manière standardisée, objective et éthique les appréciations des employés et des patients de l’UGECAM sur les équipements médicaux.',
    problem:
      'Les retours sur le matériel médical passaient par des supports hétérogènes, empêchant d’obtenir une vision consolidée par profil (employés vs patients) pour améliorer équipements et services.',
    architectureSummary:
      'Interface React offrant des formulaires adaptés et un accès différencié par rôle (employés ou patients), reliée à des services Java/Python et à des tableaux de bord de visualisation sur PostgreSQL.',
    architectureLayers: [
      {
        layer: '01 · Accès par rôle',
        component: 'Parcours Employés & Patients',
        detail: 'Formulaires standardisés et accessibles avec séparation claire des droits selon le profil.',
      },
      {
        layer: '02 · Traitement & Éthique',
        component: 'Services Java / Python',
        detail: 'Calcul objectif des indicateurs de satisfaction et consolidation multi-critères.',
      },
      {
        layer: '03 · Visualisation',
        component: 'Tableaux de bord & PostgreSQL',
        detail: 'Synthèse des évaluations permettant d’orienter l’amélioration des équipements médicaux.',
      },
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'React', 'PostgreSQL'],
    role: 'Développement de l’application d’évaluation à Grand Paris Sud en lien avec le cahier des charges UGECAM (formulaires, accès rôle-spécifique, tableaux de bord).',
    challenges: [
      'Garantir des retours standardisés et éthiques tout en rendant les formulaires rapides à remplir pour les patients comme pour les équipes.',
    ],
    results: [
      'Outil centralisé avec accès par rôle (employés / patients) et tableaux de bord de suivi des équipements.',
    ],
    demoType: 'ugecam',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'smart-home-access',
    title: 'Smart Home Access : Contrôle d’accès IoT',
    subtitle: 'Arduino / Raspberry Pi, MQTT, Node.js et React',
    category: 'Académique',
    period: '2024',
    country: 'France',
    context: 'ICAM · Projet académique IoT & Web',
    domain: 'IoT & Web',
    summary:
      'Projet académique conçu pour ouvrir ou bloquer un accès à distance depuis un tableau de bord web relié à un Arduino et un Raspberry Pi via MQTT.',
    problem:
      'Mettre en place une chaîne complète reliant un lecteur physique léger, un serveur Node.js et une interface web capable de révoquer un badge en direct.',
    architectureSummary:
      'Le matériel publie chaque passage sur MQTT, le serveur Node.js/Express vérifie les droits et le tableau de bord React affiche le journal en direct.',
    architectureLayers: [
      {
        layer: '01 · Boîtier',
        component: 'Arduino / Raspberry Pi',
        detail: 'Lecture d’un identifiant et échange léger sur le protocole MQTT.',
      },
      {
        layer: '02 · Serveur',
        component: 'Node.js & Express',
        detail: 'Vérification des autorisations et enregistrement de chaque passage.',
      },
      {
        layer: '03 · Suivi web',
        component: 'React & Chart.js',
        detail: 'Activation ou blocage d’un badge et historique clair des accès.',
      },
    ],
    technologies: ['Node.js', 'Express', 'MQTT', 'Raspberry Pi', 'Arduino', 'React', 'Chart.js'],
    role: 'Conception complète dans le cadre du cursus ingénieur, du câblage matériel jusqu’à l’interface React.',
    challenges: [
      'Gérer proprement les coupures temporaires de Wi-Fi entre le boîtier et le serveur.',
    ],
    results: [
      'Prototype complet couvrant ajout de badge, vérification instantanée et historique.',
    ],
    demoType: 'smart-home',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'wuendjo-travel',
    title: 'Wuendjo : Organisation de voyage (groupe ou solo)',
    subtitle: 'Application collaborative avec budget Recharts, suggestions, jeux de piste et guides visas',
    category: 'Personnel',
    period: 'Projet web en ligne',
    country: 'France',
    context: 'Wuendjo · Application collaborative de voyage',
    domain: 'Application Web & Voyage',
    summary:
      'Application collaborative d’organisation de voyages en groupe ou en solo incluant le suivi de budget (graphiques Recharts), des suggestions de destinations, activités et restaurants, des jeux de piste et des guides visas.',
    problem:
      'Préparer un voyage en groupe ou en solo demande de suivre à la fois le budget, les destinations, les activités, les formalités de visa et le programme commun sans tout éparpiller.',
    architectureSummary:
      'Application web interactive réunissant la planification de séjour (groupe ou solo), la visualisation budgétaire avec Recharts, les recommandations locales et les guides pratiques.',
    architectureLayers: [
      {
        layer: '01 · Planification',
        component: 'Mode Groupe & Mode Solo',
        detail: 'Organisation collaborative des étapes, suggestions de destinations, activités et restaurants.',
      },
      {
        layer: '02 · Budget & Données',
        component: 'Suivi financier avec Recharts',
        detail: 'Visualisation claire des dépenses du séjour et répartition par poste.',
      },
      {
        layer: '03 · Pratique & Ludique',
        component: 'Guides visas & Jeux de piste',
        detail: 'Repères administratifs par destination et parcours ludiques intégrés au séjour.',
      },
    ],
    technologies: ['React', 'Recharts', 'JavaScript', 'Vercel'],
    role: 'Conception et développement complet de l’application web Wuendjo déployée sur Vercel.',
    challenges: [
      'Réunir des usages très différents (budget, visas, suggestions, jeux de piste) dans une interface fluide.',
    ],
    results: [
      'Application déployée en ligne couvrant la préparation complète de voyages de groupe et en solo.',
    ],
    demoType: 'wuendjo',
    repoUrl: 'https://github.com/boriska-mbilongo',
    liveUrl: 'https://wuendjo.vercel.app/',
    previewImage: '/assets/sites/wuendjo.png',
  },
  {
    id: 'jeffrey-assistant',
    title: 'Jeffrey : Mon assistant personnel',
    subtitle: 'Outil quotidien pour centraliser rappels, tâches et organisation',
    category: 'Personnel',
    period: 'Projet personnel',
    country: 'France',
    context: 'Jeffrey · Assistant personnel sur mesure',
    domain: 'Automatisation & Productivité',
    summary:
      'Conception de Jeffrey, mon assistant personnel développé pour centraliser mes rappels, structurer mes priorités et fluidifier mon organisation quotidienne.',
    problem:
      'Entre les projets techniques, la recherche et la vie associative, j’avais besoin d’un outil personnel simple qui regroupe l’essentiel sans multiplier les applications.',
    architectureSummary:
      'Une interface directe reliée à un backend léger gérant les demandes du quotidien, les listes de tâches et les rappels.',
    architectureLayers: [
      {
        layer: '01 · Échange',
        component: 'Interface directe',
        detail: 'Saisie rapide d’un rappel, d’une note ou d’une priorité du jour.',
      },
      {
        layer: '02 · Traitement',
        component: 'Logique Python / Node.js',
        detail: 'Classement automatique des demandes et mise en forme des réponses.',
      },
      {
        layer: '03 · Suivi',
        component: 'Mémoire des tâches',
        detail: 'Conservation claire des rappels actifs et des tâches réalisées.',
      },
    ],
    technologies: ['Python', 'Node.js', 'API REST', 'React'],
    role: 'Conception et développement complet de mon assistant personnel selon mes habitudes de travail.',
    challenges: [
      'Rendre l’interaction suffisamment rapide et naturelle pour l’utiliser tous les jours.',
    ],
    results: [
      'Assistant personnel opérationnel utilisé au quotidien pour centraliser tâches et rappels.',
    ],
    demoType: 'jeffrey',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'mateconsulting-web',
    title: 'MATE Consulting : Gestion financière externalisée',
    subtitle: 'Site web dédié aux PME/TPE : précomptabilité, outils d’aide à la décision et prise de rendez-vous',
    category: 'Professionnel',
    period: 'Projet web en ligne',
    country: 'Cameroun',
    context: 'MATE Consulting · Conseil & Gestion financière',
    domain: 'Développement Web',
    summary:
      'Création du site web de MATE Consulting présentant l’externalisation de la gestion financière au format agile pour les PME et TPE, de la précomptabilité aux outils d’aide à la décision.',
    problem:
      'Présenter clairement une offre d’externalisation financière à destination des dirigeants de PME/TPE et permettre de réserver directement un échange de 30 minutes.',
    architectureSummary:
      'Site web responsive mettant en avant l’expertise de gestion financière externalisée, le détail des services et un appel direct à la prise de rendez-vous.',
    architectureLayers: [
      {
        layer: '01 · Positionnement',
        component: 'Offre PME / TPE',
        detail: 'Présentation structurée des services de précomptabilité et de pilotage financier.',
      },
      {
        layer: '02 · Interface',
        component: 'Front-end React responsive',
        detail: 'Navigation fluide sur ordinateur et mobile avec hiérarchie de lecture claire.',
      },
      {
        layer: '03 · Prise de contact',
        component: 'Réservation d’échange (30 min)',
        detail: 'Parcours direct permettant aux dirigeants de planifier un premier rendez-vous.',
      },
    ],
    technologies: ['React', 'JavaScript', 'Responsive Design', 'Vercel'],
    role: 'Conception et développement complet du site web de MATE Consulting déployé sur Vercel.',
    challenges: [
      'Rendre lisibles des services financiers techniques pour des dirigeants de PME et TPE.',
    ],
    results: [
      'Site web en ligne présentant l’offre de gestion financière externalisée et la réservation d’échange.',
    ],
    demoType: 'mateconsulting',
    repoUrl: 'https://github.com/boriska-mbilongo',
    liveUrl: 'https://mateconsulting-pi.vercel.app/',
    previewImage: '/assets/sites/mateconsulting.png',
  },
  {
    id: 'creative-glitch-mag',
    title: 'GLITCH Magazine : Média web éditorial',
    subtitle: 'Magazine numérique : volumes thématiques, journal, notes et courrier',
    category: 'Personnel',
    period: 'Projet web en ligne',
    country: 'France',
    context: 'GLITCH Magazine · Édition & Développement web',
    domain: 'Média Web & Design Éditorial',
    summary:
      'Création de GLITCH, mon magazine web éditorial organisé en volumes thématiques, sommaires, articles de journal, notes et espace de confidences en ligne.',
    problem:
      'Imaginer un espace éditorial personnel qui sorte du blog classique et adopte les codes d’un vrai magazine imprimé sur le web.',
    architectureSummary:
      'Application web organisée autour des numéros (« Volumes »), d’un sommaire structuré, d’articles de fond et d’un mur de notes.',
    architectureLayers: [
      {
        layer: '01 · Édition',
        component: 'Volumes & Sommaires',
        detail: 'Structuration par numéros et rubriques éditoriales (Système, Corps, Culture, Notes).',
      },
      {
        layer: '02 · Journal',
        component: 'Articles & Essais',
        detail: 'Mise en page magazine dédiée à la lecture de textes personnels et critiques.',
      },
      {
        layer: '03 · Interaction',
        component: 'Courrier & Confidences',
        detail: 'Espace permettant aux lecteurs d’écrire au magazine.',
      },
    ],
    technologies: ['React', 'Next.js', 'CSS Éditorial', 'Vercel'],
    role: 'Direction artistique, rédaction éditoriale et développement web complet du magazine.',
    challenges: [
      'Donner une vraie identité graphique de magazine papier à une application web rapide.',
    ],
    results: [
      'Magazine web en ligne avec plusieurs volumes, articles de journal et notes publiées.',
    ],
    demoType: 'creative-glitch',
    repoUrl: 'https://github.com/boriska-mbilongo',
    liveUrl: 'https://creative-glitch.vercel.app/',
    previewImage: '/assets/sites/creative-glitch.png',
  },
  {
    id: 'zone-groupe-app',
    title: 'Zone Groupe : Boutique d’électronique & négociation directe',
    subtitle: 'E-commerce : catalogue, négociation du prix en direct et commande WhatsApp',
    category: 'Personnel',
    period: 'Projet web en ligne',
    country: 'Cameroun',
    context: 'Zone Groupe · E-commerce & Négociation directe',
    domain: 'E-commerce & Application Web',
    summary:
      'Conception et développement de la boutique en ligne Zone Groupe (« L’électronique au juste prix »), intégrant un catalogue, un panier et une négociation directe du tarif avec un assistant ou le gérant avant finalisation sur WhatsApp.',
    problem:
      'Adapter la vente en ligne d’électronique aux habitudes locales où les clients souhaitent négocier le juste prix et finaliser rapidement la commande par message direct.',
    architectureSummary:
      'Boutique web responsive réunissant navigation catalogue (« Nouveautés », « Boutique »), gestion du panier et parcours de négociation + commande directe sur WhatsApp.',
    architectureLayers: [
      {
        layer: '01 · Catalogue & Panier',
        component: 'Vitrine e-commerce React',
        detail: 'Navigation directe entre nouveautés, fiches produits et panier.',
      },
      {
        layer: '02 · Négociation directe',
        component: 'Échange assistant ou gérant',
        detail: 'Discussion du prix pour chaque article afin d’obtenir le juste tarif avant validation.',
      },
      {
        layer: '03 · Finalisation',
        component: 'Commande directe WhatsApp',
        detail: 'Transmission simplifiée de la commande convenue vers le vendeur sur WhatsApp.',
      },
    ],
    technologies: ['React', 'JavaScript', 'E-commerce', 'WhatsApp Flow', 'Vercel'],
    role: 'Conception de l’expérience boutique et développement complet du site Zone Groupe déployé sur Vercel.',
    challenges: [
      'Intégrer une logique de négociation humaine et fluide directement dans un parcours e-commerce sobre.',
    ],
    results: [
      'Boutique en ligne opérationnelle avec catalogue, panier et finalisation directe via WhatsApp.',
    ],
    demoType: 'zone-groupe',
    repoUrl: 'https://github.com/boriska-mbilongo',
    liveUrl: 'https://zone-groupe-sigma.vercel.app/',
    previewImage: '/assets/sites/zone-groupe.png',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages-backend',
    title: 'Langages & Backend',
    description:
      'Développement d’API, scripts d’automatisation et applications métier robustes.',
    items: [
      { name: 'Python (Django, Flask, FastAPI, SQLAlchemy)', context: 'ENEO · ICAM · UMONS · Supply Chain' },
      { name: 'PyTorch, Vision par ordinateur & Active Learning', context: 'UMONS (DualSightNet, RT-DETR, YOLOv8n)' },
      { name: 'Java & Spring Boot', context: 'Applications métier · Valuator UGECAM' },
      { name: 'JavaScript / Node.js / Express', context: 'Services web & passerelles IoT' },
      { name: 'C / C++ / Bash', context: 'Microcontrôleurs PIC, Arduino & Linux' },
    ],
  },
  {
    id: 'iot-embedded',
    title: 'IoT, Embarqué & Temps réel',
    description:
      'Récupération de données sur le terrain, communication série et remontée vers le Cloud.',
    items: [
      { name: 'Edge-to-Cloud & Capteurs multimodaux', context: 'UMONS (surveillance ferroviaire)' },
      { name: 'Microcontrôleurs PIC, Arduino & Raspberry Pi', context: 'Sparte Robotics · Smart Home Access' },
      { name: 'MQTT & Liaison série UART', context: 'Échanges temps réel matériel / serveur' },
      { name: 'ROS & Gazebo', context: 'ICAM · Jumeaux numériques' },
    ],
  },
  {
    id: 'data-frontend',
    title: 'Données & Interfaces',
    description:
      'Stockage SQL/NoSQL adapté au besoin et écrans web sobres pour les utilisateurs.',
    items: [
      { name: 'PostgreSQL & SQL', context: 'ENEO · UGECAM · Supply Chain' },
      { name: 'MongoDB (NoSQL)', context: 'ICAM (jumeau numérique) · Supply Chain' },
      { name: 'React & Chart.js', context: 'Tableaux de bord et outils internes' },
    ],
  },
  {
    id: 'devops-quality',
    title: 'Déploiement, Tests & Méthodes',
    description:
      'Conteneurisation, tests automatisés et travail en équipe.',
    items: [
      { name: 'Docker & Docker Compose', context: 'ICAM · UMONS · Supply Chain' },
      { name: 'CI/CD, GitLab & Git', context: 'ENEO (-30 % temps de déploiement) · ICAM' },
      { name: 'pytest, JUnit, Postman & OpenAPI', context: 'Tests et vérification des API' },
      { name: 'Linux, Agile & Scrum', context: 'Environnements serveur et suivi de projet' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-minerve',
    type: 'Professionnel',
    country: 'Cameroun',
    period: '06/2024 – 09/2026',
    role: 'Consultante en transformation digitale (temps partiel)',
    organization: 'MINERVE Share and Grow',
    location: 'Cameroun',
    focus: 'Digitalisation & automatisation des processus métier',
    summary:
      'Accompagnement à la transformation digitale et conception d’outils applicatifs sur mesure pour structurer et automatiser les workflows internes.',
    deliverables: [
      'Conception et développement d’applications web métier avec API REST et bases PostgreSQL.',
      'Automatisation de tâches opérationnelles et préparation de solutions pour déploiement.',
    ],
    stack: ['Python', 'API REST', 'PostgreSQL', 'Automatisation'],
  },
  {
    id: 'exp-umons-tfe',
    type: 'Académique',
    country: 'Belgique',
    period: '2026 · Erasmus',
    role: 'Master Ingénieur Civil en Informatique & Gestion : Track Sentry Vision (TFE)',
    organization: 'UMONS · Faculté Polytechnique (Polytech Mons)',
    location: 'Mons, Belgique',
    focus: 'Track Sentry Vision · Surveillance ferroviaire par Deep Learning (DualSightNet & RT-DETR)',
    summary:
      'Travail de Fin d’Études mené à Mons sous la direction du Prof. Saïd Mahmoudi et Tanguy Vansnick sur le projet de surveillance ferroviaire Track Sentry Vision : classification des défauts de surface du rail et détection d’obstacles temps réel.',
    deliverables: [
      'DualSightNet (ResNet50 + Swin-Tiny + fusion ECA / gate) : 98,0 % Balanced Accuracy sur RailSurface-7 (8 classes), +23,8 pts F1 sur Joints et +23,6 pts sur Grooves.',
      'RT-DETR + Active Learning (Diversity Sampling K-Means) : 90,8 % mAP@50:95 en 6 itérations (1 050 images) à 55 FPS, réduisant de 30 à 40 % l’effort d’annotation.',
      'Analyse croisée vues frontale/verticale, études d’ablation et caractérisation du reality gap synthétique → réel.',
    ],
    stack: ['Python', 'PyTorch 2.0', 'CUDA', 'ResNet50', 'Swin-Tiny', 'RT-DETR', 'Active Learning'],
  },
  {
    id: 'exp-umons',
    type: 'Professionnel',
    country: 'Belgique',
    period: '02/2026 – 07/2026',
    role: 'Ingénieure logicielle : Track Sentry Vision (Edge-to-Cloud)',
    organization: 'UMONS (Université de Mons)',
    location: 'Mons, Belgique',
    focus: 'Track Sentry Vision · Surveillance ferroviaire Edge-to-Cloud temps réel',
    summary:
      'Développement des modules logiciels Python de la plateforme de surveillance ferroviaire Track Sentry Vision, du terrain (capteurs multimodaux) jusqu’au Cloud.',
    deliverables: [
      'Intégration de capteurs multimodaux (vibrations, acoustique, température) et prise en charge de leur transmission temps réel.',
      'Écriture de composants Python modulaires pour synchroniser, traiter et analyser les signaux capteurs.',
    ],
    stack: ['Python', 'Edge-to-Cloud', 'Capteurs multimodaux', 'Temps réel', 'MQTT', 'Docker'],
  },
  {
    id: 'exp-icam-research',
    type: 'Académique',
    country: 'France',
    period: '09/2024 – 02/2025',
    role: 'Ingénieure de recherche : Jumeau numérique (Salle LIFE) & Projets associés',
    organization: 'ICAM (Institut Catholique d’Arts et Métiers)',
    location: 'Grand Paris Sud, France',
    focus: 'Salle LIFE (SCRAM, RabbitMQ, ROS/Gazebo, Flask, MongoDB) · SupplyChain (GRAI) · Valuator (UGECAM)',
    summary:
      'Mission scientifique de recherche de 5 mois à l’ICAM Grand Paris Sud Europe (supervision M. Paul-Eric Dossou) : conception et implémentation du jumeau numérique de la plateforme robotique LIFE, ainsi que des applications analogues SupplyChain et Valuator.',
    deliverables: [
      'Jumeau numérique de la salle LIFE : intégration de SCRAM via RabbitMQ (Producer/Consumer), interfaçage ROS/Gazebo & FlexSim, API Python/Flask, MongoDB, moteur d’inférences et tableaux de bord temps réel.',
      'SupplyChain (méthode GRAI) : outil d’analyse de performance logistique multi-services (FastAPI, Flask, PostgreSQL/MongoDB, Docker) avec indicateurs KPI et intégration ERP/WMS.',
      'Valuator (UGECAM) : application d’évaluation des équipements médicaux avec accès par rôle (employés / patients), formulaires standardisés et tableaux de bord de suivi.',
      'Reproductibilité Git/Docker, documentation technique et co-écriture d’un chapitre scientifique publié chez Springer Nature (FAIM 2025).',
    ],
    stack: ['Python', 'Flask', 'RabbitMQ', 'ROS', 'Gazebo', 'MongoDB', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    id: 'exp-eneo',
    type: 'Professionnel',
    country: 'Cameroun',
    period: '01/2024 – 03/2024',
    role: 'Développeuse full stack (DISI / DASI · BSOF)',
    organization: 'ENEO Cameroon',
    location: 'Douala, Cameroun',
    focus: 'Application de réconciliation des ventes en 4 modules (Django, PostgreSQL, UML/Merise, CI/CD)',
    summary:
      'Stage au sein de la Direction de l’Innovation et des Systèmes d’Information (DISI / DASI, équipe BSOF) : conception et réalisation d’une application de réconciliation des ventes sous Jira Software, modélisée en UML et Merise.',
    deliverables: [
      'Architecture en 4 modules : importation CSV avec mappage/contrôle, rapprochement automatique & assisté par lots, alertes sur anomalies/doublons et rapports avec piste d’audit.',
      'Gestion de 3 profils d’utilisation (Administrateur, Utilisateur standard, Partenaire) et automatisation des rapprochements (-80 % d’erreurs de traitement).',
      'Pipelines CI/CD sous GitLab et optimisation des requêtes PostgreSQL (-30 % de temps de déploiement, +15 % de performances).',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'UML', 'Merise', 'Jira', 'CI/CD', 'GitLab'],
  },
  {
    id: 'exp-sparte',
    type: 'Professionnel',
    country: 'Cameroun',
    period: '05/2023 – 07/2023',
    role: 'Stagiaire IoT et systèmes embarqués',
    organization: 'Sparte Robotics',
    location: 'Douala, Cameroun',
    focus: 'Contrôle d’accès biométrique sur microcontrôleur PIC',
    summary:
      'Réalisation d’un système d’accès biométrique sur microcontrôleur PIC, entre montage électronique et programmation C.',
    deliverables: [
      'Câblage du capteur biométrique sur microcontrôleur PIC et tests de fonctionnement complets.',
    ],
    stack: ['Microcontrôleur PIC', 'C / C++', 'Communication série', 'IoT'],
  },
  {
    id: 'exp-ucac-icam',
    type: 'Académique',
    country: 'France',
    period: '2021 – 2026',
    role: 'Diplôme d’ingénieur en informatique et management des systèmes d’information (Titre CTI)',
    organization: 'UCAC-ICAM',
    location: 'Douala, Cameroun & Grand Paris Sud, France',
    focus: 'Génie logiciel, Architectures distribuées, IoT, Réseaux & Management SI',
    summary:
      'Cycle ingénieur de 5 ans reconnu par la CTI, débuté à Douala puis poursuivi en France à l’ICAM Grand Paris Sud avant une mobilité Erasmus à l’UMONS (Belgique).',
    deliverables: [
      'Conception logicielle et architectures distribuées : réalisation de la plateforme Supply Chain multi-services (FastAPI, Flask, React, PostgreSQL + MongoDB, Docker Compose).',
      'Systèmes d’information & qualité : modélisation relationnelle SQL / NoSQL, tests automatisés (pytest, JUnit, Postman, OpenAPI) et conduite de projets en Agile / Scrum.',
      'Réseaux, Linux & systèmes connectés : administration Linux, protocoles séries / MQTT et obtention de la certification Cisco CCNA durant le cursus.',
      'Recherche appliquée & valorisation scientifique : semestre de recherche à l’ICAM Grand Paris Sud et publication d’un chapitre chez Springer (FAIM 2025).',
    ],
    stack: ['Python', 'FastAPI', 'Flask', 'Java', 'Spring Boot', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Agile / Scrum'],
  },
];

export const PUBLICATION = {
  title:
    'Towards Sustainable Digital Transformation in SMEs: Integrating IoT, Digital Twins, and AI for Enhanced Manufacturing Efficiency',
  frenchSubtitle:
    'Vers une transformation numérique durable des PME : intégration de l’IoT, des jumeaux numériques et de l’IA pour l’efficience industrielle',
  authors: 'Zeina Elrawashdeh, Paul-Eric Dossou & Boriska Mbilongo',
  venue: 'Actes de FAIM 2025 (Flexible Automation and Intelligent Manufacturing)',
  publisher: 'Springer Nature Switzerland (2025)',
  institution: 'ICAM Grand Paris Sud',
  abstract:
    'Publié dans les actes de la conférence internationale FAIM 2025 chez Springer, ce chapitre examine comment les PME industrielles peuvent associer capteurs IoT, jumeaux numériques et intelligence artificielle pour anticiper les pannes et gagner en sobriété.',
  axes: [
    {
      title: '01. Capter les données au plus près des machines',
      content:
        'Récupérer les mesures utiles sur des équipements déjà en place, sans bloquer la ligne de production.',
    },
    {
      title: '02. Construire un jumeau numérique modulaire',
      content:
        'Connecter les mesures réelles ou simulées à des services web simples (Flask, API REST, MongoDB, Docker) pour suivre l’état des machines.',
    },
    {
      title: '03. Rendre la maintenance prédictive accessible aux PME',
      content:
        'Limiter les arrêts imprévus et mieux utiliser les ressources grâce à des outils adaptés à la taille des PME.',
    },
  ],
  bibtex: `@incollection{elrawashdeh2025towards,
  author    = {Elrawashdeh, Zeina and Dossou, Paul-Eric and Mbilongo, Boriska},
  title     = {Towards Sustainable Digital Transformation in SMEs: Integrating IoT, Digital Twins, and AI for Enhanced Manufacturing Efficiency},
  booktitle = {Flexible Automation and Intelligent Manufacturing (FAIM 2025)},
  publisher = {Springer Nature Switzerland},
  year      = {2025}
}`,
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'CCNA : Cisco Certified Network Associate',
    issuer: 'Cisco Networking Academy',
    date: 'Février 2023',
  },
  {
    name: 'Internet of Things Fundamentals (IoT)',
    issuer: 'Udemy',
    date: 'Février 2024',
  },
  {
    name: 'TOEIC : Anglais B2 (niveau professionnel)',
    issuer: 'ETS (Educational Testing Service)',
    date: 'Février 2024',
  },
];

export const ENGAGEMENTS: EngagementItem[] = [
  {
    id: 'girls-in-ict',
    category: 'Transmission & Mentorat',
    title: 'Intervenante · Girls in ICT Day',
    context: 'Institut français du Cameroun, Douala · 27 avril 2024',
    detail:
      'Échanges avec des lycéennes et étudiantes autour des métiers du numérique, du code et de l’ingénierie.',
  },
  {
    id: 'you-give',
    category: 'Engagement associatif',
    title: 'You Give : « Un Cartable, Un Sourire »',
    context: 'Édition 2026 · 400 000 FCFA collectés',
    detail:
      'Communication et collecte de fonds ayant permis d’offrir du matériel scolaire à 22 enfants pour la rentrée.',
  },
  {
    id: 'horty-carriere-solidaire',
    category: 'Engagement social',
    title: 'Horty Carrière Solidaire',
    context: 'Membre · Engagement social et solidaire',
    detail:
      'Participation aux initiatives solidaires et d’accompagnement portées par Horty Carrière Solidaire.',
  },
  {
    id: 'comm-digital',
    category: 'Communication digitale',
    title: 'Likabo · Djine Care · Linnov',
    context: 'Création de contenus & animation de communautés',
    detail:
      'Coup de main sur la création de contenus et la mise en avant de projets locaux en ligne.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Développement web & API backend',
    summary:
      'Création d’applications métier et d’API REST en Python (Django, Flask, FastAPI), Java / Spring Boot ou Node.js, avec bases PostgreSQL / MongoDB et interfaces React.',
    reference: 'ENEO (réconciliation des ventes) · Valuator UGECAM · MATE Consulting · Wuendjo · GLITCH · Zone Groupe',
  },
  {
    number: '02',
    title: 'IoT, Embarqué & Edge-to-Cloud',
    summary:
      'Intégration de capteurs sur microcontrôleurs (PIC, Arduino, Raspberry Pi), liaison série / MQTT et traitement temps réel de données terrain vers le Cloud.',
    reference: 'UMONS · Sparte Robotics · Smart Home Access',
  },
  {
    number: '03',
    title: 'Docker, CI/CD & Jumeaux numériques',
    summary:
      'Conteneurisation d’environnements avec Docker Compose, mise en place de pipelines CI/CD GitLab, tests automatisés et ponts applicatifs pour jumeaux numériques (ROS / Gazebo).',
    reference: 'ENEO (-30 % déploiement) · ICAM Grand Paris Sud',
  },
  {
    number: '04',
    title: 'Digitalisation & Outils de suivi métier',
    summary:
      'Recueil du besoin sur le terrain, automatisation des contrôles et conception de plateformes de suivi prêtes pour les équipes opérationnelles.',
    reference: 'MINERVE Share and Grow · Automatisation métier',
  },
];

