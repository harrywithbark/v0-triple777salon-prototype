'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function MobileBottomCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-[#140F10]/5">
      <Link
        href="/book-now"
        className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-[#C84B61] hover:bg-[#B03D52] text-white font-medium rounded-lg transition-colors"
      >
        Reserve Your Appointment
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  )
}
