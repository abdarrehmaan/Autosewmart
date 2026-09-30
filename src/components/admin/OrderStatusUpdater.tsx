'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { AdminOrder } from '@/lib/admin-data';
import { toast } from '@/lib/toast';

interface OrderStatusUpdaterProps {
  orderId: string;
  currentStatus: AdminOrder['status'];
  onStatusUpdated?: (newStatus: AdminOrder['status']) => void;
}

export default function OrderStatusUpdater({
  orderId,
  currentStatus,
  onStatusUpdated,
}: OrderStatusUpdaterProps) {
  const [status, setStatus] = useState<AdminOrder['status']>(currentStatus);
  const [updating, setUpdating] = useState(false);

  const handleUpdate = async () => {
    if (status === currentStatus) return;

    setUpdating(true);
    try {
      if (onStatusUpdated) {
        onStatusUpdated(status);
      }
      toast.success(`Order status updated to ${status}!`);
    } catch (err: any) {
      toast.error(err.message || 'Failed to update order status');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="no-print flex items-center gap-2">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as AdminOrder['status'])}
        disabled={updating}
        className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4D7A]"
      >
        <option value="PENDING">Pending</option>
        <option value="CONFIRMED">Confirmed</option>
        <option value="PROCESSING">Processing</option>
        <option value="SHIPPED">Shipped</option>
        <option value="DELIVERED">Delivered</option>
        <option value="CANCELLED">Cancelled</option>
      </select>
      <button
        onClick={handleUpdate}
        disabled={updating || status === currentStatus}
        className="btn-primary py-2 px-3 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {updating && <Loader2 className="animate-spin" size={13} />}
        Update Status
      </button>
    </div>
  );
}
