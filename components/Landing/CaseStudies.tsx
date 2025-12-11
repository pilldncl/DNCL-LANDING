'use client'

import { useState, useEffect, useRef } from 'react'
import { FiTrendingUp, FiUsers, FiDollarSign, FiCheckCircle } from 'react-icons/fi'

export default function CaseStudies() {
  const [visibleIndex, setVisibleIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const caseStudies = [
    {
      company: 'Major Retail Chain',
      industry: 'Retail & E-commerce',
      challenge: 'Needed 5,000+ devices for nationwide deployment within 30 days',
      solution: 'Customized bulk procurement with pre-configured enterprise settings',
      results: [
        { icon: FiTrendingUp, metric: '5,200', label: 'Devices Deployed' },
        { icon: FiCheckCircle, metric: '99.7%', label: 'Quality Pass Rate' },
        { icon: FiDollarSign, metric: '35%', label: 'Cost Savings' },
        { icon: FiUsers, metric: '28 Days', label: 'Delivery Time' },
      ],
      testimonial: 'DNCL-Techzone delivered exactly what they promised. The quality was exceptional and the timeline was met perfectly.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      company: 'Regional Healthcare System',
      industry: 'Healthcare',
      challenge: 'HIPAA-compliant device sourcing for 200+ locations',
      solution: 'Secure, certified devices with enterprise MDM pre-configuration',
      results: [
        { icon: FiTrendingUp, metric: '850', label: 'Devices Supplied' },
        { icon: FiCheckCircle, metric: '100%', label: 'Compliance Rate' },
        { icon: FiDollarSign, metric: '42%', label: 'Budget Efficiency' },
        { icon: FiUsers, metric: '6 Weeks', label: 'Full Deployment' },
      ],
      testimonial: 'Their attention to compliance and security standards made this project seamless. Highly recommended.',
      color: 'from-green-500 to-green-600',
    },
    {
      company: 'Public School District',
      industry: 'Education',
      challenge: '1:1 device program for 3,000+ students and faculty',
      solution: 'Graded device program with extended warranty and support',
      results: [
        { icon: FiTrendingUp, metric: '3,200', label: 'Devices Deployed' },
        { icon: FiCheckCircle, metric: '98.9%', label: 'Satisfaction Rate' },
        { icon: FiDollarSign, metric: '50%', label: 'Cost Reduction' },
        { icon: FiUsers, metric: '4 Months', label: 'Implementation' },
      ],
      testimonial: 'The quality-to-price ratio was outstanding. Our students and staff are thrilled with the devices.',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % caseStudies.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [caseStudies.length])

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <FiCheckCircle size={16} />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Real Partners
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See how enterprise clients achieve measurable outcomes with our technology solutions
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            {caseStudies.map((study, index) => {
              const isActive = index === visibleIndex
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${study.color} p-8 text-white`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold opacity-90 mb-1">{study.industry}</div>
                          <h3 className="text-2xl font-bold">{study.company}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold mb-1">Case Study</div>
                          <div className="text-sm opacity-80">#{String(index + 1).padStart(2, '0')}</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Challenge & Solution */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
                          <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            Challenge
                          </h4>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
                          <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Solution
                          </h4>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {study.results.map((result, resultIndex) => {
                          const Icon = result.icon
                          return (
                            <div
                              key={resultIndex}
                              className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                              style={{
                                animation: `fadeInUp 0.6s ease-out ${resultIndex * 0.1}s both`
                              }}
                            >
                              <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${study.color} mb-3`}>
                                <Icon className="text-white" size={20} />
                              </div>
                              <div className="text-2xl font-bold text-gray-900 mb-1">{result.metric}</div>
                              <div className="text-xs text-gray-600 font-medium">{result.label}</div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Testimonial */}
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border-l-4 border-primary-500">
                        <p className="text-gray-700 italic mb-2">&ldquo;{study.testimonial}&rdquo;</p>
                        <div className="text-sm text-gray-600 font-semibold">— {study.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setVisibleIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === visibleIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

