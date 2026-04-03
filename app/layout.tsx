import type { Metadata } from 'next'
import './globals.css'
import ShaderBackground from '@/components/ui/shader-background'

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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="relative min-h-screen isolate">
        <ShaderBackground />
        <div className="nav-shader-soften" aria-hidden />
        <div className="relative z-10 min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  )
}

