import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#1B4D7A]" />,
      title: 'Address',
      content: '18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India',
      link: 'https://maps.app.goo.gl/DSVMQrRYSuSc4oVx9',
      linkLabel: 'View on Google Maps',
    },
    {
      icon: <Phone className="w-6 h-6 text-[#1B4D7A]" />,
      title: 'Phone',
      content: '+91 72688 66359',
      link: 'tel:+917268866359',
      linkLabel: 'Call Now',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#1B4D7A]" />,
      title: 'WhatsApp',
      content: '+91 72688 66359',
      link: 'https://wa.me/917268866359',
      linkLabel: 'Chat on WhatsApp',
    },
    {
      icon: <Mail className="w-6 h-6 text-[#1B4D7A]" />,
      title: 'Email',
      content: 'info@autosewmart.com',
      link: 'mailto:info@autosewmart.com',
      linkLabel: 'Send Email',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#1B4D7A]" />,
      title: 'Business Hours',
      content: 'Open Daily (Mon - Sun): 10:00 AM – 8:00 PM',
      badge: 'Open Now',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#D4A853] mb-2">
            Local Service · Shopping & Retail · Machine Shop
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Showroom</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We deal in all types of sewing machines ranging from household to industrial sewing machines, along with a huge variety of embroidery and automatic sewing machines, plus essential accessories including steam irons and cutting machines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#1B4D7A]/10 p-3 rounded-2xl flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.title}</h4>
                        {item.badge && (
                          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{item.content}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4D7A] hover:text-[#0F3152] mt-1"
                        >
                          <span>{item.linkLabel}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Card */}
          <div className="h-full min-h-[420px] flex flex-col">
            <div className="w-full flex-1 bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-xl min-h-[380px]">
              {/* Background ambient map effect */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/80 border border-sky-800/60 rounded-full text-sky-400 text-xs font-semibold mb-4">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Visit Our Prayagraj Showroom</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                  18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 bg-white/10 rounded-lg text-slate-300">Near Basauna Rd</span>
                  <span className="px-3 py-1 bg-white/10 rounded-lg text-slate-300">Shams Nagar</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg font-semibold">Open Daily till 8:00 PM</span>
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="relative z-10 my-6 w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg bg-slate-800">
                <iframe
                  title="Autosewmart Prayagraj Showroom Map"
                  src="https://maps.google.com/maps?q=25.4228808,81.8095766&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.app.goo.gl/DSVMQrRYSuSc4oVx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1B4D7A] hover:bg-[#2563eb] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all group"
                >
                  <MapPin className="w-4 h-4 text-[#D4A853]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://wa.me/917268866359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Get Directions via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
