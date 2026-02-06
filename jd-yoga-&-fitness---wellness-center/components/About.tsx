
import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      title: 'Certified Trainers',
      desc: 'Learn from highly experienced professionals dedicated to your growth.',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Personalized Programs',
      desc: 'Custom fitness and yoga routines tailored to your specific health goals.',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Peaceful Environment',
      desc: 'A serene space designed to help you disconnect from stress and reconnect with yourself.',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Empowering Your Journey</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            JD Yoga & Fitness is more than just a gym. We are a holistic wellness center in the heart of Guwahati, 
            focused on transforming lives through Yoga, Weight Loss, Meditation, and Strength Training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-up border border-teal-50"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
