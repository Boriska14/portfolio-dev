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
  const [aquasafeRegion, setAquasafeRegion] = useState<'Centre' | 'Littoral' | 'Ouest'>('Centre');
  const [aquasafeCertifiedOnly, setAquasafeCertifiedOnly] = useState<boolean>(false);
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

  useEffect(() => {
    setActiveTab(initialTab);
    setSelectedLayerIdx(0);
    setEneoChecked(false);
    setSupplyStep(0);
    setPicState('En attente d’empreinte...');
    setGlitchRubric('sommaire');
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
      service: 'Interface React',
      engine: 'Envoi de commande',
      payload: '{ "order_id": "CMD-408", "sku": "CAP-IND-09", "qty": 12 }',
      note: 'Première vérification côté client.',
    },
    {
      service: 'Service FastAPI',
      engine: 'Contrôle du format',
      payload: 'status: 202 Accepted · vers PostgreSQL + MongoDB',
      note: 'Validation rapide et transmission aux services concernés.',
    },
    {
      service: 'PostgreSQL',
      engine: 'Enregistrement SQL',
      payload: 'INSERT INTO orders (id, sku, qty) VALUES ("CMD-408", "CAP-IND-09", 12);',
      note: 'Sauvegarde fiable des commandes et des stocks.',
    },
    {
      service: 'MongoDB & Flask',
      engine: 'Historique d’étapes',
      payload: '{ "order_id": "CMD-408", "event": "DISPATCH_READY", "warehouse": "PAR-SUD" }',
      note: 'Suivi souple des événements de livraison.',
    },
  ];

  const aquasafeWells = [
    { id: 'AQ-014', region: 'Centre', type: 'Forage communautaire', status: 'Certifié MINEE' },
    { id: 'AQ-029', region: 'Littoral', type: 'Puits aménagé', status: 'En vérification' },
    { id: 'AQ-041', region: 'Centre', type: 'Forage profond', status: 'Certifié MINEE' },
    { id: 'AQ-058', region: 'Ouest', type: 'Forage scolaire', status: 'Certifié MINEE' },
  ].filter(
    (w) =>
      w.region === aquasafeRegion && (!aquasafeCertifiedOnly || w.status === 'Certifié MINEE')
  );

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
      setPicState('Empreinte #04 reconnue → Ouverture activée (3s)');
    } else {
      setPicState('Empreinte inconnue → Accès refusé');
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
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101012]/80 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 bg-[#101012] px-6 py-5 text-white">
          <div>
            <p className="font-mono text-xs text-[#f0674b]">
              {project.category} · {project.country} · {project.period}
            </p>
            <h2 id="case-study-title" className="mt-1 font-display text-2xl font-semibold">
              {project.title}
            </h2>
            <p className="mt-0.5 text-sm text-neutral-300">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-700 text-neutral-300 transition-colors hover:border-[#e04628] hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 bg-[#f2ede4] px-6 py-3">
          <div className="inline-flex items-center gap-1 rounded-lg border border-[#141414]/15 bg-white p-1">
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
                  className={`relative min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active ? 'text-white' : 'text-neutral-700 hover:text-[#101012]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="case-modal-tab-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-md bg-[#c4381e]"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#101012] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#c4381e]"
              >
                Voir le site
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#c4381e] hover:text-[#a82d16]"
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
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-[#141414]/12 bg-[#f2ede4]/60 p-5">
                    <h3 className="font-display text-sm font-semibold text-[#101012]">
                      Le point de départ
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">{project.problem}</p>
                  </div>
                  <div className="rounded-xl border border-[#141414]/12 bg-[#f2ede4]/60 p-5">
                    <h3 className="font-display text-sm font-semibold text-[#101012]">
                      Ma contribution
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">{project.role}</p>
                  </div>
                </div>

                {/* Visual Representation & Plain Overview */}
                <div>
                  <h3 className="font-display text-base font-semibold text-[#101012]">
                    Comment c’est construit
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {project.architectureSummary}
                  </p>

                  <div className="mt-4">
                    <ProjectArchitectureVisual projectId={project.id} variant="light" />
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
                            className={`flex w-full flex-col rounded-lg border p-3.5 text-left transition-all duration-150 ${
                              active
                                ? 'border-[#c4381e] bg-[#101012] text-white'
                                : 'border-neutral-200 bg-white text-[#101012] hover:border-neutral-300'
                            }`}
                          >
                            <span
                              className={`font-mono text-[11px] ${
                                active ? 'text-[#f0674b]' : 'text-neutral-500'
                              }`}
                            >
                              {layer.layer}
                            </span>
                            <span className="mt-0.5 font-display text-sm font-semibold">
                              {layer.component}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex flex-col justify-between rounded-xl border border-[#141414]/12 bg-[#f2ede4]/60 p-5 lg:col-span-7">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedLayerIdx}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="font-mono text-xs font-semibold text-[#c4381e]">
                            {project.architectureLayers[selectedLayerIdx]?.layer}
                          </p>
                          <h4 className="mt-1 font-display text-lg font-semibold text-[#101012]">
                            {project.architectureLayers[selectedLayerIdx]?.component}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                            {project.architectureLayers[selectedLayerIdx]?.detail}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      <div className="mt-6 border-t border-neutral-200 pt-4">
                        <p className="font-mono text-xs text-neutral-600">
                          Outils : {project.technologies.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-display text-base font-semibold text-[#101012]">
                      Difficultés rencontrées
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-neutral-700">
                      {project.challenges.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-neutral-200 bg-white px-4 py-3"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-base font-semibold text-[#101012]">
                      Résultats
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-neutral-700">
                      {project.results.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-[#141414]/12 bg-[#f2ede4]/55 px-4 py-3"
                        >
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
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div className="rounded-lg border border-[#141414]/12 bg-[#f2ede4] px-4 py-3 text-xs leading-relaxed text-neutral-700">
                  Aperçu interactif du projet — manipulez les paramètres ci-dessous pour voir le comportement attendu.
                </div>

                {project.demoType === 'umons-rail' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-4 rounded-xl border border-neutral-200 bg-white p-5">
                      <h3 className="font-display text-base font-semibold text-[#101012]">
                        Mesures capteurs
                      </h3>
                      <div>
                        <div className="flex justify-between text-xs font-medium text-neutral-700">
                          <label htmlFor="rail-vib">Vibration rail (mm/s)</label>
                          <span className="font-mono tabular-nums">{railVibration.toFixed(1)} mm/s</span>
                        </div>
                        <input
                          id="rail-vib"
                          type="range"
                          min={0.5}
                          max={8.0}
                          step={0.1}
                          value={railVibration}
                          onChange={(e) => setRailVibration(Number(e.target.value))}
                          className="mt-2 w-full accent-[#c4381e]"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-medium text-neutral-700">
                          <label htmlFor="rail-temp">Température essieu (°C)</label>
                          <span className="font-mono tabular-nums">{railTemp.toFixed(1)} °C</span>
                        </div>
                        <input
                          id="rail-temp"
                          type="range"
                          min={10}
                          max={65}
                          step={0.5}
                          value={railTemp}
                          onChange={(e) => setRailTemp(Number(e.target.value))}
                          className="mt-2 w-full accent-[#c4381e]"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl border border-neutral-800 bg-[#101012] p-5 text-white">
                      <p className="font-mono text-xs text-[#f0674b]">
                        Lecture Python · UMONS
                      </p>
                      <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-neutral-200">
                        {JSON.stringify(
                          {
                            capteur: 'rail-mons-02',
                            vibration_mm_s: Number(railVibration.toFixed(1)),
                            temperature_c: Number(railTemp.toFixed(1)),
                            etat:
                              railVibration > 5.0 || railTemp > 50
                                ? 'ALERTE_DETECTEE'
                                : 'NORMAL',
                          },
                          null,
                          2
                        )}
                      </pre>
                    </div>
                  </div>
                )}

                {project.demoType === 'aquasafe' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex gap-1 rounded-lg border border-neutral-200 bg-[#f2ede4] p-1">
                        {(['Centre', 'Littoral', 'Ouest'] as const).map((reg) => (
                          <button
                            key={reg}
                            type="button"
                            onClick={() => setAquasafeRegion(reg)}
                            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                              aquasafeRegion === reg
                                ? 'bg-[#101012] text-white'
                                : 'text-neutral-700 hover:text-[#101012]'
                            }`}
                          >
                            {reg}
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setAquasafeCertifiedOnly((v) => !v)}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                          aquasafeCertifiedOnly
                            ? 'border-[#c4381e] bg-[#fdece8] text-[#c4381e]'
                            : 'border-neutral-200 bg-white text-neutral-700'
                        }`}
                      >
                        {aquasafeCertifiedOnly ? 'Certifiés MINEE uniquement' : 'Tous les statuts'}
                      </button>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-neutral-200">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-neutral-200 bg-[#f2ede4] font-mono text-neutral-700">
                          <tr>
                            <th className="px-4 py-3">Code</th>
                            <th className="px-4 py-3">Région</th>
                            <th className="px-4 py-3">Ouvrage</th>
                            <th className="px-4 py-3">Statut</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100 font-mono text-neutral-800">
                          {aquasafeWells.map((w) => (
                            <tr key={w.id}>
                              <td className="px-4 py-3 font-semibold">{w.id}</td>
                              <td className="px-4 py-3">{w.region}</td>
                              <td className="px-4 py-3">{w.type}</td>
                              <td className="px-4 py-3 font-semibold text-[#c4381e]">{w.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {project.demoType === 'sparte-biometric' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-neutral-200 bg-white p-5">
                      <h3 className="font-display text-base font-semibold text-[#101012]">
                        Test de lecture biométrique
                      </h3>
                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setPicFingerMatch('valid')}
                          className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                            picFingerMatch === 'valid'
                              ? 'border-[#c4381e] bg-[#101012] text-white'
                              : 'border-neutral-200 text-neutral-700'
                          }`}
                        >
                          Empreinte enregistrée
                        </button>
                        <button
                          type="button"
                          onClick={() => setPicFingerMatch('unknown')}
                          className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                            picFingerMatch === 'unknown'
                              ? 'border-[#c4381e] bg-[#101012] text-white'
                              : 'border-neutral-200 text-neutral-700'
                          }`}
                        >
                          Empreinte inconnue
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={handleRunPicAuth}
                        className="mt-4 inline-flex min-h-[40px] items-center rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white hover:bg-[#a82d16]"
                      >
                        Lancer la vérification
                      </button>
                    </div>

                    <div className="rounded-xl border border-neutral-800 bg-[#101012] p-5 text-white">
                      <p className="font-mono text-xs text-[#f0674b]">Réponse microcontrôleur PIC</p>
                      <p className="mt-3 rounded border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-200">
                        {picState}
                      </p>
                    </div>
                  </div>
                )}

                {project.demoType === 'digital-twin' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-neutral-200 bg-white p-5">
                      <h3 className="font-display text-base font-semibold text-[#101012]">
                        Pilotage du jumeau numérique
                      </h3>
                      <div className="mt-4 space-y-5">
                        <div>
                          <div className="flex justify-between text-xs font-medium text-neutral-700">
                            <label htmlFor="twin-speed">Vitesse de l’axe (%)</label>
                            <span className="font-mono tabular-nums text-[#c4381e]">{twinSpeed}%</span>
                          </div>
                          <input
                            id="twin-speed"
                            type="range"
                            min={0}
                            max={100}
                            value={twinSpeed}
                            onChange={(e) => setTwinSpeed(Number(e.target.value))}
                            className="mt-2 w-full accent-[#c4381e]"
                          />
                        </div>

                        <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                          <span className="text-sm font-medium text-neutral-700">
                            Pince de la cellule
                          </span>
                          <button
                            type="button"
                            onClick={() => setTwinGripperOpen((v) => !v)}
                            className="rounded-lg bg-[#101012] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
                          >
                            {twinGripperOpen ? 'Fermer la pince' : 'Ouvrir la pince'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-neutral-800 bg-[#101012] p-5 text-neutral-100">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#f0674b]">
                          État retourné par Flask
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopyPayload(
                              JSON.stringify(
                                {
                                  vitesse_pct: twinSpeed,
                                  pince: twinGripperOpen ? 'OUVERTE' : 'FERMEE',
                                },
                                null,
                                2
                              )
                            )
                          }
                          className="inline-flex items-center gap-1 text-xs text-neutral-300 hover:text-white"
                        >
                          {copiedPayload ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                          {copiedPayload ? 'Copié' : 'Copier'}
                        </button>
                      </div>
                      <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-neutral-200">
                        {JSON.stringify(
                          {
                            simulateur: 'gazebo',
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
                      <p className="text-sm text-neutral-700">
                        Aperçu du logiciel de réconciliation automatique des ventes.
                      </p>
                      <button
                        type="button"
                        onClick={() => setEneoChecked((v) => !v)}
                        className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white hover:bg-[#a82d16]"
                      >
                        {eneoChecked ? (
                          <>
                            <RotateCcw className="h-3.5 w-3.5" />
                            Réinitialiser
                          </>
                        ) : (
                          'Lancer la réconciliation'
                        )}
                      </button>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-neutral-200">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-neutral-200 bg-[#f2ede4] font-mono text-neutral-700">
                          <tr>
                            <th className="px-4 py-3">Référence</th>
                            <th className="px-4 py-3">Ventes</th>
                            <th className="px-4 py-3">Facturation</th>
                            <th className="px-4 py-3">Résultat</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100 font-mono tabular-nums text-neutral-800">
                          <tr>
                            <td className="px-4 py-3">TX-2024-101</td>
                            <td className="px-4 py-3">42 500</td>
                            <td className="px-4 py-3">42 500</td>
                            <td className="px-4 py-3">
                              {eneoChecked ? 'Conforme' : 'En attente'}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">TX-2024-102</td>
                            <td className="px-4 py-3">18 900</td>
                            <td className="px-4 py-3">18 400</td>
                            <td className="px-4 py-3 font-semibold text-[#c4381e]">
                              {eneoChecked ? 'Écart détecté : -500' : 'En attente'}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">TX-2024-103</td>
                            <td className="px-4 py-3">31 000</td>
                            <td className="px-4 py-3">Absent</td>
                            <td className="px-4 py-3 font-semibold text-[#c4381e]">
                              {eneoChecked ? 'Non facturé' : 'En attente'}
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
                          className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                            supplyStep === idx
                              ? 'border-[#c4381e] bg-[#c4381e] text-white'
                              : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                          }`}
                        >
                          Étape {idx + 1} · {st.service}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-xl border border-neutral-800 bg-[#101012] p-5 text-white">
                      <p className="font-mono text-xs text-[#f0674b]">
                        {supplyStages[supplyStep].service} · {supplyStages[supplyStep].engine}
                      </p>
                      <p className="mt-2 text-sm text-neutral-300">{supplyStages[supplyStep].note}</p>
                      <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-200">
                        {supplyStages[supplyStep].payload}
                      </pre>
                    </div>
                  </div>
                )}

                {project.demoType === 'ugecam' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-4 rounded-xl border border-neutral-200 bg-white p-5">
                      <h3 className="font-display text-base font-semibold text-[#101012]">
                        Grille d’évaluation
                      </h3>
                      {(
                        [
                          ['ergonomie', 'Prise en main'],
                          ['tracabilite', 'Suivi des dossiers'],
                          ['conformite', 'Respect des critères'],
                        ] as const
                      ).map(([key, label]) => (
                        <div key={key}>
                          <div className="flex justify-between text-xs font-medium text-neutral-700">
                            <span>{label}</span>
                            <span className="font-mono tabular-nums">{ugecamScores[key]} / 5</span>
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
                            className="mt-1.5 w-full accent-[#c4381e]"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col justify-between rounded-xl border border-[#141414]/12 bg-[#f2ede4] p-5">
                      <div>
                        <p className="font-mono text-xs font-semibold text-[#c4381e]">
                          Note calculée
                        </p>
                        <p className="mt-2 font-display text-2xl font-semibold tabular-nums text-[#101012]">
                          Moyenne :{' '}
                          {(
                            (ugecamScores.ergonomie +
                              ugecamScores.tracabilite +
                              ugecamScores.conformite) /
                            3
                          ).toFixed(2)}{' '}
                          / 5
                        </p>
                        <p className="mt-2 text-sm text-neutral-700">
                          Le score est calculé et enregistré dans l’historique de l’établissement.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.demoType === 'smart-home' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-neutral-200 bg-white p-5">
                      <h3 className="font-display text-base font-semibold text-[#101012]">
                        Simulation d’accès connecté
                      </h3>
                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setBadgeAuthorized(true)}
                          className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                            badgeAuthorized
                              ? 'border-[#c4381e] bg-[#101012] text-white'
                              : 'border-neutral-200 text-neutral-700'
                          }`}
                        >
                          Badge actif (BADGE-014)
                        </button>
                        <button
                          type="button"
                          onClick={() => setBadgeAuthorized(false)}
                          className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                            !badgeAuthorized
                              ? 'border-[#c4381e] bg-[#101012] text-white'
                              : 'border-neutral-200 text-neutral-700'
                          }`}
                        >
                          Badge bloqué (BADGE-992)
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={handleSimulateBadge}
                        className="mt-4 inline-flex min-h-[40px] items-center rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white hover:bg-[#a82d16]"
                      >
                        Simuler un passage
                      </button>
                    </div>

                    <div className="rounded-xl border border-neutral-800 bg-[#101012] p-5 text-white">
                      <p className="font-mono text-xs text-[#f0674b]">Journal des accès</p>
                      <ul className="mt-3 space-y-2 font-mono text-xs">
                        {accessLogs.map((log, i) => (
                          <li
                            key={`${log.time}-${i}`}
                            className="rounded border border-neutral-800 bg-neutral-950/70 px-3 py-2 text-neutral-200 tabular-nums"
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
                      <div className="flex gap-1 rounded-lg border border-neutral-200 bg-[#f2ede4] p-1">
                        <button
                          type="button"
                          onClick={() => setWuendjoMode('groupe')}
                          className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                            wuendjoMode === 'groupe'
                              ? 'bg-[#101012] text-white'
                              : 'text-neutral-700 hover:text-[#101012]'
                          }`}
                        >
                          Voyage en groupe
                        </button>
                        <button
                          type="button"
                          onClick={() => setWuendjoMode('solo')}
                          className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                            wuendjoMode === 'solo'
                              ? 'bg-[#101012] text-white'
                              : 'text-neutral-700 hover:text-[#101012]'
                          }`}
                        >
                          Voyage en solo
                        </button>
                      </div>

                      <span className="font-mono text-xs text-[#c4381e]">
                        {wuendjoMode === 'groupe' ? 'Itinéraire partagé (4 participants)' : 'Carnet personnel (Solo)'}
                      </span>
                    </div>

                    <div className="rounded-xl border border-neutral-200 bg-white p-5">
                      <div className="mb-4 flex flex-wrap gap-2 text-[11px] font-mono text-neutral-600">
                        <span className="rounded border border-neutral-200 bg-[#f2ede4]/60 px-2.5 py-1">
                          Budget Recharts
                        </span>
                        <span className="rounded border border-neutral-200 bg-[#f2ede4]/60 px-2.5 py-1">
                          Destinations, activités &amp; restaurants
                        </span>
                        <span className="rounded border border-neutral-200 bg-[#f2ede4]/60 px-2.5 py-1">
                          Jeux de piste
                        </span>
                        <span className="rounded border border-neutral-200 bg-[#f2ede4]/60 px-2.5 py-1">
                          Guides visas
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {wuendjoSteps.map((s) => (
                          <div
                            key={`${s.day}-${s.title}`}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-[#f2ede4]/45 px-4 py-3 text-xs"
                          >
                            <div>
                              <span className="font-mono font-semibold text-[#c4381e]">{s.day} · </span>
                              <span className="font-semibold text-[#101012]">{s.title}</span>
                            </div>
                            <span className="font-mono text-neutral-600">{s.tag}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <input
                          type="text"
                          value={wuendjoNewStep}
                          onChange={(e) => setWuendjoNewStep(e.target.value)}
                          placeholder="Ajouter une étape au séjour..."
                          className="min-w-[200px] flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-xs text-[#101012] focus:border-[#c4381e] focus:outline-none"
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
                          className="rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white hover:bg-[#a82d16]"
                        >
                          Ajouter l’étape
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {project.demoType === 'jeffrey' && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-neutral-200 bg-white p-5">
                      <h3 className="font-display text-base font-semibold text-[#101012]">
                        Demander à Jeffrey
                      </h3>
                      <p className="mt-1 text-xs text-neutral-600">
                        Ajoutez une tâche ou un rappel pour voir comment Jeffrey organise votre journée.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <input
                          type="text"
                          value={jeffreyInput}
                          onChange={(e) => setJeffreyInput(e.target.value)}
                          placeholder="Ex. Rappeler d’envoyer le devis..."
                          className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-xs text-[#101012] focus:border-[#c4381e] focus:outline-none"
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
                          className="rounded-lg bg-[#c4381e] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#a82d16]"
                        >
                          Noter
                        </button>
                      </div>
                    </div>

                    <div className="rounded-xl border border-neutral-800 bg-[#101012] p-5 text-white">
                      <p className="font-mono text-xs text-[#f0674b]">Suivi du jour · Jeffrey</p>
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
                              className="flex w-full items-center justify-between gap-2 rounded border border-neutral-800 bg-neutral-950/70 px-3 py-2 text-left transition-colors hover:border-neutral-700"
                            >
                              <span className={task.done ? 'line-through text-neutral-500' : 'text-neutral-200'}>
                                {task.text}
                              </span>
                              <span className="font-mono text-[10px] text-[#f0674b]">
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
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-neutral-600">
                        Prévisualisation du format d’écran · mateconsulting-pi.vercel.app
                      </span>
                      <div className="flex gap-1 rounded-lg border border-neutral-200 bg-[#f2ede4] p-1">
                        <button
                          type="button"
                          onClick={() => setMateViewport('desktop')}
                          className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                            mateViewport === 'desktop'
                              ? 'bg-[#101012] text-white'
                              : 'text-neutral-700'
                          }`}
                        >
                          Ordinateur
                        </button>
                        <button
                          type="button"
                          onClick={() => setMateViewport('mobile')}
                          className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                            mateViewport === 'mobile'
                              ? 'bg-[#101012] text-white'
                              : 'text-neutral-700'
                          }`}
                        >
                          Mobile
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center rounded-xl border border-neutral-200 bg-[#f2ede4]/60 p-6">
                      <div
                        className={`rounded-lg border border-[#141414]/15 bg-white p-5 transition-all duration-300 ${
                          mateViewport === 'mobile' ? 'w-72' : 'w-full'
                        }`}
                      >
                        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                          <span className="font-display text-sm font-semibold text-[#101012]">
                            MATE Consulting
                          </span>
                          <span className="font-mono text-[10px] text-[#c4381e]">
                            Gestion financière externalisée PME/TPE
                          </span>
                        </div>
                        <div
                          className={`mt-4 grid gap-3 ${
                            mateViewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
                          }`}
                        >
                          <div className="rounded bg-[#101012] p-3 text-white">
                            <p className="font-mono text-[10px] text-[#f0674b]">01</p>
                            <p className="mt-1 text-xs font-semibold">Précomptabilité agile</p>
                          </div>
                          <div className="rounded border border-neutral-200 bg-[#f2ede4]/55 p-3 text-[#101012]">
                            <p className="font-mono text-[10px] text-[#c4381e]">02</p>
                            <p className="mt-1 text-xs font-semibold">Aide à la décision</p>
                          </div>
                          <div className="rounded border border-neutral-200 bg-white p-3 text-[#101012]">
                            <p className="font-mono text-[10px] text-[#c4381e]">03</p>
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
                      <div className="flex gap-1 rounded-lg border border-neutral-200 bg-[#f2ede4] p-1">
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
                            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                              glitchRubric === key
                                ? 'bg-[#101012] text-white'
                                : 'text-neutral-700 hover:text-[#101012]'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <span className="font-mono text-xs text-[#c4381e]">
                        creative-glitch.vercel.app
                      </span>
                    </div>

                    <div className="rounded-xl border border-neutral-200 bg-[#f2ede4]/55 p-5">
                      <div className="border-b border-[#141414]/12 pb-3 flex items-baseline justify-between gap-4">
                        <span className="font-display text-lg font-semibold text-[#101012]">
                          GLITCH Magazine
                        </span>
                        <span className="font-mono text-[11px] text-neutral-600">
                          Quand la confidence a besoin d’un prétexte.
                        </span>
                      </div>

                      {glitchRubric === 'sommaire' && (
                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                          <div className="rounded-lg border border-[#141414]/12 bg-white p-3.5">
                            <p className="font-mono text-[10px] text-[#c4381e]">VOLUME</p>
                            <p className="mt-1 text-xs font-semibold text-[#101012]">
                              Numéros &amp; dossiers
                            </p>
                          </div>
                          <div className="rounded-lg border border-[#141414]/12 bg-white p-3.5">
                            <p className="font-mono text-[10px] text-[#c4381e]">JOURNAL</p>
                            <p className="mt-1 text-xs font-semibold text-[#101012]">
                              Récits &amp; chroniques
                            </p>
                          </div>
                          <div className="rounded-lg border border-[#141414]/12 bg-white p-3.5">
                            <p className="font-mono text-[10px] text-[#c4381e]">COURRIER</p>
                            <p className="mt-1 text-xs font-semibold text-[#101012]">
                              Écrire à GLITCH
                            </p>
                          </div>
                        </div>
                      )}

                      {glitchRubric === 'journal' && (
                        <div className="mt-4 rounded-lg border border-[#141414]/12 bg-white p-4">
                          <p className="font-mono text-[11px] text-[#c4381e]">Dans le journal</p>
                          <p className="mt-1.5 text-sm text-neutral-800 leading-relaxed">
                            Mise en page éditoriale centrée sur la lecture longue, les chroniques
                            personnelles et l’archive par volumes thématiques.
                          </p>
                        </div>
                      )}

                      {glitchRubric === 'notes' && (
                        <div className="mt-4 rounded-lg border border-neutral-800 bg-[#101012] p-4 text-white">
                          <p className="font-mono text-[11px] text-[#f0674b]">
                            Notes &amp; Confidences
                          </p>
                          <p className="mt-1.5 text-sm text-neutral-200 leading-relaxed">
                            Une confidence, une question ? L’espace courrier permet aux lecteurs
                            d’écrire directement au magazine en ligne.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {project.demoType === 'zone-groupe' && (
                  <div className="rounded-xl border border-neutral-200 bg-white p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                      <div>
                        <p className="font-mono text-xs text-[#c4381e]">Application déployée</p>
                        <h3 className="mt-1 font-display text-lg font-semibold text-[#101012]">
                          Zone Groupe
                        </h3>
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#a82d16]"
                        >
                          Ouvrir zone-groupe-sigma.vercel.app
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                      Application web développée et mise en ligne sur Vercel. Cliquez sur le bouton
                      ci-dessus pour consulter la version déployée dans un nouvel onglet.
                    </p>
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
