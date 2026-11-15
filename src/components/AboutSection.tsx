import { motion } from 'motion/react';
import { Award, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';
import { CERTIFICATIONS, ENGAGEMENTS } from '../data/portfolioData';
import { RevealText } from './RevealText';

const COUNTRY_CHAPTERS = [
  {
    code: '01 · Cameroun',
    country: 'Douala & Yaoundé',
    places: 'UCAC-ICAM · Sparte Robotics · ENEO · MINERVE',
    detail:
      'Cycle ingénieur à l’UCAC-ICAM, stage embarqué sur microcontrôleur PIC, application de réconciliation des ventes en 4 modules (Django/PostgreSQL, UML/Merise) chez ENEO (-80 % d’erreurs) et automatisation de processus métier chez MINERVE.',
  },
  {
    code: '02 · France',
    country: 'Grand Paris Sud',
    places: 'ICAM Grand Paris Sud · Salle LIFE · UGECAM',
    detail:
      'Mission de recherche de 5 mois (dir. M. Paul-Eric Dossou) : jumeau numérique de la salle LIFE (Flask, SCRAM/RabbitMQ, ROS/Gazebo, MongoDB), outils SupplyChain (méthode GRAI) et Valuator (UGECAM), puis chapitre publié chez Springer (FAIM 2025).',
  },
  {
    code: '03 · Belgique',
    country: 'Mons (Erasmus)',
    places: 'UMONS · Polytech Mons',
    detail:
      'Master Ingénieur Civil en Informatique et Gestion : développement Edge-to-Cloud temps réel et recherche en Deep Learning (DualSightNet & RT-DETR) sur la plateforme de surveillance ferroviaire Track Sentry Vision.',
  },
];

const EDUCATION_ITEMS = [
  {
    degree: 'Diplôme d’ingénieur en informatique et management des SI (CTI)',
    school: 'UCAC-ICAM · Institut Catholique d’Arts et Métiers',
    period: '2021 – 2026',
  },
  {
    degree: 'Mobilité Erasmus : Master Ingénieur Civil en Informatique & Gestion',
    school: 'UMONS · Faculté Polytechnique (Polytech Mons)',
    period: '2025 – 2026',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#eee6d8] py-20 lg:py-28 text-[#1c140f]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-8 border-b border-[#c2410c]/15 pb-12 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-bold text-[#c2410c]">À propos</p>
            <RevealText>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1c140f] sm:text-4xl">
                Un parcours construit entre trois pays.
              </h2>
            </RevealText>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-[#1c140f]/85 lg:col-span-7">
            <p>
              Formée à l’UCAC-ICAM (titre d’ingénieur CTI, 2026) puis en échange Erasmus à l’UMONS,
              j’ai alterné entre stages en entreprise, recherche appliquée à l’ICAM Grand Paris Sud
              et projets personnels. D’un microcontrôleur PIC à une API Django ou à un jumeau
              numérique temps réel, j’apprécie surtout de partir d’un usage précis et de livrer un
              logiciel fiable au quotidien.
            </p>
            <p className="text-sm text-[#5d4d42]">
              En dehors de l’ingénierie, je participe à des actions associatives et solidaires, du
              mentorat numérique auprès de jeunes filles jusqu’aux initiatives étudiantes et
              citoyennes.
            </p>
          </div>
        </motion.div>

        {/* Three countries on clean White cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COUNTRY_CHAPTERS.map((item, idx) => (
            <motion.div
              key={item.country}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-3xl border border-[#1c140f]/8 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f97316]/45"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#e5e7e6] pb-3.5">
                  <span className="font-mono text-xs font-semibold text-[#c2410c]">
                    {item.code}
                  </span>
                  <MapPin className="h-4 w-4 text-[#f97316]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-[#1c140f]">
                  {item.country}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-[#5d4d42]">{item.places}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#5d4d42]">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education, Certifications & Engagements Split */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid grid-cols-1 overflow-hidden rounded-3xl border border-[#1c140f]/8 bg-white lg:grid-cols-12"
        >
          {/* Quiet Mist Sidebar */}
          <div className="space-y-8 border-b border-[#1c140f]/8 bg-[#e5e7e6]/55 p-8 sm:p-10 lg:col-span-5 lg:border-r lg:border-b-0">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-[#c2410c]" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold text-[#1c140f]">Formation</h3>
              </div>

              <div className="mt-4 divide-y divide-[#1c140f]/10">
                {EDUCATION_ITEMS.map((edu) => (
                  <div key={edu.degree} className="py-3.5 first:pt-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-[#1c140f]">{edu.degree}</p>
                      <span className="font-mono text-[11px] font-semibold text-[#c2410c] shrink-0 tabular-nums">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#5d4d42]">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#1c140f]/10 pt-7">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#c2410c]" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold text-[#1c140f]">
                  Certifications &amp; Langues
                </h3>
              </div>

              <div className="mt-4 divide-y divide-[#1c140f]/10">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#1c140f]">{cert.name}</p>
                      <p className="text-xs text-[#5d4d42]">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#c2410c] shrink-0">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3 font-mono text-xs text-[#5d4d42]">
                Langues : Français (natif) · Anglais (B2 professionnel, TOEIC)
              </p>
            </div>
          </div>

          {/* Right White Engagements Grid */}
          <div className="p-8 sm:p-10 lg:col-span-7">
            <div className="flex items-center gap-2 border-b border-[#e5e7e6] pb-4">
              <HeartHandshake className="h-4 w-4 text-[#c2410c]" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-[#1c140f]">
                Engagements associatifs &amp; vie étudiante
              </h3>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {ENGAGEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#1c140f]/6 bg-[#eee6d8]/45 p-5 transition-colors duration-200 hover:bg-[#eee6d8]/80"
                >
                  <p className="text-xs font-bold text-[#c2410c]">{item.category}</p>
                  <h4 className="mt-1 font-display text-base font-bold text-[#1c140f]">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-xs font-medium text-[#5d4d42]">{item.context}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#5d4d42]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
