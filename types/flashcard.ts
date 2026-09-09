export interface Flashcard {
  id: number;
  category: string;
  emoji: string;
  analogy: string; // Concept clue / simple explanation
  prompt: string;  // Follow-up recall question (e.g. "Anong branch of science ito?")
  term: string;    // Terminology name revealed on back
  subtitle: string;// Full name or short translation
  takeaway: string;// Bulleted / summary core takeaway
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
