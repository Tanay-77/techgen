
import React from 'react';
import { STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee w-max select-none hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex items-center gap-16 px-8">
            <div className="shrink-0 mr-8">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block">
                ADVANCED
                <br />
                INNOVATIONS
              </span>
            </div>
            {STATS.map((stat, index) => (
              <div
                key={`stat-1-${index}`}
                className="flex items-center gap-4"
              >
                <span className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tight whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 font-medium leading-tight max-w-[100px] whitespace-normal">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex items-center gap-16 px-8">
            <div className="shrink-0 mr-8">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block">
                ADVANCED
                <br />
                INNOVATIONS
              </span>
            </div>
            {STATS.map((stat, index) => (
              <div
                key={`stat-2-${index}`}
                className="flex items-center gap-4"
              >
                <span className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tight whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 font-medium leading-tight max-w-[100px] whitespace-normal">
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
