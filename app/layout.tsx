import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Barber Shop Samokov | Професионални мъжки прически',
  description:
    'Barber Shop Samokov — професионални мъжки прически, skin fade, оформяне на брада в центъра на Самоков. Запазете час онлайн.',
  keywords:
    'бръснар Самоков, barber Samokov, прически Самоков, skin fade, мъжки прически, оформяне на брада',
  authors: [{ name: 'Barber Shop Samokov' }],
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://barbersamokov.com',
    siteName: 'Barber Shop Samokov',
    title: 'Barber Shop Samokov | Професионални мъжки прически',
    description:
      'Barber Shop Samokov — skin fades, дизайни, модерни прически в Самоков. Рейтинг 4.8/5 в Google.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Barber Shop Samokov',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barber Shop Samokov',
    description: 'Професионални мъжки прически в Самоков.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  )
}
