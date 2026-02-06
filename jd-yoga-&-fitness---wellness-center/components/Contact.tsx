
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal reveal-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Let's Start Your <br />
              <span className="text-teal-600 italic">Transformation</span> Today
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Have questions or want to visit our center? Reach out to us via call or fill the form and we'll get back to you shortly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-xl mr-5">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <div className="space-y-1">
                    <a href="tel:9864000295" className="text-teal-600 hover:text-teal-700 block text-lg font-medium">+91 98640 00295</a>
                    <a href="tel:9435078710" className="text-teal-600 hover:text-teal-700 block text-lg font-medium">+91 94350 78710</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-xl mr-5">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600 text-lg">Guwahati, Assam, India</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 rounded-3xl overflow-hidden border-4 border-teal-50 shadow-inner h-64 grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.03222718118!2d91.66442646675548!3d26.17222340576307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5927484c5a23%3A0x631d996c4f1d5ca2!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-teal-50 p-10 md:p-14 rounded-3xl reveal reveal-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Your mobile number" 
                  className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Interested In</label>
                <select className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm">
                  <option>Yoga Classes</option>
                  <option>Weight Loss</option>
                  <option>Meditation</option>
                  <option>Personal Training</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-teal-600 text-white font-bold py-5 rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
