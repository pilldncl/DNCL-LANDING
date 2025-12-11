import Link from 'next/link'
import { FiArrowRight, FiMessageCircle, FiMail } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-24 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl mb-6">
            Ready to Scale Your Technology Operations?
          </h2>
          <p className="mt-4 text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
            Connect with our enterprise solutions team to discuss your wholesale requirements, 
            deployment needs, or custom programs. We&apos;re here to help scale your technology operations.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-xl transition hover:bg-gray-50 hover:shadow-2xl"
            >
              Request Enterprise Quote
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://wa.me/16825616897"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:bg-[#20BA5A] hover:shadow-2xl hover:scale-105"
            >
              <FiMessageCircle size={20} />
              <span>Chat on WhatsApp</span>
              <span className="text-xs opacity-80">(Preferred)</span>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <FiMail className="text-white/70" size={16} />
              <a href="mailto:info@dncltechzone.com" className="hover:text-white transition">
                info@dncltechzone.com
              </a>
            </div>
            <div className="hidden sm:block text-white/30">|</div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                <FiMessageCircle className="text-white" size={12} />
              </div>
              <a href="https://wa.me/16825616897" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <span className="font-semibold">Chat on WhatsApp</span>
                <span className="text-xs text-white/70 block">Preferred Method</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
