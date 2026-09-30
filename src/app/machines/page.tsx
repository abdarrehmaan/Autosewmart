'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Gauge, 
  Target, 
  Maximize2, 
  CheckCircle2, 
  FileText, 
  MessageCircle,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MachineComparison from '@/components/MachineComparison';
import { products } from '@/data/products';

const categories = [
  'All Machines',
  'Single-Head',
  'Multi-Head',
  'Computerized Sewing',
  'Industrial Sewing',
  'Cap & Tubular'
];

export default function MachinesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Machines');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Machines' ||
      product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Cap & Tubular' && product.category.toLowerCase().includes('cap'));

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center max-w-3xl">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#D4A853] mb-3">
              Commercial Machinery Catalog
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Industrial Embroidery & Sewing Systems
            </h1>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
              Explore our complete range of precision-crafted single-head, multi-head, cap-specialized, and heavy-duty sewing equipment.
            </p>

            {/* Live Search Bar */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search machine models (e.g. EMB-S1500, 4-Head, Cap, Lockstitch)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] text-sm text-gray-900"
              />
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-xs">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between overflow-x-auto gap-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gray-500 hidden sm:block" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 hidden sm:block mr-2">
                Category:
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1B4D7A] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-xs font-semibold text-gray-500 whitespace-nowrap ml-4">
              Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> machines
            </div>
          </div>
        </section>

        {/* Machines Listing Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-16">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
              <p className="text-lg font-bold text-gray-800">No machinery matching your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Machines');
                  setSearchQuery('');
                }}
                className="mt-4 text-sm font-semibold text-[#1B4D7A] hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl border border-gray-200 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
                >
                  {/* Photo Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Model Pill */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#1B4D7A] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {product.model}
                      </span>
                      {product.badge && (
                        <span className="bg-[#D4A853] text-gray-950 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="bg-white/95 backdrop-blur-md text-gray-900 text-[11px] font-bold px-3 py-1 rounded-lg shadow-xs">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1B4D7A] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed flex-grow">
                      {product.shortDescription}
                    </p>

                    {/* Specs Box */}
                    <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-gray-100 text-center">
                      <div className="bg-slate-50 rounded-xl p-2 border border-gray-100">
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Speed</div>
                        <div className="text-xs font-bold text-gray-900 mt-0.5">{product.specs.speed}</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-2 border border-gray-100">
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Needles</div>
                        <div className="text-xs font-bold text-gray-900 mt-0.5">{product.specs.needles.split(' ')[0]}</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-2 border border-gray-100">
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Field</div>
                        <div className="text-xs font-bold text-gray-900 mt-0.5 truncate">{product.specs.embroideryArea.split(' ')[0]}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex items-center justify-between gap-3 pt-2">
                      <Link
                        href={`/machines/${product.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-[#1B4D7A] text-gray-900 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-gray-200 hover:border-[#1B4D7A]"
                      >
                        <span>Machine Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-[#D4A853] hover:bg-[#c49a48] text-gray-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
                      >
                        Get Quote
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Embedded Comparison Section */}
        <MachineComparison />

        {/* Full Consultation Banner */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 pt-16">
          <div className="bg-gradient-to-r from-[#1B4D7A] to-[#0F3152] rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D4A853]">Machinery Advisory</span>
              <h3 className="text-2xl lg:text-3xl font-extrabold mt-1">Need assistance sizing the right machine?</h3>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                Our senior textile engineers will analyze your stitch counts, production volumes, and fabric types to calculate your exact ROI.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A853] hover:bg-[#c49a48] text-gray-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-md"
              >
                Schedule Engineering Call
              </Link>
              <a
                href="https://wa.me/917268866359"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors border border-white/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp Us
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
