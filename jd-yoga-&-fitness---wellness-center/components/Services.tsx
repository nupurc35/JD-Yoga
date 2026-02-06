
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Yoga Classes',
      desc: 'Hatha, Vinyasa, and Ashtanga yoga for all levels. Focus on breath, balance, and inner peace.',
      img: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Weight Loss Programs',
      desc: 'Scientific and natural approach to fat loss with customized diet plans and targeted workouts.',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Meditation Sessions',
      desc: 'Guided mindfulness and meditation techniques to reduce anxiety and improve mental clarity.',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Personal Training',
      desc: 'One-on-one sessions focused on strength, endurance, and your personal fitness milestones.',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal reveal-up">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-lg text-gray-600">Choose the path that fits your wellness goals. We provide expert guidance for every step.</p>
          </div>
          <a href="#contact" className="text-teal-600 font-bold flex items-center group">
            Book a Free Consultation
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative h-96 overflow-hidden rounded-2xl reveal reveal-up shadow-lg"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
