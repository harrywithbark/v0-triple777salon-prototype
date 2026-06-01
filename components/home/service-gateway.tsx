'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Threading & Tinting',
    description: 'Precision eyebrow shaping and facial threading for flawless definition.',
    href: '/services#threading',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'Waxing Services',
    description: 'Full body waxing treatments for smooth, long-lasting results.',
    href: '/services#waxing',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'Hair Styling',
    description: 'Tailored cuts and technical styling for men, women, and kids.',
    href: '/services#hair',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'Esthetics',
    description: 'Multi-layer skincare facials, manicures, and pedicures.',
    href: '/services#esthetics',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop&q=80',
  },
]

export function ServiceGateway() {
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
    <section ref={sectionRef} className="py-20 bg-[#FFFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-fade-up">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D0809] text-balance">
            Services Crafted for You
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group overflow-hidden bg-[#F7F0ED] rounded-lg border border-transparent hover:border-[#E8A598] card-hover scroll-fade-up stagger-${index + 1}`}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-[#0D0809] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B5F61] leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-[#D4324B] group-hover:gap-2 transition-all">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
