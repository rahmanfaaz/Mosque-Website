'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type DropdownNavLinkItem = {
  label: string
  description: string
  href: string
  icon: LucideIcon
}

export type DropdownNavColumn = {
  title: string
  items: DropdownNavLinkItem[]
}

export type DropdownNavItem =
  | { id: number; label: string; link: string }
  | { id: number; label: string; subMenus: DropdownNavColumn[] }

type DropdownNavigationProps = {
  navItems: DropdownNavItem[]
  className?: string
}

export function DropdownNavigation({ navItems, className }: DropdownNavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [hoverId, setHoverId] = useState<number | null>(null)

  return (
    <LayoutGroup id="pill-nav-dropdowns">
      <ul className={className ?? 'relative flex flex-wrap items-center gap-0'}>
        {navItems.map((navItem) => {
          const hasSub = 'subMenus' in navItem && navItem.subMenus?.length
          const isActiveHover =
            hoverId === navItem.id || (!!hasSub && openMenu === navItem.label)

          return (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => {
                if (hasSub) setOpenMenu(navItem.label)
              }}
              onMouseLeave={() => {
                setOpenMenu(null)
                setHoverId(null)
              }}
            >
              {'link' in navItem && navItem.link ? (
                <a
                  href={navItem.link}
                  className="relative flex cursor-pointer items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-primary"
                  onMouseEnter={() => setHoverId(navItem.id)}
                >
                  {isActiveHover && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-primary/10"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  <span className="relative z-[1]">{navItem.label}</span>
                </a>
              ) : (
                <button
                  type="button"
                  aria-expanded={openMenu === navItem.label}
                  aria-haspopup="true"
                  className="relative flex cursor-pointer items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-primary"
                  onMouseEnter={() => setHoverId(navItem.id)}
                >
                  {isActiveHover && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-primary/10"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  <span className="relative z-[1]">{navItem.label}</span>
                  {hasSub ? (
                    <ChevronDown
                      className={`relative z-[1] h-4 w-4 shrink-0 transition-transform duration-300 ${
                        openMenu === navItem.label ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  ) : null}
                </button>
              )}

              <AnimatePresence>
                {hasSub && openMenu === navItem.label && 'subMenus' in navItem ? (
                  <div className="absolute left-1/2 top-full z-[80] w-max min-w-[17rem] max-w-[min(94vw,40rem)] -translate-x-1/2 pt-1">
                    <motion.div
                      key={navItem.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="rounded-2xl p-4 glass-dropdown-panel premium-shadow-lg"
                    >
                      <div className="flex shrink-0 flex-col gap-6 sm:flex-row sm:gap-8">
                        {navItem.subMenus.map((sub) => (
                          <motion.div
                            layout
                            className="w-full min-w-[13rem] sm:w-auto"
                            key={sub.title}
                          >
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
                              {sub.title}
                            </h3>
                            <ul className="space-y-1">
                              {sub.items.map((item) => {
                                const Icon = item.icon
                                return (
                                  <li key={item.href}>
                                    <a
                                      href={item.href}
                                      className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-bg-secondary/50"
                                    >
                                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary">
                                        <Icon className="h-4 w-4 flex-none" strokeWidth={2} />
                                      </div>
                                      <div className="min-w-0 leading-snug">
                                        <p className="text-sm font-medium text-text-primary group-hover:text-primary">
                                          {item.label}
                                        </p>
                                        <p className="text-xs text-text-secondary transition-colors group-hover:text-text-primary">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                )
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : null}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </LayoutGroup>
  )
}
