'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Scissors, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-[#1B4D7A] flex items-center justify-center text-white shadow-xs">
                <Scissors className="w-5 h-5 text-[#D4A853]" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Auto<span className="text-[#D4A853]">sewmart</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-xs sm:text-sm leading-relaxed">
              Precision commercial embroidery machines, industrial lockstitch workstations, and magnetic framing systems engineered for relentless 24/7 commercial performance.
            </p>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors w-fit">About Autosewmart</Link>
              <Link href="/machines" className="text-gray-400 hover:text-white transition-colors w-fit">Machinery Catalog</Link>
              <Link href="/applications" className="text-gray-400 hover:text-white transition-colors w-fit">Industry Applications</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors w-fit">Contact & Showroom</Link>
            </div>
          </div>

          {/* Machinery Models */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6 text-[#D4A853]">Machinery Systems</h4>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm">
              <Link href="/machines/single-head-embroidery-machine" className="text-gray-400 hover:text-white transition-colors w-fit">
                Single Head (EMB-S1500)
              </Link>
              <Link href="/machines/multi-head-embroidery-machine" className="text-gray-400 hover:text-white transition-colors w-fit">
                Multi-Head 4-Head (EMB-M4000)
              </Link>
              <Link href="/machines/cap-embroidery-machine" className="text-gray-400 hover:text-white transition-colors w-fit">
                Cap Specialist (EMB-CAP300)
              </Link>
              <Link href="/machines/heavy-duty-embroidery-machine" className="text-gray-400 hover:text-white transition-colors w-fit">
                Heavy-Duty 6-Head (EMB-HD6000)
              </Link>
              <Link href="/machines/computerized-sewing-machine" className="text-gray-400 hover:text-white transition-colors w-fit">
                Computerized Sewing (SEW-C200)
              </Link>
              <Link href="/machines/industrial-sewing-machine" className="text-gray-400 hover:text-white transition-colors w-fit">
                Industrial Lockstitch (SEW-I500)
              </Link>
            </div>
          </div>

          {/* Products & Accessories */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6 text-[#D4A853]">Products & Supplies</h4>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm">
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors w-fit">Magnetic Mighty Hoops</Link>
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors w-fit">Poly-Stitch Thread Vaults</Link>
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors w-fit">Backing & Stabilizer Rolls</Link>
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors w-fit">Titanium Coated Needles</Link>
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors w-fit">Digitizing & Fleet Software</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors w-fit">Genuine Replacement Parts</Link>
            </div>
          </div>

          {/* Connect & Support */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6 text-[#D4A853]">Sales & Hotline</h4>
            <div className="flex flex-col space-y-3.5 mb-6 text-xs sm:text-sm">
              <a href="tel:+917268866359" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-fit">
                <Phone className="w-4 h-4 text-[#D4A853]" />
                +91 72688 66359
              </a>
              <a href="mailto:sales@autosewmart.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-fit">
                <Mail className="w-4 h-4 text-[#D4A853]" />
                sales@autosewmart.com
              </a>
              <a 
                href="https://maps.app.goo.gl/DSVMQrRYSuSc4oVx9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-xs group/addr"
              >
                <MapPin className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5 group-hover/addr:text-white" />
                <span>18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India</span>
              </a>
            </div>

            <div className="flex gap-3">
              {/* WhatsApp direct */}
              <a
                href="https://wa.me/917268866359"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-2.5 rounded-xl transition-all shadow-sm flex items-center gap-2 text-xs font-bold"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp Specialist</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 bg-gray-950/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Autosewmart Industrial Machinery Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-gray-400">Quality Certifications</Link>
            <Link href="/contact" className="hover:text-gray-400">Warranty Policy</Link>
            <Link href="/contact" className="hover:text-gray-400">Privacy & Terms</Link>
            <Link href="/admin" className="text-slate-500 hover:text-[#D4A853] transition-colors font-medium">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
