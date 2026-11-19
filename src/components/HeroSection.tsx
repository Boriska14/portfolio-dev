import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Command } from 'lucide-react';
import { KEY_RESULTS, PROFILE, PUBLICATION } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCommandMenu: () => void;
}

const EASE_BP = [0.19, 1, 0.22, 1] as const;

export function HeroSection({ onOpenCommandMenu }: HeroSectionProps) {
  const [parisTime, setParisTime] = useState('--:--');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('fr-FR', {
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date());
        setParisTime(formatted);
      } catch {
        setParisTime('--:--');
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {/* 1. Opening Dark Contrast Stage (00:00–00:01 of inspiration) */}
      <section id="accueil" className="overflow-hidden bg-[#0F172A] text-white pt-12 pb-20 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <p className="text-sm font-medium text-slate-300">
              <span className="font-semibold text-white">{PROFILE.fullName}</span>
              <span aria-hidden="true" className="mx-2.5 text-slate-500">·</span>
              <span>Ingénieure SI (Titre CTI 2026)</span>
            </p>

            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-xs text-slate-400 tabular-nums sm:inline">
                CET {parisTime}
              </span>
              <button
                type="button"
                onClick={onOpenCommandMenu}
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-slate-200 transition-colors hover:border-[#60A5FA]/60 hover:bg-white/10 hover:text-white whitespace-nowrap shrink-0"
                aria-label="Ouvrir l’index rapide (Cmd+K)"
              >
                <Command className="h-3 w-3 text-[#93C5FD]" aria-hidden="true" />
                <span>K · Index rapide</span>
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end">
            {/* Staggered asymmetric 4-line headline */}
            <div className="lg:col-span-7">
              <div
                aria-hidden="true"
                className="space-y-1 text-4xl font-semibold tracking-tight leading-[1.03] sm:text-6xl"
              >
                <motion.p
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: EASE_BP }}
                  className="pl-10 text-slate-400 sm:pl-24"
                >
                  Concevoir
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: EASE_BP }}
                  className="text-white"
                >
                  et intégrer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.16, ease: EASE_BP }}
                  className="pl-12 text-[#93C5FD] sm:pl-36"
                >
                  du terrain
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.24, ease: EASE_BP }}
                  className="pl-6 text-white sm:pl-20"
                >
                  au Cloud.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22, ease: EASE_BP }}
              >
                <h1 className="mt-8 max-w-2xl text-xl font-semibold tracking-tight text-white leading-snug sm:text-2xl">
                  {PROFILE.heroTitle}
                </h1>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {PROFILE.heroTagline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projets"
                    className="group inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition-colors duration-200 hover:bg-[#DBEAFE] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                  >
                    <span>Voir mes projets</span>
                    <ArrowRight className="bp-btn-arrow h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#93C5FD] hover:bg-white/10 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                  >
                    Me contacter
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right column: Impact proof ledger */}
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_BP }}
              aria-label="Indicateurs et publication scientifique"
              className="rounded-xl border border-white/12 bg-[#162033] p-6 lg:col-span-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs font-semibold tracking-wide text-[#93C5FD]">
                  Impact mesuré
                </p>
                <span className="font-mono text-xs text-slate-400">3 ans de pratique</span>
              </div>

              <dl className="mt-2 divide-y divide-white/10">
                {KEY_RESULTS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <dt className="text-sm text-slate-300">{item.label}</dt>
                    <dd className="font-mono text-sm font-semibold text-white tabular-nums whitespace-nowrap">
                      {item.metric}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-xs font-medium text-slate-400">
                  Intervention scientifique publiée
                </p>
                <a
                  href={PUBLICATION.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#93C5FD] transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  <span>Springer FAIM 2025 · Lire sur ResearchGate</span>
                  <ArrowUpRight className="bp-btn-arrow h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* 2. Light Statement Reveal Band + Architectural Monogram Transition (00:02–00:05 of inspiration) */}
      <section aria-label="Positionnement synthétique" className="border-b border-[#E2E8F0] bg-[#F5F5F3] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: EASE_BP }}
            className="space-y-1 text-2xl font-semibold tracking-tight leading-tight sm:text-4xl"
          >
            <p className="text-[#2563EB]">Systèmes d’information.</p>
            <p className="text-[#0F172A]">IoT &amp; Cloud.</p>
            <p className="text-[#0F172A]">Informatique industrielle.</p>
          </motion.div>

          {/* Clean geometric outline monogram transition ("B" for Boriska, echoing the 00:05 video transition) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_BP }}
            className="mx-auto my-8 flex h-16 w-16 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white"
            aria-hidden="true"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <motion.path
                d="M9 5H17.5C21.09 5 24 7.46 24 10.5C24 12.66 22.53 14.53 20.38 15.38C23.02 16.22 24.8 18.42 24.8 21.1C24.8 24.47 21.88 27 17.9 27H9V5Z"
                stroke="#0F172A"
                strokeWidth="1.75"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE_BP }}
              />
              <motion.path
                d="M9 15.5H18"
                stroke="#2563EB"
                strokeWidth="1.75"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE_BP }}
              />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE_BP }}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#334155]"
          >
            Des architectures logicielles fiables, pensées pour relier les équipements physiques,
            les équipes terrain et les systèmes de décision.
          </motion.p>

          <div className="mt-7 flex justify-center">
            <a
              href="#a-propos"
              className="group inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-5 py-2 text-xs font-semibold text-[#0F172A] transition-colors duration-200 hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
            >
              <span>Approche &amp; méthode</span>
              <ArrowRight className="bp-btn-arrow h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
