'use client'

import { Phone } from 'lucide-react'

export function NotificationBar() {
  return (
    <div className="bg-[#140F10] text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        <a 
          href="tel:+16047444777" 
          className="flex items-center gap-2 hover:text-[#E8A598] transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>+1 604-744-4777</span>
        </a>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[#E8A598]">NOW OPEN SUNDAYS:</span>
          <span className="font-medium">10:00 AM - 1:00 PM</span>
        </div>
      </div>
    </div>
  )
}
