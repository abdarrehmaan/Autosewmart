'use client';

import React from 'react';
import Image from 'next/image';
import { Camera, Sparkles, ZoomIn } from 'lucide-react';
import Link from 'next/link';

const galleryItems = [
  {
    title: 'Precision Stitching Detail',
    subtitle: 'Metallic gold & royal blue threads on luxury navy cashmere',
    image: '/images/stitch-detail.jpg',
    span: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
    badge: 'Artisan Quality'
  },
  {
    title: 'High-Tech Industrial Showroom',
    subtitle: 'State-of-the-art machinery testing and client demonstration center',
    image: '/images/showroom.jpg',
    span: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
    badge: 'Showroom & R&D'
  },
  {
    title: 'Cap & Headwear 3D Puff',
    subtitle: 'Flawless 270° tubular embroidery on structured athletic caps',
    image: '/images/emb-cap300.jpg',
    span: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
    badge: 'Cap Specialist'
  },
  {
    title: 'Multi-Head Commercial Production',
    subtitle: '4-head synchronized embroidery operating at 1,000 stitches/min',
    image: '/images/emb-m4000.jpg',
    span: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
    badge: 'High Throughput'
  },
  {
    title: 'Precision Framing & Accessories',
    subtitle: 'Magnetic hoops, titanium needles, and colorfast polyester thread vault',
    image: '/images/accessories.jpg',
    span: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
    badge: 'Parts & Hoops'
  },
  {
    title: 'Heavy-Duty Industrial Lockstitch',
    subtitle: 'High-speed 5,000 SPM direct-drive sewing on commercial denim and canvas',
    image: '/images/sew-i500.jpg',
    span: 'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto',
    badge: 'Heavy Apparel'
  }
];

export default function ProductGallery() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4A853] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Craftsmanship In Action
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Witness the microscopic accuracy, high-speed commercial throughput, and genuine industrial reliability of Autosewmart machinery.
          </p>
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-900 min-h-[260px] ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-900/30 to-transparent transition-opacity" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#1B4D7A]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                  {item.badge}
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-[#D4A853] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-300 mt-1 max-w-md line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/applications"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-xs transition-all hover:border-[#1B4D7A]"
          >
            <span>Explore All Industry Applications & Samples</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
