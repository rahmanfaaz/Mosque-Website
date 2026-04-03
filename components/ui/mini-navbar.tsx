'use client'

import type { ReactNode } from 'react'

/**
 * shadcn-style path: components/ui
 * Double-line hover slide (muted → primary) for in-bar links.
 */
export function AnimatedNavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group relative inline-flex h-5 shrink-0 items-center overflow-hidden text-sm font-medium"
    >
      <span className="flex flex-col transition-transform duration-300 ease-out will-change-transform group-hover:-translate-y-1/2">
        <span className="leading-5 text-text-secondary">{children}</span>
        <span className="leading-5 text-primary">{children}</span>
      </span>
    </a>
  )
}

/** Small mark for the pill bar (replaces generic dots from reference design). */
export function PillNavMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`pill-nav-mark inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/28 text-[var(--color-primary-hover)] shadow-sm ring-1 ring-primary/40 sm:h-14 sm:w-14 ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6 sm:h-7 sm:w-7 text-current" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C22.7614 30 25.2614 28.8807 27.0711 27.0711C25.1307 28.8807 22.3693 30 19.375 30C13.507 30 8.75 25.243 8.75 19.375C8.75 13.507 13.507 8.75 19.375 8.75C22.3693 8.75 25.1307 9.86929 27.0711 11.6789C25.2614 10.1193 22.7614 9 20 9Z"
          fill="currentColor"
        />
        <path
          d="M25 15L25.618 16.618L27.236 17.236L25.618 17.854L25 19.472L24.382 17.854L22.764 17.236L24.382 16.618L25 15Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}
