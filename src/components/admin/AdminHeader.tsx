'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bell, Search, LogOut, Menu, CheckCircle2, ShieldCheck } from 'lucide-react';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/admin': { title: 'Executive Dashboard', subtitle: 'Overview of commercial quotes, sales, and catalog status' },
  '/admin/analytics': { title: 'Sales & Inquiries Analytics', subtitle: 'Performance charts, lead conversion, and demand trends' },
  '/admin/machines': { title: 'Machinery Catalog', subtitle: 'Manage industrial embroidery and sewing workstations' },
  '/admin/products': { title: 'Accessories & Spare Parts', subtitle: 'Stock control for hoops, threads, needles, and stabilizers' },
  '/admin/categories': { title: 'Machine Series & Categories', subtitle: 'Organize machinery classifications and technical series' },
  '/admin/orders': { title: 'Quotations & Commercial Orders', subtitle: 'Process incoming buyer quote requests and purchase orders' },
  '/admin/customers': { title: 'Customer Leads & Directory', subtitle: 'Industrial client database, apparel factories, and prospects' },
  '/admin/reviews': { title: 'Testimonials & Feedback', subtitle: 'Client success stories and factory reviews' },
  '/admin/settings': { title: 'System & Company Settings', subtitle: 'Manage company profile, security password, and tax preferences' },
};

interface AdminHeaderProps {
  setMobileOpen: (open: boolean) => void;
}

export default function AdminHeader({ setMobileOpen }: AdminHeaderProps) {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Find matching route or fallback
  const matchingKey = Object.keys(pageTitles).find((key) => 
    key === pathname || (key !== '/admin' && pathname.startsWith(key))
  );
  const { title, subtitle } = (matchingKey && pageTitles[matchingKey]) || {
    title: 'Admin Control Center',
    subtitle: 'Autosewmart Industrial Machinery Management',
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('admin_authenticated');
      window.location.href = '/admin';
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-4 md:px-6 flex-shrink-0 z-30">
      {/* Left Title & Mobile Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="btn-icon md:hidden flex items-center justify-center p-2 hover:bg-slate-100 rounded-lg text-slate-600"
          aria-label="Open navigation sidebar"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{title}</h1>
          <p className="text-[11px] text-slate-500 hidden sm:block">{subtitle}</p>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search catalog, quotes..."
            className="pl-9 pr-3 py-1.5 rounded-xl bg-slate-100/90 text-sm border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]/30 focus:border-[#1B4D7A] w-48 lg:w-60 transition-all"
          />
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="btn-icon p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-fade-in-up">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-semibold text-xs text-slate-800 uppercase tracking-wider">Recent Activity</span>
                <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">2 New</span>
              </div>
              <div className="mt-3 space-y-2.5 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-800">New quotation requested</p>
                    <p className="text-slate-500 text-[11px]">Faizan Apparel Works (EMB-S1500)</p>
                    <span className="text-[10px] text-slate-400">10m ago</span>
                  </div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-800">Order confirmed</p>
                    <p className="text-slate-500 text-[11px]">Ansari Textile Works (EMB-HD6000)</p>
                    <span className="text-[10px] text-slate-400">2h ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-xs font-semibold">
          <ShieldCheck size={14} />
          <span>Admin Verified</span>
        </div>

        {/* Direct Log Out */}
        <button
          onClick={handleLogout}
          className="btn-icon p-2 text-rose-500 hover:bg-rose-50 rounded-lg"
          title="Log Out of Admin Panel"
        >
          <LogOut size={18} />
        </button>

        {/* User Avatar */}
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white shadow-sm"
          style={{ background: 'linear-gradient(135deg, #1B4D7A, #0F3152)' }}
        >
          SM
        </div>
      </div>
    </header>
  );
}
