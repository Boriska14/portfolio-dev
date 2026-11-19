import { ArrowUpRight } from 'lucide-react';
import { PROFILE, PUBLICATION } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F172A] py-14 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-3 sm:items-start">
          {/* Left: Direct Profiles */}
          <div className="space-y-2.5">
            <p className="font-mono text-[11px] font-semibold text-[#93C5FD]">
              Réseaux
            </p>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PUBLICATION.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  ResearchGate
                </a>
              </li>
            </ul>
          </div>

          {/* Center: Bold stacked navigation (inspired by 00:11 footer) */}
          <nav aria-label="Navigation pied de page" className="sm:text-center">
            <ul className="space-y-1.5 text-xl font-semibold tracking-tight text-white">
              <li>
                <a href="#accueil" className="transition-colors hover:text-[#93C5FD]">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="transition-colors hover:text-[#93C5FD]">
                  Approche
                </a>
              </li>
              <li>
                <a href="#projets" className="transition-colors hover:text-[#93C5FD]">
                  Projets
                </a>
              </li>
              <li>
                <a href="#competences" className="transition-colors hover:text-[#93C5FD]">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#93C5FD]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right: Direct CTA */}
          <div className="space-y-3 sm:text-right">
            <p className="font-mono text-[11px] font-semibold text-[#93C5FD]">
              Échanger
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              {PROFILE.fullName} · Ingénieure SI, IoT &amp; Cloud
            </p>
            <div>
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#93C5FD] hover:bg-white/10"
              >
                <span>Écrire un message</span>
                <ArrowUpRight className="bp-btn-arrow h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>{PROFILE.fullName}</p>
          <p className="font-mono text-[11px] tracking-wide text-slate-400">
            01 Cameroun · 02 France · 03 Belgique
          </p>
        </div>
      </div>
    </footer>
  );
}
