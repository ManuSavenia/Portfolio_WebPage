'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useState, useEffect, useRef } from 'react'
import { Monitor, Sun, Moon, Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/experience', key: 'experience' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const translations = getTranslation(language)
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  const themeMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target as Node)
      ) {
        setThemeMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const ThemeIcon = () => {
    if (!mounted) return <Monitor className="size-5" />
    if (theme === 'system') return <Monitor className="size-5" />
    if (theme === 'light') return <Sun className="size-5" />
    return <Moon className="size-5" />
  }

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'system', icon: Monitor, label: 'System' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          aria-label="Home"
        >
          <span className="font-mono text-primary">{'<'}</span>
          <Image
            src="/Pictures/user/face1.png"
            alt="Profile"
            width={50}
            height={50}
            className="mx-0.5 size-8 rounded-sm object-cover"
            priority
          />
          <span className="font-mono text-primary">{'>'}</span>
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
        {translations.nav[link.key as keyof typeof translations.nav]}
      </Link>
    )
  })}

          {/* Separator */}
          <div className="mx-2 h-5 w-px bg-border" />

          {/* Theme Selector */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="rounded-lg p-2 text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Select theme"
            >
              <ThemeIcon />
            </button>

            {themeMenuOpen && (
              <div className="absolute left-1/2 z-50 mt-2 flex -translate-x-1/2 flex-col gap-1 rounded-lg border border-slate-200 bg-white p-1 shadow-xl dark:border-slate-700 dark:bg-[#050a12]">
                {themeOptions.map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTheme(option.value)
                        setThemeMenuOpen(false)
                      }}
                      className={cn(
                        'rounded p-2 transition-colors',
                        theme === option.value
                          ? 'bg-primary/15 text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                      title={option.label}
                      aria-label={option.label}
                    >
                      <Icon className="size-4" />
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
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
        <div className="border-t border-white/10 bg-[var(--nav-bg)] backdrop-blur-xl md:hidden">
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
                      : 'text-nav-text hover:bg-secondary hover:text-foreground'
                  )}
                >
                  {translations.nav[link.key as keyof typeof translations.nav]}
                </Link>
              )
            })}

            <div className="my-2 h-px bg-border" />
            <div className="flex items-center gap-2 px-4">
              <div className="relative" ref={themeMenuRef}>
                <button
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  className="rounded-lg p-2 text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Select theme"
                >
                  <ThemeIcon />
                </button>

                {themeMenuOpen && (
                  <div className="absolute left-1/2 z-50 mt-2 flex -translate-x-1/2 flex-col gap-1 rounded-lg border border-slate-200 bg-white p-1 shadow-xl dark:border-slate-700 dark:bg-[#050a12]">
                    {themeOptions.map((option) => {
                      const Icon = option.icon
                      return (
                        <button
                          key={option.value}
                          onClick={() => {
                            setTheme(option.value)
                            setThemeMenuOpen(false)
                          }}
                          className={cn(
                            'rounded p-2 transition-colors',
                            theme === option.value
                              ? 'bg-primary/15 text-primary'
                              : 'text-muted-foreground hover:text-foreground'
                          )}
                          title={option.label}
                          aria-label={option.label}
                        >
                          <Icon className="size-4" />
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
              <button
                onClick={toggleLanguage}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Toggle language"
              >
                {language.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
