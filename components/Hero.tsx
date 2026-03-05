'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'

const roles = [
  'Développeur Full Stack',
  'Web & Mobile Developer',
  'Laravel • Django • Spring Boot',
  'Flutter & Ionic Developer',
]

function useTypewriter(texts: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts, speed, pause])

  useEffect(() => {
    setDisplayed(texts[textIndex].slice(0, charIndex))
  }, [charIndex, textIndex, texts])

  return displayed
}

export default function Hero() {
  const typeText = useTypewriter(roles)

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/simporeelie', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/elie-simpore/', label: 'LinkedIn' },
    { icon: <FiMail size={20} />, href: 'mailto:Simporeelie97@gmail.com', label: 'Email' },
  ]

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-6 lg:px-8 pt-16"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Disponible pour de nouveaux projets</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight"
            >
              <span className="text-slate-100">SIMPORE</span>
              <br />
              <span className="gradient-text">Elie</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 mb-6"
            >
              <span className="text-xl sm:text-2xl text-primary font-mono font-semibold">
                {typeText}
                <span className="cursor" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Diplômé en Technologie du Génie Informatique, je conçois des applications
              web & mobiles performantes et scalables avec une attention particulière à
              l&apos;expérience utilisateur et à la qualité du code.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('contact')}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 glow flex items-center gap-2"
              >
                <FiMail size={18} />
                Me Contacter
              </motion.button>

              <motion.a
                href="/cv-elie-simpore.pdf"
                download="CV-SIMPORE-Elie.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary/40 hover:border-primary text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                <FiDownload size={18} />
                Télécharger CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-slate-500">Me retrouver sur :</span>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-dark-card border border-dark-border hover:border-primary hover:text-primary text-slate-300 rounded-lg transition-all duration-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Rotating border */}
              <div className="w-72 h-72 rounded-full animated-border p-1 float">
                <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
                  {/* Profile photo */}
                  <img
                    src="/photo.jpg"
                    alt="SIMPORE Elie"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-dark-card border border-primary/30 rounded-xl px-3 py-2 text-sm font-mono text-primary shadow-lg"
              >
                &lt;Laravel /&gt;
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-dark-card border border-primary/30 rounded-xl px-3 py-2 text-sm font-mono text-primary-light shadow-lg"
              >
                Flutter 🚀
              </motion.div>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-14 xl:-right-16 bg-dark-card border border-green-500/30 rounded-xl px-3 py-2 text-sm font-mono text-green-400 shadow-lg"
              >
                Django ✓
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 cursor-pointer"
          onClick={() => handleScroll('about')}
        >
          <span className="text-xs font-mono">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
