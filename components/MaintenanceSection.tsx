
import React from 'react';

const MaintenanceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1 flex flex-col">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Maintenance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              Hassle-Free solar maintenance
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Techgen, our solar systems are built to last with minimal maintenance. We use advanced technology and high-quality materials to ensure your system performs optimally for years to come.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">High Quality</h4>
                  <p className="text-sm text-slate-500">Tier 1 components only.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Efficiency</h4>
                  <p className="text-sm text-slate-500">22%+ cell efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-blue-200 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <img 
              src="https://picsum.photos/seed/windsolar/1000/800" 
              alt="Wind Turbine and Solar" 
              className="relative w-full rounded-2xl shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
