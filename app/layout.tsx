import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jamia Masjid West Drayton',
  description: 'Jamia Masjid West Drayton - Prayer Times, Events, and Community Information',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}

