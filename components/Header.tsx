'use client';

import React from 'react';
import { Volume2, VolumeX, RotateCcw, BookOpen, Sparkles, ChevronDown } from 'lucide-react';
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
  onOpenImportModal: () => void;
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
  onOpenImportModal,
}) => {
  const masteryPct = totalDeckCards > 0 ? Math.round((masteredCount / totalDeckCards) * 100) : 0;
  const roundProgressPct = totalRoundCards > 0 ? (currentCardNum / totalRoundCards) * 100 : 0;

  return (
    <header className="w-full flex flex-col gap-3.5 bg-slate-900/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl">
      {/* Top row */}
      <div className="flex justify-between items-center gap-3 flex-wrap sm:flex-nowrap">
        
        {/* Left: Active Topic Selector & Switcher */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenDeckSwitcher}
            className="flex items-center gap-2 bg-indigo-600/25 hover:bg-indigo-600/40 text-indigo-200 border border-indigo-500/50 hover:border-indigo-400 px-3 py-1.5 rounded-xl transition cursor-pointer group shadow-sm"
            title="Click to switch topic"
          >
            <span className="text-lg">{currentDeck.icon}</span>
            <div className="text-left">
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-indigo-300 block">
                {currentDeck.badge}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-100 transition line-clamp-1">
                {currentDeck.title}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform shrink-0 ml-1" />
          </button>
        </div>

        {/* Right: Header Actions (AI Prompt, Round, Sound, Restart) */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          
          {/* AI Prompt / Import Button */}
          <button
            onClick={onOpenImportModal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-indigo-500/20 hover:from-amber-500/30 hover:to-indigo-500/30 text-amber-300 border border-amber-500/40 hover:border-amber-400 font-bold text-xs rounded-xl transition cursor-pointer shadow-sm"
            title="Open AI Prompt generator and JSON deck manager"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">AI Prompt / Import</span>
            <span className="sm:hidden">Prompt</span>
          </button>

          {/* Round Indicator */}
          <div className="font-mono text-xs font-bold text-indigo-200 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-xl">
            Round <span className="text-white">{currentRound}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-2 text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition cursor-pointer"
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-rose-400" />}
          </button>

          {/* Restart Deck */}
          <button
            onClick={onRestartDeck}
            className="p-2 text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition cursor-pointer"
            title="Restart Full Deck"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar & Counters */}
      <div className="flex flex-col gap-1.5">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-teal-400 to-emerald-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${roundProgressPct}%` }}
          />
        </div>
        <div className="flex justify-between text-[0.72rem] font-mono text-slate-400">
          <span>Card {currentCardNum} of {totalRoundCards} (Deck Total: {totalDeckCards})</span>
          <span className="text-emerald-400 font-bold">{masteredCount} Mastered ({masteryPct}%)</span>
        </div>
      </div>
    </header>
  );
};

