'use client'

import { Check } from 'lucide-react'
import { useEffect, useRef } from 'react'

const specialties = [
  'Permanent Hair Straightening',
  'Dimensional Custom Foiling',
  'Precision Anatomical Threading',
  'Multi-Tonal Highlights',
  'Structural Hair Perms',
]

export function SpecialtyShowcase() {
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
    <section ref={sectionRef} className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden scroll-fade-up card-hover">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=500&fit=crop&q=80"
              alt="Technical hair styling showcase"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0809]/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-5 sm:space-y-8 scroll-fade-up stagger-2">
            <div>
              <p className="text-[#E8A598] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
                Technical Excellence
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-[#0D0809] mb-3 sm:mb-4 text-balance">
                Signature Services & Specializations
              </h2>
              <p className="text-[#6B5F61] text-sm sm:text-base leading-relaxed">
                Our master stylist brings over 17 years of expertise in advanced hair physics and skin metrics, delivering transformative results with precision and care.
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {specialties.map((specialty, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#E8A598]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4324B]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#0D0809] font-medium">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
