'use client'

import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'

interface ExperienceItem {
  periodKey: string
  titleKey: string
  company: string
  companyUrl?: string
  descriptionKey: string
  tags: string[]
}

export function ExperienceTimeline() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const experiences: ExperienceItem[] = [
    {
      periodKey: 'period', 
      titleKey: 'firstOpportunity', 
      company: t.experience.firstOpportunity.company,
      descriptionKey: 'description',
      tags: ['Engineering Student', 'Fast Learner', 'Problem Solving'],
    }
  ]

  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => {
        const expData = t.experience[exp.titleKey as keyof typeof t.experience] as any
        return (
          <div
            key={`${exp.company}-${exp.periodKey}`}
            className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-card backdrop-blur-md p-6 shadow-lg shadow-black/5 transition-all hover:border-primary/30 md:flex-row md:gap-8"
          >
            {/* Period */}
            <div className="shrink-0 text-sm font-medium tracking-wide text-muted-foreground md:w-40 md:pt-0.5">
              {expData.period}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-base font-semibold text-card-foreground">
                {expData.title}
                {' '}
                <span className="font-normal text-muted-foreground">{t.experience.at}</span>
                {' '}
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="text-primary">{exp.company}</span>
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {expData.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
