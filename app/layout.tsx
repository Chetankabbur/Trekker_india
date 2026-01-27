import type React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import './globals.css'
import FloatingWhatsApp from "@/components/floating-whatsapp"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Trekkar India - Where Earth Touches Sky',
  description: 'Premium trek experiences and adventure tours across India. Explore the best treks by season with expert guides and unforgettable journeys.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/TREKKARLOGO.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/TREKKARLOGO.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/TREKKARLOGO.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '//TREKKARLOGO.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
