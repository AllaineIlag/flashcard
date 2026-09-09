'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { TOPICS } from '@/data/topics';
import { Deck, Flashcard, SortDirection } from '@/types/flashcard';
import { Header } from '@/components/Header';
import { PileZone } from '@/components/PileZone';
import { FlashcardStage } from '@/components/FlashcardStage';
import { Controls } from '@/components/Controls';
import { RoundModal } from '@/components/RoundModal';
import { VictoryModal } from '@/components/VictoryModal';
import { DeckSwitcherModal } from '@/components/DeckSwitcherModal';
import { playFlipSound, playCorrectSound, playWrongSound, playFanfareSound } from '@/lib/sound';

export default function FlashcardApp() {
  const [currentDeck, setCurrentDeck] = useState<Deck>(TOPICS[0]);
  const [activeCards, setActiveCards] = useState<Flashcard[]>([...TOPICS[0].cards]);
  const [masteredCards, setMasteredCards] = useState<Flashcard[]>([]);
  const [reviewCards, setReviewCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  
  const [isFlipped, setIsFlipped] = useState(false);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const [dragHighlight, setDragHighlight] = useState<'left' | 'right' | null>(null);
  const [isRoundModalOpen, setIsRoundModalOpen] = useState(false);
  const [isVictoryModalOpen, setIsVictoryModalOpen] = useState(false);
  const [isDeckSwitcherOpen, setIsDeckSwitcherOpen] = useState(false);

  // Current Card
  const currentCard = activeCards[currentIndex] || null;

  // Sound toggle
  const toggleSound = () => setSoundEnabled(prev => !prev);

  // Flip Card Action
  const handleFlip = useCallback(() => {
    if (isAnimating) return;
    setIsFlipped(prev => {
      const next = !prev;
      playFlipSound(soundEnabled);
      return next;
    });
  }, [isAnimating, soundEnabled]);

  // Finish Round Evaluation
  const finishRound = useCallback((newMastered: Flashcard[], newReview: Flashcard[]) => {
    if (newReview.length === 0) {
      // 100% Mastery Achieved
      playFanfareSound(soundEnabled);
      setIsVictoryModalOpen(true);
    } else {
      // Round completed with remaining review cards
      setIsRoundModalOpen(true);
    }
  }, [soundEnabled]);

  // Answer Correct (Left Pile - Mastered)
  const handleCorrect = useCallback(() => {
    if (isAnimating || !currentCard) return;
    setIsAnimating(true);
    setSortDirection('left');
    playCorrectSound(soundEnabled);

    setTimeout(() => {
      const updatedMastered = [...masteredCards, currentCard];
      setMasteredCards(updatedMastered);
      setSortDirection(null);
      setIsFlipped(false);

      const nextIndex = currentIndex + 1;
      if (nextIndex >= activeCards.length) {
        finishRound(updatedMastered, reviewCards);
      } else {
        setCurrentIndex(nextIndex);
      }
      setIsAnimating(false);
    }, 420);
  }, [isAnimating, currentCard, soundEnabled, masteredCards, reviewCards, currentIndex, activeCards.length, finishRound]);

  // Answer Wrong (Right Pile - Needs Review)
  const handleWrong = useCallback(() => {
    if (isAnimating || !currentCard) return;
    setIsAnimating(true);
    setSortDirection('right');
    playWrongSound(soundEnabled);

    setTimeout(() => {
      const updatedReview = [...reviewCards, currentCard];
      setReviewCards(updatedReview);
      setSortDirection(null);
      setIsFlipped(false);

      const nextIndex = currentIndex + 1;
      if (nextIndex >= activeCards.length) {
        finishRound(masteredCards, updatedReview);
      } else {
        setCurrentIndex(nextIndex);
      }
      setIsAnimating(false);
    }, 420);
  }, [isAnimating, currentCard, soundEnabled, reviewCards, masteredCards, currentIndex, activeCards.length, finishRound]);

  // Start Next Round (Cycle only review cards)
  const handleStartNextRound = () => {
    setIsRoundModalOpen(false);
    setCurrentRound(prev => prev + 1);
    setActiveCards([...reviewCards]);
    setReviewCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Restart Deck
  const handleRestart = useCallback(() => {
    setIsRoundModalOpen(false);
    setIsVictoryModalOpen(false);
    setCurrentRound(1);
    setActiveCards([...currentDeck.cards]);
    setMasteredCards([]);
    setReviewCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSortDirection(null);
    setIsAnimating(false);
  }, [currentDeck]);

  // Switch Topic Deck
  const handleSelectDeck = (deck: Deck) => {
    setCurrentDeck(deck);
    setIsRoundModalOpen(false);
    setIsVictoryModalOpen(false);
    setCurrentRound(1);
    setActiveCards([...deck.cards]);
    setMasteredCards([]);
    setReviewCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSortDirection(null);
  };

  // Drag physics feedback
  const handleDragMove = (deltaX: number) => {
    if (deltaX < -50) {
      setDragHighlight('left');
    } else if (deltaX > 50) {
      setDragHighlight('right');
    } else {
      setDragHighlight(null);
    }
  };

  const handleDragEnd = () => {
    setDragHighlight(null);
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVictoryModalOpen) {
        if (e.key === 'Enter') handleRestart();
        return;
      }
      if (isRoundModalOpen) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleStartNextRound();
        }
        return;
      }
      if (isDeckSwitcherOpen) {
        if (e.key === 'Escape') setIsDeckSwitcherOpen(false);
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        handleCorrect();
      } else if (e.code === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleWrong();
      } else if (e.key === 'r' || e.key === 'R') {
        if (window.confirm('Restart and review from Round 1?')) {
          handleRestart();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isVictoryModalOpen,
    isRoundModalOpen,
    isDeckSwitcherOpen,
    handleFlip,
    handleCorrect,
    handleWrong,
    handleRestart,
  ]);

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center p-3 sm:p-6 relative overflow-hidden">
      
      {/* Ambient glowing background lights */}
      <div className="fixed top-1/4 -left-28 w-96 h-96 rounded-full bg-emerald-500/20 blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/4 -right-28 w-96 h-96 rounded-full bg-rose-500/20 blur-[140px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col gap-4 my-auto z-10">
        
        {/* Top Header */}
        <Header
          currentDeck={currentDeck}
          currentRound={currentRound}
          currentCardNum={Math.min(currentIndex + 1, activeCards.length)}
          totalRoundCards={activeCards.length}
          masteredCount={masteredCards.length}
          totalDeckCards={currentDeck.cards.length}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          onRestartDeck={() => {
            if (window.confirm('Restart and review from Round 1?')) {
              handleRestart();
            }
          }}
          onOpenDeckSwitcher={() => setIsDeckSwitcherOpen(true)}
        />

        {/* 3-Column Arena (Left Pile - Center Flashcard - Right Pile) */}
        <div className="grid grid-cols-[85px_1fr_85px] sm:grid-cols-[150px_1fr_150px] gap-2.5 sm:gap-4.5 items-stretch min-h-[380px] sm:min-h-[410px] h-[410px]">
          
          {/* Left Pile: Mastered / Correct */}
          <PileZone
            type="left"
            count={masteredCards.length}
            isDragTarget={dragHighlight === 'left' || sortDirection === 'left'}
          />

          {/* Center Stage: Flashcard */}
          <FlashcardStage
            card={currentCard}
            isFlipped={isFlipped}
            sortDirection={sortDirection}
            isAnimating={isAnimating}
            onFlip={handleFlip}
            onSwipeCorrect={handleCorrect}
            onSwipeWrong={handleWrong}
            onDragMove={handleDragMove}
            onDragEnd={handleDragEnd}
          />

          {/* Right Pile: Needs Review / Wrong */}
          <PileZone
            type="right"
            count={reviewCards.length}
            isDragTarget={dragHighlight === 'right' || sortDirection === 'right'}
          />
        </div>

        {/* Bottom Action Controls */}
        <Controls
          onCorrect={handleCorrect}
          onFlip={handleFlip}
          onWrong={handleWrong}
          disabled={isAnimating || !currentCard}
        />
      </div>

      {/* Modals */}
      <RoundModal
        isOpen={isRoundModalOpen}
        roundNumber={currentRound}
        masteredCount={masteredCards.length}
        reviewCount={reviewCards.length}
        totalDeckCount={currentDeck.cards.length}
        onStartNextRound={handleStartNextRound}
      />

      <VictoryModal
        isOpen={isVictoryModalOpen}
        totalRounds={currentRound}
        totalCardsMastered={masteredCards.length}
        onRestart={handleRestart}
      />

      <DeckSwitcherModal
        isOpen={isDeckSwitcherOpen}
        decks={TOPICS}
        currentDeckId={currentDeck.id}
        onSelectDeck={handleSelectDeck}
        onClose={() => setIsDeckSwitcherOpen(false)}
      />
    </main>
  );
}
