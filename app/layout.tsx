import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Securicam - Installation de Caméras de Sécurité',
  description: 'Securicam, expert en installation de systèmes de vidéosurveillance pour particuliers et professionnels. Devis gratuit.',
  keywords: 'caméras sécurité, vidéosurveillance, installation, maintenance, surveillance',
  authors: [{ name: 'Securicam' }],
  openGraph: {
    title: 'Securicam - Installation de Caméras de Sécurité',
    description: 'Expert en installation de systèmes de vidéosurveillance',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}