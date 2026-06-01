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
    <section ref={sectionRef} className="py-12 border-y border-[#0D0809]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center gap-4 text-center sm:text-left scroll-fade-up stagger-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#E8A598]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[#D4324B]" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-[#0D0809]">{item.title}</p>
                <p className="text-sm text-[#6B5F61]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
