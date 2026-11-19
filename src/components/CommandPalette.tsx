import { useEffect, useState } from 'react';
import { ArrowRight, Check, Copy, Search, X } from 'lucide-react';
import { PROFILE, PROJECTS, PUBLICATION } from '../data/portfolioData';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

const SECTION_COMMANDS = [
  { id: 'accueil', label: 'Accueil', hint: 'Présentation générale', href: '#accueil' },
  { id: 'a-propos', label: 'À propos', hint: 'Positionnement, parcours & CV', href: '#a-propos' },
  { id: 'projets', label: 'Projets', hint: '8 fiches détaillées & archive', href: '#projets' },
  { id: 'competences', label: 'Compétences', hint: 'Architecture SI, IoT, Transformation', href: '#competences' },
  { id: 'contact', label: 'Contact', hint: 'Email, LinkedIn & GitHub', href: '#contact' },
];

export function CommandPalette({ open, onClose, onSelectProject }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const normalized = query.trim().toLowerCase();

  const filteredSections = SECTION_COMMANDS.filter(
    (s) =>
      s.label.toLowerCase().includes(normalized) ||
      s.hint.toLowerCase().includes(normalized)
  );

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.shortTitle.toLowerCase().includes(normalized) ||
      p.title.toLowerCase().includes(normalized) ||
      p.technologies.some((t) => t.toLowerCase().includes(normalized))
  );

  const handleJumpSection = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpProject = (projectId: string) => {
    onClose();
    onSelectProject(projectId);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation rapide"
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#0F172A]/50 px-4 pt-20 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#FDFDFD] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[#E2E8F0] px-4 py-3">
          <Search className="h-4 w-4 text-[#64748B] shrink-0" aria-hidden="true" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Aller vers une section, un projet ou une technologie..."
            className="w-full bg-transparent text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la palette"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#0F172A]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-3 space-y-4">
          {filteredSections.length > 0 && (
            <div>
              <p className="px-2 pb-1.5 font-mono text-[11px] font-medium text-[#64748B]">
                Sections
              </p>
              <div className="space-y-0.5">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleJumpSection(section.href)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
                  >
                    <span className="font-medium text-[#0F172A]">{section.label}</span>
                    <span className="text-xs text-[#64748B]">{section.hint}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length > 0 && (
            <div>
              <p className="px-2 pb-1.5 font-mono text-[11px] font-medium text-[#64748B]">
                Projets
              </p>
              <div className="space-y-0.5">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => handleJumpProject(project.id)}
                    className="flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#EFF6FF]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-mono text-xs font-medium text-[#1E40AF] tabular-nums">
                        {project.index}
                      </span>
                      <span className="truncate font-medium text-[#0F172A]">
                        {project.shortTitle}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-[#64748B] shrink-0">
                      <span>{project.technologies.slice(0, 2).join(' · ')}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredSections.length === 0 && filteredProjects.length === 0 && (
            <p className="py-6 text-center text-sm text-[#64748B]">
              Aucun élément ne correspond à cette recherche.
            </p>
          )}

          <div className="space-y-1 border-t border-[#E2E8F0] pt-2.5">
            <a
              href={PUBLICATION.url}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium text-[#334155] transition-colors hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
            >
              <span>Publication Springer FAIM 2025 (ResearchGate)</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium text-[#334155] transition-colors hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
            >
              <span>Copier l’email professionnel ({PROFILE.email})</span>
              {copied ? (
                <span className="inline-flex items-center gap-1 font-semibold text-[#1E40AF]">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Copié
                </span>
              ) : (
                <Copy className="h-3.5 w-3.5 text-[#64748B]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
