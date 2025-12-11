import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Chatbot from '@/components/Chatbot/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DNCL Techzone - Enterprise-Grade Tech Delivered with Confidence',
  description: 'We supply certified phones, laptops, tablets, and watches ready for resale, deployment, or internal use across industries.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Chatbot />
      </body>
    </html>
  )
}

