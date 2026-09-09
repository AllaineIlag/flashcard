'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Flashcard, SortDirection } from '@/types/flashcard';
import { HelpCircle, Sparkles } from 'lucide-react';

interface FlashcardStageProps {
  card: Flashcard | null;
  isFlipped: boolean;
  sortDirection: SortDirection;
  isAnimating: boolean;
  onFlip: () => void;
  onSwipeCorrect: () => void;
  onSwipeWrong: () => void;
  onDragMove?: (deltaX: number) => void;
  onDragEnd?: () => void;
}

export const FlashcardStage: React.FC<FlashcardStageProps> = ({
  card,
  isFlipped,
  sortDirection,
  isAnimating,
  onFlip,
  onSwipeCorrect,
  onSwipeWrong,
  onDragMove,
  onDragEnd,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isAnimating) return;
    if ((e.target as HTMLElement).closest('button')) return;

    setIsDragging(true);
    startXRef.current = e.clientX;
    setDragX(0);
    cardRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isAnimating) return;
    const delta = e.clientX - startXRef.current;
    setDragX(delta);
    if (onDragMove) onDragMove(delta);
  };

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      cardRef.current?.releasePointerCapture(e.pointerId);
    } catch {}

    if (onDragEnd) onDragEnd();

    const threshold = 85;
    if (dragX < -threshold) {
      onSwipeCorrect();
    } else if (dragX > threshold) {
      onSwipeWrong();
    } else if (Math.abs(dragX) < 8) {
      onFlip();
    }
    setDragX(0);
  }, [dragX, isDragging, onDragEnd, onFlip, onSwipeCorrect, onSwipeWrong]);

  useEffect(() => {
    setDragX(0);
    setIsDragging(false);
  }, [card]);

  if (!card) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900/40 rounded-3xl border border-white/10 text-slate-400">
        No card available
      </div>
    );
  }

  const rotateZ = dragX * 0.05;
  const flipRotation = isFlipped ? 180 : 0;
  
  // Dynamic inline transform during dragging
  const dragTransform = isDragging
    ? `translateX(${dragX}px) rotateY(${flipRotation}deg) rotateZ(${rotateZ}deg)`
    : isFlipped
    ? 'rotateY(180deg)'
    : 'rotateY(0deg)';

  const sortClass = sortDirection === 'left' ? 'fly-to-left' : sortDirection === 'right' ? 'fly-to-right' : '';

  return (
    <section className="relative w-full h-full">
      <div className="perspective-1200 w-full h-full">
        <div
          ref={cardRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ transform: sortClass ? undefined : dragTransform }}
          className={`w-full h-full relative preserve-3d cursor-grab active:cursor-grabbing rounded-3xl outline-none select-none ${
            isDragging ? 'transition-none' : 'transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.3,0.64,1)]'
          } ${sortClass}`}
        >
          {/* ======================================================== */}
          {/* FRONT FACE (Shown FIRST: Concept Clue & Question)       */}
          {/* ======================================================== */}
          <div className="absolute inset-0 w-full h-full backface-hidden preserve-3d rounded-3xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.15)] bg-[linear-gradient(145deg,#1e2846_0%,#131b31_100%)] p-4 sm:p-7 flex flex-col justify-between overflow-hidden z-2">
            
            {/* Header Category Badge */}
            <div className="flex justify-center items-center">
              <span className="font-mono text-[0.68rem] sm:text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-200 border border-indigo-500/40 px-3.5 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {card.category}
              </span>
            </div>

            {/* Scrollable Content: Analogy & Clue */}
            <div className="flex-1 flex flex-col justify-center gap-2.5 sm:gap-3.5 my-2 overflow-y-auto pr-1">
              
              {/* Analogy Clue Box */}
              <div className="bg-indigo-950/40 border border-indigo-500/25 rounded-2xl p-3 sm:p-4.5 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="text-base sm:text-xl">{card.emoji}</span>
                  <span className="font-mono text-[0.68rem] sm:text-xs font-bold text-indigo-300 tracking-wider uppercase">
                    CONCEPT CLUE
                  </span>
                </div>
                <div
                  className="text-xs sm:text-[0.95rem] text-slate-200 leading-relaxed font-normal"
                  dangerouslySetInnerHTML={{ __html: card.analogy }}
                />
              </div>

              {/* Follow-up Question Box */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 sm:p-3.5 flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <p className="text-xs sm:text-sm font-semibold text-amber-200 leading-snug">
                  {card.prompt}
                </p>
              </div>

            </div>

            {/* Bottom Hint */}
            <div className="flex justify-center items-center text-[0.7rem] sm:text-xs text-slate-400 bg-black/30 px-3.5 py-1.5 rounded-full mx-auto border border-white/5">
              <span>💡 Tap card or press <b className="text-slate-200 font-mono">Space</b> to reveal Answer</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BACK FACE (Shown on FLIP: Terminology & Takeaways)      */}
          {/* ======================================================== */}
          <div className="absolute inset-0 w-full h-full backface-hidden preserve-3d rotate-y-180 rounded-3xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.15)] bg-[linear-gradient(145deg,#192440_0%,#0f182c_100%)] p-4 sm:p-7 flex flex-col justify-between overflow-hidden z-1">
            
            {/* Header Category Badge */}
            <div className="flex justify-center items-center">
              <span className="font-mono text-[0.68rem] sm:text-xs font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3.5 py-1 rounded-full">
                TERMINOLOGY / ANSWER
              </span>
            </div>

            {/* Answer Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-2.5 sm:gap-3.5 my-2 overflow-y-auto px-1 sm:px-2">
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {card.term}
                </h2>
                {card.subtitle && (
                  <p className="text-xs sm:text-sm text-indigo-300 font-medium mt-1">
                    {card.subtitle}
                  </p>
                )}
              </div>

              {/* Takeaway Box */}
              <div className="bg-emerald-950/40 border border-emerald-500/25 rounded-2xl p-3 sm:p-4 text-left w-full shadow-sm">
                <span className="font-mono text-[0.68rem] sm:text-xs font-bold text-emerald-400 block mb-1">
                  📌 KEY TAKEAWAYS:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {card.takeaway}
                </p>
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="flex justify-center items-center text-[0.68rem] sm:text-xs text-slate-400 bg-black/30 px-3.5 py-1.5 rounded-full mx-auto border border-white/5">
              <span>Assess yourself: Left = Mastered, Right = Review</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
