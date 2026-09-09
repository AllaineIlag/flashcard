'use client';

import React from 'react';
import { Check, Edit3 } from 'lucide-react';

interface PileZoneProps {
  type: 'left' | 'right';
  count: number;
  isDragTarget: boolean;
}

export const PileZone: React.FC<PileZoneProps> = ({ type, count, isDragTarget }) => {
  const isLeft = type === 'left';

  return (
    <aside
      className={`relative flex flex-col items-center justify-center p-3 sm:p-4 text-center rounded-2xl border-2 border-dashed transition-all duration-300 backdrop-blur-md overflow-hidden ${
        isLeft
          ? isDragTarget
            ? 'bg-emerald-500/20 border-emerald-400 scale-[1.03] shadow-[0_0_30px_rgba(16,185,129,0.3)]'
            : 'bg-slate-900/40 border-emerald-500/30'
          : isDragTarget
          ? 'bg-rose-500/20 border-rose-400 scale-[1.03] shadow-[0_0_30px_rgba(244,63,94,0.3)]'
          : 'bg-slate-900/40 border-rose-500/30'
      }`}
    >
      {/* Icon */}
      <div
        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 border transition-transform ${
          isLeft
            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40'
            : 'bg-rose-500/15 text-rose-400 border-rose-500/40'
        }`}
      >
        {isLeft ? <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" /> : <Edit3 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />}
      </div>

      {/* Title */}
      <h3
        className={`text-[0.7rem] sm:text-xs font-extrabold tracking-wider mb-0.5 uppercase ${
          isLeft ? 'text-emerald-400' : 'text-rose-400'
        }`}
      >
        {isLeft ? 'Mastered' : 'Needs Review'}
      </h3>

      {/* Subtitle (Hidden on small mobile) */}
      <p className="hidden md:block text-[0.65rem] text-slate-400 leading-tight mb-2 sm:mb-3">
        {isLeft ? 'Answered Correctly' : 'Will Repeat Next Round'}
      </p>

      {/* Counter Badge */}
      <div
        className={`font-mono text-sm sm:text-lg font-bold bg-black/40 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full border border-white/10 ${
          isLeft ? 'text-emerald-400' : 'text-rose-400'
        }`}
      >
        {count}
      </div>

      {/* Animated visual dot stack at bottom */}
      <div className="absolute bottom-2 w-4/5 h-1 flex gap-1 justify-center">
        {Array.from({ length: Math.min(count, 8) }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-full rounded-full ${
              isLeft ? 'bg-emerald-400/80' : 'bg-rose-400/80'
            }`}
          />
        ))}
      </div>
    </aside>
  );
};
