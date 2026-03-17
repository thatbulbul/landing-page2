import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ subsets: ["latin"], variable: '--font-syne' })
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'GoHighLevel Optimization - Free Audit for Agencies',
  description: 'Unlock your GoHighLevel potential with our expert audit and optimization service. Built for agencies. Free analysis included.',
  generator: 'v0.app',
  keywords: 'GoHighLevel, GHL, optimization, audit, agencies, CRM, marketing automation',
  authors: [{ name: 'GoHighLevel Optimization Service' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ghl-optimization.com',
    title: 'GoHighLevel Optimization - Free Audit for Agencies',
    description: 'Unlock your GoHighLevel potential with our expert audit and optimization service.',
    siteName: 'GHL Optimization',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Optimization - Free Audit',
    description: 'Expert GHL optimization for agencies. Free analysis included.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GoHighLevel Optimization',
    url: 'https://ghl-optimization.com',
    description: 'Expert GoHighLevel optimization and audit service for agencies',
    sameAs: [
      'https://twitter.com',
    ],
  }

  return (
    <html lang="en" style={{ colorScheme: 'dark light' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
