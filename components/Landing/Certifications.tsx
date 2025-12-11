import { FiShield, FiLock, FiCheckCircle, FiAward, FiTrendingUp, FiUsers } from 'react-icons/fi'

const trustIndicators = [
  {
    icon: <FiShield className="text-primary-700" size={24} />,
    title: 'Quality-Focused Operations',
    description: 'Rigorous quality control processes',
  },
  {
    icon: <FiLock className="text-primary-700" size={24} />,
    title: 'Secure Data Handling',
    description: 'Data protection best practices',
  },
  {
    icon: <FiCheckCircle className="text-primary-700" size={24} />,
    title: 'Proven Track Record',
    description: '1,200+ satisfied enterprise clients',
  },
  {
    icon: <FiAward className="text-primary-700" size={24} />,
    title: 'Industry Best Practices',
    description: 'Professional grading & inspection',
  },
]

export default function Certifications() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.1) 50%, transparent 70%)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Trusted Operations & Quality Standards
          </h2>
          <p className="mt-3 text-gray-600">
            Our commitment to quality, security, and operational excellence ensures your enterprise requirements are met.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-xl border-2 border-gray-200 bg-white p-6 text-center shadow-md transition-all hover:border-primary-400 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 shadow-sm group-hover:from-primary-200 group-hover:to-primary-300 transition-all">
                {indicator.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">{indicator.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{indicator.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-xl border-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white p-8 shadow-lg">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">99.3%</div>
                <div className="mt-1 text-sm font-semibold text-gray-700">Quality Pass Rate</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">48hr</div>
                <div className="mt-1 text-sm font-semibold text-gray-700">Average Processing Time</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">24/7</div>
                <div className="mt-1 text-sm font-semibold text-gray-700">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

