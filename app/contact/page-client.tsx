'use client'

import { Mail, MapPin, Send } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'

interface Social {
  name: string
  href: string
  icon: React.ReactNode
}

export function ContactPageClient({ socials }: { socials: Social[] }) {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t.contact.title}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.contact.subtitle}
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar Info */}
          <aside className="flex flex-col gap-8 md:col-span-2">
            {/* Location */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {t.contact.location}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.location === 'Location'
                      ? 'La Plata Argentina'
                      : 'La Plata, Argentina'}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Send className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {t.contact.email}
                  </h3>
                  <a href="mailto:saveniamanuel@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    saveniamanuel@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-card-foreground">
                {t.contact.socialMedia}
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
