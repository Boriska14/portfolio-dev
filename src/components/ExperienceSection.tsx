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
    <section id="experience" className="bg-[#eee6d8] py-20 lg:py-28 text-[#1c140f]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1c140f]/10 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#c2410c]">Parcours</p>
            <RevealText>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1c140f] sm:text-4xl">
                Expériences entre le Cameroun, la France et la Belgique
              </h2>
            </RevealText>
          </div>

          <div
            role="tablist"
            aria-label="Filtrer le parcours par pays"
            className="inline-flex flex-wrap items-center gap-1 rounded-full bg-white/80 p-1 self-start md:self-auto"
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
                  className={`relative min-h-[36px] rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active ? 'text-[#1c140f]' : 'text-[#5d4d42] hover:text-[#1c140f]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="experience-country-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[#f97316]"
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

        <div className="mt-8 space-y-5">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.article
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.26, delay: idx * 0.02, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-8 rounded-3xl border border-[#1c140f]/8 bg-white p-7 transition-colors duration-300 hover:border-[#f97316]/45 sm:p-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="font-bold text-[#c2410c]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true" className="text-[#1c140f]/25">
                      ·
                    </span>
                    <span className="font-semibold text-[#c2410c]">{exp.type}</span>
                    <span aria-hidden="true" className="text-[#1c140f]/25">
                      ·
                    </span>
                    <span className="font-medium text-[#5d4d42] tabular-nums">{exp.period}</span>
                  </div>
                  <p className="mt-3 font-display text-lg font-bold text-[#1c140f]">
                    {exp.organization}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#5d4d42]">{exp.location}</p>
                  <p className="mt-4 rounded-2xl bg-[#e5e7e6]/55 px-4 py-3 font-mono text-xs leading-relaxed text-[#5d4d42]">
                    {exp.focus}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <h3 className="font-display text-xl font-bold text-[#1c140f]">{exp.role}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#1c140f]/85">{exp.summary}</p>

                  <ul className="mt-4 space-y-2 text-sm text-[#5d4d42]">
                    {exp.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97316]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 font-mono text-xs font-medium text-[#5d4d42]">
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
