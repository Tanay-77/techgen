
import React from 'react';
import { STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Label Column */}
          <div className="lg:w-1/4">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 block">
              ADVANCED
              <br />
              INNOVATIONS
            </span>
          </div>

          {/* Stats Flex */}
          <div className="flex-1 flex flex-col sm:flex-row justify-between items-center gap-8 lg:gap-16 w-full">
            {STATS.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 font-medium leading-tight max-w-[100px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
