import React, { useState } from 'react';
import { Search, Mail, Phone, ExternalLink, Github, Terminal, Camera, Clapperboard, GraduationCap, Cpu, Printer, BookOpen, Award, User, Code } from 'lucide-react';
import { PERSONAL_INFO, MUSIC_VIDEOS, DOCUMENTARIES, EXPERIENCE, PORTFOLIO_GROUPS, FILMOGRAPHY, EDUCATION, SKILLS, COURSES, CINEMA_LONGA, CINEMA_CURTA, JORNALISMO_GRANDE_REPORTAGEM, JORNALISMO_REPORTAGEM, JORNALISMO_SERIE, INSTITUCIONAL, PROGRAMA_TV, TRANSMISSAO_EVENTOS, TRANSMISSAO_SHOWS, TRANSMISSAO_VIDEOAULAS } from './constants';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import SkillsChart from './components/SkillsChart';
import ProductionsTabs from './components/ProductionsTabs';
import DevOrganizer from './components/DevOrganizer';
import AudiovisualSection from './components/AudiovisualSection';

type TabId = 'visao-geral' | 'experiencia' | 'audiovisual' | 'laboratorio' | 'formacao' | 'dev';

interface TabDefinition {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabDefinition[] = [
  { id: 'visao-geral', label: 'Visão Geral & Skills', icon: <User className="w-4 h-4" /> },
  { id: 'experiencia', label: 'Experiência & Produção', icon: <Camera className="w-4 h-4" /> },
  { id: 'audiovisual', label: 'Audiovisual (Filmes, Doc & TV)', icon: <Clapperboard className="w-4 h-4" /> },
  { id: 'laboratorio', label: 'Desenv. Web & Laboratório', icon: <Code className="w-4 h-4" /> },
  { id: 'formacao', label: 'Formação', icon: <GraduationCap className="w-4 h-4" /> },
  // { id: 'dev', label: 'Dev Organizer', icon: <Terminal className="w-4 h-4" /> },
];

const isMatch = (item: any, query: string): boolean => {
    if (!query) return true;
    const q = query.toLowerCase();
    return JSON.stringify(item).toLowerCase().includes(q);
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintHint, setShowPrintHint] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('visao-geral');
  const [audiovisualSubTab, setAudiovisualSubTab] = useState('todos');
  const [audiovisualSortMode, setAudiovisualSortMode] = useState<'all' | 'recent' | 'old' | 'type' | 'role'>('all');

  const filteredExperience = EXPERIENCE.filter(exp => isMatch(exp, searchQuery));
  const filteredPortfolio = PORTFOLIO_GROUPS.map(g => ({
      ...g,
      projects: g.projects.filter(p => isMatch(p, searchQuery))
  })).filter(g => isMatch(g.category, searchQuery) || g.projects.length > 0);
  const filteredFilmography = FILMOGRAPHY.filter(f => isMatch(f, searchQuery));
  const filteredMusicVideos = MUSIC_VIDEOS.filter(f => isMatch(f, searchQuery));
  const filteredDocumentaries = DOCUMENTARIES.filter(f => isMatch(f, searchQuery));
  
  const f_CINEMA_LONGA = CINEMA_LONGA.filter(f => isMatch(f, searchQuery));
  const f_CINEMA_CURTA = CINEMA_CURTA.filter(f => isMatch(f, searchQuery));
  const f_JORNALISMO_GRANDE_REPORTAGEM = JORNALISMO_GRANDE_REPORTAGEM.filter(f => isMatch(f, searchQuery));
  const f_JORNALISMO_REPORTAGEM = JORNALISMO_REPORTAGEM.filter(f => isMatch(f, searchQuery));
  const f_JORNALISMO_SERIE = JORNALISMO_SERIE.filter(f => isMatch(f, searchQuery));
  const f_INSTITUCIONAL = INSTITUCIONAL.filter(f => isMatch(f, searchQuery));
  const f_PROGRAMA_TV = PROGRAMA_TV.filter(f => isMatch(f, searchQuery));
  const f_TRANSMISSAO_EVENTOS = TRANSMISSAO_EVENTOS.filter(f => isMatch(f, searchQuery));
  const f_TRANSMISSAO_SHOWS = TRANSMISSAO_SHOWS.filter(f => isMatch(f, searchQuery));
  const f_TRANSMISSAO_VIDEOAULAS = TRANSMISSAO_VIDEOAULAS.filter(f => isMatch(f, searchQuery));

  const filteredEducation = EDUCATION.filter(e => isMatch(e, searchQuery));
  const filteredSkills = SKILLS.map(g => ({
      ...g,
      skills: g.skills.filter(s => isMatch(s, searchQuery))
  })).filter(g => isMatch(g.category, searchQuery) || g.skills.length > 0);
  const filteredCourses = COURSES.filter(c => isMatch(c, searchQuery));
  
  const audiovisualHasSearch = 
    filteredFilmography.length > 0 || 
    filteredDocumentaries.length > 0 || 
    filteredMusicVideos.length > 0 ||
    f_CINEMA_LONGA.length > 0 ||
    f_CINEMA_CURTA.length > 0 ||
    f_JORNALISMO_GRANDE_REPORTAGEM.length > 0 ||
    f_JORNALISMO_REPORTAGEM.length > 0 ||
    f_JORNALISMO_SERIE.length > 0 ||
    f_INSTITUCIONAL.length > 0 ||
    f_PROGRAMA_TV.length > 0 ||
    f_TRANSMISSAO_EVENTOS.length > 0 ||
    f_TRANSMISSAO_SHOWS.length > 0 ||
    f_TRANSMISSAO_VIDEOAULAS.length > 0;

  const hasSearch = searchQuery.trim().length > 0;

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

                   {PERSONAL_INFO.links.certificates && (
                     <a href={PERSONAL_INFO.links.certificates} className="flex items-center gap-2 text-stone-900 no-underline">
                       <span className="font-bold">Certificados:</span> {PERSONAL_INFO.links.certificates}
                     </a>
                   )}
                 </div>
              </div>

            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto print:hidden">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por competência, empresa, projeto..."
                className="w-full bg-white border border-stone-200 rounded-xl py-3 pl-12 pr-4 text-stone-600 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-stone-400 hover:text-stone-600 transition-colors"
                >
                  Limpar
                </button>
              )}
            </div>
            {hasSearch && (
              <p className="text-xs text-center text-emerald-600 mt-2">
                Filtrando o currículo completo por "{searchQuery}". As abas foram desativadas temporariamente.
              </p>
            )}
          </div>
        </header>

        {/* Tabs Navigation */}
        {!hasSearch && (
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
        )}

        {/* Main Content Area */}
        <div className="bg-white p-6 md:p-10 rounded-xl border border-stone-200 shadow-sm print:border-0 print:shadow-none print:bg-transparent print:p-0">
          
          {/* Tab: Visão Geral */}
          {(!hasSearch ? activeTab === 'visao-geral' : (filteredSkills.length > 0 || String(PERSONAL_INFO.summary).toLowerCase().includes(searchQuery.toLowerCase()))) && (
            <div className="space-y-12 animate-in fade-in duration-500 print:block">
              {/* Summary */}
              {(!hasSearch || String(PERSONAL_INFO.summary).toLowerCase().includes(searchQuery.toLowerCase())) && (
              <div>
                <p className="text-lg md:text-xl leading-relaxed text-stone-600 font-light border-l-4 border-emerald-500/30 pl-6 italic print:text-base print:text-black">
                  "{PERSONAL_INFO.summary}"
                </p>
              </div>
              )}

              {/* Skills */}
              {filteredSkills.length > 0 && (
              <Section title="Competências & Habilidades" icon={<Cpu className="w-5 h-5" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:block print:space-y-6">
                  <div>
                    <SkillsChart />
                  </div>
                  <div className="space-y-8 print:space-y-4">
                    {filteredSkills.map((cat, idx) => (
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
              )}

            </div>
          )}

          {/* Tab: Experiência */}
          {(!hasSearch ? activeTab === 'experiencia' : filteredExperience.length > 0) && (
            <div className="space-y-12 animate-in fade-in duration-500 print:block">
              <Section title="Experiência Profissional" icon={<Camera className="w-5 h-5" />}>
                <div className="space-y-6">
                  {filteredExperience.map((item) => (
                    <ExperienceCard key={item.id} data={item} />
                  ))}
                </div>
                
                {!hasSearch && (
                <div className="mt-16 print:mt-10 print:break-inside-avoid bg-stone-50/50 p-6 rounded-xl border border-stone-100">
                  <h3 className="text-xl font-bold tracking-tight text-stone-900 border-b-2 border-stone-200 pb-3 mb-4">
                    Detalhamento de Produções e Eventos
                  </h3>
                  <p className="text-stone-500 mb-8 print:text-black">
                    Visão estruturada dos principais programas institucionais, festivais e projetos de inovação dirigidos e operados tecnicamente.
                  </p>
                  <ProductionsTabs />
                </div>
                )}
              </Section>
            </div>
          )}

          {/* Tab: Laboratório */}
          {(!hasSearch ? activeTab === 'laboratorio' : filteredPortfolio.length > 0) && (
            <div className="animate-in fade-in duration-500 print:block">
              <Section title="Desenvolvimento Web & Laboratório" icon={<Terminal className="w-5 h-5" />}>
                <p className="text-stone-500 mb-10 text-lg leading-relaxed max-w-3xl print:text-black">
                  Projetos de software, plataformas web, ferramentas de automação e iniciativas P&D que integram audiovisual com gestão e Inteligência Artificial.
                </p>
                
                <div className="space-y-16 print:space-y-10">
                  {filteredPortfolio.map((group, gIdx) => (
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
          {(!hasSearch ? activeTab === 'formacao' : (filteredEducation.length > 0 || filteredCourses.length > 0)) && (
            <div className="space-y-16 animate-in fade-in duration-500 print:block">
              {/* Education */}
              {filteredEducation.length > 0 && (
              <Section title="Formação Acadêmica" icon={<GraduationCap className="w-5 h-5" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                  {filteredEducation.map((edu, idx) => (
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
              )}

              {/* Courses */}
              {filteredCourses.length > 0 && (
              <Section title="Cursos e Capacitações" icon={<BookOpen className="w-5 h-5" />}>
                {!hasSearch && (
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
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4">
                  {filteredCourses.map((course, idx) => (
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
              )}
            </div>
          )}

          {/* Tab: Audiovisual */}
          {(!hasSearch ? activeTab === 'audiovisual' : audiovisualHasSearch) && (
            <div className="space-y-6 animate-in fade-in duration-500 print:block">
               {/* Sub-tabs for Audiovisual (only when not searching) */}
               {!hasSearch && (
                 <div className="flex flex-col gap-3 mb-10 print:hidden border-b border-stone-200 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      <button onClick={() => setAudiovisualSubTab('todos')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSubTab === 'todos' ? 'bg-stone-800 text-white shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Todos os Trabalhos</button>
                      <button onClick={() => setAudiovisualSubTab('cinema')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSubTab === 'cinema' ? 'bg-stone-800 text-white shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Cinema</button>
                      <button onClick={() => setAudiovisualSubTab('jornalismo')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSubTab === 'jornalismo' ? 'bg-stone-800 text-white shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Jornalismo & Docs</button>
                      <button onClick={() => setAudiovisualSubTab('programa')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSubTab === 'programa' ? 'bg-stone-800 text-white shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Programa de TV</button>
                      <button onClick={() => setAudiovisualSubTab('institucional')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSubTab === 'institucional' ? 'bg-stone-800 text-white shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Institucional</button>
                      <button onClick={() => setAudiovisualSubTab('transmissao')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSubTab === 'transmissao' ? 'bg-stone-800 text-white shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Transmissão & Ao Vivo</button>
                      <button onClick={() => setAudiovisualSubTab('clipes')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSubTab === 'clipes' ? 'bg-stone-800 text-white shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Clipes Musicais</button>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-1 mt-1">
                        <span className="text-xs text-stone-400 font-medium mr-2 border-r border-stone-200 pr-3">Ordenar por:</span>
                        <button onClick={() => setAudiovisualSortMode('all')} className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSortMode === 'all' ? 'bg-stone-200 text-stone-900 shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Padrão</button>
                        <button onClick={() => setAudiovisualSortMode('recent')} className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSortMode === 'recent' ? 'bg-stone-200 text-stone-900 shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Mais Recentes</button>
                        <button onClick={() => setAudiovisualSortMode('old')} className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSortMode === 'old' ? 'bg-stone-200 text-stone-900 shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Antigos</button>
                        <button onClick={() => setAudiovisualSortMode('type')} className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSortMode === 'type' ? 'bg-stone-200 text-stone-900 shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Formato</button>
                        <button onClick={() => setAudiovisualSortMode('role')} className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${audiovisualSortMode === 'role' ? 'bg-stone-200 text-stone-900 shadow-sm' : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'}`}>Função</button>
                    </div>
                 </div>
               )}

               {(hasSearch || audiovisualSubTab === 'todos' || audiovisualSubTab === 'cinema') && (
                 <>
                   {f_CINEMA_LONGA.length > 0 && <AudiovisualSection title="Cinema - Longa" items={f_CINEMA_LONGA} sortMode={audiovisualSortMode} />}
                   {f_CINEMA_CURTA.length > 0 && <AudiovisualSection title="Cinema - Curta" items={f_CINEMA_CURTA} sortMode={audiovisualSortMode} />}
                   {filteredFilmography.length > 0 && <AudiovisualSection title="Filmografia" items={filteredFilmography} sortMode={audiovisualSortMode} />}
                 </>
               )}

               {(hasSearch || audiovisualSubTab === 'todos' || audiovisualSubTab === 'jornalismo') && (
                 <>
                   {f_JORNALISMO_GRANDE_REPORTAGEM.length > 0 && <AudiovisualSection title="Jornalismo - Grande Reportagem" items={f_JORNALISMO_GRANDE_REPORTAGEM} sortMode={audiovisualSortMode} />}
                   {f_JORNALISMO_REPORTAGEM.length > 0 && <AudiovisualSection title="Jornalismo - Reportagem" items={f_JORNALISMO_REPORTAGEM} sortMode={audiovisualSortMode} />}
                   {f_JORNALISMO_SERIE.length > 0 && <AudiovisualSection title="Jornalismo - Série" items={f_JORNALISMO_SERIE} sortMode={audiovisualSortMode} />}
                   {filteredDocumentaries.length > 0 && <AudiovisualSection title="Documentários" items={filteredDocumentaries} sortMode={audiovisualSortMode} />}
                 </>
               )}

               {(hasSearch || audiovisualSubTab === 'todos' || audiovisualSubTab === 'programa') && (
                 <>
                   {f_PROGRAMA_TV.length > 0 && <AudiovisualSection title="Programa de TV" items={f_PROGRAMA_TV} sortMode={audiovisualSortMode} />}
                 </>
               )}

               {(hasSearch || audiovisualSubTab === 'todos' || audiovisualSubTab === 'institucional') && (
                 <>
                   {f_INSTITUCIONAL.length > 0 && <AudiovisualSection title="Institucional" items={f_INSTITUCIONAL} sortMode={audiovisualSortMode} />}
                 </>
               )}

               {(hasSearch || audiovisualSubTab === 'todos' || audiovisualSubTab === 'transmissao') && (
                 <>
                   {f_TRANSMISSAO_EVENTOS.length > 0 && <AudiovisualSection title="Transmissão - Eventos" items={f_TRANSMISSAO_EVENTOS} sortMode={audiovisualSortMode} />}
                   {f_TRANSMISSAO_SHOWS.length > 0 && <AudiovisualSection title="Transmissão - Shows" items={f_TRANSMISSAO_SHOWS} sortMode={audiovisualSortMode} />}
                   {f_TRANSMISSAO_VIDEOAULAS.length > 0 && <AudiovisualSection title="Transmissão - Videoaulas" items={f_TRANSMISSAO_VIDEOAULAS} sortMode={audiovisualSortMode} />}
                 </>
               )}
               
               {(hasSearch || audiovisualSubTab === 'todos' || audiovisualSubTab === 'clipes') && (
                 <>
                   {filteredMusicVideos.length > 0 && <AudiovisualSection title="Clipes Musicais" items={filteredMusicVideos} sortMode={audiovisualSortMode} />}
                 </>
               )}
            </div>
          )}

          {activeTab === 'dev' && !hasSearch && (
             <DevOrganizer />
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
