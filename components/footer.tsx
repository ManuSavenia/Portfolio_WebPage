'use client'

import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'

type FooterProps = {
  lastUpdated: string
}

export function Footer({ lastUpdated }: FooterProps) {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <footer className="border-t border-white/10 bg-[var(--nav-bg)] backdrop-blur-xl px-6 py-6 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>{t.footer.madeBy}</span>
        <span>
          {t.footer.lastUpdated}: {lastUpdated}
        </span>
      </div>
    </footer>
  )
}
