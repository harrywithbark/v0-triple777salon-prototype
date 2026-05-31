import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ClosingBanner() {
  return (
    <section className="py-20 bg-[#140F10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
          Ready for a Transformation?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Book your appointment today and experience the Triple777 difference.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-[#C84B61] hover:bg-[#B03D52] text-white px-10 py-6 text-lg"
        >
          <Link href="/book-now">
            Book Your Appointment
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
