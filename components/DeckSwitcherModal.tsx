'use client';

import React from 'react';
import { Deck } from '@/types/flashcard';
import { X, CheckCircle2, Layers } from 'lucide-react';

interface DeckSwitcherModalProps {
  isOpen: boolean;
  decks: Deck[];
  currentDeckId: string;
  onSelectDeck: (deck: Deck) => void;
  onClose: () => void;
}

export const DeckSwitcherModal: React.FC<DeckSwitcherModalProps> = ({
  isOpen,
  decks,
  currentDeckId,
  onSelectDeck,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-gradient-to-b from-slate-800 to-slate-900 border border-white/15 rounded-3xl p-6 sm:p-7 flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Select Course Topic
              </h2>
              <p className="text-xs text-slate-400">
                Choose a lecture deck to start reviewing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Deck List */}
        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {decks.map((deck) => {
            const isSelected = deck.id === currentDeckId;
            return (
              <button
                key={deck.id}
                onClick={() => {
                  onSelectDeck(deck);
                  onClose();
                }}
                className={`flex items-start justify-between gap-3 p-4 rounded-2xl border text-left transition cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600/20 border-indigo-500/60 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                    : 'bg-black/30 border-white/10 hover:bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{deck.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-indigo-300">
                        {deck.badge}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-white">
                        {deck.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {deck.description}
                    </p>
                    <span className="inline-block mt-2 font-mono text-[0.7rem] text-slate-400">
                      {deck.cards.length} {deck.cards.length === 1 ? 'card' : 'cards'}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
