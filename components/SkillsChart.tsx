import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { subject: 'Broadcast', A: 95 },
  { subject: 'Cinegrafia', A: 95 },
  { subject: 'Fotografia', A: 90 },
  { subject: 'IA & Automação', A: 90 },
  { subject: 'Produção', A: 85 },
  { subject: 'Pós-Produção', A: 85 },
  { subject: 'Som & Áudio', A: 80 },
  { subject: 'Design Visual', A: 60 },
  { subject: 'Desenvolvimento', A: 40 },
].sort((a, b) => b.A - a.A);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-stone-900 text-white text-[10px] p-2 rounded shadow-lg font-mono">
        <p className="font-bold">{payload[0].payload.subject}</p>
        <p className="text-stone-300">Proficiência: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const SkillsChart: React.FC = () => {
  return (
    <div className="w-full mb-10 bg-stone-50 border border-stone-200 p-4 md:p-6 shadow-sm print:hidden group">
      <h4 className="text-[10px] uppercase tracking-widest text-stone-400 font-mono text-center mb-6 group-hover:text-stone-500 transition-colors">Mapa de Proficiência</h4>
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            layout="vertical" 
            margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e7e5e4" />
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis 
              dataKey="subject" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#57534e', fontSize: 11, fontFamily: 'monospace', fontWeight: 500 }} 
              width={100}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f5f5f4' }} />
            <Bar dataKey="A" radius={[0, 4, 4, 0]} barSize={12}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#1c1917" opacity={0.6 + (entry.A / 250)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillsChart;
