import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from "./theme/theme-provider";
import Header from './components/Header'
import Footer from './components/Footer'

import BannerCookies from './components/BannerCookies';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ABESAT - Abogados Accidentes Tráfico Granada | Especialistas en Indemnizaciones',
  description: 'Abogados especialistas en accidentes de tráfico en Granada. Reclamamos tu indemnización máxima. Más de 20 años de experiencia en accidentes de tránsito.',
  keywords: 'abogado accidente granada, abogado accidente trafico granada, abogados tráfico granada, indemnización accidente, abogado especialista accidentes',
  alternates: {
    canonical: 'https://abesat.es'
  },
  openGraph: {
    title: 'ABESAT - Abogados Accidentes Tráfico Granada',
    description: 'Abogados especialistas en accidentes de tráfico en Granada. Reclamamos tu indemnización máxima.',
    url: 'https://abesat.es',
    siteName: 'ABESAT',
    images: [
      {
        url: 'https://abesat.es/images/abesat.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-[calc(100vh-160px)]">{children}</main>
          <Footer />
          <BannerCookies />
        </ThemeProvider>
      </body>
    </html>
  )
}