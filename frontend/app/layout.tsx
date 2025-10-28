import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
  title: 'VibeGames - AI Game Creation Platform | Turn Ideas Into Games',
  description: 'Create HTML5 games using AI conversation. No coding required. Discover and play infinite games in a TikTok-style feed. Join the social gaming revolution.',
  keywords: 'AI game creation, no-code game development, HTML5 games, social gaming platform, game maker, TikTok for games, conversational AI, game creator app',
  authors: [{ name: 'VibeGames' }],
  creator: 'VibeGames',
  publisher: 'VibeGames',
  robots: 'index, follow',
  metadataBase: new URL('https://vibegames.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vibegames.com',
    title: 'VibeGames - Create Games Through Conversation',
    description: 'AI-powered game creation meets TikTok-style discovery. Turn your ideas into playable games in minutes. No coding required.',
    siteName: 'VibeGames',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VibeGames - AI Game Creation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeGames - AI Game Creation Platform',
    description: 'Create HTML5 games using AI conversation. Discover and play infinite games in a TikTok-style feed.',
    images: ['/twitter-image.png'],
    creator: '@vibegames',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Structured Data - Software Application */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'VibeGames',
              applicationCategory: 'GameApplication',
              operatingSystem: 'Android',
              description: 'AI-powered game creation platform with TikTok-style discovery feed. Create HTML5 games through conversation, no coding required.',
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
        {children}
      </body>
    </html>
  )
}
