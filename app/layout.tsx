import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileBottomCTA } from '@/components/mobile-bottom-cta'
import { NotificationBar } from '@/components/notification-bar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Triple777Salon.LTD | Premium Hair & Esthetics in Abbotsford, BC',
  description: '17+ years of licensed mastery. Premium threading, waxing, hair styling, and esthetics services. Book your appointment today at Triple777 Salon.',
  keywords: 'hair salon, esthetics, threading, waxing, Abbotsford, BC, hair styling, permanent straightening, facials',
  openGraph: {
    title: 'Triple777Salon.LTD | Premium Hair & Esthetics',
    description: '17+ years of licensed mastery. Premium threading, waxing, hair styling, and esthetics services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#FDF8F6]">
        <NotificationBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileBottomCTA />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
