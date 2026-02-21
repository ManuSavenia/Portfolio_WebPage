'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase, User, Mail } from 'lucide-react'

const sections = [
  {
    href: '/experience',
    label: 'Experience',
    icon: Briefcase,
    bgClass: 'bg-band-experience',
    textClass: 'text-band-experience-foreground',
    description: 'Projects & professional experience',
  },
  {
    href: '/about',
    label: 'About Me',
    icon: User,
    bgClass: 'bg-band-about',
    textClass: 'text-band-about-foreground',
    description: 'Who I am & what I do',
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    bgClass: 'bg-band-contact',
    textClass: 'text-band-contact-foreground',
    description: 'Get in touch with me',
  },
]

export function SectionBands() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="overflow-hidden rounded-xl border border-border/50">
        {sections.map((section, index) => (
          <Link
            key={section.href}
            href={section.href}
            className={`group flex items-center justify-between ${section.bgClass} ${section.textClass} px-8 py-10 transition-all hover:opacity-90 md:px-12 md:py-14 ${
              index < sections.length - 1 ? 'border-b border-foreground/10' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <section.icon className="size-6 opacity-70 md:size-7" />
              <div>
                <h2 className="text-xl font-semibold md:text-2xl">{section.label}</h2>
                <p className="mt-1 text-sm opacity-70">{section.description}</p>
              </div>
            </div>
            <ArrowRight className="size-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-70 md:size-6" />
          </Link>
        ))}
      </div>
    </section>
  )
}
