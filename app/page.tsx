import { HeroSection } from '@/components/home/hero-section'
import { TrustBar } from '@/components/home/trust-bar'
import { ServiceGateway } from '@/components/home/service-gateway'
import { SpecialtyShowcase } from '@/components/home/specialty-showcase'
import { MarqueeGallery } from '@/components/home/marquee-gallery'
import { ReviewCarousel } from '@/components/home/review-carousel'
import { ClosingBanner } from '@/components/home/closing-banner'

export default function HomePage() {
  return (
    <div className="pt-[104px] lg:pb-0 pb-24" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(201,169,110,0.10) 0%, rgba(201,169,110,0.03) 60%, transparent 100%)' }}>
      <HeroSection />
      <TrustBar />
      <ServiceGateway />
      <SpecialtyShowcase />
      <MarqueeGallery />
      <ReviewCarousel />
      <ClosingBanner />
    </div>
  )
}
