'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import LiveClock from './LiveClock'
import DropdownMenu from './DropdownMenu'
import ThemeToggle from './ThemeToggle'

export default function GlassHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
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
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="w-10 h-10 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

