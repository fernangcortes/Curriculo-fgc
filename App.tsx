import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Github, Terminal, Camera, Clapperboard, GraduationCap, Cpu, Printer, BookOpen, Award, User, Code } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PORTFOLIO_GROUPS, FILMOGRAPHY, EDUCATION, SKILLS, COURSES } from './constants';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import SkillsChart from './components/SkillsChart';
import ProductionsTabs from './components/ProductionsTabs';

type TabId = 'visao-geral' | 'experiencia' | 'laboratorio' | 'formacao';

interface TabDefinition {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabDefinition[] = [
  { id: 'visao-geral', label: 'Visão Geral & Skills', icon: <User className="w-4 h-4" /> },
  { id: 'experiencia', label: 'Experiência & Produção', icon: <Camera className="w-4 h-4" /> },
  { id: 'laboratorio', label: 'Desenv. Web & Laboratório', icon: <Code className="w-4 h-4" /> },
  { id: 'formacao', label: 'Formação & Filmografia', icon: <GraduationCap className="w-4 h-4" /> },
];

const App: React.FC = () => {
  const [showPrintHint, setShowPrintHint] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('visao-geral');

  const handlePrint = () => {
    window.print();
    setShowPrintHint(true);
    setTimeout(() => setShowPrintHint(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-600 selection:bg-stone-200 selection:text-stone-900 print:bg-white print:text-black">
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-[0.03] z-0 print:hidden"></div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 print:py-0 print:px-0 print:max-w-full">
        
        {/* Header Section */}
        <header className="mb-10 print:mb-8">
          <div className="border border-stone-200 bg-white/80 p-8 md:p-12 backdrop-blur-sm relative shadow-sm rounded-xl print:border-0 print:bg-transparent print:p-0 print:shadow-none print:rounded-none">
             <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-stone-400 via-stone-600 to-stone-400 opacity-20 print:hidden rounded-t-xl"></div>

            <div className="flex flex-col md:flex-row justify-between gap-8 print:block">
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tighter mb-4 uppercase print:text-4xl leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
                
                <div className="flex flex-wrap gap-2 md:gap-4 mb-5 text-[17px] leading-[17px] font-mono text-stone-500 print:mb-4 print:text-stone-800">
                  {PERSONAL_INFO.roles.map((role, idx) => (
                    <React.Fragment key={idx}>
                      <span className={`${idx === 0 ? "text-stone-800 font-bold" : ""} mt-0 py-0`}>{role}</span>
                      {idx < PERSONAL_INFO.roles.length - 1 && <span className="text-stone-300 hidden md:inline print:inline print:text-stone-400 py-0">|</span>}
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
              <div className="flex flex-wrap gap-3 shrink-0 print:hidden mt-4 md:mt-0 relative z-50 pointer-events-auto items-start">
                <div className="relative group">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePrint();
                    }}
                    className="w-10 h-10 flex items-center justify-center bg-stone-900 text-white hover:bg-black transition-colors shadow-sm cursor-pointer select-none active:bg-stone-800 rounded-lg"
                    aria-label="Imprimir / PDF"
                  >
                    <Printer className="w-5 h-5" />
                  </button>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    Imprimir / PDF
                  </div>
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
                    className="w-10 h-10 flex items-center justify-center bg-white text-stone-800 hover:bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all shadow-sm rounded-lg"
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
                    className="w-10 h-10 flex items-center justify-center border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors bg-white shadow-sm rounded-lg"
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
                      className="w-10 h-10 flex items-center justify-center border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors bg-white shadow-sm rounded-lg"
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

        {/* Tabs Navigation */}
        <div className="mb-10 print:hidden overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center gap-2 md:gap-4 min-w-max border-b border-stone-200 pb-px">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-t-lg transition-all duration-200 relative ${
                  activeTab === tab.id 
                    ? 'text-stone-900 bg-white border-t border-l border-r border-stone-200 z-10' 
                    : 'text-stone-500 hover:text-stone-700 hover:bg-stone-100/50 border-t border-l border-r border-transparent'
                }`}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-px left-0 w-full h-px bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 md:p-10 rounded-xl border border-stone-200 shadow-sm print:border-0 print:shadow-none print:bg-transparent print:p-0">
          
          {/* Tab: Visão Geral */}
          {(activeTab === 'visao-geral' || typeof window === 'undefined') && (
            <div className="space-y-12 animate-in fade-in duration-500 print:block">
              {/* Summary */}
              <div>
                <p className="text-lg md:text-xl leading-relaxed text-stone-600 font-light border-l-4 border-emerald-500/30 pl-6 italic print:text-base print:text-black">
                  "{PERSONAL_INFO.summary}"
                </p>
              </div>

              {/* Skills */}
              <Section title="Competências & Habilidades" icon={<Cpu className="w-5 h-5" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:block print:space-y-6">
                  <div>
                    <SkillsChart />
                  </div>
                  <div className="space-y-8 print:space-y-4">
                    {SKILLS.map((cat, idx) => (
                      <div key={idx} className="print:break-inside-avoid">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-2 font-mono print:text-black">{cat.category}</h4>
                        {cat.description && <p className="text-sm text-stone-500 mb-4 leading-relaxed print:text-black">{cat.description}</p>}
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="relative group flex">
                              <span 
                                className="px-3 py-1.5 bg-stone-50/50 border border-stone-200 rounded-md text-sm text-stone-600 hover:border-emerald-300 hover:bg-emerald-50 transition-colors cursor-help shadow-sm print:border-stone-400 print:text-black"
                              >
                                {skill.name}
                              </span>
                              {skill.tooltip && (
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs p-3 rounded-lg pointer-events-none z-50 text-center shadow-xl animate-in fade-in zoom-in duration-200 whitespace-pre-wrap">
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
                </div>
              </Section>
            </div>
          )}

          {/* Tab: Experiência */}
          {(activeTab === 'experiencia' || typeof window === 'undefined') && (
            <div className="space-y-12 animate-in fade-in duration-500 print:block">
              <Section title="Experiência Profissional" icon={<Camera className="w-5 h-5" />}>
                <div className="space-y-6">
                  {EXPERIENCE.map((item) => (
                    <ExperienceCard key={item.id} data={item} />
                  ))}
                </div>
                
                <div className="mt-16 print:mt-10 print:break-inside-avoid bg-stone-50/50 p-6 rounded-xl border border-stone-100">
                  <h3 className="text-xl font-bold tracking-tight text-stone-900 border-b-2 border-stone-200 pb-3 mb-4">
                    Detalhamento de Produções e Eventos
                  </h3>
                  <p className="text-stone-500 mb-8 print:text-black">
                    Visão estruturada dos principais programas institucionais, festivais e projetos de inovação dirigidos e operados tecnicamente.
                  </p>
                  <ProductionsTabs />
                </div>
              </Section>
            </div>
          )}

          {/* Tab: Laboratório */}
          {(activeTab === 'laboratorio' || typeof window === 'undefined') && (
            <div className="animate-in fade-in duration-500 print:block">
              <Section title="Desenvolvimento Web & Laboratório" icon={<Terminal className="w-5 h-5" />}>
                <p className="text-stone-500 mb-10 text-lg leading-relaxed max-w-3xl print:text-black">
                  Projetos de software, plataformas web, ferramentas de automação e iniciativas P&D que integram audiovisual com gestão e Inteligência Artificial.
                </p>
                
                <div className="space-y-16 print:space-y-10">
                  {PORTFOLIO_GROUPS.map((group, gIdx) => (
                    <div key={gIdx} className="print:break-inside-avoid">
                      <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                        <div className="w-6 h-1 bg-emerald-500 rounded-full"></div>
                        {group.category}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4">
                        {group.projects.map((project, idx) => (
                          <div key={idx} className="flex h-full">
                            <a 
                              href={project.url || '#'} 
                              target={project.url ? "_blank" : undefined}
                              rel={project.url ? "noopener noreferrer" : undefined}
                              className={`group flex flex-col bg-white border border-stone-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 w-full print:border-stone-300 print:shadow-none print:p-4 ${project.url ? 'cursor-pointer no-underline block hover:-translate-y-1' : 'cursor-default'}`}
                              onClick={(e) => { if(!project.url) e.preventDefault(); }}
                            >
                              <div className="flex justify-between items-start mb-4 gap-2">
                                <h4 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors print:text-black leading-tight">
                                  {project.name}
                                </h4>
                                {project.year && (
                                  <span className="shrink-0 text-xs font-mono text-stone-500 border border-stone-100 bg-stone-50 px-2 py-1 rounded-md print:border-stone-300">
                                    {project.year}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-stone-600 leading-relaxed flex-grow print:text-black mb-6">{project.description}</p>
                              
                              <div className="mt-auto flex items-end justify-between w-full">
                                <div className="flex flex-wrap gap-2">
                                  {project.badges?.map((badge, bIdx) => (
                                    <span key={bIdx} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                                      badge === 'P&D' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                                      badge === 'Live' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                                      badge === 'IA' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                      'bg-stone-100 text-stone-600 border border-stone-200'
                                    }`}>
                                      {badge}
                                    </span>
                                  ))}
                                </div>
                                {project.url && (
                                  <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-emerald-500 transition-colors print:hidden shrink-0 ml-2" />
                                )}
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          )}

          {/* Tab: Formação */}
          {(activeTab === 'formacao' || typeof window === 'undefined') && (
            <div className="space-y-16 animate-in fade-in duration-500 print:block">
              {/* Education */}
              <Section title="Formação Acadêmica" icon={<GraduationCap className="w-5 h-5" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="group bg-stone-50 border border-stone-100 p-6 rounded-xl relative overflow-hidden print:break-inside-avoid print:bg-transparent print:border-b print:rounded-none">
                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400 print:hidden"></div>
                      {edu.url ? (
                        <a href={edu.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-stone-900 font-bold text-lg hover:text-emerald-700 transition-colors cursor-pointer no-underline print:text-black">
                          {edu.degree}
                          <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity print:hidden" />
                        </a>
                      ) : (
                        <h3 className="text-stone-900 font-bold text-lg group-hover:text-stone-700 transition-colors print:text-black">{edu.degree}</h3>
                      )}
                      <div className="text-sm text-stone-500 mt-3 flex flex-col font-mono print:text-stone-800 space-y-1.5">
                        <span className="font-medium text-stone-600">{edu.institution}</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Courses */}
              <Section title="Cursos e Capacitações" icon={<BookOpen className="w-5 h-5" />}>
                <div className="mb-8 print:hidden">
                  <a 
                    href={PERSONAL_INFO.links.certificates}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 bg-stone-100 border border-stone-200 px-4 py-2 rounded-lg hover:bg-stone-200 hover:text-stone-900 transition-colors shadow-sm"
                  >
                    <Award className="w-4 h-4" />
                    Acessar pasta de Certificados
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4">
                  {COURSES.map((course, idx) => (
                    <div key={idx} className="group bg-white border border-stone-200 p-5 rounded-xl hover:border-emerald-200 hover:shadow-md transition-all print:shadow-none print:break-inside-avoid">
                      {course.url ? (
                        <a href={course.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start text-stone-900 font-bold hover:text-emerald-700 transition-colors cursor-pointer print:text-black leading-tight mb-2 no-underline">
                          <span>{course.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1.5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity print:hidden shrink-0" />
                        </a>
                      ) : (
                        <h3 className="text-stone-900 font-bold print:text-black leading-tight mb-2">{course.title}</h3>
                      )}
                      
                      <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-3 bg-stone-50 py-1.5 px-2 rounded print:bg-transparent print:p-0">
                        <span className="font-medium text-stone-700 truncate">{course.institution}</span>
                        {course.duration && (
                          <>
                            <span className="w-1 h-1 bg-stone-300 rounded-full shrink-0"></span>
                            <span className="shrink-0">{course.duration}</span>
                          </>
                        )}
                      </div>
                      
                      {course.description && (
                        <p className="text-sm text-stone-600 leading-relaxed print:text-black">{course.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </Section>

              {/* Filmography */}
              <Section title="Filmografia" icon={<Clapperboard className="w-5 h-5" />}>
                <div className="space-y-4 print:space-y-2">
                  {FILMOGRAPHY.map((film, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center bg-stone-50 border border-stone-100 p-4 rounded-xl hover:bg-stone-100/70 transition-colors print:bg-transparent print:border-b print:rounded-none format-print">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          {film.url ? (
                            <a href={film.url} target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold text-lg hover:text-emerald-700 transition-colors flex items-center gap-1.5 print:text-black no-underline">
                              {film.title}
                              <ExternalLink className="w-3.5 h-3.5 print:hidden opacity-50" />
                            </a>
                          ) : (
                            <h4 className="text-stone-900 font-bold text-lg print:text-black">{film.title}</h4>
                          )}
                        </div>
                        {film.description && (
                          <p className="text-sm text-stone-600 mt-2 leading-relaxed print:text-black">{film.description}</p>
                        )}
                      </div>
                      
                      <div className="mt-4 md:mt-0 md:ml-6 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:gap-1 shrink-0">
                        {film.role && (
                          <span className="bg-stone-900 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded print:bg-transparent print:text-stone-800 print:border print:border-stone-300">
                            {film.role}
                          </span>
                        )}
                        <div className="text-right">
                          <span className="block text-stone-500 text-sm font-mono print:text-stone-800 font-medium">{film.year}</span>
                          {film.type && <span className="block text-stone-400 text-xs uppercase tracking-wide print:text-stone-600">{film.type}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          )}

        </div>

        <footer className="mt-16 pt-8 text-center text-stone-400 text-sm font-mono print:hidden">
          <p>© {new Date().getFullYear()} Fernando Gomes Côrtes. Desenvolvido com React, Tailwind & Vite.</p>
        </footer>

      </main>

      {/* Media query for print styles to ensure all tabs display at once */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          .animate-in { animation: none !important; }
          /* Ensure all content areas are visible during print */
          .space-y-12, .space-y-16 { display: block !important; margin-bottom: 2rem; }
        }
      `}} />
    </div>
  );
};

export default App;
