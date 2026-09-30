'use client';

import React from 'react';
import { Printer } from 'lucide-react';

interface PrintInvoiceButtonProps {
  label?: string;
  className?: string;
}

export default function PrintInvoiceButton({ label = 'Print Invoice', className = '' }: PrintInvoiceButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={`no-print inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer ${className}`}
      title="Print or Save Invoice as PDF"
    >
      <Printer size={15} />
      <span>{label}</span>
    </button>
  );
}
