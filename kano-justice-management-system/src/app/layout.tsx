import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthSessionProvider from '@/components/providers/session-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kano Justice Management System - Ministry of Justice',
  description: 'Official web-based system for automating the Kano State Ministry of Justice core functions including legal advisory, public prosecution, civil litigation, and case management.',
  keywords: 'Kano State, Ministry of Justice, Legal Advisory, Public Prosecution, Civil Litigation, Case Management, Nigeria',
  authors: [{ name: 'Kano State Government' }],
  icons: {
    icon: '/images/kano-state-logo.png',
    apple: '/images/kano-state-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}