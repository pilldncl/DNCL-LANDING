import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-20 text-white md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* WhatsApp Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
            <FiMessageCircle size={16} />
            <span>All Contact via WhatsApp</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Let&apos;s Talk Wholesale
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Tell us what you need — we&apos;ll make it happen. Get in touch for wholesale offers and enterprise solutions.
          </p>

          {/* Quick WhatsApp CTA */}
          <Link
            href="https://wa.me/16825616897"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-2xl transition-all hover:bg-[#20BA5A] hover:shadow-[#25D366]/50 hover:scale-105"
          >
            <FiMessageCircle size={22} />
            <span>Start WhatsApp Chat</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
