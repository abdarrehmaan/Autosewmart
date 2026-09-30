import { 
  Target, 
  Zap, 
  Monitor, 
  Shield, 
  HeadphonesIcon, 
  Settings 
} from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Precision Engineering',
    description: 'Accurate and consistent stitching for professional results.',
    icon: Target,
  },
  {
    id: 2,
    title: 'High Productivity',
    description: 'Designed for efficient production and reduced downtime.',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Easy Operation',
    description: 'User-friendly controls and intuitive machine operation.',
    icon: Monitor,
  },
  {
    id: 4,
    title: 'Reliable Performance',
    description: 'Built for demanding commercial environments.',
    icon: Shield,
  },
  {
    id: 5,
    title: 'Technical Support',
    description: 'Professional installation, training and after-sales support.',
    icon: HeadphonesIcon,
  },
  {
    id: 6,
    title: 'Genuine Parts',
    description: 'Reliable access to genuine machine parts and accessories.',
    icon: Settings,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-28">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide more than just machines; we deliver complete solutions for your business success.
        </p>
      </div>

      <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={benefit.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B4D7A]/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#1B4D7A]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">{benefit.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
