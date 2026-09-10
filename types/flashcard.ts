export type CardType = 'definition' | 'analogy' | 'situational' | 'structure' | 'function' | 'history' | 'concept';

export interface Flashcard {
  id: number;
  category: string;
  cardType?: CardType;
  emoji: string;
  question: string;       // Core question, statement, analogy, or situational scenario
  subtext?: string;       // Optional guiding quote or context clue
  prompt?: string;        // Optional recall question (e.g. "What is it?", "What organelle is this?")
  term: string;           // Direct, prominent answer on flip
  subtitle?: string;      // Optional clean subtitle or alias
}

export interface Deck {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  cards: Flashcard[];
}

export type SortDirection = 'left' | 'right' | null;
