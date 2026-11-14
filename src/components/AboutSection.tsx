import { motion } from 'motion/react';
import { Award, Compass, HeartHandshake } from 'lucide-react';
import { CERTIFICATIONS, ENGAGEMENTS } from '../data/portfolioData';
import { RevealText } from './RevealText';

export function AboutSection() {
  return (
    <section id="about" className="border-b border-[#141414]/15 bg-[#f2ede4] py-24 lg:py-28 text-[#141414]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Editorial Warm Paper Card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl border border-[#141414]/15 bg-[#f2ede4] px-6 py-12 sm:px-14 sm:py-16"
        >
          <div className="flex items-center justify-between font-mono text-xs text-[#141414]/70">
            <span className="font-semibold text-[#c4381e]">À propos</span>
            <span>Cameroun.France.Belgique</span>
          </div>

          {/* Hand-drawn minimal ink SVG sketches with smooth drawing animation */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-7"
            aria-hidden="true"
          >
            {/* Sketch 1 */}
            <svg width="78" height="58" viewBox="0 0 78 58" fill="none" className="text-[#141414]">
              <motion.path
                d="M15 39C8 30 13 15 28 11C43 7 58 14 55 28C52 42 30 49 18 41C11 36 16 20 33 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M27 32L37 22M39 14L43 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            <span className="font-mono text-lg font-medium text-[#141414]">+</span>

            {/* Sketch 2 */}
            <svg width="86" height="58" viewBox="0 0 86 58" fill="none" className="text-[#141414]">
              <motion.path
                d="M10 38L28 33L33 17L41 31L66 25L60 44L48 48"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M52 13L58 18L68 9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            <span className="font-mono text-lg font-medium text-[#141414]">+</span>

            {/* Sketch 3 */}
            <svg width="92" height="58" viewBox="0 0 92 58" fill="none" className="text-[#141414]">
              <motion.path
                d="M12 18H78V42H12V18Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
              <path
                d="M34 18V42M56 18V42"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <motion.path
                d="M44 45C40 49 48 53 60 36C65 29 70 25 65 24C58 23 48 39 44 45Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
              <path
                d="M66 10L68 15L75 11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <RevealText>
            <h2 className="mt-8 text-center font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#e04628] sm:text-6xl">
              <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span>Écouter</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#101012] font-sans text-base font-medium text-[#f2ede4] sm:h-9 sm:w-9 sm:text-xl"
                >
                  +
                </span>
                <span>Construire</span>
              </span>
              <span className="mt-1 flex items-center justify-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#101012] font-sans text-base font-medium text-[#f2ede4] sm:h-9 sm:w-9 sm:text-xl"
                >
                  +
                </span>
                <span>Transmettre.</span>
              </span>
            </h2>
          </RevealText>

          <hr className="mx-auto my-8 max-w-lg border-[#141414]/25" />

          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-[#262523] sm:text-lg">
            Entre mes études à l’UCAC-ICAM au Cameroun, mon passage en recherche à l’ICAM Grand
            Paris Sud et mon expérience sur le ferroviaire à l’UMONS en Belgique, j’ai appris à
            m’adapter vite. Qu’il s’agisse de développer un logiciel de réconciliation des ventes chez ENEO, de concevoir
            AquaSafe pour le suivi des points d’eau ou de partager mon parcours lors du Girls in ICT
            Day, je préfère les projets simples à expliquer et solides à l’usage.
          </p>

          <div className="mt-8 flex items-center justify-end font-mono text-xs text-[#141414]/60 tabular-nums">
            01/06
          </div>
        </motion.div>

        {/* Stationery White Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 gap-10 border border-[#141414]/12 bg-white p-8 sm:p-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#101012]">
              <Compass className="h-4 w-4 text-[#c4381e]" aria-hidden="true" />
              Mon parcours entre trois pays
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#101012]">
              Passer d’un contexte à l’autre avec le même souci du détail.
            </h3>

            <div className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200 text-xs text-neutral-700">
              <div className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-semibold text-[#101012]">Cameroun · Douala &amp; Yaoundé</span>
                <span className="font-mono text-neutral-500">UCAC-ICAM · Sparte · ENEO · MINERVE</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-semibold text-[#101012]">France · Grand Paris Sud</span>
                <span className="font-mono text-neutral-500">ICAM · Jumeaux Numériques</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-semibold text-[#101012]">Belgique · Mons</span>
                <span className="font-mono text-neutral-500">UMONS · Ferroviaire Edge-to-Cloud</span>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:col-span-7 lg:border-l lg:border-neutral-200 lg:pl-10">
            <div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#c4381e]" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-[#101012]">
                  Certifications &amp; Langues
                </h3>
              </div>

              <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#101012]">{cert.name}</p>
                      <p className="text-xs text-neutral-500">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs font-medium text-[#c4381e] shrink-0">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3 font-mono text-xs text-neutral-600">
                Langues : Français (natif) · Anglais (B2 professionnel, TOEIC)
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-[#c4381e]" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-[#101012]">
                  En dehors du code
                </h3>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 border-t border-neutral-200 pt-5 sm:grid-cols-2">
                {ENGAGEMENTS.map((item) => (
                  <div key={item.id}>
                    <p className="font-mono text-[11px] font-semibold text-[#c4381e]">
                      {item.category}
                    </p>
                    <h4 className="mt-1 font-display text-base font-semibold text-[#101012]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-neutral-500">{item.context}</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
