
import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const activeTestimonial = TESTIMONIALS[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video Thumbnail */}
          <div className="relative group cursor-pointer" data-aos="zoom-in">
            <img
              key={activeTestimonial.image}
              src={activeTestimonial.image}
              alt="Testimonial Visual"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg brightness-75 group-hover:brightness-90 transition-all animate-in fade-in duration-500"
            />

          </div>

          {/* Right: Content */}
          <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Testimonial</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              How does Techgen solve our client's issues
            </h2>
            <blockquote className="min-h-[160px]">
              <p
                key={activeTestimonial.id}
                className="text-xl italic text-slate-600 mb-10 leading-relaxed relative animate-in fade-in slide-in-from-right-4 duration-500"
              >
                <span className="absolute -top-6 -left-4 text-6xl text-blue-100 font-serif">"</span>
                {activeTestimonial.quote}
              </p>
            </blockquote>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  className="w-14 h-14 rounded-full border-2 border-blue-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{activeTestimonial.author}</h4>
                  <p className="text-sm text-slate-500">{activeTestimonial.role}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-90"
                >
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
