import { Metadata } from 'next'
import { FiShield, FiLock, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Privacy Policy - DNCL Techzone',
  description: 'Privacy Policy for DNCL-TECHZONE. Learn how we protect and handle your data.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
            <FiShield className="text-primary-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Main Content Layout */}
        <div className="flex gap-8 items-start">
          {/* Side Panel - Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0" style={{ alignSelf: 'flex-start' }}>
            <div 
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
              style={{
                position: 'sticky',
                top: '6rem',
                maxHeight: 'calc(100vh - 8rem)',
                overflowY: 'auto'
              }}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">Table of Contents</h2>
              <nav className="space-y-2">
                <div>
                  <a href="#introduction" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    1. Introduction
                  </a>
                </div>
                <div>
                  <a href="#information-we-collect" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    2. Information We Collect
                  </a>
                  <ul className="ml-4 mt-1 space-y-1 text-xs text-gray-600">
                    <li><a href="#information-we-collect" className="hover:text-blue-600 block py-0.5">2.1 Information You Provide</a></li>
                    <li><a href="#information-we-collect" className="hover:text-blue-600 block py-0.5">2.2 Automatically Collected</a></li>
                  </ul>
                </div>
                <div>
                  <a href="#how-we-use" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    3. How We Use Your Information
                  </a>
                </div>
                <div>
                  <a href="#information-sharing" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    4. Information Sharing
                  </a>
                </div>
                <div>
                  <a href="#data-security" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    5. Data Security
                  </a>
                </div>
                <div>
                  <a href="#cookies" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    6. Cookies & Tracking
                  </a>
                </div>
                <div>
                  <a href="#your-rights" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    7. Your Privacy Rights
                  </a>
                </div>
                <div>
                  <a href="#data-retention" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    8. Data Retention
                  </a>
                </div>
                <div>
                  <a href="#international-transfers" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    9. International Transfers
                  </a>
                </div>
                <div>
                  <a href="#children-privacy" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    10. Children&apos;s Privacy
                  </a>
                </div>
                <div>
                  <a href="#policy-updates" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    11. Policy Updates
                  </a>
                </div>
                <div>
                  <a href="#contact" className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm block py-1">
                    12. Contact Us
                  </a>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section id="introduction">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DNCL-TECHZONE (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section id="information-we-collect">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Contact information (name, email address, phone number, company name)</li>
              <li>Business information (company size, industry, requirements)</li>
              <li>Communication preferences and correspondence</li>
              <li>Payment and billing information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Referral sources and search terms</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section id="how-we-use">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and manage orders</li>
              <li>To communicate with you about products, services, and updates</li>
              <li>To respond to inquiries, support requests, and customer service needs</li>
              <li>To send marketing communications (with your consent, where required)</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To analyze usage patterns and improve user experience</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section id="information-sharing">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operations (payment processing, analytics, hosting)</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
            </ul>
          </section>

          {/* Data Security */}
          <section id="data-security">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <div className="flex items-start gap-4">
                <FiLock className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We implement industry-standard security measures to protect your information, including encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              While we strive to protect your personal information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of any account credentials.
            </p>
          </section>

          {/* Cookies */}
          <section id="cookies">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, though this may affect site functionality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li><strong>Essential Cookies:</strong> Required for site functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section id="your-rights">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@dncltechzone.com" className="text-primary-600 hover:underline">privacy@dncltechzone.com</a>.
            </p>
          </section>

          {/* Data Retention */}
          <section id="data-retention">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* International Transfers */}
          <section id="international-transfers">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
            </p>
          </section>

          {/* Children's Privacy */}
          <section id="children-privacy">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section id="policy-updates">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="bg-primary-50 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-4">
              <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href="mailto:privacy@dncltechzone.com" className="text-primary-600 hover:underline">privacy@dncltechzone.com</a></p>
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
      </div>
    </div>
  )
}

