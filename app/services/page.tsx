'use client'

import { useState } from 'react'
import { Clock, Info } from 'lucide-react'

const serviceCategories = [
  {
    id: 'threading',
    name: 'Threading & Tinting',
    services: [
      { name: 'Upper Lip', duration: '5 min', price: 'From $8' },
      { name: 'Lower Lip', duration: '5 min', price: 'From $8' },
      { name: 'Forehead', duration: '5 min', price: 'From $10' },
      { name: 'Eyebrows & Lip', duration: '15 min', price: 'From $18' },
      { name: 'Face Sides', duration: '15 min', price: 'From $15' },
      { name: 'Chin & Neck', duration: '15 min', price: 'From $15' },
      { name: 'Full Face Threading (incl. Eyebrows)', duration: '45 min', price: 'From $45' },
      { name: 'Eyebrow Tinting', duration: '30 min', price: 'From $25' },
    ],
  },
  {
    id: 'waxing',
    name: 'Waxing Services',
    services: [
      { name: 'Nose', duration: '5 min', price: 'From $10' },
      { name: 'Upper Lip', duration: '5 min', price: 'From $10' },
      { name: 'Lower Lip', duration: '5 min', price: 'From $10' },
      { name: 'Forehead', duration: '5 min', price: 'From $12' },
      { name: 'Under Arms', duration: '10 min', price: 'From $18' },
      { name: 'Neck', duration: '10 min', price: 'From $15' },
      { name: 'Face Sides', duration: '10 min', price: 'From $15' },
      { name: 'Eyebrows & Lip', duration: '15 min', price: 'From $20' },
      { name: 'Half Arms', duration: '20 min', price: 'From $25' },
      { name: 'Half Back', duration: '20 min', price: 'From $30' },
      { name: 'Full Arms', duration: '30 min', price: 'From $40' },
      { name: 'Full Back', duration: '30 min', price: 'From $55' },
      { name: 'Stomach', duration: '30 min', price: 'From $35' },
      { name: 'Bikini Line', duration: '30 min', price: 'From $40' },
      { name: 'Chin', duration: '30 min', price: 'From $15' },
      { name: 'Full Face (incl. Eyebrows)', duration: '40 min', price: 'From $50' },
      { name: 'Half Legs', duration: '30 min', price: 'From $40' },
      { name: 'Full Legs', duration: '50 min', price: 'From $65' },
      { name: 'Full Body Treatment', duration: '2 hrs', price: 'From $150' },
    ],
  },
  {
    id: 'hair',
    name: 'Hair & Esthetics',
    services: [
      { name: "Men's Haircuts", duration: '30 min', price: 'From $25' },
      { name: 'Fade Cuts', duration: '30 min', price: 'From $30' },
      { name: "Men's Highlight Systems", duration: '30 min', price: 'From $45' },
      { name: "Men's Shampoo/Haircut/Beard", duration: '45 min', price: 'From $40' },
      { name: 'Custom Technical Cuts', duration: '45 min', price: 'From $45' },
      { name: 'First Haircuts (Boys & Girls)', duration: '45 min', price: 'From $25' },
      { name: "Men's Beard Perm Systems", duration: '1 hr 30 min', price: 'From $85' },
      { name: "Men's Hair Perms", duration: '2 hrs', price: 'From $120' },
      { name: "Women's Precision Haircuts", duration: '45 min', price: 'From $55' },
      { name: "Women's Dimensional Colour", duration: '2 hrs', price: 'From $120' },
      { name: 'Multi-Tonal Highlights', duration: '2-3 hrs', price: 'From $150' },
      { name: 'Structural Hair Perms', duration: '2-3 hrs', price: 'From $140' },
      { name: 'Custom Up-dos', duration: '1 hr', price: 'From $75' },
      { name: 'Permanent Hair Straightening', duration: '3-4 hrs', price: 'From $250' },
      { name: 'Multi-Layer Skincare Facials', duration: '1 hr', price: 'From $85' },
      { name: 'Deluxe Manicures', duration: '45 min', price: 'From $40' },
      { name: 'Deluxe Pedicures', duration: '1 hr', price: 'From $55' },
      { name: 'Precision Acrylic Nail Systems', duration: '1.5 hrs', price: 'From $65' },
    ],
  },
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('threading')

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 180
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-[104px] lg:pb-0 pb-24">
      {/* Hero */}
      <section className="py-16 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Our Menu
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#140F10] mb-4 text-balance">
            Services & Pricing
          </h1>
          <p className="text-[#6B5F61] text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of premium hair and esthetics services, 
            each delivered with precision and care.
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[104px] z-40 bg-[#FAF4F2] border-y border-[#140F10]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#C84B61] text-white'
                    : 'bg-white border border-[#140F10]/10 text-[#140F10] hover:border-[#E8A598]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 last:mb-0">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#140F10] mb-8 pb-4 border-b border-[#140F10]/10">
                {category.name}
              </h2>
              
              <div className="space-y-4">
                {category.services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between py-4 px-4 rounded-lg bg-white hover:shadow-sm transition-shadow group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#140F10] font-medium">{service.name}</span>
                      <button 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={`More info about ${service.name}`}
                      >
                        <Info className="w-4 h-4 text-[#6B5F61]" />
                      </button>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="flex items-center gap-1.5 text-[#6B5F61]">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                      <span className="font-semibold text-[#140F10] min-w-[80px] text-right">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div className="mt-12 p-6 bg-[#E8A598]/10 rounded-lg border border-[#E8A598]/20">
            <p className="text-sm text-[#6B5F61] leading-relaxed">
              <strong className="text-[#140F10]">Please Note:</strong> Prices are starting points and may vary based on hair length, 
              thickness, and treatment complexity. A consultation will provide an accurate quote for your specific needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
