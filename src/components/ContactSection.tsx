import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Download, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { RevealText } from './RevealText';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Merci de renseigner votre nom, votre adresse e-mail et votre message.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    subject || `Contact — ${name || 'Message depuis le portfolio'}`
  )}&body=${encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`)}`;

  return (
    <section id="contact" className="bg-[#f2ede4] py-24 text-[#101012]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Coordinates */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs font-semibold text-[#c4381e]">Contact</p>
            <RevealText>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#101012] sm:text-4xl">
                Discutons d’un projet ou d’un poste
              </h2>
            </RevealText>
            <p className="mt-4 text-base leading-relaxed text-[#262523]">
              Un parcours entre <span className="font-mono text-sm font-semibold text-[#101012]">Cameroun.France.Belgique</span> — disponible pour un poste ou une mission en présentiel comme à l’international.
            </p>

            <div className="mt-8 space-y-4 rounded-xl border border-[#141414]/15 bg-white p-6">
              <div>
                <p className="font-mono text-xs text-neutral-500">E-mail</p>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 font-mono text-sm font-medium text-[#101012] hover:text-[#c4381e]"
                  >
                    <Mail className="h-4 w-4 text-[#c4381e] shrink-0" aria-hidden="true" />
                    <span className="break-all">{PROFILE.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 transition-colors hover:border-[#c4381e] hover:text-[#101012]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#c4381e]" />
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
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <p className="font-mono text-xs text-neutral-500">Téléphone</p>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                  className="mt-1.5 inline-flex items-center gap-2 font-mono text-sm font-medium text-[#101012] hover:text-[#c4381e] tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#c4381e] shrink-0" aria-hidden="true" />
                  {PROFILE.phone}
                </a>
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <p className="font-mono text-xs text-neutral-500">Liens &amp; CV</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#101012] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#101012]"
                  >
                    <Linkedin className="h-4 w-4 text-[#c4381e]" aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-[#101012] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#101012]"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={PROFILE.cvPdfUrl}
                    download="CV_Boriska_Mbilongo.pdf"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#c4381e] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#a82d16]"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    CV PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl border border-[#141414]/15 bg-white p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#101012]">
                    Nom
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    className="mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-[#101012] placeholder:text-neutral-400 transition-colors focus:border-[#c4381e] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#101012]">
                    Adresse e-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@entreprise.fr"
                    className="mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-[#101012] placeholder:text-neutral-400 transition-colors focus:border-[#c4381e] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#101012]">
                  Sujet
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Développement backend, IoT, Cloud ou recrutement"
                  className="mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-[#101012] placeholder:text-neutral-400 transition-colors focus:border-[#c4381e] focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[#101012]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message..."
                  className="mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-[#101012] placeholder:text-neutral-400 transition-colors focus:border-[#c4381e] focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p role="alert" className="mt-4 text-xs font-medium text-[#c4381e]">
                  {errorMsg}
                </p>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="mt-4 rounded-lg border border-[#e04628]/30 bg-[#f2ede4] p-4 text-xs leading-relaxed text-[#101012]"
                >
                  <p className="font-semibold">Votre message est prêt.</p>
                  <p className="mt-1">
                    Ouvrez votre messagerie pour l’envoyer :{' '}
                    <a
                      href={mailtoHref}
                      className="font-semibold text-[#c4381e] underline underline-offset-2"
                    >
                      Écrire à {PROFILE.email}
                    </a>
                  </p>
                </motion.div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-neutral-600">
                  Réponse par e-mail ou sur LinkedIn.
                </p>
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#c4381e] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#a82d16] whitespace-nowrap shrink-0"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Envoyer le message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
