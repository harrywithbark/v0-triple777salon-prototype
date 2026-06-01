'use client'

import { Award, MapPin, Clock } from 'lucide-react'
import { useEffect, useRef } from 'react'

const trustItems = [
  {
    icon: Award,
    title: '17+ Years',
    description: 'Licensed Mastery',
  },
  {
    icon: MapPin,
    title: '12+ Years',
    description: 'Serving Abbotsford',
  },
  {
    icon: Clock,
    title: 'A+ BBB',
    description: 'Corporate Quality',
  },
]

export function TrustBar() {
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
    <section ref={sectionRef} className="py-8 sm:py-12 border-y border-[#0D0809]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center scroll-fade-up stagger-${index + 1}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E8A598]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4324B]" />
              </div>
              <div>
                <p className="font-serif text-base sm:text-xl font-semibold text-[#0D0809]">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#6B5F61]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
