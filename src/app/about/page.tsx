'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  Globe2, 
  Cpu, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Phone,
  Clock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center max-w-3xl">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#D4A853] mb-3">
              About Autosewmart
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Pioneering Industrial Precision Since 2001
            </h1>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
              We design, engineer, and support heavy commercial embroidery and sewing machinery trusted by over 18,500 apparel manufacturers across 45 countries.
            </p>
          </div>
        </section>

        {/* Showroom & Facility Visual Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] bg-gray-900 shadow-2xl border border-gray-200">
            <Image
              src="/images/showroom.jpg"
              alt="Autosewmart High-Tech Machinery Experience Showroom"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#D4A853]">Engineering Center & Showroom</span>
                <h3 className="text-xl lg:text-2xl font-bold">Autosewmart Global Demonstration Facility</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">Clients can inspect, test-run, and train directly on production machinery before delivery.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D4A853] hover:bg-[#c49a48] text-gray-950 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shrink-0"
              >
                <span>Book Showroom Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Bar */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#D4A853]">18,500+</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Installed Machinery</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-white">45+</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Countries Serviced</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#25D366]">99.4%</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Verified Uptime</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-white">24/7</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Engineer Support</div>
            </div>
          </div>
        </section>

        {/* Mission & Engineering Principles */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A853]">Our Philosophy</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">
                Built For Demanding Industrial Demands, Not Planned Obsolescence
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                At Autosewmart, we believe an industrial embroidery machine is a 10-year capital investment that must produce uninterrupted cash flow. We build our machinery with reinforced cast-iron chassis, direct-drive brushless servo motors, and closed-loop Japanese rotary hook assemblies.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Every unit undergoes an intensive 72-hour continuous test stitching protocol at maximum RPM before leaving our facility, ensuring that when it arrives at your factory, it begins producing profit on Day One.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <Cpu className="w-6 h-6 text-[#1B4D7A] mb-2" />
                  <h4 className="font-bold text-sm text-gray-900">Digital Micro-Stepping</h4>
                  <p className="text-xs text-gray-600 mt-1">0.05mm pantograph resolution for crystal sharp typography.</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <ShieldCheck className="w-6 h-6 text-[#D4A853] mb-2" />
                  <h4 className="font-bold text-sm text-gray-900">2-3 Year Warranty</h4>
                  <p className="text-xs text-gray-600 mt-1">Full replacement coverage on electronics and mechanical assemblies.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src="/images/stitch-detail.jpg"
                alt="Precision metallic thread embroidery detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs text-[#D4A853] font-bold uppercase tracking-wide">Macro Precision</div>
                <div className="text-lg font-bold">Micrometer-level gold bullion & thread alignment</div>
              </div>
            </div>

          </div>
        </section>

        {/* Global Support Network */}
        <section className="bg-slate-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center max-w-3xl">
            <Globe2 className="w-10 h-10 text-[#1B4D7A] mx-auto mb-3" />
            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
              Global Support Network & Factory Certified Engineers
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              When you choose Autosewmart, you gain access to certified technicians who handle freight, rigging, professional leveling, power stabilization, and comprehensive operator training right on your factory floor.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#1B4D7A] hover:bg-[#0F3152] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                Connect With Regional Dealer
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
