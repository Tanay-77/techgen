
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Solar Panels Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6">
              Powering the Future with Sustainable Solar Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 mb-10 leading-relaxed max-w-xl font-light">
              Cutting-edge solar energy technology for a greener tomorrow. Join the revolution in renewable energy with innovative solutions designed for efficiency and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white hover:bg-blue-50 text-black px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl hover:shadow-2xl active:scale-95">
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="hidden lg:flex flex-col items-end gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <p className="text-blue-50/90 text-sm max-w-xs text-left leading-relaxed font-light">
              Join the revolution in renewable energy with innovative solutions designed for efficiency and sustainability.
            </p>
            <div className="relative group w-80">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-sm overflow-hidden shadow-2xl p-6">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-24 h-24 overflow-hidden shadow-sm">
                    <img
                      src="https://i.pinimg.com/736x/65/b9/49/65b949a6c2be94b7aa2bc2a2a6288ebd.jpg"
                      alt="Solar Installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-slate-900 cursor-pointer hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19L19 5M19 5H9M19 5V15" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight uppercase tracking-wide">
                    ADVANCE SOLAR <br /> PANEL INSTALLATION
                  </h3>
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
