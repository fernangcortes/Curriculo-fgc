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
          <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-stone-500 transition-colors">{data.company}</h3>
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