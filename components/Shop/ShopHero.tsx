'use client'

import { useEffect, useState } from 'react'

export default function ShopHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-24 md:py-32 overflow-hidden">
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 100}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -100}px, ${mousePosition.y * -100}px)`
          }}
        ></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: `${mousePosition.x * 50}px ${mousePosition.y * 50}px`
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/20 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-300"></span>
            </span>
            <span>Live on Major Marketplaces</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl mb-8 bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent animate-fade-in">
            Shop Our Retail Platforms
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl animate-fade-in">
            Browse our certified devices on major marketplaces. Same enterprise-grade quality, 
            available for individual purchase or bulk orders.
          </p>

          {/* Animated Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-medium">3 Active Platforms</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
              <span className="text-sm font-medium">4.6+ Average Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-sm font-medium">Verified Sellers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

