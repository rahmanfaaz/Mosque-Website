'use client'

import { useState, useEffect } from 'react'

interface ThemeToggleProps {
  /** Use translucent styles that work on the blue site header (light theme). */
  header?: boolean
}

export default function ThemeToggle({ header = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initialTheme = savedTheme ?? 'dark'

    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const baseBtn =
    'w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group'
  const defaultBtn = `${baseBtn} glass-nested hover:border-primary`
  const headerBtn = `${baseBtn} glass-nested hover:border-primary`

  if (!mounted) {
    return (
      <button
        type="button"
        className={`${header ? headerBtn : defaultBtn}`}
        aria-hidden
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={header ? headerBtn : defaultBtn}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        // Moon icon for dark mode
        <svg 
          className={`w-5 h-5 transition-colors ${header ? '' : 'text-text-secondary group-hover:text-primary'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      ) : (
        // Sun icon for light mode
        <svg 
          className={`w-5 h-5 transition-colors ${header ? '' : 'text-text-secondary group-hover:text-primary'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      )}
    </button>
  )
}

