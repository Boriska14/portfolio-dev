import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Check, Copy } from 'lucide-react';
import { PUBLICATION } from '../data/portfolioData';
import { RevealText } from './RevealText';

export function PublicationsSection() {
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const handleCopyBibtex = () => {
    navigator.clipboard?.writeText(PUBLICATION.bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <section
      id="publications"
      className="fluid-glow-dark bg-[#1c140f] py-20 lg:py-28 text-[#eee6d8]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Framing */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#fb923c]">Publication · Springer FAIM 2025</p>
            <RevealText>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Jumeaux numériques, IoT et IA pour l’industrie
              </h2>
            </RevealText>
            <p className="mt-4 text-sm font-bold text-white">{PUBLICATION.publisher}</p>
            <p className="mt-1 text-xs text-[#eee6d8]/65">{PUBLICATION.venue}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#eee6d8]/85">{PUBLICATION.abstract}</p>

            <div className="mt-8 rounded-3xl border border-[#eee6d8]/12 bg-[#261b14]/80 p-5">
              <div className="flex items-center justify-between gap-2 border-b border-[#eee6d8]/10 pb-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#fb923c]">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Référence BibTeX (FAIM 2025)
                </span>
                <button
                  type="button"
                  onClick={handleCopyBibtex}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f97316] px-3.5 py-1 text-xs font-bold text-[#1c140f] transition-colors hover:bg-[#fb923c]"
                >
                  {copiedBibtex ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Copié
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copier
                    </>
                  )}
                </button>
              </div>
              <pre className="mt-3 overflow-x-auto font-mono text-[11px] leading-relaxed text-[#eee6d8]/75">
                {PUBLICATION.bibtex}
              </pre>
            </div>
          </div>

          {/* Right Scientific Axes */}
          <div className="space-y-4 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-[#fb923c]/40 bg-[#261b14] p-6 text-[#eee6d8] sm:p-7"
            >
              <p className="font-mono text-xs font-semibold text-[#fb923c]">
                Chapitre d’ouvrage · {PUBLICATION.institution}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                {PUBLICATION.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#eee6d8]/85">
                {PUBLICATION.frenchSubtitle}
              </p>
              <p className="mt-3 font-mono text-xs font-medium text-[#eee6d8]/65">
                Autrices &amp; Auteur : {PUBLICATION.authors}
              </p>
            </motion.div>

            {PUBLICATION.axes.map((axis, idx) => (
              <motion.div
                key={axis.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: 0.04 * (idx + 1), ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-[#eee6d8]/10 bg-[#261b14]/65 p-6 transition-colors duration-200 hover:border-[#f97316]/45"
              >
                <h4 className="font-display text-base font-bold text-white">{axis.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#eee6d8]/75">{axis.content}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-[#f97316]/35 bg-[#261b14]/90 p-6"
            >
              <p className="font-mono text-xs font-semibold text-[#fb923c]">
                Recherche appliquée · UMONS / Polytech Mons (2026)
              </p>
              <h4 className="mt-1.5 font-display text-lg font-bold text-white">
                Track Sentry Vision : Deep Learning pour la sécurité ferroviaire
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#eee6d8]/75">
                Travaux menés à l’UMONS (dir. Prof. Saïd Mahmoudi &amp; Tanguy Vansnick) : chaîne
                Edge-to-Cloud temps réel, architecture DualSightNet (98,0 % Balanced Accuracy) et
                RT-DETR + Diversity Sampling (90,8 % mAP@50:95 à 55 FPS).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
