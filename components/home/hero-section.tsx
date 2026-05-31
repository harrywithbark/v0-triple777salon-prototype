import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <div className="space-y-6">
              <p className="text-[#D63B56] text-sm font-semibold tracking-widest uppercase opacity-0 animate-fade-in-up">
                17 Years of Licensed Mastery - Abbotsford, BC
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1214] leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
                Premium Hair & Esthetics, Tailored to You.
              </h1>
              <p className="text-[#5A4D4F] text-lg leading-relaxed max-w-lg opacity-0 animate-fade-in-up animation-delay-200">
                Experience the artistry of precision styling and rejuvenating treatments in our private, professional salon suite.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <Button 
                asChild
                size="lg"
                className="bg-[#D63B56] hover:bg-[#C02E48] text-white px-8 py-6 text-base font-semibold shadow-lg shadow-[#D63B56]/25"
              >
                <Link href="/book-now">
                  Reserve Your Spot
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#1A1214] text-[#1A1214] hover:bg-[#1A1214] hover:text-white px-8 py-6 text-base font-semibold"
              >
                <Link href="/services">
                  Explore Menu
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] h-[400px] opacity-0 animate-fade-in-up animation-delay-200">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero-salon.png"
                alt="Professional hair styling at Triple777 Salon"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E07A6C]/30 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#D63B56]/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
