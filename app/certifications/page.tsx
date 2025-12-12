import { Metadata } from 'next'
import { FiAward, FiCheckCircle, FiShield, FiTrendingUp, FiUsers, FiLock } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Certifications - DNCL Techzone',
  description: 'Certifications, standards, and quality assurance programs for DNCL-TECHZONE enterprise solutions.',
}

export default function Certifications() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
            <FiAward className="text-primary-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h1>
          <p className="text-gray-600">Quality Assurance and Industry Certifications</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DNCL-TECHZONE maintains various certifications and adheres to industry standards to ensure the highest quality, security, and reliability in our products and services. These certifications demonstrate our commitment to excellence and provide assurance to our enterprise clients.
            </p>
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Continuous Improvement:</strong> We regularly review and update our certifications to stay current with evolving industry standards and best practices.
                </p>
              </div>
            </div>
          </section>

          {/* Quality Certifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quality Management Certifications</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-6 pr-4 py-4 bg-gray-50 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <FiAward className="text-primary-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">ISO 9001:2015</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Quality Management System</strong> - Certified for our commitment to quality management principles, customer satisfaction, and continuous improvement.
                    </p>
                    <p className="text-sm text-gray-600">
                      Scope: Design, development, supply, and support of enterprise technology solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6 pr-4 py-4 bg-gray-50 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">ISO 14001:2015</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Environmental Management System</strong> - Demonstrating our commitment to environmental responsibility and sustainable business practices.
                    </p>
                    <p className="text-sm text-gray-600">
                      Focus: Environmental impact reduction, resource efficiency, and sustainable operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Certifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Security Certifications</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-center gap-3 mb-3">
                  <FiShield className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">ISO 27001:2022</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Information Security Management System</strong> - Comprehensive framework for managing information security risks.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Risk assessment and treatment</li>
                  <li>• Access control and encryption</li>
                  <li>• Incident management</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-br from-purple-50 to-white">
                <div className="flex items-center gap-3 mb-3">
                  <FiLock className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">SOC 2 Type II</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Service Organization Control</strong> - Annual audit demonstrating security, availability, and processing integrity.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Security controls verified</li>
                  <li>• Availability monitoring</li>
                  <li>• Processing integrity assurance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Industry Standards */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industry Standards & Frameworks</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">NIST Cybersecurity Framework</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Alignment with the National Institute of Standards and Technology Cybersecurity Framework for identifying, protecting, detecting, responding, and recovering from cybersecurity threats.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">Identify</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">Protect</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">Detect</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">Respond</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">Recover</span>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">PCI DSS Compliance</h3>
                <p className="text-gray-700 text-sm">
                  Payment Card Industry Data Security Standard compliance for secure payment processing and protection of cardholder data in our e-commerce operations.
                </p>
              </div>
            </div>
          </section>

          {/* Operational Excellence */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Operational Excellence Metrics</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">99.3%</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Quality Pass Rate</div>
                <div className="text-xs text-gray-600">Rigorous quality control processes</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">48hr</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Average Processing Time</div>
                <div className="text-xs text-gray-600">Efficient order fulfillment</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Support Available</div>
                <div className="text-xs text-gray-600">Round-the-clock assistance</div>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trust Indicators</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-6 border rounded-lg bg-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <FiShield className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Quality-Focused Operations</h3>
                  <p className="text-sm text-gray-600">Rigorous quality control processes at every stage</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border rounded-lg bg-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <FiLock className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Secure Data Handling</h3>
                  <p className="text-sm text-gray-600">Data protection best practices and encryption</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border rounded-lg bg-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <FiUsers className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Proven Track Record</h3>
                  <p className="text-sm text-gray-600">1,200+ satisfied enterprise clients worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border rounded-lg bg-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <FiTrendingUp className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Industry Best Practices</h3>
                  <p className="text-sm text-gray-600">Professional grading and inspection standards</p>
                </div>
              </div>
            </div>
          </section>

          {/* Certification Verification */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verification & Documentation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enterprise clients can request:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Certification certificates and audit reports</li>
              <li>Compliance documentation for vendor assessments</li>
              <li>Quality assurance reports and metrics</li>
              <li>Security assessment questionnaires</li>
              <li>Third-party audit findings (subject to confidentiality)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All certification documentation is available upon request for qualified enterprise clients and partners.
            </p>
          </section>

          {/* Related Links */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Information</h2>
            <div className="space-y-2">
              <a href="/compliance" className="block text-primary-600 hover:text-primary-700 hover:underline">
                → View our Compliance Standards
              </a>
              <a href="/privacy" className="block text-primary-600 hover:text-primary-700 hover:underline">
                → Read our Privacy Policy
              </a>
              {/* <a href="/terms" className="block text-primary-600 hover:text-primary-700 hover:underline">
                → Review Terms of Service
              </a> */}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-4">
              <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Certification Inquiries</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about our certifications or to request certification documentation:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Certifications Team:</strong> <a href="mailto:certifications@dncltechzone.com" className="text-primary-600 hover:underline">certifications@dncltechzone.com</a></p>
                  <p><strong>General Inquiries:</strong> <a href="mailto:info@dncltechzone.com" className="text-primary-600 hover:underline">info@dncltechzone.com</a></p>
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/16825616897" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">+1 (682) 561-6897</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

