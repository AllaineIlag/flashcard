'use client';

import React from 'react';
import { RotateCw, ArrowRight } from 'lucide-react';

interface RoundModalProps {
  isOpen: boolean;
  roundNumber: number;
  masteredCount: number;
  reviewCount: number;
  totalDeckCount: number;
  onStartNextRound: () => void;
}

export const RoundModal: React.FC<RoundModalProps> = ({
  isOpen,
  roundNumber,
  masteredCount,
  reviewCount,
  totalDeckCount,
  onStartNextRound,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-gradient-to-b from-slate-800 to-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl scale-100">
        
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-3.5 text-indigo-400">
          <RotateCw className="w-7 h-7 animate-spin-slow" />
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
          Round {roundNumber} Completed!
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          You mastered <b className="text-emerald-400 font-bold">{masteredCount}</b> of {totalDeckCount} cards!
          <br />
          <b className="text-rose-400 font-bold">{reviewCount}</b> cards need another review cycle.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 w-full mb-4">
          <div className="bg-black/30 border border-white/10 rounded-2xl p-3 flex flex-col items-center">
            <span className="font-mono text-2xl font-extrabold text-emerald-400">
              {masteredCount}
            </span>
            <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Mastered
            </span>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-3 flex flex-col items-center">
            <span className="font-mono text-2xl font-extrabold text-rose-400">
              {reviewCount}
            </span>
            <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Repeating
            </span>
          </div>
        </div>

        <p className="text-[0.75rem] text-slate-400 mb-6">
          Next round will repeat <b>only</b> the cards in your review pile until 100% mastery.
        </p>

        <button
          onClick={onStartNextRound}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 active:scale-98 shadow-[0_6px_25px_rgba(16,185,129,0.4)] transition cursor-pointer"
        >
          <span>Start Round {roundNumber + 1} (Repeat Wrong Cards)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
