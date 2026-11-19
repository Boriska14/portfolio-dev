import { motion } from 'motion/react';
import { COMPETENCE_AXES } from '../data/portfolioData';

const EASE_BP = [0.19, 1, 0.22, 1] as const;

export function SkillsSection() {
  return (
    <section id="competences" className="bg-[#0F172A] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 border-b border-white/10 pb-8 sm:grid-cols-3 sm:items-end">
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Architecture
          </p>
          <p className="text-2xl font-semibold tracking-tight text-[#93C5FD] sm:text-center sm:text-3xl">
            IoT &amp; Industrie
          </p>
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-right sm:text-3xl">
            Transformation
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <h2 className="text-lg font-semibold text-white">
            Compétences structurées
          </h2>
          <p className="text-sm text-slate-300">
            Trois axes complémentaires, présentés sans indicateurs chiffrés artificiels.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {COMPETENCE_AXES.map((axis, idx) => (
            <motion.div
              key={axis.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_BP }}
              className="flex flex-col rounded-xl border border-white/12 bg-[#162033] p-6 transition-colors duration-200 hover:border-[#60A5FA]/40"
            >
              <div className="border-b border-white/10 pb-4">
                <p className="font-mono text-xs font-semibold text-[#93C5FD] tabular-nums">
                  Axe {axis.index}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-white">
                  {axis.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                  {axis.subtitle}
                </p>
              </div>

              <dl className="mt-4 divide-y divide-white/10">
                {axis.domains.map((domain) => (
                  <div key={domain.label} className="py-3.5 first:pt-1 last:pb-0">
                    <dt className="text-sm font-semibold text-white">
                      {domain.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-300">
                      {domain.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
