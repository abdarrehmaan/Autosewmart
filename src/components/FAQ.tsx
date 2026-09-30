'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Which embroidery machine is suitable for beginners?',
    answer: 'Our Single Head Embroidery Machine (EMB-S1500) is ideal for beginners. It features user-friendly controls, intuitive software, and comes with comprehensive training to get you started.'
  },
  {
    question: 'What is the difference between single-head and multi-head machines?',
    answer: 'Single-head machines have one embroidery head and are suitable for small-scale or custom work. Multi-head machines have multiple heads (4-6) allowing simultaneous production of identical designs, significantly increasing output for commercial operations.'
  },
  {
    question: 'How fast can the machine embroider?',
    answer: 'Our machines operate at speeds ranging from 1,000 to 1,200 stitches per minute for embroidery machines, and up to 5,000 SPM for industrial sewing machines. Actual speed depends on the design complexity and fabric type.'
  },
  {
    question: 'Do you provide installation?',
    answer: 'Yes, we provide professional on-site installation for all machines. Our technicians will set up the machine, calibrate it, and ensure everything is running perfectly.'
  },
  {
    question: 'Do you provide operator training?',
    answer: 'Absolutely. We offer comprehensive operator training covering machine operation, design loading, thread management, maintenance, and troubleshooting.'
  },
  {
    question: 'Is warranty included?',
    answer: 'Yes, all our machines come with a standard warranty covering manufacturing defects and mechanical components. Extended warranty options are also available.'
  },
  {
    question: 'Are spare parts available?',
    answer: 'We maintain a comprehensive inventory of genuine spare parts and accessories. Parts can be ordered directly and are typically available for immediate dispatch.'
  },
  {
    question: 'Do you provide after-sales service?',
    answer: 'Yes, we offer complete after-sales support including regular maintenance, emergency repairs, software updates, and technical consultation.'
  },
  {
    question: 'Can I request a machine demonstration?',
    answer: 'Yes, you can request a live demonstration at our showroom or arrange for a virtual demonstration. Contact our sales team to schedule a demo.'
  },
  {
    question: 'How can I get a quotation?',
    answer: 'You can request a quotation by filling out our quote request form, contacting us via WhatsApp, calling our sales team, or sending an email with your requirements.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-6" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our embroidery machines, installation, and support.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden max-w-3xl mx-auto shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
