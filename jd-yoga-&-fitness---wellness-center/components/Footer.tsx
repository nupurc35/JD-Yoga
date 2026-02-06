
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <a href="#home" className="flex flex-col mb-8">
              <span className="text-2xl font-bold text-white tracking-tight leading-none font-serif">
                JD YOGA & FITNESS
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-teal-500 font-medium mt-1">
                Wellness Center
              </span>
            </a>
            <p className="leading-relaxed mb-8 max-w-sm">
              Your destination for holistic health and wellness in Guwahati. 
              We blend ancient traditions with modern fitness techniques to help you thrive.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">Ph:</span>
                <div>
                  <p>+91 98640 00295</p>
                  <p>+91 94350 78710</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">Loc:</span>
                <p>Guwahati, Assam, India</p>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-teal-400 transition-colors">About Us</a>
              <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
              <a href="#benefits" className="hover:text-teal-400 transition-colors">Benefits</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} JD Yoga & Fitness. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
