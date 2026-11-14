import { motion } from 'motion/react';
import { Award, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';
import { CERTIFICATIONS, ENGAGEMENTS } from '../data/portfolioData';
import { RevealText } from './RevealText';

const COUNTRY_CHAPTERS = [
  {
    country: 'Cameroun · Douala & Yaoundé',
    places: 'UCAC-ICAM · Sparte Robotics · ENEO · MINERVE',
    detail:
      'Cycle ingénieur à l’UCAC-ICAM, stage embarqué sur microcontrôleur PIC, développement du logiciel de réconciliation des ventes Django/PostgreSQL chez ENEO (-80 % d’erreurs) et conception de la plateforme AquaSafe soumise au MINEE.',
  },
  {
    country: 'France · Grand Paris Sud',
    places: 'ICAM · UGECAM · Springer FAIM 2025',
    detail:
      'Travaux d’ingénierie de recherche sur les jumeaux numériques (Flask, MongoDB, ROS/Gazebo), développement de l’outil métier Valuator pour l’UGECAM et co-écriture d’un chapitre publié chez Springer.',
  },
  {
    country: 'Belgique · Mons',
    places: 'UMONS · Polytech Mons (Erasmus)',
    detail:
      'Master en informatique et gestion à la Faculté Polytechnique de l’UMONS : modules Python Edge-to-Cloud pour la surveillance ferroviaire et mémoire de fin d’études en Deep Learning (DualSightNet & RT-DETR).',
  },
];

const EDUCATION_ITEMS = [
  {
    degree: 'Diplôme d’ingénieur en informatique et management des SI (CTI)',
    school: 'UCAC-ICAM · Institut Catholique d’Arts et Métiers',
    period: '2021 – 2026',
  },
  {
    degree: 'Mobilité Erasmus — Master Ingénieur Civil en Informatique & Gestion',
    school: 'UMONS · Faculté Polytechnique (Polytech Mons)',
    period: '2025 – 2026',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-[#141414]/15 bg-[#f2ede4] py-20 lg:py-24 text-[#141414]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top editorial intro — straightforward, grounded, human */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-8 border-b border-[#141414]/15 pb-12 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold text-[#c4381e]">À propos</p>
            <RevealText>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-[#101012] sm:text-4xl">
                Un parcours construit entre trois pays et plusieurs réalités de terrain.
              </h2>
            </RevealText>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-[#262523] lg:col-span-7">
            <p>
              Formée à l’UCAC-ICAM (titre d’ingénieur CTI, 2026) puis en échange Erasmus à l’UMONS,
              j’ai alterné entre stages en entreprise, recherche académique et projets personnels.
              D’un microcontrôleur PIC à une API Django ou à un modèle de vision par ordinateur,
              j’apprécie surtout de partir d’un besoin concret et d’aboutir à un outil que les
              équipes utilisent vraiment.
            </p>
            <p className="text-sm text-neutral-700">
              En parallèle de la technique, je m’implique dans des actions associatives et de
              partage autour du numérique, du mentorat scolaire jusqu’à l’accompagnement de projets
              locaux.
            </p>
          </div>
        </motion.div>

        {/* Three countries on equal footing */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COUNTRY_CHAPTERS.map((item, idx) => (
            <motion.div
              key={item.country}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between border border-[#141414]/12 bg-white p-6"
            >
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#c4381e]">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{item.country}</span>
                </div>
                <p className="mt-1.5 font-mono text-[11px] text-neutral-500">{item.places}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* White stationery sheet: Education, Certifications & Social Engagements */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid grid-cols-1 gap-10 border border-[#141414]/12 bg-white p-8 sm:p-10 lg:grid-cols-12"
        >
          {/* Left Column: Education & Certifications */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-[#c4381e]" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-[#101012]">Formation</h3>
              </div>

              <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                {EDUCATION_ITEMS.map((edu) => (
                  <div key={edu.degree} className="py-3.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-[#101012]">{edu.degree}</p>
                      <span className="font-mono text-[11px] text-[#c4381e] shrink-0 tabular-nums">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-600">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#c4381e]" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-[#101012]">
                  Certifications &amp; Langues
                </h3>
              </div>

              <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#101012]">{cert.name}</p>
                      <p className="text-xs text-neutral-500">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs font-medium text-[#c4381e] shrink-0">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3 font-mono text-xs text-neutral-600">
                Langues : Français (natif) · Anglais (B2 professionnel, TOEIC)
              </p>
            </div>
          </div>

          {/* Right Column: Social & Associative Engagements */}
          <div className="lg:col-span-7 lg:border-l lg:border-neutral-200 lg:pl-10">
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-[#c4381e]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#101012]">
                Engagements associatifs &amp; vie étudiante
              </h3>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 border-t border-neutral-200 pt-5 sm:grid-cols-2">
              {ENGAGEMENTS.map((item) => (
                <div key={item.id}>
                  <p className="font-mono text-[11px] font-semibold text-[#c4381e]">
                    {item.category}
                  </p>
                  <h4 className="mt-1 font-display text-base font-semibold text-[#101012]">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-neutral-500">{item.context}</p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
