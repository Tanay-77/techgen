
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="Solar Panels Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/95 via-blue-50/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Powering the Future with <span className="text-blue-600">Sustainable</span> Solar Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Cutting-edge solar energy technology for a greener tomorrow. Join the revolution in renewable energy with innovative solutions designed for efficiency and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white hover:bg-slate-50 text-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl border border-blue-100 active:scale-95">
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="hidden lg:flex justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-[400px]">
                <img 
                  src="https://picsum.photos/seed/panels/800/600" 
                  alt="Solar Installation" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      ADVANCED SOLAR PANEL INSTALLATION
                    </h3>
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">
                    Join the revolution in renewable energy with innovative solutions designed for efficiency and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
