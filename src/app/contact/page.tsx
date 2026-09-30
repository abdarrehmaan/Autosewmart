'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Building2,
  Headphones
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<'quote' | 'demo' | 'parts'>('quote');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center max-w-3xl">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#D4A853] mb-3">
              Sales, Demos & Support
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Get in Touch with Our Machinery Team
            </h1>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
              Whether you need customized machine sizing, a live demonstration at our experience showroom, or emergency technical support, our engineers are ready.
            </p>
          </div>
        </section>

        {/* Contact Form & Information */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Info & Regional Centers (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* WhatsApp Quick Box */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Instant WhatsApp Chat</h3>
                    <span className="text-xs text-green-700 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Specialists Online Now
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Chat directly with an embroidery and sewing machinery engineer. Send sketches, garment requirements, or ask technical questions.
                </p>
                <a
                  href="https://wa.me/917268866359?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20embroidery%20or%20sewing%20machine%20quotation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Chat on WhatsApp (+91 72688 66359)
                </a>
              </div>

              {/* Direct Info List */}
              <div className="bg-slate-50 rounded-3xl border border-gray-200/80 p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Direct Contact Details</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D7A]/10 flex items-center justify-center text-[#1B4D7A] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Showroom & Machine Shop</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">
                      18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India
                    </div>
                    <a
                      href="https://maps.app.goo.gl/DSVMQrRYSuSc4oVx9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-bold text-[#1B4D7A] hover:underline mt-1"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D7A]/10 flex items-center justify-center text-[#1B4D7A] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Telephone & WhatsApp</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">
                      <a href="tel:+917268866359" className="hover:text-[#1B4D7A]">+91 72688 66359</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D7A]/10 flex items-center justify-center text-[#1B4D7A] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Email Inquiries</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">
                      <a href="mailto:sales@autosewmart.com" className="hover:text-[#1B4D7A]">sales@autosewmart.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D7A]/10 flex items-center justify-center text-[#1B4D7A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Operating Hours</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">
                      Open Daily (Mon – Sun): 10:00 AM – 8:00 PM
                    </div>
                    <span className="inline-block mt-1 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Open Now
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Tabbed Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-xl">
                
                {/* Form Mode Selector */}
                <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-2xl mb-8">
                  <button
                    type="button"
                    onClick={() => setInquiryType('quote')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      inquiryType === 'quote'
                        ? 'bg-white text-[#1B4D7A] shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Request Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('demo')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      inquiryType === 'demo'
                        ? 'bg-white text-[#1B4D7A] shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Book Showroom Demo
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('parts')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      inquiryType === 'parts'
                        ? 'bg-white text-[#1B4D7A] shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Parts & Service
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Inquiry Received!</h3>
                    <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
                      Thank you. An engineering representative from Autosewmart will review your specifications and contact you within 2 hours with pricing and brochures.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-bold text-[#1B4D7A] hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Apparel LLC"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Machine Model Interested In
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm bg-white">
                          <option value="emb-s1500">EMB-S1500 (Single Head 15-Needle)</option>
                          <option value="emb-m4000">EMB-M4000 (4-Head Commercial)</option>
                          <option value="emb-cap300">EMB-CAP300 (Cap Specialist)</option>
                          <option value="emb-hd6000">EMB-HD6000 (6-Head Heavy Duty)</option>
                          <option value="sew-c200">SEW-C200 (Computerized Sewing)</option>
                          <option value="sew-i500">SEW-I500 (Industrial 5000 SPM)</option>
                          <option value="accessories">Accessories / Magnetic Hoops</option>
                          <option value="undecided">Not Sure - Need Guidance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Estimated Monthly Production
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm bg-white">
                          <option value="1-500">Under 500 pieces / month</option>
                          <option value="500-2000">500 – 2,000 pieces / month</option>
                          <option value="2000-10000">2,000 – 10,000 pieces / month</option>
                          <option value="10000+">10,000+ pieces / month (Industrial)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Specific Project Details or Questions
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about the fabrics, stitch designs, or custom requirements for your operation..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1B4D7A] hover:bg-[#0F3152] text-white py-4 rounded-xl font-bold text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#D4A853]" />
                      <span>
                        {inquiryType === 'quote' && 'Submit Quotation Request'}
                        {inquiryType === 'demo' && 'Schedule Live Showroom Demo'}
                        {inquiryType === 'parts' && 'Request Spare Parts Inventory'}
                      </span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* Showroom Interactive Map Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-16">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/80 border border-sky-800/60 rounded-full text-sky-400 text-xs font-semibold mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Local Service · Shopping & Retail · Machine Shop</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Visit Autosewmart Prayagraj
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mb-4">
                  We deal in all types of sewing machines ranging from household to industrial sewing machines. Along with we have a huge variety of Embroidery and Automatic Sewing machines. And other essential accessories including steam iron, cutting machine etc.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="font-semibold text-white">📍 18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India</span>
                  <span className="text-slate-500">•</span>
                  <span>Near Basauna Rd & Shams Nagar</span>
                  <span className="text-slate-500">•</span>
                  <span className="px-2.5 py-0.5 bg-green-500/20 text-green-300 border border-green-500/30 rounded-md font-bold">Open Daily 10:00 – 20:00</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="https://maps.app.goo.gl/DSVMQrRYSuSc4oVx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1B4D7A] hover:bg-[#2563eb] text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-md transition-all group"
                >
                  <MapPin className="w-4 h-4 text-[#D4A853]" />
                  <span>Open in Google Maps</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="https://wa.me/917268866359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-2xl font-bold text-sm shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Location on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="relative z-10 mt-8 w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/80 shadow-inner bg-slate-800">
              <iframe
                title="Autosewmart Prayagraj Showroom Location Map"
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
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
