'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Cpu,
  Package,
  Grid3X3,
  ShoppingCart,
  Users,
  Star,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  Scissors
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navSections = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    ],
  },
  {
    label: 'Machinery & Catalog',
    items: [
      { label: 'Machinery', href: '/admin/machines', icon: Cpu },
      { label: 'Accessories & Parts', href: '/admin/products', icon: Package },
      { label: 'Categories & Series', href: '/admin/categories', icon: Grid3X3 },
    ],
  },
  {
    label: 'Commercial & Sales',
    items: [
      { label: 'Quotes & Orders', href: '/admin/orders', icon: ShoppingCart },
      { label: 'Customer Leads', href: '/admin/customers', icon: Users },
    ],
  },
  {
    label: 'Reputation & Care',
    items: [
      { label: 'Reviews & Testimonials', href: '/admin/reviews', icon: Star },
    ],
  },
  {
    label: 'System',
    items: [
      { label: 'Settings', href: '/admin/settings', icon: Settings },
    ],
  },
];

interface AdminSidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function AdminSidebar({ mobileOpen, setMobileOpen }: AdminSidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, setMobileOpen]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('admin_authenticated');
      window.location.href = '/admin';
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          'flex flex-col bg-[#0b1320] text-slate-200 border-r border-slate-800 transition-all duration-300 flex-shrink-0 z-50',
          'fixed inset-y-0 left-0 md:static transform md:translate-x-0',
          mobileOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0',
          collapsed ? 'md:w-20' : 'md:w-64'
        )}
      >
        {/* Header / Brand Logo */}
        <div className={cn('flex items-center h-16 px-4 border-b border-slate-800/80', collapsed ? 'md:justify-center' : 'justify-between')}>
          {!collapsed ? (
            <Link href="/admin" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1B4D7A] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                <Scissors className="w-5 h-5 text-[#D4A853]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight leading-tight">
                  Auto<span className="text-[#38bdf8]">sewmart</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#D4A853] -mt-0.5">
                  Industrial Admin
                </span>
              </div>
            </Link>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-[#1B4D7A] flex items-center justify-center text-white shadow-sm">
              <Scissors className="w-5 h-5 text-[#D4A853]" />
            </div>
          )}

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-8 h-8 hidden md:flex items-center justify-center rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 flex md:hidden items-center justify-center rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
          {navSections.map((section) => (
            <div key={section.label}>
              {(!collapsed || mobileOpen) && (
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 mb-1.5">
                  {section.label}
                </p>
              )}
              <div className="space-y-1">
                {section.items.map(({ label, href, icon: Icon }) => {
                  const active = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      title={collapsed && !mobileOpen ? label : undefined}
                      className={cn(
                        'admin-nav-item',
                        active && 'active',
                        collapsed && !mobileOpen && 'md:justify-center md:px-0'
                      )}
                    >
                      <Icon size={19} className="flex-shrink-0" />
                      {(!collapsed || mobileOpen) && <span>{label}</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="p-3 border-t border-slate-800 space-y-1">
          <Link
            href="/"
            target="_blank"
            className={cn(
              'admin-nav-item text-slate-400 hover:text-sky-300 hover:bg-sky-950/30',
              collapsed && !mobileOpen && 'md:justify-center md:px-0'
            )}
            title="View Live Storefront"
          >
            <ExternalLink size={18} className="flex-shrink-0" />
            {(!collapsed || mobileOpen) && <span>Live Website</span>}
          </Link>

          <button
            onClick={handleLogout}
            className={cn(
              'admin-nav-item text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 w-full text-left',
              collapsed && !mobileOpen && 'md:justify-center md:px-0'
            )}
            title="Log Out"
          >
            <LogOut size={18} className="flex-shrink-0" />
            {(!collapsed || mobileOpen) && <span>Log Out</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
