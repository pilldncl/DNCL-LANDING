import { FiShield, FiTrendingUp, FiUsers, FiCheckCircle } from 'react-icons/fi'

export default function AboutValues() {
  const values = [
    {
      icon: FiShield,
      title: 'Trust & Transparency',
      description: 'We believe in open communication and honest grading. Every device is evaluated with clear, transparent criteria.',
    },
    {
      icon: FiCheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing and inspection ensure that every device meets our high standards before reaching your hands.',
    },
    {
      icon: FiTrendingUp,
      title: 'Scalability',
      description: 'Whether you need 10 devices or 10,000, we have the infrastructure to support your growth.',
    },
    {
      icon: FiUsers,
      title: 'Partnership',
      description: 'We view our clients as partners, working together to achieve mutual success in the enterprise technology space.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

