import React from 'react';
import { Truck, Sparkles, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export default function AnnouncementBar() {
  return (
    <aside aria-label="Store announcement" className="bg-gradient-to-r from-honey-900 via-honey-800 to-honey-900 text-honey-100 text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-honey-700/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2 font-medium">
          <Truck className="w-3.5 h-3.5 text-honey-300 animate-pulse" />
          <span>
            <strong className="text-honey-200 font-semibold">FREE Shipping</strong> across India on orders above ₹2,000!
          </span>
          <span className="hidden md:inline-block text-honey-400/80">•</span>
          <span className="hidden md:inline-flex items-center gap-1 text-honey-200">
            <Sparkles className="w-3.5 h-3.5 text-honey-300" />
            Use coupon <span className="bg-honey-700/80 px-1.5 py-0.5 rounded text-white font-mono font-bold tracking-wider text-xs">MADHURUM10</span> for 10% off
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a 
            href={`tel:${BRAND_INFO.contact.phoneRaw}`} 
            className="hidden lg:flex items-center gap-1.5 text-honey-200 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-honey-300" />
            <span>Support: {BRAND_INFO.contact.phone}</span>
          </a>
          <span className="text-honey-300/80 font-medium">
            100% Raw & Unpasteurized Apiary Honey
          </span>
        </div>
      </div>
    </aside>
  );
}
