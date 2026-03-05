'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role: 'Développeur Full Stack & Chargé de Déploiement SaaS',
    company: 'EXPERTIZLAB SOLUTION',
    period: 'Mars 2025 — Présent',
    location: 'Burkina Faso',
    type: 'CDI',
    current: true,
    tasks: [
      'Conception et développement frontend/backend de ManagerApp, application SaaS de gestion de point de vente (stocks, ventes, facturation, utilisateurs)',
      'Développement et intégration des fonctionnalités clés avec une architecture scalable, sécurisée et maintenable',
      'Amélioration de l\'UX/UI et optimisation des performances applicatives',
      'Déploiement en production, tests et maintenance continue de l\'application',
      'Développement d\'une application de gestion de facturation notariale',
      'Développement de sites professionnels : OpenInnova, Vigi Protect SARL',
      'Marketing digital : communication réseaux sociaux, montage vidéo, sponsoring',
      'Installation, configuration et déploiement on-site chez les clients',
    ],
    tags: ['Laravel', 'Django', 'SaaS', 'MySQL', 'Angular', 'Flutter'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="section-padding sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">03 — Experience</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">Expérience Professionnelle</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative md:pl-24 mb-8"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-5 top-6 w-7 h-7 bg-primary rounded-full items-center justify-center shadow-lg shadow-primary/30 z-10">
                <FiBriefcase size={14} className="text-white" />
              </div>

              {/* Card */}
              <div className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 font-medium">
                          En poste
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-500 text-sm">
                      <span className="flex items-center gap-1">
                        <FiCalendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tasks */}
                <ul className="space-y-2 mb-6">
                  {exp.tasks.map((task, ti) => (
                    <li key={ti} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary-light text-xs rounded-lg border border-primary/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative md:pl-24"
          >
            <div className="hidden md:flex absolute left-5 top-4 w-7 h-7 bg-dark-card border-2 border-primary/30 rounded-full items-center justify-center">
              <span className="text-xs text-primary">+</span>
            </div>
            <div className="card p-5 border-dashed border-primary/20 bg-primary/5">
              <p className="text-slate-500 text-sm font-mono text-center">
                🚀 Ouvert à de nouvelles opportunités — <span className="text-primary">Me contacter</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
