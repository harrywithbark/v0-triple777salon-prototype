import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const hours = [
  { day: 'Monday', hours: 'CLOSED', isClosed: true },
  { day: 'Tuesday', hours: '8:00 AM - 6:00 PM', isClosed: false },
  { day: 'Wednesday', hours: '8:00 AM - 6:00 PM', isClosed: false },
  { day: 'Thursday', hours: '8:00 AM - 6:00 PM', isClosed: false },
  { day: 'Friday', hours: '8:00 AM - 7:00 PM', isClosed: false, isWeekend: true },
  { day: 'Saturday', hours: '8:00 AM - 7:00 PM', isClosed: false, isWeekend: true },
  { day: 'Sunday', hours: '10:00 AM - 1:00 PM', isClosed: false, isWeekend: true },
]

export default function ContactPage() {
  return (
    <div className="pt-[104px] lg:pb-0 pb-24">
      {/* Hero */}
      <section className="py-16 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#140F10] mb-4 text-balance">
            Contact Us
          </h1>
          <p className="text-[#6B5F61] text-lg max-w-2xl mx-auto">
            We would love to hear from you. Reach out with any questions or to schedule your appointment.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-[#FFFDFD] rounded-2xl p-6 lg:p-8 border border-[#140F10]/5">
                <h2 className="font-serif text-2xl font-semibold text-[#140F10] mb-6">
                  Quick Contact
                </h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+16047444777"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#C84B61]/5 border border-[#C84B61]/20 hover:bg-[#C84B61]/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#C84B61] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B5F61]">Call or Text</p>
                      <p className="text-lg font-semibold text-[#140F10] group-hover:text-[#C84B61] transition-colors">
                        +1 604-744-4777
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@triple777salon.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white border border-[#140F10]/10 hover:border-[#E8A598] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8A598]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#C84B61]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B5F61]">Email Us</p>
                      <p className="font-medium text-[#140F10] group-hover:text-[#C84B61] transition-colors">
                        info@triple777salon.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#FFFDFD] rounded-2xl p-6 lg:p-8 border border-[#140F10]/5">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-[#C84B61]" />
                  <h2 className="font-serif text-2xl font-semibold text-[#140F10]">
                    Operating Hours
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {hours.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between py-2 border-b border-[#140F10]/5 last:border-0 ${
                        item.isClosed 
                          ? 'text-[#C84B61]' 
                          : item.isWeekend 
                            ? 'text-[#140F10] font-medium' 
                            : 'text-[#6B5F61]'
                      }`}
                    >
                      <span>{item.day}</span>
                      <span className={item.isClosed ? 'font-semibold' : ''}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Map & Address */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-[#FFFDFD] rounded-2xl overflow-hidden border border-[#140F10]/5">
                <div className="relative h-[300px] bg-[#E8A598]/10">
                  {/* Static Map Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#C84B61] mx-auto mb-4" />
                      <p className="font-serif text-xl font-semibold text-[#140F10]">
                        2558 Minter Street
                      </p>
                      <p className="text-[#6B5F61]">Abbotsford, BC</p>
                    </div>
                  </div>
                  {/* Grid pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #140F10 1px, transparent 1px),
                        linear-gradient(to bottom, #140F10 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#E8A598]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#C84B61]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#140F10]">2558 Minter Street</p>
                      <p className="text-[#6B5F61]">Abbotsford, BC, Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#E8A598]/10 flex items-center justify-center shrink-0">
                      <Car className="w-4 h-4 text-[#C84B61]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#140F10]">Parking Available</p>
                      <p className="text-sm text-[#6B5F61]">
                        Private professional salon suite with dedicated client parking spaces reserved on site.
                      </p>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-[#140F10] hover:bg-[#2A2425] text-white">
                    <a 
                      href="https://maps.google.com/?q=2558+Minter+Street+Abbotsford+BC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#140F10] rounded-2xl p-6 lg:p-8 text-center">
                <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                  Ready to Book?
                </h3>
                <p className="text-white/70 mb-6">
                  Schedule your appointment online in just a few clicks.
                </p>
                <Button asChild className="bg-[#C84B61] hover:bg-[#B03D52] text-white px-8">
                  <Link href="/book-now">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
