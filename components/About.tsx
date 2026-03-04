'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiMapPin, FiPhone, FiMail, FiCode, FiPenTool, FiTarget } from 'react-icons/fi'

const infos = [
  { icon: <FiUser size={16} />, label: 'Nom', value: 'SIMPORE Elie' },
  { icon: <FiMapPin size={16} />, label: 'Localisation', value: 'Burkina Faso 🇧🇫' },
  { icon: <FiPhone size={16} />, label: 'Téléphone', value: '+226 71 45 19 01' },
  { icon: <FiMail size={16} />, label: 'Email', value: 'Simporeelie97@gmail.com' },
]

const highlights = [
  {
    icon: <FiCode size={24} />,
    title: 'Développeur Full Stack',
    desc: 'Web & Mobile — Laravel, Django, Spring Boot, Angular, Flutter, Ionic',
  },
  {
    icon: <FiPenTool size={24} />,
    title: 'Designer UI/UX',
    desc: 'Photoshop, Illustrator — certified Orange Digital Center',
  },
  {
    icon: <FiTarget size={24} />,
    title: 'Orienté Résultats',
    desc: 'Livraison de solutions SaaS déployées en production chez EXPERTIZLAB',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">01 — About</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">À Propos de Moi</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative p-2 pb-10 pr-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-dark-card border border-primary/20 overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="/photo.jpg"
                  alt="SIMPORE Elie"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-0 -right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border border-primary/20 -z-10 translate-x-4 translate-y-4" />
              <div className="absolute -bottom-0 -right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border border-primary/10 -z-20 translate-x-8 translate-y-8" />
            </div>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Diplômé en <span className="text-primary font-medium">Technologie du Génie Informatique</span> de
              l&apos;Université Aube Nouvelle (2022–2025), je suis un développeur Full Stack passionné
              par la création d&apos;applications web et mobiles innovantes.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Curieux, motivé et rigoureux, je conçois des applications performantes et scalables
              avec une attention particulière à l&apos;expérience utilisateur et à la qualité du code.
              Mes compétences en <span className="text-primary-light font-medium">infographie</span> me permettent
              de livrer des solutions à la fois fonctionnelles et esthétiques.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {infos.map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <span className="text-primary">{info.icon}</span>
                  <div>
                    <span className="text-xs text-slate-500 block">{info.label}</span>
                    <span className="text-sm text-slate-300 font-medium">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-2">
              {[
                { lang: 'Français', level: 'Natif', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                { lang: 'Anglais', level: 'Intermédiaire', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
                { lang: 'Mooré', level: 'Intermédiaire', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
              ].map((l) => (
                <span key={l.lang} className={`px-3 py-1 rounded-full text-xs border ${l.color} font-medium`}>
                  {l.lang} · {l.level}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="card p-6"
            >
              <div className="text-primary mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
