import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  imageColor: string
  logo?: string
  slug?: string
  imageFit?: 'cover' | 'contain'
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  imageColor,
  logo,
  slug,
  imageFit = 'cover',
}: ProjectCardProps) {
  const cardContent = (
    <>
      {/* Project preview area */}
      <div
        className="relative flex h-52 items-center justify-center md:h-64"
        style={{ backgroundColor: imageColor }}
      >
        {logo ? (
          <Image
            src={logo}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}
            style={{ objectPosition: 'center top' }}
          />
        ) : (
          <span className="text-4xl font-bold tracking-tight text-foreground/80">
            {title}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex grow flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          {link && link !== '#' && (
            <button
              type="button"
              className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Visit ${title}`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(link, '_blank', 'noopener,noreferrer')
              }}
            >
              <ExternalLink className="size-4" />
            </button>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (slug) {
    return (
      <Link
        href={`/projects/${slug}`}
        className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card backdrop-blur-md shadow-lg shadow-black/5 transition-all hover:border-primary/30"
      >
        {cardContent}
      </Link>
    )
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card backdrop-blur-md shadow-lg shadow-black/5 transition-all hover:border-primary/30">
      {cardContent}
    </div>
  )
}
