'use client';

import React, { useState, useEffect } from 'react';
import { Star, Plus, Trash2, CheckCircle2, XCircle, MessageSquareQuote, Building } from 'lucide-react';
import { adminStore, AdminReview } from '@/lib/admin-data';
import { generateId } from '@/lib/utils';
import { toast } from '@/lib/toast';

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    role: 'Production Director',
    company: '',
    machineModel: 'EMB-HD6000',
    rating: 5,
    content: '',
  });

  useEffect(() => {
    setReviews(adminStore.getReviews());
  }, []);

  const handleStatusToggle = (id: string, current: AdminReview['status']) => {
    const next: AdminReview['status'] = current === 'PUBLISHED' ? 'PENDING' : 'PUBLISHED';
    const updated = reviews.map((r) => (r.id === id ? { ...r, status: next } : r));
    setReviews(updated);
    adminStore.saveReviews(updated);
    toast.success(`Review status changed to ${next}`);
  };

  const handleDelete = (id: string, author: string) => {
    if (window.confirm(`Are you sure you want to delete review by ${author}?`)) {
      const updated = reviews.filter((r) => r.id !== id);
      setReviews(updated);
      adminStore.saveReviews(updated);
      toast.success('Review removed');
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.content) {
      toast.error('Author and testimonial text are required');
      return;
    }

    const created: AdminReview = {
      id: generateId('REV'),
      author: newReview.author,
      role: newReview.role,
      company: newReview.company || 'Textile Works',
      machineModel: newReview.machineModel,
      rating: newReview.rating,
      content: newReview.content,
      status: 'PUBLISHED',
      date: new Date().toISOString().split('T')[0],
    };

    const updated = [created, ...reviews];
    setReviews(updated);
    adminStore.saveReviews(updated);
    setIsAdding(false);
    setNewReview({
      author: '',
      role: 'Production Director',
      company: '',
      machineModel: 'EMB-HD6000',
      rating: 5,
      content: '',
    });
    toast.success('New testimonial added to website');
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Client Reviews & Factory Testimonials</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage feedback from industrial clients, apparel factories, and embroidery workshops.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus size={16} /> Add Testimonial
        </button>
      </div>

      {/* Add Review Drawer */}
      {isAdding && (
        <form onSubmit={handleAddReview} className="bg-white p-6 rounded-3xl shadow-card border border-slate-200 space-y-4 animate-fade-in-up">
          <h3 className="font-bold text-slate-900 text-sm">Add Client Feedback</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Author Name *</label>
              <input
                type="text"
                required
                value={newReview.author}
                onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                placeholder="e.g. Sunil Mehta"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Job Title</label>
              <input
                type="text"
                value={newReview.role}
                onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Company & City</label>
              <input
                type="text"
                value={newReview.company}
                onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                placeholder="e.g. Mehta Textile Mills, Surat"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Machine Model</label>
              <input
                type="text"
                value={newReview.machineModel}
                onChange={(e) => setNewReview({ ...newReview, machineModel: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Rating (1 to 5 Stars)</label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) || 5 })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#1B4D7A]"
              >
                <option value="5">5 Stars (Exceptional)</option>
                <option value="4">4 Stars (Very Good)</option>
                <option value="3">3 Stars (Average)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Testimonial Quote *</label>
            <textarea
              rows={3}
              required
              value={newReview.content}
              onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
              placeholder="Describe production reliability, stitch precision, and service experience..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
            />
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
              Save Testimonial
            </button>
          </div>
        </form>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}
                    />
                  ))}
                </div>
                <button
                  onClick={() => handleStatusToggle(rev.id, rev.status)}
                  className={`status-badge ${rev.status === 'PUBLISHED' ? 'status-delivered' : 'status-pending'}`}
                >
                  {rev.status}
                </button>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                &ldquo;{rev.content}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{rev.author}</h4>
                  <p className="text-[11px] text-slate-500">{rev.role}</p>
                  <p className="text-[10px] text-[#1B4D7A] font-semibold">{rev.company}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 block mb-2">
                    {rev.machineModel}
                  </span>
                  <button
                    onClick={() => handleDelete(rev.id, rev.author)}
                    className="text-slate-400 hover:text-rose-600 p-1"
                    title="Delete Review"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
