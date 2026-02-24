'use client'

import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/lib/translations'
import { ProjectCard } from '@/components/project-card'
import { ExperienceTimeline } from '@/components/experience-timeline'

export default function ExperiencePage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const projects = [
    {
      title: t.experience.blitzcrank.title,
      description: t.experience.blitzcrank.description,
      tags: ['Electronics', 'EDU-CIAA', 'RTOS', 'C', 'ESP32'],
      link: '#',
      imageColor: '#1a1a1a',
      logo: '/Pictures/projects/Blitzcranck/Logo.png',
      
    },
    {
      title: t.experience.electricSim.title,
      description: t.experience.electricSim.description,
      tags: ['SpringBoot', 'ApacheKafka', 'TensorFlow', 'Grafana'],
      link: '#',
      imageColor: '#0f1419',
      logo: '/Pictures/projects/ElectricSim/Logo.png',
    },
    {
      title: t.experience.bipedalRobot.title,
      description: t.experience.bipedalRobot.description,
      tags: ['ArduinoIDE', 'ESP8266', 'ArduinoShieldV2'],
      link: '#',
      imageColor: '#1a1f2e',
      logo: '/Pictures/projects/Bipedal_robot/robot.png',
    },
    {
      title: t.experience.roomLEDs.title,
      description: t.experience.roomLEDs.description,
      tags: ['ESP32', 'WLED', 'LEDFX', 'Electronics'],
      link: '#',
      imageColor: '#0a0a0a',
      logo: '/Pictures/projects/LEDs/schematic.jpeg',
    },
  ]

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
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
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
