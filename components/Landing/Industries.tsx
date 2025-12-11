export default function Industries() {
  const industries = [
    'Small Businesses',
    'Wholesale Distributors',
    'Healthcare Providers',
    'Educational Institutions',
    'Hotels & Hospitality',
    'Law Enforcement',
    'Government Agencies',
    'Insurance Providers',
    'Carriers & MVNOs',
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
            Serving Partners Across Industries
          </h2>
          <p className="text-lg text-gray-600">
            Our enterprise-grade devices and solutions support organizations across diverse sectors, 
            each with unique requirements and compliance needs.
          </p>
        </div>
        <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-gray-200 bg-gray-50 p-6 text-center transition hover:border-primary-500 hover:bg-primary-50"
            >
              <h3 className="font-semibold text-gray-800">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
