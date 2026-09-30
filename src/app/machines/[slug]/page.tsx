'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Download,
  FileText,
  Gauge,
  Target,
  Maximize2,
  Settings,
  Weight,
  Zap,
  ShieldCheck,
  Layers,
  Ruler,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { products } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6 text-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Machine Not Found</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The machine model you requested could not be located in our commercial catalog.
            </p>
            <Link
              href="/machines"
              className="inline-flex items-center gap-2 bg-[#1B4D7A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0F3152] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Machines Catalog</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Related products
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#1B4D7A] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/machines" className="hover:text-[#1B4D7A] transition-colors">
              Machinery
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-bold truncate">{product.name}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-6 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Product Image & Gallery (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-900 shadow-xl border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#1B4D7A] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    {product.model}
                  </span>
                  {product.badge && (
                    <span className="bg-[#D4A853] text-gray-950 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Supporting Angles / Detail Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: 'Front Angle', img: product.image },
                  { label: 'Stitch Detail', img: '/images/stitch-detail.jpg' },
                  { label: 'Accessories', img: '/images/accessories.jpg' },
                  { label: 'Showroom', img: '/images/showroom.jpg' },
                ].map((thumb, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 border-2 border-transparent hover:border-[#1B4D7A] cursor-pointer transition-all shadow-xs"
                  >
                    <Image
                      src={thumb.img}
                      alt={thumb.label}
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-1.5">
                      <span className="text-[10px] text-white font-bold leading-tight drop-shadow-sm">
                        {thumb.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Info & Direct Inquiries (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A853] mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-base font-bold text-[#1B4D7A] mt-1 mb-4">
                Model: {product.model}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Quick Specs Highlight Box */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-gray-200/80 mb-6 text-center">
                <div>
                  <Gauge className="w-5 h-5 mx-auto text-[#1B4D7A] mb-1" />
                  <div className="text-[10px] text-gray-500 font-bold uppercase">Speed</div>
                  <div className="font-extrabold text-xs text-gray-900">{product.specs.speed}</div>
                </div>
                <div className="border-x border-gray-200">
                  <Target className="w-5 h-5 mx-auto text-[#1B4D7A] mb-1" />
                  <div className="text-[10px] text-gray-500 font-bold uppercase">Needles</div>
                  <div className="font-extrabold text-xs text-gray-900">{product.specs.needles}</div>
                </div>
                <div>
                  <Maximize2 className="w-5 h-5 mx-auto text-[#1B4D7A] mb-1" />
                  <div className="text-[10px] text-gray-500 font-bold uppercase">Area</div>
                  <div className="font-extrabold text-xs text-gray-900 truncate">{product.specs.embroideryArea}</div>
                </div>
              </div>

              {/* Primary Conversion CTAs */}
              <div className="flex flex-col gap-3 mb-6">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-[#1B4D7A] hover:bg-[#0F3152] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <FileText className="w-4 h-4 text-[#D4A853]" />
                  <span>Request Official Quotation</span>
                </Link>

                <a
                  href={`https://wa.me/917268866359?text=Hi%2C%20I%20am%20interested%20in%20a%20quotation%20and%20demonstration%20for%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.model)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <a
                  href="tel:+917268866359"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#1B4D7A] text-gray-700 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1B4D7A]" />
                  <span>Call (+91 72688 66359)</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#1B4D7A] text-gray-700 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Book Live Demo</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Specifications Matrix */}
        <section className="bg-gray-50/70 py-16 border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4A853]">Engineering Specifications</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mt-1">
                Full Technical Breakdown
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                
                <div className="p-6 lg:p-8 space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Stitching Speed</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.speed}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Needle Capacity</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.needles}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Maximum Embroidery Area</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.embroideryArea}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-500 font-medium">Number of Heads</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.heads || '1 Head'}</span>
                  </div>
                </div>

                <div className="p-6 lg:p-8 space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Machine Dimensions</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.dimensions}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Net Weight</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.weight}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Power Requirements</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.power}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-500 font-medium">Thread Spool Colors</span>
                    <span className="text-sm font-bold text-gray-900">{product.specs.threadColors}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Features & Suitable Applications */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Features list */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Engineering Highlights</h3>
              <div className="space-y-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#1B4D7A] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable For */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Business Uses</h3>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {product.suitableFor.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-[#1B4D7A] text-xs font-bold"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                    {item}
                  </span>
                ))}
              </div>

              {/* Warranty Card */}
              <div className="bg-gradient-to-br from-[#1B4D7A] to-[#0F3152] text-white p-6 sm:p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#D4A853]" />
                  <h4 className="text-lg font-bold">Standard Comprehensive Warranty</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  {product.warranty}. Includes remote diagnostic telemetry, initial onsite operator training, and access to genuine replacement parts.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D4A853] hover:bg-[#c49a48] text-gray-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
                >
                  <span>Request Full Warranty Policy</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Related Machines */}
        <section className="bg-slate-50 py-16 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">Compare Similar Machinery</h3>
                <p className="text-sm text-gray-600 mt-1">Other industrial models engineered for your workflow</p>
              </div>
              <Link href="/machines" className="text-sm font-bold text-[#1B4D7A] hover:underline">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((m) => (
                <Link
                  key={m.id}
                  href={`/machines/${m.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] font-bold text-[#1B4D7A]">{m.model}</div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#1B4D7A] transition-colors line-clamp-1">
                      {m.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{m.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
