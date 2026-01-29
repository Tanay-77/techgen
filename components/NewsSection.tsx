
import React from 'react';
import { LATEST_NEWS } from '../constants';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4 block">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Latest News</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline">
            View All Posts
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_NEWS.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-slate-100"
              data-aos="fade-up"
              data-aos-delay={news.id * 100}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {news.description}
                </p>
                <a
                  href={news.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
