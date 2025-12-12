import Hero from '@/components/Landing/Hero'
import Categories from '@/components/Landing/Categories'
import Partners from '@/components/Landing/Partners'
import ShopPreview from '@/components/Landing/ShopPreview'
import Solutions from '@/components/Landing/Solutions'
import Stats from '@/components/Landing/Stats'
import Process from '@/components/Landing/Process'
import Industries from '@/components/Landing/Industries'
import Testimonials from '@/components/Landing/Testimonials'
import TrustIndicators from '@/components/Landing/Certifications'
import CTA from '@/components/Landing/CTA'
import CaseStudies from '@/components/Landing/CaseStudies'
import EnterpriseFeatures from '@/components/Landing/EnterpriseFeatures'
import TikTokPopupAuto from '@/components/TikTokPopupAuto'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <TrustIndicators />
      <Partners />
      <ShopPreview />
      <CaseStudies />
      <EnterpriseFeatures />
      <Solutions />
      <Categories />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
      
      {/* TikTok Pop-up - Auto-loads from admin configuration */}
      <TikTokPopupAuto />
    </div>
  )
}

