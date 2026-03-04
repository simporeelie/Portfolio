'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiShoppingBag, FiFileText, FiGlobe, FiShield } from 'react-icons/fi'

const projects = [
  {
    title: 'ManagerApp',
    subtitle: 'SaaS — Point de Vente',
    description:
      'Application SaaS complète de gestion de point de vente pour les entreprises. Gestion des stocks, ventes, facturation et utilisateurs. Architecture scalable et sécurisée.',
    tags: ['Laravel', 'MySQL', 'Angular', 'Bootstrap', 'SaaS'],
    icon: <FiShoppingBag size={22} />,
    color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/20',
    accent: 'from-indigo-500 to-violet-500',
    iconBg: 'text-indigo-400',
    status: 'Production',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    title: 'App. Facturation Notariale',
    subtitle: 'Gestion — Facturation',
    description:
      'Application de gestion de facturation pour office notarial. Génération automatique de factures, suivi des paiements et archivage des dossiers clients.',
    tags: ['Django', 'PostgreSQL', 'Python', 'PDF Generation'],
    icon: <FiFileText size={22} />,
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/20',
    accent: 'from-blue-500 to-cyan-500',
    iconBg: 'text-blue-400',
    status: 'Livré',
    statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'OpenInnova',
    subtitle: 'Site Web Professionnel',
    description:
      'Site web d\'entreprise professionnel avec design moderne. Présentation des services, portfolio et formulaire de contact intégré.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    icon: <FiGlobe size={22} />,
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/20',
    accent: 'from-emerald-500 to-teal-500',
    iconBg: 'text-emerald-400',
    status: 'En ligne',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    title: 'Vigi Protect SARL',
    subtitle: 'Site Web Corporate',
    description:
      'Site web corporate pour entreprise de sécurité. Interface moderne, présentation des services de surveillance et système de demande de devis en ligne.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    icon: <FiShield size={22} />,
    color: 'from-orange-500/20 to-red-500/20 border-orange-500/20',
    accent: 'from-orange-500 to-red-500',
    iconBg: 'text-orange-400',
    status: 'En ligne',
    statusColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">04 — Projects</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">Projets Réalisés</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">
            Applications et sites web développés en contexte professionnel et déployés en production.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`card p-6 bg-gradient-to-br ${project.color} group cursor-default`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-dark/50 flex items-center justify-center shadow-lg ${project.iconBg}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 text-lg leading-tight">{project.title}</h3>
                    <p className="text-slate-500 text-sm">{project.subtitle}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full border font-medium ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              {/* Gradient bar */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${project.accent} rounded-full mb-4 opacity-60`} />

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-dark/50 text-slate-300 text-xs rounded font-mono border border-dark-border">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2 border-t border-dark-border/50">
                <span className="text-xs text-slate-600 font-mono flex-1">// EXPERTIZLAB SOLUTION</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button type="button" className="p-1.5 text-slate-500 hover:text-primary transition-colors" title="Code source (privé)">
                    <FiGithub size={16} />
                  </button>
                  <button type="button" className="p-1.5 text-slate-500 hover:text-primary transition-colors" title="Voir le projet">
                    <FiExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-500 text-sm mt-8 font-mono"
        >
          // Plus de projets disponibles sur demande
        </motion.p>
      </div>
    </section>
  )
}
