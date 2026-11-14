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
    <section id="publications" className="bg-[#101012] py-24 lg:py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Framing */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium text-[#f0674b]">
              Publication · Springer FAIM 2025
            </p>
            <RevealText>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Jumeaux numériques, <span className="italic text-[#e8563a]">IoT</span> et IA pour
                l’industrie
              </h2>
            </RevealText>
            <p className="mt-4 text-sm font-medium text-neutral-200">{PUBLICATION.publisher}</p>
            <p className="mt-1 text-xs text-neutral-400">{PUBLICATION.venue}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">{PUBLICATION.abstract}</p>

            <div className="mt-8 rounded-xl border border-neutral-800 bg-[#17171a] p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-[#f0674b]">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Référence BibTeX (FAIM 2025)
                </span>
                <button
                  type="button"
                  onClick={handleCopyBibtex}
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:border-[#e04628] hover:bg-[#c4381e]"
                >
                  {copiedBibtex ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#f0674b]" />
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
              <pre className="mt-3 overflow-x-auto font-mono text-[11px] leading-relaxed text-neutral-300">
                {PUBLICATION.bibtex}
              </pre>
            </div>
          </div>

          {/* Right Scientific Axes */}
          <div className="space-y-4 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-[#e04628]/40 bg-[#17171a] p-6 sm:p-7"
            >
              <p className="font-mono text-xs text-[#f0674b]">
                Chapitre d’ouvrage · {PUBLICATION.institution}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {PUBLICATION.title}
              </h3>
              <p className="mt-2 text-sm italic text-neutral-300">{PUBLICATION.frenchSubtitle}</p>
              <p className="mt-3 font-mono text-xs text-neutral-400">
                Autrices &amp; Auteur : {PUBLICATION.authors}
              </p>
            </motion.div>

            {PUBLICATION.axes.map((axis, idx) => (
              <motion.div
                key={axis.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 * (idx + 1), ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-neutral-800 bg-[#161619] p-6 transition-colors hover:border-neutral-700"
              >
                <h4 className="font-display text-base font-semibold text-white">{axis.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{axis.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
