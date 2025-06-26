import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-orange-300 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-80 right-1/3 w-1.5 h-1.5 bg-orange-200 rounded-full animate-ping delay-300"></div>
      </div>

      {/* Network Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369ba" />
              <stop offset="100%" stopColor="#FF963f" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M100,400 Q300,300 500,400 T900,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M100,600 Q300,500 500,600 T900,600" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M100,800 Q300,700 500,800 T900,800" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center w-full">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              SOC as a Service
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
              for Proactive Network Security
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Advanced threat detection and response capabilities delivered as a service. 
            Protect your organization with enterprise-grade security operations center solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToContact}
              className="group border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;