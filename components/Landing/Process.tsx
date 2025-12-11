export default function Process() {
  const processSteps = [
    { step: 'Sourced', description: 'Acquired from vetted suppliers' },
    { step: 'Inspected', description: 'Individually tested' },
    { step: 'Graded', description: 'A–B grade assigned' },
    { step: 'Cleaned', description: 'Sanitized & data wiped' },
    { step: 'QA Passed', description: 'Final check approved' },
  ]

  const features = [
    {
      title: 'Industry ready.',
      description: 'Devices are certified for business, healthcare, education, and logistics — arriving ready for use or resale.',
    },
    {
      title: 'Professionally graded.',
      description: 'We inspect, clean, and grade each unit. Transparent A–B grade descriptions, always.',
    },
    {
      title: 'Volume-capable.',
      description: 'Scalable supply for bulk purchasing, recurring programs, and just-in-time fulfillment.',
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            A Proven Process That Delivers Quality at Scale
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our rigorous, transparent workflow ensures every device meets enterprise standards before delivery. 
            From initial sourcing to final quality assurance, we maintain consistency at scale.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group rounded-xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:border-primary-300 hover:-translate-y-1">
              <div className="mb-4 h-1 w-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-4 text-primary-700 group-hover:text-primary-800 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 mb-12 shadow-lg">
            <p className="text-center text-gray-700 text-lg leading-relaxed font-medium">
              From sourcing to final inspection, every device goes through our strict,
              transparent workflow — ensuring reliability, performance, and trust for every partner we serve.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {processSteps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center group">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-3xl font-bold text-white shadow-xl transform transition-all group-hover:scale-110 group-hover:shadow-2xl">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">{item.step}</h4>
                  <p className="mt-1 text-sm text-gray-600 max-w-[140px] leading-tight">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden h-1 w-12 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 mx-4 md:block rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
