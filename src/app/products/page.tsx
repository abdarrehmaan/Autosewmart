'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Package, 
  Wrench, 
  SlidersHorizontal, 
  CheckCircle2, 
  FileText, 
  Phone, 
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { accessories } from '@/data/products';

const categories = [
  'All Products',
  'Hoops & Frames',
  'Threads & Spools',
  'Stabilizers',
  'Needles & Parts',
  'Software'
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filtered = accessories.filter((item) => {
    if (activeCategory === 'All Products') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        
        {/* Page Header */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center max-w-3xl">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#D4A853] mb-3">
              Accessories & Consumables
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Machine Accessories & Spare Parts
            </h1>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
              Equip your embroidery line with genuine magnetic hoops, high-tensile polyester threads, precision titanium needles, and specialized backing stabilizers.
            </p>
          </div>
        </section>

        {/* Feature Hero Highlight */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900 rounded-3xl overflow-hidden text-white p-8 lg:p-12 shadow-xl">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-[#D4A853] text-gray-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Factory Certified Supplies
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight">
                Zero-Friction Magnetic Hooping & High-Sheen Threads
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Avoid fabric distortion and hoop burn forever. Our commercial magnetic hoops clamp in seconds, reducing setup time by 60% while holding delicate silks to thick outerwear rock solid.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <div className="text-slate-400 font-bold">Hoop Burn</div>
                  <div className="text-white font-extrabold text-sm mt-0.5">100% Eliminated</div>
                </div>
                <div>
                  <div className="text-slate-400 font-bold">Thread Tensile</div>
                  <div className="text-white font-extrabold text-sm mt-0.5">Commercial Grade</div>
                </div>
                <div>
                  <div className="text-slate-400 font-bold">Dispatch</div>
                  <div className="text-white font-extrabold text-sm mt-0.5">Same-Day Shipping</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
              <Image
                src="/images/accessories.jpg"
                alt="Embroidery Accessories and Hoops"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1B4D7A] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1B4D7A] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 flex-grow leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-gray-100 text-xs">
                    <span className="text-gray-400 font-bold block mb-0.5">Configuration:</span>
                    <span className="text-gray-800 font-semibold">{item.specs}</span>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
                    <a
                      href={`https://wa.me/917268866359?text=Hi%2C%20I%20want%20to%20order%20or%20inquire%20about%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Order on WhatsApp</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-gray-100 hover:bg-[#1B4D7A] text-gray-800 hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spare Parts Guarantee */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <Wrench className="w-10 h-10 text-[#1B4D7A] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Need a Specific Machine Replacement Part?</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              We warehouse over 12,000 genuine spare parts including rotary hooks, main boards, solenoids, encoder sensors, and pantograph belts with guaranteed expedited dispatch.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#1B4D7A] hover:bg-[#0F3152] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-colors"
              >
                Inquire Spare Parts Inventory
              </Link>
              <a
                href="tel:+917268866359"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 hover:text-[#1B4D7A] px-6 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1B4D7A]" />
                Call (+91 72688 66359)
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
