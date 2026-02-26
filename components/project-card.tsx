import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  imageColor: string
  logo?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  imageColor,
  logo,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30">
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
            className="object-cover"
            style={{ objectPosition: 'center top' }}
          />
        ) : (
          <span className="text-4xl font-bold tracking-tight text-foreground/80">
            {title}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Visit ${title}`}
            >
              <ExternalLink className="size-4" />
            </a>
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
    </div>
  )
}
