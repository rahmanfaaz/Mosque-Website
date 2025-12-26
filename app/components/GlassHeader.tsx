'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import LiveClock from './LiveClock'
import DropdownMenu from './DropdownMenu'
import ThemeToggle from './ThemeToggle'

export default function GlassHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-content')) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Navigation menu items with dropdowns
  const aboutItems = [
    { label: 'About Us', href: '/about', description: 'Learn about our mosque' },
    { label: 'History', href: '/about#history', description: 'Our mosque\'s journey and heritage' },
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

  return (
    <header
      className={`sticky top-0 z-50 glass border-b transition-all duration-500 ${
        scrolled ? 'glass-scrolled shadow-lg backdrop-blur-xl' : 'shadow-sm backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Top Left */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          {/* Navigation Links with Dropdowns */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu label="About" items={aboutItems} />
            <DropdownMenu label="Services" items={servicesItems} />
            <DropdownMenu label="Events" items={eventsItems} />
            <DropdownMenu label="Resources" items={resourcesItems} />
            <a href="/donate" className="text-text-secondary hover:text-primary transition-colors font-medium">
              Donate
            </a>
            <a href="/contact" className="text-text-secondary hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 mobile-menu-container">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav container for full width */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-bg-primary backdrop-blur-lg fixed left-0 right-0 top-16 overflow-y-auto z-40 mobile-menu-content shadow-lg" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          <div className="container mx-auto px-4 py-4 space-y-1 pb-8">
              {/* About Section */}
              <div className="mb-4">
                <a
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-primary hover:bg-bg-secondary hover:text-primary transition-all font-semibold"
                >
                  About
                </a>
                <div className="pl-4 space-y-1">
                  {aboutItems.slice(1).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm text-text-secondary hover:bg-bg-secondary hover:text-primary transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Section */}
              <div className="mb-4">
                <a
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-primary hover:bg-bg-secondary hover:text-primary transition-all font-semibold"
                >
                  Services
                </a>
                <div className="pl-4 space-y-1">
                  {servicesItems.slice(1).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm text-text-secondary hover:bg-bg-secondary hover:text-primary transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Events Section */}
              <div className="mb-4">
                <a
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-primary hover:bg-bg-secondary hover:text-primary transition-all font-semibold"
                >
                  Events
                </a>
                <div className="pl-4 space-y-1">
                  {eventsItems.slice(1).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm text-text-secondary hover:bg-bg-secondary hover:text-primary transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div className="mb-4">
                <a
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-primary hover:bg-bg-secondary hover:text-primary transition-all font-semibold"
                >
                  Resources
                </a>
                <div className="pl-4 space-y-1">
                  {resourcesItems.slice(1).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm text-text-secondary hover:bg-bg-secondary hover:text-primary transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Donate & Contact */}
              <div className="pt-2 border-t border-border space-y-1">
                <a
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-primary hover:bg-bg-secondary hover:text-primary transition-all font-semibold"
                >
                  Donate
                </a>
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-primary hover:bg-bg-secondary hover:text-primary transition-all font-semibold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
    </header>
  )
}

