'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Flashcard, SortDirection, CardType } from '@/types/flashcard';
import { HelpCircle, Sparkles, MapPin, CheckCircle2, BookOpen, Lightbulb, Layers, Landmark, HelpCircle as QuestionIcon } from 'lucide-react';

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

const getCardTypeMeta = (type?: CardType) => {
  switch (type) {
    case 'analogy':
      return {
        label: 'ANALOGY',
        icon: Lightbulb,
        badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        cardBorder: 'border-amber-500/20',
      };
    case 'definition':
      return {
        label: 'DEFINITION',
        icon: BookOpen,
        badgeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
        cardBorder: 'border-blue-500/20',
      };
    case 'situational':
      return {
        label: 'SITUATIONAL SCENARIO',
        icon: MapPin,
        badgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
        cardBorder: 'border-indigo-500/20',
      };
    case 'structure':
      return {
        label: 'STRUCTURE / INSIDE THIS',
        icon: Layers,
        badgeClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
        cardBorder: 'border-teal-500/20',
      };
    case 'function':
      return {
        label: 'CELLULAR FUNCTION',
        icon: Sparkles,
        badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        cardBorder: 'border-emerald-500/20',
      };
    case 'history':
      return {
        label: 'HISTORICAL ROOTS',
        icon: Landmark,
        badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
        cardBorder: 'border-rose-500/20',
      };
    default:
      return {
        label: 'CONCEPT',
        icon: Sparkles,
        badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
        cardBorder: 'border-purple-500/20',
      };
  }
};

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

  const typeMeta = getCardTypeMeta(card.cardType);
  const TypeIcon = typeMeta.icon;

  const rotateZ = dragX * 0.05;
  const flipRotation = isFlipped ? 180 : 0;
  
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
          {/* FRONT FACE (Question / Analogy / Situational / Structure)*/}
          {/* ======================================================== */}
          <div className="absolute inset-0 w-full h-full backface-hidden preserve-3d rounded-3xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.15)] bg-[linear-gradient(145deg,#1c2642_0%,#11192e_100%)] p-5 sm:p-7 flex flex-col justify-between overflow-hidden z-2">
            
            {/* Header: Category & Type Badge */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[0.65rem] sm:text-xs font-bold tracking-wider uppercase bg-white/5 text-slate-300 border border-white/10 px-3 py-1 rounded-full truncate">
                {card.category}
              </span>
              <span className={`font-mono text-[0.65rem] sm:text-xs font-bold tracking-wider uppercase border px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0 ${typeMeta.badgeClass}`}>
                <TypeIcon className="w-3.5 h-3.5" />
                {typeMeta.label}
              </span>
            </div>

            {/* Central Question / Analogy / Prompt Content */}
            <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-4 my-auto overflow-y-auto py-2">
              
              {/* Question / Analogy Main Statement */}
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-inner">
                <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <span className="text-xl sm:text-2xl">{card.emoji}</span>
                  <span className="font-mono text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {card.cardType === 'analogy' ? 'Simple Analogy' : card.cardType === 'situational' ? 'Real-World Scenario' : card.cardType === 'structure' ? 'Inside This Organelle' : 'Question Prompt'}
                  </span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed">
                  {card.question}
                </p>
              </div>

              {/* Subtext Quote (if present) */}
              {card.subtext && (
                <div className="bg-indigo-950/40 border-l-2 border-indigo-400 pl-3.5 py-1.5 rounded-r-lg text-xs sm:text-sm text-indigo-200 italic">
                  &ldquo;{card.subtext}&rdquo;
                </div>
              )}

              {/* Follow-up Prompt Box (e.g. "What is it?") */}
              {card.prompt && (
                <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <p className="text-xs sm:text-sm font-semibold text-amber-200">
                    {card.prompt}
                  </p>
                </div>
              )}

            </div>

            {/* Bottom Flip Hint */}
            <div className="flex justify-center items-center text-[0.7rem] sm:text-xs text-slate-400 bg-black/30 px-3.5 py-1.5 rounded-full mx-auto border border-white/5">
              <span>💡 Tap card or press <b className="text-slate-200 font-mono">Space</b> to reveal Answer</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BACK FACE (ONLY The Answer / Terminology)                 */}
          {/* ======================================================== */}
          <div className="absolute inset-0 w-full h-full backface-hidden preserve-3d rotate-y-180 rounded-3xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.15)] bg-[linear-gradient(145deg,#0e2329_0%,#08171f_100%)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden z-1 text-center">
            
            {/* Header: Answer Badge */}
            <div className="flex justify-center items-center">
              <span className="font-mono text-[0.68rem] sm:text-xs font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ANSWER / TERMINOLOGY
              </span>
            </div>

            {/* Center: Big, Bold, Clean Answer */}
            <div className="flex-1 flex flex-col items-center justify-center gap-3 my-auto px-2">
              <span className="text-5xl sm:text-6xl">{card.emoji}</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {card.term}
              </h2>
              {card.subtitle && (
                <p className="text-sm sm:text-base md:text-lg text-emerald-400/90 font-medium max-w-md">
                  {card.subtitle}
                </p>
              )}
            </div>

            {/* Bottom Swipe Legend */}
            <div className="flex justify-center items-center text-[0.68rem] sm:text-xs text-slate-400 bg-black/30 px-3.5 py-1.5 rounded-full mx-auto border border-white/5">
              <span>Assess yourself: <b className="text-emerald-400">Left</b> = Mastered, <b className="text-rose-400">Right</b> = Review</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
