import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "L'Excellence Française - Journal des Réussites de la France",
  description: "De la Révolution qui a changé le monde aux innovations qui le façonnent aujourd'hui, la France porte depuis des siècles les valeurs universelles et l'excellence qui inspirent l'humanité.",
  keywords: "France, Excellence, Innovation, Science, Culture, Sport, Technologie, Histoire française",
  authors: [{ name: "L'Excellence Française" }],
  openGraph: {
    title: "L'Excellence Française",
    description: "Le journal dédié aux succès, innovations et rayonnement de la France",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

