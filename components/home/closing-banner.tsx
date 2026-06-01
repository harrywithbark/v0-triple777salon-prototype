'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'

export function ClosingBanner() {
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
    <section ref={sectionRef} className="py-12 sm:py-20 bg-[#0D0809]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-fade-up">
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 text-balance">
          Ready for a Transformation?
        </h2>
        <p className="text-white/70 text-sm sm:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto">
          Book your appointment today and experience the Triple777 difference.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-[#D4324B] hover:bg-[#B82940] text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg"
        >
          <Link href="/book-now">
            Book Your Appointment
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
