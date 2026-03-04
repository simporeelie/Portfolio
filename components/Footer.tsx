'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-dark-border bg-dark px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center sm:text-left">
            <span className="font-mono text-primary font-bold text-xl">&lt;ES /&gt;</span>
            <p className="text-slate-500 text-sm mt-1">
              © {new Date().getFullYear()} SIMPORE Elie — Tous droits réservés
            </p>
            <p className="text-slate-600 text-xs mt-0.5 font-mono">
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com/simporeelie', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/eliesimpore', label: 'LinkedIn' },
              { icon: <FiMail size={18} />, href: 'mailto:Simporeelie97@gmail.com', label: 'Email' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-2 text-slate-500 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}

            {/* Scroll to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 transition-all duration-200 ml-2"
              aria-label="Retour en haut"
            >
              <FiArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
