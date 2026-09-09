# 🧠 Smart Flashcards — Spaced Repetition Reviewer

A modern, mobile-friendly **Next.js (App Router + TypeScript + Tailwind CSS)** flashcard web app built for active recall, spaced repetition, and college exam review.

---

## ✨ Key Features

- 🔄 **Active Recall Two-Sided Flow**:
  - **Front Face (First)**: Simple concept clue + follow-up question (e.g., *"Anong branch of science / term ito?"*).
  - **Back Face (Flip)**: Terminology name, origin/etymology, and key exam takeaways.
- 🗂️ **Spaced Repetition Sorting**:
  - **Left Pile (`Mastered`)**: Correct cards stay locked in mastery.
  - **Right Pile (`Needs Review`)**: Wrong cards are banked for repeat review.
  - **Round Loop Cycle**: Subsequent rounds repeat *only* the wrong cards until **100% Mastery** is achieved.
- 🎉 **Victory Celebration**: Multi-burst particle confetti when you achieve 100% retention.
- 📚 **Multi-Deck Support**:
  - **Topic 1**: Introduction to Zoology (32 comprehensive cards from lecture slides)
  - **Topic 2 & 3**: Ready-to-use slots for subsequent lecture decks
- 🎧 **Offline Audio Feedback**: Synthesizes pleasant sounds using Web Audio API (zero external asset requests).
- 📱 **Full Keyboard & Gesture Controls**:
  - `Space` = Flip card
  - `←` or `A` = Got it (Correct)
  - `→` or `D` = Study Again (Wrong)
  - Drag / Touch swipe left & right

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser:
http://localhost:3000
```

---

## 🌐 Deploy to Vercel (1-Click Sharing)

1. Push your project to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Next.js flashcard app with Zoology deck"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will give you a live HTTPS link (e.g. `https://your-flashcard-app.vercel.app`) that you can instantly share with your friend!

---

## 📖 Project Context
For complete architectural details, study mechanics, and topic schemas, see [`CONTEXT.md`](./CONTEXT.md).
