'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMonitor, FiServer, FiDatabase, FiPenTool } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Frontend & Mobile',
    icon: <FiMonitor size={20} />,
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/20',
    accent: 'text-blue-400',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Flutter', level: 70 },
      { name: 'Ionic', level: 70 },
    ],
  },
  {
    title: 'Backend & Frameworks',
    icon: <FiServer size={20} />,
    color: 'from-violet-500/20 to-purple-500/20 border-violet-500/20',
    accent: 'text-violet-400',
    skills: [
      { name: 'PHP / Laravel', level: 85 },
      { name: 'Python / Django', level: 80 },
      { name: 'Java / Spring Boot', level: 72 },
      { name: 'Java Web', level: 68 },
      { name: 'C / C++', level: 65 },
    ],
  },
  {
    title: 'Bases de Données',
    icon: <FiDatabase size={20} />,
    color: 'from-green-500/20 to-teal-500/20 border-green-500/20',
    accent: 'text-green-400',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Oracle', level: 65 },
      { name: 'Access', level: 70 },
    ],
  },
  {
    title: 'Design & Outils',
    icon: <FiPenTool size={20} />,
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/20',
    accent: 'text-pink-400',
    skills: [
      { name: 'UX / UI Design', level: 78 },
      { name: 'Photoshop', level: 75 },
      { name: 'Illustrator', level: 70 },
      { name: 'Video Editing', level: 65 },
    ],
  },
]

const techBadges = [
  'PHP', 'Laravel', 'Python', 'Django', 'Java', 'Spring Boot',
  'JavaScript', 'Next.js', 'Angular', 'Bootstrap', 'Flutter', 'Ionic',
  'MySQL', 'PostgreSQL', 'HTML', 'CSS', 'Git', 'Linux',
  'Photoshop', 'Illustrator', 'REST API', 'SaaS',
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">02 — Skills</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">Compétences Techniques</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className={`card p-6 bg-gradient-to-br ${cat.color}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={cat.accent}>{cat.icon}</span>
                <h3 className={`font-bold text-lg ${cat.accent}`}>{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + i * 0.05 + 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r`}
                        style={{
                          background: `linear-gradient(90deg, ${
                            catIndex === 0 ? '#3B82F6, #6366F1' :
                            catIndex === 1 ? '#8B5CF6, #7C3AED' :
                            catIndex === 2 ? '#10B981, #059669' :
                            '#EC4899, #BE185D'
                          })`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Badges Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-center text-sm text-slate-500 font-mono mb-6">// Technologies utilisées</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 bg-dark-card border border-dark-border hover:border-primary/50 hover:text-primary text-slate-300 text-sm rounded-lg cursor-default transition-all duration-200 font-mono"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
