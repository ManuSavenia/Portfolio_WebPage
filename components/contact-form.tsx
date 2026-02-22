'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'

export function ContactForm() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder -- wire up to your own backend or email service
    alert(t.contact.successMessage)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-card-foreground"
        >
          {t.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          placeholder={t.contact.nameplaceholder}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-card-foreground"
        >
          {t.contact.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          placeholder={t.contact.emailPlaceholder}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-card-foreground"
        >
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          placeholder={t.contact.messagePlaceholder}
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-1 gap-2 self-start bg-primary text-primary-foreground hover:bg-primary/85 rounded-lg px-6 font-medium"
      >
        {t.contact.sendMessage}
        <Send className="size-4" />
      </Button>
    </form>
  )
}
