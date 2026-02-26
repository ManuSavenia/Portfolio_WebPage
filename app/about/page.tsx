'use client'

import Image from 'next/image'
import { GraduationCap, MapPin, Code2, Music2, Baby } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'

export default function AboutPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const skills = [
    {
      category: t.about.skillCategories.Planguages,
      items: ['Python', 'Java', 'C', 'SQL', 'Assembly', 'LateX', 'MATLAB', 'Linux' , 'Pascal' ],
    },
    {
      category: t.about.skillCategories.frontend_backend,
      items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS','Node.js', 'MariaDB'],
    },
    {
      category: t.about.skillCategories.Engineering,
      items: ['Advanced Math', 'Networking', 'PCB design', 'Electronics', 'Microcontrollers'],
    },
    {
      category: t.about.skillCategories.tools,
      items: ['Git', 'Linux', 'Figma', 'Canva', 'VS Code', 'KiCad', 'Proteus Design Suite', 'MATLAB', 'Jupyter Notebooks', 'Overleaf'],
    },
    {
      category: t.about.skillCategories.general,
      items: ['Soldering', 'PC diagnosis', 'PC building'],
    },
    {
      category: t.about.skillCategories.languages,
      items: ['Spanish (native)', 'English (C1)'],
    },
  ]

  const education = [
    {
      degree: t.about.degree,
      school: t.about.school,
      period: t.about.educationPeriod,
      description: t.about.educationDesc,
      logo: '/Pictures/about/UNLP_Logo.png',
      logoAlt: 'UNLP Logo',
    },
    {
      degree: t.about.languageSchoolName,
      school: t.about.languageSchoolPlace,
      period: t.about.languageSchoolPeriod,
      description: t.about.languageSchoolDesc,
      logo: '/Pictures/about/EDL.webp',
      logoAlt: 'Escuela de Lenguas Logo',
    },
  ]

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        {/* Bio Section */}
        <section>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {t.about.title}
          </h1>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Avatar placeholder */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/5">
              <Image
                src="/Pictures/about/me.jpg"
                alt="Profile picture"
                width={1500}
                height={1500}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.about.bio1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t.about.bio2}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {t.about.location}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Music2 className="size-4 text-primary" />
                  {t.about.musicEnthusiast}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Baby className="size-4 text-primary" />
                  13/12/2003
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {t.about.skillsTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-white/10 bg-card backdrop-blur-md p-6 shadow-lg shadow-black/5"
              >
                <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/10 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-secondary-foreground"
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
            {t.about.educationTitle}
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={`${edu.school}-${edu.degree}`}
                className="flex gap-4 rounded-xl border border-white/10 bg-card backdrop-blur-md p-6 shadow-lg shadow-black/5"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Image
                    src={edu.logo}
                    alt={edu.logoAlt}
                    width={48}
                    height={48}
                    className="size-10 object-contain"
                  />
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
