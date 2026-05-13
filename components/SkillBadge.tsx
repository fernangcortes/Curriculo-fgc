import React from 'react';

interface SkillBadgeProps {
  name: string;
  tooltip?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, tooltip }) => {
  return (
    <div className="relative group flex">
      <span className="px-3 py-1.5 bg-stone-50 dark:bg-zinc-800/50 border border-stone-200 dark:border-white/10 rounded-md text-sm text-stone-600 dark:text-zinc-300 hover:border-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-100 transition-colors cursor-help shadow-sm print:border-stone-400 dark:border-zinc-500 print:text-black">
        {name}
      </span>
      {tooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 dark:bg-zinc-200 text-white dark:text-zinc-900 text-xs p-3 rounded-lg pointer-events-none z-50 text-center shadow-xl animate-in fade-in zoom-in duration-200 whitespace-pre-wrap">
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800"></div>
        </div>
      )}
    </div>
  );
};

export default SkillBadge;
