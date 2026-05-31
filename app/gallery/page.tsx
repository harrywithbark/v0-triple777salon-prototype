'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const filters = ['All', 'Highlights', 'Permanent Straightening', 'Skincare', 'Threading']

const galleryItems = [
  { id: 1, src: '/placeholder.svg?height=600&width=400', alt: 'Hair highlights transformation', category: 'Highlights', treatments: ['Multi-Tonal Highlights', 'Precision Cut'] },
  { id: 2, src: '/placeholder.svg?height=400&width=400', alt: 'Permanent straightening result', category: 'Permanent Straightening', treatments: ['Japanese Straightening', 'Deep Conditioning'] },
  { id: 3, src: '/placeholder.svg?height=500&width=400', alt: 'Facial skincare treatment', category: 'Skincare', treatments: ['Multi-Layer Facial', 'Hydration Treatment'] },
  { id: 4, src: '/placeholder.svg?height=400&width=400', alt: 'Eyebrow threading', category: 'Threading', treatments: ['Precision Threading', 'Eyebrow Shaping'] },
  { id: 5, src: '/placeholder.svg?height=600&width=400', alt: 'Balayage highlights', category: 'Highlights', treatments: ['Balayage', 'Toning', 'Gloss Treatment'] },
  { id: 6, src: '/placeholder.svg?height=400&width=400', alt: 'Keratin treatment', category: 'Permanent Straightening', treatments: ['Keratin Treatment', 'Smoothing'] },
  { id: 7, src: '/placeholder.svg?height=500&width=400', alt: 'Facial treatment results', category: 'Skincare', treatments: ['Deep Cleansing', 'Anti-Aging Treatment'] },
  { id: 8, src: '/placeholder.svg?height=400&width=400', alt: 'Full face threading', category: 'Threading', treatments: ['Full Face Threading', 'Tinting'] },
  { id: 9, src: '/placeholder.svg?height=600&width=400', alt: 'Dimensional color', category: 'Highlights', treatments: ['Dimensional Color', 'Root Touch-up'] },
  { id: 10, src: '/placeholder.svg?height=500&width=400', alt: 'Straightening before after', category: 'Permanent Straightening', treatments: ['Permanent Straightening', 'Trim'] },
  { id: 11, src: '/placeholder.svg?height=400&width=400', alt: 'Skincare glow', category: 'Skincare', treatments: ['Chemical Peel', 'LED Therapy'] },
  { id: 12, src: '/placeholder.svg?height=500&width=400', alt: 'Threading precision', category: 'Threading', treatments: ['Lip & Chin Threading'] },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <div className="pt-[104px] lg:pb-0 pb-24">
      {/* Hero */}
      <section className="py-16 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#140F10] mb-4 text-balance">
            Our Work
          </h1>
          <p className="text-[#6B5F61] text-lg max-w-2xl mx-auto">
            Browse our collection of transformations and see the artistry behind every service.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[104px] z-40 bg-[#FAF4F2] border-y border-[#140F10]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#C84B61] text-white'
                    : 'bg-white border border-[#140F10]/10 text-[#140F10] hover:border-[#E8A598]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="block w-full overflow-hidden rounded-lg group break-inside-avoid"
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#140F10]/0 group-hover:bg-[#140F10]/40 transition-colors flex items-end justify-start p-4">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#140F10]/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:w-2/3">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/3 p-6 lg:p-8">
              <span className="inline-block px-3 py-1 bg-[#E8A598]/10 text-[#C84B61] text-xs font-medium rounded-full mb-4">
                {selectedImage.category}
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#140F10] mb-4">
                Treatments Used
              </h3>
              <ul className="space-y-2">
                {selectedImage.treatments.map((treatment, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#6B5F61]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8A598]" />
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
