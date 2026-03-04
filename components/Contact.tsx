'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'Simporeelie97@gmail.com',
    href: 'mailto:Simporeelie97@gmail.com',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Téléphone',
    value: '+226 71 45 19 01',
    href: 'tel:+22671451901',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Localisation',
    value: 'Burkina Faso 🇧🇫',
    href: null,
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulated send — integrate with Formspree, EmailJS, or your backend
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">06 — Contact</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">Travaillons Ensemble</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">
            Un projet, une collaboration, ou juste envie d&apos;échanger ? N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Travaillons ensemble</h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              Actuellement en poste en tant que Développeur Full Stack, je reste disponible pour
              des missions freelance, des collaborations techniques ou tout échange professionnel
              autour du développement web & mobile. N&apos;hésitez pas à me contacter.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 card p-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary border border-primary/20">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-slate-200 font-medium hover:text-primary transition-colors text-sm">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <FiGithub size={22} />, href: 'https://github.com/simporeelie', label: 'GitHub' },
                { icon: <FiLinkedin size={22} />, href: 'https://linkedin.com/in/eliesimpore', label: 'LinkedIn' },
                { icon: <FiMail size={22} />, href: 'mailto:Simporeelie97@gmail.com', label: 'Email' },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 card hover:border-primary hover:text-primary text-slate-300 transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-2 font-medium">Votre nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-primary rounded-xl text-slate-200 placeholder-slate-600 text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@exemple.com"
                    className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-primary rounded-xl text-slate-200 placeholder-slate-600 text-sm outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-2 font-medium">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Proposition de projet, collaboration..."
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-primary rounded-xl text-slate-200 placeholder-slate-600 text-sm outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-primary rounded-xl text-slate-200 placeholder-slate-600 text-sm outline-none transition-colors duration-200 resize-none"
                />
              </div>

              {sent ? (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <span className="text-xl">✅</span>
                  <div>
                    <p className="text-green-400 font-semibold text-sm">Message envoyé !</p>
                    <p className="text-slate-300 text-xs">Je vous répondrai dans les plus brefs délais.</p>
                  </div>
                </div>
              ) : (
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 glow"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
