import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Github, Terminal, Camera, Clapperboard, GraduationCap, Cpu, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, FILMOGRAPHY, EDUCATION, SKILLS } from './constants';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';

const App: React.FC = () => {
  const [showPrintHint, setShowPrintHint] = useState(false);

  const handlePrint = () => {
    window.print();
    // Show a hint because sandboxed environments often block window.print()
    // This gives the user feedback that the click was received and an alternative way to print.
    setShowPrintHint(true);
    setTimeout(() => setShowPrintHint(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-600 selection:bg-stone-200 selection:text-stone-900 print:bg-white print:text-black">
      {/* Background Grid Pattern - Hidden on Print */}
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-[0.03] z-0 print:hidden"></div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 print:py-0 print:px-0 print:max-w-full">
        
        {/* Header Section */}
        <header className="mb-20 print:mb-8">
          {/* Removed overflow-hidden to prevent potential clipping of interactive elements */}
          <div className="border border-stone-200 bg-white/60 p-8 md:p-12 backdrop-blur-sm relative shadow-sm print:border-0 print:bg-transparent print:p-0 print:shadow-none">
             {/* Decorative tech line - Hidden on Print */}
             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-stone-300 to-transparent opacity-60 print:hidden"></div>

            <div className="flex flex-col md:flex-row justify-between gap-8 print:block">
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tighter mb-4 uppercase print:text-4xl leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
                
                <div className="flex flex-wrap gap-2 md:gap-4 mb-8 text-sm md:text-base font-mono text-stone-500 print:mb-4 print:text-stone-800">
                  {PERSONAL_INFO.roles.map((role, idx) => (
                    <React.Fragment key={idx}>
                      <span className={idx === 0 ? "text-stone-800 font-bold" : ""}>{role}</span>
                      {idx < PERSONAL_INFO.roles.length - 1 && <span className="text-stone-300 hidden md:inline print:inline print:text-stone-400">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium text-stone-600 print:text-xs">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-stone-900 transition-colors group">
                    <Mail className="w-4 h-4 text-stone-400 group-hover:text-stone-800 print:w-3 print:h-3 print:text-black" />
                    {PERSONAL_INFO.email}
                  </a>
                  <a 
                    href={`https://wa.me/5562981899522`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-stone-900 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-stone-400 group-hover:text-stone-800 print:w-3 print:h-3 print:text-black" />
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons - Hidden on Print */}
              {/* Added z-50 and pointer-events-auto to ensure clickability */}
              <div className="flex flex-row md:flex-col gap-3 shrink-0 print:hidden mt-4 md:mt-0 relative z-50 pointer-events-auto">
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePrint();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 md:py-2 bg-stone-900 text-white text-sm font-bold hover:bg-black transition-colors uppercase tracking-wider shadow-sm cursor-pointer select-none active:bg-stone-800"
                  >
                    <Printer className="w-4 h-4" />
                    Imprimir / PDF
                  </button>
                  {/* Feedback Tooltip for Sandboxed Environments */}
                  {showPrintHint && (
                    <div className="absolute top-full mt-2 left-0 right-0 md:left-auto md:right-0 bg-red-50 border border-red-100 text-red-600 text-[10px] md:text-xs p-2 rounded shadow-sm text-center md:text-right md:whitespace-nowrap z-[60] animate-in fade-in zoom-in duration-300">
                      Se não abrir, use <strong>Ctrl + P</strong>
                    </div>
                  )}
                </div>
                
                <a 
                  href={PERSONAL_INFO.links.linktree} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 md:py-2 bg-white text-stone-800 text-sm font-bold hover:bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all uppercase tracking-wider shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-stone-500" />
                  LinkTree
                </a>
                <a 
                  href={PERSONAL_INFO.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 md:py-2 border border-stone-200 text-stone-600 text-sm font-bold hover:bg-stone-50 hover:text-stone-900 transition-colors uppercase tracking-wider bg-white"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
              
              {/* Links for Print Version Only - Clickable */}
              <div className="hidden print:block mt-6 text-xs font-mono text-stone-600 border-t border-stone-200 pt-4">
                 <div className="flex flex-col gap-1">
                   <a href={PERSONAL_INFO.links.github} className="flex items-center gap-2 text-stone-900 no-underline">
                     <span className="font-bold">GitHub:</span> {PERSONAL_INFO.links.github}
                   </a>
                   <a href={PERSONAL_INFO.links.linktree} className="flex items-center gap-2 text-stone-900 no-underline">
                     <span className="font-bold">LinkTree:</span> {PERSONAL_INFO.links.linktree}
                   </a>
                 </div>
              </div>

            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 print:block">
          
          {/* Main Column (Left/Top) */}
          <div className="lg:col-span-8 print:mb-8">
            
            {/* Summary */}
            <div className="mb-16 print:mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-stone-600 font-light border-l-2 border-stone-300 pl-6 italic print:text-base print:text-black">
                "{PERSONAL_INFO.summary}"
              </p>
            </div>

            {/* Experience */}
            <Section title="Experiência Profissional" icon={<Camera className="w-5 h-5" />}>
              <div className="mt-8">
                {EXPERIENCE.map((item) => (
                  <ExperienceCard key={item.id} data={item} />
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section title="Projetos Pessoais (GitHub)" icon={<Terminal className="w-5 h-5" />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1 print:gap-2">
                {PROJECTS.map((project, idx) => (
                  <a 
                    key={idx} 
                    href={project.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-stone-200 p-6 hover:border-stone-400 hover:shadow-md transition-all duration-300 block print:border-stone-300 print:shadow-none print:p-4 print:break-inside-avoid text-decoration-none"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-stone-900 font-bold group-hover:text-stone-600 transition-colors print:text-black">{project.name}</h3>
                      <span className="text-xs font-mono text-stone-500 border border-stone-100 bg-stone-50 px-1.5 py-0.5 rounded print:border-stone-300">{project.year}</span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed print:text-black">{project.description}</p>
                    <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity print:hidden">
                      <ExternalLink className="w-4 h-4 text-stone-400" />
                    </div>
                  </a>
                ))}
              </div>
            </Section>

          </div>

          {/* Sidebar Column (Right/Bottom) */}
          <div className="lg:col-span-4 space-y-12 print:space-y-6 print:mt-8">
            
            {/* Skills */}
            <Section title="Competências" icon={<Cpu className="w-5 h-5" />}>
              <div className="space-y-8 print:space-y-4">
                {SKILLS.map((cat, idx) => (
                  <div key={idx} className="print:break-inside-avoid">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 font-mono print:text-black print:mb-1">{cat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="px-2 py-1 bg-white border border-stone-200 text-xs text-stone-600 hover:border-stone-400 transition-colors cursor-default shadow-sm print:border-stone-400 print:text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Formação" icon={<GraduationCap className="w-5 h-5" />}>
              <div className="space-y-6 print:space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="group print:break-inside-avoid">
                    <h3 className="text-stone-800 font-medium group-hover:text-stone-500 transition-colors print:text-black">{edu.degree}</h3>
                    <div className="text-sm text-stone-500 mt-1 flex justify-between items-center font-mono print:text-stone-800">
                      <span>{edu.institution}</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Filmography */}
            <Section title="Filmografia" icon={<Clapperboard className="w-5 h-5" />}>
              <div className="space-y-4 print:space-y-2">
                {FILMOGRAPHY.map((film, idx) => (
                  <div key={idx} className="flex items-start justify-between border-b border-stone-200 pb-2 last:border-0 print:break-inside-avoid">
                    <div>
                      <h4 className="text-stone-800 font-medium text-sm print:text-black">{film.title}</h4>
                      <p className="text-stone-500 text-xs mt-0.5 print:text-stone-700">{film.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-stone-400 text-xs font-mono print:text-stone-800">{film.year}</span>
                      {film.type && <span className="block text-stone-400 text-[10px] uppercase tracking-wide print:text-stone-600">{film.type}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-stone-200 text-center text-stone-400 text-sm font-mono print:hidden">
          <p>© {new Date().getFullYear()} Fernando Gomes Côrtes. Construído com React & Tailwind.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;