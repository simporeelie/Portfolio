import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIMPORE Elie | Développeur Full Stack',
  description: 'Portfolio professionnel de SIMPORE Elie — Développeur Full Stack Web & Mobile. Laravel, Django, Spring Boot, Flutter, Angular.',
  keywords: ['développeur', 'full stack', 'web', 'mobile', 'Laravel', 'Django', 'Flutter', 'Angular', 'Burkina Faso'],
  authors: [{ name: 'SIMPORE Elie' }],
  openGraph: {
    title: 'SIMPORE Elie | Développeur Full Stack',
    description: 'Portfolio professionnel de SIMPORE Elie — Développeur Full Stack Web & Mobile',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-dark text-slate-200 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
