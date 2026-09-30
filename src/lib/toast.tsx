'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Standalone toast helper for direct calls
let toastEmitter: ((message: string, type: 'success' | 'error' | 'info') => void) | null = null;

export const toast = {
  success: (msg: string) => toastEmitter?.(msg, 'success'),
  error: (msg: string) => toastEmitter?.(msg, 'error'),
  info: (msg: string) => toastEmitter?.(msg, 'info'),
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, [removeToast]);

  React.useEffect(() => {
    toastEmitter = addToast;
    return () => {
      toastEmitter = null;
    };
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl shadow-xl border backdrop-blur-md text-sm font-medium transition-all duration-300 animate-fade-in-up ${
              t.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100 shadow-emerald-950/50'
                : t.type === 'error'
                ? 'bg-red-950/90 border-red-500/40 text-red-100 shadow-red-950/50'
                : 'bg-gray-900/95 border-white/20 text-white shadow-black/50'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {t.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
              {t.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
              {t.type === 'info' && <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />}
              <span className="truncate">{t.message}</span>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close notification"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      success: (msg: string) => toast.success(msg),
      error: (msg: string) => toast.error(msg),
      info: (msg: string) => toast.info(msg),
    };
  }
  return {
    success: (msg: string) => context.addToast(msg, 'success'),
    error: (msg: string) => context.addToast(msg, 'error'),
    info: (msg: string) => context.addToast(msg, 'info'),
  };
}

export default toast;
