import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { KEY_OUTCOMES, PROFILE } from '../data/portfolioData';
import { RevealText } from './RevealText';

const CREDENTIAL_STRIP = [
  'UCAC-ICAM · Titre CTI 2026',
  'UMONS · Polytech Mons',
  'ICAM Grand Paris Sud',
  'ENEO Cameroon · DISI',
  'Springer FAIM 2025',
  'Cisco CCNA',
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="fluid-glow-dark relative overflow-hidden bg-[#1c140f] text-[#eee6d8]"
    >
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Typography & Actions */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-[#fb923c]">
              Ingénieure informatique · Titre CTI 2026 · Cameroun · France · Belgique
            </p>

            <div className="mt-4">
              <RevealText immediate>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06]">
                  Des capteurs terrain au{' '}
                  <span className="text-[#f97316]">Cloud</span>, des logiciels conçus pour durer.
                </h1>
              </RevealText>
            </div>

            <div className="mt-6 space-y-4">
              <RevealText immediate delay={0.05}>
                <p className="max-w-2xl text-base leading-relaxed text-[#eee6d8]/90 sm:text-lg">
                  {PROFILE.bioLead}
                </p>
              </RevealText>
              <motion.p
                initial={{ opacity: 0.99, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl text-sm leading-relaxed text-[#e5e7e6]/70"
              >
                {PROFILE.bioSecondary}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0.99, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f97316] px-7 py-3 text-sm font-bold text-[#1c140f] shadow-[0_12px_32px_-8px_rgba(249,115,22,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fb923c] whitespace-nowrap shrink-0"
              >
                Explorer les réalisations
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#eee6d8]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#eee6d8] transition-colors duration-200 hover:border-[#f97316]/60 hover:bg-white/[0.04] whitespace-nowrap shrink-0"
              >
                Démarrer un projet
                <ArrowUpRight className="h-4 w-4 text-[#fb923c]" aria-hidden="true" />
              </a>
            </motion.div>

            <div className="mt-7 flex flex-wrap items-center gap-6 text-xs font-medium text-[#eee6d8]/75">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#fb923c]"
              >
                <Linkedin className="h-4 w-4 text-[#fb923c]" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#fb923c]"
              >
                <Github className="h-4 w-4 text-[#fb923c]" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Quiet Architectural Summary Panel */}
          <motion.div
            initial={{ opacity: 0.99, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-[#eee6d8]/12 bg-[#261b14]/85 p-6 backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between border-b border-[#eee6d8]/10 pb-3.5 text-xs text-[#eee6d8]/70">
                <span className="font-semibold text-[#fb923c]">Champs d’intervention</span>
                <span>Cameroun · France · Belgique</span>
              </div>

              <div className="mt-2 divide-y divide-[#eee6d8]/10">
                <div className="py-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-sm font-bold text-white">
                      <span className="mr-2 font-mono text-xs text-[#f97316]">01</span>
                      Applications métier &amp; API
                    </span>
                    <span className="font-mono text-[11px] text-[#eee6d8]/65">Django · FastAPI</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#eee6d8]/75">
                    Systèmes de gestion, réconciliation financière, PostgreSQL et CI/CD GitLab.
                  </p>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-sm font-bold text-white">
                      <span className="mr-2 font-mono text-xs text-[#f97316]">02</span>
                      Edge-to-Cloud &amp; Jumeaux numériques
                    </span>
                    <span className="font-mono text-[11px] text-[#eee6d8]/65">UMONS · ICAM</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#eee6d8]/75">
                    Track Sentry Vision (ferroviaire), SCRAM/RabbitMQ, ROS/Gazebo et PyTorch.
                  </p>
                </div>

                <div className="py-4 pb-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-sm font-bold text-white">
                      <span className="mr-2 font-mono text-xs text-[#f97316]">03</span>
                      Produits Web déployés
                    </span>
                    <span className="font-mono text-[11px] text-[#eee6d8]/65">React · Vercel</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#eee6d8]/75">
                    Wuendjo, MATE Consulting, GLITCH Magazine et Zone Groupe en production.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Outcomes Strip */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_OUTCOMES.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0.99, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-[#eee6d8]/10 bg-[#261b14]/65 p-6 transition-colors duration-200 hover:border-[#f97316]/45"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-[#f97316] tabular-nums sm:text-4xl">
                {metric.value}
              </p>
              <h2 className="mt-2 text-sm font-semibold text-white">{metric.label}</h2>
              <p className="mt-1 text-xs leading-relaxed text-[#eee6d8]/65">{metric.context}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Credential Strip */}
      <div className="overflow-hidden border-t border-[#eee6d8]/10 bg-[#261b14] py-3 text-[#eee6d8]/80">
        <div className="marquee-track items-center gap-8 text-xs font-medium tracking-wide">
          {[...CREDENTIAL_STRIP, ...CREDENTIAL_STRIP, ...CREDENTIAL_STRIP].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-8 whitespace-nowrap">
              <span>{item}</span>
              <span aria-hidden="true" className="text-[#f97316]">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
