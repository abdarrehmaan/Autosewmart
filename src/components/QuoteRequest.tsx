'use client';

import { Send, MessageCircle } from 'lucide-react';

export default function QuoteRequest() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section className="py-20 px-6" id="quote">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1B4D7A] to-[#0F3152] rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 p-10 md:p-16">
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col justify-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Embroidery Business?</h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                Tell us about your production requirements and our team will help you choose the right machine. We offer tailored solutions for businesses of all sizes.
              </p>
              
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Need immediate assistance?</h3>
                <p className="text-blue-100 mb-6">Chat with our sales team right now on WhatsApp for a quick response.</p>
                <a
                  href="#whatsapp"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Request a Quotation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                  />
                </div>

                <div>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-900">Machine Interested In</option>
                    <option value="single-head" className="text-gray-900">Single Head</option>
                    <option value="multi-head" className="text-gray-900">Multi-Head</option>
                    <option value="sewing-machine" className="text-gray-900">Sewing Machine</option>
                    <option value="industrial" className="text-gray-900">Industrial</option>
                    <option value="cap-embroidery" className="text-gray-900">Cap Embroidery</option>
                    <option value="heavy-duty" className="text-gray-900">Heavy-Duty</option>
                    <option value="not-sure" className="text-gray-900">Not Sure</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Monthly Production Requirement"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A853] hover:bg-[#C49A48] text-white font-semibold rounded-xl px-8 py-3.5 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
