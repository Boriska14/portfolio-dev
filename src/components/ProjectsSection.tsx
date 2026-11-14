import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy, ProjectCategory } from '../data/portfolioData';
import { ProjectArchitectureVisual } from './ProjectArchitectureVisual';
import { RevealText } from './RevealText';

type CategoryFilter = 'Tous' | ProjectCategory;

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy, initialTab: 'case-study' | 'demo') => void;
}

const CATEGORY_OPTIONS: CategoryFilter[] = ['Tous', 'Professionnel', 'Académique', 'Personnel'];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('Tous');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  const visibleProjects =
    categoryFilter === 'Tous'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === categoryFilter);

  const safeIndex = Math.min(currentSlide, Math.max(0, visibleProjects.length - 1));
  const activeProject = visibleProjects[safeIndex];

  const goToSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, visibleProjects.length - 1));
    setDirection(clamped >= safeIndex ? 1 : -1);
    setCurrentSlide(clamped);
  };

  const handleFilterChange = (option: CategoryFilter) => {
    setDirection(1);
    setCategoryFilter(option);
    setCurrentSlide(0);
  };

  return (
    <section id="projects" className="border-b border-[#141414]/15 bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header & Controls */}
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold text-[#c4381e]">Projets choisis</p>
            <RevealText>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-[#101012] sm:text-4xl">
                Ce que j’ai conçu et mis en production
              </h2>
            </RevealText>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Projets réalisés en entreprise, en recherche ou à titre personnel — avec le contexte,
              ma contribution et un aperçu interactif pour chacun.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <div
              role="tablist"
              aria-label="Filtrer par nature de projet"
              className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-neutral-200 bg-[#f2ede4] p-1"
            >
              {CATEGORY_OPTIONS.map((option) => {
                const active = categoryFilter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleFilterChange(option)}
                    className={`relative min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      active ? 'text-white' : 'text-neutral-700 hover:text-[#101012]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="project-category-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-md bg-[#101012]"
                      />
                    )}
                    <span className="relative z-10">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-[#f2ede4] p-1">
              {(['slider', 'grid'] as const).map((mode) => {
                const active = viewMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setViewMode(mode)}
                    className={`relative min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                      active ? 'text-white' : 'text-neutral-700 hover:text-[#101012]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="project-view-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-md bg-[#c4381e]"
                      />
                    )}
                    <span className="relative z-10">{mode === 'slider' ? 'Diaporama' : 'Grille'}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'slider' && activeProject ? (
            <motion.div
              key="slider-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              {/* Slider Navigation Bar */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 font-mono text-xs text-neutral-600 tabular-nums">
                  <span className="font-semibold text-[#c4381e]">
                    {String(safeIndex + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="text-neutral-400">
                    /
                  </span>
                  <span>{String(visibleProjects.length).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="hidden sm:inline text-neutral-300">
                    ·
                  </span>
                  <span className="hidden sm:inline font-medium text-[#101012]">
                    {activeProject.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToSlide(safeIndex - 1)}
                    disabled={safeIndex === 0}
                    aria-label="Projet précédent"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#101012] transition-all duration-200 hover:scale-105 hover:border-[#c4381e] hover:bg-[#c4381e] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(safeIndex + 1)}
                    disabled={safeIndex >= visibleProjects.length - 1}
                    aria-label="Projet suivant"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#101012] transition-all duration-200 hover:scale-105 hover:border-[#c4381e] hover:bg-[#c4381e] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Smooth Directional Slide Transition */}
              <div className="overflow-hidden rounded-xl border border-neutral-200">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.article
                    key={activeProject.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -36 }}
                    transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 bg-white lg:grid-cols-12"
                  >
                    {/* Left Editorial Graphic Panel */}
                    <div
                      className={`flex flex-col justify-between gap-6 p-7 text-white sm:p-9 lg:col-span-5 ${
                        safeIndex % 2 === 0 ? 'bg-[#101012]' : 'bg-[#c4381e]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span
                            className={safeIndex % 2 === 0 ? 'text-[#f0674b]' : 'text-[#ffe4dc]'}
                          >
                            {activeProject.category}
                          </span>
                          <span
                            className={`tabular-nums ${
                              safeIndex % 2 === 0 ? 'text-neutral-400' : 'text-[#ffd0c4]'
                            }`}
                          >
                            {String(safeIndex + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
                          {activeProject.title}
                        </h3>
                        <p
                          className={`mt-1.5 text-xs sm:text-sm ${
                            safeIndex % 2 === 0 ? 'text-neutral-300' : 'text-[#ffe4dc]'
                          }`}
                        >
                          {activeProject.subtitle}
                        </p>
                      </div>

                      <ProjectArchitectureVisual projectId={activeProject.id} variant="dark" />

                      <div
                        className={`border-t pt-4 font-mono text-xs ${
                          safeIndex % 2 === 0
                            ? 'border-neutral-800 text-neutral-400'
                            : 'border-white/25 text-[#ffe4dc]'
                        }`}
                      >
                        <p className="text-white">{activeProject.context}</p>
                        <p className="mt-1 tabular-nums">{activeProject.period}</p>
                      </div>
                    </div>

                    {/* Right Warm Paper Story Panel */}
                    <div className="flex flex-col justify-between bg-[#f2ede4]/35 p-7 sm:p-10 lg:col-span-7">
                      <div className="space-y-5">
                        <p className="text-base leading-relaxed text-[#262523]">
                          {activeProject.summary}
                        </p>

                        <div className="grid grid-cols-1 gap-5 border-t border-neutral-200 pt-5 sm:grid-cols-2 text-xs leading-relaxed">
                          <div>
                            <p className="font-mono font-semibold text-[#101012]">Le contexte</p>
                            <p className="mt-1.5 text-neutral-700">{activeProject.problem}</p>
                          </div>
                          <div>
                            <p className="font-mono font-semibold text-[#101012]">Ce que j’ai fait</p>
                            <p className="mt-1.5 text-neutral-700">{activeProject.role}</p>
                          </div>
                        </div>

                        <div className="border-t border-neutral-200 pt-4">
                          <p className="font-mono text-xs font-semibold text-[#101012]">
                            Ce que ça a donné
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-neutral-700">
                            {activeProject.results.map((r) => (
                              <li key={r}>— {r}</li>
                            ))}
                          </ul>
                        </div>

                        <p className="font-mono text-[11px] text-neutral-600">
                          Outils : {activeProject.technologies.join(' · ')}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-6">
                        <button
                          type="button"
                          onClick={() => onSelectProject(activeProject, 'case-study')}
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#a82d16] whitespace-nowrap shrink-0"
                        >
                          Lire le détail
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectProject(activeProject, 'demo')}
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-[#101012] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#c4381e] hover:text-[#c4381e] whitespace-nowrap shrink-0"
                        >
                          <Play className="h-3.5 w-3.5 text-[#c4381e]" aria-hidden="true" />
                          Essayer l’aperçu
                        </button>

                        {activeProject.liveUrl && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-[#101012] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-neutral-800 whitespace-nowrap shrink-0"
                          >
                            Voir le site
                            <ArrowUpRight className="h-3.5 w-3.5 text-[#f0674b]" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Slide Quick Selector Strip */}
              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {visibleProjects.map((project, idx) => {
                  const active = idx === safeIndex;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`rounded-lg border px-3 py-2 text-left transition-all duration-200 ${
                        active
                          ? 'border-[#101012] bg-[#101012] text-white'
                          : 'border-neutral-200 bg-[#f2ede4]/45 text-neutral-700 hover:-translate-y-0.5 hover:border-[#c4381e]/50 hover:text-[#101012]'
                      }`}
                    >
                      <span
                        className={`block font-mono text-[10px] tabular-nums ${
                          active ? 'text-[#f0674b]' : 'text-neutral-500'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="mt-0.5 block truncate text-xs font-semibold">
                        {project.title.split(' — ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {visibleProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                      <span className="font-semibold text-[#c4381e]">
                        {project.category} · {project.country}
                      </span>
                      <span className="tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-[#101012]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500">
                      {project.context} · {project.period}
                    </p>

                    <div className="mt-4">
                      <ProjectArchitectureVisual projectId={project.id} variant="light" />
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-700">{project.summary}</p>
                    <p className="mt-3 font-mono text-[11px] text-neutral-500">
                      {project.technologies.join(' · ')}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project, 'case-study')}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#c4381e] hover:text-[#a82d16]"
                    >
                      Lire le détail
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#101012] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
                        >
                          Voir le site
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#f0674b]" aria-hidden="true" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => onSelectProject(project, 'demo')}
                        className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-[#101012] transition-colors hover:border-[#c4381e] hover:text-[#c4381e]"
                      >
                        <Play className="h-3.5 w-3.5 text-[#c4381e]" aria-hidden="true" />
                        Aperçu
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
