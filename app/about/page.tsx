import AboutHero from '@/components/About/AboutHero'
import AboutMission from '@/components/About/AboutMission'
import AboutValues from '@/components/About/AboutValues'
import AboutTeam from '@/components/About/AboutTeam'

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
    </div>
  )
}

