
import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video Thumbnail */}
          <div className="relative group cursor-pointer">
            <img
              src="/people.jpg"
              alt="CEO Interview"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg brightness-75 group-hover:brightness-90 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Testimonial</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              How does Techgen solve our client's issues
            </h2>
            <blockquote className="text-xl italic text-slate-600 mb-10 leading-relaxed relative">
              <span className="absolute -top-6 -left-4 text-6xl text-blue-100 font-serif">"</span>
              Switching to solar with Techgen was seamless. We've seen a dramatic reduction in our energy costs. The system runs flawlessly and the installation team was incredibly professional. Highly recommend Techgen for anyone looking for reliability.
            </blockquote>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?u=alex"
                  alt="Alex Martinez"
                  className="w-14 h-14 rounded-full border-2 border-blue-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900">Alex Martinez</h4>
                  <p className="text-sm text-slate-500">CEO of GreenTech Solutions</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
