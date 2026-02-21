import { GraduationCap, MapPin, Code2, Coffee } from 'lucide-react'

const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'Figma', 'CI/CD'],
  },
]

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'National University',
    period: '2020 - 2025',
    description:
      'Focused on software engineering, algorithms, and data structures. Participated in competitive programming and open-source contributions.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        {/* Bio Section */}
        <section>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            About Me
          </h1>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Avatar placeholder */}
            <div className="flex size-40 shrink-0 items-center justify-center rounded-2xl bg-card border border-border">
              <Code2 className="size-16 text-primary" />
            </div>

            <div className="flex-1">
              <p className="text-base leading-relaxed text-muted-foreground">
                {"I'm a software engineer passionate about building accessible, pixel-perfect digital experiences. I enjoy working at the intersection of design and development, creating solutions that are not only functional but also a pleasure to use."}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {"When I'm not coding, you'll find me reading, hiking, playing chess, or diving into the latest tech rabbit hole. I believe in continuous learning and enjoy contributing to open-source projects."}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  Buenos Aires, Argentina
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Coffee className="size-4 text-primary" />
                  Coffee enthusiast
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Skills & Technologies
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Education
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-card-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-primary">{edu.school}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {edu.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
