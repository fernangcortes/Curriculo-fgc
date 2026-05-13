import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { 
    subject: 'Broadcast', 
    A: 95, 
    description: 'Expertise em engenharia de transmissão, fluxos NDI/IP e operação de switchers complexos para TV e streaming.' 
  },
  { 
    subject: 'Cinegrafia', 
    A: 95, 
    description: 'Operação de câmeras de cinema e broadcast (Sony, Blackmagic) com foco em narrativa visual e movimento.' 
  },
  { 
    subject: 'Fotografia', 
    A: 90, 
    description: 'Domínio de iluminação, composição estética e tratamento de imagem para projetos institucionais e autorais.' 
  },
  { 
    subject: 'IA & Automação', 
    A: 90, 
    description: 'Implementação de ferramentas de IA generativa e automação de hardware (Bitfocus) para otimização de estúdios.' 
  },
  { 
    subject: 'Produção', 
    A: 85, 
    description: 'Gestão de set, assistência de direção e planejamento logístico para eventos e obras audiovisuais.' 
  },
  { 
    subject: 'Pós-Produção', 
    A: 85, 
    description: 'Edição não-linear, correção de cor e finalização técnica de projetos documentais e de ficção.' 
  },
  { 
    subject: 'Som & Áudio', 
    A: 80, 
    description: 'Operação de som direto, mixagem técnica e rádio-transmissão com foco em clareza informativa.' 
  },
  { 
    subject: 'Design Visual', 
    A: 60, 
    description: 'Criação de identidades visuais básicas, motion graphics leves e layouts funcionais para ferramentas digitais.' 
  },
  { 
    subject: 'Desenvolvimento', 
    A: 40, 
    description: 'Iniciação em tecnologias web (React, TS) para desenvolvimento de ferramentas de suporte audiovisual.' 
  },
].sort((a, b) => b.A - a.A);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-stone-900 dark:bg-zinc-950 text-white text-[10px] p-2.5 rounded shadow-xl font-mono max-w-[200px]">
        <p className="font-bold underline mb-1">{payload[0].payload.subject}</p>
        <p className="text-stone-300 leading-tight italic">
          {payload[0].payload.description}
        </p>
      </div>
    );
  }
  return null;
};

interface SkillsChartProps {
  isDarkMode?: boolean;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ isDarkMode = false }) => {
  return (
    <div className="w-full max-w-full overflow-hidden mb-10 bg-stone-50 dark:bg-zinc-800/50 border border-stone-200 dark:border-white/10 p-4 md:p-6 shadow-sm print:hidden group">
      <h4 className="text-[10px] uppercase tracking-widest text-stone-400 dark:text-zinc-500 font-mono text-center mb-6 group-hover:text-stone-500 dark:hover:text-zinc-400 dark:hover:text-zinc-400 dark:hover:text-zinc-400 transition-colors">Mapa de Proficiência</h4>
      <style>
        {`
          .recharts-wrapper, 
          .recharts-wrapper *, 
          .recharts-surface, 
          .recharts-bar-rectangle,
          .recharts-active-bar,
          .recharts-tooltip-cursor,
          .recharts-layer {
            outline: none !important;
            box-shadow: none !important;
          }
          .recharts-wrapper:focus, 
          .recharts-wrapper *:focus,
          .recharts-wrapper:active,
          .recharts-surface:focus-visible {
            outline: none !important;
          }
          .recharts-wrapper {
            -webkit-tap-highlight-color: transparent;
            user-select: none;
            -webkit-user-select: none;
          }
        `}
      </style>
      <div style={{ height: '320px', minWidth: '0' }} className="w-full relative">
        <ResponsiveContainer width="100%" height="100%" className="focus:outline-none">
          <BarChart 
            data={data} 
            layout="vertical" 
            margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} strokeOpacity={0.1} />
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis 
              dataKey="subject" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'currentColor', fontSize: 11, fontFamily: 'monospace', fontWeight: 500 }} 
              width={100}
              className="text-stone-500 dark:text-zinc-400"
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar dataKey="A" radius={[0, 4, 4, 0]} barSize={12} activeBar={false}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={isDarkMode ? '#34d399' : '#065f46'} 
                  fillOpacity={0.6 + (entry.A / 250)} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillsChart;
