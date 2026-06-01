'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-up')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-5 sm:space-y-8 scroll-fade-up">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#E8A598] text-xs sm:text-sm font-medium tracking-widest uppercase">
                17 Years of Licensed Mastery - Abbotsford, BC
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0D0809] leading-[1.15] text-balance">
                Premium Hair & Esthetics, Tailored to You.
              </h1>
              <p className="text-[#6B5F61] text-base sm:text-lg leading-relaxed max-w-lg">
                Experience the artistry of precision styling and rejuvenating treatments in our private, professional salon suite.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-[#D4324B] hover:bg-[#B82940] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
              >
                <Link href="/book-now">
                  Reserve Your Spot
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-[#0D0809] text-[#0D0809] hover:bg-[#0D0809] hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
              >
                <Link href="/services">
                  Explore Menu
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[280px] sm:h-[400px] lg:h-[600px] scroll-fade-up stagger-2">
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="/images/salon-interior.png"
                alt="Professional hair styling at Triple777 Salon"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            {/* Decorative element - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-[#E8A598]/20 rounded-full blur-3xl" />
            <div className="hidden sm:block absolute -top-6 -right-6 w-40 h-40 bg-[#D4324B]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
