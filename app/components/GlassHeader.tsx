'use client'

import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'
import { PillNavMark } from '@/components/ui/mini-navbar'
import { DropdownNavigation } from '@/components/ui/dropdown-navigation'
import { mosqueNavItems } from '@/app/config/navigation'

export default function GlassHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full')

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current)
    }

    if (mobileMenuOpen) {
      setHeaderShapeClass('rounded-2xl')
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full')
      }, 280)
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current)
      }
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (mq.matches) {
        setMobileMenuOpen(false)
        setHeaderShapeClass('rounded-full')
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        mobileMenuOpen &&
        !target.closest('.pill-nav-shell') &&
        !target.closest('.pill-menu-trigger')
      ) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  const aboutItems = [
    { label: 'About Us', href: '/about', description: 'Learn about our mosque' },
    { label: 'History', href: '/about#history', description: "Our mosque's journey and heritage" },
    { label: 'Mission & Vision', href: '/about#mission', description: 'Our goals and values' },
    { label: 'Leadership', href: '/about#leadership', description: 'Meet our team' },
    { label: 'Facilities', href: '/about#facilities', description: 'Our mosque facilities' },
  ]

  const servicesItems = [
    { label: 'All Services', href: '/services', description: 'View all our services' },
    { label: 'Marriage Services', href: '/services#marriage', description: 'Nikah and wedding services' },
    { label: 'Funeral Services', href: '/services#funeral', description: 'Janazah and burial services' },
    { label: 'Educational Programs', href: '/services#education', description: 'Quran and Islamic studies' },
    { label: 'Counseling', href: '/services#counseling', description: 'Spiritual and family counseling' },
    { label: 'Community Support', href: '/services#community', description: 'Community assistance programs' },
  ]

  const eventsItems = [
    { label: 'All Events', href: '/events', description: 'View all events and programs' },
    { label: 'Upcoming Events', href: '/events#upcoming', description: 'View all upcoming events' },
    { label: 'Weekly Programs', href: '/events#weekly', description: 'Regular weekly activities' },
    { label: 'Ramadan Schedule', href: '/events#ramadan', description: 'Ramadan programs and timings' },
    { label: 'Educational Events', href: '/events#education', description: 'Lectures and workshops' },
  ]

  const resourcesItems = [
    { label: 'Prayer Times', href: '/', description: 'Daily prayer schedule' },
    { label: 'All Resources', href: '/resources', description: 'View all resources' },
    { label: 'Islamic Calendar', href: '/resources#calendar', description: 'Hijri calendar and important dates' },
    { label: 'Quran & Hadith', href: '/resources#quran', description: 'Islamic resources and links' },
    { label: 'Downloads', href: '/resources#downloads', description: 'Educational materials' },
  ]

  const pillRadius = `${headerShapeClass} md:rounded-full`

  return (
    <>
      <header
        className={`pill-nav-shell glass-surface-over-bg fixed left-1/2 top-3 z-[60] w-[calc(100%-1.25rem)] max-w-5xl -translate-x-1/2 transition-[border-radius,box-shadow,border-color] duration-300 ease-out md:overflow-visible ${pillRadius} overflow-hidden`}
      >
        <div className={`${pillRadius} px-3 sm:px-5 py-2.5 sm:py-3`}>
          <div className="flex items-center justify-between gap-3">
            <a
              href="/"
              className="flex min-w-0 flex-1 items-center gap-3.5 text-text-primary transition-opacity hover:opacity-90 sm:flex-none sm:max-w-[min(100%,34rem)] md:max-w-none"
            >
              <PillNavMark />
              <span className="truncate text-lg font-bold leading-tight tracking-tight sm:text-xl md:text-2xl whitespace-nowrap">
                Jamia Masjid West Drayton
              </span>
            </a>

            <nav className="hidden items-center gap-4 md:flex md:flex-wrap md:justify-end">
              <DropdownNavigation navItems={mosqueNavItems} />
              <a
                href="/donate"
                className="relative isolate rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 premium-gradient hover:opacity-95 hover:shadow-lg active:scale-[0.98]"
              >
                Donate
              </a>
              <ThemeToggle />
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                className="pill-menu-trigger flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-[min(80vh,1200px)] border-t border-border opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="flex max-h-[min(75vh,560px)] flex-col gap-4 overflow-y-auto px-1 py-4">
              <div className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">About</p>
                <div className="flex flex-col gap-2">
                  {aboutItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="glass-hover-subtle rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Services</p>
                <div className="flex flex-col gap-2">
                  {servicesItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="glass-hover-subtle rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Events</p>
                <div className="flex flex-col gap-2">
                  {eventsItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="glass-hover-subtle rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Resources</p>
                <div className="flex flex-col gap-2">
                  {resourcesItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="glass-hover-subtle rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 border-t border-border pt-2">
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="glass-hover-subtle rounded-lg px-3 py-2.5 text-center text-sm font-medium text-text-primary transition-colors"
                >
                  Contact
                </a>
                <a
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full px-4 py-2.5 text-center text-sm font-semibold text-white premium-gradient"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Clears fixed pill: top-3 + vertical padding + tallest row (logo / controls) */}
      <div className="h-[5.75rem] shrink-0 sm:h-[6.25rem] md:h-[6.75rem]" aria-hidden />
    </>
  )
}
