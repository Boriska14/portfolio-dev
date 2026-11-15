import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1c140f] py-12 text-[#eee6d8]/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-bold text-white">{PROFILE.fullName}</p>
          <p className="mt-1.5 text-xs text-[#eee6d8]/60">
            Ingénieure informatique (Titre CTI) · Développement Backend, IoT &amp; Cloud · Cameroun · France · Belgique
          </p>
        </div>

        <nav aria-label="Liens de pied de page" className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <a href="#home" className="transition-colors hover:text-[#fb923c]">
            Accueil
          </a>
          <a href="#projects" className="transition-colors hover:text-[#fb923c]">
            Réalisations
          </a>
          <a href="#github" className="transition-colors hover:text-[#fb923c]">
            Activité GitHub
          </a>
          <a href="#publications" className="transition-colors hover:text-[#fb923c]">
            Springer FAIM 2025
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#fb923c]"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#fb923c]"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
