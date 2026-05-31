'use client'

import Link from 'next/link'
import { ArrowRight, Scissors, Sparkles, User, Palette } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Threading & Tinting',
    description: 'Precision eyebrow shaping and facial threading for flawless definition.',
    href: '/services#threading',
  },
  {
    icon: Palette,
    title: 'Waxing Services',
    description: 'Full body waxing treatments for smooth, long-lasting results.',
    href: '/services#waxing',
  },
  {
    icon: Scissors,
    title: 'Hair Styling',
    description: 'Tailored cuts and technical styling for men, women, and kids.',
    href: '/services#hair',
  },
  {
    icon: User,
    title: 'Esthetics',
    description: 'Multi-layer skincare facials, manicures, and pedicures.',
    href: '/services#esthetics',
  },
]

export function ServiceGateway() {
  return (
    <section className="py-20 bg-[#FFFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#140F10] text-balance">
            Services Crafted for You
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group p-6 bg-[#FAF4F2] rounded-lg border border-transparent hover:border-[#E8A598] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8A598]/10 flex items-center justify-center mb-4 group-hover:bg-[#E8A598]/20 transition-colors">
                <service.icon className="w-5 h-5 text-[#C84B61]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#140F10] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#6B5F61] leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[#C84B61] group-hover:gap-2 transition-all">
                View Services
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
