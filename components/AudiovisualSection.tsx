import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Clapperboard, Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import LiteYouTube from './LiteYouTube';

interface AudiovisualSectionProps {
    title: string;
    items: any[];
    icon?: React.ReactNode;
    sortMode?: 'all' | 'recent' | 'old' | 'type' | 'role';
    forceGroup?: string;
}

const ExpandableDescription = ({ text }: { text: string }) => {
    const [expanded, setExpanded] = useState(false);
    if (!text) return null;
    
    if (text.length <= 300) {
        return <p className="text-sm text-stone-600 dark:text-zinc-300 leading-relaxed mb-2 print:text-black">{text}</p>;
    }

    const displayText = expanded ? text : text.slice(0, 300) + '...';

    return (
        <p className="text-sm text-stone-600 dark:text-zinc-300 leading-relaxed mb-2 print:text-black">
            {displayText}
            <button 
                onClick={() => setExpanded(!expanded)} 
                className="ml-1 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors font-medium text-xs print:hidden"
            >
                {expanded ? 'Ler menos' : 'Ler mais'}
            </button>
        </p>
    );
};

const AudiovisualItem = ({ item, onOpenGallery }: { item: any, onOpenGallery: (imgs: string[]) => void }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center bg-stone-50 dark:bg-zinc-800/50 border border-stone-100 dark:border-white/5 p-4 rounded-xl hover:bg-stone-100 dark:hover:bg-zinc-800/70 transition-colors print:bg-transparent print:border-b print:rounded-none format-print">
            <div className="flex-1 min-w-0">
                <div className="flex items-start gap-4 min-w-0">
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-stone-800 dark:text-zinc-100 text-lg decoration-emerald-500/30 decoration-2 mb-1 break-words">
                            {item.url ? (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">
                                    {item.title}
                                </a>
                            ) : (
                                item.title
                            )}
                        </h4>
                        {item.url && item.url.includes("yout") && (
                            <div className="mt-3 max-w-xl">
                                <LiteYouTube url={item.url} title={item.title} />
                            </div>
                        )}
                        {item.description && (
                            <ExpandableDescription text={item.description} />
                        )}
                    </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-sm mt-3">
                    {item.role && (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium border border-emerald-100 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300">
                            {item.role}
                        </span>
                    )}
                    {(item.subCategory || item.type) && (
                        <span className="text-stone-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-stone-200 dark:border-white/10 px-2 py-0.5 rounded-md">
                            {item.subCategory || item.type}
                        </span>
                    )}
                    {item.images && item.images.length > 0 && (
                        <button onClick={() => onOpenGallery(item.images)} className="flex items-center gap-1 text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white transition-colors underline-offset-4 hover:underline">
                            <ImageIcon className="w-4 h-4" /> Ver Fotos ({item.images.length})
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-3 md:mt-0 md:ml-6 shrink-0 flex items-center md:flex-col gap-3 md:gap-1 text-stone-400 dark:text-zinc-500">
                {item.year && (
                    <span className="font-mono bg-stone-100 dark:bg-zinc-800 px-2 py-1 rounded text-stone-600 dark:text-zinc-300 border border-stone-200 dark:border-white/10 text-sm">
                        {item.year}
                    </span>
                )}
            </div>
        </div>
    );
};

const AudiovisualGroupComponent = ({ group, onOpenGallery }: { group: any, onOpenGallery: (imgs: string[]) => void }) => {
    const [expanded, setExpanded] = useState(false);
    const { groupName, items } = group;

    return (
        <div className="flex flex-col bg-stone-50 dark:bg-zinc-800/30 border border-stone-200 dark:border-white/10 p-5 rounded-xl shadow-sm print:bg-transparent print:border-b print:rounded-none format-print">
            <div className="flex items-center justify-between mb-4 border-b border-stone-200 dark:border-white/10 pb-3">
                <h4 className="font-bold text-stone-900 dark:text-white text-xl">
                    {groupName} <span className="text-sm font-normal text-stone-500 dark:text-zinc-400 ml-2">({items.length} trabalhos)</span>
                </h4>
                <button 
                    onClick={() => setExpanded(!expanded)}
                    className="text-sm font-medium bg-white dark:bg-zinc-900/60 border border-stone-200 dark:border-white/10 hover:bg-stone-50 dark:hover:bg-zinc-800/50 text-stone-700 dark:text-zinc-200 px-3 py-1.5 rounded-lg transition-colors print:hidden"
                >
                    {expanded ? "Esconder lista completa" : "Ver todos os trabalhos"}
                </button>
            </div>
            
            {!expanded ? (
                <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar print:hidden">
                    {items.slice(0, 6).map((item: any, idx: number) => (
                        <div key={idx} className="shrink-0 w-64 md:w-72 bg-white dark:bg-zinc-900/60 p-3 rounded-lg border border-stone-100 dark:border-white/5">
                            {item.url && item.url.includes("yout") ? (
                                <LiteYouTube url={item.url} title={item.title} />
                            ) : (
                                <div className="aspect-video bg-stone-100 dark:bg-zinc-800 rounded-md flex items-center justify-center border border-stone-200 dark:border-white/5">
                                    <Clapperboard className="w-8 h-8 text-stone-300 dark:text-zinc-600" />
                                </div>
                            )}
                            <div className="mt-3 text-sm font-bold text-stone-800 dark:text-zinc-100 truncate" title={item.title}>{item.title}</div>
                            {item.year && <div className="text-xs text-stone-500 dark:text-zinc-400 mt-1">{item.year}</div>}
                        </div>
                    ))}
                    {items.length > 6 && (
                        <div className="shrink-0 w-32 flex items-center justify-center">
                            <button 
                                onClick={() => setExpanded(true)}
                                className="text-sm font-medium text-stone-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex flex-col items-center gap-2 bg-white dark:bg-zinc-900/60 p-4 rounded-lg border border-stone-200 dark:border-white/10 w-full h-full justify-center shadow-sm"
                            >
                                <ChevronRight className="w-6 h-6" />
                                Ver Mais {items.length - 6}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-4 mt-2">
                    {items.map((item: any, idx: number) => (
                        <AudiovisualItem key={idx} item={item} onOpenGallery={onOpenGallery} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function AudiovisualSection({ title, items, icon, sortMode = 'all', forceGroup }: AudiovisualSectionProps) {

    const [lightboxImgs, setLightboxImgs] = useState<string[]>([]);
    const [currentImgIdx, setCurrentImgIdx] = useState<number>(0);
    const [maximized, setMaximized] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const sortedItems = useMemo(() => {
        let sorted = [...items];
        switch(sortMode) {
            case 'recent': sorted.sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0')); break;
            case 'old': sorted.sort((a, b) => parseInt(a.year || '0') - parseInt(b.year || '0')); break;
            case 'type': sorted.sort((a, b) => ((a.subCategory || a.type) || '').localeCompare((b.subCategory || b.type) || '')); break;
            case 'role': sorted.sort((a, b) => (a.role || '').localeCompare(b.role || '')); break;
            default: break;
        }
        return sorted;
    }, [items, sortMode]);

    const groupedItems = useMemo(() => {
        if (forceGroup) {
            return [{ isGroup: true, groupName: forceGroup, items: sortedItems }];
        }

        const result: any[] = [];
        const groupMap: { [key: string]: any } = {};
        const noGroupItems: any[] = [];

        sortedItems.forEach(item => {
            if (item.group && item.group.trim()) {
                const groups = item.group.split(',').map((g: string) => g.trim()).filter(Boolean);
                if (groups.length === 0) {
                    noGroupItems.push({ isGroup: false, item });
                    return;
                }
                groups.forEach((groupName: string) => {
                    if (!groupMap[groupName]) {
                        const groupObj = {
                            isGroup: true,
                            groupName: groupName,
                            items: [item],
                        };
                        groupMap[groupName] = groupObj;
                        result.push(groupObj);
                    } else {
                        // avoid duplicate items in the same group explicitly if needed, but they shouldn't occur
                        // if the user typed "Group A, Group A".
                        if (!groupMap[groupName].items.some((i: any) => i === item)) {
                            groupMap[groupName].items.push(item);
                        }
                    }
                });
            } else {
                noGroupItems.push({ isGroup: false, item });
            }
        });

        return [...result, ...noGroupItems];
    }, [sortedItems]);

    if (!items || items.length === 0) return null;

    const handleOpenGallery = (imgs: string[]) => {
        setLightboxImgs(imgs);
        setCurrentImgIdx(0);
        setMaximized(false);
    };

    return (
        <section className="mb-12">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 dark:text-white mb-6 border-b-2 border-stone-200 dark:border-white/10 pb-3">
                {icon || <Clapperboard className="w-5 h-5 text-stone-700 dark:text-zinc-200" />}
                {title}
            </h3>

            <div className="space-y-4 print:space-y-2">
                {groupedItems.map((entry, idx) => {
                    if (entry.isGroup) {
                        return <AudiovisualGroupComponent key={idx} group={entry} onOpenGallery={handleOpenGallery} />
                    }
                    return <AudiovisualItem key={idx} item={entry.item} onOpenGallery={handleOpenGallery} />
                })}
            </div>

            {/* LIGHTBOX */}
            {mounted && lightboxImgs.length > 0 && createPortal(
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999999 }} className="bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
                    <div className="absolute top-4 right-4 flex gap-4">
                        <button onClick={() => setMaximized(!maximized)} className="text-white/70 hover:text-white transition-colors bg-white dark:bg-zinc-900/10 p-2 rounded-full">
                            <Maximize2 className="w-6 h-6" />
                        </button>
                        <button onClick={() => setLightboxImgs([])} className="text-white/70 hover:text-white transition-colors bg-white dark:bg-zinc-900/10 p-2 rounded-full">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className={`relative flex items-center justify-center transition-all duration-300 ${maximized ? 'w-full h-full' : 'max-w-4xl max-h-[80vh]'}`}>
                        <img src={lightboxImgs[currentImgIdx]} alt="Galeria" className={`object-contain ${maximized ? 'w-full h-full' : 'max-h-[80vh] rounded-lg shadow-2xl'}`} />
                        
                        {lightboxImgs.length > 1 && (
                            <>
                                <button onClick={() => setCurrentImgIdx(prev => prev === 0 ? lightboxImgs.length - 1 : prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full hover:bg-black/80">
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button onClick={() => setCurrentImgIdx(prev => prev === lightboxImgs.length - 1 ? 0 : prev + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full hover:bg-black/80">
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                                
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto hide-scrollbar max-w-full px-4 py-2 bg-black/50 rounded-xl backdrop-blur-md">
                                    {lightboxImgs.map((img, i) => (
                                        <button key={i} onClick={() => setCurrentImgIdx(i)} className={`w-16 h-12 shrink-0 rounded overflow-hidden border-2 transition-all ${i === currentImgIdx ? 'border-emerald-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                                            <img src={img} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            , document.body)}
        </section>
    );
}
