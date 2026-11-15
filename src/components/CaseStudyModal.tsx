import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, ExternalLink, RotateCcw, X } from 'lucide-react';
import { ProjectCaseStudy } from '../data/portfolioData';
import { ProjectArchitectureVisual } from './ProjectArchitectureVisual';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  initialTab: 'case-study' | 'demo';
  onClose: () => void;
}

export function CaseStudyModal({ project, initialTab, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'case-study' | 'demo'>(initialTab);
  const [selectedLayerIdx, setSelectedLayerIdx] = useState(0);

  const [twinSpeed, setTwinSpeed] = useState<number>(45);
  const [twinGripperOpen, setTwinGripperOpen] = useState<boolean>(true);
  const [eneoChecked, setEneoChecked] = useState<boolean>(false);
  const [eneoRole, setEneoRole] = useState<'Administrateur' | 'Utilisateur standard' | 'Partenaire'>('Administrateur');
  const [supplyStep, setSupplyStep] = useState<number>(0);
  const [badgeAuthorized, setBadgeAuthorized] = useState<boolean>(true);
  const [accessLogs, setAccessLogs] = useState<{ time: string; badge: string; status: string }[]>([
    { time: '08:42:11', badge: 'BADGE-014', status: 'Autorisé (Porte principale)' },
  ]);
  const [ugecamScores, setUgecamScores] = useState({
    ergonomie: 4,
    tracabilite: 4,
    conformite: 5,
  });
  const [railVibration, setRailVibration] = useState<number>(2.4);
  const [railTemp, setRailTemp] = useState<number>(26.5);
  const [picFingerMatch, setPicFingerMatch] = useState<'valid' | 'unknown'>('valid');
  const [picState, setPicState] = useState<string>('En attente d’empreinte...');
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [wuendjoMode, setWuendjoMode] = useState<'solo' | 'groupe'>('groupe');
  const [wuendjoSteps, setWuendjoSteps] = useState([
    { day: 'Jour 1', title: 'Arrivée & installation', tag: 'Transport + Hébergement' },
    { day: 'Jour 2', title: 'Visite locale & dîner commun', tag: 'Programme partagé' },
  ]);
  const [wuendjoNewStep, setWuendjoNewStep] = useState('');
  const [jeffreyTasks, setJeffreyTasks] = useState([
    { id: 1, text: 'Relire la documentation du module Python', done: true },
    { id: 2, text: 'Préparer le point d’avancement du matin', done: false },
  ]);
  const [jeffreyInput, setJeffreyInput] = useState('');
  const [mateViewport, setMateViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [glitchRubric, setGlitchRubric] = useState<'sommaire' | 'journal' | 'notes'>('sommaire');
  const [tsvMode, setTsvMode] = useState<'edge-to-cloud' | 'classification' | 'detection'>('classification');
  const [tsvAngle, setTsvAngle] = useState<'frontale' | 'verticale'>('frontale');
  const [tsvIteration, setTsvIteration] = useState<number>(6);
  const [zoneProposedPrice, setZoneProposedPrice] = useState<number>(115000);

  useEffect(() => {
    setActiveTab(initialTab);
    setSelectedLayerIdx(0);
    setEneoChecked(false);
    setEneoRole('Administrateur');
    setSupplyStep(0);
    setPicState('En attente d’empreinte...');
    setGlitchRubric('sommaire');
    setTsvMode('classification');
    setTsvAngle('frontale');
    setTsvIteration(6);
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const supplyStages = [
    {
      service: 'Modèle GRAI & React',
      engine: 'Centres de décision',
      payload: '{ "order_id": "CMD-408", "sku": "CAP-IND-09", "qty": 12 }',
      note: 'Cartographie GRAI des flux et validation des écarts côté interface.',
    },
    {
      service: 'Passerelle FastAPI',
      engine: 'Contrôle & OpenAPI',
      payload: 'status: 202 Accepted · vers PostgreSQL + MongoDB',
      note: 'Validation des schémas et routage vers les services ERP/WMS.',
    },
    {
      service: 'PostgreSQL',
      engine: 'Persistance SQL',
      payload: 'INSERT INTO orders (id, sku, qty) VALUES ("CMD-408", "CAP-IND-09", 12);',
      note: 'Intégrité transactionnelle des commandes et niveaux de stock.',
    },
    {
      service: 'MongoDB & Flask',
      engine: 'Calcul des KPI',
      payload: '{ "order_id": "CMD-408", "event": "DISPATCH_READY", "warehouse": "PAR-SUD" }',
      note: 'Agrégation des événements logistiques et alimentation du tableau de bord.',
    },
  ];

  const handleSimulateBadge = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const entry = {
      time: `${hh}:${mm}:${ss}`,
      badge: badgeAuthorized ? 'BADGE-014' : 'BADGE-992',
      status: badgeAuthorized ? 'Autorisé (Ouverture déclenchée)' : 'Refusé (Accès bloqué)',
    };
    setAccessLogs((prev) => [entry, ...prev].slice(0, 4));
  };

  const handleRunPicAuth = () => {
    if (picFingerMatch === 'valid') {
      setPicState('Empreinte #04 reconnue -> Ouverture activée (3 s)');
    } else {
      setPicState('Empreinte inconnue -> Accès refusé');
    }
  };

  const handleCopyPayload = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 1800);
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c140f]/75 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_90px_-20px_rgba(12,12,14,0.4)]"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-black/[0.07] bg-[#1c140f] px-6 py-5 text-white">
          <div>
            <p className="font-mono text-xs font-medium text-[#fb923c]">
              {project.category} · {project.country} · {project.period}
            </p>
            <h2 id="case-study-title" className="mt-1 font-display text-2xl font-bold tracking-tight">
              {project.title}
            </h2>
            <p className="mt-0.5 text-sm text-white/65">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-[#fb923c] hover:text-[#1c140f]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.07] bg-[#eee6d8] px-6 py-3">
          <div className="inline-flex items-center rounded-full bg-[#e5e7e6] p-1">
            {(
              [
                ['case-study', 'Fiche projet'],
                ['demo', 'Aperçu interactif'],
              ] as const
            ).map(([tabKey, label]) => {
              const active = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  type="button"
                  onClick={() => setActiveTab(tabKey)}
                  className={`relative min-h-[34px] rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active ? 'text-[#1c140f]' : 'text-[#5d4d42] hover:text-[#1c140f]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="case-modal-tab-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[#f97316]"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1c140f] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#fb923c] hover:text-[#1c140f]"
              >
                Voir le site
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#c2410c] hover:underline"
            >
              GitHub
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'case-study' ? (
              <motion.div
                key="tab-case-study"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#eee6d8] p-5">
                    <h3 className="font-display text-sm font-bold text-[#1c140f]">
                      Le point de départ
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5d4d42]">{project.problem}</p>
                  </div>
                  <div className="rounded-2xl bg-[#eee6d8] p-5">
                    <h3 className="font-display text-sm font-bold text-[#1c140f]">
                      Ma contribution
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5d4d42]">{project.role}</p>
                  </div>
                </div>

                {/* Visual Representation & Overview */}
                <div>
                  <h3 className="font-display text-base font-bold text-[#1c140f]">
                    Comment c’est construit
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5d4d42]">
                    {project.architectureSummary}
                  </p>

                  <div className="mt-4">
                    <ProjectArchitectureVisual
                      projectId={project.id}
                      variant="light"
                      previewImage={project.previewImage}
                      liveUrl={project.liveUrl}
                      title={project.title}
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-12">
                    <div className="space-y-2 lg:col-span-5">
                      {project.architectureLayers.map((layer, idx) => {
                        const active = selectedLayerIdx === idx;
                        return (
                          <button
                            key={layer.layer}
                            type="button"
                            onClick={() => setSelectedLayerIdx(idx)}
                            className={`flex w-full flex-col rounded-2xl border p-3.5 text-left transition-all duration-200 ${
                              active
                                ? 'border-[#c2410c] bg-[#1c140f] text-white'
                                : 'border-black/[0.08] bg-white text-[#1c140f] hover:bg-[#eee6d8]'
                            }`}
                          >
                            <span
                              className={`font-mono text-[11px] font-medium ${
                                active ? 'text-[#fb923c]' : 'text-[#c2410c]'
                              }`}
                            >
                              {layer.layer}
                            </span>
                            <span className="mt-0.5 font-display text-sm font-bold">
                              {layer.component}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl bg-[#eee6d8] p-5 lg:col-span-7">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedLayerIdx}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.18 }}
                        >
                          <p className="font-mono text-xs font-semibold text-[#c2410c]">
                            {project.architectureLayers[selectedLayerIdx]?.layer}
                          </p>
                          <h4 className="mt-1 font-display text-lg font-bold text-[#1c140f]">
                            {project.architectureLayers[selectedLayerIdx]?.component}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-[#5d4d42]">
                            {project.architectureLayers[selectedLayerIdx]?.detail}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      <div className="mt-6 border-t border-black/[0.07] pt-4">
                        <p className="font-mono text-xs font-medium text-[#5d4d42]">
                          Outils : {project.technologies.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-display text-base font-bold text-[#1c140f]">
                      Difficultés rencontrées
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#5d4d42]">
                      {project.challenges.map((item) => (
                        <li
                          key={item}
                          className="rounded-2xl border border-black/[0.07] bg-white px-4 py-3"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-base font-bold text-[#1c140f]">Résultats</h3>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#1c140f]">
                      {project.results.map((item) => (
                        <li key={item} className="rounded-2xl bg-[#eee6d8] px-4 py-3 font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="tab-demo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="rounded-2xl bg-[#eee6d8] px-4 py-3 text-xs font-medium leading-relaxed text-[#5d4d42]">
                  Aperçu interactif du projet : manipulez les paramètres ci-dessous pour observer le
                  comportement du système.
                </div>

                {project.demoType === 'umons-tsv' && (
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex flex-wrap gap-1 rounded-full bg-[#e5e7e6] p-1">
                        {(
                          [
                            ['classification', 'Classification (DualSightNet)'],
                            ['detection', 'Détection (RT-DETR)'],
                            ['edge-to-cloud', 'Capteurs Edge-to-Cloud'],
                          ] as const
                        ).map(([mode, label]) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setTsvMode(mode)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                              tsvMode === mode
                                ? 'bg-[#f97316] text-[#1c140f]'
                                : 'text-[#5d4d42] hover:text-[#1c140f]'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <span className="font-mono text-xs font-medium text-[#c2410c]">
                        Track Sentry Vision · UMONS 2026
                      </span>
                    </div>

                    {tsvMode === 'edge-to-cloud' && (
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-4 rounded-2xl border border-black/[0.08] bg-white p-5">
                          <h3 className="font-display text-base font-bold text-[#1c140f]">
                            Télémétrie multimodale voie ferrée
                          </h3>
                          <div>
                            <div className="flex justify-between text-xs font-medium text-[#5d4d42]">
                              <label htmlFor="rail-vib">Vibration rail (mm/s)</label>
                              <span className="font-mono font-semibold tabular-nums text-[#c2410c]">
                                {railVibration.toFixed(1)} mm/s
                              </span>
                            </div>
                            <input
                              id="rail-vib"
                              type="range"
                              min={0.5}
                              max={8.0}
                              step={0.1}
                              value={railVibration}
                              onChange={(e) => setRailVibration(Number(e.target.value))}
                              className="mt-2 w-full accent-[#c2410c]"
                            />
                          </div>
                          <div>
                            <div className="flex justify-between text-xs font-medium text-[#5d4d42]">
                              <label htmlFor="rail-temp">Température essieu (°C)</label>
                              <span className="font-mono font-semibold tabular-nums text-[#c2410c]">
                                {railTemp.toFixed(1)} °C
                              </span>
                            </div>
                            <input
                              id="rail-temp"
                              type="range"
                              min={10}
                              max={65}
                              step={0.5}
                              value={railTemp}
                              onChange={(e) => setRailTemp(Number(e.target.value))}
                              className="mt-2 w-full accent-[#c2410c]"
                            />
                          </div>
                        </div>

                        <div className="rounded-2xl bg-[#1c140f] p-5 text-white">
                          <p className="font-mono text-xs font-medium text-[#fb923c]">
                            Flux Python Edge-to-Cloud · MQTT / Docker
                          </p>
                          <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-white/80">
                            {JSON.stringify(
                              {
                                plateforme: 'track-sentry-vision',
                                capteur: 'rail-mons-02',
                                vibration_mm_s: Number(railVibration.toFixed(1)),
                                temperature_c: Number(railTemp.toFixed(1)),
                                etat:
                                  railVibration > 5.0 || railTemp > 50
                                    ? 'ALERTE_ANOMALIE'
                                    : 'NOMINAL',
                              },
                              null,
                              2
                            )}
                          </pre>
                        </div>
                      </div>
                    )}

                    {tsvMode === 'classification' && (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="text-xs text-[#5d4d42]">
                            Comparaison sur RailSurface-7 (8 classes, validation croisée 5 folds) :
                          </p>
                          <div className="inline-flex gap-1 rounded-full bg-[#e5e7e6] p-1">
                            {(['frontale', 'verticale'] as const).map((angle) => (
                              <button
                                key={angle}
                                type="button"
                                onClick={() => setTsvAngle(angle)}
                                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                                  tsvAngle === angle
                                    ? 'bg-[#1c140f] text-white'
                                    : 'text-[#5d4d42] hover:text-[#1c140f]'
                                }`}
                              >
                                Vue {angle}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          {(tsvAngle === 'frontale'
                            ? [
                                {
                                  name: 'EfficientNet-B0 (baseline)',
                                  ba: '82,5 %',
                                  f1: '0,872',
                                  inf: '12,3 ms',
                                  highlight: false,
                                },
                                {
                                  name: 'EfficientNet-B0 + Attention',
                                  ba: '84,1 %',
                                  f1: '0,884',
                                  inf: '13,8 ms',
                                  highlight: false,
                                },
                                {
                                  name: 'DualSightNet (Retenu)',
                                  ba: '98,0 %',
                                  f1: '0,940',
                                  inf: '34,7 ms',
                                  highlight: true,
                                },
                              ]
                            : [
                                {
                                  name: 'EfficientNet-B0 (baseline)',
                                  ba: '79,3 %',
                                  f1: '0,825',
                                  inf: '12,1 ms',
                                  highlight: false,
                                },
                                {
                                  name: 'EfficientNet-B0 + Attention',
                                  ba: '80,9 %',
                                  f1: '0,838',
                                  inf: '13,5 ms',
                                  highlight: false,
                                },
                                {
                                  name: 'DualSightNet (Retenu)',
                                  ba: '93,4 %',
                                  f1: '0,867',
                                  inf: '34,2 ms',
                                  highlight: true,
                                },
                              ]
                          ).map((row) => (
                            <div
                              key={row.name}
                              className={`rounded-2xl p-5 ${
                                row.highlight
                                  ? 'border border-[#f97316]/45 bg-[#eee6d8] text-[#1c140f]'
                                  : 'border border-black/[0.08] bg-white text-[#1c140f]'
                              }`}
                            >
                              <p
                                className={`font-mono text-[11px] font-medium ${
                                  row.highlight ? 'text-[#c2410c]' : 'text-[#5d4d42]'
                                }`}
                              >
                                {row.name}
                              </p>
                              <p className="mt-2 font-display text-2xl font-bold tabular-nums">
                                {row.ba}
                              </p>
                              <p className="mt-1 text-[11px] text-[#5d4d42]">
                                Balanced Accuracy · F1 : {row.f1} · {row.inf}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {tsvMode === 'detection' && (
                      <div className="space-y-4">
                        <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-[#5d4d42]">
                            <label htmlFor="tsv-iter">
                              Itération d’Active Learning ({600 + tsvIteration * 75} images annotées)
                            </label>
                            <span className="font-mono font-semibold text-[#c2410c] tabular-nums">
                              Itération {tsvIteration} / 8
                            </span>
                          </div>
                          <input
                            id="tsv-iter"
                            type="range"
                            min={0}
                            max={8}
                            step={1}
                            value={tsvIteration}
                            onChange={(e) => setTsvIteration(Number(e.target.value))}
                            className="mt-3 w-full accent-[#c2410c]"
                          />
                        </div>

                        {(() => {
                          const diversityScores = [47.6, 55.8, 64.1, 71.9, 79.2, 85.4, 90.8, 93.2, 95.1];
                          const entropyScores = [47.6, 63.1, 65.4, 66.2, 66.8, 67.1, 67.3, 67.5, 67.6];
                          const yoloScores = [42.7, 50.9, 58.4, 65.2, 71.5, 77.2, 82.3, 86.7, 90.4];
                          return (
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                              <div className="rounded-2xl border border-[#f97316]/45 bg-[#eee6d8] p-5 text-[#1c140f]">
                                <p className="font-mono text-[11px] font-medium text-[#c2410c]">
                                  RT-DETR + Diversity Sampling
                                </p>
                                <p className="mt-2 font-display text-2xl font-bold tabular-nums">
                                  {diversityScores[tsvIteration].toFixed(1)} %
                                </p>
                                <p className="mt-1 text-[11px] text-[#5d4d42]">
                                  mAP@50:95 · 18,2 ms (55 FPS)
                                </p>
                              </div>
                              <div className="rounded-2xl border border-black/[0.08] bg-white p-5 text-[#1c140f]">
                                <p className="font-mono text-[11px] font-medium text-[#5d4d42]">
                                  RT-DETR + Entropie inverse
                                </p>
                                <p className="mt-2 font-display text-2xl font-bold tabular-nums">
                                  {entropyScores[tsvIteration].toFixed(1)} %
                                </p>
                                <p className="mt-1 text-[11px] text-[#5d4d42]">
                                  Stagne dès l’itération 2
                                </p>
                              </div>
                              <div className="rounded-2xl border border-black/[0.08] bg-white p-5 text-[#1c140f]">
                                <p className="font-mono text-[11px] font-medium text-[#5d4d42]">
                                  YOLOv8n + Diversity
                                </p>
                                <p className="mt-2 font-display text-2xl font-bold tabular-nums">
                                  {yoloScores[tsvIteration].toFixed(1)} %
                                </p>
                                <p className="mt-1 text-[11px] text-[#5d4d42]">
                                  8,7 ms (115 FPS) · 90 % à l’it. 8
                                </p>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                )}

                {project.demoType === 'sparte-biometric' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                      <h3 className="font-display text-base font-bold text-[#1c140f]">
                        Test de lecture biométrique
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setPicFingerMatch('valid')}
                          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                            picFingerMatch === 'valid'
                              ? 'bg-[#1c140f] text-white'
                              : 'bg-[#eee6d8] text-[#1c140f]'
                          }`}
                        >
                          Empreinte enregistrée
                        </button>
                        <button
                          type="button"
                          onClick={() => setPicFingerMatch('unknown')}
                          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                            picFingerMatch === 'unknown'
                              ? 'bg-[#1c140f] text-white'
                              : 'bg-[#eee6d8] text-[#1c140f]'
                          }`}
                        >
                          Empreinte inconnue
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={handleRunPicAuth}
                        className="mt-4 inline-flex min-h-[40px] items-center rounded-full bg-[#fb923c] px-5 py-2 text-xs font-bold text-[#1c140f] transition-colors hover:bg-[#f97316]"
                      >
                        Lancer la vérification
                      </button>
                    </div>

                    <div className="rounded-2xl bg-[#1c140f] p-5 text-white">
                      <p className="font-mono text-xs font-medium text-[#fb923c]">
                        Réponse microcontrôleur PIC
                      </p>
                      <p className="mt-3 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/80">
                        {picState}
                      </p>
                    </div>
                  </div>
                )}

                {project.demoType === 'digital-twin' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                      <h3 className="font-display text-base font-bold text-[#1c140f]">
                        Pilotage du jumeau numérique (Salle LIFE)
                      </h3>
                      <div className="mt-4 space-y-5">
                        <div>
                          <div className="flex justify-between text-xs font-medium text-[#5d4d42]">
                            <label htmlFor="twin-speed">Vitesse de l’axe (%)</label>
                            <span className="font-mono font-semibold tabular-nums text-[#c2410c]">
                              {twinSpeed}%
                            </span>
                          </div>
                          <input
                            id="twin-speed"
                            type="range"
                            min={0}
                            max={100}
                            value={twinSpeed}
                            onChange={(e) => setTwinSpeed(Number(e.target.value))}
                            className="mt-2 w-full accent-[#c2410c]"
                          />
                        </div>

                        <div className="flex items-center justify-between border-t border-black/[0.07] pt-4">
                          <span className="text-sm font-medium text-[#5d4d42]">
                            Pince de la cellule
                          </span>
                          <button
                            type="button"
                            onClick={() => setTwinGripperOpen((v) => !v)}
                            className="rounded-full bg-[#1c140f] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#fb923c] hover:text-[#1c140f]"
                          >
                            {twinGripperOpen ? 'Fermer la pince' : 'Ouvrir la pince'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#1c140f] p-5 text-white">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-medium text-[#fb923c]">
                          Flask API · SCRAM / RabbitMQ
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopyPayload(
                              JSON.stringify(
                                {
                                  plateforme: 'salle-life-grand-paris-sud',
                                  broker: 'rabbitmq-scram',
                                  simulateur: 'ros-gazebo',
                                  vitesse_pct: twinSpeed,
                                  pince: twinGripperOpen ? 'OUVERTE' : 'FERMEE',
                                },
                                null,
                                2
                              )
                            )
                          }
                          className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white"
                        >
                          {copiedPayload ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                          {copiedPayload ? 'Copié' : 'Copier'}
                        </button>
                      </div>
                      <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-white/80">
                        {JSON.stringify(
                          {
                            plateforme: 'salle-life-grand-paris-sud',
                            broker: 'rabbitmq-scram',
                            simulateur: 'ros-gazebo',
                            vitesse_pct: twinSpeed,
                            pince: twinGripperOpen ? 'OUVERTE' : 'FERMEE',
                          },
                          null,
                          2
                        )}
                      </pre>
                    </div>
                  </div>
                )}

                {project.demoType === 'eneo' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex flex-wrap gap-1 rounded-full bg-[#e5e7e6] p-1">
                        {(['Administrateur', 'Utilisateur standard', 'Partenaire'] as const).map(
                          (role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => setEneoRole(role)}
                              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                                eneoRole === role
                                  ? 'bg-[#f97316] text-[#1c140f]'
                                  : 'text-[#5d4d42] hover:text-[#1c140f]'
                              }`}
                            >
                              {role}
                            </button>
                          )
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setEneoChecked((v) => !v)}
                        className="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-[#1c140f] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#fb923c] hover:text-[#1c140f]"
                      >
                        {eneoChecked ? (
                          <>
                            <RotateCcw className="h-3.5 w-3.5" />
                            Réinitialiser
                          </>
                        ) : (
                          'Lancer le rapprochement CSV'
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-[#5d4d42]">
                      Profil UML actif :{' '}
                      <span className="font-semibold text-[#1c140f]">{eneoRole}</span>{' '}
                      {eneoRole === 'Administrateur' &&
                        '(accès complet : Import CSV, Rapprochement, Alertes, Audit & RBAC)'}
                      {eneoRole === 'Utilisateur standard' &&
                        '(import des flux, rapprochement assisté et export des rapports)'}
                      {eneoRole === 'Partenaire' &&
                        '(soumission des lots encaissements Mobile Money et suivi des écarts)'}
                    </p>

                    <div className="overflow-x-auto rounded-2xl border border-black/[0.08]">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-black/[0.08] bg-[#eee6d8] font-mono text-[#1c140f]">
                          <tr>
                            <th className="px-4 py-3">Référence</th>
                            <th className="px-4 py-3">Flux ventes</th>
                            <th className="px-4 py-3">Facturation</th>
                            <th className="px-4 py-3">Statut / Alerte</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/[0.06] font-mono tabular-nums text-[#1c140f]">
                          <tr>
                            <td className="px-4 py-3">TX-2024-101</td>
                            <td className="px-4 py-3">42 500</td>
                            <td className="px-4 py-3">42 500</td>
                            <td className="px-4 py-3 font-semibold text-[#c2410c]">
                              {eneoChecked ? 'Rapproché (Conforme)' : 'Import CSV prêt'}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">TX-2024-102</td>
                            <td className="px-4 py-3">18 900</td>
                            <td className="px-4 py-3">18 400</td>
                            <td className="px-4 py-3 font-semibold text-[#b91c1c]">
                              {eneoChecked ? 'Alerte : écart de -500' : 'Import CSV prêt'}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">TX-2024-103</td>
                            <td className="px-4 py-3">31 000</td>
                            <td className="px-4 py-3">Absent</td>
                            <td className="px-4 py-3 font-semibold text-[#b91c1c]">
                              {eneoChecked ? 'Exception : non facturé' : 'Import CSV prêt'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {project.demoType === 'supply-chain' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {supplyStages.map((st, idx) => (
                        <button
                          key={st.service}
                          type="button"
                          onClick={() => setSupplyStep(idx)}
                          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                            supplyStep === idx
                              ? 'bg-[#f97316] text-[#1c140f]'
                              : 'bg-[#eee6d8] text-[#1c140f] hover:bg-[#e5e7e6]'
                          }`}
                        >
                          Étape {idx + 1} · {st.service}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-2xl bg-[#1c140f] p-5 text-white">
                      <p className="font-mono text-xs font-medium text-[#fb923c]">
                        {supplyStages[supplyStep].service} · {supplyStages[supplyStep].engine}
                      </p>
                      <p className="mt-2 text-sm text-white/80">{supplyStages[supplyStep].note}</p>
                      <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/80">
                        {supplyStages[supplyStep].payload}
                      </pre>
                    </div>
                  </div>
                )}

                {project.demoType === 'ugecam' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-4 rounded-2xl border border-black/[0.08] bg-white p-5">
                      <h3 className="font-display text-base font-bold text-[#1c140f]">
                        Grille d’évaluation (Valuator · UGECAM)
                      </h3>
                      {(
                        [
                          ['ergonomie', 'Ergonomie & prise en main'],
                          ['tracabilite', 'Suivi & maintenance'],
                          ['conformite', 'Fiabilité & conformité'],
                        ] as const
                      ).map(([key, label]) => (
                        <div key={key}>
                          <div className="flex justify-between text-xs font-medium text-[#5d4d42]">
                            <span>{label}</span>
                            <span className="font-mono font-semibold tabular-nums text-[#c2410c]">
                              {ugecamScores[key]} / 5
                            </span>
                          </div>
                          <input
                            type="range"
                            min={1}
                            max={5}
                            value={ugecamScores[key]}
                            onChange={(e) =>
                              setUgecamScores((prev) => ({
                                ...prev,
                                [key]: Number(e.target.value),
                              }))
                            }
                            className="mt-1.5 w-full accent-[#c2410c]"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl bg-[#eee6d8] p-5">
                      <div>
                        <p className="text-xs font-semibold text-[#c2410c]">Synthèse calculée</p>
                        <p className="mt-2 font-display text-2xl font-bold tabular-nums text-[#1c140f]">
                          Moyenne :{' '}
                          {(
                            (ugecamScores.ergonomie +
                              ugecamScores.tracabilite +
                              ugecamScores.conformite) /
                            3
                          ).toFixed(2)}{' '}
                          / 5
                        </p>
                        <p className="mt-2 text-sm text-[#5d4d42]">
                          Le score consolidé (employés et patients) alimente les tableaux de bord
                          de décision de l’établissement.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.demoType === 'smart-home' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                      <h3 className="font-display text-base font-bold text-[#1c140f]">
                        Simulation d’accès connecté
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setBadgeAuthorized(true)}
                          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                            badgeAuthorized
                              ? 'bg-[#1c140f] text-white'
                              : 'bg-[#eee6d8] text-[#1c140f]'
                          }`}
                        >
                          Badge actif (BADGE-014)
                        </button>
                        <button
                          type="button"
                          onClick={() => setBadgeAuthorized(false)}
                          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                            !badgeAuthorized
                              ? 'bg-[#1c140f] text-white'
                              : 'bg-[#eee6d8] text-[#1c140f]'
                          }`}
                        >
                          Badge bloqué (BADGE-992)
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={handleSimulateBadge}
                        className="mt-4 inline-flex min-h-[40px] items-center rounded-full bg-[#fb923c] px-5 py-2 text-xs font-bold text-[#1c140f] transition-colors hover:bg-[#f97316]"
                      >
                        Simuler un passage
                      </button>
                    </div>

                    <div className="rounded-2xl bg-[#1c140f] p-5 text-white">
                      <p className="font-mono text-xs font-medium text-[#fb923c]">
                        Journal des accès
                      </p>
                      <ul className="mt-3 space-y-2 font-mono text-xs">
                        {accessLogs.map((log, i) => (
                          <li
                            key={`${log.time}-${i}`}
                            className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white/80 tabular-nums"
                          >
                            {log.time} · {log.badge} · {log.status}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {project.demoType === 'wuendjo' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex gap-1 rounded-full bg-[#e5e7e6] p-1">
                        <button
                          type="button"
                          onClick={() => setWuendjoMode('groupe')}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                            wuendjoMode === 'groupe'
                              ? 'bg-[#f97316] text-[#1c140f]'
                              : 'text-[#5d4d42] hover:text-[#1c140f]'
                          }`}
                        >
                          Voyage en groupe
                        </button>
                        <button
                          type="button"
                          onClick={() => setWuendjoMode('solo')}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                            wuendjoMode === 'solo'
                              ? 'bg-[#f97316] text-[#1c140f]'
                              : 'text-[#5d4d42] hover:text-[#1c140f]'
                          }`}
                        >
                          Voyage en solo
                        </button>
                      </div>

                      <span className="font-mono text-xs font-medium text-[#c2410c]">
                        {wuendjoMode === 'groupe'
                          ? 'Itinéraire partagé (4 participants)'
                          : 'Carnet personnel (Solo)'}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                      <p className="mb-4 font-mono text-[11px] text-[#5d4d42]">
                        Modules actifs : Budget Recharts · Destinations &amp; restaurants · Jeux de piste · Guides visas
                      </p>

                      <div className="space-y-2.5">
                        {wuendjoSteps.map((s) => (
                          <div
                            key={`${s.day}-${s.title}`}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#eee6d8] px-4 py-3 text-xs"
                          >
                            <div>
                              <span className="font-mono font-semibold text-[#c2410c]">
                                {s.day} ·{' '}
                              </span>
                              <span className="font-semibold text-[#1c140f]">{s.title}</span>
                            </div>
                            <span className="font-mono text-[#5d4d42]">{s.tag}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <input
                          type="text"
                          value={wuendjoNewStep}
                          onChange={(e) => setWuendjoNewStep(e.target.value)}
                          placeholder="Ajouter une étape au séjour..."
                          className="min-w-[200px] flex-1 rounded-xl border border-black/15 px-3.5 py-2 text-xs text-[#1c140f] focus:border-[#f97316] focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (!wuendjoNewStep.trim()) return;
                            setWuendjoSteps((prev) => [
                              ...prev,
                              {
                                day: `Jour ${prev.length + 1}`,
                                title: wuendjoNewStep.trim(),
                                tag: wuendjoMode === 'groupe' ? 'Vote / Groupe' : 'Note solo',
                              },
                            ]);
                            setWuendjoNewStep('');
                          }}
                          className="rounded-full bg-[#fb923c] px-4 py-2 text-xs font-bold text-[#1c140f] hover:bg-[#f97316]"
                        >
                          Ajouter l’étape
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {project.demoType === 'jeffrey' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                      <h3 className="font-display text-base font-bold text-[#1c140f]">
                        Demander à Jeffrey
                      </h3>
                      <p className="mt-1 text-xs text-[#5d4d42]">
                        Ajoutez une tâche ou un rappel pour voir comment Jeffrey organise votre journée.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <input
                          type="text"
                          value={jeffreyInput}
                          onChange={(e) => setJeffreyInput(e.target.value)}
                          placeholder="Ex. Rappeler d’envoyer le devis..."
                          className="flex-1 rounded-xl border border-black/15 px-3 py-2 text-xs text-[#1c140f] focus:border-[#f97316] focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (!jeffreyInput.trim()) return;
                            setJeffreyTasks((prev) => [
                              { id: Date.now(), text: jeffreyInput.trim(), done: false },
                              ...prev,
                            ]);
                            setJeffreyInput('');
                          }}
                          className="rounded-full bg-[#fb923c] px-4 py-2 text-xs font-bold text-[#1c140f] hover:bg-[#f97316]"
                        >
                          Noter
                        </button>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#1c140f] p-5 text-white">
                      <p className="font-mono text-xs font-medium text-[#fb923c]">
                        Suivi du jour · Jeffrey
                      </p>
                      <ul className="mt-3 space-y-2 text-xs">
                        {jeffreyTasks.map((task) => (
                          <li key={task.id}>
                            <button
                              type="button"
                              onClick={() =>
                                setJeffreyTasks((prev) =>
                                  prev.map((t) =>
                                    t.id === task.id ? { ...t, done: !t.done } : t
                                  )
                                )
                              }
                              className="flex w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-left transition-colors hover:border-[#fb923c]/50"
                            >
                              <span
                                className={
                                  task.done ? 'line-through text-white/40' : 'text-white/85'
                                }
                              >
                                {task.text}
                              </span>
                              <span className="font-mono text-[10px] text-[#fb923c]">
                                {task.done ? 'Fait' : 'À faire'}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {project.demoType === 'mateconsulting' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs font-medium text-[#5d4d42]">
                        Prévisualisation du format d’écran · mateconsulting-pi.vercel.app
                      </span>
                      <div className="inline-flex gap-1 rounded-full bg-[#e5e7e6] p-1">
                        <button
                          type="button"
                          onClick={() => setMateViewport('desktop')}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                            mateViewport === 'desktop'
                              ? 'bg-[#f97316] text-[#1c140f]'
                              : 'text-[#5d4d42]'
                          }`}
                        >
                          Ordinateur
                        </button>
                        <button
                          type="button"
                          onClick={() => setMateViewport('mobile')}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                            mateViewport === 'mobile'
                              ? 'bg-[#f97316] text-[#1c140f]'
                              : 'text-[#5d4d42]'
                          }`}
                        >
                          Mobile
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center rounded-2xl bg-[#eee6d8] p-6">
                      <div
                        className={`rounded-2xl border border-black/[0.08] bg-white p-5 transition-all duration-300 ${
                          mateViewport === 'mobile' ? 'w-72' : 'w-full'
                        }`}
                      >
                        <div className="flex items-center justify-between border-b border-black/[0.07] pb-3">
                          <span className="font-display text-sm font-bold text-[#1c140f]">
                            MATE Consulting
                          </span>
                          <span className="font-mono text-[10px] font-semibold text-[#c2410c]">
                            Gestion financière externalisée PME/TPE
                          </span>
                        </div>
                        <div
                          className={`mt-4 grid gap-3 ${
                            mateViewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
                          }`}
                        >
                          <div className="rounded-xl bg-[#1c140f] p-3 text-white">
                            <p className="font-mono text-[10px] text-[#fb923c]">01</p>
                            <p className="mt-1 text-xs font-semibold">Précomptabilité agile</p>
                          </div>
                          <div className="rounded-xl bg-[#eee6d8] p-3 text-[#1c140f]">
                            <p className="font-mono text-[10px] text-[#c2410c]">02</p>
                            <p className="mt-1 text-xs font-semibold">Aide à la décision</p>
                          </div>
                          <div className="rounded-xl border border-black/[0.08] bg-white p-3 text-[#1c140f]">
                            <p className="font-mono text-[10px] text-[#c2410c]">03</p>
                            <p className="mt-1 text-xs font-semibold">Échange de 30 min</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.demoType === 'creative-glitch' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex gap-1 rounded-full bg-[#e5e7e6] p-1">
                        {(
                          [
                            ['sommaire', 'Au sommaire'],
                            ['journal', 'Dans le journal'],
                            ['notes', 'Notes & Courrier'],
                          ] as const
                        ).map(([key, label]) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setGlitchRubric(key)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                              glitchRubric === key
                                ? 'bg-[#f97316] text-[#1c140f]'
                                : 'text-[#5d4d42] hover:text-[#1c140f]'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <span className="font-mono text-xs font-medium text-[#c2410c]">
                        creative-glitch.vercel.app
                      </span>
                    </div>

                    <div className="rounded-2xl bg-[#eee6d8] p-5">
                      <div className="flex items-baseline justify-between gap-4 border-b border-black/[0.08] pb-3">
                        <span className="font-display text-lg font-bold text-[#1c140f]">
                          GLITCH Magazine
                        </span>
                        <span className="font-mono text-[11px] text-[#5d4d42]">
                          Quand la confidence a besoin d’un prétexte.
                        </span>
                      </div>

                      {glitchRubric === 'sommaire' && (
                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                          <div className="rounded-xl bg-white p-3.5">
                            <p className="font-mono text-[10px] font-semibold text-[#c2410c]">VOLUME</p>
                            <p className="mt-1 text-xs font-semibold text-[#1c140f]">
                              Numéros &amp; dossiers
                            </p>
                          </div>
                          <div className="rounded-xl bg-white p-3.5">
                            <p className="font-mono text-[10px] font-semibold text-[#c2410c]">JOURNAL</p>
                            <p className="mt-1 text-xs font-semibold text-[#1c140f]">
                              Récits &amp; chroniques
                            </p>
                          </div>
                          <div className="rounded-xl bg-white p-3.5">
                            <p className="font-mono text-[10px] font-semibold text-[#c2410c]">COURRIER</p>
                            <p className="mt-1 text-xs font-semibold text-[#1c140f]">
                              Écrire à GLITCH
                            </p>
                          </div>
                        </div>
                      )}

                      {glitchRubric === 'journal' && (
                        <div className="mt-4 rounded-xl bg-white p-4">
                          <p className="font-mono text-[11px] font-semibold text-[#c2410c]">
                            Dans le journal
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#5d4d42]">
                            Mise en page éditoriale centrée sur la lecture longue, les chroniques
                            personnelles et l’archive par volumes thématiques.
                          </p>
                        </div>
                      )}

                      {glitchRubric === 'notes' && (
                        <div className="mt-4 rounded-xl bg-[#1c140f] p-4 text-white">
                          <p className="font-mono text-[11px] font-medium text-[#fb923c]">
                            Notes &amp; Confidences
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                            Une confidence, une question ? L’espace courrier permet aux lecteurs
                            d’écrire directement au magazine en ligne.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {project.demoType === 'zone-groupe' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-4">
                      <div>
                        <p className="font-mono text-xs font-medium text-[#c2410c]">
                          Boutique en ligne · zone-groupe-sigma.vercel.app
                        </p>
                        <h3 className="mt-1 font-display text-lg font-bold text-[#1c140f]">
                          Zone Groupe : L’électronique au juste prix
                        </h3>
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-[#fb923c] px-5 py-2 text-xs font-bold text-[#1c140f] transition-colors hover:bg-[#f97316]"
                        >
                          Ouvrir la boutique
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
                        <p className="font-mono text-xs font-semibold text-[#1c140f]">
                          Simulation de négociation directe
                        </p>
                        <p className="mt-1 text-xs text-[#5d4d42]">
                          Exemple d’offre tarifaire préparée avant validation avec le vendeur sur
                          WhatsApp.
                        </p>
                        <div className="mt-4">
                          <div className="flex justify-between text-xs font-medium text-[#5d4d42]">
                            <label htmlFor="zone-price">Proposition client (FCFA)</label>
                            <span className="font-mono font-semibold text-[#c2410c] tabular-nums">
                              {zoneProposedPrice.toLocaleString('fr-FR')} FCFA
                            </span>
                          </div>
                          <input
                            id="zone-price"
                            type="range"
                            min={95000}
                            max={135000}
                            step={2500}
                            value={zoneProposedPrice}
                            onChange={(e) => setZoneProposedPrice(Number(e.target.value))}
                            className="mt-2 w-full accent-[#c2410c]"
                          />
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#1c140f] p-5 text-white">
                        <p className="font-mono text-xs font-medium text-[#fb923c]">
                          Récapitulatif WhatsApp vendeur
                        </p>
                        <p className="mt-3 rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-xs leading-relaxed text-white/80">
                          {zoneProposedPrice >= 110000
                            ? `Offre acceptée (${zoneProposedPrice.toLocaleString('fr-FR')} FCFA) -> Commande prête à finaliser sur WhatsApp.`
                            : `Proposition (${zoneProposedPrice.toLocaleString('fr-FR')} FCFA) -> Contre-offre transmise au gérant en direct.`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
