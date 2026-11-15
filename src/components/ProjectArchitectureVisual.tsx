import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectArchitectureVisualProps {
  projectId: string;
  variant?: 'dark' | 'light';
  previewImage?: string;
  liveUrl?: string;
  title?: string;
}

const DEFAULT_SITE_IMAGES: Record<string, { src: string; url: string; alt: string }> = {
  'wuendjo-travel': {
    src: '/assets/sites/wuendjo.png',
    url: 'https://wuendjo.vercel.app/',
    alt: 'Capture d’écran de l’interface Wuendjo : organisation de voyage en groupe ou solo',
  },
  'mateconsulting-web': {
    src: '/assets/sites/mateconsulting.png',
    url: 'https://mateconsulting-pi.vercel.app/',
    alt: 'Capture d’écran du site web MATE Consulting : gestion financière externalisée',
  },
  'creative-glitch-mag': {
    src: '/assets/sites/creative-glitch.png',
    url: 'https://creative-glitch.vercel.app/',
    alt: 'Capture d’écran du magazine web GLITCH : média éditorial',
  },
  'zone-groupe-app': {
    src: '/assets/sites/zone-groupe.png',
    url: 'https://zone-groupe-sigma.vercel.app/',
    alt: 'Capture d’écran de la boutique en ligne Zone Groupe : électronique et négociation directe',
  },
};

const META_LABEL: Record<string, { place: string; domain: string }> = {
  'umons-track-sentry-vision': {
    place: 'Polytech Mons · UMONS',
    domain: 'Edge-to-Cloud · DualSightNet & RT-DETR',
  },
  'eneo-rapprochement': { place: 'Douala · ENEO (BSOF)', domain: 'Réconciliation · 4 modules' },
  'digital-twin-predictive': {
    place: 'Grand Paris Sud · Salle LIFE',
    domain: 'Flask · RabbitMQ · ROS / Gazebo',
  },
  'sparte-biometric-pic': { place: 'Douala · Sparte', domain: 'Embarqué & Accès' },
  'supply-chain-microservices': {
    place: 'Grand Paris Sud · ICAM',
    domain: 'Méthode GRAI · Docker',
  },
  'valuator-ugecam': { place: 'Grand Paris Sud · UGECAM', domain: 'Évaluation · Employés & Patients' },
  'smart-home-access': { place: 'ICAM · Projet académique', domain: 'IoT & Domotique' },
  'wuendjo-travel': { place: 'wuendjo.vercel.app', domain: 'Voyage · Groupe & Solo' },
  'jeffrey-assistant': { place: 'Projet personnel', domain: 'Assistant personnel' },
  'mateconsulting-web': { place: 'mateconsulting-pi.vercel.app', domain: 'Gestion financière' },
  'creative-glitch-mag': { place: 'creative-glitch.vercel.app', domain: 'Magazine web' },
  'zone-groupe-app': { place: 'zone-groupe-sigma.vercel.app', domain: 'E-commerce · Négociation' },
};

export function ProjectArchitectureVisual({
  projectId,
  variant = 'dark',
  previewImage,
  liveUrl,
  title,
}: ProjectArchitectureVisualProps) {
  const [imgError, setImgError] = useState(false);
  const isDark = variant === 'dark';
  const strokeLine = isDark ? 'rgba(238,230,216,0.38)' : 'rgba(28,20,15,0.32)';
  const strokeStrong = isDark ? '#eee6d8' : '#1c140f';
  const strokeSubtle = isDark ? 'rgba(238,230,216,0.16)' : 'rgba(28,20,15,0.12)';
  const accent = isDark ? '#fb923c' : '#c2410c';
  const accentFill = isDark ? '#f97316' : '#f97316';
  const meta = META_LABEL[projectId] ?? { place: 'Projet', domain: 'Réalisation' };

  const sitePreview = DEFAULT_SITE_IMAGES[projectId];
  const resolvedSrc = previewImage || sitePreview?.src;
  const resolvedUrl = liveUrl || sitePreview?.url;
  const resolvedAlt =
    sitePreview?.alt || (title ? `Aperçu de l’interface ${title}` : `Aperçu de l’interface ${meta.place}`);

  if (resolvedSrc && !imgError) {
    const cleanHost = resolvedUrl
      ? resolvedUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
      : meta.place;

    return (
      <div
        className={`w-full overflow-hidden rounded-2xl border ${
          isDark
            ? 'border-[#fb923c]/15 bg-[#261b14]'
            : 'border-[#1c140f]/10 bg-white shadow-xs'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-2 border-b px-3.5 py-2 font-mono text-[11px] font-medium ${
            isDark
              ? 'border-[#eee6d8]/10 bg-[#1c140f] text-[#eee6d8]/80'
              : 'border-[#1c140f]/10 bg-[#eee6d8]/65 text-[#5d4d42]'
          }`}
        >
          <span className="truncate">{cleanHost}</span>

          {resolvedUrl && (
            <a
              href={resolvedUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ouvrir ${cleanHost} dans un nouvel onglet`}
              className={`inline-flex items-center gap-0.5 shrink-0 font-semibold transition-colors ${
                isDark ? 'text-[#fb923c] hover:text-[#eee6d8]' : 'text-[#c2410c] hover:underline'
              }`}
            >
              En ligne
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="group relative aspect-[16/10] w-full overflow-hidden bg-[#1c140f]">
          <img
            src={resolvedSrc}
            alt={resolvedAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div
          className={`flex items-center justify-between border-t px-3.5 py-2 font-mono text-[10px] font-medium ${
            isDark ? 'border-[#eee6d8]/10' : 'border-[#1c140f]/10'
          }`}
        >
          <span className={isDark ? 'text-[#eee6d8]/65' : 'text-[#5d4d42]'}>Interface en ligne</span>
          <span className={isDark ? 'text-[#fb923c]' : 'text-[#c2410c]'}>{meta.domain}</span>
        </div>
      </div>
    );
  }

  const renderArtwork = (): React.ReactNode => {
    switch (projectId) {
      case 'umons-track-sentry-vision':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration Track Sentry Vision : capteurs ferroviaires et détection DualSightNet / RT-DETR"
          >
            <line x1="76" y1="152" x2="188" y2="34" stroke={strokeLine} strokeWidth="1.6" />
            <line x1="344" y1="152" x2="232" y2="34" stroke={strokeLine} strokeWidth="1.6" />
            <motion.rect
              x="148"
              y="52"
              width="124"
              height="74"
              rx="4"
              fill="none"
              stroke={accentFill}
              strokeWidth="2"
              strokeDasharray="6 3"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            />
            <path d="M142 64 V46 H160" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <path d="M278 64 V46 H260" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <path d="M142 114 V132 H160" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <path d="M278 114 V132 H260" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <circle cx="84" cy="88" r="14" fill="none" stroke={strokeStrong} strokeWidth="1.6" />
            <circle cx="336" cy="88" r="14" fill="none" stroke={accent} strokeWidth="1.6" />
            <line x1="98" y1="88" x2="148" y2="88" stroke={strokeLine} strokeWidth="1.3" />
            <line x1="272" y1="88" x2="322" y2="88" stroke={accent} strokeWidth="1.3" />
            <circle cx="210" cy="89" r="7" fill={accentFill} />
          </svg>
        );

      case 'eneo-rapprochement':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Composition géométrique symbolisant la réconciliation des ventes"
          >
            <rect x="46" y="34" width="124" height="16" rx="3" fill={strokeSubtle} />
            <rect x="46" y="64" width="144" height="16" rx="3" fill={strokeLine} />
            <rect x="46" y="94" width="98" height="16" rx="3" fill={strokeSubtle} />
            <rect x="46" y="124" width="136" height="16" rx="3" fill={strokeLine} />

            <rect x="250" y="34" width="124" height="16" rx="3" fill={strokeSubtle} />
            <rect x="230" y="64" width="144" height="16" rx="3" fill={strokeStrong} />
            <rect x="276" y="94" width="98" height="16" rx="3" fill={strokeSubtle} />
            <rect x="238" y="124" width="136" height="16" rx="3" fill={strokeLine} />

            <line x1="210" y1="22" x2="210" y2="148" stroke={accent} strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx="210" cy="72" r="14" fill={accentFill} />
            <path
              d="M204 72 L208.5 76.5 L217 67.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'digital-twin-predictive':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration de la plateforme LIFE et de son jumeau numérique"
          >
            <line x1="210" y1="22" x2="210" y2="148" stroke={strokeSubtle} strokeWidth="1.2" />
            <polygon points="96,46 164,46 178,126 82,126" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <circle cx="130" cy="86" r="18" fill={strokeSubtle} />

            <polygon
              points="256,46 324,46 338,126 242,126"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              strokeDasharray="5 4"
            />
            <circle cx="290" cy="86" r="18" fill="none" stroke={accentFill} strokeWidth="2.2" />
            <circle cx="290" cy="86" r="6" fill={accentFill} />

            <line x1="168" y1="68" x2="252" y2="68" stroke={accent} strokeWidth="1.2" opacity="0.7" />
            <line x1="172" y1="104" x2="248" y2="104" stroke={strokeLine} strokeWidth="1.2" opacity="0.6" />
          </svg>
        );

      case 'sparte-biometric-pic':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Motif minimaliste d'arcs d'empreinte biométrique"
          >
            {[16, 28, 40, 52, 64].map((r, i) => (
              <path
                key={r}
                d={`M ${210 - r} ${104} A ${r} ${r} 0 1 1 ${210 + r * 0.72} ${104 + r * 0.45}`}
                fill="none"
                stroke={i === 2 ? accentFill : i % 2 === 0 ? strokeStrong : strokeLine}
                strokeWidth={i === 2 ? '2.4' : '1.5'}
                strokeLinecap="round"
              />
            ))}
            <circle cx="210" cy="96" r="5" fill={accentFill} />
          </svg>
        );

      case 'supply-chain-microservices':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Composition modulaire de blocs SupplyChain GRAI"
          >
            <rect x="74" y="46" width="74" height="74" rx="6" fill="none" stroke={strokeLine} strokeWidth="1.8" />
            <rect x="166" y="34" width="86" height="86" rx="6" fill={accentFill} />
            <rect x="234" y="60" width="112" height="72" rx="6" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <circle cx="209" cy="77" r="10" fill={isDark ? '#1c140f' : '#ffffff'} />
          </svg>
        );

      case 'valuator-ugecam':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration minimaliste de mesure et d'équilibre Valuator UGECAM"
          >
            <line x1="60" y1="86" x2="360" y2="86" stroke={strokeLine} strokeWidth="1.5" />
            <rect x="98" y="52" width="24" height="68" rx="12" fill={strokeSubtle} />
            <rect x="198" y="32" width="24" height="108" rx="12" fill={accentFill} />
            <rect x="298" y="44" width="24" height="84" rx="12" fill="none" stroke={strokeStrong} strokeWidth="2" />
          </svg>
        );

      case 'jeffrey-assistant':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration graphique minimaliste d'écoute et d'assistance"
          >
            <circle cx="210" cy="85" r="54" fill="none" stroke={strokeSubtle} strokeWidth="1.3" />
            <circle cx="210" cy="85" r="34" fill="none" stroke={strokeLine} strokeWidth="1.6" strokeDasharray="6 4" />
            <path
              d="M116 85 C 142 54, 174 116, 210 85 C 246 54, 278 116, 304 85"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="210" cy="85" r="8" fill={accentFill} />
          </svg>
        );

      default:
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Silhouette architecturale d'habitation et onde d'ouverture"
          >
            <path
              d="M126 88 L210 34 L294 88 V138 H126 Z"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M190 138 V102 A20 20 0 0 1 230 102 V138"
              fill="none"
              stroke={accentFill}
              strokeWidth="2.4"
            />
            <path
              d="M276 48 A 36 36 0 0 1 302 74"
              fill="none"
              stroke={accent}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="210" cy="108" r="5" fill={accentFill} />
          </svg>
        );
    }
  };

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border px-4 py-3 ${
        isDark
          ? 'border-[#fb923c]/15 bg-[#261b14]'
          : 'border-[#1c140f]/10 bg-white shadow-xs'
      }`}
    >
      <div className="aspect-[420/170] w-full">{renderArtwork()}</div>
      <div
        className={`mt-2 flex items-center justify-between border-t pt-2 font-mono text-[10px] font-medium ${
          isDark ? 'border-[#eee6d8]/10' : 'border-[#1c140f]/10'
        }`}
      >
        <span className={isDark ? 'text-[#eee6d8]/65' : 'text-[#5d4d42]'}>{meta.place}</span>
        <span className={isDark ? 'text-[#fb923c]' : 'text-[#c2410c]'}>{meta.domain}</span>
      </div>
    </div>
  );
}
