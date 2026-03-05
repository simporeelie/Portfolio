'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiAward, FiLayout, FiCode, FiCpu, FiPenTool, FiTool, FiStar } from 'react-icons/fi'

const education = [
  {
    degree: 'Licence en Technologie du Génie Informatique',
    institution: 'Université Aube Nouvelle',
    period: '2022 — 2025',
    icon: <FiAward size={28} />,
    highlight: true,
    details: 'Spécialisation en développement web & mobile, systèmes d\'information et réseaux informatiques.',
  },
  {
    degree: 'Baccalauréat Série Informatique H',
    institution: 'Lycée de la Jeunesse',
    period: '2019 — 2022',
    icon: <FiBook size={28} />,
    highlight: false,
    details: 'Filière informatique avec approfondissement en algorithmique, programmation et systèmes.',
  },
]

const certifications = [
  { title: 'UX-UI Design', org: 'Orange Digital Center', icon: <FiLayout size={18} /> },
  { title: 'Django Framework', org: 'Orange Digital Center', icon: <FiCode size={18} /> },
  { title: 'Laravel Framework', org: 'Orange Digital Center', icon: <FiCode size={18} /> },
  { title: 'Raspberry Pi', org: 'Orange Digital Center', icon: <FiCpu size={18} /> },
  { title: 'Infographie (Photoshop & Illustrator)', org: 'Formation professionnelle', icon: <FiPenTool size={18} /> },
  { title: 'Maintenance Informatique', org: 'Formation professionnelle', icon: <FiTool size={18} /> },
  { title: 'Hackathons & Conférences', org: 'Participation multiple', icon: <FiStar size={18} /> },
]

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="section-padding sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">05 — Education</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">Formation & Certifications</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <FiBook size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-200">Parcours Académique</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                  className={`card p-6 ${edu.highlight ? 'border-primary/30 bg-primary/5' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-primary mt-1">{edu.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-slate-100 leading-tight">{edu.degree}</h4>
                        {edu.highlight && (
                          <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full border border-primary/30 shrink-0">
                            Obtenu
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium text-sm mb-1">{edu.institution}</p>
                      <p className="text-slate-500 text-xs font-mono mb-3">{edu.period}</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <FiAward size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-200">Certifications & Formations</h3>
            </motion.div>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
                >
                  <span className="text-primary shrink-0">{cert.icon}</span>
                  <div>
                    <p className="font-medium text-slate-200 text-sm">{cert.title}</p>
                    <p className="text-slate-500 text-xs font-mono">{cert.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
