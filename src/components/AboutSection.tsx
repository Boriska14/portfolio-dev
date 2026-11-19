import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  CERTIFICATIONS_AND_ENGAGEMENTS,
  PROFILE,
  PUBLICATION,
  STRATEGIC_PILLARS,
  WORKFLOW_STEPS,
} from '../data/portfolioData';

const EASE_BP = [0.19, 1, 0.22, 1] as const;

export function AboutSection() {
  return (
    <section id="a-propos" className="border-b border-[#E2E8F0] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Positioning & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE_BP }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
              À propos &amp; stratégie
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
              Positionnement professionnel, démarche d’exécution et contribution scientifique.
            </p>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <p className="text-lg font-medium leading-relaxed text-[#0F172A] sm:text-xl">
              {PROFILE.aboutLead}
            </p>

            <div className="space-y-4 text-base leading-relaxed text-[#334155]">
              <p>{PROFILE.aboutJourney}</p>
              <p>{PROFILE.aboutApproach}</p>
              <p className="text-[#475569]">{PROFILE.aboutBalance}</p>
            </div>
          </div>
        </motion.div>

        {/* 3 Strategic Value Pillars */}
        <div className="mt-14 grid gap-6 border-t border-[#E2E8F0] pt-12 md:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_BP }}
              className="rounded-xl border border-[#E2E8F0] bg-[#F5F5F3]/60 p-6 transition-colors duration-200 hover:border-[#CBD5E1]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#1E40AF] tabular-nums">
                  {pillar.index}
                </span>
                <span className="text-xs font-medium text-[#64748B]">
                  {pillar.keyword}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#0F172A]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4-Phase Engineering Workflow */}
        <div className="mt-14 border-t border-[#E2E8F0] pt-12">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Workflow &amp; méthode d’exécution
              </h3>
              <p className="mt-1 text-sm text-[#64748B]">
                De la compréhension du besoin terrain jusqu’à la mise en production reproductible.
              </p>
            </div>
            <span className="font-mono text-xs text-[#1E40AF]">4 étapes · Méthode structurée</span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE_BP }}
                className="flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-white p-5 transition-colors duration-200 hover:border-[#93C5FD]"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#1E40AF] tabular-nums">
                    Étape {item.step}
                  </span>
                  <h4 className="mt-2 text-base font-semibold text-[#0F172A]">
                    {item.phase}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#334155]">
                    {item.summary}
                  </p>
                </div>

                <p className="mt-5 border-t border-[#E2E8F0] pt-3 text-xs font-medium text-[#64748B]">
                  {item.outputs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scientific Intervention & Publication (ResearchGate) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE_BP }}
          className="mt-14 border-t border-[#E2E8F0] pt-12"
        >
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="max-w-3xl">
                <p className="font-mono text-xs font-semibold text-[#1E40AF]">
                  Intervention &amp; publication scientifique · {PUBLICATION.venue}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#0F172A] sm:text-xl">
                  {PUBLICATION.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-[#64748B]">
                  Auteurs : {PUBLICATION.authors}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                  {PUBLICATION.roleSummary}
                </p>
              </div>

              <a
                href={PUBLICATION.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-[#1E40AF] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#1E3A8A] whitespace-nowrap shrink-0"
              >
                <span>Consulter sur ResearchGate</span>
                <ArrowUpRight className="bp-btn-arrow h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {CERTIFICATIONS_AND_ENGAGEMENTS.map((block) => (
              <div key={block.group} className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wide text-[#1E40AF]">
                  {block.group}
                </h4>
                <ul className="space-y-2 text-sm leading-relaxed text-[#334155]">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
