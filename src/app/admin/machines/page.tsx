'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { adminStore, AdminMachine } from '@/lib/admin-data';
import { formatPrice } from '@/lib/utils';
import MachineFormModal from '@/components/admin/MachineFormModal';
import { toast } from '@/lib/toast';

export default function AdminMachinesPage() {
  const [machines, setMachines] = useState<AdminMachine[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingMachine, setEditingMachine] = useState<AdminMachine | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMachines(adminStore.getMachines());
  }, []);

  const handleSave = (saved: AdminMachine) => {
    const exists = machines.some((m) => m.id === saved.id);
    let updated: AdminMachine[];
    if (exists) {
      updated = machines.map((m) => (m.id === saved.id ? saved : m));
    } else {
      updated = [saved, ...machines];
    }
    setMachines(updated);
    adminStore.saveMachines(updated);
    setEditingMachine(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from the machinery catalog?`)) {
      const updated = machines.filter((m) => m.id !== id);
      setMachines(updated);
      adminStore.saveMachines(updated);
      toast.success(`Machine "${name}" removed from catalog.`);
    }
  };

  // Filter
  const filtered = machines.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.model.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Single-Head', 'Multi-Head', 'Computerized Sewing', 'Industrial Sewing', 'Cap & Tubular'];

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Industrial Machinery Catalog</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure specifications, production speeds, stock availability, and commercial quote levels.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingMachine(null);
            setIsModalOpen(true);
          }}
          className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus size={16} /> Add Industrial Machine
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Machines', value: machines.length.toString(), icon: Cpu, color: 'text-[#1B4D7A]' },
          { label: 'Active Listings', value: machines.filter((m) => m.isActive).length.toString(), icon: CheckCircle2, color: 'text-emerald-600' },
          { label: 'In Stock Units', value: machines.reduce((s, m) => s + m.stock, 0).toString(), icon: Layers, color: 'text-indigo-600' },
          { label: 'Low Stock (≤3)', value: machines.filter((m) => m.stock <= 3).length.toString(), icon: AlertTriangle, color: 'text-amber-600' },
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

      {/* Toolbar / Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-white p-4 rounded-2xl shadow-card border border-slate-100">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by model (e.g. EMB-S1500) or name..."
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs w-full focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1B4D7A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Machinery Table */}
      <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            No machines found matching your criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Machine & Model</th>
                  <th>Series</th>
                  <th>Speed & Needles</th>
                  <th>Embroidery Area</th>
                  <th>Price / Estimate</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => (
                  <tr key={m.id}>
                    <td>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-extrabold text-[#1B4D7A] bg-sky-50 px-2 py-0.5 rounded-lg border border-sky-100">
                            {m.model}
                          </span>
                          {m.badge && (
                            <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full">
                              {m.badge}
                            </span>
                          )}
                        </div>
                        <p className="font-semibold text-slate-900 text-sm mt-1">{m.name}</p>
                      </div>
                    </td>
                    <td>
                      <span className="text-xs font-medium text-slate-600">{m.category}</span>
                    </td>
                    <td>
                      <p className="text-xs font-bold text-slate-800">{m.speed}</p>
                      <p className="text-[11px] text-slate-400">{m.needles} · {m.heads}</p>
                    </td>
                    <td className="text-xs font-mono text-slate-600">
                      {m.embroideryArea}
                    </td>
                    <td>
                      <span className="font-bold text-slate-900 text-sm block">
                        {formatPrice(m.priceNum)}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{m.price}</span>
                    </td>
                    <td>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-lg ${
                          m.stock <= 2
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {m.stock} units
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${m.isActive ? 'status-delivered' : 'status-cancelled'}`}>
                        {m.isActive ? 'Live' : 'Draft'}
                      </span>
                    </td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/machines/${m.slug}`}
                          target="_blank"
                          className="btn-icon p-2 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-xl"
                          title="Preview Machine on Storefront"
                        >
                          <ExternalLink size={15} />
                        </Link>
                        <button
                          onClick={() => {
                            setEditingMachine(m);
                            setIsModalOpen(true);
                          }}
                          className="btn-icon p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl"
                          title="Edit Machine"
                        >
                          <Edit size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(m.id, m.name)}
                          className="btn-icon p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl"
                          title="Delete Machine"
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

      {/* Machine Modal */}
      {isModalOpen && (
        <MachineFormModal
          machine={editingMachine}
          onClose={() => {
            setIsModalOpen(false);
            setEditingMachine(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
