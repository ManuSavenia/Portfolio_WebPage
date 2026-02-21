import { ProjectCard } from '@/components/project-card'
import { ExperienceTimeline } from '@/components/experience-timeline'

const projects = [
  {
    title: 'SmartPoll',
    description:
      'An electronic voting system designed for educational purposes that integrates permissioned blockchain, digitally signed QR codes, and Anonymous Voting Tokens to guarantee security, transparency, and traceability.',
    tags: ['Solidity', 'React', 'Node.js', 'Blockchain'],
    link: '#',
    imageColor: '#1c2333',
  },
  {
    title: 'DeepRead',
    description:
      'A personal project that turns reading into an active learning process, allowing users to manage books and chapters, create summaries, and track their progress through dashboards.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    link: '#',
    imageColor: '#161b22',
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        {/* Projects Section */}
        <section>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Projects
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            A selection of projects I have built or contributed to.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            Where I have worked and what I have done.
          </p>
          <div className="mt-10">
            <ExperienceTimeline />
          </div>
        </section>
      </div>
    </div>
  )
}
