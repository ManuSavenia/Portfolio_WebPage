'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Monitor, Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  const ThemeIcon = () => {
    if (!mounted) return <Monitor className="size-5" />
    if (theme === 'system') return <Monitor className="size-5" />
    if (theme === 'light') return <Sun className="size-5" />
    return <Moon className="size-5" />
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          aria-label="Home"
        >
          <span className="font-mono text-primary">{'<'}</span>
          <span className="mx-0.5">Dev</span>
          <span className="font-mono text-primary">{'/>'}</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-[var(--nav-text)] hover:bg-secondary hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          })}

          {/* Separator */}
          <div className="mx-2 h-5 w-px bg-border" />

          {/* Theme Toggle */}
          <button
            onClick={cycleTheme}
            className="rounded-lg p-2 text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Toggle theme"
          >
            <ThemeIcon />
          </button>

          {/* Language Toggle */}
          <button
            className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Toggle language"
          >
            EN
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-[var(--nav-bg)] backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'rounded-lg px-4 py-2.5 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-primary/15 text-primary'
                      : 'text-[var(--nav-text)] hover:bg-secondary hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="my-2 h-px bg-border" />
            <div className="flex items-center gap-2 px-4">
              <button
                onClick={cycleTheme}
                className="rounded-lg p-2 text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Toggle theme"
              >
                <ThemeIcon />
              </button>
              <button
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Toggle language"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
