import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import LogoImage from '@/components/logo-image'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VibeBrews - AI Game Creation Platform | Turn Ideas Into Games',
  description: 'Brew the Vibe - Create, Play, Explore. Create HTML5 games using AI conversation. No coding required. Discover and play infinite games in a TikTok-style feed. Join the social gaming revolution.',
  keywords: 'AI game creation, no-code game development, HTML5 games, social gaming platform, game maker, TikTok for games, conversational AI, game creator app',
  authors: [{ name: 'VibeBrews' }],
  creator: 'VibeBrews',
  publisher: 'VibeBrews',
  robots: 'index, follow',
  metadataBase: new URL('https://vibebrews.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vibebrews.com',
    title: 'VibeBrews - Create Games Through Conversation',
    description: 'Brew the Vibe - Create, Play, Explore. AI-powered game creation meets TikTok-style discovery. Turn your ideas into playable games in minutes. No coding required.',
    siteName: 'VibeBrews',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VibeBrews - AI Game Creation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeBrews - AI Game Creation Platform',
    description: 'Brew the Vibe - Create, Play, Explore. Create HTML5 games using AI conversation. Discover and play infinite games in a TikTok-style feed.',
    images: ['/twitter-image.png'],
    creator: '@vibebrews',
  },
  icons: {
    icon: '/LOGO.PNG',
    apple: '/LOGO.PNG',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && process.env.NEXT_PUBLIC_GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {/* Structured Data - Software Application */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'VibeBrews',
              applicationCategory: 'GameApplication',
              operatingSystem: 'Android',
              description: 'Brew the Vibe - Create, Play, Explore. AI-powered game creation platform with TikTok-style discovery feed. Create HTML5 games through conversation, no coding required.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '150',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Premium Sticky Header */}
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
          <div className="backdrop-blur-md bg-white/70 border-b border-vibe-teal/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between h-20">
                {/* Logo + Brand */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-vibe-blue to-vibe-teal rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-vibe-blue to-vibe-teal p-2 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                      <LogoImage />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl bg-gradient-to-r from-vibe-blue via-vibe-teal to-vibe-blue-dark bg-clip-text text-transparent font-[family-name:var(--font-space-grotesk)]">
                      VibeBrews
                    </span>
                    <span className="text-xs text-gray-500 font-medium tracking-wide">Brew the Vibe - Create, Play, Explore</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.nextap.vibebrews&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-6 py-3 bg-vibe-orange text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-orange"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20">
        {children}
        </div>
      </body>
    </html>
  )
}
