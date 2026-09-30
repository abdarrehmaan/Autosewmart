'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Zap, Target, Maximize2, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1B4D7A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column (7 cols) */}
          <div 
            className={`lg:col-span-6 flex flex-col items-start transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/80 text-[#1B4D7A] font-semibold text-xs tracking-wide mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Next-Gen Industrial Series 2026</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Precision. <br />
              Performance. <br />
              <span className="text-[#1B4D7A] relative inline-block">
                Perfect Embroidery.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D4A853]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Professional embroidery and industrial sewing machines engineered for micrometer precision, non-stop commercial productivity, and world-class garment finishing.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <Link 
                href="/machines"
                className="bg-[#1B4D7A] hover:bg-[#0F3152] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-xl group"
              >
                <span>Explore Machines</span>
                <ArrowRight className="w-5 h-5 text-[#D4A853] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-gray-300 hover:border-[#1B4D7A] text-gray-800 hover:text-[#1B4D7A] bg-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all shadow-xs"
              >
                Get a Quote
              </Link>
            </div>
            
            {/* Key Value Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 w-full">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">1,200 <span className="text-xs text-[#D4A853]">SPM</span></span>
                <span className="text-xs text-gray-500 font-medium">Ultra High Speed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">15 <span className="text-xs text-[#D4A853]">Needles</span></span>
                <span className="text-xs text-gray-500 font-medium">Automatic Colorways</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">500<span className="text-xs text-[#D4A853]">×350mm</span></span>
                <span className="text-xs text-gray-500 font-medium">Expanded Field</span>
              </div>
            </div>
          </div>
          
          {/* Right Product Photograph Display (6 cols) */}
          <div 
            className={`lg:col-span-6 relative transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Visual Card Container */}
            <div className="relative rounded-3xl bg-gradient-to-b from-white to-slate-100/80 p-3 sm:p-5 shadow-2xl border border-gray-200/80 group">
              
              {/* Product Photograph */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                <Image
                  src="/images/emb-s1500.jpg"
                  alt="Autosewmart EMB-S1500 Single Head Embroidery Machine"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-80" />

                {/* Model Label Badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4A853]">Flagship Model</span>
                    <h3 className="text-lg font-bold text-white">EMB-S1500 Industrial Master</h3>
                  </div>
                  <Link
                    href="/machines/single-head-embroidery-machine"
                    className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white text-white hover:text-gray-900 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
                  >
                    View Specs
                  </Link>
                </div>
              </div>

              {/* Floating Live Tech Spec Cards */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1B4D7A]">
                  <Zap className="w-5 h-5 fill-[#1B4D7A]/20" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Speed Rating</div>
                  <div className="text-sm font-bold text-gray-900">1,200 Stitches / Min</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#D4A853]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Factory Warranty</div>
                  <div className="text-sm font-bold text-gray-900">2-Year Complete Coverage</div>
                </div>
              </div>
            </div>

            {/* Ambient Back Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/50 via-amber-100/30 to-blue-50/50 rounded-full blur-3xl opacity-70 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
