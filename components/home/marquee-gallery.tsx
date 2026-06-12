'use client'

const portfolioImages = [
  { id: 1, src: '/images/highlights.png', alt: 'Multi-tonal blonde highlights' },
  { id: 2, src: '/images/balayage.png', alt: 'Soft balayage highlights' },
  { id: 3, src: '/images/straightening.png', alt: 'Permanent hair straightening result' },
  { id: 4, src: '/images/dimensional-color.png', alt: 'Dimensional hair color' },
  { id: 5, src: '/images/keratin.png', alt: 'Keratin smoothing treatment' },
  { id: 6, src: '/images/updo.png', alt: 'Elegant custom updo' },
]

const estheticsImages = [
  { id: 1, src: '/images/facial.png', alt: 'Multi-layer skincare facial' },
  { id: 2, src: '/images/threading.png', alt: 'Precision eyebrow threading' },
  { id: 3, src: '/images/skincare-glow.png', alt: 'Radiant glowing skin' },
  { id: 4, src: '/images/full-face-threading.png', alt: 'Full face threading' },
  { id: 5, src: '/images/waxing.png', alt: 'Professional waxing treatment' },
  { id: 6, src: '/images/mens-cut.png', alt: 'Precision fade haircut' },
]

export function MarqueeGallery() {
  return (
    <section className="py-20 bg-[#FFFDFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#140F10] text-balance">
            Our Work Speaks for Itself
          </h2>
        </div>
      </div>

      {/* Marquee Row 1 - Left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FFFDFD] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FFFDFD] to-transparent z-10" />
        
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...portfolioImages, ...portfolioImages].map((image, index) => (
            <div 
              key={`row1-${index}`}
              className="shrink-0 w-[250px] h-[333px] mx-3 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FFFDFD] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FFFDFD] to-transparent z-10" />
        
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...estheticsImages, ...estheticsImages].map((image, index) => (
            <div 
              key={`row2-${index}`}
              className="shrink-0 w-[250px] h-[333px] mx-3 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
