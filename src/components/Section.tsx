import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, className = "" }) => {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-8 border-b border-stone-200 dark:border-white/10 pb-2">
        {icon && <span className="text-stone-400 dark:text-zinc-500">{icon}</span>}
        <h2 className="text-xl font-bold tracking-widest uppercase text-stone-800 dark:text-zinc-100 font-mono">
          {title}
        </h2>
      </div>
      <div className="pl-2">
        {children}
      </div>
    </section>
  );
};

export default Section;