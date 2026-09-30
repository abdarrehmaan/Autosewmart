import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      business: 'Khan Textiles',
      location: 'Karachi',
      stars: 5,
      quote: 'The multi-head machine has doubled our production capacity. Excellent quality and reliable performance.',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      business: 'Elite Embroidery',
      location: 'Dubai',
      stars: 5,
      quote: 'Outstanding machines with exceptional stitch quality. The technical support team is always responsive.',
    },
    {
      id: 3,
      name: 'Rajesh Patel',
      business: 'RP Garments',
      location: 'Mumbai',
      stars: 4,
      quote: 'Great value for investment. Installation and training were professional. Very satisfied with the performance.',
    },
    {
      id: 4,
      name: 'Maria Santos',
      business: 'Santos Fashion',
      location: 'Manila',
      stars: 5,
      quote: 'The cap embroidery machine is perfect for our business. Precise stitching and easy to operate.',
    },
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-100 text-gray-200'}`} 
      />
    ));
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Trusted By Businesses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.stars)}
              </div>
              <p className="text-gray-600 italic text-sm mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{testimonial.business}</p>
                <p className="text-xs text-gray-400 mt-0.5">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
