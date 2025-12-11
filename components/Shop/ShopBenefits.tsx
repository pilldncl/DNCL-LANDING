import { FiShield, FiTruck, FiRefreshCw, FiCheckCircle } from 'react-icons/fi'

const benefits = [
  {
    icon: <FiShield className="text-primary-700" size={32} />,
    title: 'Same Quality Standards',
    description: 'Every device meets our enterprise-grade quality standards, regardless of platform.',
  },
  {
    icon: <FiTruck className="text-primary-700" size={32} />,
    title: 'Fast Shipping',
    description: 'Quick delivery options available on all platforms.',
  },
  {
    icon: <FiRefreshCw className="text-primary-700" size={32} />,
    title: 'Easy Returns',
    description: 'Hassle-free return policies through each marketplace.',
  },
  {
    icon: <FiCheckCircle className="text-primary-700" size={32} />,
    title: 'Verified Reviews',
    description: 'Check our ratings and reviews on each platform.',
  },
]

export default function ShopBenefits() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Benefits</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4 bg-gradient-to-r from-gray-900 via-primary-700 to-gray-900 bg-clip-text text-transparent">
            Why Shop Our Retail Platforms?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get the same enterprise-quality devices with the convenience of your favorite marketplace.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-8 text-center shadow-lg transition-all duration-500 hover:border-primary-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

              {/* Icon with 3D Effect */}
              <div className="mb-6 flex justify-center">
                <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-2xl bg-white/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Title with Gradient */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-primary-600 transition-all duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

