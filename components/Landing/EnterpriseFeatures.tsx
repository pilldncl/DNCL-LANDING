'use client'

import { useRef } from 'react'
import { FiShield, FiClock, FiDollarSign, FiFileText, FiHeadphones, FiCheckCircle } from 'react-icons/fi'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function EnterpriseFeatures() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation(sectionRef, 0.1)

  const features = [
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Full data sanitization, secure chain of custody, and compliance-ready documentation for every device.',
      details: ['Data wiping certified', 'Secure logistics', 'Compliance documentation'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FiClock,
      title: 'SLA Guarantees',
      description: 'Commitment to delivery timelines, quality standards, and support response times that enterprise operations require.',
      details: ['On-time delivery guarantee', 'Quality assurance SLA', '24/7 support availability'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FiDollarSign,
      title: 'Volume Pricing',
      description: 'Competitive tiered pricing for bulk orders, with dedicated account management for enterprise clients.',
      details: ['Tiered volume discounts', 'Custom pricing agreements', 'Dedicated account management'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FiFileText,
      title: 'Contract & PO Ready',
      description: 'Streamlined procurement process supporting purchase orders, contracts, and enterprise payment terms.',
      details: ['PO acceptance', 'Net payment terms', 'Contract execution'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: FiHeadphones,
      title: 'Enterprise Support',
      description: 'Dedicated support channels, technical assistance, and account management for enterprise partnerships.',
      details: ['Dedicated account manager', 'Priority support', 'Technical consultation'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: FiCheckCircle,
      title: 'Quality Guarantee',
      description: 'Comprehensive warranty, return policies, and quality assurance that enterprise buyers expect.',
      details: ['Warranty coverage', 'Return policy', 'Quality guarantee'],
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <FiShield size={16} />
            <span>Enterprise-Grade Services</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-6">
            Built for Enterprise
            <span className="block text-primary-700">Procurement & Operations</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every aspect of our service is designed to meet enterprise requirements: security, compliance, 
            scalability, and dedicated support for your technology procurement needs.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

