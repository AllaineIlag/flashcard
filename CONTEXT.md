# Flashcard Spaced Repetition Web App — Project Context

## 📌 Project Overview
A web-based spaced repetition flashcard reviewer built with **Next.js (App Router, TypeScript, Tailwind CSS)** for easy, 1-click deployment to **Vercel**. Designed for active recall, structured exam review, and interactive round loops.

---

## 📑 Tabbed Course Topics (84 Total Cards)

The app features a top **Tabbed Navigation Bar** allowing students to switch between topics seamlessly without clutter or cognitive overload:

### 🐾 Topic 1: Introduction to Zoology (32 Cards)
- **Etymology & Basics**: `Zoology (zoon + logos)`, `Zoology Definition`, `Characteristics of Animals`
- **Historical Development**: `Aristotle (Ancient Empiricism)`, `Middle Ages (Bestiaries)`, `Renaissance (Comparative Anatomy)`, `Carolus Linnaeus (Binomial Nomenclature)`, `Charles Darwin (Natural Selection)`, `Modern Age Zoology`
- **Structural Zoology**: `Morphology (External form)`, `Anatomy (Internal organs)`, `Histology (Tissues)`, `Cytology (Cells)`
- **Functional & Behavioral**: `Animal Physiology`, `Homeostasis`, `Embryology`, `Genetics`, `Ethology (Behavior)`, `Ecological Zoology`
- **Taxonomic Branches**: `Entomology (Insects)`, `Herpetology (Reptiles/Amphibians)`, `Ornithology (Birds)`, `Ichthyology (Fishes)`, `Helminthology (Parasitic worms)`
- **Medical, Agriculture & Conservation**: `Disease Vectors`, `Zoonotic Diseases`, `Animal Models`, `Biological Control`, `Endemic Species`, `Keystone Species`, `Flagship Species`, `Invasive Species`

---

### 🌿 Topic 2: Taxonomy, Phylogeny & Cladistics (26 Cards)
- **Taxonomy Foundations**: `Taxonomy Definition`, `Carolus Linnaeus`, `Binomial Nomenclature (Genus species)`, `Systema Naturae (10th Edition 1758)`
- **Taxonomic Hierarchy**: `Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species`, `The Three Domains of Life (Bacteria, Archaea, Eukarya)`
- **Evolutionary History**: `Phylogeny`, `Phylogenetic Tree (Nodes & Branch Points)`, `Charles Darwin's On the Origin of Species (1859)`
- **Cladistics & Character Analysis**: `Cladistic Analysis (Willi Hennig & Clades)`, `Phylogenetic Principle of Classification`, `Ancestral Traits (Plesiomorphy)`, `Derived Traits (Apomorphy)`, `Shared Derived Traits (Synapomorphies)`
- **Tree Reconstruction**: `Outgroup (Lamprey proxy)`, `Character Matrix (Presence + / Absence 0)`, `Vertebrate Trait Milestones (Jaws → Lungs → Gizzard → Fur/Feathers)`, `Unshared Derived Traits (Autapomorphies)`
- **Evidence & Applications**: `Molecular Sequence Evidence (DNA & Proteins)`, `Forensic DNA Applications`, `Pathogen Outbreak Origin Tracing`, `Phylogenetic Tree as a Hypothesis`

---

### 🔬 Topic 3: Cell Structure and Function (26 Cards)
- **Prokaryotes vs Eukaryotes**: `Prokaryotic Cells`, `Three Shapes of Bacteria (Bacillus, Coccus, Spirilla)`, `Domain Archaea (Halophiles, Thermophiles, Methanogens)`, `Eukaryotic Cells (Domain Eukarya)`
- **Plasma Membrane & Transport**: `Phospholipid Bilayer`, `Selectively Permeable Barrier`, `Intercellular Communication (Receptors)`, `Loss of Membrane Barrier & Homeostasis`
- **Cytoplasm & Matrix**: `Cytoplasm (Cytosol Matrix)`, `The Eukaryotic Animal Cell as Fundamental Unit`
- **The Genetic Core**: `Nucleus (Double Membrane & DNA Blueprint)`, `Nucleolus (rRNA & Ribosome Assembly)`, `Central Dogma (DNA → RNA → Protein)`
- **Energy & Powerhouse**: `Mitochondria (Aerobic Respiration: C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP)`
- **The Endomembrane System**: `Rough ER (Ribosome-studded, Protein folding & Glycoproteins)`, `Smooth ER (Lipids, Detoxification, Ca2+ Storage)`, `Golgi Apparatus (Flattened Saccules, Cis to Trans Face, Exocytosis)`, `Secretory Pathway Flow`
- **Digestive & Storage Vesicles**: `Lysosomes (Intracellular Acid Hydrolytic Digestion)`, `Peroxisomes (Fatty Acid Oxidation & Detox)`, `Vacuoles & Vesicles`
- **Non-Membrane Organelles & Cytoskeleton**: `Ribosomes (Polypeptide Assembly)`, `Centrioles (Cytoskeleton Anchor & Mitosis)`, `The Cytoskeleton (Shape, Organization, Movement)`, `Cilia, Flagella, and Microvilli`

---

## 🎯 Learning Mechanics
1. **Front Face (Clue First)**: Simple concept clue + follow-up recall prompt (`❓ Anong branch / organelle / term ito?`).
2. **Back Face (Flip)**: Terminology name, etymology, and key exam takeaway bullets.
3. **Left Pile (`Mastered`)**: Correct answers stay banked in mastery.
4. **Right Pile (`Needs Review`)**: Wrong answers queue for repeat testing.
5. **Round Loop**: Subsequent rounds repeat *only* the review cards until **100% Mastery** is achieved.
6. **Victory Modal**: Confetti celebration and retention statistics upon 100% mastery.

---

## 🚀 Vercel Deployment Guide
```bash
git add .
git commit -m "feat: complete tabbed flashcard app with 3 full Zoology decks (84 cards)"
git push origin main
```
Deploy instantly on [Vercel](https://vercel.com/new).
