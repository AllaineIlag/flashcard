'use client';

import React, { useState } from 'react';
import { Deck, Flashcard } from '@/types/flashcard';
import { X, Upload, Sparkles, Copy, Check, FileJson, Download, AlertCircle, RefreshCw } from 'lucide-react';

interface ImportDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportDeck: (deck: Deck) => void;
  currentDeck: Deck;
  onResetDefaults: () => void;
}

const AI_PROMPT_TEMPLATE = `You are a biology flashcard generator. Convert my notes into a valid JSON flashcard deck following the exact schema below.

### Rules:
1. Break concepts into multiple atomic, focused flashcards:
   - "definition" = Direct, clear textbook definition in simple English.
   - "analogy" = Relatable, intuitive everyday analogy (e.g. "Imagine a factory where...").
   - "situational" = Practical real-world research or wildlife case study.
   - "structure" = What is inside or physical components.
2. The "term" on the answer side must ONLY be the clean name/answer (plus an optional short "subtitle" alias).
3. Do NOT add long paragraphs or walls of text. Keep questions punchy and easy to understand.
4. Output ONLY valid JSON in this format:

\`\`\`json
{
  "id": "custom-topic-1",
  "title": "Topic Name Here",
  "badge": "Topic Custom",
  "description": "Brief 1-sentence topic description",
  "icon": "🧬",
  "cards": [
    {
      "id": 1,
      "category": "THE NUCLEUS",
      "cardType": "definition",
      "emoji": "👑",
      "question": "What double-membrane organelle stores the cell's genetic DNA and directs protein synthesis?",
      "prompt": "What organelle is this?",
      "term": "Nucleus",
      "subtitle": "Genetic Command Center"
    },
    {
      "id": 2,
      "category": "THE NUCLEUS",
      "cardType": "analogy",
      "emoji": "🏛️",
      "question": "Imagine the central city hall of a factory town where all master blueprints and laws are locked safely inside a vault.",
      "prompt": "What is it?",
      "term": "Nucleus"
    },
    {
      "id": 3,
      "category": "THE NUCLEUS",
      "cardType": "structure",
      "emoji": "🔬",
      "question": "Inside this organelle, you can find chromatin, the nucleolus, and nucleoplasm wrapped in a double envelope with pores.",
      "prompt": "What organelle is this?",
      "term": "Nucleus"
    },
    {
      "id": 4,
      "category": "THE NUCLEUS",
      "cardType": "situational",
      "emoji": "🧪",
      "question": "A molecular researcher isolates the cellular compartment where transcription happens and stains chromosomes inside it.",
      "prompt": "What organelle is this?",
      "term": "Nucleus"
    }
  ]
}
\`\`\`

Here are my lecture notes to convert:
[PASTE YOUR LECTURE NOTES OR PDF TEXT HERE]`;

export const ImportDeckModal: React.FC<ImportDeckModalProps> = ({
  isOpen,
  onClose,
  onImportDeck,
  currentDeck,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'import' | 'prompt' | 'export'>('import');
  const [jsonText, setJsonText] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedExport, setCopiedExport] = useState(false);

  if (!isOpen) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(AI_PROMPT_TEMPLATE);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyExport = () => {
    navigator.clipboard.writeText(JSON.stringify(currentDeck, null, 2));
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  const handleDownloadExport = () => {
    const blob = new Blob([JSON.stringify(currentDeck, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentDeck.id || 'deck'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setJsonText(content);
      setErrorMsg(null);
    };
    reader.readAsText(file);
  };

  const validateAndImport = () => {
    setErrorMsg(null);
    if (!jsonText.trim()) {
      setErrorMsg('Please paste JSON text or upload a .json file.');
      return;
    }

    try {
      // Strip markdown code fences if user pasted ```json ... ```
      let cleaned = jsonText.trim();
      if (cleaned.startsWith('```json')) {
        cleaned = cleaned.slice(7);
      } else if (cleaned.startsWith('```')) {
        cleaned = cleaned.slice(3);
      }
      if (cleaned.endsWith('```')) {
        cleaned = cleaned.slice(0, -3);
      }
      cleaned = cleaned.trim();

      const parsed = JSON.parse(cleaned);

      // Handle single Deck or Array of Decks
      const deck: Deck = Array.isArray(parsed) ? parsed[0] : parsed;

      if (!deck.title || !Array.isArray(deck.cards) || deck.cards.length === 0) {
        throw new Error('Invalid schema: Missing "title" or "cards" array with at least 1 card.');
      }

      // Sanitize cards
      const validatedCards: Flashcard[] = deck.cards.map((c, index) => {
        if (!c.question || !c.term) {
          throw new Error(`Card #${index + 1} is missing a required "question" or "term" field.`);
        }
        return {
          id: c.id || index + 1,
          category: c.category || 'GENERAL',
          cardType: c.cardType || 'definition',
          emoji: c.emoji || '💡',
          question: c.question,
          subtext: c.subtext,
          prompt: c.prompt || 'What is it?',
          term: c.term,
          subtitle: c.subtitle,
        };
      });

      const validatedDeck: Deck = {
        id: deck.id || `custom-${Date.now()}`,
        title: deck.title,
        badge: deck.badge || 'Custom',
        description: deck.description || 'Imported flashcard deck',
        icon: deck.icon || '🧬',
        cards: validatedCards,
      };

      onImportDeck(validatedDeck);
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid JSON format. Please check syntax.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/15 rounded-3xl p-5 sm:p-7 flex flex-col shadow-2xl max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <FileJson className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-bold text-white tracking-tight">
                JSON Deck Manager &amp; AI Prompt
              </h2>
              <p className="text-xs text-slate-400">
                Easily import, export, or generate custom decks for your friend
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

        {/* Tab Navigation */}
        <div className="flex gap-2 p-1 bg-black/40 rounded-xl mb-4 border border-white/10">
          <button
            onClick={() => setActiveTab('import')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === 'import'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Upload className="w-4 h-4" />
            Paste / Upload JSON
          </button>

          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === 'prompt'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            AI Prompt Template
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === 'export'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-4 h-4" />
            Export Deck
          </button>
        </div>

        {/* Tab 1: Import JSON */}
        {activeTab === 'import' && (
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Paste JSON data below or select a file:</span>
              <label className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer underline flex items-center gap-1">
                <Upload className="w-3.5 h-3.5" />
                Upload .json file
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <textarea
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              placeholder={`{\n  "title": "My Custom Subject",\n  "badge": "Topic 4",\n  "cards": [\n    {\n      "category": "KEY CONCEPT",\n      "cardType": "definition",\n      "question": "What is...",\n      "prompt": "What is it?",\n      "term": "Answer Name"\n    }\n  ]\n}`}
              className="w-full flex-1 min-h-[220px] font-mono text-xs p-3.5 bg-black/50 border border-white/15 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition resize-none"
            />

            {errorMsg && (
              <div className="bg-rose-500/15 border border-rose-500/30 rounded-xl p-3 flex items-start gap-2 text-rose-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex justify-between items-center gap-2 pt-2">
              <button
                onClick={onResetDefaults}
                className="px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-rose-400 transition cursor-pointer flex items-center gap-1.5"
                title="Restore original 3 lecture decks"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Default Decks
              </button>

              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={validateAndImport}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-lg shadow-emerald-900/30"
                >
                  Load &amp; Review Deck
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI Prompt Template */}
        {activeTab === 'prompt' && (
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
            <div className="flex justify-between items-center">
              <p className="text-xs text-slate-300">
                Copy this prompt and paste it with your lecture notes into ChatGPT, Gemini, or Claude:
              </p>
              <button
                onClick={handleCopyPrompt}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg transition cursor-pointer shrink-0"
              >
                {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedPrompt ? 'Copied!' : 'Copy Prompt'}
              </button>
            </div>

            <pre className="flex-1 p-3.5 bg-black/60 border border-white/10 rounded-xl font-mono text-[0.72rem] text-slate-300 overflow-y-auto whitespace-pre-wrap leading-relaxed select-all">
              {AI_PROMPT_TEMPLATE}
            </pre>
          </div>
        )}

        {/* Tab 3: Export Deck */}
        {activeTab === 'export' && (
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
            <div className="flex justify-between items-center text-xs text-slate-300">
              <span>Exporting active deck: <b>{currentDeck.title}</b> ({currentDeck.cards.length} cards)</span>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyExport}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg border border-white/10 transition cursor-pointer"
                >
                  {copiedExport ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedExport ? 'Copied JSON' : 'Copy JSON'}
                </button>
                <button
                  onClick={handleDownloadExport}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download .json
                </button>
              </div>
            </div>

            <pre className="flex-1 p-3.5 bg-black/60 border border-white/10 rounded-xl font-mono text-[0.72rem] text-slate-300 overflow-y-auto whitespace-pre-wrap leading-relaxed">
              {JSON.stringify(currentDeck, null, 2)}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};
