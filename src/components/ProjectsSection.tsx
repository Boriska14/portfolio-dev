import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  LayoutGrid,
  Layers,
  X,
} from 'lucide-react';
import {
  ARCHIVE_ROWS,
  ArchiveRowItem,
  ProjectEntry,
  ProjectId,
  PROJECTS,
} from '../data/portfolioData';
import { ProjectArchitectureVisual } from './ProjectArchitectureVisual';

interface ProjectsSectionProps {
  activeProject: ProjectId;
  viewMode: 'stage' | 'all';
  onSelectProject: (id: ProjectId) => void;
  onChangeViewMode: (mode: 'stage' | 'all') => void;
}

interface PreviewTarget {
  title: string;
  liveUrl?: string;
  previewImage?: string;
}

const EASE_BP = [0.19, 1, 0.22, 1] as const;

function ProjectSheet({
  project,
  onOpenPreview,
}: {
  project: ProjectEntry;
  onOpenPreview: (item: ProjectEntry) => void;
}) {
  return (
    <article
      id={`projet-${project.id}`}
      className="bp-sheet rounded-xl p-6 sm:p-8"
    >
      <header className="flex flex-col justify-between gap-4 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-start">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
            <span className="font-mono font-semibold text-[#1E40AF] tabular-nums">
              Projet {project.index}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.period}</span>
          </div>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0F172A] sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-[#334155] sm:text-base">
            {project.summary}
          </p>
        </div>

        {(project.liveUrl || project.previewImage) && (
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {project.previewImage && (
              <button
                type="button"
                onClick={() => onOpenPreview(project)}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2 text-xs font-semibold text-[#0F172A] transition-colors duration-200 hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1E40AF] whitespace-nowrap shrink-0"
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Aperçu</span>
              </button>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#EFF6FF] px-3.5 py-2 text-xs font-semibold text-[#1E40AF] transition-colors duration-200 hover:bg-[#DBEAFE] whitespace-nowrap shrink-0"
              >
                <span>{project.liveLabel ?? 'Voir la démo'}</span>
                <ExternalLink className="bp-btn-arrow h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </header>

      {/* 7 strict sections */}
      <div className="mt-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
              Contexte
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#334155]">
              {project.context}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
              Objectif
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#334155]">
              {project.objective}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
              Rôle
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#334155]">
              {project.role}
            </p>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6">
          <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
            Architecture
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-[#334155]">
            {project.architectureNote}
          </p>
          <div className="mt-4">
            <ProjectArchitectureVisual
              nodes={project.diagramNodes}
              footer={project.diagramFooter}
              projectTitle={project.shortTitle}
            />
          </div>
        </div>

        <div className="grid gap-6 border-t border-[#E2E8F0] pt-6 md:grid-cols-3">
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
              Réalisation
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#334155]">
              {project.realisation}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
              Résultat
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#334155]">
              {project.result}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
              Suite / apprentissages
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#334155]">
              {project.nextAndLearnings}
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#E2E8F0] pt-5">
        <span className="mr-1 text-xs font-medium text-[#64748B]">
          Technologies :
        </span>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[#E2E8F0] bg-[#F5F5F3] px-2.5 py-1 text-xs font-medium text-[#334155] whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </footer>
    </article>
  );
}

export function ProjectsSection({
  activeProject,
  viewMode,
  onSelectProject,
  onChangeViewMode,
}: ProjectsSectionProps) {
  const [previewTarget, setPreviewTarget] = useState<PreviewTarget | null>(null);
  const [expandedArchiveId, setExpandedArchiveId] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const activeIndex = PROJECTS.findIndex((p) => p.id === activeProject);
  const currentProject = PROJECTS[activeIndex >= 0 ? activeIndex : 0];

  useEffect(() => {
    if (!previewTarget) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreviewTarget(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [previewTarget]);

  const openPreview = (item: ProjectEntry | ArchiveRowItem) => {
    setImageError(false);
    setPreviewTarget({
      title: item.title,
      liveUrl: item.liveUrl,
      previewImage: item.previewImage,
    });
  };

  const handleStep = (delta: number) => {
    const nextIdx = (activeIndex + delta + PROJECTS.length) % PROJECTS.length;
    onSelectProject(PROJECTS[nextIdx].id);
  };

  return (
    <section id="projets" className="analog-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
              Projets &amp; études de cas
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#334155]">
              Naviguez d’un projet à l’autre dans la scène interactive ou affichez l’ensemble des
              huit fiches techniques.
            </p>
          </div>

          {/* Single clean Mode Switcher (Stage Interactif vs Liste complète) */}
          <div
            role="group"
            aria-label="Mode d'affichage des projets"
            className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white p-1 shrink-0"
          >
            <button
              type="button"
              onClick={() => onChangeViewMode('stage')}
              aria-pressed={viewMode === 'stage'}
              className={`inline-flex min-h-[38px] items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap ${
                viewMode === 'stage'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-[#334155] hover:bg-[#EFF6FF] hover:text-[#1E40AF]'
              }`}
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Scène interactive</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeViewMode('all')}
              aria-pressed={viewMode === 'all'}
              className={`inline-flex min-h-[38px] items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap ${
                viewMode === 'all'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-[#334155] hover:bg-[#EFF6FF] hover:text-[#1E40AF]'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Toutes les fiches (8)</span>
            </button>
          </div>
        </div>

        {/* Bulletproof-inspired Split Stage (00:06–00:07) */}
        {viewMode === 'stage' ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left column: staggered numbered selector */}
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 text-xs font-medium text-[#64748B]">
                  <span>Sélection</span>
                  <span className="font-mono tabular-nums text-[#1E40AF]">
                    {currentProject.index} / 0{PROJECTS.length}
                  </span>
                </div>

                <div className="mt-2 divide-y divide-[#E2E8F0]">
                  {PROJECTS.map((project, idx) => {
                    const isSelected = project.id === currentProject.id;
                    const offset = idx % 2 === 1 ? 'pl-3' : '';
                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => onSelectProject(project.id)}
                        className={`bp-work-row flex w-full items-center justify-between gap-2 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${offset}`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`font-mono text-xs font-semibold tabular-nums shrink-0 transition-colors ${
                              isSelected ? 'text-[#2563EB]' : 'text-[#94A3B8]'
                            }`}
                          >
                            {project.index}
                          </span>
                          <span
                            className={`truncate text-sm font-semibold tracking-tight transition-colors ${
                              isSelected
                                ? 'text-[#0F172A]'
                                : 'text-[#0F172A]/45 hover:text-[#0F172A]/80'
                            }`}
                          >
                            {project.shortTitle}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-[#64748B] shrink-0">
                          {project.period.slice(0, 7)}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Carousel Navigation Bar (echoing 00:06 bar) */}
                <div className="mt-4 flex items-center justify-between border-t border-[#E2E8F0] pt-3">
                  <div className="flex items-center gap-1.5">
                    {PROJECTS.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => onSelectProject(p.id)}
                        aria-label={`Afficher ${p.shortTitle}`}
                        className={`h-1.5 rounded-full transition-all duration-200 ${
                          p.id === currentProject.id
                            ? 'w-5 bg-[#1E40AF]'
                            : 'w-1.5 bg-[#CBD5E1] hover:bg-[#93C5FD]'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleStep(-1)}
                      aria-label="Projet précédent"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] transition-colors hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStep(1)}
                      aria-label="Projet suivant"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] transition-colors hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Animated Active Showcase Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: EASE_BP }}
                >
                  <ProjectSheet project={currentProject} onOpenPreview={openPreview} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="mt-10 space-y-10">
            {PROJECTS.map((project) => (
              <ProjectSheet
                key={project.id}
                project={project}
                onOpenPreview={openPreview}
              />
            ))}
          </div>
        )}

        {/* Additional CV / Web archive rows */}
        <div className="mt-12 bp-sheet rounded-xl p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E2E8F0] pb-4">
            <div>
              <h3 className="text-base font-semibold text-[#0F172A]">
                Autres réalisations &amp; sites en ligne
              </h3>
              <p className="mt-1 text-xs text-[#64748B]">
                Missions embarquées et applications web complémentaires.
              </p>
            </div>
            <span className="font-mono text-xs text-[#64748B]">Archive A1–A3</span>
          </div>

          <div className="divide-y divide-[#E2E8F0]">
            {ARCHIVE_ROWS.map((item) => {
              const isOpen = expandedArchiveId === item.id;
              return (
                <div key={item.id} className="py-4">
                  <div className="group flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => setExpandedArchiveId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      className="flex flex-1 items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                    >
                      <span className="font-mono text-xs font-medium text-[#1E40AF] shrink-0">
                        {item.index}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#0F172A] transition-colors group-hover:text-[#1E40AF]">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#64748B] truncate">{item.subtitle}</p>
                      </div>
                      <span className="index-row-line hidden flex-1 md:block" aria-hidden="true" />
                    </button>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-[#64748B] mr-1">
                        {item.period}
                      </span>

                      {item.previewImage && (
                        <button
                          type="button"
                          onClick={() => openPreview(item)}
                          className="inline-flex min-h-[36px] items-center gap-1 rounded-md border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-medium text-[#0F172A] transition-colors hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
                        >
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Aperçu</span>
                        </button>
                      )}

                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[36px] items-center gap-1 rounded-md bg-[#EFF6FF] px-2.5 py-1 text-xs font-medium text-[#1E40AF] transition-colors hover:bg-[#DBEAFE]"
                        >
                          <span>Site</span>
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#334155]">
                      <p>{item.detail}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-[#E2E8F0] bg-white px-2 py-0.5 text-xs font-medium text-[#475569]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox preview modal */}
      <AnimatePresence>
        {previewTarget && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/65 p-4 backdrop-blur-xs"
            onClick={() => setPreviewTarget(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.24, ease: EASE_BP }}
              className="w-full max-w-4xl overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-4">
                <div>
                  <h3 id="preview-modal-title" className="text-base font-semibold text-[#0F172A]">
                    {previewTarget.title}
                  </h3>
                  {previewTarget.liveUrl && (
                    <p className="mt-0.5 font-mono text-xs text-[#64748B]">
                      {previewTarget.liveUrl}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {previewTarget.liveUrl && (
                    <a
                      href={previewTarget.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#1E40AF] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1E3A8A] whitespace-nowrap"
                    >
                      <span>Ouvrir le site</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setPreviewTarget(null)}
                    aria-label="Fermer l’aperçu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#334155] transition-colors hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-4 sm:p-6">
                {previewTarget.previewImage && !imageError ? (
                  <img
                    src={previewTarget.previewImage}
                    alt={`Capture d’écran de ${previewTarget.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="max-h-[70vh] w-full rounded-lg border border-[#E2E8F0] bg-white object-contain"
                  />
                ) : (
                  <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-[#E2E8F0] bg-white p-6 text-center">
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {previewTarget.title}
                    </p>
                    <p className="mt-2 max-w-md text-xs text-[#64748B]">
                      L’aperçu visuel n’est pas disponible pour le moment. Vous pouvez consulter
                      l’application directement via le lien en ligne.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
