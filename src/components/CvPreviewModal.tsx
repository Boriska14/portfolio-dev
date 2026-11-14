import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Printer, X } from 'lucide-react';
import {
  CERTIFICATIONS,
  ENGAGEMENTS,
  EXPERIENCES,
  PROFILE,
  PUBLICATION,
  SKILL_GROUPS,
} from '../data/portfolioData';

interface CvPreviewModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvPreviewModal({ open, onClose }: CvPreviewModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101012]/80 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl"
      >
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 bg-[#101012] px-6 py-4 text-white">
          <div>
            <h2 id="cv-modal-title" className="font-display text-lg font-semibold">
              Curriculum Vitae — {PROFILE.fullName}
            </h2>
            <p className="font-mono text-xs text-neutral-300">
              UCAC-ICAM · Titre CTI 2026 · Cameroun.France.Belgique
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-neutral-700 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:border-[#e04628] hover:text-white"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Imprimer
            </button>
            <a
              href={PROFILE.cvPdfUrl}
              download="CV_Boriska_Mbilongo.pdf"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#c4381e] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#a82d16]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Télécharger PDF officiel
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer l’aperçu du CV"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 text-neutral-300 hover:border-[#e04628] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Sheet */}
        <div className="overflow-y-auto bg-[#f2ede4] p-4 sm:p-8">
          <div
            id="cv-printable-sheet"
            className="mx-auto max-w-3xl rounded-lg border border-[#141414]/15 bg-white p-8 text-[#101012] shadow-sm sm:p-10"
          >
            <header className="border-b border-neutral-200 pb-6">
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#101012]">
                {PROFILE.fullName}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#c4381e]">{PROFILE.title}</p>
              <p className="mt-2 font-mono text-xs text-neutral-600">
                {PROFILE.phone} · {PROFILE.email} · Yaoundé, Cameroun · Mobilité internationale
              </p>
              <p className="mt-1 font-mono text-xs text-neutral-500">
                LinkedIn : linkedin.com/in/boriska-mbilongo · GitHub : github.com/boriska-mbilongo
              </p>
              <p className="mt-4 text-xs leading-relaxed text-neutral-700">
                {PROFILE.bioLead} {PROFILE.bioSecondary}
              </p>
            </header>

            <section className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Expériences &amp; Formation
              </h4>
              <div className="mt-3 space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="border-b border-neutral-100 pb-3 last:border-none">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-sm font-semibold text-[#101012]">
                        {exp.role}
                      </p>
                      <span className="font-mono text-xs text-[#c4381e] tabular-nums">
                        {exp.organization} · {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-700">{exp.summary}</p>
                    <ul className="mt-1.5 list-disc pl-4 text-[11px] text-neutral-600 space-y-0.5">
                      {exp.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Publication scientifique (Springer Nature)
              </h4>
              <p className="mt-2 text-xs font-semibold text-[#101012]">{PUBLICATION.title}</p>
              <p className="mt-0.5 text-[11px] text-neutral-600">
                {PUBLICATION.authors} — {PUBLICATION.venue} · {PUBLICATION.publisher}
              </p>
            </section>

            <section className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Compétences &amp; Certifications
              </h4>
              <div className="mt-2.5 space-y-1.5 text-xs text-neutral-700">
                {SKILL_GROUPS.map((g) => (
                  <p key={g.id}>
                    <span className="font-semibold text-[#101012]">{g.title} : </span>
                    {g.items.map((i) => i.name).join(' · ')}
                  </p>
                ))}
              </div>
              <p className="mt-3 font-mono text-[11px] text-neutral-600">
                Certifications : {CERTIFICATIONS.map((c) => `${c.name} (${c.date})`).join(' · ')}
              </p>
            </section>

            <section className="mt-6 border-t border-neutral-200 pt-4">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Engagements
              </h4>
              <ul className="mt-2 space-y-1 text-xs text-neutral-700">
                {ENGAGEMENTS.map((e) => (
                  <li key={e.id}>
                    <span className="font-semibold text-[#101012]">{e.title} : </span>
                    {e.detail}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
