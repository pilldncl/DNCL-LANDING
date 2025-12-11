const partners = [
  'Amazon Renewed',
  'Walmart Marketplace',
  'eBay',
  'Best Buy',
  'Brightstar',
  'Ingram Micro',
]

export default function Partners() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(30deg, transparent 40%, rgba(0,0,0,0.1) 50%, transparent 60%)`,
        backgroundSize: '80px 80px'
      }}></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We power operations for major marketplaces and enterprise partners worldwide
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 px-8 py-12 shadow-lg">
            <div className="grid gap-6 text-center text-sm font-semibold text-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {partners.map((partner, index) => (
                <div
                  key={partner}
                  className="group flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-6 py-4 transition-all hover:border-primary-400 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white hover:text-primary-700 hover:shadow-md hover:-translate-y-1"
                >
                  <span className="group-hover:scale-105 transition-transform">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
