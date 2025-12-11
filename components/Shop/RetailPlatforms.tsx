'use client'

import { useState, useEffect } from 'react'
import { FiExternalLink, FiShoppingCart, FiStar, FiTrendingUp, FiZap } from 'react-icons/fi'

// Platform data - Replace URLs with your actual links
const platforms = [
  {
    name: 'Amazon',
    description: 'Browse our certified devices on Amazon Renewed',
    icon: '🛒',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    hoverColor: 'hover:border-yellow-400',
    url: 'https://www.amazon.com/s?i=merchant-items&me=AO1LGXGNS33JB', // Replace with your Amazon store URL
    stats: '4.6/5 Rating',
    badge: 'Amazon Renewed',
  },
  {
    name: 'Walmart',
    description: 'Find our products on Walmart Marketplace',
    icon: '🏪',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverColor: 'hover:border-blue-400',
    url: 'https://www.walmart.com/global/seller/101035514/cp/shopall', // Replace with your Walmart store URL
    stats: 'Trusted Seller',
    badge: 'Marketplace',
  },
  {
    name: 'eBay',
    description: 'Shop our inventory on eBay',
    icon: '📦',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    hoverColor: 'hover:border-purple-400',
    url: 'https://www.ebay.com/str/dncltechzone', // Replace with your eBay store URL
    stats: 'Top Rated Seller',
    badge: 'eBay Store',
  },
  // Back Market - Hidden (uncomment when available)
  // {
  //   name: 'Back Market',
  //   description: 'Certified refurbished devices',
  //   icon: '♻️',
  //   color: 'from-green-500 to-green-600',
  //   bgColor: 'bg-green-50',
  //   borderColor: 'border-green-200',
  //   hoverColor: 'hover:border-green-400',
  //   url: '#', // Replace with your Back Market URL
  //   stats: 'Certified Refurbished',
  //   badge: 'Partner',
  // },
]

export default function RetailPlatforms() {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Choose Your Platform</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl mb-4 bg-gradient-to-r from-gray-900 via-primary-700 to-gray-900 bg-clip-text text-transparent">
            Shop on Your Preferred Platform
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;re available on major retail platforms. Choose your preferred marketplace to browse our inventory.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border ${platform.borderColor} ${platform.bgColor} p-8 text-center transition-all duration-500 ${platform.hoverColor} hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]`}
              onMouseEnter={() => setHoveredPlatform(index)}
              onMouseLeave={() => setHoveredPlatform(null)}
              style={{
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Animated Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                style={{
                  background: hoveredPlatform === index 
                    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
                    : 'transparent'
                }}
              ></div>
              
              {/* Glowing Badge */}
              <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${platform.color} text-white shadow-lg transform group-hover:scale-110 transition-transform z-20`}>
                <span className="drop-shadow-md">{platform.badge}</span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="relative z-10">
                {/* Icon with 3D Effect */}
                <div className={`mb-6 flex justify-center`}>
                  <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-4xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl"></div>
                    <span className="relative z-10 drop-shadow-lg">{platform.icon}</span>
                  </div>
                </div>

                {/* Platform Name with Gradient */}
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-primary-600 transition-all duration-300">
                  {platform.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 min-h-[40px] leading-relaxed">
                  {platform.description}
                </p>

                {/* Stats with Animation */}
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} transition-all duration-300 group-hover:scale-110`} 
                        size={14} 
                      />
                    ))}
                  </div>
                  <span className="ml-1">{platform.stats}</span>
                </div>

                {/* Modern CTA Button */}
                <div className={`relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r ${platform.color} text-white font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <FiShoppingCart size={18} className="relative z-10" />
                  <span className="relative z-10">Shop Now</span>
                  <FiExternalLink size={16} className="relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Animated Border Glow */}
              {hoveredPlatform === index && (
                <div className={`absolute inset-0 rounded-2xl border-2 ${platform.borderColor} animate-pulse`} style={{
                  boxShadow: `0 0 20px rgba(var(--primary-500), 0.5)`
                }}></div>
              )}
            </a>
          ))}
        </div>

        {/* Modern Info Card with Glassmorphism */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="group relative rounded-3xl border border-gray-200/50 bg-white/80 backdrop-blur-xl p-10 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
            {/* Gradient Border on Hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-white/30 blur-md"></div>
                  <FiZap className="text-white relative z-10" size={28} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                  Same Quality, Multiple Platforms
                </h3>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   Whether you shop on Amazon, Walmart, or eBay, you&apos;re getting the same 
                   enterprise-grade quality and professional grading standards. All devices go through 
                   our rigorous inspection process regardless of the platform.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

