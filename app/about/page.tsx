import { Award, MapPin, Users, Calendar } from 'lucide-react'

const milestones = [
  { year: '2007', title: 'Licensed Mastery', description: 'Received professional licensing and began formal career in hair & esthetics' },
  { year: '2012', title: 'Abbotsford Roots', description: 'Established practice in Abbotsford, BC serving the local community' },
  { year: '2018', title: 'Triple777 Founded', description: 'Launched Triple777 Hair & Esthetics as a private professional suite' },
  { year: '2024', title: 'Triple777Salon.LTD', description: 'Rebranded and expanded services with A+ BBB accreditation' },
]

const team = [
  {
    name: 'Kiran',
    role: 'Owner & Master Stylist',
    experience: '17+ years',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Licensed master stylist specializing in hair physics and skin metrics. Academy trained with expertise in permanent straightening, dimensional coloring, and precision threading.',
  },
  {
    name: 'Iadalia',
    role: 'Senior Esthetician',
    experience: '20+ years',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Veteran esthetician with two decades of experience in skincare treatments, waxing, and nail services.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-[104px] lg:pb-0 pb-24">
      {/* Hero Section */}
      <section className="py-16 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Kiran - Owner and Master Stylist"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#140F10]/80 to-transparent">
                <p className="text-white font-serif text-xl">Kiran</p>
                <p className="text-white/70 text-sm">Owner & Master Stylist</p>
              </div>
            </div>

            {/* Content */}
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-[#140F10]/5">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#140F10]">{member.name}</h3>
                      <p className="text-sm text-[#C84B61]">{member.role}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#E8A598]/10 text-[#C84B61] text-xs font-medium rounded-full">
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-sm text-[#6B5F61] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
