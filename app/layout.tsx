import type { Metadata } from 'next'
import './globals.css'
import AuthSessionProvider from '@/components/providers/session-provider'
import LayoutWrapper from '@/components/layout-wrapper'
import { ThemeProvider } from '@/lib/contexts/theme-context'
import { ThemeScript } from './theme-script'
import { inter, playfair } from './fonts'

export const metadata: Metadata = {
  title: 'Crispy Cuts Club - Premium Grooming Membership',
  description: 'Join the ultimate grooming club connecting clients with exclusive master barbers through premium membership subscriptions.',
  keywords: 'barbershop, grooming, membership, haircut, premium barber, subscription',
  authors: [{ name: 'Crispy Cuts Club' }],
  metadataBase: new URL('https://crispycutsclub.com'),
  openGraph: {
    title: 'Crispy Cuts Club - Premium Grooming Membership',
    description: 'Join the ultimate grooming club connecting clients with exclusive master barbers.',
    url: 'https://crispycutsclub.com',
    siteName: 'Crispy Cuts Club',
    images: [
      {
        url: 'https://crispycutsclub.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crispy Cuts Club',
    description: 'Premium grooming membership platform',
    images: ['https://crispycutsclub.com/twitter-image.jpg'],
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} light`}>
      <head>
        <ThemeScript />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <AuthSessionProvider>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </AuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}