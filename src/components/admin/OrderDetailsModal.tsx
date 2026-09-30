'use client';

import React from 'react';
import Link from 'next/link';
import { X, Printer, Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, PackageCheck, AlertCircle, FileText } from 'lucide-react';
import { AdminOrder } from '@/lib/admin-data';
import { formatPrice, formatDateTime } from '@/lib/utils';
import { toast } from '@/lib/toast';

interface OrderDetailsModalProps {
  order: AdminOrder | null;
  onClose: () => void;
  onStatusChange: (orderId: string, newStatus: AdminOrder['status']) => void;
}

const statusOptions: AdminOrder['status'][] = [
  'PENDING',
  'CONFIRMED',
  'PROCESSING',
  'SHIPPED',
  'DELIVERED',
  'CANCELLED',
];

export default function OrderDetailsModal({ order, onClose, onStatusChange }: OrderDetailsModalProps) {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B4D7A]/10 text-[#1B4D7A] flex items-center justify-center font-bold">
              #
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-base">{order.orderNumber}</h3>
                <span className={`status-badge status-${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
              <p className="text-xs text-slate-500">Quotation Request & Spec Sheet</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/admin/orders/${order.id}`}
              className="btn-icon p-2 text-[#1B4D7A] hover:bg-sky-50 rounded-xl border border-sky-100 shadow-sm flex items-center gap-1.5 text-xs font-semibold px-3"
              title="Open Commercial Bill & Invoice"
            >
              <FileText size={14} />
              <span>Full Tax Bill</span>
            </Link>
            <button
              onClick={handlePrint}
              className="btn-icon p-2 text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl border border-slate-200 shadow-sm"
              title="Print Commercial Quotation"
            >
              <Printer size={16} />
            </button>
            <button
              onClick={onClose}
              className="btn-icon p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-xl"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Status Quick Bar */}
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Workflow Status</p>
              <p className="text-xs text-slate-400 mt-0.5">Update stage for customer tracking and billing</p>
            </div>
            <select
              value={order.status}
              onChange={(e) => {
                const next = e.target.value as AdminOrder['status'];
                onStatusChange(order.id, next);
                toast.success(`Order ${order.orderNumber} status changed to ${next}`);
              }}
              className="px-3.5 py-1.5 rounded-xl border border-slate-300 text-xs font-bold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
            >
              {statusOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Client & Production Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Buyer Information</span>
              <h4 className="font-bold text-slate-900 text-base mt-1">{order.customerName}</h4>
              <p className="text-xs font-medium text-[#1B4D7A]">{order.companyName}</p>

              <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-slate-400" />
                  <span>{order.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-slate-400" />
                  <span>{order.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-slate-400" />
                  <span>{order.city}, {order.state}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Machine Requisition</span>
              <h4 className="font-bold text-slate-900 text-base mt-1">{order.machineModel}</h4>
              <p className="text-xs text-slate-600 truncate">{order.machineName}</p>

              <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar size={13} className="text-slate-400" />
                  <span>Requested: {formatDateTime(order.orderDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PackageCheck size={13} className="text-slate-400" />
                  <span>Total Value: <strong className="text-slate-900 font-bold">{formatPrice(order.estimatedAmount)}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Quotation Bill of Materials</h4>
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                  <tr>
                    <th className="p-3">Item Description</th>
                    <th className="p-3">Model</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-right">Price</th>
                    <th className="p-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {order.items.map((it, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">{it.name}</td>
                      <td className="p-3 font-mono text-slate-500">{it.model}</td>
                      <td className="p-3 text-center font-bold">{it.qty}</td>
                      <td className="p-3 text-right text-slate-600">{formatPrice(it.price)}</td>
                      <td className="p-3 text-right font-bold text-slate-900">{formatPrice(it.price * it.qty)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50 border-t border-slate-200">
                  <tr>
                    <td colSpan={4} className="p-3 font-bold text-right text-slate-700">Estimated Total (Excl. GST):</td>
                    <td className="p-3 font-extrabold text-right text-[#1B4D7A] text-sm">{formatPrice(order.estimatedAmount)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Custom Specifications / Notes */}
          {order.requirements && (
            <div className="bg-amber-50/60 border border-amber-200/60 p-4 rounded-2xl">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertCircle size={14} className="text-amber-600" />
                Special Client Production Notes
              </p>
              <p className="text-xs text-amber-800 leading-relaxed">{order.requirements}</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <Link
            href={`/admin/orders/${order.id}`}
            className="btn-primary px-4 py-2 text-xs flex items-center gap-1.5"
          >
            <FileText size={14} /> View & Print Full Bill
          </Link>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
