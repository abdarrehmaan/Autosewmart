import React from 'react';
import { Search, FileText, Settings, Play } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Choose Your Machine',
      description: 'Find the machine suitable for your production requirements.',
      icon: Search,
    },
    {
      id: 2,
      title: 'Request a Quote',
      description: 'Send your requirements to our sales team.',
      icon: FileText,
    },
    {
      id: 3,
      title: 'Installation & Training',
      description: 'Get professional installation and machine training.',
      icon: Settings,
    },
    {
      id: 4,
      title: 'Start Producing',
      description: 'Begin creating high-quality embroidery products.',
      icon: Play,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h2>
        
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] border-t-2 border-dashed border-gray-300 z-0"></div>
          
          {/* Mobile connecting line */}
          <div className="lg:hidden absolute top-7 bottom-7 left-7 border-l-2 border-dashed border-gray-300 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex lg:flex-col items-start lg:items-center relative">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-[#1B4D7A] text-white flex items-center justify-center text-xl font-bold shadow-md lg:mx-auto z-10">
                    {step.id}
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-6 lg:text-center">
                    <div className="flex items-center lg:justify-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-[#D4A853] hidden lg:block" />
                      <h3 className="font-semibold text-lg text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
