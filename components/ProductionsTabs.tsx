import React, { useState } from 'react';
import { PRODUCTIONS } from '../constants';
import { FolderGit2, Calendar, FileVideo, Users, Building, ChevronRight } from 'lucide-react';

const ProductionsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (idx: number) => {
    switch(idx) {
      case 0: return <Building className="w-4 h-4" />;
      case 1: return <FileVideo className="w-4 h-4" />;
      case 2: return <Users className="w-4 h-4" />;
      case 3: return <Calendar className="w-4 h-4" />;
      default: return <FolderGit2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full mt-6 mb-8 border border-stone-200 bg-white print:border-none shadow-sm pb-2">
      <div className="flex flex-col md:flex-row border-b border-stone-200 print:hidden overflow-x-auto no-scrollbar">
        {PRODUCTIONS.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
              activeTab === idx 
                ? 'bg-stone-900 text-white' 
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            {getIcon(idx)}
            {category.category.split(' (')[0]} 
          </button>
        ))}
      </div>

      <div className="p-6">
        <h4 className="hidden print:block text-sm font-bold uppercase tracking-widest text-black mb-4">
          {PRODUCTIONS[activeTab].category}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTIONS[activeTab].items.map((item, idx) => (
            <div key={idx} className="flex flex-col border border-stone-100 p-4 bg-stone-50/50 hover:bg-stone-50 transition-colors shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-bold text-stone-900 text-sm">{item.name}</h5>
                {item.occurrences && (
                  <span className="text-[10px] font-mono bg-stone-200 text-stone-700 px-2 py-0.5 whitespace-nowrap ml-2">
                    {item.occurrences === 'Múltiplas' ? 'Múltiplos episódios' : `${item.occurrences} ou + episódios`}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed mb-3 flex-grow">
                {item.description}
              </p>
              <div className="mt-auto pt-3 border-t border-stone-200/50">
                <p className="text-[11px] text-stone-700">
                  <span className="font-bold mr-1">Atuação:</span>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionsTabs;
