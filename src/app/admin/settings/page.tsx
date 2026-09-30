'use client';

import React, { useState, useEffect } from 'react';
import { Save, Building2, Phone, Mail, MapPin, KeyRound, Percent, Calendar, ShieldCheck } from 'lucide-react';
import { adminStore, AdminSettings } from '@/lib/admin-data';
import { toast } from '@/lib/toast';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<AdminSettings>({
    companyName: 'Autosewmart Industrial Machinery',
    tagline: 'Precision Embroidery & Industrial Sewing Workstations',
    email: 'sales@autosewmart.com',
    phone: '+91 72688 66359',
    whatsapp: '+91 72688 66359',
    address: '18E/12A/6, Lakhanpur Road, Prayagraj 211016, Uttar Pradesh, India',
    adminPassword: 'admin123',
    taxPercent: 18,
    currency: 'INR',
    quotationValidityDays: 30,
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setSettings(adminStore.getSettings());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: name === 'taxPercent' || name === 'quotationValidityDays' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      adminStore.saveSettings(settings);
      toast.success('System settings saved successfully!');
    } catch {
      toast.error('Could not save settings');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded-3xl shadow-card border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">System & Machinery Company Profile</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure contact lines, quotation commercial taxes, and admin access keys.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Identity */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Building2 className="text-[#1B4D7A]" size={18} />
            <h3 className="font-bold text-slate-900 text-sm">Industrial Brand Profile</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Company Legal Name</label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Brand Tagline</label>
              <input
                type="text"
                name="tagline"
                value={settings.tagline}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Factory Showroom & Dispatch Address</label>
            <textarea
              rows={2}
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
            />
          </div>
        </div>

        {/* Contact & Dispatch Lines */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Phone className="text-emerald-600" size={18} />
            <h3 className="font-bold text-slate-900 text-sm">Commercial Sales & WhatsApp Dispatch</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Sales Phone Hotline</label>
              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">WhatsApp Direct Order Line</label>
              <input
                type="text"
                name="whatsapp"
                value={settings.whatsapp}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Official RFQ Email</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>
        </div>

        {/* Security & Quotation Terms */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <KeyRound className="text-amber-500" size={18} />
            <h3 className="font-bold text-slate-900 text-sm">Security Password & Commercial Terms</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Admin Access Passcode</label>
              <input
                type="text"
                name="adminPassword"
                value={settings.adminPassword}
                onChange={handleChange}
                placeholder="admin123"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:ring-2 focus:ring-[#1B4D7A]"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Controls entry through the security gate</span>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Applicable GST / Tax (%)</label>
              <input
                type="number"
                name="taxPercent"
                value={settings.taxPercent}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Quotation Validity (Days)</label>
              <input
                type="number"
                name="quotationValidityDays"
                value={settings.quotationValidityDays}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1B4D7A]"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="btn-primary px-8 py-3 text-sm flex items-center gap-2 shadow-lg"
          >
            <Save size={16} />
            {saving ? 'Saving...' : 'Save Configuration'}
          </button>
        </div>
      </form>
    </div>
  );
}
