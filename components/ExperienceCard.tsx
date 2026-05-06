import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  data: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="relative pl-8 border-l border-stone-200 hover:border-stone-400 transition-colors duration-300 mb-12 last:mb-0 group">
      {/* Dot on timeline */}
      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#faf9f6] border border-stone-400 rounded-full group-hover:bg-stone-200 transition-all duration-300"></div>
      
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
        <div>
          {data.url ? (
            <a href={data.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-2xl font-bold text-stone-800 mb-1 group-hover:text-stone-500 transition-colors cursor-pointer no-underline">
              {data.company}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity print:hidden"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ) : (
            <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-stone-500 transition-colors">{data.company}</h3>
          )}
          
          {data.links && data.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2 print:hidden">
              {data.links.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-mono text-stone-500 hover:text-stone-800 transition-colors no-underline bg-stone-100 px-2 py-1 rounded border border-stone-200">
                  {link.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ))}
            </div>
          )}
          
          <p className="text-stone-500 text-lg">{data.role}</p>
        </div>
        <span className="font-mono text-sm text-stone-500 mt-2 md:mt-0 bg-stone-100 px-2 py-1 rounded border border-stone-200">
          {data.period}
        </span>
      </div>

      <div className="space-y-6">
        {data.highlights.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h4 className="text-stone-400 font-semibold mb-2 uppercase tracking-wide text-sm font-mono mt-4">
                // {section.title}
              </h4>
            )}
            <ul className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-stone-600 leading-relaxed text-sm md:text-base flex items-start">
                  <span className="mr-3 text-stone-400 mt-1.5 text-xs">■</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;