'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, ExternalLink, Calendar, Users } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { getProjectBySlug } from '@/lib/projects'
import { ImageCarousel } from '@/components/image-carousel'

export default function ProjectPage() {
  const params = useParams()
  const { language } = useLanguage()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">404</h1>
          <p className="mt-2 text-muted-foreground">
            {language === 'en' ? 'Project not found' : 'Proyecto no encontrado'}
          </p>
          <Link
            href="/experience"
            className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            {language === 'en' ? 'Back to projects' : 'Volver a proyectos'}
          </Link>
        </div>
      </div>
    )
  }

  const isEn = language === 'en'
  const title = isEn ? project.titleEn : project.titleEs
  const description = isEn ? project.descriptionEn : project.descriptionEs
  const description2 = isEn ? project.description2En : project.description2Es
  const startDate = isEn ? project.startDate : project.startDateEs
  const endDate = isEn ? project.endDate : project.endDateEs

  const galleryImages = project.gallery.map((img) => ({
    src: img.src,
    caption: isEn ? img.captionEn : img.captionEs,
  }))

  return (
    <div className="min-h-screen pb-20">
      {/* Hero / Presentation Image */}
      <div className="px-6 pt-24">
        <div
          className="relative mx-auto h-[40vh] w-full max-w-[70%] overflow-hidden rounded-2xl md:h-[50vh]"
          style={{ backgroundColor: project.imageColor }}
        >
          <Image
            src={project.logo}
            alt={title}
            fill
            sizes="70vw"
            className={project.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}
            style={{ objectPosition: project.imagePosition || 'center' }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          href="/experience"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          {isEn ? 'Back to projects' : 'Volver a proyectos'}
        </Link>

        {/* Title + external link */}
        <div className="mt-6 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 shrink-0 rounded-lg border border-white/10 p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              aria-label={`Visit ${title}`}
            >
              <ExternalLink className="size-5" />
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>

        {/* Description 2 */}
        {description2.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {paragraph}
          </p>
        ))}

        {/* Image Gallery */}
        {galleryImages.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              {isEn ? 'Gallery' : 'Galería'}
            </h2>
            <ImageCarousel images={galleryImages} />
          </section>
        )}

        {/* Project Timeline & Collaborators */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Timeline */}
          <div className="rounded-xl border border-white/10 bg-card p-6 backdrop-blur-md md:h-48">
            <div className="flex items-center gap-3 text-foreground">
              <Calendar className="size-5 text-primary" />
              <h3 className="text-lg font-semibold">
                {isEn ? 'Timeline' : 'Cronología'}
              </h3>
            </div>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted-foreground/60">
                  {isEn ? 'Start' : 'Inicio'}
                </span>
                <span className="text-sm font-medium">{startDate}</span>
              </div>
              <div className="h-px flex-1 bg-white/10" />
              <div className="flex flex-col text-right">
                <span className="text-xs uppercase tracking-wider text-muted-foreground/60">
                  {isEn ? 'End' : 'Fin'}
                </span>
                <span className="text-sm font-medium">{endDate}</span>
              </div>
            </div>
          </div>

          {/* Collaborators */}
          <div className="flex flex-col rounded-xl border border-white/10 bg-card p-6 backdrop-blur-md md:h-48">
            <div className="flex items-center gap-3 text-foreground">
              <Users className="size-5 text-primary" />
              <h3 className="text-lg font-semibold">
                {isEn ? 'Collaborators' : 'Colaboradores'}
              </h3>
            </div>
            <div className="mt-4 min-h-0 flex-1 overflow-y-auto">
              {project.collaborators.length > 0 ? (
                <ul className="space-y-2">
                  {project.collaborators.map((collab) => (
                    <li key={collab.name}>
                      {collab.link ? (
                        <a
                          href={collab.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {collab.name}
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {collab.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {isEn ? 'Solo project' : 'Proyecto individual'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
