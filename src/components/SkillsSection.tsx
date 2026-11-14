import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, SKILL_GROUPS } from '../data/portfolioData';
import { RevealText } from './RevealText';

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-[#141414]/15 bg-[#f2ede4] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Services Statement Block */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#141414]/15 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold text-[#c4381e]">
              Services proposés
            </p>
            <RevealText>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-[#101012] sm:text-4xl">
                Ce que je peux réaliser pour votre équipe ou votre projet
              </h2>
            </RevealText>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-[42px] items-center gap-2 self-start rounded-lg bg-[#101012] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#c4381e] lg:self-auto"
          >
            Discuter d’un besoin
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col justify-between rounded-xl border p-7 transition-transform duration-200 hover:-translate-y-0.5 ${
                idx === 0 || idx === 3
                  ? 'border-[#141414]/15 bg-white text-[#101012]'
                  : 'border-neutral-800 bg-[#101012] text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span
                    className={`font-semibold tabular-nums ${
                      idx === 0 || idx === 3 ? 'text-[#c4381e]' : 'text-[#f0674b]'
                    }`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={
                      idx === 0 || idx === 3 ? 'text-neutral-400' : 'text-neutral-500'
                    }
                  >
                    +
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{service.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    idx === 0 || idx === 3 ? 'text-neutral-700' : 'text-neutral-300'
                  }`}
                >
                  {service.summary}
                </p>
              </div>

              <p
                className={`mt-6 border-t pt-3.5 font-mono text-[11px] ${
                  idx === 0 || idx === 3
                    ? 'border-neutral-200 text-neutral-500'
                    : 'border-neutral-800 text-neutral-400'
                }`}
              >
                Appuyé sur : {service.reference}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Tools & Languages Ledger */}
        <div className="mt-20 grid grid-cols-1 gap-8 border-b border-[#141414]/15 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs font-semibold text-[#c4381e]">Outils &amp; langages</p>
            <RevealText>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-[#101012] sm:text-3xl">
                Ce que j’utilise au quotidien sur mes projets
              </h3>
            </RevealText>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base leading-relaxed text-[#262523]">
              Uniquement des langages et outils pratiqués concrètement en entreprise, en recherche ou
              sur cartes embarquées.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#141414]/15">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-semibold text-[#c4381e] tabular-nums">
                  0{idx + 1}
                </span>
                <h4 className="mt-1.5 font-display text-xl font-semibold text-[#101012]">
                  {group.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3a3834]">
                  {group.description}
                </p>
              </div>

              <div className="lg:col-span-8">
                <ul className="divide-y divide-[#141414]/10 border-t border-[#141414]/10 bg-white px-6 lg:border-t-0">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col gap-1 py-4 transition-colors duration-150 hover:bg-[#f2ede4]/25 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="font-mono text-sm font-semibold text-[#101012]">
                        {item.name}
                      </span>
                      <span className="text-xs text-neutral-600 sm:text-right">{item.context}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
