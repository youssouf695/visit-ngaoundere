import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Visit Ngaoundéré - Guide Touristique IndabaX 2026',
    template: '%s | Visit Ngaoundéré'
  },
  description: 'Guide touristique interactif de Ngaoundéré spécialement conçu pour les participants d\'IndabaX Cameroun 2026. Découvrez les sites incontournables : Palais du Lamido, Chutes de la Vina, Lac Tison, Bois de Mardock, Grand Marché et Mont Nganha.',
  keywords: 'IndabaX Cameroun 2026, IndabaX Ngaoundéré, tourisme Ngaoundéré, guide touristique Ngaoundéré, sites touristiques Ngaoundéré, Palais du Lamido, Chutes de la Vina, Lac Tison, Bois de Mardock, Grand Marché, Mont Nganha, que faire à Ngaoundéré, visiter Ngaoundéré',
  authors: [{ name: 'Youssoufa Njupuen', url: 'https://njupuen.vercel.app' }],
  creator: 'Youssoufa Njupuen',
  publisher: 'Corporate Tech Solution',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Visit Ngaoundéré - Guide Touristique IndabaX 2026',
    description: 'Guide interactif pour les participants d\'IndabaX Cameroun 2026. Découvrez Ngaoundéré entre deux sessions de conférence.',
    url: 'https://visit-ngaoundere.vercel.app',
    siteName: 'Visit Ngaoundéré',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guide touristique Ngaoundéré pour IndabaX Cameroun 2026',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit Ngaoundéré - Guide IndabaX 2026',
    description: 'Le guide des participants IndabaX pour découvrir Ngaoundéré',
    images: ['/images/og-image.jpg'],
    creator: '@youssouf695',
  },
  alternates: {
    canonical: 'https://visit-ngaoundere.vercel.app',
  },
  category: 'travel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-4000" />
        </div>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}