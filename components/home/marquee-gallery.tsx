'use client'

import { useEffect, useRef } from 'react'

const portfolioImages = [
  { id: 1, src: '/placeholder.svg?height=400&width=300', alt: 'Hair transformation 1' },
  { id: 2, src: '/placeholder.svg?height=400&width=300', alt: 'Hair transformation 2' },
  { id: 3, src: '/placeholder.svg?height=400&width=300', alt: 'Hair transformation 3' },
  { id: 4, src: '/placeholder.svg?height=400&width=300', alt: 'Hair transformation 4' },
  { id: 5, src: '/placeholder.svg?height=400&width=300', alt: 'Hair transformation 5' },
  { id: 6, src: '/placeholder.svg?height=400&width=300', alt: 'Hair transformation 6' },
]

const estheticsImages = [
  { id: 1, src: '/placeholder.svg?height=400&width=300', alt: 'Esthetics work 1' },
  { id: 2, src: '/placeholder.svg?height=400&width=300', alt: 'Esthetics work 2' },
  { id: 3, src: '/placeholder.svg?height=400&width=300', alt: 'Esthetics work 3' },
  { id: 4, src: '/placeholder.svg?height=400&width=300', alt: 'Esthetics work 4' },
  { id: 5, src: '/placeholder.svg?height=400&width=300', alt: 'Esthetics work 5' },
  { id: 6, src: '/placeholder.svg?height=400&width=300', alt: 'Esthetics work 6' },
]

export function MarqueeGallery() {
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
    <section ref={sectionRef} className="py-12 sm:py-20 bg-[#FFFBFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center scroll-fade-up">
          <p className="text-[#E8A598] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-[#0D0809] text-balance">
            Our Work Speaks for Itself
          </h2>
        </div>
      </div>

      {/* Marquee Row 1 - Left */}
      <div className="relative mb-4 sm:mb-6 scroll-fade-up stagger-2">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FFFBFA] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FFFBFA] to-transparent z-10" />
        
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...portfolioImages, ...portfolioImages].map((image, index) => (
            <div 
              key={`row1-${index}`}
              className="shrink-0 w-[180px] h-[240px] sm:w-[250px] sm:h-[333px] mx-2 sm:mx-3 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right */}
      <div className="relative scroll-fade-up stagger-3">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FFFBFA] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FFFBFA] to-transparent z-10" />
        
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...estheticsImages, ...estheticsImages].map((image, index) => (
            <div 
              key={`row2-${index}`}
              className="shrink-0 w-[180px] h-[240px] sm:w-[250px] sm:h-[333px] mx-2 sm:mx-3 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
