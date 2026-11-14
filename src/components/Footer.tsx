import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#101012] py-10 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            {PROFILE.fullName}
            <span className="font-sans text-[#e04628]">.</span>
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            Ingénieure logicielle (Titre CTI) · Développement Backend, IoT &amp; Cloud · Cameroun.France.Belgique
          </p>
        </div>

        <nav aria-label="Liens de pied de page" className="flex flex-wrap items-center gap-6 text-xs">
          <a href="#home" className="transition-colors hover:text-[#f0674b]">
            Accueil
          </a>
          <a href="#projects" className="transition-colors hover:text-[#f0674b]">
            Réalisations
          </a>
          <a href="#publications" className="transition-colors hover:text-[#f0674b]">
            Springer FAIM 2025
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#f0674b]"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#f0674b]"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
