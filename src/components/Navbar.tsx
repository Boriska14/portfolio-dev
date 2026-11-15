import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Réalisations' },
  { href: '#skills', label: 'Services' },
  { href: '#experience', label: 'Parcours' },
  { href: '#github', label: 'GitHub' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#eee6d8]/10 bg-[#1c140f]/94 text-[#eee6d8] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        <a
          href="#home"
          className="font-display text-base font-bold tracking-tight text-[#eee6d8] transition-colors duration-200 hover:text-[#fb923c] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb923c]"
        >
          Boriska Mbilongo
        </a>

        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-tight text-[#eee6d8]/75 transition-colors duration-200 hover:text-[#eee6d8] hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb923c]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#f97316] px-5 py-2 text-xs font-bold tracking-tight text-[#1c140f] transition-colors duration-200 hover:bg-[#fb923c] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
          >
            Me contacter
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-[#eee6d8] transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#1c140f] md:hidden"
          >
            <nav aria-label="Navigation mobile" className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center text-sm font-medium text-[#eee6d8] transition-colors hover:text-[#fb923c]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#publications"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center text-sm font-medium text-[#eee6d8] transition-colors hover:text-[#fb923c]"
              >
                Publication
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#f97316] px-5 py-2.5 text-sm font-bold text-[#1c140f] transition-colors hover:bg-[#fb923c]"
              >
                Me contacter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
