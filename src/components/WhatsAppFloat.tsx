'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltip);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 max-w-[220px] animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sm text-gray-700 font-medium">Need help choosing a machine?</p>
          <p className="text-xs text-gray-500 mt-1">Chat with us on WhatsApp</p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917268866359?text=Hi%2C%20I%27m%20interested%20in%20your%20sewing%20and%20embroidery%20machines."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
