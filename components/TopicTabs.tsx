'use client';

import React from 'react';
import { Deck } from '@/types/flashcard';
import { Sparkles, Layers, Plus } from 'lucide-react';

interface TopicTabsProps {
  decks: Deck[];
  currentDeckId: string;
  onSelectDeck: (deck: Deck) => void;
  onOpenImportModal: () => void;
}

export const TopicTabs: React.FC<TopicTabsProps> = ({
  decks,
  currentDeckId,
  onSelectDeck,
  onOpenImportModal,
}) => {
  return (
    <section className="w-full flex flex-col gap-2">
      {/* Subheader Title */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Switch Topic ({decks.length} Decks):</span>
        </div>
        <button
          onClick={onOpenImportModal}
          className="text-[0.72rem] font-mono text-amber-300 hover:text-amber-200 underline flex items-center gap-1 cursor-pointer transition"
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Generate with AI / Import JSON</span>
        </button>
      </div>

      {/* Tabs Row */}
      <nav className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {decks.map((deck) => {
          const isActive = deck.id === currentDeckId;
          return (
            <button
              key={deck.id}
              onClick={() => onSelectDeck(deck)}
              className={`flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-2xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer border text-left group ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.35)] ring-2 ring-indigo-500/40 font-bold'
                  : 'bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white hover:border-white/20 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-lg shrink-0">{deck.icon}</span>
                <div className="min-w-0">
                  <span className={`text-[0.65rem] font-mono block uppercase tracking-wider ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {deck.badge}
                  </span>
                  <span className="font-semibold text-xs sm:text-[0.82rem] truncate block leading-tight">
                    {deck.title}
                  </span>
                </div>
              </div>

              <span
                className={`font-mono text-[0.65rem] px-2 py-0.5 rounded-full shrink-0 ${
                  isActive
                    ? 'bg-white/25 text-white font-bold'
                    : 'bg-white/5 text-slate-400 group-hover:bg-white/10'
                }`}
              >
                {deck.cards.length}
              </span>
            </button>
          );
        })}

        {/* Action: Add / Import JSON */}
        <button
          onClick={onOpenImportModal}
          className="flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer border border-dashed border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 hover:border-amber-400 text-center shadow-sm"
          title="Import or generate a custom JSON deck with AI"
        >
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>+ Import / Paste JSON</span>
        </button>
      </nav>
    </section>
  );
};


