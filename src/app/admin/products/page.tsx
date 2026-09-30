'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Package,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { adminStore, AdminAccessory } from '@/lib/admin-data';
import { formatPrice } from '@/lib/utils';
import ProductFormModal from '@/components/admin/ProductFormModal';
import { toast } from '@/lib/toast';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<AdminAccessory[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingProduct, setEditingProduct] = useState<AdminAccessory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProducts(adminStore.getAccessories());
  }, []);

  const handleSave = (saved: AdminAccessory) => {
    const exists = products.some((p) => p.id === saved.id);
    let updated: AdminAccessory[];
    if (exists) {
      updated = products.map((p) => (p.id === saved.id ? saved : p));
    } else {
      updated = [saved, ...products];
    }
    setProducts(updated);
    adminStore.saveAccessories(updated);
    setEditingProduct(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from accessories?`)) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      adminStore.saveAccessories(updated);
      toast.success(`Accessory "${name}" deleted.`);
    }
  };

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Hoops & Frames', 'Threads & Spools', 'Stabilizers', 'Needles & Parts', 'Software'];

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Accessories & Consumables Catalog</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage spare parts, magnetic hoops, Madeira-grade threads, stabilizers, and software licenses.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
          className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus size={16} /> Add Accessory / Part
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Items', value: products.length.toString(), icon: Package, color: 'text-[#1B4D7A]' },
          { label: 'Active Items', value: products.filter((p) => p.isActive).length.toString(), icon: CheckCircle2, color: 'text-emerald-600' },
          { label: 'Total Units', value: products.reduce((s, p) => s + p.stock, 0).toString(), icon: Layers, color: 'text-indigo-600' },
          { label: 'Low Stock (≤10)', value: products.filter((p) => p.stock <= 10).length.toString(), icon: AlertTriangle, color: 'text-amber-600' },
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

      {/* Search & Categories */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-white p-4 rounded-2xl shadow-card border border-slate-100">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by part name or SKU..."
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

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            No items found matching your filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Product & Description</th>
                  <th>Category</th>
                  <th>SKU Code</th>
                  <th>Catalog Price</th>
                  <th>Compare Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{p.name}</p>
                        <p className="text-xs text-slate-400 truncate max-w-xs">{p.description}</p>
                      </div>
                    </td>
                    <td>
                      <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {p.category}
                      </span>
                    </td>
                    <td className="font-mono text-xs font-semibold text-slate-500">{p.sku}</td>
                    <td className="font-bold text-slate-900 text-sm">{formatPrice(p.price)}</td>
                    <td className="text-xs text-slate-400 line-through">
                      {p.comparePrice ? formatPrice(p.comparePrice) : '—'}
                    </td>
                    <td>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-lg ${
                          p.stock <= 5
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {p.stock} in stock
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${p.isActive ? 'status-delivered' : 'status-cancelled'}`}>
                        {p.isActive ? 'Active' : 'Disabled'}
                      </span>
                    </td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href="/products"
                          target="_blank"
                          className="btn-icon p-2 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-xl"
                          title="View on Storefront"
                        >
                          <ExternalLink size={15} />
                        </Link>
                        <button
                          onClick={() => {
                            setEditingProduct(p);
                            setIsModalOpen(true);
                          }}
                          className="btn-icon p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl"
                          title="Edit Product"
                        >
                          <Edit size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(p.id, p.name)}
                          className="btn-icon p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl"
                          title="Delete Product"
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

      {/* Modal */}
      {isModalOpen && (
        <ProductFormModal
          product={editingProduct}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProduct(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
