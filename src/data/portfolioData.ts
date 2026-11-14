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
    | 'umons-rail'
    | 'aquasafe'
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
  title: 'Ingénieure informatique — Développement applicatif, IoT & Cloud',
  school: 'UCAC-ICAM · Diplôme d’ingénieur en informatique et management des systèmes d’information (CTI, 2026)',
  location: 'Cameroun.France.Belgique · Mobilité internationale',
  phone: '+237 657 571 091',
  email: 'danya-maylis.mbilongo@2026.icam.fr',
  githubUrl: 'https://github.com/boriska-mbilongo',
  linkedinUrl: 'https://www.linkedin.com/in/boriska-mbilongo',
  cvPdfUrl: '/assets/aistudio/CV_Boriska_Mbilongo_ATS_v5_e90929ca.pdf',
  heroGreeting: 'Boriska Mbilongo · Ingénieure informatique',
  heroHeadline:
    'Développer des logiciels fiables, des objets connectés jusqu’au Cloud.',
  bioLead:
    'Ingénieure diplômée de l’UCAC-ICAM (titre CTI, 2026), j’ai travaillé et étudié entre le Cameroun, la France et la Belgique. J’aime partir d’un problème concret  vérifier des données sensibles, cartographier des forages ou suivre l’état d’un rail  pour écrire un logiciel clair et utile sur le terrain.',
  bioSecondary:
    'Je travaille principalement en Python (Django, Flask, FastAPI), Java et Node.js/React, avec une vraie curiosité pour l’embarqué (microcontrôleurs PIC, Arduino, Raspberry Pi), les bases PostgreSQL/MongoDB et Docker.',
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
    id: 'umons-rail-edge-cloud',
    title: 'Surveillance ferroviaire intelligente',
    subtitle: 'Acquisition temps réel et analyse de capteurs multimodaux',
    category: 'Professionnel',
    period: '02/2026 – 07/2026',
    country: 'Belgique',
    context: 'UMONS (Université de Mons) · Mons, Belgique',
    domain: 'Edge-to-Cloud & Temps Réel',
    summary:
      'Développement de modules Python pour une plateforme de surveillance ferroviaire reliant des capteurs de terrain au Cloud en temps réel.',
    problem:
      'Sur les rails, les capteurs envoient en continu des mesures très différentes (vibrations, acoustique, température). Il fallait récupérer ces flux au plus près du terrain, les transmettre sans délai et les analyser proprement en Python.',
    architectureSummary:
      'Une chaîne en trois étapes : lecture des capteurs près du terrain, remontée continue des mesures vers le serveur, puis traitement et analyse en Python.',
    architectureLayers: [
      {
        layer: '01 · Terrain',
        component: 'Capteurs multimodaux',
        detail: 'Lecture continue des signaux vibratoires, thermiques et acoustiques avec horodatage.',
      },
      {
        layer: '02 · Transmission',
        component: 'Flux Edge-to-Cloud temps réel',
        detail: 'Envoi régulier des mesures vers la plateforme centrale malgré les variations réseau.',
      },
      {
        layer: '03 · Traitement',
        component: 'Modules d’analyse Python',
        detail: 'Scripts modulaires chargés de nettoyer, croiser et interpréter les signaux reçus.',
      },
    ],
    technologies: ['Python', 'Edge-to-Cloud', 'Capteurs multimodaux', 'Temps réel', 'MQTT', 'Docker'],
    role: 'J’ai écrit les composants Python de traitement des données capteurs, intégré les flux multimodaux et travaillé sur leur transmission en temps réel.',
    challenges: [
      'Aligner dans le temps des capteurs qui n’envoient pas leurs données au même rythme.',
      'Garder un délai court et stable entre la mesure sur place et l’analyse côté serveur.',
      'Rendre le code Python simple à relire et à tester pour l’équipe de recherche.',
    ],
    results: [
      'Modules Python intégrés dans la plateforme de surveillance de l’UMONS.',
      'Chaîne complète fonctionnelle de la mesure capteur jusqu’à l’analyse des signaux.',
    ],
    demoType: 'umons-rail',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'aquasafe-minerve',
    title: 'AquaSafe — Suivi national des puits et forages',
    subtitle: 'Recensement, cartographie, certification et dossier soumis au MINEE',
    category: 'Professionnel',
    period: '06/2024 – 09/2026',
    country: 'Cameroun',
    context: 'MINERVE Share and Grow · Cameroun',
    domain: 'Outil métier & Transformation digitale',
    summary:
      'Conception et développement d’AquaSafe, une plateforme pour recenser, cartographier, certifier et suivre l’état des puits et forages, préparée pour le Ministère de l’Eau et de l’Énergie (MINEE).',
    problem:
      'Sans outil commun, il reste difficile de localiser précisément chaque point d’eau, de vérifier s’il est certifié et de suivre son entretien dans la durée.',
    architectureSummary:
      'Une application web appuyée sur une API Python, une base PostgreSQL géolocalisée et un parcours clair de validation pour certifier chaque ouvrage.',
    architectureLayers: [
      {
        layer: '01 · Terrain',
        component: 'Recensement & géolocalisation',
        detail: 'Saisie des coordonnées GPS et des informations techniques de chaque puits ou forage.',
      },
      {
        layer: '02 · Validation',
        component: 'Parcours de certification',
        detail: 'Vérification des critères de conformité et suivi des mises à jour dans le temps.',
      },
      {
        layer: '03 · Suivi public',
        component: 'Cartographie & dossier MINEE',
        detail: 'Vue d’ensemble préparée pour accompagner la présentation auprès du MINEE.',
      },
    ],
    technologies: ['Python', 'API REST', 'PostgreSQL', 'React', 'Automatisation'],
    role: 'Comme consultante en transformation digitale, j’ai conçu et développé AquaSafe, puis participé à la préparation du dossier soumis au MINEE.',
    challenges: [
      'Adapter un processus administratif complexe en écrans simples à prendre en main sur le terrain.',
      'Conserver un historique clair de chaque certification et contrôle.',
    ],
    results: [
      'Plateforme AquaSafe conçue et développée (recensement, carte, certification et suivi).',
      'Dossier préparé et soumis au Ministère de l’Eau et de l’Énergie (MINEE) pour un déploiement national.',
    ],
    demoType: 'aquasafe',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'eneo-rapprochement',
    title: 'ENEO — Logiciel de réconciliation des ventes',
    subtitle: 'Application Django / PostgreSQL et automatisation CI/CD',
    category: 'Professionnel',
    period: '01/2024 – 03/2024',
    country: 'Cameroun',
    context: 'ENEO · Douala, Cameroun',
    domain: 'Développement Full Stack & DevOps',
    summary:
      'Conception et développement d’un logiciel de réconciliation des ventes sous Django et PostgreSQL, avec mise en place de pipelines CI/CD.',
    problem:
      'Comparer à la main les données de ventes et les encaissements prenait beaucoup de temps et entraînait des erreurs. Les déploiements de l’application restaient eux aussi manuels.',
    architectureSummary:
      'Un logiciel web Django adossé à PostgreSQL pour réconcilier automatiquement les ventes, complété par des pipelines CI/CD sur GitLab.',
    architectureLayers: [
      {
        layer: '01 · Import',
        component: 'Contrôle des fichiers sous Django',
        detail: 'Vérification du format et nettoyage des écritures avant la réconciliation.',
      },
      {
        layer: '02 · Réconciliation',
        component: 'Moteur Python & PostgreSQL',
        detail: 'Croisement automatique des ventes et signalement immédiat des écarts.',
      },
      {
        layer: '03 · Livraison',
        component: 'Pipelines CI/CD',
        detail: 'Lancement automatique des tests et du déploiement à chaque évolution.',
      },
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'CI/CD', 'GitLab', 'Docker'],
    role: 'J’ai développé le logiciel de réconciliation des ventes en Django / PostgreSQL et configuré les pipelines CI/CD.',
    challenges: [
      'Traiter des fichiers de ventes aux formats variés sans bloquer la réconciliation.',
      'Alléger certaines requêtes PostgreSQL pour accélérer l’affichage des bilans.',
    ],
    results: [
      '80 % d’erreurs de traitement en moins grâce à la réconciliation automatisée des ventes.',
      '30 % de temps gagné sur les déploiements avec les pipelines CI/CD.',
      '15 % de performances applicatives en plus.',
    ],
    demoType: 'eneo',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'digital-twin-predictive',
    title: 'Jumeau numérique & Maintenance prédictive',
    subtitle: 'Application Flask / MongoDB, simulation ROS / Gazebo et publication Springer',
    category: 'Académique',
    period: '09/2024 – 02/2025',
    country: 'France',
    context: 'ICAM Grand Paris Sud · France',
    domain: 'Recherche & Industrie 4.0',
    summary:
      'Réalisation d’un jumeau numérique pour la maintenance prédictive avec Flask, MongoDB et Docker, en lien avec la simulation sous ROS et Gazebo.',
    problem:
      'Relier des machines ou des cellules simulées à une interface web claire demande de faire dialoguer des outils de robotique avec des services web classiques.',
    architectureSummary:
      'Une passerelle Python / Flask exposant les données de simulation ROS/Gazebo via API REST, avec MongoDB pour garder l’historique et Docker pour tout lancer facilement.',
    architectureLayers: [
      {
        layer: '01 · Simulation',
        component: 'ROS & Gazebo',
        detail: 'Comportement de la cellule robotisée et remontée continue des mesures.',
      },
      {
        layer: '02 · Services web',
        component: 'Python / Flask',
        detail: 'Exposition des indicateurs d’état via des routes API simples à interroger.',
      },
      {
        layer: '03 · Historique',
        component: 'MongoDB, Git & Docker',
        detail: 'Enregistrement des mesures dans le temps et environnement reproductible.',
      },
    ],
    technologies: ['Python', 'Flask', 'MongoDB', 'API REST', 'ROS', 'Gazebo', 'Docker', 'Git'],
    role: 'Comme ingénieure de recherche à l’ICAM Grand Paris Sud, j’ai codé les applications web Flask/MongoDB, le jumeau numérique orienté services et rédigé la documentation.',
    challenges: [
      'Transmettre les données entre ROS/Gazebo et le serveur Flask de façon fluide et fiable.',
      'Permettre à n’importe quel membre de l’équipe de relancer le projet avec Docker et Git.',
    ],
    results: [
      'Jumeau numérique fonctionnel dédié à la maintenance prédictive.',
      'Travaux valorisés par un chapitre co-écrit et publié chez Springer (FAIM 2025).',
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
    title: 'Supply Chain — Plateforme multi-services Docker',
    subtitle: 'FastAPI, Flask, PostgreSQL et MongoDB',
    category: 'Académique',
    period: '2024 – 2025',
    country: 'France',
    context: 'UCAC-ICAM · Projet d’ingénierie',
    domain: 'Cloud & Données Hybrides',
    summary:
      'Application logistique découpée en plusieurs services Python (FastAPI et Flask), utilisant PostgreSQL pour les commandes, MongoDB pour les événements et Docker Compose pour l’ensemble.',
    problem:
      'Dans le suivi logistique, les commandes exigent une base stricte (SQL) tandis que les traces d’expédition évoluent vite (NoSQL). Il fallait faire cohabiter les deux proprement.',
    architectureSummary:
      'Chaque brique tourne dans son propre conteneur Docker : FastAPI pour l’API principale, Flask pour la logique métier, PostgreSQL et MongoDB pour les données.',
    architectureLayers: [
      {
        layer: '01 · Entrée API',
        component: 'FastAPI',
        detail: 'Vérification des requêtes entrantes et documentation interactive automatique.',
      },
      {
        layer: '02 · Métier & Écrans',
        component: 'Flask & React',
        detail: 'Règles de suivi logistique et interface web de consultation.',
      },
      {
        layer: '03 · Persistance',
        component: 'PostgreSQL + MongoDB + Docker',
        detail: 'Double stockage SQL/NoSQL lancé d’une seule commande avec Docker Compose.',
      },
    ],
    technologies: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'Docker Compose', 'React'],
    role: 'Découpage des services, écriture des API Python et configuration de Docker Compose.',
    challenges: [
      'Garder les deux bases synchronisées lors de la création ou du suivi d’une commande.',
    ],
    results: [
      'Application complète conteneurisée, prête à démarrer sur n’importe quel poste.',
    ],
    demoType: 'supply-chain',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'valuator-ugecam',
    title: 'Valuator UGECAM — Outil d’évaluation métier',
    subtitle: 'Application de saisie et de suivi multi-critères',
    category: 'Professionnel',
    period: '2024',
    country: 'France',
    context: 'UGECAM · Secteur Santé & Médico-Social',
    domain: 'Développement Applicatif',
    summary:
      'Outil web conçu pour aider les équipes à remplir leurs grilles d’évaluation, calculer automatiquement les résultats pondérés et retrouver l’historique.',
    problem:
      'Les évaluations passaient par des fichiers dispersés, ce qui compliquait la consolidation et la comparaison d’une année sur l’autre.',
    architectureSummary:
      'Une interface React guidant la saisie critère par critère, reliée à un backend Java/Python qui calcule les scores et les enregistre en base PostgreSQL.',
    architectureLayers: [
      {
        layer: '01 · Interface',
        component: 'Écrans React',
        detail: 'Formulaires guidés par critère et synthèse claire des résultats.',
      },
      {
        layer: '02 · Calculs',
        component: 'Services Java / Python',
        detail: 'Application automatique des coefficients définis par les équipes métier.',
      },
      {
        layer: '03 · Mémoire',
        component: 'PostgreSQL',
        detail: 'Sauvegarde des grilles de référence et des évaluations passées.',
      },
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'React', 'PostgreSQL'],
    role: 'Échanges avec les utilisateurs pour formaliser les grilles de calcul et développement de l’application.',
    challenges: [
      'Respecter à la lettre les règles de calcul tout en gardant des écrans agréables au quotidien.',
    ],
    results: [
      'Un outil unique qui simplifie la saisie et le suivi des évaluations.',
    ],
    demoType: 'ugecam',
    repoUrl: 'https://github.com/boriska-mbilongo',
  },
  {
    id: 'smart-home-access',
    title: 'Smart Home Access — Contrôle d’accès IoT',
    subtitle: 'Arduino / Raspberry Pi, MQTT, Node.js et React',
    category: 'Personnel',
    period: '2024',
    country: 'France',
    context: 'Projet personnel · IoT & Web',
    domain: 'IoT & Web',
    summary:
      'Prototype personnel pour ouvrir ou bloquer un accès à distance depuis un tableau de bord web relié à un Arduino et un Raspberry Pi via MQTT.',
    problem:
      'Je voulais tester concrètement la liaison complète entre un lecteur physique léger, un serveur Node.js et une interface web capable de révoquer un badge en direct.',
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
    role: 'Projet personnel mené seule du câblage matériel jusqu’à l’interface React.',
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
    title: 'Wuendjo — Organisation de voyage (groupe ou solo)',
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
  },
  {
    id: 'jeffrey-assistant',
    title: 'Jeffrey — Mon assistant personnel',
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
    title: 'MATE Consulting — Gestion financière externalisée',
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
  },
  {
    id: 'creative-glitch-mag',
    title: 'GLITCH Magazine — Média web éditorial',
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
  },
  {
    id: 'zone-groupe-app',
    title: 'Zone Groupe — Plateforme web collaborative',
    subtitle: 'Application web conçue et déployée en ligne',
    category: 'Personnel',
    period: 'Projet web en ligne',
    country: 'France',
    context: 'Zone Groupe · Développement web',
    domain: 'Application Web',
    summary:
      'Conception et développement de l’application web Zone Groupe, déployée et accessible en ligne sur Vercel.',
    problem:
      'Mettre en place un espace web dédié regroupant les fonctionnalités et échanges d’un groupe dans une interface directe.',
    architectureSummary:
      'Application web front-end moderne déployée en continu sur Vercel.',
    architectureLayers: [
      {
        layer: '01 · Interface',
        component: 'Application web React',
        detail: 'Interface responsive conçue pour une navigation directe.',
      },
      {
        layer: '02 · Déploiement',
        component: 'Hébergement Vercel',
        detail: 'Mise en ligne et déploiement automatisé de la plateforme.',
      },
    ],
    technologies: ['React', 'JavaScript', 'HTML / CSS', 'Vercel'],
    role: 'Conception et développement complet de l’application Zone Groupe.',
    challenges: [
      'Assurer une mise en ligne fiable et fluide sur ordinateur comme sur mobile.',
    ],
    results: [
      'Application web Zone Groupe déployée et accessible en ligne.',
    ],
    demoType: 'zone-groupe',
    repoUrl: 'https://github.com/boriska-mbilongo',
    liveUrl: 'https://zone-groupe-sigma.vercel.app/',
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
      { name: 'PostgreSQL & SQL', context: 'ENEO · AquaSafe · Supply Chain' },
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
    focus: 'AquaSafe · Digitalisation & automatisation',
    summary:
      'Conception et développement d’AquaSafe, plateforme de recensement, cartographie, certification et suivi des puits et forages.',
    deliverables: [
      'Conception et développement d’AquaSafe de bout en bout.',
      'Préparation et soumission du projet au MINEE (Ministère de l’Eau et de l’Énergie) en vue d’un déploiement national.',
      'Automatisation de tâches métier sur d’autres projets internes.',
    ],
    stack: ['Python', 'API REST', 'PostgreSQL', 'Cartographie'],
  },
  {
    id: 'exp-umons',
    type: 'Professionnel',
    country: 'Belgique',
    period: '02/2026 – 07/2026',
    role: 'Ingénieure logicielle',
    organization: 'UMONS (Université de Mons)',
    location: 'Mons, Belgique',
    focus: 'Surveillance ferroviaire intelligente · Edge-to-Cloud',
    summary:
      'Développement de modules logiciels Python pour une plateforme de surveillance ferroviaire reliée du terrain au Cloud.',
    deliverables: [
      'Intégration de capteurs multimodaux et transmission des données en temps réel.',
      'Écriture de composants Python pour traiter et analyser les mesures capteurs.',
    ],
    stack: ['Python', 'Edge-to-Cloud', 'Capteurs multimodaux', 'Temps réel'],
  },
  {
    id: 'exp-icam-research',
    type: 'Académique',
    country: 'France',
    period: '09/2024 – 02/2025',
    role: 'Ingénieure de recherche — Jumeaux numériques',
    organization: 'ICAM (Institut Catholique d’Arts et Métiers)',
    location: 'Grand Paris Sud, France',
    focus: 'Flask, MongoDB, API REST & Maintenance prédictive',
    summary:
      'Développement d’applications web pour la recherche et mise en place d’un jumeau numérique appliqué à la maintenance prédictive.',
    deliverables: [
      'Applications web avec Flask, MongoDB et API REST.',
      'Jumeau numérique orienté services pour la maintenance prédictive.',
      'Environnement Git / Docker et rédaction de la documentation technique.',
    ],
    stack: ['Python', 'Flask', 'MongoDB', 'API REST', 'Docker', 'Git'],
  },
  {
    id: 'exp-eneo',
    type: 'Professionnel',
    country: 'Cameroun',
    period: '01/2024 – 03/2024',
    role: 'Développeuse full stack',
    organization: 'ENEO',
    location: 'Douala, Cameroun',
    focus: 'Django, PostgreSQL, Réconciliation des ventes & CI/CD',
    summary:
      'Développement d’un logiciel de réconciliation des ventes sous Django et PostgreSQL.',
    deliverables: [
      'Réconciliation automatisée des ventes : -80 % d’erreurs de traitement.',
      'Pipelines CI/CD : -30 % de temps de déploiement et +15 % de performances applicatives.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'CI/CD', 'GitLab'],
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
    focus: 'Génie logiciel, Systèmes d’information, IoT & Cloud',
    summary:
      'Formation d’ingénieure CTI répartie entre le Cameroun et la France, prolongée par une expérience en Belgique.',
    deliverables: [
      'Coautrice d’un chapitre scientifique publié chez Springer (FAIM 2025).',
      'Projets d’architecture logicielle (Supply Chain Docker) et de systèmes connectés.',
    ],
    stack: ['Python', 'Java', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Agile / Scrum'],
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
    name: 'CCNA — Cisco Certified Network Associate',
    issuer: 'Cisco Networking Academy',
    date: 'Février 2023',
  },
  {
    name: 'Internet of Things Fundamentals (IoT)',
    issuer: 'Udemy',
    date: 'Février 2024',
  },
  {
    name: 'TOEIC — Anglais B2 (niveau professionnel)',
    issuer: 'ETS (Educational Testing Service)',
    date: 'Février 2024',
  },
];

export const ENGAGEMENTS: EngagementItem[] = [
  {
    id: 'girls-in-ict',
    category: 'Transmission & Mentorat',
    title: 'Intervenante — Girls in ICT Day',
    context: 'Institut français du Cameroun, Douala · 27 avril 2024',
    detail:
      'Échanges avec des lycéennes et étudiantes autour des métiers du numérique, du code et de l’ingénierie.',
  },
  {
    id: 'you-give',
    category: 'Engagement associatif',
    title: 'You Give — « Un Cartable, Un Sourire »',
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
      'Recueil du besoin sur le terrain, automatisation des contrôles et conception de plateformes de suivi, cartographie ou certification prêtes à être présentées aux décideurs.',
    reference: 'MINERVE / AquaSafe (dossier MINEE)',
  },
];

