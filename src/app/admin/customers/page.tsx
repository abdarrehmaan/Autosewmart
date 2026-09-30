'use client';

import React, { useState, useEffect } from 'react';
import {
  Users,
  Search,
  Plus,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Building,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { adminStore, AdminCustomer } from '@/lib/admin-data';
import { generateId, formatDate } from '@/lib/utils';
import { toast } from '@/lib/toast';

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<AdminCustomer[]>([]);
  const [search, setSearch] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [newLead, setNewLead] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    interestedMachine: 'EMB-S1500 (Single Head)',
  });

  useEffect(() => {
    setCustomers(adminStore.getCustomers());
  }, []);

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.name || !newLead.company) {
      toast.error('Client and Company names are required');
      return;
    }

    const created: AdminCustomer = {
      id: generateId('CUST'),
      name: newLead.name,
      company: newLead.company,
      email: newLead.email || 'client@company.com',
      phone: newLead.phone || '+91 98000 00000',
      location: newLead.location || 'India',
      interestedMachine: newLead.interestedMachine,
      totalInquiries: 1,
      status: 'Qualified',
      createdAt: new Date().toISOString().split('T')[0],
    };

    const updated = [created, ...customers];
    setCustomers(updated);
    adminStore.saveCustomers(updated);
    setIsAdding(false);
    setNewLead({
      name: '',
      company: '',
      email: '',
      phone: '',
      location: '',
      interestedMachine: 'EMB-S1500 (Single Head)',
    });
    toast.success(`Client lead "${created.company}" added`);
  };

  const handleDelete = (id: string, company: string) => {
    if (window.confirm(`Are you sure you want to remove "${company}"?`)) {
      const updated = customers.filter((c) => c.id !== id);
      setCustomers(updated);
      adminStore.saveCustomers(updated);
      toast.success('Customer record removed');
    }
  };

  const filtered = customers.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.phone.includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Commercial Leads & Customer Directory</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Apparel manufacturers, boutique owners, cap producers, and factory prospects.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus size={16} /> Add Industrial Lead
        </button>
      </div>

      {/* Add Lead Form */}
      {isAdding && (
        <form onSubmit={handleCreateLead} className="bg-white p-6 rounded-3xl shadow-card border border-slate-200 space-y-4 animate-fade-in-up">
          <h3 className="font-bold text-slate-900 text-sm">Add New Business Lead</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Contact Person *</label>
              <input
                type="text"
                required
                value={newLead.name}
                onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                placeholder="e.g. Imran Qureshi"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Company / Factory *</label>
              <input
                type="text"
                required
                value={newLead.company}
                onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                placeholder="e.g. Qureshi Garment Works"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number</label>
              <input
                type="text"
                value={newLead.phone}
                onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                placeholder="+91 98000 00000"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
              <input
                type="email"
                value={newLead.email}
                onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                placeholder="contact@factory.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Location / Hub</label>
              <input
                type="text"
                value={newLead.location}
                onChange={(e) => setNewLead({ ...newLead, location: e.target.value })}
                placeholder="e.g. Surat, Gujarat"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Machine of Interest</label>
              <input
                type="text"
                value={newLead.interestedMachine}
                onChange={(e) => setNewLead({ ...newLead, interestedMachine: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary px-5 py-2 text-xs">
              Save Lead
            </button>
          </div>
        </form>
      )}

      {/* Search Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100">
        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search clients by name, factory, phone, city..."
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs w-full focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
          />
        </div>
      </div>

      {/* Customer Directory Table */}
      <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            No customer accounts found matching your query.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Client / Organization</th>
                  <th>Contact Details</th>
                  <th>Manufacturing Hub</th>
                  <th>Target Machinery</th>
                  <th>Inquiries</th>
                  <th>Account Status</th>
                  <th>Registered</th>
                  <th className="text-right">Connect</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{c.company}</p>
                        <p className="text-xs text-slate-500 font-medium">{c.name}</p>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs font-mono font-semibold text-slate-700">{c.phone}</p>
                      <p className="text-[11px] text-slate-400">{c.email}</p>
                    </td>
                    <td>
                      <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-400" />
                        {c.location}
                      </span>
                    </td>
                    <td>
                      <span className="text-xs font-medium text-[#1B4D7A] bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                        {c.interestedMachine}
                      </span>
                    </td>
                    <td>
                      <span className="text-xs font-bold text-slate-700">{c.totalInquiries}</span>
                    </td>
                    <td>
                      <span
                        className={`status-badge ${
                          c.status === 'Customer'
                            ? 'status-delivered'
                            : c.status === 'Qualified'
                            ? 'status-confirmed'
                            : 'status-pending'
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="text-xs text-slate-400">{c.createdAt}</td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-icon p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle size={15} />
                        </a>
                        <button
                          onClick={() => handleDelete(c.id, c.company)}
                          className="btn-icon p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl"
                          title="Delete Lead"
                        >
                          <Trash2 size={15} />
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
    </div>
  );
}
