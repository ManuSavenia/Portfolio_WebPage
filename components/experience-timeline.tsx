interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  tags: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: '2024 - Present',
    title: 'Senior Frontend Engineer',
    company: 'TechCorp',
    companyUrl: '#',
    description:
      'Build and maintain critical UI components powering the main product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility and performance.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    period: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'StartupLab',
    companyUrl: '#',
    description:
      'Developed and shipped full-stack features for a SaaS platform serving thousands of users. Led the migration from a legacy codebase to a modern tech stack, improving page load times by 40%.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    period: '2021 - 2022',
    title: 'Software Engineering Intern',
    company: 'DevAgency',
    companyUrl: '#',
    description:
      'Contributed to client projects ranging from e-commerce platforms to internal dashboards. Gained hands-on experience with agile workflows and code review processes.',
    tags: ['JavaScript', 'Vue.js', 'Python', 'Git'],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => (
        <div
          key={`${exp.company}-${exp.period}`}
          className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 md:flex-row md:gap-8"
        >
          {/* Period */}
          <div className="shrink-0 text-sm font-medium tracking-wide text-muted-foreground md:w-40 md:pt-0.5">
            {exp.period}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-card-foreground">
              {exp.title}
              {' '}
              <span className="font-normal text-muted-foreground">{'at'}</span>
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
              {exp.description}
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
      ))}
    </div>
  )
}
