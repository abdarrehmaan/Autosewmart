'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Scissors,
  Building,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { adminStore, AdminOrder, AdminSettings } from '@/lib/admin-data';
import { formatPrice, formatDate } from '@/lib/utils';
import PrintInvoiceButton from '@/components/admin/PrintInvoiceButton';
import OrderStatusUpdater from '@/components/admin/OrderStatusUpdater';

export default function OrderInvoicePage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params?.id as string;

  const [order, setOrder] = useState<AdminOrder | null>(null);
  const [settings, setSettings] = useState<AdminSettings | null>(null);

  useEffect(() => {
    const orders = adminStore.getOrders();
    const found = orders.find((o) => o.id === orderId || o.orderNumber === orderId);
    if (found) {
      setOrder(found);
    } else if (orders.length > 0) {
      // Fallback to first order if direct id wasn't matched
      setOrder(orders[0]);
    }
    setSettings(adminStore.getSettings());
  }, [orderId]);

  const handleStatusUpdated = (newStatus: AdminOrder['status']) => {
    if (!order) return;
    const updated = { ...order, status: newStatus };
    setOrder(updated);
    const all = adminStore.getOrders().map((o) => (o.id === order.id ? updated : o));
    adminStore.saveOrders(all);
  };

  if (!order) {
    return (
      <div className="p-12 text-center text-slate-500">
        <p>Loading invoice records...</p>
      </div>
    );
  }

  // Calculations
  const taxRate = (settings?.taxPercent || 18) / 100;
  const baseSubtotal = order.estimatedAmount;
  const cgst = Math.round((baseSubtotal * taxRate) / 2);
  const sgst = Math.round((baseSubtotal * taxRate) / 2);
  const totalGst = cgst + sgst;
  const grandTotal = baseSubtotal + totalGst;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Top Action Bar (Hidden when printed) */}
      <div className="no-print flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-card border border-slate-100">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/orders"
            className="btn-icon p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
            title="Back to Orders"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">
                Invoice {order.orderNumber}
              </h2>
              <span className={`status-badge status-${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Generated on {formatDate(order.orderDate)} for {order.companyName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <OrderStatusUpdater
            orderId={order.id}
            currentStatus={order.status}
            onStatusUpdated={handleStatusUpdated}
          />
          <PrintInvoiceButton label="Print Commercial Bill" />
        </div>
      </div>

      {/* The Printable Commercial Tax Invoice / Bill */}
      <div className="print-invoice-page bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200/90 text-slate-800">
        {/* Invoice Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start pb-8 border-b-2 border-slate-900 gap-6">
          {/* Company Details */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#1B4D7A] flex items-center justify-center text-white shadow-sm">
                <Scissors className="w-5 h-5 text-[#D4A853]" />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-slate-900 tracking-tight leading-none block">
                  Auto<span className="text-[#1B4D7A]">sewmart</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A853]">
                  Industrial Machinery
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 max-w-sm leading-relaxed mt-3">
              {settings?.address || '18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India'}
            </p>
            <div className="text-xs text-slate-500 mt-2 space-y-0.5">
              <p><strong>GSTIN:</strong> 09AAACS1234F1Z8 | <strong>CIN:</strong> U29299UP2024PTC148892</p>
              <p><strong>Phone:</strong> {settings?.phone || '+91 72688 66359'} | <strong>Email:</strong> {settings?.email || 'sales@autosewmart.com'}</p>
            </div>
          </div>

          {/* Invoice Meta */}
          <div className="text-left sm:text-right">
            <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[11px] font-extrabold uppercase tracking-widest rounded-lg mb-2">
              Commercial Tax Invoice
            </span>
            <h1 className="text-xl font-mono font-extrabold text-slate-900 tracking-tight">
              {order.orderNumber}
            </h1>
            <div className="mt-3 text-xs text-slate-600 space-y-1">
              <p><strong>Invoice Date:</strong> {formatDate(order.orderDate)}</p>
              <p><strong>Payment Terms:</strong> 100% Against Dispatch / RTGS</p>
              <p><strong>Place of Supply:</strong> {order.state} (State Code 24)</p>
            </div>
          </div>
        </div>

        {/* Bill To & Dispatch To Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 border-b border-slate-200 text-xs">
          <div>
            <h3 className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-2">
              Billed To (Client / Consignee)
            </h3>
            <p className="font-extrabold text-slate-900 text-sm">{order.companyName}</p>
            <p className="font-semibold text-slate-700 mt-0.5">Attn: {order.customerName}</p>
            <p className="text-slate-600 mt-1">{order.city}, {order.state}</p>
            <p className="text-slate-600 mt-1"><strong>Phone:</strong> {order.phone}</p>
            <p className="text-slate-600"><strong>Email:</strong> {order.email}</p>
          </div>

          <div className="sm:border-l sm:pl-8 border-slate-200">
            <h3 className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-2">
              Factory Delivery & Installation Address
            </h3>
            <p className="font-bold text-slate-900">{order.companyName} Manufacturing Shed</p>
            <p className="text-slate-600 mt-1">Industrial Estate, {order.city}, {order.state}</p>
            <div className="mt-3 p-2 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-800 block text-[11px]">Dispatch Logistics:</span>
              <span className="text-slate-600 text-[11px]">Heavy Transport Cargo with Hydraulic Unloading</span>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="py-6">
          <table className="w-full text-left text-xs border border-slate-300 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider border-b border-slate-300">
              <tr>
                <th className="p-3 text-center w-12">#</th>
                <th className="p-3">Machinery / Equipment Description</th>
                <th className="p-3">Model / HSN</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-right">Unit Rate (₹)</th>
                <th className="p-3 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td className="p-3.5 text-center font-bold text-slate-400">{index + 1}</td>
                  <td className="p-3.5">
                    <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Industrial computer controlled workstation with precision servo drive
                    </p>
                  </td>
                  <td className="p-3.5 font-mono text-slate-700">
                    <span className="font-bold">{item.model}</span>
                    <span className="block text-[10px] text-slate-400">HSN: 8447</span>
                  </td>
                  <td className="p-3.5 text-center font-extrabold text-slate-900">{item.qty} Unit</td>
                  <td className="p-3.5 text-right font-medium text-slate-700">{formatPrice(item.price)}</td>
                  <td className="p-3.5 text-right font-bold text-slate-900">{formatPrice(item.price * item.qty)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Calculation & Tax Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 pb-6 border-b border-slate-200">
          {/* Notes and Bank Details */}
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1">
              <h4 className="font-extrabold text-slate-900 uppercase text-[11px] mb-1">
                RTGS / NEFT Remittance Details
              </h4>
              <p><strong>Account Name:</strong> Autosewmart Industrial Machinery Pvt. Ltd.</p>
              <p><strong>Bank:</strong> HDFC Bank Ltd. (Commercial Branch, Surat)</p>
              <p><strong>Account Number:</strong> 50200088921456</p>
              <p><strong>IFSC Code:</strong> HDFC0000124</p>
            </div>

            {order.requirements && (
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-800 block text-[11px]">Client Instructions:</span>
                <p className="italic bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60 mt-1">
                  &ldquo;{order.requirements}&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Financial Breakdown */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Machinery Base Total:</span>
              <span className="font-bold text-slate-900">{formatPrice(baseSubtotal)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">CGST (9%):</span>
              <span className="font-medium text-slate-800">{formatPrice(cgst)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">SGST (9%):</span>
              <span className="font-medium text-slate-800">{formatPrice(sgst)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Transit Freight & Insurance:</span>
              <span className="font-bold text-emerald-700">INCLUDED (Complimentary)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Factory Onsite Installation & Training:</span>
              <span className="font-bold text-emerald-700">COMPLIMENTARY</span>
            </div>

            <div className="flex justify-between items-center pt-3 mt-2 border-t-2 border-slate-900">
              <div>
                <span className="text-sm font-extrabold text-slate-900 block">Total Invoice Value:</span>
                <span className="text-[10px] text-slate-400">Inclusive of 18% Goods & Services Tax</span>
              </div>
              <span className="text-2xl font-black text-[#1B4D7A]">
                {formatPrice(grandTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Terms & Signatures */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-500">
          <div>
            <h4 className="font-bold text-slate-800 uppercase text-[11px] mb-1">
              Commercial Terms & Warranty:
            </h4>
            <ol className="list-decimal pl-4 space-y-1 text-[11px]">
              <li>Includes 2-Year Comprehensive Manufacturer Warranty on motors, heads, and controllers.</li>
              <li>Pre-delivery inspection (PDI) testing completed at Surat assembly facility.</li>
              <li>Transit covered under full marine risk insurance policy.</li>
              <li>Subject to Surat jurisdiction only.</li>
            </ol>
          </div>

          <div className="flex flex-col items-end justify-end text-center sm:text-right">
            <div className="w-52 h-16 border-b border-dashed border-slate-400 mb-2 flex items-center justify-center text-slate-300 italic text-[11px]">
              [ Authorized Seal & Signature ]
            </div>
            <p className="font-extrabold text-slate-900 text-xs">For Autosewmart Industrial Machinery Pvt. Ltd.</p>
            <p className="text-[10px] text-slate-400">Authorized Commercial Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
}
