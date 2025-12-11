import RetailPlatforms from '@/components/Shop/RetailPlatforms'
import ShopHero from '@/components/Shop/ShopHero'
import ShopBenefits from '@/components/Shop/ShopBenefits'

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <ShopHero />
      <RetailPlatforms />
      <ShopBenefits />
    </div>
  )
}

