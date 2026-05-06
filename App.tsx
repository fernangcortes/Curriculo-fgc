import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Github, Terminal, Camera, Clapperboard, GraduationCap, Cpu, Printer, BookOpen, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, FILMOGRAPHY, EDUCATION, SKILLS, COURSES } from './constants';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import SkillsChart from './components/SkillsChart';
import ProductionsTabs from './components/ProductionsTabs';

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
                
                <div className="flex flex-wrap gap-2 md:gap-4 mb-7 text-[17px] leading-[17px] mt-0 mx-0 py-0 pl-0 font-mono text-stone-500 print:mb-4 print:text-stone-800">
                  {PERSONAL_INFO.roles.map((role, idx) => (
                    <React.Fragment key={idx}>
                      <span className={`${idx === 0 ? "text-stone-800 font-bold" : ""} mt-0 py-0`}>{role}</span>
                      {idx < PERSONAL_INFO.roles.length - 1 && <span className="text-stone-300 hidden md:inline print:inline print:text-stone-400 py-0">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-[11px] leading-[16px] font-medium text-stone-600 print:text-xs">
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
              <div className="flex flex-row gap-3 shrink-0 print:hidden mt-4 md:mt-0 relative z-50 pointer-events-auto items-start">
                <div className="relative group">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePrint();
                    }}
                    className="w-10 h-10 flex items-center justify-center bg-stone-900 text-white hover:bg-black transition-colors shadow-sm cursor-pointer select-none active:bg-stone-800 rounded"
                    aria-label="Imprimir / PDF"
                  >
                    <Printer className="w-5 h-5" />
                  </button>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    Imprimir / PDF
                  </div>
                  {/* Feedback Tooltip for Sandboxed Environments */}
                  {showPrintHint && (
                    <div className="absolute top-full mt-2 right-0 bg-red-50 border border-red-100 text-red-600 text-[10px] md:text-xs p-2 rounded shadow-sm text-right whitespace-nowrap z-[60] animate-in fade-in zoom-in duration-300">
                      Se não abrir, use <strong>Ctrl + P</strong>
                    </div>
                  )}
                </div>
                
                <div className="relative group">
                  <a 
                    href={PERSONAL_INFO.links.linktree} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white text-stone-800 hover:bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all shadow-sm rounded"
                    aria-label="LinkTree"
                  >
                    <ExternalLink className="w-5 h-5 text-stone-600" />
                  </a>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    LinkTree
                  </div>
                </div>

                <div className="relative group">
                  <a 
                    href={PERSONAL_INFO.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors bg-white shadow-sm rounded"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    GitHub
                  </div>
                </div>

                {PERSONAL_INFO.links.certificates && (
                  <div className="relative group">
                    <a 
                      href={PERSONAL_INFO.links.certificates} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors bg-white shadow-sm rounded"
                      aria-label="Certificados"
                    >
                      <Award className="w-5 h-5" />
                    </a>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                      Certificados
                    </div>
                  </div>
                )}
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
                   {PERSONAL_INFO.links.certificates && (
                     <a href={PERSONAL_INFO.links.certificates} className="flex items-center gap-2 text-stone-900 no-underline">
                       <span className="font-bold">Certificados:</span> {PERSONAL_INFO.links.certificates}
                     </a>
                   )}
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
              
              <div className="mt-12 mb-4 print:mt-6 print:break-inside-avoid">
                <h3 className="text-base font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2 mb-2">
                  Detalhamento de Produções e Eventos
                </h3>
                <p className="text-sm text-stone-500 mb-6 print:text-black">
                  Visão estruturada dos principais programas institucionais, festivais e projetos de inovação dirigidos e operados tecnicamente.
                </p>
                <ProductionsTabs />
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
                    className="group bg-white border border-stone-200 p-6 hover:border-stone-400 hover:shadow-md transition-all duration-300 block print:border-stone-300 print:shadow-none print:p-4 print:break-inside-avoid no-underline"
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
              <SkillsChart />
              <div className="space-y-8 print:space-y-4">
                {SKILLS.map((cat, idx) => (
                  <div key={idx} className="print:break-inside-avoid">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1 font-mono print:text-black print:mb-1">{cat.category}</h4>
                    {cat.description && <p className="text-xs text-stone-500 mb-3 leading-relaxed print:text-black">{cat.description}</p>}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="relative group flex">
                          <span 
                            className="px-2 py-1 bg-white border border-stone-200 text-xs text-stone-600 hover:border-stone-400 hover:bg-stone-50 transition-colors cursor-help shadow-sm print:border-stone-400 print:text-black"
                          >
                            {skill.name}
                          </span>
                          {skill.tooltip && (
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs p-2 rounded pointer-events-none z-50 text-center shadow-lg animate-in fade-in zoom-in duration-200 whitespace-pre-wrap">
                              {skill.tooltip}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800"></div>
                            </div>
                          )}
                        </div>
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
                    {edu.url ? (
                      <a href={edu.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-stone-800 font-medium hover:text-stone-500 transition-colors cursor-pointer no-underline print:text-black">
                        {edu.degree}
                        <ExternalLink className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity print:hidden" />
                      </a>
                    ) : (
                      <h3 className="text-stone-800 font-medium group-hover:text-stone-500 transition-colors print:text-black">{edu.degree}</h3>
                    )}
                    <div className="text-sm text-stone-500 mt-1 flex justify-between items-center font-mono print:text-stone-800">
                      <span>{edu.institution}</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Courses / Certifications */}
            <Section title="Cursos e Certificações" icon={<BookOpen className="w-5 h-5" />}>
              <div className="mb-6 print:hidden">
                <a 
                  href={PERSONAL_INFO.links.certificates}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-stone-600 bg-white border border-stone-200 px-3 py-1.5 rounded-full hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm"
                >
                  <Award className="w-3.5 h-3.5" />
                  Acessar pasta de Certificados no Drive
                </a>
              </div>
              <div className="space-y-6 print:space-y-4">
                {COURSES.map((course, idx) => (
                  <div key={idx} className="group print:break-inside-avoid">
                    {course.url ? (
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-stone-800 font-medium text-sm hover:text-stone-500 transition-colors cursor-pointer print:text-black">
                        {course.title}
                        <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity print:hidden" />
                      </a>
                    ) : (
                      <h3 className="text-stone-800 font-medium text-sm hover:text-stone-500 transition-colors print:text-black">{course.title}</h3>
                    )}
                    <div className="text-xs text-stone-500 mt-1 mb-2 flex justify-between items-center font-mono print:text-stone-800">
                      <span>{course.institution}</span>
                      {course.duration && <span>{course.duration}</span>}
                    </div>
                    {course.description && (
                      <p className="text-xs text-stone-500 flex-grow leading-relaxed print:text-black">{course.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            {/* Filmography */}
            <Section title="Filmografia" icon={<Clapperboard className="w-5 h-5" />}>
              <div className="space-y-4 print:space-y-2">
                {FILMOGRAPHY.map((film, idx) => (
                  <div key={idx} className="flex flex-col border-b border-stone-200 pb-3 last:border-0 print:break-inside-avoid">
                    <div className="flex items-start justify-between">
                      <div>
                        {film.url ? (
                          <a href={film.url} target="_blank" rel="noopener noreferrer" className="text-stone-800 font-medium text-sm hover:text-stone-500 transition-colors flex items-center gap-1 print:text-black">
                            {film.title}
                            <ExternalLink className="w-3 h-3 print:hidden opacity-50" />
                          </a>
                        ) : (
                          <h4 className="text-stone-800 font-medium text-sm print:text-black">{film.title}</h4>
                        )}
                        {film.role && <p className="text-stone-500 text-xs mt-0.5 font-mono uppercase tracking-wide print:text-stone-700">{film.role}</p>}
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <span className="block text-stone-400 text-xs font-mono print:text-stone-800">{film.year}</span>
                        {film.type && <span className="block text-stone-400 text-[10px] uppercase tracking-wide print:text-stone-600">{film.type}</span>}
                      </div>
                    </div>
                    {film.description && (
                      <p className="text-xs text-stone-500 mt-2 leading-relaxed print:text-black">{film.description}</p>
                    )}
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