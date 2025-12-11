'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { FiSmartphone, FiMonitor, FiTablet, FiWatch, FiShoppingCart, FiArrowRight } from 'react-icons/fi'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation(sectionRef, 0.1)
  const categories = [
    { 
      icon: FiSmartphone, 
      name: 'Phones', 
      description: 'Certified smartphones ready for deployment',
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      icon: FiMonitor, 
      name: 'Laptops', 
      description: 'Enterprise-grade laptops for business',
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50'
    },
    { 
      icon: FiTablet, 
      name: 'Tablets', 
      description: 'Professional tablets for various industries',
      gradient: 'from-indigo-500 to-indigo-600',
      bg: 'bg-indigo-50'
    },
    { 
      icon: FiWatch, 
      name: 'Watches', 
      description: 'Smart watches and wearables',
      gradient: 'from-primary-500 to-primary-600',
      bg: 'bg-primary-50'
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container relative mx-auto px-4">
        <div className={`mx-auto max-w-3xl text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
            Supplying Devices from Global Leaders in Every Category
          </h2>
          <p className="text-lg text-gray-600">
            From smartphones to smartwatches, we supply certified devices from leading manufacturers, 
            available for wholesale or through our retail platforms.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-8 text-center transition-all hover:border-primary-400 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className={`absolute inset-0 ${category.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`flex justify-center mb-4 p-4 rounded-xl bg-gradient-to-br ${category.gradient} w-20 h-20 mx-auto items-center transform group-hover:scale-110 transition-transform`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-700 transition-colors">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA to Shop */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-md border-2 border-primary-300 bg-primary-50 px-6 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-100 hover:border-primary-400"
          >
            <FiShoppingCart size={16} />
            <span>Shop These Categories on Our Retail Platforms</span>
            <FiArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
