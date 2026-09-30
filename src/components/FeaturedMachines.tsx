'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gauge, Target, Maximize2, FileText, CheckCircle2 } from 'lucide-react';
import { products } from '@/data/products';

export default function FeaturedMachines() {
  return (
    <section id="machines" className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#D4A853] mb-3">
            <span>Precision Engineering</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Machinery
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl text-base">
            From nimble single-head boutique units to 24/7 industrial multi-head powerhouses, explore our commercial machinery line.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Link
            href="/machines"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1B4D7A] hover:text-[#0F3152] border-b-2 border-[#1B4D7A] pb-1 transition-all group"
          >
            <span>View All Machinery & Filters</span>
            <ArrowRight className="w-4 h-4 text-[#D4A853] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
          >
            {/* Real Machine Image Container */}
            <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Badge & Model */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#1B4D7A] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {product.model}
                </span>
                {product.badge && (
                  <span className="bg-[#D4A853] text-gray-900 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Category pill */}
              <div className="absolute bottom-3 right-3">
                <span className="bg-white/90 backdrop-blur-md text-gray-800 text-[11px] font-semibold px-3 py-1 rounded-lg shadow-xs">
                  {product.category}
                </span>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1B4D7A] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-2 leading-relaxed">
                {product.shortDescription}
              </p>
              
              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-gray-100 text-center">
                <div className="bg-gray-50/80 rounded-xl p-2.5 border border-gray-100">
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Speed</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">{product.specs.speed}</div>
                </div>
                <div className="bg-gray-50/80 rounded-xl p-2.5 border border-gray-100">
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Needles</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">{product.specs.needles.split(' ')[0]}</div>
                </div>
                <div className="bg-gray-50/80 rounded-xl p-2.5 border border-gray-100">
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Field</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5 truncate">{product.specs.embroideryArea.split(' ')[0]}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between gap-3 pt-2">
                <Link
                  href={`/machines/${product.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-[#1B4D7A] text-gray-800 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-gray-200 hover:border-[#1B4D7A] group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#D4A853] hover:bg-[#c49a48] text-gray-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
                >
                  Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
