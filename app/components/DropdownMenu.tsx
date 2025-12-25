'use client'

import { useState, useRef, useEffect } from 'react'

interface DropdownItem {
  label: string
  href: string
  description?: string
}

interface DropdownMenuProps {
  label: string
  items: DropdownItem[]
}

export default function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-secondary hover:text-primary transition-colors flex items-center space-x-1 font-medium"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 glass-card-premium rounded-xl premium-shadow-lg border border-border p-2 z-50 animate-[fadeIn_0.2s_ease-out_forwards]">
          <div className="space-y-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 rounded-lg hover:bg-bg-secondary transition-all duration-150 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-semibold text-sm text-text-primary group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs text-text-secondary mt-0.5 leading-relaxed">{item.description}</div>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

