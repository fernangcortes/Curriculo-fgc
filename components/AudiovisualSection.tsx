import React, { useState, useMemo } from 'react';
import { Clapperboard } from 'lucide-react';
import { FilmEntry } from '../types';

interface AudiovisualSectionProps {
    title: string;
    items: FilmEntry[];
    icon?: React.ReactNode;
    sortMode?: 'all' | 'recent' | 'old' | 'type' | 'role';
}

export default function AudiovisualSection({ title, items, icon, sortMode = 'all' }: AudiovisualSectionProps) {

    const sortedItems = useMemo(() => {
        let sorted = [...items];
        
        switch(sortMode) {
            case 'recent':
                sorted.sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'));
                break;
            case 'old':
                sorted.sort((a, b) => parseInt(a.year || '0') - parseInt(b.year || '0'));
                break;
            case 'type':
                sorted.sort((a, b) => (a.type || '').localeCompare(b.type || ''));
                break;
            case 'role':
                sorted.sort((a, b) => (a.role || '').localeCompare(b.role || ''));
                break;
            case 'all':
            default:
                // Original order
                break;
        }
        return sorted;
    }, [items, sortMode]);

    if (!items || items.length === 0) return null;

    return (
        <section className="mb-12">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6 border-b-2 border-stone-200 pb-3">
                {icon || <Clapperboard className="w-5 h-5 text-stone-700" />}
                {title}
            </h3>

            <div className="space-y-4 print:space-y-2">
                {sortedItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center bg-stone-50 border border-stone-100 p-4 rounded-xl hover:bg-stone-100/70 transition-colors print:bg-transparent print:border-b print:rounded-none format-print">
                        <div className="flex-1">
                            <h4 className="font-bold text-stone-800 text-lg decoration-emerald-500/30 decoration-2 mb-1">
                                {item.url ? (
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">
                                        {item.title}
                                    </a>
                                ) : (
                                    item.title
                                )}
                            </h4>
                            {item.description && (
                                <p className="text-sm text-stone-600 leading-relaxed mb-2 print:text-black">
                                    {item.description}
                                </p>
                            )}
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                {item.role && (
                                    <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium border border-emerald-100">
                                        {item.role}
                                    </span>
                                )}
                                {item.type && (
                                    <span className="text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-md">
                                        {item.type}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="mt-3 md:mt-0 md:ml-6 shrink-0 flex items-center md:flex-col gap-3 md:gap-1 text-stone-400">
                            {item.year && (
                                <span className="font-mono bg-stone-100 px-2 py-1 rounded text-stone-600 border border-stone-200 text-sm">
                                    {item.year}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
