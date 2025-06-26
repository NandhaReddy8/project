import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const CTA = () => {
  const handleContactRedirect = () => {
    window.open('https://virtuestech.com/contact/', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[400px]" style={{ minHeight: '60vh' }}>
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your
              <span className="text-orange-400"> Organization?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a security incident to happen. Get proactive protection 
              with our comprehensive SOC as a Service solution. Contact us today for 
              a personalized security assessment.
            </p>
            <div className="space-y-4 mb-8 flex flex-col items-center">
              <div className="flex items-start gap-4 justify-center">
                <div className="bg-orange-500 p-3 rounded-lg mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">Our Location</div>
                  <div className="text-gray-300 leading-relaxed">
                    AO-06, Block A, Indu Fortune Fields -<br />
                    The Annexe, K P H B Phase 7, Kukatpally,<br />
                    Hyderabad, Telangana - 500085<br />
                    <span className="text-orange-400 font-medium">+91 733 746 2335</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactRedirect}
                className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleContactRedirect}
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;