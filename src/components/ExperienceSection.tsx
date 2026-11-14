import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { RevealText } from './RevealText';

type CountryFilter = 'Tous' | 'Cameroun' | 'France' | 'Belgique';

export function ExperienceSection() {
  const [countryFilter, setCountryFilter] = useState<CountryFilter>('Tous');

  const filteredExperiences =
    countryFilter === 'Tous'
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.country === countryFilter);

  return (
    <section id="experience" className="border-b border-[#141414]/15 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold text-[#c4381e]">Parcours</p>
            <RevealText>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-[#101012] sm:text-4xl">
                3 ans d’expérience entre le Cameroun, la France et la Belgique
              </h2>
            </RevealText>
          </div>

          <div
            role="tablist"
            aria-label="Filtrer le parcours par pays"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-neutral-200 bg-[#f2ede4] p-1 self-start md:self-auto"
          >
            {(['Tous', 'Cameroun', 'France', 'Belgique'] as const).map((country) => {
              const active = countryFilter === country;
              return (
                <button
                  key={country}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCountryFilter(country)}
                  className={`relative min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active ? 'text-white' : 'text-neutral-700 hover:text-[#101012]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="exp-country-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-md bg-[#c4381e]"
                    />
                  )}
                  <span className="relative z-10">
                    {country === 'Tous' ? 'Tout le parcours' : country}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.article
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="font-semibold text-[#c4381e]">{exp.type}</span>
                    <span aria-hidden="true" className="text-neutral-400">
                      ·
                    </span>
                    <span className="text-neutral-600 tabular-nums">{exp.period}</span>
                  </div>
                  <p className="mt-2 font-display text-lg font-semibold text-[#101012]">
                    {exp.organization}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">{exp.location}</p>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-neutral-600">
                    {exp.focus}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <h3 className="font-display text-xl font-semibold text-[#101012]">{exp.role}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">{exp.summary}</p>

                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    {exp.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span aria-hidden="true" className="font-semibold text-[#c4381e]">
                          +
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 font-mono text-xs text-neutral-500">
                    Outils : {exp.stack.join(' · ')}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
