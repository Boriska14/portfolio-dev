import { motion } from 'motion/react';
import { ArrowDownRight, Download, FileText, Github, Linkedin } from 'lucide-react';
import { KEY_OUTCOMES, PROFILE } from '../data/portfolioData';
import { RevealText } from './RevealText';

interface HeroSectionProps {
  onPreviewCv: () => void;
}

export function HeroSection({ onPreviewCv }: HeroSectionProps) {
  return (
    <section id="home" className="bg-[#101012] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:pt-24 lg:pb-24">
        {/* Top line */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-5 font-mono text-xs text-neutral-400">
          <span className="text-[#f0674b]">{PROFILE.heroGreeting}</span>
          <span>Développement backend, IoT &amp; Cloud</span>
          <span>Cameroun.France.Belgique</span>
        </div>

        {/* Display lockup */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <RevealText immediate>
              <h1 className="font-display text-4xl font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.03]">
                Développer des logiciels{' '}
                <span className="italic font-medium text-[#e8563a]">utiles</span>, du terrain
                jusqu’au Cloud<span className="font-sans text-[#e8563a]">.</span>
              </h1>
            </RevealText>
          </div>

          <motion.div
            initial={{ opacity: 0.99, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:pb-2"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              UCAC-ICAM · Diplôme CTI 2026
            </p>
            <p className="mt-2 font-display text-lg text-neutral-200">
              3 ans de projets en entreprise, en laboratoire de recherche et sur matériel embarqué.
            </p>
          </motion.div>
        </div>

        {/* Bio & Actions */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-neutral-800 pt-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <RevealText immediate delay={0.08}>
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                {PROFILE.bioLead}
              </p>
            </RevealText>
            <motion.p
              initial={{ opacity: 0.99, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-sm leading-relaxed text-neutral-400"
            >
              {PROFILE.bioSecondary}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0.99, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-6 lg:col-span-6 lg:pl-10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#c4381e] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a82d16] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e04628]"
              >
                Voir mes projets
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.cvPdfUrl}
                download="CV_Boriska_Mbilongo.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e04628] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e04628]"
              >
                <Download className="h-4 w-4 text-[#f0674b]" aria-hidden="true" />
                Télécharger mon CV
              </a>

              <button
                type="button"
                onClick={onPreviewCv}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-150 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e04628]"
              >
                <FileText className="h-4 w-4 text-neutral-400" aria-hidden="true" />
                Aperçu du CV
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-5 border-t border-neutral-800 pt-5 text-sm text-neutral-400">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#f0674b]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-neutral-700">
                ·
              </span>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#f0674b]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <span aria-hidden="true" className="text-neutral-700">
                ·
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-xs text-neutral-300 transition-colors hover:text-[#f0674b]"
              >
                {PROFILE.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Measured outcomes strip */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-neutral-800 border-y border-neutral-800 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {KEY_OUTCOMES.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0.99, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 + idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`py-7 ${idx === 0 ? 'sm:pr-6' : 'sm:px-6'} ${
                idx === 3 ? 'lg:pr-0' : ''
              }`}
            >
              <p className="font-sans text-4xl font-bold tracking-tight text-[#e8563a] tabular-nums">
                {metric.value}
              </p>
              <h2 className="mt-2 font-display text-base font-semibold text-white">
                {metric.label}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-neutral-400">{metric.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
