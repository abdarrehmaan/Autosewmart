'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingCart,
  Clock,
  CheckCircle2,
  Package,
  Truck,
  Eye,
  Plus,
  Printer,
  ChevronRight,
  Filter,
  FileText
} from 'lucide-react';
import { adminStore, AdminOrder } from '@/lib/admin-data';
import { formatPrice, formatDateTime, generateId } from '@/lib/utils';
import OrderDetailsModal from '@/components/admin/OrderDetailsModal';
import { toast } from '@/lib/toast';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);

  useEffect(() => {
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

  const handleCreateNewQuote = () => {
    const newQuote: AdminOrder = {
      id: generateId('ORD'),
      orderNumber: `STM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: 'New Client Inquiry',
      companyName: 'Private Apparel Co',
      email: 'client@apparel.com',
      phone: '+91 98000 00000',
      city: 'Surat',
      state: 'Gujarat',
      machineModel: 'EMB-S1500',
      machineName: 'Single Head 15-Needle Embroidery Machine',
      estimatedAmount: 385000,
      status: 'PENDING',
      requirements: 'Initial quotation drafted from admin desk.',
      orderDate: new Date().toISOString(),
      items: [{ name: 'Single Head Machine', model: 'EMB-S1500', qty: 1, price: 385000 }],
    };

    const updated = [newQuote, ...orders];
    setOrders(updated);
    adminStore.saveOrders(updated);
    setSelectedOrder(newQuote);
    toast.success('Draft quotation created');
  };

  const filtered = orders.filter((o) => {
    const matchesSearch =
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.companyName.toLowerCase().includes(search.toLowerCase()) ||
      o.machineModel.toLowerCase().includes(search.toLowerCase()) ||
      o.phone.includes(search);

    const matchesStatus = statusFilter === 'ALL' || o.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statuses = ['ALL', 'PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Quotations & Commercial Orders</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Track inquiries, approved purchase orders, dispatch shipments, and commercial invoices.
          </p>
        </div>

        <button
          onClick={handleCreateNewQuote}
          className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus size={16} /> Draft New Quotation
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Inquiries', value: orders.length.toString(), icon: ShoppingCart, color: 'text-[#1B4D7A]' },
          { label: 'Pending Review', value: orders.filter((o) => o.status === 'PENDING').length.toString(), icon: Clock, color: 'text-amber-600' },
          { label: 'Production Active', value: orders.filter((o) => o.status === 'PROCESSING').length.toString(), icon: Package, color: 'text-purple-600' },
          { label: 'Completed Deliveries', value: orders.filter((o) => o.status === 'DELIVERED').length.toString(), icon: CheckCircle2, color: 'text-emerald-600' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-4 shadow-card border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">{label}</span>
              <Icon size={16} className={color} />
            </div>
            <p className="text-2xl font-extrabold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-white p-4 rounded-2xl shadow-card border border-slate-100">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by quote #, client, company, phone..."
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs w-full focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                statusFilter === st
                  ? 'bg-[#1B4D7A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            No quotation orders found matching your filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Quotation / Order #</th>
                  <th>Client / Organization</th>
                  <th>Contact Info</th>
                  <th>Machine Specification</th>
                  <th>Estimated Value</th>
                  <th>Workflow Status</th>
                  <th>Date Requested</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((o) => (
                  <tr key={o.id}>
                    <td>
                      <span className="font-mono text-xs font-bold text-slate-900 block">
                        {o.orderNumber}
                      </span>
                      <span className="text-[10px] text-slate-400">{o.city}, {o.state}</span>
                    </td>
                    <td>
                      <p className="font-semibold text-slate-900 text-sm">{o.companyName}</p>
                      <p className="text-xs text-slate-500">{o.customerName}</p>
                    </td>
                    <td>
                      <p className="text-xs font-mono text-slate-700">{o.phone}</p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[140px]">{o.email}</p>
                    </td>
                    <td>
                      <span className="font-mono text-xs font-bold text-[#1B4D7A] bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                        {o.machineModel}
                      </span>
                    </td>
                    <td className="font-bold text-slate-900 text-sm">
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
                          <Eye size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
