import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import rawTrabalhos from '../trabalhos-raw.json';
import { FilmEntry } from '../types';
import { 
    CINEMA_LONGA, CINEMA_CURTA, JORNALISMO_GRANDE_REPORTAGEM, JORNALISMO_REPORTAGEM, 
    JORNALISMO_SERIE, INSTITUCIONAL, PROGRAMA_TV, TRANSMISSAO_EVENTOS, TRANSMISSAO_SHOWS, 
    TRANSMISSAO_VIDEOAULAS, MUSIC_VIDEOS
} from '../constants';

interface DevItem {
    id: string;
    title: string;
    year: string;
    description: string;
    role: string;
    url: string;
    category: string;
}

const CATEGORY_LABELS: Record<string, string> = {
    '': '-- Não Categorizado --',
    'cinema_longa': 'Cinema / Longa',
    'cinema_curta': 'Cinema / Curta',
    'jornalismo_grande_reportagem': 'Jornal. e Doc. / Grande Reportagem',
    'jornalismo_reportagem': 'Jornal. e Doc. / Reportagem',
    'jornalismo_serie': 'Jornal. e Doc. / Série',
    'institucional': 'Institucional',
    'programa_tv': 'Programa de TV',
    'transmissao_eventos': 'Transmissão / Eventos gerais',
    'transmissao_shows': 'Transmissão / Shows',
    'transmissao_videoaulas': 'Transmissão / Videoaulas',
    'music_video': 'Clipes musicais',
    'experience_link': 'Link em Experiência',
    'ignored': 'Ignorar'
};

export default function DevOrganizer() {
    const [items, setItems] = useState<DevItem[]>([]);
    const [filter, setFilter] = useState<string>('all');
    
    useEffect(() => {
        const itemMap = new Map<string, DevItem>();
        
        const addEntries = (entries: FilmEntry[], defaultCat: string) => {
            entries.forEach(e => {
                const id = e.url || e.title;
                if (!itemMap.has(id)) {
                    itemMap.set(id, {
                        id,
                        title: e.title || '',
                        year: e.year || '',
                        description: e.description || '',
                        role: e.role || '',
                        url: e.url || '',
                        category: defaultCat
                    });
                }
            });
        };
        
        addEntries(CINEMA_LONGA, 'cinema_longa');
        addEntries(CINEMA_CURTA, 'cinema_curta');
        addEntries(JORNALISMO_GRANDE_REPORTAGEM, 'jornalismo_grande_reportagem');
        addEntries(JORNALISMO_REPORTAGEM, 'jornalismo_reportagem');
        addEntries(JORNALISMO_SERIE, 'jornalismo_serie');
        addEntries(INSTITUCIONAL, 'institucional');
        addEntries(PROGRAMA_TV, 'programa_tv');
        addEntries(TRANSMISSAO_EVENTOS, 'transmissao_eventos');
        addEntries(TRANSMISSAO_SHOWS, 'transmissao_shows');
        addEntries(TRANSMISSAO_VIDEOAULAS, 'transmissao_videoaulas');
        addEntries(MUSIC_VIDEOS, 'music_video');
        
        rawTrabalhos.forEach((t: any) => {
            const id = t.url || t.title;
            if (!itemMap.has(id)) {
                let category = '';
                let role = '';

                let titleUpper = (t.title || '').toUpperCase();
                
                if (titleUpper.includes("SABERES UEG") || titleUpper.includes("UEG ENTREVISTA") || titleUpper.includes("SABERES")) {
                    category = 'programa_tv';
                    role = 'DTV e Operador de Streaming';
                }
                else if (
                    titleUpper.includes("GOIÁS TEC") || 
                    titleUpper.includes("GOIAS TEC") || 
                    (titleUpper.includes("GEO - ") && titleUpper.includes("ANO")) ||
                    titleUpper.includes("MANHÃ -") ||
                    titleUpper.includes("TARDE -") ||
                    titleUpper.includes("NOITE -")
                ) {
                    category = 'transmissao_videoaulas';
                    role = 'DTV e Operador de Streaming';
                }
                
                itemMap.set(id, {
                    id,
                    title: t.title || '',
                    year: '',
                    description: '',
                    role: role,
                    url: t.url || '',
                    category: category
                });
            }
        });
        
        setItems(Array.from(itemMap.values()));
    }, []);

    const handleChange = (id: string, field: keyof DevItem, value: string) => {
        setItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const handleExport = () => {
        const exported: Record<string, any[]> = {};
        
        Object.keys(CATEGORY_LABELS).forEach(k => {
            if (k) exported[k] = [];
        });
        
        items.forEach(t => {
            if (!t.category || t.category === '') return;
            
            if (t.category === 'experience_link') {
                exported['experience_link'].push({ title: t.title, url: t.url });
                return;
            }
            if (t.category === 'ignored') {
                exported['ignored'].push({ title: t.title, url: t.url });
                return;
            }
            
            let finalType = CATEGORY_LABELS[t.category].split(' / ')[1] || CATEGORY_LABELS[t.category];
            
            const entry: FilmEntry = {
                title: t.title,
                year: t.year || "202x",
                role: t.role,
                description: t.description,
                type: finalType,
                url: t.url,
            };
            
            if (exported[t.category]) {
                exported[t.category].push(entry);
            }
        });
        
        const blob = new Blob([JSON.stringify(exported, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'organizer_export.json';
        a.click();
    };

    const filteredItems = items.filter(t => filter === 'all' ? true : filter === 'uncategorized' ? !t.category : t.category === filter);

    return (
        <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-200 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <h2 className="text-xl font-bold text-stone-900">Dev Organizer Module</h2>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <select 
                        className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm flex-1 md:flex-none"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">Mostrar Todos</option>
                        <option value="uncategorized">Não Categorizados</option>
                        {Object.keys(CATEGORY_LABELS).filter(k => k !== '').map(k => (
                            <option key={k} value={k}>{CATEGORY_LABELS[k]}</option>
                        ))}
                    </select>
                    <button 
                        onClick={handleExport}
                        className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shrink-0 whitespace-nowrap"
                    >
                        <Download className="w-4 h-4" /> Export JSON
                    </button>
                </div>
            </div>
            
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-4 border border-stone-200/50 bg-stone-100/50 rounded-xl p-4 hide-scrollbar">
                {filteredItems.map(t => (
                    <div key={t.id} className="flex flex-col p-4 bg-white rounded-xl border border-stone-200 gap-4 shadow-sm relative">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1 w-full flex items-center gap-2">
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wide w-12 shrink-0">Título</label>
                                <input 
                                    type="text" 
                                    className="border border-stone-200 rounded px-2 py-1 flex-1 font-medium text-stone-900 w-full"
                                    value={t.title}
                                    onChange={(e) => handleChange(t.id, 'title', e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Categoria</span>
                                <select 
                                    className="bg-stone-50 border border-stone-200 rounded px-2 py-1 text-sm flex-1 md:flex-none"
                                    value={t.category}
                                    onChange={(e) => handleChange(t.id, 'category', e.target.value)}
                                >
                                    {Object.keys(CATEGORY_LABELS).map(k => (
                                        <option key={k} value={k}>{CATEGORY_LABELS[k]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1 flex gap-2">
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-wide w-12 shrink-0 mt-2">Desc.</label>
                                <textarea 
                                    className="border border-stone-200 rounded px-2 py-1 w-full text-sm resize-none h-16"
                                    value={t.description}
                                    onChange={(e) => handleChange(t.id, 'description', e.target.value)}
                                    placeholder="Descrição (opcional)"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 lg:w-96 shrink-0">
                                <div className="flex-1 flex items-center gap-2">
                                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wide shrink-0">Função</label>
                                    <input 
                                        type="text" 
                                        className="border border-stone-200 rounded px-2 py-1 w-full text-sm"
                                        value={t.role}
                                        onChange={(e) => handleChange(t.id, 'role', e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center gap-2 w-full sm:w-32 shrink-0">
                                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wide shrink-0">Ano</label>
                                    <input 
                                        type="text" 
                                        className="border border-stone-200 rounded px-2 py-1 w-full text-sm"
                                        value={t.year}
                                        onChange={(e) => handleChange(t.id, 'year', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-3 -right-3">
                            <a href={t.url} target="_blank" rel="noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors shadow-sm">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-xs text-stone-500 font-medium tracking-wide uppercase text-right">
                {filteredItems.length} trabalhos listados
            </div>
        </div>
    );
}
