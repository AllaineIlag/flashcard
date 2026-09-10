'use client';

import React from 'react';
import { Deck } from '@/types/flashcard';
import { Plus, Sparkles } from 'lucide-react';

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
    <nav className="w-full flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
      {decks.map((deck) => {
        const isActive = deck.id === currentDeckId;
        return (
          <button
            key={deck.id}
            onClick={() => onSelectDeck(deck)}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 border ${
              isActive
                ? 'bg-indigo-600 text-white border-indigo-400/80 shadow-[0_0_20px_rgba(99,102,241,0.35)] font-bold'
                : 'bg-slate-900/60 text-slate-300 border-white/10 hover:bg-slate-800/80 hover:text-white hover:border-white/20'
            }`}
          >
            <span className="text-base sm:text-lg">{deck.icon}</span>
            <span className="truncate max-w-[140px] sm:max-w-[200px]">{deck.title}</span>
            <span
              className={`font-mono text-[0.65rem] sm:text-[0.7rem] px-2 py-0.5 rounded-full ${
                isActive
                  ? 'bg-white/20 text-white font-bold'
                  : 'bg-white/5 text-slate-400'
              }`}
            >
              {deck.cards.length} cards
            </span>
          </button>
        );
      })}

      {/* Import / AI JSON Button */}
      <button
        onClick={onOpenImportModal}
        className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 border border-dashed border-indigo-500/50 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-white hover:border-indigo-400"
        title="Import or generate a custom JSON topic"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>+ Import JSON Deck</span>
      </button>
    </nav>
  );
};

