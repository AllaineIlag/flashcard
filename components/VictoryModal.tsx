'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Shuffle, ListOrdered } from 'lucide-react';

interface VictoryModalProps {
  isOpen: boolean;
  totalRounds: number;
  totalCardsMastered: number;
  onRestartScrambled: () => void;
  onRestartStructured: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  isOpen,
  totalRounds,
  totalCardsMastered,
  onRestartScrambled,
  onRestartStructured,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Fire festive multi-burst confetti
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#10b981', '#6366f1', '#f59e0b', '#ec4899', '#3b82f6'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_0_50px_rgba(16,185,129,0.3)] scale-100">
        
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mb-3.5 text-emerald-400 animate-bounce">
          <Trophy className="w-8 h-8" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          100% Mastery Achieved!
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Congratulations! You have mastered all cards in this topic using spaced repetition. Ready for another round?
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2.5 w-full mb-6">
          <div className="bg-black/35 border border-white/10 rounded-2xl p-2.5 flex flex-col items-center">
            <span className="font-mono text-xl font-extrabold text-emerald-400">
              {totalRounds}
            </span>
            <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Rounds
            </span>
          </div>

          <div className="bg-black/35 border border-white/10 rounded-2xl p-2.5 flex flex-col items-center">
            <span className="font-mono text-xl font-extrabold text-indigo-400">
              {totalCardsMastered}
            </span>
            <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Mastered
            </span>
          </div>

          <div className="bg-black/35 border border-white/10 rounded-2xl p-2.5 flex flex-col items-center">
            <span className="font-mono text-xl font-extrabold text-amber-400">
              100%
            </span>
            <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Retention
            </span>
          </div>
        </div>

        {/* Action Buttons: Scrambled vs Structured */}
        <div className="w-full flex flex-col gap-2.5">
          <button
            onClick={onRestartScrambled}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 active:scale-98 shadow-[0_4px_20px_rgba(168,85,247,0.4)] border border-purple-400/40 transition cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>🔀 Scramble &amp; Challenge Again</span>
          </button>

          <button
            onClick={onRestartStructured}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition cursor-pointer"
          >
            <ListOrdered className="w-4 h-4 text-slate-400" />
            <span>🔢 Review in Structured Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

