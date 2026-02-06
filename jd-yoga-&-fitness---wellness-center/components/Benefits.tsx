
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    'Improve Flexibility & Balance',
    'Reduce Chronic Stress & Anxiety',
    'Build Core Strength & Muscle Tone',
    'Correct Posture & Spinal Alignment',
    'Boost Energy Levels & Vitality',
    'Enhanced Mental Clarity & Focus',
  ];

  return (
    <section id="benefits" className="py-24 bg-teal-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#ffffff" d="M44.7,-76.4C58.2,-69.2,70.1,-58.5,78.2,-45.4C86.3,-32.3,90.7,-16.1,88.8,-0.7C86.9,14.6,78.8,29.3,69.5,43C60.2,56.7,49.8,69.5,36.4,75.4C23,81.4,6.7,80.5,-10.1,77.5C-26.9,74.5,-44.1,69.4,-57,59.3C-69.9,49.2,-78.4,34.1,-81.7,18.4C-84.9,2.6,-83,-13.8,-76.1,-28C-69.2,-42.2,-57.4,-54.1,-43.8,-61.2C-30.2,-68.3,-15.1,-70.6,0.3,-71.2C15.7,-71.7,31.3,-70.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal reveal-up">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">Elevate Your Lifestyle</h2>
            <p className="text-teal-100 text-lg mb-10 leading-relaxed">
              We focus on a science-backed holistic approach that delivers visible results in your physical 
              health and a profound shift in your mental wellbeing.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-lg">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative reveal reveal-up">
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-teal-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800" 
                alt="Fitness Training" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-teal-900 font-bold text-4xl leading-none">10+</div>
              <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
