import { Check } from 'lucide-react'

const specialties = [
  'Permanent Hair Straightening',
  'Dimensional Custom Foiling',
  'Precision Anatomical Threading',
  'Multi-Tonal Highlights',
  'Structural Hair Perms',
]

export function SpecialtyShowcase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/images/technical-styling.png"
              alt="Master stylist applying precision foiling technique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140F10]/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
                Technical Excellence
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#140F10] mb-4 text-balance">
                Signature Services & Specializations
              </h2>
              <p className="text-[#6B5F61] leading-relaxed">
                Our master stylist brings over 17 years of expertise in advanced hair physics and skin metrics, delivering transformative results with precision and care.
              </p>
            </div>

            <ul className="space-y-4">
              {specialties.map((specialty, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8A598]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#C84B61]" />
                  </div>
                  <span className="text-[#140F10] font-medium">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
