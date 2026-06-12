import { Award, MapPin, Users, Calendar } from 'lucide-react'

const milestones = [
  { year: '2007', title: 'Licensed Mastery', description: 'Received professional licensing and began formal career in hair & esthetics' },
  { year: '2012', title: 'Abbotsford Roots', description: 'Established practice in Abbotsford, BC serving the local community' },
  { year: '2018', title: 'Triple777 Founded', description: 'Launched Triple777 Hair & Esthetics as a private professional suite' },
  { year: '2024', title: 'Triple777Salon.LTD', description: 'Rebranded and expanded services with A+ BBB accreditation' },
]

const team = []

export default function AboutPage() {
  return (
    <div className="pt-[104px] lg:pb-0 pb-24">
      {/* Hero Section */}
      <section className="py-16 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">


            <div className="space-y-6">
              <div>
                <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
                  Our Story
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#140F10] mb-6 text-balance">
                  Expertise Meets Artistry
                </h1>
              </div>
              
              <div className="space-y-4 text-[#6B5F61] leading-relaxed">
                <p>
                  With over 17 years of licensed mastery, Triple777Salon.LTD represents the culmination of 
                  dedicated training, continuous education, and an unwavering commitment to client satisfaction.
                </p>
                <p>
                  Founded by Kiran, a licensed master stylist with academy training in advanced hair physics 
                  and skin metrics, our private professional salon suite offers an intimate, personalized 
                  experience that larger salons simply cannot match.
                </p>
                <p>
                  Our specializations include permanent hair straightening systems, dimensional custom foiling, 
                  precision anatomical threading, and multi-layer skincare treatments — all delivered with the 
                  meticulous attention to detail that has earned us A+ Better Business Bureau accreditation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E8A598]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#C84B61]" />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-semibold text-[#140F10]">17+</p>
                    <p className="text-sm text-[#6B5F61]">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E8A598]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#C84B61]" />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-semibold text-[#140F10]">12+</p>
                    <p className="text-sm text-[#6B5F61]">Years in Abbotsford</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
              Our Journey
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#140F10]">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-[#E8A598]/30 lg:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-[#C84B61] lg:-translate-x-1/2 mt-2" />
                  
                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <span className="text-[#E8A598] font-semibold">{milestone.year}</span>
                    <h3 className="font-serif text-xl font-semibold text-[#140F10] mt-1">{milestone.title}</h3>
                    <p className="text-[#6B5F61] mt-2">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
              Meet the Team
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#140F10]">
              Expert Professionals
            </h2>
          </div>


        </div>
      </section>
    </div>
  )
}
