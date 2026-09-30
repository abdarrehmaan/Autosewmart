'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Cpu,
  ShoppingCart,
  Users,
  IndianRupee,
  Package,
  Plus,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  FileText
} from 'lucide-react';
import { adminStore, AdminMachine, AdminOrder } from '@/lib/admin-data';
import { formatPrice, formatDateTime } from '@/lib/utils';
import OrderDetailsModal from '@/components/admin/OrderDetailsModal';
import MachineFormModal from '@/components/admin/MachineFormModal';
import { toast } from '@/lib/toast';

export default function AdminDashboardPage() {
  const [machines, setMachines] = useState<AdminMachine[]>([]);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);
  const [showMachineModal, setShowMachineModal] = useState(false);

  useEffect(() => {
    setMachines(adminStore.getMachines());
    setOrders(adminStore.getOrders());
  }, []);

  const handleStatusChange = (orderId: string, newStatus: AdminOrder['status']) => {
    const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
    setOrders(updated);
    adminStore.saveOrders(updated);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const handleSaveMachine = (newMachine: AdminMachine) => {
    const updated = [newMachine, ...machines];
    setMachines(updated);
    adminStore.saveMachines(updated);
  };

  // KPI Calculations
  const totalPipeline = orders.reduce((sum, o) => sum + (o.status !== 'CANCELLED' ? o.estimatedAmount : 0), 0);
  const pendingOrders = orders.filter((o) => o.status === 'PENDING').length;
  const activeMachines = machines.filter((m) => m.isActive).length;
  const inStockUnits = machines.reduce((sum, m) => sum + m.stock, 0);

  const kpis = [
    {
      label: 'Quotation Pipeline',
      value: formatPrice(totalPipeline),
      subtext: 'Active inquiries & orders',
      change: '+18.4% this month',
      icon: IndianRupee,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      label: 'Quotation Requests',
      value: orders.length.toString(),
      subtext: `${pendingOrders} awaiting review`,
      change: '5 Industrial Clients',
      icon: ShoppingCart,
      color: 'bg-sky-50 text-sky-700 border-sky-100',
    },
    {
      label: 'Machinery In Catalog',
      value: activeMachines.toString(),
      subtext: `${inStockUnits} units in stock`,
      change: 'All Series Live',
      icon: Cpu,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    },
    {
      label: 'Commercial Leads',
      value: '5 Verified',
      subtext: 'Apparel & textile plants',
      change: '100% Response Rate',
      icon: Users,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <h2 className="text-xl font-bold text-slate-900">Commercial Dashboard</h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Monitor client machinery orders, quotation pipeline, and catalog inventory.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={() => setShowMachineModal(true)}
            className="btn-primary text-xs px-4 py-2.5 flex-1 sm:flex-initial"
          >
            <Plus size={15} /> Add Machine
          </button>
          <Link
            href="/admin/orders"
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
          >
            All Quotes <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ label, value, subtext, change, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-card border border-slate-100 hover:shadow-card-hover transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${color}`}>
                <Icon size={18} />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">{value}</p>
            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-50">
              <span className="text-emerald-600 font-semibold">{change}</span>
              <span className="text-slate-400">{subtext}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Analytics & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Quotation Revenue Graph representation */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Quotation Volume & Pipeline Growth</h3>
              <p className="text-xs text-slate-400">Monthly machinery interest across North & West India</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-100 flex items-center gap-1">
              <TrendingUp size={13} /> +24% YoY
            </span>
          </div>

          {/* Bar Chart Simulation */}
          <div className="h-56 flex items-end gap-3 sm:gap-6 pt-6 pb-2 px-2 border-b border-slate-100">
            {[
              { month: 'Apr', val: 45, amt: '₹14L' },
              { month: 'May', val: 60, amt: '₹19L' },
              { month: 'Jun', val: 55, amt: '₹17L' },
              { month: 'Jul', val: 75, amt: '₹24L' },
              { month: 'Aug', val: 85, amt: '₹28L' },
              { month: 'Sep', val: 100, amt: '₹40.7L', current: true },
            ].map((col) => (
              <div key={col.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <div className="text-[10px] font-bold text-slate-400 group-hover:text-slate-800 transition-colors opacity-0 group-hover:opacity-100">
                  {col.amt}
                </div>
                <div
                  style={{ height: `${col.val}%` }}
                  className={`w-full rounded-xl transition-all duration-300 ${
                    col.current
                      ? 'bg-gradient-to-t from-[#1B4D7A] to-[#38bdf8] shadow-md shadow-sky-950/20'
                      : 'bg-slate-100 group-hover:bg-slate-200'
                  }`}
                />
                <span className={`text-xs font-semibold ${col.current ? 'text-[#1B4D7A] font-bold' : 'text-slate-400'}`}>
                  {col.month}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1B4D7A]" /> Current Month High Pipeline
            </span>
            <Link href="/admin/analytics" className="text-[#1B4D7A] font-semibold hover:underline flex items-center gap-1">
              Detailed Analytics <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Catalog Highlights */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base">Key Machinery Series</h3>
              <span className="text-xs text-slate-400">Total: {machines.length}</span>
            </div>

            <div className="space-y-3">
              {machines.slice(0, 4).map((m) => (
                <div key={m.id} className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-2xl transition-all flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-bold text-[#1B4D7A]">{m.model}</span>
                      {m.badge && (
                        <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-full">
                          {m.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-slate-700 truncate">{m.name}</p>
                    <p className="text-[11px] text-slate-400">{m.speed} · {m.needles}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs font-bold text-slate-900 block">{formatPrice(m.priceNum)}</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">{m.stock} in stock</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/admin/machines"
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              Manage All Machinery <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Quotation Requests & Orders Table */}
      <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Recent Quotations & Commercial Inquiries</h3>
            <p className="text-xs text-slate-400">Incoming buyer orders requiring price quote and delivery dispatch</p>
          </div>
          <Link
            href="/admin/orders"
            className="text-xs font-bold text-[#1B4D7A] hover:underline flex items-center gap-1"
          >
            View All ({orders.length}) <ChevronRight size={14} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Quotation ID</th>
                <th>Client / Factory</th>
                <th>Machine Requested</th>
                <th>Quote Value</th>
                <th>Workflow Status</th>
                <th>Requested Date</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="font-mono text-xs font-bold text-slate-900">
                    {o.orderNumber}
                  </td>
                  <td>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{o.companyName}</p>
                      <p className="text-xs text-slate-400">{o.customerName} · {o.city}</p>
                    </div>
                  </td>
                  <td>
                    <span className="font-mono text-xs font-bold text-[#1B4D7A] bg-sky-50 px-2 py-0.5 rounded-lg border border-sky-100">
                      {o.machineModel}
                    </span>
                  </td>
                  <td className="font-extrabold text-slate-900 text-sm">
                    {formatPrice(o.estimatedAmount)}
                  </td>
                  <td>
                    <select
                      value={o.status}
                      onChange={(e) => handleStatusChange(o.id, e.target.value as AdminOrder['status'])}
                      className={`status-badge status-${o.status.toLowerCase()} cursor-pointer border-none font-semibold text-xs focus:ring-0`}
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="CONFIRMED">CONFIRMED</option>
                      <option value="PROCESSING">PROCESSING</option>
                      <option value="SHIPPED">SHIPPED</option>
                      <option value="DELIVERED">DELIVERED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                  </td>
                  <td className="text-xs text-slate-500">
                    {formatDateTime(o.orderDate)}
                  </td>
                  <td className="text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        href={`/admin/orders/${o.id}`}
                        className="btn-icon p-2 text-[#1B4D7A] hover:bg-sky-50 rounded-xl border border-sky-100 shadow-xs"
                        title="Generate Bill & Invoice"
                      >
                        <FileText size={15} />
                      </Link>
                      <button
                        onClick={() => setSelectedOrder(o)}
                        className="btn-icon p-2 text-slate-500 hover:text-[#1B4D7A] hover:bg-slate-100 rounded-xl"
                        title="Inspect Quotation"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={handleStatusChange}
        />
      )}

      {showMachineModal && (
        <MachineFormModal
          onClose={() => setShowMachineModal(false)}
          onSave={handleSaveMachine}
        />
      )}
    </div>
  );
}
