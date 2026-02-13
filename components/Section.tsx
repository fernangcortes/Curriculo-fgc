import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, className = "" }) => {
  return (
    <section className={`mb-16 print:mb-6 break-inside-avoid ${className}`}>
      <div className="flex items-center gap-3 mb-8 print:mb-3 border-b border-stone-200 pb-2 print:pb-1">
        {icon && <span className="text-stone-400 print:text-stone-600 print:scale-75">{icon}</span>}
        <h2 className="text-xl font-bold tracking-widest uppercase text-stone-800 font-mono print:text-lg">
          {title}
        </h2>
      </div>
      <div className="pl-2 print:pl-0">
        {children}
      </div>
    </section>
  );
};

export default Section;