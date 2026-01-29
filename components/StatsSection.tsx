
import React from 'react';
import { STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {/* Label Column */}
          <div className="col-span-2 lg:col-span-1 border-r border-slate-100 pr-8">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
              Advanced Innovations
            </span>
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
              Leading Metrics In Energy Efficiency
            </h2>
          </div>

          {/* Stats Grid */}
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-start px-4">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-slate-500 font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
