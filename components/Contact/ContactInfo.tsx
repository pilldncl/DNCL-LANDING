import { FiMail, FiMessageCircle, FiGlobe } from 'react-icons/fi'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email Us',
      description: 'Send us an email for inquiries',
      info: 'info@dncltechzone.com',
      link: 'mailto:info@dncltechzone.com',
    },
    {
      icon: FiMessageCircle,
      title: 'WhatsApp Chat',
      description: 'Preferred contact method - All communications via WhatsApp',
      info: 'Chat on WhatsApp',
      link: 'https://wa.me/16825616897',
      isExternal: true,
      isWhatsApp: true,
    },
    {
      icon: FiGlobe,
      title: 'Website',
      description: 'Visit our website',
      info: 'www.dncl-techzone.com',
      link: '/',
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          const Content = (
            <div className={`flex items-start space-x-4 p-4 rounded-lg transition-all ${
              method.isWhatsApp 
                ? 'bg-gradient-to-br from-[#25D366]/10 to-[#20BA5A]/5 border-2 border-[#25D366]/20 hover:border-[#25D366]/40 hover:shadow-lg' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                method.isWhatsApp 
                  ? 'bg-[#25D366]' 
                  : 'bg-primary-100'
              }`}>
                <Icon size={24} className={method.isWhatsApp ? 'text-white' : 'text-primary-600'} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-800">{method.title}</h3>
                  {method.isWhatsApp && (
                    <span className="px-2 py-0.5 rounded-full bg-[#25D366] text-white text-xs font-bold">
                      Preferred
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <p className={`font-semibold ${method.isWhatsApp ? 'text-[#25D366]' : 'text-primary-700'}`}>
                  {method.info}
                </p>
              </div>
            </div>
          )

          if (method.link) {
            if (method.isExternal) {
              return (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {Content}
                </a>
              )
            }
            return (
              <a key={index} href={method.link} className="block">
                {Content}
              </a>
            )
          }

          return <div key={index}>{Content}</div>
        })}
      </div>

      <div className="mt-8 p-6 bg-primary-50 rounded-lg">
        <h3 className="font-semibold text-primary-900 mb-2">Business Hours</h3>
        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  )
}

