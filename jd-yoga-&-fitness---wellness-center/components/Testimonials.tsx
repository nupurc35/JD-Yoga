
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Aditya Sarma',
      role: 'IT Professional',
      text: 'Joining JD Yoga was the best decision for my back pain. The personal attention I received helped me recover faster than any medicine could.',
      stars: 5,
    },
    {
      name: 'Priyanka Das',
      role: 'Homemaker',
      text: 'Lost 8kg in 3 months! The weight loss program is very structured and the diet plan provided was easy to follow. Highly recommended!',
      stars: 5,
    },
    {
      name: 'Vikram Barua',
      role: 'Businessman',
      text: 'The meditation sessions here are incredibly peaceful. It has helped me manage my work stress and improved my focus tremendously.',
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Happy Clients</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-teal-50 relative reveal reveal-up"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex text-amber-400 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xl mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
