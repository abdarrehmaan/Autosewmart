'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Factory, 
  Scissors, 
  GraduationCap, 
  Store, 
  Crown, 
  Target, 
  Home, 
  Building2, 
  Palette, 
  Gift,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const applicationsData = [
  {
    id: 'garments',
    title: 'Garment & Apparel Manufacturing',
    icon: Factory,
    image: '/images/emb-m4000.jpg',
    description: 'High-speed mass batch embroidery on polo shirts, hoodies, t-shirts, and jackets with unwavering repeat accuracy.',
    recommendedMachine: 'EMB-M4000 (4-Head) or EMB-HD6000 (6-Head)',
    machineSlug: 'multi-head-embroidery-machine',
    volume: 'High-Volume Production (5,000+ units/mo)',
    keyAdvantage: 'Synchronized multi-head productivity cuts unit cost by over 70% compared to single-needle workstations.'
  },
  {
    id: 'headwear',
    title: 'Custom Caps, Hats & Headwear',
    icon: Crown,
    image: '/images/emb-cap300.jpg',
    description: '3D puff foam and high-density direct embroidery across the 270° crown of snapbacks, trucker hats, dad caps, and beanies.',
    recommendedMachine: 'EMB-CAP300 (Specialty Cap)',
    machineSlug: 'cap-embroidery-machine',
    volume: 'On-Demand & Medium Production',
    keyAdvantage: 'Cylindrical cylinder arm prevents curved crown deformation and needle strikes at high speed.'
  },
  {
    id: 'uniforms',
    title: 'School & College Uniforms & Badges',
    icon: GraduationCap,
    image: '/images/stitch-detail.jpg',
    description: 'Crisp heraldic crests, school insignias, blazer badges, and monogrammed name tags with microscopic lettering clarity.',
    recommendedMachine: 'EMB-S1500 (Single-Head) or EMB-M4000',
    machineSlug: 'single-head-embroidery-machine',
    volume: 'Seasonal Spikes & Bulk Batches',
    keyAdvantage: 'High needle count (15 needles) handles complex multi-color crests without operator thread swaps.'
  },
  {
    id: 'boutique',
    title: 'Boutique Fashion & Haute Couture',
    icon: Palette,
    image: '/images/sew-c200.jpg',
    description: 'Artisanal decorative stitching, metallic gold thread filigree, and custom embellishment on silk, organza, and velvet.',
    recommendedMachine: 'SEW-C200 (Computerized Sewing)',
    machineSlug: 'computerized-sewing-machine',
    volume: 'Bespoke Atelier / Low Volume',
    keyAdvantage: 'Digital micro-tension control eliminates puckering on fragile, sheer, and stretch luxury textiles.'
  },
  {
    id: 'denim-workwear',
    title: 'Heavy Canvas, Denim & Workwear',
    icon: Scissors,
    image: '/images/sew-i500.jpg',
    description: 'High-stress structural seams, reinforced bar-tacking, and heavy embroidered patches on tough canvas, denim, and leather.',
    recommendedMachine: 'SEW-I500 (Industrial 5,000 SPM)',
    machineSlug: 'industrial-sewing-machine',
    volume: 'Continuous Heavy Duty Assembly',
    keyAdvantage: 'Direct-drive high-torque servo motor punches effortlessly through 16-ply denim and harness leather.'
  },
  {
    id: 'corporate-merch',
    title: 'Corporate Merchandise & Promo Products',
    icon: Building2,
    image: '/images/accessories.jpg',
    description: 'Rapid turnaround company logo branding on fleece vests, tote bags, laptop sleeves, and promotional giveaways.',
    recommendedMachine: 'EMB-S1500 (Single-Head Industrial)',
    machineSlug: 'single-head-embroidery-machine',
    volume: 'Flexible Short & Medium Runs',
    keyAdvantage: 'Fast magnetic framing enables quick turnaround for same-day and rush promotional orders.'
  }
];

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center max-w-3xl">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#D4A853] mb-3">
              Industry Solutions
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Engineered For Every Creative Sector
            </h1>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
              Explore how commercial manufacturers, fashion houses, uniform contractors, and boutique embroiderers scale output with Autosewmart precision.
            </p>
          </div>
        </section>

        {/* Applications Detailed Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
          <div className="space-y-16">
            {applicationsData.map((app, index) => {
              const Icon = app.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={app.id}
                  className={`grid lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-300 ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Photo Column (5 cols) */}
                  <div className={`lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 shadow-md ${
                    isEven ? '' : 'lg:col-start-8'
                  }`}>
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1B4D7A] shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Text Details (7 cols) */}
                  <div className={`lg:col-span-7 flex flex-col justify-center ${
                    isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D4A853] mb-1">
                      {app.volume}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                      {app.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                      {app.description}
                    </p>

                    <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                      <div className="text-xs font-bold text-[#1B4D7A] uppercase mb-1">Production Advantage:</div>
                      <div className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                        {app.keyAdvantage}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div>
                        <div className="text-[11px] text-gray-400 font-bold uppercase">Optimal Machine:</div>
                        <div className="text-sm font-bold text-gray-900">{app.recommendedMachine}</div>
                      </div>

                      <Link
                        href={`/machines/${app.machineSlug}`}
                        className="inline-flex items-center gap-2 bg-[#1B4D7A] hover:bg-[#0F3152] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all"
                      >
                        <span>View Matched Machine</span>
                        <ArrowRight className="w-4 h-4 text-[#D4A853]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Custom Application Consultation */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-12">
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl">
            <Sparkles className="w-10 h-10 text-[#D4A853] mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-extrabold">Have a Unique Fabric or Custom Needle Challenge?</h3>
            <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              Send our engineering laboratory a sample of your fabric. We will test hoop tensions, digitize test swatches, and record high-speed video verification before you commit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#D4A853] hover:bg-[#c49a48] text-gray-950 px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                Send Test Swatches
              </Link>
              <Link
                href="/machines"
                className="border border-slate-700 hover:border-slate-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
              >
                Browse All Equipment
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
