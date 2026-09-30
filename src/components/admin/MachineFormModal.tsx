'use client';

import React, { useState } from 'react';
import { X, Save, Cpu, Sparkles } from 'lucide-react';
import { AdminMachine } from '@/lib/admin-data';
import { slugify, generateId } from '@/lib/utils';
import { toast } from '@/lib/toast';

interface MachineFormModalProps {
  machine?: AdminMachine | null;
  onClose: () => void;
  onSave: (machine: AdminMachine) => void;
}

export default function MachineFormModal({ machine, onClose, onSave }: MachineFormModalProps) {
  const isEditing = !!machine;

  const [formData, setFormData] = useState<AdminMachine>({
    id: machine?.id || generateId('MC'),
    slug: machine?.slug || '',
    name: machine?.name || '',
    model: machine?.model || '',
    category: machine?.category || 'Single-Head',
    badge: machine?.badge || '',
    shortDescription: machine?.shortDescription || '',
    description: machine?.description || '',
    image: machine?.image || '/images/emb-s1500.jpg',
    speed: machine?.speed || '1,200 SPM',
    needles: machine?.needles || '15 Needles',
    embroideryArea: machine?.embroideryArea || '500 × 350 mm',
    heads: machine?.heads || '1 Head',
    price: machine?.price || 'Request Quote',
    priceNum: machine?.priceNum || 250000,
    stock: machine?.stock ?? 5,
    isActive: machine?.isActive ?? true,
    isFeatured: machine?.isFeatured ?? false,
    warranty: machine?.warranty || '2-Year Comprehensive Manufacturer Warranty',
    createdAt: machine?.createdAt || new Date().toISOString(),
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      name: val,
      slug: isEditing ? prev.slug : slugify(val),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.model) {
      toast.error('Name and Model are required');
      return;
    }

    onSave(formData);
    toast.success(isEditing ? 'Machine updated successfully' : 'New machine added to catalog');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B4D7A]/10 text-[#1B4D7A] flex items-center justify-center font-bold">
              <Cpu size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                {isEditing ? `Edit Machine: ${machine.model}` : 'Add New Machine'}
              </h3>
              <p className="text-xs text-slate-500">Specify engineering specs, production speeds, and catalog pricing</p>
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
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Machine Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={handleNameChange}
                placeholder="e.g. Single Head Embroidery Machine"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Model Code *</label>
              <input
                type="text"
                required
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                placeholder="e.g. EMB-S1500"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              >
                <option value="Single-Head">Single-Head</option>
                <option value="Multi-Head">Multi-Head</option>
                <option value="Computerized Sewing">Computerized Sewing</option>
                <option value="Industrial Sewing">Industrial Sewing</option>
                <option value="Cap & Tubular">Cap & Tubular</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Badge Tag</label>
              <input
                type="text"
                value={formData.badge || ''}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="Best Seller / Flagship"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Stock Units</label>
              <input
                type="number"
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Base Price / Estimate (₹)</label>
              <input
                type="number"
                value={formData.priceNum}
                onChange={(e) => setFormData({ ...formData, priceNum: parseInt(e.target.value) || 0 })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Display Price Label</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="Request Quote"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          {/* Technical Specs */}
          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#D4A853]" />
              Engineering Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block">Stitch Speed</label>
                <input
                  type="text"
                  value={formData.speed}
                  onChange={(e) => setFormData({ ...formData, speed: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#1B4D7A]"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block">Needles</label>
                <input
                  type="text"
                  value={formData.needles}
                  onChange={(e) => setFormData({ ...formData, needles: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#1B4D7A]"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block">Sewing Heads</label>
                <input
                  type="text"
                  value={formData.heads}
                  onChange={(e) => setFormData({ ...formData, heads: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#1B4D7A]"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block">Field Area</label>
                <input
                  type="text"
                  value={formData.embroideryArea}
                  onChange={(e) => setFormData({ ...formData, embroideryArea: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#1B4D7A]"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Short Description</label>
            <textarea
              rows={2}
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
            />
          </div>

          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 rounded text-[#1B4D7A] focus:ring-[#1B4D7A]"
              />
              <span className="text-xs font-semibold text-slate-700">Active in Public Catalog</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="w-4 h-4 rounded text-[#1B4D7A] focus:ring-[#1B4D7A]"
              />
              <span className="text-xs font-semibold text-slate-700">Featured on Homepage</span>
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
              {isEditing ? 'Save Machine' : 'Create Machine'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
