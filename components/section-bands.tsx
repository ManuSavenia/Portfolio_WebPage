'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase, User, Mail } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'

export function SectionBands() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const sections = [
    {
      href: '/experience',
      labelKey: 'experience',
      icon: Briefcase,
      descriptionKey: 'experienceDesc',
    },
    {
      href: '/about',
      labelKey: 'about',
      icon: User,
      descriptionKey: 'aboutDesc',
    },
    {
      href: '/contact',
      labelKey: 'contact',
      icon: Mail,
      descriptionKey: 'contactDesc',
    },
  ]

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex items-center justify-between rounded-xl border border-white/15 bg-band-bg text-band-foreground backdrop-blur-md px-8 py-10 shadow-lg shadow-black/5 transition-all hover:brightness-110 md:px-12 md:py-14"
          >
            <div className="flex items-center gap-4">
              <section.icon className="size-6 opacity-70 md:size-7" />
              <div>
                <h2 className="text-xl font-semibold md:text-2xl">
                  {t.sections[section.labelKey as keyof typeof t.sections]}
                </h2>
                <p className="mt-1 text-sm opacity-70">
                  {t.sections[section.descriptionKey as keyof typeof t.sections]}
                </p>
              </div>
            </div>
            <ArrowRight className="size-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-70 md:size-6" />
          </Link>
        ))}
      </div>
    </section>
  )
}
