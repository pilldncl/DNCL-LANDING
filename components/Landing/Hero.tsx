'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiAward, FiTrendingUp, FiUsers, FiArrowDown, FiCheckCircle, FiShield } from 'react-icons/fi'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Static Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Animated Trust Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/20 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-primary-500/30 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-300"></span>
                  </span>
                </div>
                <FiAward className="text-primary-300" size={16} />
                <span>Trusted B2B Technology Partner Since 2015</span>
              </div>

              {/* Main Headline with Stagger Animation */}
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl mb-6">
                <span className="block mb-2 bg-gradient-to-r from-white via-white to-primary-200 bg-clip-text text-transparent">
                  Enterprise-Grade
                </span>
                <span className="block mb-2 bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  Technology Solutions
                </span>
                <span className="block text-primary-300 mt-2">
                  Delivered with Uncompromising Quality
                </span>
              </h1>

              {/* Enhanced Description */}
              <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                We supply <span className="text-white font-semibold">certified, professionally graded devices</span>—phones, laptops, tablets, and smartwatches—ready for 
                enterprise deployment, resale, or internal use. <span className="text-primary-200 font-medium">Trusted by 1,200+ enterprise clients worldwide.</span>
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="mt-10 flex flex-col items-center lg:items-start gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-500 hover:to-primary-600 hover:shadow-primary-500/50 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Request Enterprise Quote
                    <FiArrowDown className="transform group-hover:translate-y-1 transition-transform" size={18} />
                  </span>
                </Link>
                <Link
                  href="/shop"
                  className="group relative rounded-lg border-2 border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    <FiShield className="text-primary-300" size={18} />
                    Shop Our Stores
                  </span>
                </Link>
              </div>

              {/* Trust Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                {[
                  { icon: FiCheckCircle, text: 'Certified Devices' },
                  { icon: FiShield, text: 'Enterprise-Grade' },
                  { icon: FiAward, text: 'Quality Assured' },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                      <Icon className="text-primary-300" size={14} />
                      <span>{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Enhanced Trust Indicators */}
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { 
                  icon: FiUsers, 
                  value: '1,200+', 
                  label: 'Enterprise Clients',
                  sublabel: 'Fortune 500 to SMB',
                  color: 'from-blue-500 to-blue-600'
                },
                { 
                  icon: FiAward, 
                  value: '4.6', 
                  sublabel: '/5.0', 
                  label: 'Client Rating',
                  detail: '2,500+ verified reviews',
                  color: 'from-purple-500 to-purple-600'
                },
                { 
                  icon: FiTrendingUp, 
                  value: '10K+', 
                  label: 'Devices/Month',
                  sublabel: 'Consistent quality at scale',
                  color: 'from-indigo-500 to-indigo-600'
                },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-6 text-center transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s both`
                    }}
                  >
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}></div>
                    
                    <div className="mb-4 flex justify-center">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white md:text-5xl mb-2">
                      {stat.value}
                      {stat.sublabel && <span className="text-2xl font-normal text-gray-400">{stat.sublabel}</span>}
                    </div>
                    <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
                    {stat.detail && <div className="text-xs text-gray-400">{stat.detail}</div>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <FiArrowDown size={20} />
        </div>
      </div>
    </section>
  )
}
