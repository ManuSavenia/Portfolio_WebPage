import { HeroSection } from '@/components/hero-section'
import { SectionBands } from '@/components/section-bands'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <div className="flex-1" />
      <SectionBands />
    </div>
  )
}
