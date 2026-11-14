import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Services' },
  { href: '#experience', label: 'Parcours' },
  { href: '#publications', label: 'Publication' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-[#101012]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-xl font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e04628]"
        >
          Boriska<span className="font-sans font-bold text-[#e04628]">.</span>M
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-8 decoration-[#e04628] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e04628]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#a82d16] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e04628]"
          >
            Me contacter
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-700 text-neutral-200 transition-colors hover:border-[#e04628] hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Scroll Reading Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-[#e04628]"
      />

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-neutral-800 bg-[#101012] md:hidden"
          >
            <nav aria-label="Navigation mobile" className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center text-sm font-medium text-neutral-200 transition-colors hover:text-[#f0674b]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#c4381e] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#a82d16]"
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
