'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely amazing experience! Kiran is incredibly talented and truly listens to what you want. My hair has never looked better.',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Jennifer L.',
    rating: 5,
    text: 'The best threading I have ever had. Precise, quick, and virtually painless. I will never go anywhere else!',
    source: 'Yelp',
  },
  {
    id: 3,
    name: 'Michelle K.',
    rating: 5,
    text: 'Professional, welcoming atmosphere. The permanent straightening treatment completely transformed my hair. Highly recommend!',
    source: 'Google',
  },
  {
    id: 4,
    name: 'Amanda R.',
    rating: 5,
    text: 'I have been coming here for years. Consistently excellent service and results. The private salon setting is so relaxing.',
    source: 'Yelp',
  },
]

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-fade-up">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D0809] text-balance">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto scroll-fade-up stagger-2">
          {/* Review Card */}
          <div className="bg-[#FFFBFA] rounded-2xl p-8 sm:p-12 border border-[#0D0809]/5 card-hover">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E8A598] text-[#E8A598]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-lg sm:text-xl text-[#0D0809] leading-relaxed font-serif italic">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="text-center">
              <p className="font-semibold text-[#0D0809]">{reviews[currentIndex].name}</p>
              <p className="text-sm text-[#6B5F61]">via {reviews[currentIndex].source}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full border border-[#0D0809]/10 flex items-center justify-center hover:bg-[#0D0809] hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#D4324B]' : 'bg-[#0D0809]/20'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full border border-[#0D0809]/10 flex items-center justify-center hover:bg-[#0D0809] hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
