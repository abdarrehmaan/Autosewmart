'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  PieChart,
  BarChart3,
  Calendar,
  Layers,
  ArrowUpRight,
  IndianRupee,
  Cpu
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function AdminAnalyticsPage() {
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  const stats = [
    {
      label: 'Gross Quotation Value',
      value: '₹40,70,000',
      change: '+22.5%',
      icon: IndianRupee,
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'Industrial Inquiries',
      value: '28 Leads',
      change: '+14.2%',
      icon: ShoppingCart,
      color: 'bg-sky-50 text-sky-700',
    },
    {
      label: 'Client Conversion Rate',
      value: '42.8%',
      change: '+6.1%',
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-700',
    },
    {
      label: 'Average Quote Ticket',
      value: '₹8,14,000',
      change: '+11.0%',
      icon: Cpu,
      color: 'bg-amber-50 text-amber-700',
    },
  ];

  const seriesDemand = [
    { name: 'Multi-Head Industrial (4-Head & 6-Head)', share: 45, value: '₹18,31,500', color: 'bg-[#1B4D7A]' },
    { name: 'Cap & Tubular Specialized (EMB-CAP300)', share: 25, value: '₹10,17,500', color: 'bg-sky-500' },
    { name: 'Single-Head High Speed (EMB-S1500)', share: 20, value: '₹8,14,000', color: 'bg-[#D4A853]' },
    { name: 'Direct-Drive Industrial Sewing (SEW-I500)', share: 10, value: '₹4,07,000', color: 'bg-emerald-500' },
  ];

  const regionalDemand = [
    { state: 'Gujarat (Surat Textile Hub)', share: '38%', orders: 11 },
    { state: 'Punjab (Ludhiana Knitwear & Caps)', share: '24%', orders: 7 },
    { state: 'Maharashtra (Mumbai & Bhiwandi)', share: '18%', orders: 5 },
    { state: 'Tamil Nadu (Tirupur Apparel Export)', share: '14%', orders: 4 },
    { state: 'Other Industrial Zones', share: '6%', orders: 2 },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Commercial & Production Analytics</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time pipeline metrics, regional textile machinery demand, and unit conversion.
          </p>
        </div>

        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Quarter (Q3)</option>
          <option>This Financial Year</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-card border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">{value}</p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold pt-1 border-t border-slate-50">
              <TrendingUp size={13} />
              <span>{change} vs previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Demand Breakdown & Category Share */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Share */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Machinery Series Demand Breakdown</h3>
                <p className="text-xs text-slate-400">Share of total requested quotations by machine category</p>
              </div>
              <span className="text-xs font-bold text-[#1B4D7A] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                100% Normalized
              </span>
            </div>

            {/* Visual stacked percentage bar */}
            <div className="h-5 w-full bg-slate-100 rounded-full overflow-hidden flex mb-6">
              {seriesDemand.map((s) => (
                <div
                  key={s.name}
                  style={{ width: `${s.share}%` }}
                  className={`${s.color} h-full transition-all duration-500`}
                  title={`${s.name}: ${s.share}%`}
                />
              ))}
            </div>

            {/* List */}
            <div className="space-y-3.5">
              {seriesDemand.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-xs p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-md ${s.color}`} />
                    <span className="font-semibold text-slate-800">{s.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-extrabold text-slate-900">{s.value}</span>
                    <span className="font-bold text-slate-400 w-10 text-right">{s.share}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Hubs Distribution */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Top Manufacturing Hubs</h3>
            <p className="text-xs text-slate-400 mb-4">Inquiry origins across Indian textile clusters</p>

            <div className="space-y-3">
              {regionalDemand.map((r) => (
                <div key={r.state} className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-800">{r.state}</p>
                    <p className="text-[11px] text-slate-400">{r.orders} verified factory inquiries</p>
                  </div>
                  <span className="font-extrabold text-[#1B4D7A] bg-white px-2.5 py-1 rounded-xl shadow-xs border border-slate-200/60">
                    {r.share}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">Data synthesized from inbound RFQs and distributor records</span>
          </div>
        </div>
      </div>
    </div>
  );
}
