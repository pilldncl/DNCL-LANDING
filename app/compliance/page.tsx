import { Metadata } from 'next'
import { FiShield, FiCheckCircle, FiAward, FiLock } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Compliance - DNCL Techzone',
  description: 'Compliance standards and certifications for DNCL-TECHZONE enterprise technology solutions.',
}

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
            <FiShield className="text-primary-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compliance & Standards</h1>
          <p className="text-gray-600">Enterprise-Grade Compliance for B2B Technology Solutions</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At DNCL-TECHZONE, we understand that enterprise clients require the highest standards of compliance, security, and regulatory adherence. We maintain rigorous compliance frameworks to ensure our products and services meet or exceed industry standards and regulatory requirements.
            </p>
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Enterprise-Grade Standards:</strong> Our compliance programs are designed to support B2B organizations operating in regulated industries, ensuring peace of mind and operational confidence.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection & Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection & Privacy Compliance</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">GDPR (General Data Protection Regulation)</h3>
                <p className="text-gray-700 leading-relaxed">
                  We comply with GDPR requirements for processing personal data of EU residents, including data subject rights, data breach notifications, and privacy by design principles.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">CCPA (California Consumer Privacy Act)</h3>
                <p className="text-gray-700 leading-relaxed">
                  We respect California consumer privacy rights, including the right to know, delete, and opt-out of the sale of personal information.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Other Regional Privacy Laws</h3>
                <p className="text-gray-700 leading-relaxed">
                  We maintain compliance with applicable privacy laws in jurisdictions where we operate, adapting our practices to meet local requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Security Standards */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security & Information Management</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FiLock className="text-primary-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">ISO 27001</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Information Security Management System (ISMS) standards for protecting sensitive data and ensuring secure operations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FiShield className="text-primary-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">SOC 2 Type II</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Service Organization Control 2 compliance for security, availability, processing integrity, confidentiality, and privacy.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FiAward className="text-primary-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">NIST Framework</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Alignment with NIST Cybersecurity Framework for identifying, protecting, detecting, responding, and recovering from threats.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-primary-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">PCI DSS</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Payment Card Industry Data Security Standard compliance for secure payment processing and cardholder data protection.
                </p>
              </div>
            </div>
          </section>

          {/* Industry-Specific Compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industry-Specific Compliance</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Healthcare (HIPAA)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For healthcare technology deployments, we ensure compliance with Health Insurance Portability and Accountability Act (HIPAA) requirements for protected health information (PHI).
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Business Associate Agreement (BAA) available</li>
                  <li>Encryption and access controls for PHI</li>
                  <li>Audit trails and breach notification procedures</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Services</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For financial sector clients, we maintain compliance with relevant regulations including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>GLBA (Gramm-Leach-Bliley Act) requirements</li>
                  <li>SOX (Sarbanes-Oxley Act) controls</li>
                  <li>FFIEC guidelines for financial institutions</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Government & Defense</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For government contracts, we can provide solutions meeting:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>FedRAMP requirements</li>
                  <li>ITAR (International Traffic in Arms Regulations) compliance</li>
                  <li>NIST 800-171 for Controlled Unclassified Information (CUI)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quality Management */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quality Management Standards</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">ISO 9001</h3>
                <p className="text-gray-700 text-sm">
                  Quality Management System ensuring consistent product and service quality, customer satisfaction, and continuous improvement.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">ISO 14001</h3>
                <p className="text-gray-700 text-sm">
                  Environmental Management System for sustainable operations and environmental responsibility in our supply chain.
                </p>
              </div>
            </div>
          </section>

          {/* Supply Chain Compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supply Chain & Vendor Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain strict oversight of our supply chain to ensure:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Ethical sourcing and labor practices</li>
              <li>Conflict-free minerals compliance</li>
              <li>Environmental regulations adherence</li>
              <li>Product safety and certification standards</li>
              <li>Vendor security assessments and audits</li>
            </ul>
          </section>

          {/* Compliance Monitoring */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ongoing Compliance Monitoring</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our compliance program includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Regular Audits</h3>
                <p className="text-gray-700 text-sm">
                  Internal and third-party audits to verify compliance with standards and regulations.
                </p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Continuous Training</h3>
                <p className="text-gray-700 text-sm">
                  Staff training programs to maintain awareness of compliance requirements and best practices.
                </p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Risk Assessments</h3>
                <p className="text-gray-700 text-sm">
                  Periodic risk assessments to identify and mitigate compliance risks.
                </p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Documentation</h3>
                <p className="text-gray-700 text-sm">
                  Comprehensive documentation of policies, procedures, and compliance activities.
                </p>
              </div>
            </div>
          </section>

          {/* Compliance Documentation */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Documentation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enterprise clients may request:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Compliance certificates and attestations</li>
              <li>Security questionnaires and assessments</li>
              <li>Data Processing Agreements (DPAs)</li>
              <li>Business Associate Agreements (BAAs)</li>
              <li>Vendor compliance documentation</li>
              <li>Audit reports and findings (subject to confidentiality)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please contact our compliance team to request specific documentation for your organization's requirements.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-4">
              <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Inquiries</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about our compliance programs, certifications, or to request compliance documentation:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Compliance Team:</strong> <a href="mailto:compliance@dncltechzone.com" className="text-primary-600 hover:underline">compliance@dncltechzone.com</a></p>
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

