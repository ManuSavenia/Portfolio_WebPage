'use client'

import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/project-card'
import { ExperienceTimeline } from '@/components/experience-timeline'

export default function ExperiencePage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const isEn = language === 'en'

  const projectCards = projects.map((p) => ({
    slug: p.slug,
    title: isEn ? p.titleEn : p.titleEs,
    description: isEn ? p.descriptionEn : p.descriptionEs,
    tags: p.tags,
    link: p.link,
    imageColor: p.imageColor,
    logo: p.logo,
    imageFit: p.imageFit,
  }))

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        {/* Projects Section */}
        <section>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {t.experience.projectsTitle}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.experience.projectsSubtitle}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projectCards.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t.experience.professionalTitle}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.experience.professionalSubtitle}
          </p>
          <div className="mt-10">
            <ExperienceTimeline />
          </div>
        </section>
      </div>
    </div>
  )
}
