export interface Flashcard {
  id: number;
  category: string;
  emoji: string;
  situational: string;   // Real-world situational scenario / case study
  mainQuestion?: string;  // Guiding question (e.g. "How does the animal interact with its environment?")
  prompt: string;        // Follow-up recall question (e.g. "What branch of zoology is this?")
  term: string;          // Revealed term name
  subtitle?: string;     // Secondary title or etymology
  studies?: string[];    // Bullet points of scope / key concepts
  takeaway: string;      // Concise key takeaway
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
