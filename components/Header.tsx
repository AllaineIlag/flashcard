'use client';

import React from 'react';
import { Volume2, VolumeX, RotateCcw, BookOpen } from 'lucide-react';
import { Deck } from '@/types/flashcard';

interface HeaderProps {
  currentDeck: Deck;
  currentRound: number;
  currentCardNum: number;
  totalRoundCards: number;
  masteredCount: number;
  totalDeckCards: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onRestartDeck: () => void;
  onOpenDeckSwitcher: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentDeck,
  currentRound,
  currentCardNum,
  totalRoundCards,
  masteredCount,
  totalDeckCards,
  soundEnabled,
  onToggleSound,
  onRestartDeck,
  onOpenDeckSwitcher,
}) => {
  const masteryPct = totalDeckCards > 0 ? Math.round((masteredCount / totalDeckCards) * 100) : 0;
  const roundProgressPct = totalRoundCards > 0 ? (currentCardNum / totalRoundCards) * 100 : 0;

  return (
    <header className="w-full flex flex-col gap-3.5 bg-[rgba(20,27,48,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.12)] rounded-2xl p-3.5 sm:p-5 shadow-2xl">
      {/* Top row */}
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <button
            onClick={onOpenDeckSwitcher}
            className="flex items-center gap-1.5 font-mono text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-2.5 py-1 rounded-full hover:bg-indigo-500/30 transition cursor-pointer"
            title="Switch Deck / Topic"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{currentDeck.badge}</span>
          </button>
          
          <h1 className="text-sm sm:text-lg font-bold text-white tracking-tight line-clamp-1">
            {currentDeck.title}
          </h1>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          <div className="font-mono text-xs font-bold text-indigo-200 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
            Round <span className="text-white">{currentRound}</span>
          </div>

          <button
            onClick={onToggleSound}
            className="p-1.5 text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition cursor-pointer"
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-rose-400" />}
          </button>

          <button
            onClick={onRestartDeck}
            className="p-1.5 text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition cursor-pointer"
            title="Restart Full Deck"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col gap-1.5">
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${roundProgressPct}%` }}
          />
        </div>
        <div className="flex justify-between text-[0.72rem] font-mono text-slate-400">
          <span>Card {currentCardNum} of {totalRoundCards}</span>
          <span className="text-emerald-400 font-semibold">{masteryPct}% Mastered</span>
        </div>
      </div>
    </header>
  );
};
