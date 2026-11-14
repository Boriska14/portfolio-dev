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
    alt: 'Capture d’écran de l’interface Wuendjo — organisation de voyage en groupe ou solo',
  },
  'mateconsulting-web': {
    src: '/assets/sites/mateconsulting.png',
    url: 'https://mateconsulting-pi.vercel.app/',
    alt: 'Capture d’écran du site web MATE Consulting — gestion financière externalisée',
  },
  'creative-glitch-mag': {
    src: '/assets/sites/creative-glitch.png',
    url: 'https://creative-glitch.vercel.app/',
    alt: 'Capture d’écran du magazine web GLITCH — média éditorial',
  },
  'zone-groupe-app': {
    src: '/assets/sites/zone-groupe.png',
    url: 'https://zone-groupe-sigma.vercel.app/',
    alt: 'Capture d’écran de la boutique en ligne Zone Groupe — électronique et négociation directe',
  },
};

const META_LABEL: Record<string, { place: string; domain: string }> = {
  'umons-track-sentry-vision': { place: 'Polytech Mons · UMONS', domain: 'Deep Learning · DualSightNet & RT-DETR' },
  'umons-rail-edge-cloud': { place: 'Mons, Belgique', domain: 'Ferroviaire · Edge-to-Cloud' },
  'aquasafe-minerve': { place: 'Cameroun · MINEE', domain: 'Cartographie & Eau' },
  'eneo-rapprochement': { place: 'Douala · ENEO', domain: 'Réconciliation des ventes' },
  'digital-twin-predictive': { place: 'Grand Paris Sud · ICAM', domain: 'Jumeau numérique' },
  'sparte-biometric-pic': { place: 'Douala · Sparte', domain: 'Embarqué & Accès' },
  'supply-chain-microservices': { place: 'UCAC-ICAM', domain: 'Flux & Logistique' },
  'valuator-ugecam': { place: 'France · UGECAM', domain: 'Évaluation métier' },
  'smart-home-access': { place: 'Projet personnel', domain: 'IoT & Domotique' },
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
  const strokeLine = isDark ? 'rgba(255,255,255,0.42)' : 'rgba(16,16,18,0.34)';
  const strokeStrong = isDark ? '#ffffff' : '#101012';
  const strokeSubtle = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(16,16,18,0.12)';
  const accent = isDark ? '#ffd0c4' : '#c4381e';
  const accentFill = isDark ? '#e8563a' : '#e04628';
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
        className={`w-full overflow-hidden rounded-lg border ${
          isDark
            ? 'border-white/15 bg-[#101012]/60'
            : 'border-[#141414]/15 bg-[#f2ede4]/70'
        }`}
      >
        {/* Minimalist browser top chrome */}
        <div
          className={`flex items-center justify-between gap-2 border-b px-3 py-1.5 font-mono text-[10px] ${
            isDark
              ? 'border-white/12 bg-[#161619] text-neutral-300'
              : 'border-[#141414]/10 bg-white text-neutral-600'
          }`}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-flex gap-1 shrink-0" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[#e04628]" />
              <span className="h-2 w-2 rounded-full bg-neutral-400/60" />
              <span className="h-2 w-2 rounded-full bg-neutral-400/40" />
            </span>
            <span className="ml-1.5 truncate">{cleanHost}</span>
          </div>

          {resolvedUrl && (
            <a
              href={resolvedUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ouvrir ${cleanHost} dans un nouvel onglet`}
              className={`inline-flex items-center gap-0.5 shrink-0 font-semibold transition-colors ${
                isDark ? 'text-[#ffd0c4] hover:text-white' : 'text-[#c4381e] hover:text-[#101012]'
              }`}
            >
              En ligne
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Captured Live Interface Image */}
        <div className="group relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
          <img
            src={resolvedSrc}
            alt={resolvedAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex items-center justify-between border-t border-current/10 px-3 py-2 font-mono text-[10px]">
          <span className={isDark ? 'text-white/70' : 'text-neutral-600'}>Interface en ligne</span>
          <span className={isDark ? 'text-[#ffd0c4]' : 'text-[#c4381e]'}>{meta.domain}</span>
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
            aria-label="Illustration de vision par ordinateur ferroviaire DualSightNet et RT-DETR"
          >
            {/* Track vanishing rails */}
            <line x1="76" y1="152" x2="188" y2="34" stroke={strokeLine} strokeWidth="1.6" />
            <line x1="344" y1="152" x2="232" y2="34" stroke={strokeLine} strokeWidth="1.6" />
            {/* Risk zone frames */}
            <motion.rect
              x="148"
              y="52"
              width="124"
              height="74"
              rx="2"
              fill="none"
              stroke={accentFill}
              strokeWidth="2"
              strokeDasharray="6 3"
              initial={{ opacity: 0.4, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Corner reticles */}
            <path d="M142 64 V46 H160" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <path d="M278 64 V46 H260" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <path d="M142 114 V132 H160" fill="none" stroke={strokeStrong} strokeWidth="2" />
            <path d="M278 114 V132 H260" fill="none" stroke={strokeStrong} strokeWidth="2" />
            {/* Dual branch fusion nodes */}
            <circle cx="84" cy="88" r="14" fill="none" stroke={strokeStrong} strokeWidth="1.6" />
            <circle cx="336" cy="88" r="14" fill="none" stroke={accent} strokeWidth="1.6" />
            <line x1="98" y1="88" x2="148" y2="88" stroke={strokeLine} strokeWidth="1.3" />
            <line x1="272" y1="88" x2="322" y2="88" stroke={accent} strokeWidth="1.3" />
            <circle cx="210" cy="89" r="7" fill={accentFill} />
          </svg>
        );

      case 'umons-rail-edge-cloud':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration graphique abstraite de voies ferroviaires et d'ondes"
          >
            {/* Minimalist perspective horizon & sweeping rail tracks */}
            <path
              d="M28 142 C 130 120, 260 66, 392 34"
              fill="none"
              stroke={strokeLine}
              strokeWidth="1.5"
            />
            <path
              d="M52 154 C 155 128, 275 74, 396 44"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
            />
            {/* Rhythmic sleepers */}
            {[0.18, 0.34, 0.5, 0.66, 0.8].map((t) => {
              const x = 40 + t * 330;
              const y = 148 - t * 105;
              return (
                <line
                  key={t}
                  x1={x - 10}
                  y1={y - 6}
                  x2={x + 12}
                  y2={y + 8}
                  stroke={strokeSubtle}
                  strokeWidth="1.4"
                />
              );
            })}
            {/* Sweeping hand-drawn acoustic/signal wave */}
            <motion.path
              d="M36 62 Q 92 28, 148 56 T 264 46 T 382 26"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0.2, opacity: 0.7 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <circle cx="298" cy="64" r="7" fill={accentFill} />
            <circle cx="298" cy="64" r="16" fill="none" stroke={accent} strokeWidth="1" opacity="0.65" />
          </svg>
        );

      case 'aquasafe-minerve':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration graphique de cercles d'eau et de repère cartographique"
          >
            {/* Concentric water ripples */}
            {[24, 46, 70, 96].map((r, i) => (
              <motion.circle
                key={r}
                cx="210"
                cy="90"
                r={r}
                fill="none"
                stroke={i === 0 ? accent : strokeSubtle}
                strokeWidth={i === 0 ? '1.8' : '1.2'}
                strokeDasharray={i === 2 ? '4 5' : undefined}
                initial={{ scale: 0.9, opacity: 0.6 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
            {/* Organic topographic contour curve */}
            <path
              d="M24 128 C 96 108, 134 142, 210 120 C 286 98, 324 134, 396 112"
              fill="none"
              stroke={strokeLine}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Minimalist drop / pin */}
            <path
              d="M210 42 C 210 42, 193 66, 193 78 A 17 17 0 0 0 227 78 C 227 66, 210 42, 210 42 Z"
              fill={accentFill}
            />
            <circle cx="210" cy="79" r="5" fill={isDark ? '#101012' : '#ffffff'} />
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
            {/* Two opposing graphic ledgers converging into balance */}
            <motion.rect
              x="46"
              y="34"
              width="124"
              height="16"
              rx="2"
              fill={strokeSubtle}
              initial={{ x: 26 }}
              whileInView={{ x: 46 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <rect x="46" y="64" width="144" height="16" rx="2" fill={strokeLine} />
            <rect x="46" y="94" width="98" height="16" rx="2" fill={strokeSubtle} />
            <rect x="46" y="124" width="136" height="16" rx="2" fill={strokeLine} />

            <motion.rect
              x="250"
              y="34"
              width="124"
              height="16"
              rx="2"
              fill={strokeSubtle}
              initial={{ x: 270 }}
              whileInView={{ x: 250 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <rect x="230" y="64" width="144" height="16" rx="2" fill={strokeStrong} />
            <rect x="276" y="94" width="98" height="16" rx="2" fill={strokeSubtle} />
            <rect x="238" y="124" width="136" height="16" rx="2" fill={strokeLine} />

            {/* Central vermilion alignment mark */}
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
            aria-label="Illustration de formes jumelles en miroir"
          >
            {/* Axis line */}
            <line x1="210" y1="22" x2="210" y2="148" stroke={strokeSubtle} strokeWidth="1.2" />
            {/* Physical solid cube/silhouette */}
            <motion.polygon
              points="96,46 164,46 178,126 82,126"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
              initial={{ x: -8 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
            <circle cx="130" cy="86" r="18" fill={strokeSubtle} />

            {/* Mirrored digital twin echo */}
            <motion.polygon
              points="256,46 324,46 338,126 242,126"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              strokeDasharray="5 4"
              initial={{ x: 8 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
            <circle cx="290" cy="86" r="18" fill="none" stroke={accentFill} strokeWidth="2.2" />
            <circle cx="290" cy="86" r="6" fill={accentFill} />

            {/* Echo link */}
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
            {/* Concentric fingerprint-inspired minimal arcs */}
            {[16, 28, 40, 52, 64].map((r, i) => (
              <motion.path
                key={r}
                d={`M ${210 - r} ${104} A ${r} ${r} 0 1 1 ${210 + r * 0.72} ${104 + r * 0.45}`}
                fill="none"
                stroke={i === 2 ? accentFill : i % 2 === 0 ? strokeStrong : strokeLine}
                strokeWidth={i === 2 ? '2.6' : '1.6'}
                strokeLinecap="round"
                initial={{ pathLength: 0.3 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
            aria-label="Composition modulaire de blocs en mouvement"
          >
            {/* Bauhaus/Le29 modular overlapping architectural blocks */}
            <motion.rect
              x="74"
              y="46"
              width="74"
              height="74"
              rx="4"
              fill="none"
              stroke={strokeLine}
              strokeWidth="1.8"
              initial={{ y: 56 }}
              whileInView={{ y: 46 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            />
            <motion.rect
              x="166"
              y="34"
              width="86"
              height="86"
              rx="4"
              fill={accentFill}
              initial={{ y: 24 }}
              whileInView={{ y: 34 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
            />
            <motion.rect
              x="234"
              y="60"
              width="112"
              height="72"
              rx="4"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
              initial={{ x: 248 }}
              whileInView={{ x: 234 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.14 }}
            />
            <circle cx="209" cy="77" r="10" fill={isDark ? '#101012' : '#ffffff'} />
          </svg>
        );

      case 'valuator-ugecam':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration minimaliste de mesure et d'équilibre"
          >
            {/* Clean calibrated horizon scale */}
            <line x1="60" y1="86" x2="360" y2="86" stroke={strokeLine} strokeWidth="1.5" />
            <motion.rect
              x="98"
              y="52"
              width="24"
              height="68"
              rx="12"
              fill={strokeSubtle}
              initial={{ scaleY: 0.7 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <motion.rect
              x="198"
              y="32"
              width="24"
              height="108"
              rx="12"
              fill={accentFill}
              initial={{ scaleY: 0.7 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            />
            <motion.rect
              x="298"
              y="44"
              width="24"
              height="84"
              rx="12"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
              initial={{ scaleY: 0.7 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            />
          </svg>
        );

      case 'wuendjo-travel':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration d'un itinéraire de voyage en solo et en groupe"
          >
            {/* Solo sweeping itinerary */}
            <motion.path
              d="M44 122 C 110 46, 178 128, 248 64 S 334 52, 376 46"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0.25 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Secondary group companion path */}
            <path
              d="M44 134 C 118 68, 184 140, 256 78 S 338 66, 376 46"
              fill="none"
              stroke={strokeLine}
              strokeWidth="1.4"
              strokeDasharray="4 4"
            />
            {/* Waypoint nodes */}
            <circle cx="44" cy="122" r="5.5" fill={strokeStrong} />
            <circle cx="152" cy="92" r="5" fill={isDark ? '#101012' : '#ffffff'} stroke={strokeStrong} strokeWidth="2" />
            <circle cx="248" cy="64" r="5.5" fill={isDark ? '#101012' : '#ffffff'} stroke={accentFill} strokeWidth="2" />
            <circle cx="376" cy="46" r="8" fill={accentFill} />
            <circle cx="376" cy="46" r="16" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
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
            {/* Attentive dialogue arcs & focal pulse */}
            <motion.circle
              cx="210"
              cy="85"
              r="54"
              fill="none"
              stroke={strokeSubtle}
              strokeWidth="1.3"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <circle cx="210" cy="85" r="34" fill="none" stroke={strokeLine} strokeWidth="1.6" strokeDasharray="6 4" />
            <motion.path
              d="M116 85 C 142 54, 174 116, 210 85 C 246 54, 278 116, 304 85"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0.2 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <circle cx="210" cy="85" r="8" fill={accentFill} />
          </svg>
        );

      case 'mateconsulting-web':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Composition éditoriale représentant la mise en page du site MateConsulting"
          >
            {/* Clean editorial browser frame & asymmetric grid */}
            <rect
              x="76"
              y="28"
              width="268"
              height="114"
              rx="6"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="1.8"
            />
            <line x1="76" y1="50" x2="344" y2="50" stroke={strokeSubtle} strokeWidth="1.3" />
            <circle cx="92" cy="39" r="2.5" fill={accentFill} />
            <circle cx="102" cy="39" r="2.5" fill={strokeLine} />
            <circle cx="112" cy="39" r="2.5" fill={strokeLine} />
            {/* Content blocks */}
            <motion.rect
              x="94"
              y="64"
              width="128"
              height="60"
              rx="3"
              fill={accentFill}
              initial={{ opacity: 0.7, y: 70 }}
              whileInView={{ opacity: 1, y: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            />
            <rect x="236" y="64" width="90" height="16" rx="2" fill={strokeLine} />
            <rect x="236" y="88" width="90" height="14" rx="2" fill={strokeSubtle} />
            <rect x="236" y="110" width="62" height="14" rx="2" fill={strokeSubtle} />
          </svg>
        );

      case 'creative-glitch-mag':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Illustration éditoriale d'un magazine ouvert"
          >
            {/* Editorial open spread & index tiles */}
            <rect
              x="66"
              y="26"
              width="288"
              height="118"
              rx="4"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="1.8"
            />
            <line x1="210" y1="26" x2="210" y2="144" stroke={strokeLine} strokeWidth="1.4" />
            <motion.rect
              x="84"
              y="42"
              width="108"
              height="86"
              rx="2"
              fill={accentFill}
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <line x1="228" y1="48" x2="334" y2="48" stroke={strokeStrong} strokeWidth="2.4" />
            <line x1="228" y1="68" x2="318" y2="68" stroke={strokeLine} strokeWidth="1.6" />
            <line x1="228" y1="84" x2="330" y2="84" stroke={strokeLine} strokeWidth="1.6" />
            <line x1="228" y1="100" x2="300" y2="100" stroke={strokeSubtle} strokeWidth="1.6" />
            <circle cx="240" cy="122" r="7" fill={accentFill} />
          </svg>
        );

      case 'zone-groupe-app':
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Composition graphique de cercles interconnectés"
          >
            {/* Interlocking collaborative zones */}
            <motion.circle
              cx="166"
              cy="85"
              r="46"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
              initial={{ cx: 154 }}
              whileInView={{ cx: 166 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.circle
              cx="254"
              cy="85"
              r="46"
              fill="none"
              stroke={accent}
              strokeWidth="2"
              initial={{ cx: 266 }}
              whileInView={{ cx: 254 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <circle cx="210" cy="85" r="10" fill={accentFill} />
          </svg>
        );

      default:
        // smart-home-access
        return (
          <svg
            viewBox="0 0 420 170"
            className="h-full w-full"
            role="img"
            aria-label="Silhouette architecturale d'habitation et onde d'ouverture"
          >
            {/* Minimalist architectural roofline */}
            <path
              d="M126 88 L210 34 L294 88 V138 H126 Z"
              fill="none"
              stroke={strokeStrong}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Arch doorway */}
            <path
              d="M190 138 V102 A20 20 0 0 1 230 102 V138"
              fill="none"
              stroke={accentFill}
              strokeWidth="2.4"
            />
            {/* Subtle radio wave arc */}
            <motion.path
              d="M276 48 A 36 36 0 0 1 302 74"
              fill="none"
              stroke={accent}
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
            <circle cx="210" cy="108" r="5" fill={accentFill} />
          </svg>
        );
    }
  };

  return (
    <div
      className={`w-full overflow-hidden rounded-lg border px-4 py-3 ${
        isDark
          ? 'border-white/15 bg-[#101012]/35'
          : 'border-[#141414]/15 bg-[#f2ede4]/65'
      }`}
    >
      <div className="aspect-[420/170] w-full">{renderArtwork()}</div>
      <div className="mt-2 flex items-center justify-between border-t border-current/10 pt-2 font-mono text-[10px]">
        <span className={isDark ? 'text-white/65' : 'text-neutral-600'}>{meta.place}</span>
        <span className={isDark ? 'text-[#ffd0c4]' : 'text-[#c4381e]'}>{meta.domain}</span>
      </div>
    </div>
  );
}
