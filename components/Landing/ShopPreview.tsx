'use client'

import Link from 'next/link'
import { FiShoppingCart, FiStar, FiArrowRight, FiCheckCircle, FiTrendingUp } from 'react-icons/fi'

const platforms = [
  {
    name: 'Amazon',
    icon: '🛒',
    color: 'from-yellow-500 to-orange-500',
    rating: '4.6/5',
    badge: 'Amazon Renewed',
  },
  {
    name: 'Walmart',
    icon: '🏪',
    color: 'from-blue-500 to-blue-600',
    rating: 'Trusted Seller',
    badge: 'Marketplace',
  },
  {
    name: 'eBay',
    icon: '📦',
    color: 'from-purple-500 to-purple-600',
    rating: 'Top Rated',
    badge: 'eBay Store',
  },
]

export default function ShopPreview() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-6">
              <FiTrendingUp className="text-primary-600" size={16} />
              <span>Available on Major Marketplaces</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              Shop Our Certified Devices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The same enterprise-grade quality and professional grading standards you trust for wholesale, 
              now available for individual purchase on your favorite platforms. Browse our inventory with verified ratings and reviews.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all hover:border-primary-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${platform.color} text-white shadow-md`}>
                  {platform.badge}
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center text-3xl shadow-md transform group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                </div>

                {/* Platform Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-primary-700 transition-colors">
                  {platform.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                  <FiStar className="text-yellow-500" size={14} />
                  <span>{platform.rating}</span>
                </div>

                {/* Trust Indicator */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <FiCheckCircle className="text-green-500" size={14} />
                  <span>Verified Seller</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Building Info */}
          <div className="rounded-xl border-2 border-primary-200 bg-gradient-to-br from-white to-primary-50 p-8 shadow-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-700 mb-2">Same Quality</div>
                <p className="text-sm text-gray-600">Enterprise-grade standards on every platform</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-700 mb-2">Verified Reviews</div>
                <p className="text-sm text-gray-600">Real ratings from verified customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-700 mb-2">Fast Shipping</div>
                <p className="text-sm text-gray-600">Quick delivery on all platforms</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://app.dncltechzone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:from-primary-700 hover:to-primary-800 hover:shadow-2xl hover:scale-105"
            >
              <FiShoppingCart size={20} />
              <span>Shop Our Full Catalog</span>
              <FiArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Browse products, add to cart, and complete transactions securely
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Also available on <Link href="/shop" className="text-primary-600 hover:underline">Amazon, Walmart & eBay</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

