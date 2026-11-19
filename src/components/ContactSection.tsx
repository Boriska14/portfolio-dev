import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { HUB_LOCATIONS, PROFILE } from '../data/portfolioData';

const EASE_BP = [0.19, 1, 0.22, 1] as const;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedHubIndex, setSelectedHubIndex] = useState(0);

  const activeHub = HUB_LOCATIONS[selectedHubIndex] ?? HUB_LOCATIONS[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="analog-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Interactive Multi-Hub Typography Band (inspired by 00:09–00:10) */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
              Contact &amp; mobilité
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#334155]">
              Disponible pour échanger autour de projets d’ingénierie, de conception ou
              d’intégration en systèmes d’information, IoT, cloud et informatique industrielle.
            </p>

            <div className="mt-8 space-y-2 border-t border-[#E2E8F0] pt-6">
              {HUB_LOCATIONS.map((hub, idx) => {
                const isSelected = idx === selectedHubIndex;
                return (
                  <button
                    key={hub.country}
                    type="button"
                    onClick={() => setSelectedHubIndex(idx)}
                    className="group flex w-full items-baseline justify-between gap-4 py-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    <span
                      className={`text-2xl font-semibold tracking-tight transition-colors duration-200 sm:text-3xl ${
                        isSelected
                          ? 'text-[#0F172A]'
                          : 'text-[#0F172A]/25 group-hover:text-[#0F172A]/70'
                      }`}
                    >
                      {hub.city}
                    </span>
                    <span
                      className={`font-mono text-xs font-semibold transition-colors ${
                        isSelected ? 'text-[#1E40AF]' : 'text-[#94A3B8]'
                      }`}
                    >
                      0{idx + 1} · {hub.country}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 min-h-[3rem] rounded-lg border border-[#E2E8F0] bg-white px-4 py-3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeHub.country}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: EASE_BP }}
                  className="text-xs leading-relaxed text-[#334155]"
                >
                  <span className="font-semibold text-[#1E40AF]">{activeHub.country} :</span>{' '}
                  {activeHub.scope}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="bp-sheet rounded-xl p-6 sm:p-8 lg:col-span-6">
            <div className="space-y-4">
              <div className="flex flex-col justify-between gap-3 border-b border-[#E2E8F0] pb-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-medium text-[#64748B]">Email direct</p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1E40AF] hover:underline underline-offset-4 break-all"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{PROFILE.email}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2 text-xs font-semibold text-[#0F172A] transition-colors duration-150 hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1E40AF] whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#1E40AF]" aria-hidden="true" />
                      <span>Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copier l’email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid gap-3 pt-1 sm:grid-cols-2">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-[44px] items-center justify-between rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] transition-colors duration-150 hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="bp-btn-arrow h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-[44px] items-center justify-between rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] transition-colors duration-150 hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="bp-btn-arrow h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <blockquote className="mt-16 border-t border-[#E2E8F0] pt-8 text-center">
          <p className="text-sm italic text-[#64748B] sm:text-base">
            « {PROFILE.closingQuote} »
          </p>
        </blockquote>
      </div>
    </section>
  );
}
