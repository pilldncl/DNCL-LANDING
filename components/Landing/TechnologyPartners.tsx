'use client'

import { useState, useEffect, useRef } from 'react'
import { FiCpu, FiShield, FiZap, FiGlobe, FiDatabase, FiLock } from 'react-icons/fi'

export default function TechnologyPartners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const technologies = [
    {
      category: 'Device Management',
      icon: FiCpu,
      partners: ['Microsoft Intune', 'VMware Workspace ONE', 'Jamf Pro', 'MobileIron'],
      description: 'Enterprise MDM solutions for device configuration and security',
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Security & Compliance',
      icon: FiShield,
      partners: ['CrowdStrike', 'Symantec', 'McAfee', 'Trend Micro'],
      description: 'Advanced security solutions for enterprise device protection',
      color: 'from-red-500 to-red-600',
    },
    {
      category: 'Cloud Infrastructure',
      icon: FiGlobe,
      partners: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud'],
      description: 'Seamless integration with leading cloud platforms',
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Data Management',
      icon: FiDatabase,
      partners: ['Salesforce', 'Oracle', 'SAP', 'ServiceNow'],
      description: 'Enterprise data and workflow management systems',
      color: 'from-green-500 to-green-600',
    },
    {
      category: 'Authentication',
      icon: FiLock,
      partners: ['Okta', 'Duo Security', 'Ping Identity', 'Auth0'],
      description: 'Multi-factor authentication and identity management',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      category: 'Performance',
      icon: FiZap,
      partners: ['Akamai', 'Cloudflare', 'Fastly', 'AWS CloudFront'],
      description: 'CDN and performance optimization solutions',
      color: 'from-yellow-500 to-yellow-600',
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            <FiZap size={16} />
            <span>Technology Integration</span>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-6">
            Seamless Integration with
            <span className="block bg-gradient-to-r from-primary-300 to-blue-300 bg-clip-text text-transparent">
              Enterprise Technology Stack
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our devices and solutions integrate seamlessly with the tools your organization already uses
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-500 hover:bg-white/15 hover:border-white/40 hover:scale-105 hover:shadow-2xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color}`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{tech.category}</h3>
                  <p className="text-sm text-gray-300 mb-4">{tech.description}</p>

                  {/* Partners */}
                  <div className="space-y-2">
                    {tech.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                        <span>{partner}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

