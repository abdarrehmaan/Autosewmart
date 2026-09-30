'use client';

import React, { useState, useEffect } from 'react';
import { Scissors, Search, MessageCircle, Menu, X, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Machines', href: '/machines' },
    { name: 'Products & Accessories', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 ${
        isScrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#1B4D7A] flex items-center justify-center text-white shadow-sm group-hover:bg-[#0F3152] transition-colors">
            <Scissors className="w-5 h-5 text-[#D4A853]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
              Auto<span className="text-[#1B4D7A]">sewmart</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A853] -mt-0.5">
              Industrial Machinery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  isActive
                    ? 'text-[#1B4D7A]'
                    : 'text-gray-600 hover:text-[#1B4D7A]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1B4D7A] rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/917268866359?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20Autosewmart%20embroidery%20and%20sewing%20machines."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#1B4D7A] hover:bg-[#0F3152] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 text-[#D4A853]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#1B4D7A]" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 bg-white z-40 lg:hidden overflow-y-auto border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col p-6 gap-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-[#1B4D7A]'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#1B4D7A]" />}
                </Link>
              );
            })}

            <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="https://wa.me/917268866359"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+917268866359"
                className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-800 py-3.5 rounded-xl font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#1B4D7A]" />
                Call Sales (+91 72688 66359)
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#1B4D7A] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Custom Quotation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
