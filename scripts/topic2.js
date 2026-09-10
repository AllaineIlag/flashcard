module.exports = {
  id: 'zoology-2',
  title: 'Taxonomy, Phylogeny & Cladistics',
  badge: 'Topic 2',
  description: 'Linnaean hierarchy, binomial nomenclature, phylogenetic trees, ancestral vs derived traits, and cladistic analysis.',
  icon: '🌿',
  cards: [
    {
      id: 1,
      category: 'TAXONOMY BASICS',
      cardType: 'definition',
      emoji: '🏷️',
      question: 'What is the scientific discipline dedicated to identifying, naming, and classifying living organisms into hierarchical groups?',
      prompt: 'What fundamental branch of biology is this?',
      term: 'Taxonomy',
      subtitle: 'Identification, Naming, & Classification of Species'
    },
    {
      id: 2,
      category: 'TAXONOMY BASICS',
      cardType: 'analogy',
      emoji: '📚',
      question: 'Imagine organizing a massive library containing millions of books by giving each book a barcode, author tag, shelf category, and aisle number so anyone worldwide can find it.',
      prompt: 'What scientific organizing discipline is this?',
      term: 'Taxonomy',
      subtitle: 'Universal Biological Cataloging'
    },
    {
      id: 3,
      category: 'TAXONOMY BASICS',
      cardType: 'situational',
      emoji: '🌿',
      question: 'A field biologist collects an unnamed flowering orchid in the mountains, documents its floral anatomy, assigns it a formal Latin name, and logs it in the global registry.',
      prompt: 'What scientific discipline is the biologist performing?',
      term: 'Taxonomy',
      subtitle: 'Species Discovery and Classification'
    },
    {
      id: 4,
      category: 'TAXONOMY BASICS',
      cardType: 'history',
      emoji: '👨‍🔬',
      question: 'Who was the 18th-century Swedish botanist and physician recognized as the \"Father of Modern Taxonomy\" for establishing binomial nomenclature and nested hierarchies?',
      prompt: 'Which historic Swedish scientist is this?',
      term: 'Carolus Linnaeus (1707–1778)',
      subtitle: 'Father of Modern Taxonomy'
    },
    {
      id: 5,
      category: 'BINOMIAL NOMENCLATURE',
      cardType: 'definition',
      emoji: '✍️',
      question: 'What is the formal two-part Latin scientific naming system for living organisms consisting of the Genus name (capitalized) and the specific epithet (lowercase)?',
      prompt: 'What universal biological naming system is this?',
      term: 'Binomial Nomenclature',
      subtitle: 'Two-Part Scientific Naming (Genus + species)'
    },
    {
      id: 6,
      category: 'BINOMIAL NOMENCLATURE',
      cardType: 'analogy',
      emoji: '📛',
      question: 'Think of it as a formal First Name (Genus) and Last Name (species) written in universal Latin, so a lion is known as *Panthera leo* by scientists in America, Japan, and the Philippines alike.',
      prompt: 'What naming convention is this?',
      term: 'Binomial Nomenclature',
      subtitle: 'Universal Two-Word Scientific Names'
    },
    {
      id: 7,
      category: 'BINOMIAL NOMENCLATURE',
      cardType: 'concept',
      emoji: '📝',
      question: 'How must scientific binomial names always be formatted when printed/typed versus when written by hand?',
      subtext: 'Printed: Italicized (e.g. *Homo sapiens*); Handwritten: Underlined (e.g. Homo sapiens)',
      prompt: 'What are the formal formatting rules for scientific names?',
      term: 'Italicized (Typed) / Underlined (Handwritten)',
      subtitle: 'Binomial Formatting Rules'
    },
    {
      id: 8,
      category: 'HISTORICAL MILESTONES',
      cardType: 'history',
      emoji: '📖',
      question: 'What landmark publication by Carolus Linnaeus (10th Edition, published in 1758) is officially recognized as the universal starting point for modern zoological nomenclature?',
      prompt: 'What historic book established formal zoological naming?',
      term: 'Systema Naturae (1758, 10th Edition)',
      subtitle: 'Official Starting Point of Modern Zoological Nomenclature'
    },
    {
      id: 9,
      category: 'TAXONOMIC HIERARCHY',
      cardType: 'structure',
      emoji: '🪜',
      question: 'What are the 8 standard taxonomic ranks in order from the broadest, most inclusive level down to the most specific single-species rank?',
      subtext: 'Domain ➔ Kingdom ➔ Phylum ➔ Class ➔ Order ➔ Family ➔ Genus ➔ Species',
      prompt: 'What are the 8 nested ranks of the Linnaean hierarchy?',
      term: '8-Rank Taxonomic Hierarchy',
      subtitle: 'Domain • Kingdom • Phylum • Class • Order • Family • Genus • Species'
    },
    {
      id: 10,
      category: 'TAXONOMIC HIERARCHY',
      cardType: 'analogy',
      emoji: '📫',
      question: 'Imagine a postal mailing address zooming in from Country (Domain) ➔ State (Kingdom) ➔ City (Phylum) ➔ District (Class) ➔ Neighborhood (Order) ➔ Street (Family) ➔ Building (Genus) ➔ Unit Number (Species).',
      prompt: 'What biological organizing framework works like this address system?',
      term: 'Linnaean Taxonomic Hierarchy',
      subtitle: 'Nested Classification Ranks'
    },
    {
      id: 11,
      category: 'TAXONOMIC RANKS',
      cardType: 'definition',
      emoji: '👑',
      question: 'What is the highest, broadest, and most inclusive category in modern biological classification, positioned above Kingdom?',
      prompt: 'What is the top-level taxonomic rank?',
      term: 'Domain',
      subtitle: 'Broadest Taxonomic Rank (Bacteria, Archaea, Eukarya)'
    },
    {
      id: 12,
      category: 'THREE DOMAINS',
      cardType: 'definition',
      emoji: '🧬',
      question: 'What are the 3 major evolutionary domains of cellular life proposed by Carl Woese based on ribosomal RNA (rRNA) sequence analysis?',
      subtext: 'Domain Bacteria, Domain Archaea, Domain Eukarya',
      prompt: 'What are the Three Domains of Life?',
      term: 'Bacteria • Archaea • Eukarya',
      subtitle: 'The Three-Domain Classification System'
    },
    {
      id: 13,
      category: 'TAXONOMIC RANKS',
      cardType: 'definition',
      emoji: '🎯',
      question: 'What is the fundamental, most specific rank of taxonomy, defined as a group of organisms that can interbreed in nature and produce viable, fertile offspring?',
      prompt: 'What is the basic biological unit of classification?',
      term: 'Species',
      subtitle: 'Fundamental Unit of Biological Classification'
    },
    {
      id: 14,
      category: 'PHYLOGENY',
      cardType: 'definition',
      emoji: '🌳',
      question: 'What is the scientific study of the evolutionary history and genealogical relationships among individuals, populations, or species?',
      prompt: 'What field of evolutionary biology is this?',
      term: 'Phylogeny',
      subtitle: 'Evolutionary History and Lineage Relationships'
    },
    {
      id: 15,
      category: 'PHYLOGENY',
      cardType: 'analogy',
      emoji: '📜',
      question: 'Think of an extensive genealogical family tree that maps out your ancestral roots, grandparents, uncles, and distant cousins over millions of years of history.',
      prompt: 'What evolutionary lineage chart is this?',
      term: 'Phylogenetic Tree (Tree of Life)',
      subtitle: 'Evolutionary Genealogy'
    },
    {
      id: 16,
      category: 'TREE ANATOMY',
      cardType: 'structure',
      emoji: '🌱',
      question: 'In a phylogenetic tree diagram, what do we call the baseline lineage at the base of the diagram that represents the ancestral lineage common to all taxa shown?',
      prompt: 'What is the base of a phylogenetic tree called?',
      term: 'Root (Rooted Ancestor)',
      subtitle: 'Common Ancestral Lineage of the Tree'
    },
    {
      id: 17,
      category: 'TREE ANATOMY',
      cardType: 'structure',
      emoji: '🔀',
      question: 'In a phylogenetic tree, what does a branch point or node represent where a single lineage divides into two separate evolutionary paths?',
      prompt: 'What evolutionary event does a node signify?',
      term: 'Node (Branch Point / MRCA)',
      subtitle: 'Most Recent Common Ancestor and Lineage Split'
    },
    {
      id: 18,
      category: 'TREE ANATOMY',
      cardType: 'structure',
      emoji: '👯',
      question: 'What term describes two biological lineages or species that share an immediate common ancestor with each other that is not shared by any other group?',
      prompt: 'What are these closely related evolutionary pairs called?',
      term: 'Sister Taxa',
      subtitle: 'Closest Evolutionary Relatives'
    },
    {
      id: 19,
      category: 'TREE ANATOMY',
      cardType: 'structure',
      emoji: '🔱',
      question: 'In a phylogenetic tree, what is a branch point from which more than two descendant groups emerge simultaneously, indicating an unresolved evolutionary relationship?',
      prompt: 'What is this multi-branching unresolved point called?',
      term: 'Polytomy',
      subtitle: 'Unresolved Multi-Lineage Evolutionary Split'
    },
    {
      id: 20,
      category: 'TREE ANATOMY',
      cardType: 'structure',
      emoji: '🐟',
      question: 'What do we call a reference species or group that is known to have diverged before the lineage containing the species being studied, used as a baseline to determine ancestral traits?',
      prompt: 'What reference lineage is used as a baseline in cladistics?',
      term: 'Outgroup (e.g. Lamprey)',
      subtitle: 'Evolutionary Baseline Reference Taxon'
    },
    {
      id: 21,
      category: 'CLADISTICS',
      cardType: 'definition',
      emoji: '📐',
      question: 'What biological classification methodology, developed by Willi Hennig, reconstructs evolutionary trees strictly based on shared derived characteristics (synapomorphies)?',
      prompt: 'What phylogenetic classification system is this?',
      term: 'Cladistics (Cladistic Analysis)',
      subtitle: 'Phylogenetic Systematics Pioneered by Willi Hennig'
    },
    {
      id: 22,
      category: 'CLADISTICS',
      cardType: 'definition',
      emoji: '⭕',
      question: 'What term describes a valid evolutionary group (clade) that consists of an ancestral species and ALL of its evolutionary descendants without omitting any branch?',
      prompt: 'What is a complete single-ancestor clade called?',
      term: 'Monophyletic Group (Clade)',
      subtitle: 'Ancestor and ALL Descendants (Valid Clade)'
    },
    {
      id: 23,
      category: 'CLADISTICS',
      cardType: 'analogy',
      emoji: '✂️',
      question: 'Imagine taking scissors and snipping off a single branch from a tree. If every single twig, leaf, and sprout attached to that branch falls with it, you have cut a complete unit.',
      prompt: 'What type of evolutionary group is this?',
      term: 'Monophyletic Group (Clade)',
      subtitle: 'One Cut = Complete Evolutionary Clade'
    },
    {
      id: 24,
      category: 'CLADISTICS',
      cardType: 'definition',
      emoji: '✂️',
      question: 'What term describes an incomplete evolutionary group that consists of a common ancestor and SOME, but not all, of its descendants (e.g. Class Reptilia excluding birds)?',
      prompt: 'What is an incomplete evolutionary grouping called?',
      term: 'Paraphyletic Group',
      subtitle: 'Ancestor and SOME Descendants'
    },
    {
      id: 25,
      category: 'CLADISTICS',
      cardType: 'definition',
      emoji: '🧩',
      question: 'What term describes an unnatural group containing distantly related species derived from different lineages that does NOT include their most recent common ancestor?',
      prompt: 'What invalid multi-origin grouping is this?',
      term: 'Polyphyletic Group',
      subtitle: 'Species Grouped Without Their Common Ancestor'
    },
    {
      id: 26,
      category: 'TRAIT STATES',
      cardType: 'definition',
      emoji: '🏛️',
      question: 'What is the formal cladistic term for an ancestral character state that was present in the common ancestor and retained unchanged in descendant lineages?',
      prompt: 'What is an ancestral trait called in cladistics?',
      term: 'Plesiomorphy (Ancestral Trait)',
      subtitle: 'Primitive / Ancestral Character State'
    },
    {
      id: 27,
      category: 'TRAIT STATES',
      cardType: 'definition',
      emoji: '✨',
      question: 'What is the formal cladistic term for a novel, newly evolved derived character state that differs from the ancestral condition?',
      prompt: 'What is a derived / novel evolutionary trait called?',
      term: 'Apomorphy (Derived Trait)',
      subtitle: 'Novel / Evolved Character State'
    },
    {
      id: 28,
      category: 'TRAIT STATES',
      cardType: 'definition',
      emoji: '🤝',
      question: 'What term describes a shared derived character present in an ancestor and shared by two or more descendant taxa, used as the primary evidence to define monophyletic clades?',
      prompt: 'What are shared derived characters called in cladistics?',
      term: 'Synapomorphy',
      subtitle: 'Shared Derived Character (Defines Clades)'
    },
    {
      id: 29,
      category: 'TRAIT STATES',
      cardType: 'definition',
      emoji: '🦚',
      question: 'What term describes a unique derived character state that belongs exclusively to a single terminal branch or individual species (e.g. feathers exclusive to birds)?',
      prompt: 'What is a unique derived trait called?',
      term: 'Autapomorphy',
      subtitle: 'Unique Derived Character in a Single Lineage'
    },
    {
      id: 30,
      category: 'TREE RECONSTRUCTION',
      cardType: 'structure',
      emoji: '📊',
      question: 'What grid of numbers (0 = ancestral state, 1 = derived state) is created by evolutionary biologists to systematically compare anatomical or genetic traits when building trees?',
      prompt: 'What trait comparison table is this?',
      term: 'Character Matrix',
      subtitle: 'Binary Data Table for Cladistic Analysis'
    },
    {
      id: 31,
      category: 'APPLIED PHYLOGENY',
      cardType: 'situational',
      emoji: '🕵️‍♂️',
      question: 'Forensic geneticists sequence DNA from confiscated ivory tusks to build a phylogenetic tree that pinpoints the exact national park where illegal elephant poaching occurred.',
      prompt: 'What applied branch of evolutionary biology is this?',
      term: 'Forensic Phylogenetics',
      subtitle: 'DNA Lineage Tracing for Law Enforcement'
    },
    {
      id: 32,
      category: 'APPLIED PHYLOGENY',
      cardType: 'situational',
      emoji: '🦠',
      question: 'Epidemiologists sequence viral genomes from patients across hospitals and construct a phylogenetic tree to trace the exact patient-zero origin and spread of a flu outbreak.',
      prompt: 'What applied phylogenetic technique is this?',
      term: 'Pathogen Outbreak Tracing',
      subtitle: 'Molecular Epidemiology and Virus Tracking'
    }
  ]
};
