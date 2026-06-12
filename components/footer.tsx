import Link from 'next/link'
import { Scissors, Instagram, Facebook, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#140F10] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Scissors className="w-6 h-6 text-[#E8A598]" />
              <span className="font-serif text-xl font-semibold">
                Triple777Salon.LTD
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium hair and esthetics services with over 17 years of licensed mastery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8A598]">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-white/70 hover:text-white transition-colors text-sm">Services</Link>
              <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link>
              <Link href="/gallery" className="text-white/70 hover:text-white transition-colors text-sm">Gallery</Link>
              <Link href="/book-now" className="text-white/70 hover:text-white transition-colors text-sm">Book Now</Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8A598]">Connect With Us</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://instagram.com/triple.777salon" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @triple.777salon
              </a>
              <a 
                href="https://facebook.com/triple777salon" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
            <div className="mt-6 p-3 bg-white/5 rounded-md">
              <p className="text-xs text-[#E8A598] font-medium">A+ BBB Verified</p>
              <p className="text-xs text-white/50">Better Business Bureau</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8A598]">Visit Us</h4>
            <div className="flex items-start gap-3 text-white/70 text-sm">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p>2558 Minter Street</p>
                <p>Abbotsford, BC</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Private professional salon suite. Dedicated client parking spaces are reserved on site.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50 bg-[#C9A96E]/10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-4 rounded-b-sm">
          <p>Triple777Salon.LTD &copy; {new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
