import { Clock, MapPin, AlertCircle, Calendar, User, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const protocols = [
  { icon: Clock, text: 'Please arrive 5-10 minutes before your appointment' },
  { icon: AlertCircle, text: 'Hair must be clean and completely dry for color/straightening services' },
  { icon: Calendar, text: '24-hour cancellation notice required to avoid fees' },
  { icon: MapPin, text: 'Private salon suite at 2558 Minter Street, Abbotsford, BC' },
]

const mockTimeSlots = [
  { time: '9:00 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '11:00 AM', available: true },
  { time: '1:00 PM', available: true },
  { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: false },
  { time: '4:00 PM', available: true },
  { time: '5:00 PM', available: true },
]

export default function BookNowPage() {
  return (
    <div className="pt-[104px] lg:pb-0 pb-24">
      {/* Hero */}
      <section className="py-16 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E8A598] text-sm font-medium tracking-widest uppercase mb-4">
            Reservations
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#140F10] mb-4 text-balance">
            Book Your Appointment
          </h1>
          <p className="text-[#6B5F61] text-lg max-w-2xl mx-auto">
            Schedule your visit to Triple777Salon.LTD and experience premium hair and esthetics services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Sidebar - Protocols */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#FFFDFD] rounded-2xl p-6 border border-[#140F10]/5">
                <h2 className="font-serif text-xl font-semibold text-[#140F10] mb-6">
                  Before Your Visit
                </h2>
                <ul className="space-y-4">
                  {protocols.map((protocol, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E8A598]/10 flex items-center justify-center shrink-0">
                        <protocol.icon className="w-4 h-4 text-[#C84B61]" />
                      </div>
                      <p className="text-sm text-[#6B5F61] leading-relaxed pt-2">{protocol.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-[#FFFDFD] rounded-2xl p-6 border border-[#140F10]/5">
                <h2 className="font-serif text-xl font-semibold text-[#140F10] mb-6">
                  Operating Hours
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-[#C84B61]">
                    <span>Monday</span>
                    <span className="font-medium">CLOSED</span>
                  </div>
                  <div className="flex justify-between text-[#6B5F61]">
                    <span>Tuesday - Thursday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#140F10] font-medium">
                    <span>Friday - Saturday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#E8A598]">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Mock Booking Interface */}
            <div className="lg:col-span-3">
              <div className="bg-[#FFFDFD] rounded-2xl p-6 lg:p-8 border border-[#140F10]/5">
                <h2 className="font-serif text-2xl font-semibold text-[#140F10] mb-2">
                  Schedule Online
                </h2>
                <p className="text-[#6B5F61] text-sm mb-8">
                  Select your preferred service and time slot below.
                </p>

                {/* Service Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#140F10] mb-3">
                    Select Service
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-[#140F10]/10 bg-white text-[#140F10] appearance-none focus:outline-none focus:border-[#E8A598] transition-colors">
                      <option value="">Choose a service...</option>
                      <option value="threading">Threading & Tinting</option>
                      <option value="waxing">Waxing Services</option>
                      <option value="haircut">Hair Cut & Styling</option>
                      <option value="color">Color & Highlights</option>
                      <option value="straightening">Permanent Straightening</option>
                      <option value="facial">Skincare Facial</option>
                      <option value="nails">Manicure / Pedicure</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B5F61] rotate-90" />
                  </div>
                </div>

                {/* Stylist */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#140F10] mb-3">
                    Select Stylist
                  </label>
                  <div className="flex gap-4">
                    <button className="flex-1 p-4 rounded-lg border-2 border-[#C84B61] bg-[#C84B61]/5 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#E8A598]/20 flex items-center justify-center mx-auto mb-2">
                        <User className="w-5 h-5 text-[#C84B61]" />
                      </div>
                      <p className="font-medium text-[#140F10]">Kiran</p>
                      <p className="text-xs text-[#6B5F61]">Owner</p>
                    </button>
                    <button className="flex-1 p-4 rounded-lg border border-[#140F10]/10 bg-white text-center hover:border-[#E8A598] transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#140F10]/5 flex items-center justify-center mx-auto mb-2">
                        <User className="w-5 h-5 text-[#6B5F61]" />
                      </div>
                      <p className="font-medium text-[#140F10]">Any Available</p>
                      <p className="text-xs text-[#6B5F61]">Flexible</p>
                    </button>
                  </div>
                </div>

                {/* Date */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#140F10] mb-3">
                    Select Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-[#140F10]/10 bg-white text-[#140F10] focus:outline-none focus:border-[#E8A598] transition-colors"
                  />
                </div>

                {/* Time Slots */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#140F10] mb-3">
                    Available Times
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {mockTimeSlots.map((slot, index) => (
                      <button
                        key={index}
                        disabled={!slot.available}
                        className={`py-3 px-2 rounded-lg text-sm font-medium transition-colors ${
                          slot.available
                            ? 'bg-white border border-[#140F10]/10 text-[#140F10] hover:border-[#E8A598] hover:bg-[#E8A598]/5'
                            : 'bg-[#140F10]/5 text-[#140F10]/30 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <Button className="w-full bg-[#C84B61] hover:bg-[#B03D52] text-white py-6 text-base">
                  Continue to Booking
                </Button>

                <p className="text-xs text-[#6B5F61] text-center mt-4">
                  You will be redirected to our secure booking portal to complete your reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
