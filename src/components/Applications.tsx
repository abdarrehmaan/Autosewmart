'use client';

import { 
  Factory, 
  Scissors, 
  GraduationCap, 
  Store, 
  Crown, 
  Target, 
  Home, 
  Building2, 
  Palette, 
  Gift 
} from 'lucide-react';

const applications = [
  { id: 1, name: 'Garment Manufacturing', desc: 'High-volume production line embroidery', icon: Factory },
  { id: 2, name: 'Custom Clothing', desc: 'Personalized fashion and streetwear', icon: Scissors },
  { id: 3, name: 'School & College Uniforms', desc: 'Durable crests and logos for schools', icon: GraduationCap },
  { id: 4, name: 'Boutique Businesses', desc: 'Premium retail embroidery services', icon: Store },
  { id: 5, name: 'Cap Embroidery', desc: 'Specialized headwear decoration', icon: Crown },
  { id: 6, name: 'Logo Embroidery', desc: 'Corporate branding and badges', icon: Target },
  { id: 7, name: 'Home Textiles', desc: 'Towels, bedding, and interior fabrics', icon: Home },
  { id: 8, name: 'Corporate Merchandise', desc: 'Professional company apparel', icon: Building2 },
  { id: 9, name: 'Fashion & Apparel', desc: 'Intricate designs for designer wear', icon: Palette },
  { id: 10, name: 'Promotional Products', desc: 'Event giveaways and branded items', icon: Gift },
];

export default function Applications() {
  return (
    <section id="applications" className="bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-28">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Built For Every Creative Business
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover how our machines empower different industries to achieve outstanding results.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div 
                key={app.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-[#1B4D7A]/5 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-[#1B4D7A]" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{app.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{app.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
