
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl opacity-30 blur-xl"></div>
            <img
              src="https://picsum.photos/seed/worker/1000/800"
              alt="Solar Technicians"
              className="relative w-full rounded-2xl shadow-xl z-10"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Leading the way in
              <br className="hidden lg:block" />
              solar innovation
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Techgen, we are pioneers in providing cutting-edge solar energy solutions that empower businesses and homes to embrace clean, sustainable power.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our mission is to revolutionize the energy landscape with advanced technology, driving a future that's powered by the sun. We focus on long-term value, reliability, and maximum energy harvest for every installation.
            </p>
            <a
              href="#learn-more"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all text-lg group"
            >
              Learn More
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
