'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Grid3X3, Edit, Trash2, Layers, Cpu, Save, X } from 'lucide-react';
import { adminStore, AdminCategory } from '@/lib/admin-data';
import { slugify, generateId } from '@/lib/utils';
import { toast } from '@/lib/toast';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<AdminCategory[]>([]);
  const [editingCategory, setEditingCategory] = useState<AdminCategory | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newCat, setNewCat] = useState({ name: '', description: '' });

  useEffect(() => {
    setCategories(adminStore.getCategories());
  }, []);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCat.name) {
      toast.error('Category name is required');
      return;
    }

    const created: AdminCategory = {
      id: generateId('CAT'),
      name: newCat.name,
      slug: slugify(newCat.name),
      description: newCat.description || 'Specialized embroidery engineering classification.',
      machineCount: 0,
    };

    const updated = [...categories, created];
    setCategories(updated);
    adminStore.saveCategories(updated);
    setIsAdding(false);
    setNewCat({ name: '', description: '' });
    toast.success(`Category "${created.name}" created`);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory) return;

    const updated = categories.map((c) => (c.id === editingCategory.id ? editingCategory : c));
    setCategories(updated);
    adminStore.saveCategories(updated);
    setEditingCategory(null);
    toast.success(`Category "${editingCategory.name}" updated`);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete category "${name}"?`)) {
      const updated = categories.filter((c) => c.id !== id);
      setCategories(updated);
      adminStore.saveCategories(updated);
      toast.success(`Category "${name}" removed`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Machine Series & Classifications</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Organize single-head, multi-head, cap embroidery, and industrial lockstitch categories.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus size={16} /> Add Category Series
        </button>
      </div>

      {/* Add Category Drawer / Card */}
      {isAdding && (
        <form onSubmit={handleCreate} className="bg-white p-6 rounded-3xl shadow-card border border-slate-200 space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Create New Machinery Series</h3>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-slate-400 hover:text-slate-700"
            >
              <X size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Series Name *</label>
              <input
                type="text"
                required
                value={newCat.name}
                onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
                placeholder="e.g. Ultra-High Speed Tubular"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Description</label>
              <input
                type="text"
                value={newCat.description}
                onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
                placeholder="Brief summary of suitability..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
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
              Save Category
            </button>
          </div>
        </form>
      )}

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#1B4D7A]/10 text-[#1B4D7A] flex items-center justify-center">
                  <Grid3X3 size={20} />
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {cat.machineCount} {cat.machineCount === 1 ? 'Machine' : 'Items'}
                </span>
              </div>

              {editingCategory?.id === cat.id ? (
                <form onSubmit={handleUpdate} className="space-y-3 mt-2">
                  <input
                    type="text"
                    required
                    value={editingCategory.name}
                    onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm font-bold"
                  />
                  <textarea
                    rows={2}
                    value={editingCategory.description}
                    onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingCategory(null)}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary px-3 py-1 text-xs">
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{cat.name}</h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">slug: {cat.slug}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{cat.description}</p>
                </>
              )}
            </div>

            {editingCategory?.id !== cat.id && (
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 text-xs">
                <span className="text-slate-400 font-medium">Catalog Active</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditingCategory(cat)}
                    className="btn-icon p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg"
                    title="Edit Series"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id, cat.name)}
                    className="btn-icon p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                    title="Delete Series"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
