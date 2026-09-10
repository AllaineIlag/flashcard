'use client';

import React from 'react';
import { Check, RotateCw, Edit3 } from 'lucide-react';

interface ControlsProps {
  onCorrect: () => void;
  onFlip: () => void;
  onWrong: () => void;
  disabled?: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  onCorrect,
  onFlip,
  onWrong,
  disabled = false,
}) => {
  return (
    <footer className="w-full flex flex-col items-center gap-3">
      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full">
        {/* Correct Button */}
        <button
          onClick={onCorrect}
          disabled={disabled}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base text-white bg-gradient-to-br from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 active:scale-95 shadow-[0_6px_20px_rgba(16,185,129,0.35)] border border-emerald-400/40 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          <span className="truncate">Got it (Correct)</span>
        </button>

        {/* Flip Button */}
        <button
          onClick={onFlip}
          disabled={disabled}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base text-slate-200 bg-slate-800/80 hover:bg-slate-700/90 active:scale-95 border border-white/15 backdrop-blur-md shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCw className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="truncate">Flip Card</span>
        </button>

        {/* Wrong Button */}
        <button
          onClick={onWrong}
          disabled={disabled}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base text-white bg-gradient-to-br from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 active:scale-95 shadow-[0_6px_20px_rgba(244,63,94,0.35)] border border-rose-400/40 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Edit3 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          <span className="truncate">Study Again</span>
        </button>
      </div>

      {/* Keyboard Shortcuts Legend */}
      <div className="hidden sm:flex gap-3 justify-center flex-wrap text-[0.7rem] text-slate-400">
        <span>
          <kbd className="bg-white/10 border border-white/15 px-1.5 py-0.5 rounded font-mono text-slate-300 mr-1">
            Space
          </kbd>
          Flip
        </span>
        <span>
          <kbd className="bg-white/10 border border-white/15 px-1.5 py-0.5 rounded font-mono text-slate-300 mr-1">
            ← / A
          </kbd>
          Got it
        </span>
        <span>
          <kbd className="bg-white/10 border border-white/15 px-1.5 py-0.5 rounded font-mono text-slate-300 mr-1">
            → / D
          </kbd>
          Study Again
        </span>
        <span>
          <kbd className="bg-white/10 border border-white/15 px-1.5 py-0.5 rounded font-mono text-slate-300 mr-1">
            S
          </kbd>
          Scramble / Sequence
        </span>
        <span>
          <kbd className="bg-white/10 border border-white/15 px-1.5 py-0.5 rounded font-mono text-slate-300 mr-1">
            R
          </kbd>
          Restart
        </span>
      </div>
    </footer>
  );
};
