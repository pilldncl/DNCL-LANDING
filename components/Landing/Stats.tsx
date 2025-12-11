'use client'

import { useRef } from 'react'
import { useScrollAnimation, useAnimatedCounter } from '@/hooks/useScrollAnimation'

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation(sectionRef, 0.2)

  const clientCount = useAnimatedCounter(1200, 2000, isVisible)
  const ratingCount = useAnimatedCounter(4.6, 2000, isVisible)
  const deviceCount = useAnimatedCounter(10000, 2000, isVisible)

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-100 via-white to-primary-50 py-20 md:py-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Proven Track Record in Enterprise Technology
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our metrics reflect consistent delivery, quality assurance, and client satisfaction across global operations. 
            These numbers represent real partnerships and verified results.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            { 
              number: clientCount,
              suffix: '+',
              label: 'Enterprise Clients',
              detail: 'Fortune 500 to SMB organizations',
              highlight: 'Global Reach',
              gradient: 'from-blue-500 to-blue-600'
            },
            { 
              number: ratingCount.toFixed(1),
              suffix: '/5.0',
              label: 'Client Satisfaction Rating',
              detail: 'Based on 2,500+ verified reviews',
              highlight: 'Trusted Partner',
              gradient: 'from-purple-500 to-purple-600'
            },
            { 
              number: deviceCount.toLocaleString(),
              suffix: '+',
              label: 'Devices Processed Monthly',
              detail: 'Consistent quality at enterprise scale',
              highlight: 'Operational Excellence',
              gradient: 'from-indigo-500 to-indigo-600'
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-8 text-center shadow-lg transition-all hover:border-primary-300 hover:shadow-2xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`
              }}
            >
              <div className={`absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r ${stat.gradient} px-4 py-1.5 text-xs font-semibold text-white shadow-md`}>
                {stat.highlight}
              </div>
              <div className="mt-4 text-5xl font-bold bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent mb-3">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
