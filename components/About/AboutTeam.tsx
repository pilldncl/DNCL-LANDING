export default function AboutTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose DNCL-TECHZONE?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Industry Expertise
              </h3>
              <p className="text-gray-700">
                With years of experience serving over 1,200 enterprise clients worldwide, 
                we understand the unique needs of businesses across various industries.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Proven Track Record
              </h3>
              <p className="text-gray-700">
                Our 4.6 seller rating with 2,500+ reviews speaks to our commitment to 
                customer satisfaction and quality delivery.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Volume Capability
              </h3>
              <p className="text-gray-700">
                Processing over 10,000 devices monthly, we have the infrastructure and 
                processes to handle your bulk purchasing needs efficiently.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Certified Quality
              </h3>
              <p className="text-gray-700">
                Every device undergoes professional inspection and grading, ensuring 
                industry-ready quality for business, healthcare, education, and logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

