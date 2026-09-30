'use client';

import React from 'react';

export default function MachineComparison() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Find The Right Machine For Your Business
        </h2>
        
        <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-900">
                  <th className="p-4">Feature</th>
                  <th className="p-4">EMB-S1500</th>
                  <th className="p-4">EMB-M4000</th>
                  <th className="p-4">EMB-CAP300</th>
                  <th className="p-4">EMB-HD6000</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <tr className="border-b border-gray-100 bg-white">
                  <td className="p-4 font-medium text-gray-900">Machine Type</td>
                  <td className="p-4">Single Head</td>
                  <td className="p-4">Multi-Head</td>
                  <td className="p-4">Cap Embroidery</td>
                  <td className="p-4">Heavy-Duty</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Number of Heads</td>
                  <td className="p-4">1</td>
                  <td className="p-4">4</td>
                  <td className="p-4">1</td>
                  <td className="p-4">6</td>
                </tr>
                <tr className="border-b border-gray-100 bg-white">
                  <td className="p-4 font-medium text-gray-900">Number of Needles</td>
                  <td className="p-4">15</td>
                  <td className="p-4">12</td>
                  <td className="p-4">12</td>
                  <td className="p-4">15</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Max Speed</td>
                  <td className="p-4">1,200 SPM</td>
                  <td className="p-4">1,000 SPM</td>
                  <td className="p-4">1,000 SPM</td>
                  <td className="p-4">1,100 SPM</td>
                </tr>
                <tr className="border-b border-gray-100 bg-white">
                  <td className="p-4 font-medium text-gray-900">Embroidery Area</td>
                  <td className="p-4">500×350mm</td>
                  <td className="p-4">400×450mm</td>
                  <td className="p-4">360×60mm</td>
                  <td className="p-4">500×450mm</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Ideal For</td>
                  <td className="p-4">Small Business</td>
                  <td className="p-4">Production</td>
                  <td className="p-4">Cap Specialist</td>
                  <td className="p-4">Large Production</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-medium text-gray-900">Price</td>
                  <td className="p-4"><button className="text-[#1B4D7A] font-semibold hover:text-[#D4A853] transition-colors">Request Quote</button></td>
                  <td className="p-4"><button className="text-[#1B4D7A] font-semibold hover:text-[#D4A853] transition-colors">Request Quote</button></td>
                  <td className="p-4"><button className="text-[#1B4D7A] font-semibold hover:text-[#D4A853] transition-colors">Request Quote</button></td>
                  <td className="p-4"><button className="text-[#1B4D7A] font-semibold hover:text-[#D4A853] transition-colors">Request Quote</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-[#1B4D7A] hover:bg-[#153a5c] text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-sm">
            Request General Quote
          </button>
        </div>
      </div>
    </section>
  );
}
