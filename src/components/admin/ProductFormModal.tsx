'use client';

import React, { useState } from 'react';
import { X, Save, Package } from 'lucide-react';
import { AdminAccessory } from '@/lib/admin-data';
import { generateId } from '@/lib/utils';
import { toast } from '@/lib/toast';

interface ProductFormModalProps {
  product?: AdminAccessory | null;
  onClose: () => void;
  onSave: (product: AdminAccessory) => void;
}

export default function ProductFormModal({ product, onClose, onSave }: ProductFormModalProps) {
  const isEditing = !!product;

  const [formData, setFormData] = useState<AdminAccessory>({
    id: product?.id || generateId('ACC'),
    name: product?.name || '',
    category: product?.category || 'Hoops & Frames',
    sku: product?.sku || `ACC-${Math.floor(1000 + Math.random() * 9000)}`,
    price: product?.price ?? 2500,
    comparePrice: product?.comparePrice ?? 3200,
    stock: product?.stock ?? 20,
    image: product?.image || '/images/accessories.jpg',
    description: product?.description || '',
    isActive: product?.isActive ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Item name is required');
      return;
    }

    onSave(formData);
    toast.success(isEditing ? 'Accessory updated successfully' : 'Accessory added to catalog');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B4D7A]/10 text-[#1B4D7A] flex items-center justify-center font-bold">
              <Package size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                {isEditing ? `Edit: ${product.name}` : 'Add Accessory / Consumable'}
              </h3>
              <p className="text-xs text-slate-500">Hoops, needles, threads, and consumables catalog</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn-icon p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-xl"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Item Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Magnetic Tubular Hoop 8-Pack"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              >
                <option value="Hoops & Frames">Hoops & Frames</option>
                <option value="Threads & Spools">Threads & Spools</option>
                <option value="Stabilizers">Stabilizers</option>
                <option value="Needles & Parts">Needles & Parts</option>
                <option value="Software">Software</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">SKU Code</label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Price (₹)</label>
              <input
                type="number"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Original (₹)</label>
              <input
                type="number"
                min="0"
                value={formData.comparePrice || ''}
                onChange={(e) => setFormData({ ...formData, comparePrice: parseFloat(e.target.value) || undefined })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Stock Units</label>
              <input
                type="number"
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 rounded text-[#1B4D7A] focus:ring-[#1B4D7A]"
              />
              <span className="text-xs font-semibold text-slate-700">Available for Ordering</span>
            </label>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary px-5 py-2.5 text-xs flex items-center gap-2"
            >
              <Save size={15} />
              {isEditing ? 'Save Changes' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
