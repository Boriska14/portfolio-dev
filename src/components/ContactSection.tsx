import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { RevealText } from './RevealText';

const INQUIRY_TOPICS = [
  'Développement Web / API',
  'IoT / Systèmes embarqués',
  'Opportunité Ingénieure / Recrutement',
  'Autre projet',
];

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
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
    subject || `[${topic}] Contact : ${name || 'Message depuis le portfolio'}`
  )}&body=${encodeURIComponent(`Nom : ${name}\nEmail : ${email}\nObjet : ${topic}\n\n${message}`)}`;

  return (
    <section id="contact" className="bg-[#eee6d8] py-20 lg:py-28 text-[#1c140f]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Espresso Direct Coordinates Block */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-3xl bg-[#1c140f] p-7 text-[#eee6d8] sm:p-9 lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold text-[#fb923c]">Contact</p>
              <RevealText>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Discutons d’un projet ou d’un poste
                </h2>
              </RevealText>
              <p className="mt-4 text-sm leading-relaxed text-[#eee6d8]/80">
                Un parcours entre{' '}
                <span className="font-semibold text-[#fb923c]">
                  Cameroun · France · Belgique
                </span>
                , disponible pour échanger sur une mission applicative, IoT/Cloud ou une
                opportunité d’ingénierie.
              </p>
            </div>

            <div className="mt-8 space-y-5 border-t border-[#eee6d8]/12 pt-6">
              <div>
                <p className="text-xs text-[#eee6d8]/65">E-mail direct</p>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 font-mono text-sm font-medium text-white hover:text-[#fb923c]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#fb923c]" aria-hidden="true" />
                    <span className="break-all">{PROFILE.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 rounded-full border border-[#eee6d8]/15 bg-[#261b14] px-3 py-1 text-xs font-semibold text-[#eee6d8] transition-colors hover:bg-[#fb923c] hover:text-[#1c140f]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
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

              <div className="border-t border-[#eee6d8]/12 pt-4">
                <p className="text-xs text-[#eee6d8]/65">Téléphone</p>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                  className="mt-1.5 inline-flex items-center gap-2 font-mono text-sm font-medium text-white hover:text-[#fb923c] tabular-nums"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#fb923c]" aria-hidden="true" />
                  {PROFILE.phone}
                </a>
              </div>

              <div className="border-t border-[#eee6d8]/12 pt-4">
                <p className="text-xs text-[#eee6d8]/65">Réseaux professionnels</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[#eee6d8]/15 bg-[#261b14] px-4 py-2 text-xs font-semibold text-[#eee6d8] transition-colors hover:bg-[#fb923c] hover:text-[#1c140f]"
                  >
                    <Linkedin className="h-4 w-4 text-[#fb923c]" aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[#eee6d8]/15 bg-[#261b14] px-4 py-2 text-xs font-semibold text-[#eee6d8] transition-colors hover:bg-[#fb923c] hover:text-[#1c140f]"
                  >
                    <Github className="h-4 w-4 text-[#fb923c]" aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Clean Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-[#1c140f]/8 bg-white p-7 sm:p-9"
            >
              <div className="mb-6">
                <span className="block text-xs font-bold text-[#1c140f]">
                  Objet de votre demande
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {INQUIRY_TOPICS.map((item) => {
                    const active = topic === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTopic(item)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                          active
                            ? 'bg-[#f97316] text-[#1c140f]'
                            : 'bg-[#e5e7e6]/70 text-[#5d4d42] hover:bg-[#eee6d8] hover:text-[#1c140f]'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#1c140f]">
                    Nom
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    className="mt-1.5 w-full rounded-xl border border-[#1c140f]/12 bg-[#eee6d8]/35 px-4 py-2.5 text-sm text-[#1c140f] placeholder:text-[#5d4d42]/65 transition-colors focus:border-[#c2410c] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#1c140f]">
                    Adresse e-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@entreprise.fr"
                    className="mt-1.5 w-full rounded-xl border border-[#1c140f]/12 bg-[#eee6d8]/35 px-4 py-2.5 text-sm text-[#1c140f] placeholder:text-[#5d4d42]/65 transition-colors focus:border-[#c2410c] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#1c140f]">
                  Précision (optionnel)
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Contexte, délais ou poste visé"
                  className="mt-1.5 w-full rounded-xl border border-[#1c140f]/12 bg-[#eee6d8]/35 px-4 py-2.5 text-sm text-[#1c140f] placeholder:text-[#5d4d42]/65 transition-colors focus:border-[#c2410c] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[#1c140f]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez brièvement votre besoin..."
                  className="mt-1.5 w-full rounded-xl border border-[#1c140f]/12 bg-[#eee6d8]/35 px-4 py-2.5 text-sm text-[#1c140f] placeholder:text-[#5d4d42]/65 transition-colors focus:border-[#c2410c] focus:bg-white focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p role="alert" className="mt-4 text-xs font-semibold text-[#c2410c]">
                  {errorMsg}
                </p>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="mt-4 rounded-2xl border border-[#f97316]/45 bg-[#eee6d8]/65 p-4 text-xs leading-relaxed text-[#1c140f]"
                >
                  <p className="font-bold">Votre message est prêt.</p>
                  <p className="mt-1 text-[#5d4d42]">
                    Ouvrez votre messagerie pour l’envoyer :{' '}
                    <a
                      href={mailtoHref}
                      className="font-bold text-[#c2410c] underline underline-offset-2"
                    >
                      Écrire à {PROFILE.email}
                    </a>
                  </p>
                </motion.div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-medium text-[#5d4d42]">
                  Réponse directe par e-mail ou LinkedIn.
                </p>
                <button
                  type="submit"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#f97316] px-6 py-2.5 text-sm font-bold text-[#1c140f] transition-colors duration-200 hover:bg-[#fb923c] whitespace-nowrap shrink-0"
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
