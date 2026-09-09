# Flashcard Spaced Repetition Web App — Project Context

## 📌 Project Overview
A web-based spaced repetition flashcard reviewer designed for college students and reviewers. The app allows students to review complex course topics through active recall, simple explanations, and iterative round cycles.

The project is built with **Next.js (App Router, TypeScript, Tailwind CSS)** for easy, 1-click deployment to **Vercel** and seamless sharing via web link.

---

## 🎯 Learning & Card Mechanics

### 1. Active Recall Two-Sided Structure
- **Front Face (Shown FIRST)**:
  - **Concept / Scenario Clue**: Simple, easy-to-understand explanation of the concept.
  - **Follow-up Question**: A direct prompt (e.g., *"❓ Anong branch of science / term ito?"*) asking the reviewer to recall the exact term before flipping.
- **Back Face (Shown on FLIP)**:
  - **Terminology Name**: Large, bold term (e.g., `Morphology`, `Aristotle`, `Histology`).
  - **Subtitle / Etymology**: Origin breakdown (e.g., `zoon + logos`).
  - **Key Takeaway**: Bulleted core facts to remember for exams.

### 2. Spaced Repetition Sorting Piles
- **Left Pile (Mastered)**:
  - Triggered by clicking **Got it (Correct)**, pressing `←` (or `A`), or swiping **Left**.
  - Correct cards stay banked in the Mastered pile for the rest of the session.
- **Right Pile (Needs Review)**:
  - Triggered by clicking **Study Again (Wrong)**, pressing `→` (or `D`), or swiping **Right**.
  - Wrong cards are placed into the Review pile.

### 3. Iterative Round Loop
- Once all cards in a round are tested:
  - If any cards remain in the Review pile, **Round 2** begins automatically with *only the wrong cards*.
  - The cycle repeats (Round 3, Round 4, etc.) until **100% Mastery** is achieved.
- Upon 100% mastery, a **Victory Celebration** with confetti and retention stats is triggered.

---

## 📚 Subject Decks

### Topic 1: Introduction to Zoology (32 Cards)
- **Etymology & Basics**: `Zoology (zoon + logos)`, `Zoology Definition`, `Characteristics of Animals`
- **Historical Development**: `Aristotle (Ancient Empiricism)`, `Middle Ages (Bestiaries)`, `Renaissance (Comparative Anatomy)`, `Carl Linnaeus (Binomial Nomenclature)`, `Charles Darwin (Natural Selection)`, `Modern Age Zoology`
- **Structural Zoology**: `Morphology (External form)`, `Anatomy (Internal organs)`, `Histology (Tissues)`, `Cytology (Cells)`
- **Functional & Behavioral**: `Animal Physiology`, `Homeostasis`, `Embryology`, `Genetics`, `Ethology (Behavior)`, `Ecological Zoology`
- **Taxonomic Branches**: `Entomology (Insects)`, `Herpetology (Reptiles/Amphibians)`, `Ornithology (Birds)`, `Ichthyology (Fishes)`, `Helminthology (Parasitic worms)`
- **Medical, Agriculture & Conservation**: `Disease Vectors`, `Zoonotic Diseases`, `Animal Models`, `Biological Control`, `Endemic Species`, `Keystone Species`, `Flagship Species`, `Invasive Species`

*(Topics 2 and 3 can be added by inserting new deck objects into `app/data/topics.ts`)*

---

## 🛠️ Technology Stack
- **Framework**: [Next.js 14/15](https://nextjs.org/) (App Router, React, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark palette & 3D CSS transforms
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Feedback**: Web Audio API (Offline procedural tone synthesizer)
- **Celebration FX**: `canvas-confetti`
- **Deployment Platform**: [Vercel](https://vercel.com/) (Zero-configuration hosting)

---

## 🚀 How to Run Locally & Deploy to Vercel

### Local Development:
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open browser at:
http://localhost:3000
```

### Vercel Deployment (1-Click):
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Spaced Repetition Flashcard App"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/flashcard-app.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/new) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings (Framework: **Next.js**) and click **"Deploy"**.
5. Vercel will give you a live shareable URL (e.g., `https://flashcard-app.vercel.app`) to send to your friend!
