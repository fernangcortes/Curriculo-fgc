import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  data: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="relative pl-8 md:pl-0 pb-12 last:pb-0 group md:flex transition-all duration-300">
      {/* Mobile Timeline Line */}
      <div className="absolute left-[3px] top-[14px] bottom-0 w-[2px] bg-stone-200 dark:bg-zinc-700 group-hover:bg-emerald-300/80 transition-colors duration-500 md:hidden group-last:bg-gradient-to-b group-last:from-stone-200 dark:from-zinc-700 group-last:to-transparent group-hover:group-last:from-emerald-300"></div>
      
      {/* Mobile Dot */}
      <div className="absolute -left-[2px] top-2 w-[12px] h-[12px] bg-white dark:bg-zinc-900/60 backdrop-blur-md border-2 border-stone-300 dark:border-zinc-600 rounded-full group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300 shadow-sm md:hidden z-10"></div>
      
      {/* Desktop Column: Period & Timeline Line */}
      <div className="hidden md:block w-48 shrink-0 relative pr-10 text-right mt-1">
        {/* Desktop Line */}
        <div className="absolute right-0 top-[24px] bottom-[-3rem] w-[2px] bg-stone-200 dark:bg-zinc-700 group-hover:bg-emerald-300/80 transition-colors duration-500 group-last:bg-gradient-to-b group-last:from-stone-200 dark:from-zinc-700 group-last:to-transparent group-hover:group-last:from-emerald-300"></div>
        
        {/* Desktop Dot */}
        <div className="absolute -right-[5px] top-[9px] w-[12px] h-[12px] bg-white dark:bg-zinc-900/60 backdrop-blur-md border-2 border-stone-300 dark:border-zinc-600 rounded-full group-hover:border-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-all duration-300 z-10 ring-4 ring-white dark:ring-[#050505]"></div>
        
        <span className="inline-block font-mono text-sm text-stone-500 dark:text-zinc-400 font-medium bg-white dark:bg-zinc-900/60 backdrop-blur-md group-hover:bg-emerald-50/50 group-hover:text-emerald-700 transition-colors px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 dark:border-white/10 relative z-10">
          {data.period}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 md:pl-10">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
          <div>
            <div className="flex items-center gap-3">
              {data.url ? (
                <a href={data.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-2xl font-bold text-stone-900 dark:text-white mb-1 group-hover:text-emerald-700 transition-colors cursor-pointer no-underline">
                  {data.company}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity print:hidden"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ) : (
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-1 group-hover:text-emerald-700 transition-colors">{data.company}</h3>
              )}
            </div>
            
            {/* Mobile Period */}
            <span className="inline-block md:hidden mb-2 mt-1 font-mono text-xs text-stone-500 dark:text-zinc-400 font-medium bg-white dark:bg-zinc-900/60 backdrop-blur-md group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors px-2 py-1 rounded shadow-sm border border-stone-200 dark:border-white/10 relative z-10">
              {data.period}
            </span>

            {data.links && data.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3 mt-2 print:hidden">
                {data.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-mono text-stone-500 dark:text-zinc-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors no-underline bg-stone-100 dark:bg-zinc-800 px-2 py-1 rounded border border-stone-200 dark:border-white/10">
                    {link.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                ))}
              </div>
            )}
            
            <p className="text-stone-500 dark:text-zinc-400 text-lg font-medium tracking-tight mb-2">{data.role}</p>
          </div>
        </div>

        <div className="space-y-6">
          {data.highlights.map((section, idx) => (
            <div key={idx} className="bg-white/40 dark:bg-zinc-900/40 p-4 rounded-xl border border-stone-100/50 dark:border-zinc-800/50 hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors">
              {section.title && (
                <h4 className="text-stone-400 dark:text-zinc-500 font-semibold mb-3 uppercase tracking-wide text-xs font-mono">
                  // {section.title}
                </h4>
              )}
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-stone-600 dark:text-zinc-300 leading-relaxed text-sm md:text-base flex items-start">
                    <span className="mr-3 text-emerald-400/60 mt-1.5 text-[10px]">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;