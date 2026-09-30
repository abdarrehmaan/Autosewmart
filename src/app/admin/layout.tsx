'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { Lock, Eye, EyeOff, Loader2, ShieldCheck, KeyRound, Scissors } from 'lucide-react';
import { ToastProvider, toast } from '@/lib/toast';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('admin_authenticated', 'true');
        setIsAuthenticated(true);
        toast.success('Access granted to Autosewmart Admin!');
      } else {
        toast.error(data.error || 'Invalid password. Try admin123');
      }
    } catch {
      // Fallback local check
      if (password === 'admin123') {
        sessionStorage.setItem('admin_authenticated', 'true');
        setIsAuthenticated(true);
        toast.success('Access granted!');
      } else {
        toast.error('Authentication failed');
      }
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#090e17]">
        <Loader2 className="animate-spin text-[#38bdf8]" size={36} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <ToastProvider>
        <div className="min-h-screen flex items-center justify-center bg-[#090e17] px-4 relative overflow-hidden select-none">
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1B4D7A]/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4A853]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-md w-full bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative z-10">
            {/* Header Badge */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-[#1B4D7A]/20 border border-[#1B4D7A]/40 rounded-2xl flex items-center justify-center mb-4 text-[#D4A853] shadow-inner">
                <Scissors size={32} />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-sky-950/60 border border-sky-800/40 rounded-full text-sky-400 text-xs font-semibold mb-3">
                <Lock size={12} />
                <span>Restricted Control Portal</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Autosewmart Admin</h1>
              <p className="text-slate-400 text-sm mt-1">
                Enter your administrative key to access machinery, quotations, and client records.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Security Passcode
                </label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password..."
                    className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A] focus:border-transparent text-base transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <KeyRound size={12} className="text-[#D4A853]" />
                    Default demo key: <strong className="text-slate-300">admin123</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setPassword('admin123')}
                    className="text-[11px] text-[#38bdf8] hover:underline"
                  >
                    Auto-fill
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3.5 bg-gradient-to-r from-[#1B4D7A] to-[#0F3152] hover:from-[#2A6BA8] hover:to-[#1B4D7A] disabled:opacity-50 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-sky-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <ShieldCheck size={18} className="text-[#D4A853]" />}
                Authorize & Enter Portal
              </button>
            </form>
          </div>
        </div>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      <div className="flex h-screen bg-[#f8fafc] overflow-hidden relative">
        <div className="no-print">
          <AdminSidebar mobileOpen={isMobileOpen} setMobileOpen={setIsMobileOpen} />
        </div>
        
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="no-print">
            <AdminHeader setMobileOpen={setIsMobileOpen} />
          </div>
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </ToastProvider>
  );
}
