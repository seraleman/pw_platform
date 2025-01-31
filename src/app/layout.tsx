import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Purple Wellness | Bowls Saludables y Nutritivos',
  description:
    'Descubre los mejores bowls de açaí y opciones saludables en Purple Wellness. Frescura, sabor y bienestar en cada bocado.',
  keywords:
    'açaí, bowls saludables, comida saludable, bienestar, superfoods, alimentación balanceada',
  openGraph: {
    title: 'Purple Wellness - Bowls Saludables',
    description:
      'Los mejores bowls de açaí con ingredientes naturales y nutritivos.',
    url: 'https://purplewellness.co',
    siteName: 'Purple Wellness',
    images: [
      {
        url: 'https://purplewellness.co/images/products/berry-bliss.png',
        width: 1200,
        height: 630,
        alt: 'Bowl saludable',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
