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
    <section id="projects" className="bg-white py-20 lg:py-28 text-[#1c140f]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1c140f]/10 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#c2410c]">Réalisations</p>
            <RevealText>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1c140f] sm:text-4xl">
                Ce que j’ai conçu et mis en production
              </h2>
            </RevealText>
            <p className="mt-3 text-base leading-relaxed text-[#5d4d42]">
              Réalisations en entreprise, recherche académique et projets personnels, avec aperçu
              interactif et captures directes des sites en ligne.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <div
              role="tablist"
              aria-label="Filtrer par nature de projet"
              className="inline-flex flex-wrap items-center gap-1 rounded-full bg-[#e5e7e6]/75 p-1"
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
                    className={`relative min-h-[36px] rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      active ? 'text-[#1c140f]' : 'text-[#5d4d42] hover:text-[#1c140f]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="project-category-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-[#f97316]"
                      />
                    )}
                    <span className="relative z-10">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-1 rounded-full bg-[#e5e7e6]/75 p-1">
              {(['slider', 'grid'] as const).map((mode) => {
                const active = viewMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setViewMode(mode)}
                    className={`min-h-[36px] rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                      active
                        ? 'bg-white text-[#1c140f] shadow-xs'
                        : 'text-[#5d4d42] hover:text-[#1c140f]'
                    }`}
                  >
                    {mode === 'slider' ? 'Diaporama' : 'Grille'}
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
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#5d4d42] tabular-nums">
                  <span className="font-bold text-[#c2410c]">
                    {String(safeIndex + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">/</span>
                  <span className="font-semibold text-[#1c140f]">
                    {String(visibleProjects.length).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline text-[#1c140f]/25">
                    ·
                  </span>
                  <span className="hidden sm:inline font-sans font-semibold text-[#1c140f]">
                    {activeProject.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToSlide(safeIndex - 1)}
                    disabled={safeIndex === 0}
                    aria-label="Projet précédent"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1c140f]/12 bg-[#eee6d8]/50 text-[#1c140f] transition-colors duration-200 hover:bg-[#eee6d8] disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(safeIndex + 1)}
                    disabled={safeIndex >= visibleProjects.length - 1}
                    aria-label="Projet suivant"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1c140f]/12 bg-[#eee6d8]/50 text-[#1c140f] transition-colors duration-200 hover:bg-[#eee6d8] disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Clean Dual Stage Showcase */}
              <div className="overflow-hidden rounded-3xl border border-[#1c140f]/10 bg-[#eee6d8]/35">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.article
                    key={activeProject.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -20 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12"
                  >
                    <div className="flex flex-col justify-between gap-6 bg-[#1c140f] p-7 text-[#eee6d8] sm:p-9 lg:col-span-5">
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono font-medium text-[#fb923c]">
                            {activeProject.category} · {activeProject.country}
                          </span>
                          <span className="font-mono font-semibold text-[#eee6d8]/60 tabular-nums">
                            {String(safeIndex + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
                          {activeProject.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#eee6d8]/70 sm:text-sm">
                          {activeProject.subtitle}
                        </p>
                      </div>

                      <ProjectArchitectureVisual
                        projectId={activeProject.id}
                        variant="dark"
                        previewImage={activeProject.previewImage}
                        liveUrl={activeProject.liveUrl}
                        title={activeProject.title}
                      />

                      <div className="border-t border-[#eee6d8]/12 pt-4 font-mono text-xs text-[#eee6d8]/65">
                        <p className="font-semibold text-white">{activeProject.context}</p>
                        <p className="mt-1 tabular-nums">{activeProject.period}</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between bg-white p-7 sm:p-10 lg:col-span-7">
                      <div className="space-y-5">
                        <p className="text-base font-medium leading-relaxed text-[#1c140f]">
                          {activeProject.summary}
                        </p>

                        <div className="grid grid-cols-1 gap-5 border-t border-[#e5e7e6] pt-5 sm:grid-cols-2 text-xs leading-relaxed">
                          <div>
                            <p className="font-bold text-[#c2410c]">Contexte</p>
                            <p className="mt-1.5 text-[#5d4d42]">{activeProject.problem}</p>
                          </div>
                          <div>
                            <p className="font-bold text-[#c2410c]">Contribution</p>
                            <p className="mt-1.5 text-[#5d4d42]">{activeProject.role}</p>
                          </div>
                        </div>

                        <div className="border-t border-[#e5e7e6] pt-4">
                          <p className="text-xs font-bold text-[#1c140f]">Résultats</p>
                          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#5d4d42]">
                            {activeProject.results.map((r) => (
                              <li key={r} className="flex items-start gap-2">
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97316]"
                                />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="border-t border-[#e5e7e6] pt-4 font-mono text-[11px] font-medium text-[#5d4d42]">
                          Outils : {activeProject.technologies.join(' · ')}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#e5e7e6] pt-6">
                        <button
                          type="button"
                          onClick={() => onSelectProject(activeProject, 'case-study')}
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#f97316] px-5 py-2 text-xs font-bold text-[#1c140f] transition-colors duration-200 hover:bg-[#fb923c] whitespace-nowrap shrink-0"
                        >
                          Lire le détail
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectProject(activeProject, 'demo')}
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[#1c140f]/15 bg-[#eee6d8]/55 px-5 py-2 text-xs font-semibold text-[#1c140f] transition-colors duration-200 hover:bg-[#eee6d8] whitespace-nowrap shrink-0"
                        >
                          <Play className="h-3.5 w-3.5 text-[#c2410c]" aria-hidden="true" />
                          Essayer l’aperçu
                        </button>

                        {activeProject.liveUrl && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-[42px] items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#c2410c] transition-colors hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                          >
                            Voir le site
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Clean Selector Grid */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {visibleProjects.map((project, idx) => {
                  const active = idx === safeIndex;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                        active
                          ? 'border-[#f97316] bg-[#1c140f] text-white'
                          : 'border-[#1c140f]/8 bg-[#eee6d8]/50 text-[#1c140f] hover:border-[#f97316]/45 hover:bg-[#eee6d8]'
                      }`}
                    >
                      <span
                        className={`block font-mono text-[10px] font-semibold tabular-nums ${
                          active ? 'text-[#fb923c]' : 'text-[#c2410c]'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="mt-0.5 block truncate text-xs font-bold">
                        {project.title.split(' : ')[0]}
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
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {visibleProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between rounded-3xl border border-[#1c140f]/10 bg-[#eee6d8]/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eee6d8]/75 sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#5d4d42]">
                      <span className="font-mono font-semibold text-[#c2410c]">
                        {project.category} · {project.country}
                      </span>
                      <span className="font-mono font-semibold text-[#1c140f]/55 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-[#1c140f]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#5d4d42]">
                      {project.context} · {project.period}
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

                    <p className="mt-4 text-sm leading-relaxed text-[#5d4d42]">
                      {project.summary}
                    </p>
                    <p className="mt-3 font-mono text-[11px] text-[#5d4d42]/90">
                      {project.technologies.join(' · ')}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#1c140f]/10 pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project, 'case-study')}
                      className="inline-flex min-h-[38px] items-center gap-1.5 text-sm font-bold text-[#c2410c] hover:underline underline-offset-4"
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
                          className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-[#1c140f]/15 bg-white px-4 py-1.5 text-xs font-semibold text-[#1c140f] transition-colors hover:border-[#c2410c] hover:text-[#c2410c]"
                        >
                          Voir le site
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => onSelectProject(project, 'demo')}
                        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-[#f97316] px-4 py-1.5 text-xs font-bold text-[#1c140f] transition-colors hover:bg-[#fb923c]"
                      >
                        <Play className="h-3.5 w-3.5" aria-hidden="true" />
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
