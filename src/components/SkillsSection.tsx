import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, SKILL_GROUPS } from '../data/portfolioData';
import { RevealText } from './RevealText';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#e5e7e6]/75 py-20 lg:py-28 text-[#1c140f]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1c140f]/10 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#c2410c]">Services &amp; Savoir-faire</p>
            <RevealText>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1c140f] sm:text-4xl">
                Ce que je peux réaliser pour votre équipe ou votre projet
              </h2>
            </RevealText>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-full bg-[#f97316] px-6 py-2.5 text-xs font-bold text-[#1c140f] transition-colors duration-200 hover:bg-[#fb923c] lg:self-auto whitespace-nowrap shrink-0"
          >
            Discuter d’un besoin
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* 4 Clean White Service Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-3xl border border-[#1c140f]/8 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f97316]/45"
            >
              <div>
                <span className="font-mono text-sm font-bold text-[#c2410c] tabular-nums">
                  {service.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-[#1c140f]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5d4d42]">{service.summary}</p>
              </div>

              <p className="mt-6 border-t border-[#e5e7e6] pt-3.5 font-mono text-[11px] font-medium text-[#5d4d42]">
                Références : {service.reference}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Technical Stack Block */}
        <div className="mt-10 rounded-3xl border border-[#1c140f]/8 bg-white p-7 text-[#1c140f] sm:p-10">
          <div className="grid grid-cols-1 gap-6 border-b border-[#e5e7e6] pb-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold text-[#c2410c]">Stack technique vérifiée</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1c140f] sm:text-3xl">
                Ce que j’utilise au quotidien sur mes projets
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm leading-relaxed text-[#5d4d42]">
                Uniquement des langages et outils pratiqués concrètement en entreprise, en recherche ou
                sur cartes embarquées.
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#e5e7e6]">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.id}
                className="grid grid-cols-1 gap-6 py-8 last:pb-0 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <h4 className="font-display text-lg font-bold text-[#1c140f]">{group.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5d4d42]">
                    {group.description}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <ul className="divide-y divide-[#e5e7e6] rounded-2xl border border-[#1c140f]/6 bg-[#eee6d8]/35 px-5">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <span className="font-mono text-sm font-semibold text-[#1c140f]">
                          {item.name}
                        </span>
                        <span className="text-xs text-[#5d4d42] sm:text-right">
                          {item.context}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
