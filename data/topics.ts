import { Deck } from '@/types/flashcard';

export const TOPICS: Deck[] = [
  // =========================================================================
  // TOPIC 1: INTRODUCTION TO ZOOLOGY
  // =========================================================================
  {
    id: 'zoology-1',
    title: 'Introduction to Zoology',
    badge: 'Topic 1',
    description: 'Etymology, history, characteristics of Kingdom Animalia, structural & functional branches, and conservation.',
    icon: '🐾',
    cards: [
      {
        id: 1,
        category: 'ETYMOLOGY & BASICS',
        emoji: '🐾',
        situational: 'A student looks up why the zoo where animals live and the science subject they study share the same root words from ancient Greece.',
        mainQuestion: 'Where does the word Zoology come from?',
        prompt: 'What are the two Greek root words that form the name of this science?',
        term: 'Zoology (Etymology)',
        subtitle: 'Greek: zoon (animal) + logos (to study)',
        studies: [
          'Zoon = Animal',
          'Logos = To study / discourse',
          'Literal meaning: The study of animals'
        ],
        takeaway: 'Zoology literally translates to "the study of animals" and forms a major core branch of biological science.'
      },
      {
        id: 2,
        category: 'DEFINITIONS',
        emoji: '🔬',
        situational: 'A university researcher investigates the life cycles, genetic makeup, bodily structures, and behaviors of living animal species across the globe.',
        mainQuestion: 'What is the scientific discipline dedicated to Kingdom Animalia?',
        prompt: 'What major branch of biology is concerned with the study of animals?',
        term: 'Zoology',
        subtitle: 'The Branch of Biology Concerned with Animals',
        studies: [
          'Animal diversity and behavior',
          'Anatomy and bodily functions',
          'Evolutionary history and habitats'
        ],
        takeaway: 'Zoology encompasses all scientific inquiry into animal life, from single-celled protozoa to complex mammals.'
      },
      {
        id: 3,
        category: 'KINGDOM ANIMALIA',
        emoji: '🧬',
        situational: 'A lab technician analyzes a newly discovered organism and observes that it is made of many cells with true nuclei, eats other organisms for food, and can move around.',
        mainQuestion: 'What fundamental traits define an animal?',
        prompt: 'What are the universal characteristics shared by members of Kingdom Animalia?',
        term: 'Characteristics of Animals',
        subtitle: 'Multicellular, Eukaryotic, Heterotrophic, Motile',
        studies: [
          'Multicellular (composed of many cells)',
          'Eukaryotic (has true nucleus)',
          'Heterotrophic (feeds on others)',
          'Motile (capable of movement)',
          'Differentiated tissues'
        ],
        takeaway: 'Animals are multicellular eukaryotic heterotrophs that move and possess specialized organized tissues.'
      },
      {
        id: 4,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🏛️',
        situational: 'In ancient Greece, a philosopher groups animals into categories based on whether they live in water or land, how they give birth, and whether they have red blood.',
        mainQuestion: 'Who was the first early thinker to systematically classify animals using empiricism?',
        prompt: 'Which ancient Greek philosopher is known as an early pioneer of zoological observation?',
        term: 'Aristotle (Ancient Period)',
        subtitle: 'Early Empiricism & Animal Classification',
        studies: [
          'Classified by habitat (aquatic vs terrestrial)',
          'Classified by mode of reproduction',
          'Classified by presence or absence of red blood'
        ],
        takeaway: 'Aristotle used empirical observation to create the first documented systematic classification of animal species.'
      },
      {
        id: 5,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '📜',
        situational: 'During this era, scholars relied on religious authority rather than dissection, and animals were recorded in illustrated books filled with moral and symbolic stories.',
        mainQuestion: 'How was zoological knowledge recorded before modern experimental science?',
        prompt: 'What historical period relied on symbolic "bestiaries" and religious authority?',
        term: 'Middle Ages (Bestiaries & Authority)',
        subtitle: 'Authority-Based Knowledge & Symbolic Animals',
        studies: [
          'Knowledge based on authority, not experimentation',
          'Animals described in symbolic bestiaries',
          'Limited anatomical study due to religious bans'
        ],
        takeaway: 'In the Middle Ages, animal study was guided by traditional texts and moral symbolism rather than anatomical dissection.'
      },
      {
        id: 6,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🎨',
        situational: 'Medical scholars and artists begin performing systematic dissections and publish highly detailed anatomical drawings comparing different species.',
        mainQuestion: 'When did dissection become scientifically acceptable?',
        prompt: 'Which historical era led to the development of Comparative Anatomy?',
        term: 'Renaissance Period',
        subtitle: 'Rise of Dissection & Comparative Anatomy',
        studies: [
          'Dissection becomes scientifically acceptable',
          'Use of illustrated anatomical texts',
          'Comparison of body structures across species'
        ],
        takeaway: 'The Renaissance revived direct empirical observation and established comparative anatomy through detailed dissection.'
      },
      {
        id: 7,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🏷️',
        situational: 'A naturalist creates a standardized two-word Latin naming method (Genus species) to replace chaotic paragraph-long descriptions of species.',
        mainQuestion: 'Who developed the formal binomial system used today?',
        prompt: 'Which 18th-century scientist established binomial nomenclature and taxonomic hierarchy?',
        term: 'Carolus Linnaeus (18th Century)',
        subtitle: 'Father of Modern Taxonomy & Systematics',
        studies: [
          'Binomial nomenclature (Genus species)',
          'Hierarchical classification (Kingdom to Species)',
          'Published landmark catalog Systema Naturae'
        ],
        takeaway: 'Linnaeus created the universal two-part Latin naming system and hierarchical classification structure still in use today.'
      },
      {
        id: 8,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🧭',
        situational: 'A naturalist observes finches on the Galapagos Islands and explains how advantageous inherited traits help species survive and reproduce over generations.',
        mainQuestion: 'How do animal populations adapt to changing environments?',
        prompt: 'Which 19th-century scientist proposed the Theory of Evolution by Natural Selection?',
        term: 'Charles Darwin (19th Century)',
        subtitle: 'Evolution by Natural Selection',
        studies: [
          'Natural selection explains adaptation',
          'Beneficial traits become more common over time',
          'Descent with modification from common ancestors'
        ],
        takeaway: 'Darwin established natural selection as the driving mechanism for animal diversity and biological adaptation.'
      },
      {
        id: 9,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '💻',
        situational: 'Modern biologists use DNA sequencers, computational algorithms (bioinformatics), and high-resolution imaging to test evolutionary hypotheses.',
        mainQuestion: 'What characterizes contemporary zoological research?',
        prompt: 'What modern approach shifted zoology from descriptive notes to experimental data?',
        term: 'Modern Age Zoology',
        subtitle: 'Hypothesis-Driven, Molecular & Bioinformatics',
        studies: [
          'Integration of molecular genetics',
          'Bioinformatics and computational modeling',
          'Shift from descriptive to hypothesis-driven science'
        ],
        takeaway: 'Modern zoology uses molecular genetics, DNA sequencing, and computer bioinformatics to study animal biology.'
      },
      {
        id: 10,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '📐',
        situational: 'A biologist examines the external shape, wing patterns, horn size, and body coloration of different beetle species.',
        mainQuestion: 'What subfield studies outward form and external features?',
        prompt: 'What branch of structural zoology investigates the external form and structure of organisms?',
        term: 'Morphology',
        subtitle: 'Study of Form & External Structure',
        studies: [
          'External body shapes and dimensions',
          'Structural adaptations and patterns',
          'Coloration and physical form features'
        ],
        takeaway: 'Morphology focuses on the outward physical form and external structural features of organisms.'
      },
      {
        id: 11,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '🫀',
        situational: 'A veterinary student dissects a frog in the laboratory to inspect the location and connections of the heart, lungs, stomach, and kidneys.',
        mainQuestion: 'What subfield studies internal organs and body architecture?',
        prompt: 'What branch of structural zoology focuses on the internal structure of animals?',
        term: 'Anatomy',
        subtitle: 'Study of Internal Structure & Organs',
        studies: [
          'Internal organ systems and organization',
          'Dissection and spatial relationships',
          'Comparative internal structures'
        ],
        takeaway: 'Anatomy investigates the internal physical structure and spatial arrangement of animal organs and organ systems.'
      },
      {
        id: 12,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '🔬',
        situational: 'A pathologist prepares a microscopic thin slice of muscle and epithelial layers to examine how cells are grouped together to perform specific functions.',
        mainQuestion: 'What subfield studies biological tissues under a microscope?',
        prompt: 'What branch of structural zoology is the microscopic study of animal tissues?',
        term: 'Histology',
        subtitle: 'Microscopic Anatomy of Cells & Tissues',
        studies: [
          'Tissue architecture (epithelial, connective, muscle, nervous)',
          'Microscopic cell groupings and matrix',
          'Tissue-level pathology and diagnostics'
        ],
        takeaway: 'Histology is the microscopic examination of animal cells and tissues to understand their organization and function.'
      },
      {
        id: 13,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '🧫',
        situational: 'A cell biologist studies how mitochondria, nuclei, and plasma membranes work inside a single animal cell under an electron microscope.',
        mainQuestion: 'What subfield focuses on the structure and function of individual cells?',
        prompt: 'What branch of structural zoology is the study of cell structure and its functions?',
        term: 'Cytology (Cell Biology)',
        subtitle: 'Study of Cell Structure & Functions',
        studies: [
          'Cell organelle structure and mechanics',
          'Cellular division and growth',
          'Membrane transport and signaling'
        ],
        takeaway: 'Cytology investigates the fundamental unit of life: the individual cell and its internal microscopic organelles.'
      },
      {
        id: 14,
        category: 'FUNCTIONAL ZOOLOGY',
        emoji: '⚡',
        situational: 'A researcher measures how blood pressure, oxygen transport, nerve impulses, and muscle contractions operate during animal movement.',
        mainQuestion: 'How do bodily structures function together to sustain life?',
        prompt: 'What subfield of zoology examines the mechanical, physical, and biochemical processes of living organisms?',
        term: 'Animal Physiology',
        subtitle: 'Study of Bodily Functions & Processes',
        studies: [
          'Theme of "structure to function"',
          'Mechanical and biochemical body processes',
          'Organ system coordination and energy utilization'
        ],
        takeaway: 'Physiology examines how bodily parts and biochemical systems function as a whole to keep animals alive.'
      },
      {
        id: 15,
        category: 'PHYSIOLOGY CONCEPTS',
        emoji: '⚖️',
        situational: 'A camel in the desert and a seal in freezing waters maintain a steady internal body temperature and fluid balance despite drastic weather changes.',
        mainQuestion: 'How do organisms keep their internal conditions stable?',
        prompt: 'What is the biological ability of an organism to maintain internal balance despite environmental changes?',
        term: 'Homeostasis',
        subtitle: 'Maintenance of Internal Equilibrium',
        studies: [
          'Thermoregulation (temperature balance)',
          'Osmoregulation (fluid & electrolyte balance)',
          'Negative feedback control systems'
        ],
        takeaway: 'Homeostasis is the active regulation of internal physical and chemical variables to maintain optimal living conditions.'
      },
      {
        id: 16,
        category: 'DEVELOPMENTAL ZOOLOGY',
        emoji: '🥚',
        situational: 'A scientist tracks the transformation of a fertilized chicken egg into a blastula, then an embryo, and finally a fully formed chick ready to hatch.',
        mainQuestion: 'How do organisms develop from fertilization to birth?',
        prompt: 'What subfield of developmental zoology studies egg fertilization, embryos, and fetuses?',
        term: 'Embryology',
        subtitle: 'Study of Embryonic & Fetal Development',
        studies: [
          'Fertilization and cleavage',
          'Germ layer and tissue differentiation',
          'Morphogenesis and fetal organ formation'
        ],
        takeaway: 'Embryology investigates the early developmental stages of organisms from single-celled zygote to fetus.'
      },
      {
        id: 17,
        category: 'DEVELOPMENTAL ZOOLOGY',
        emoji: '🧬',
        situational: 'A dog breeder tracks how coat color, eye color, and hip health are passed down from parent dogs to their puppies through chromosomes and DNA.',
        mainQuestion: 'How are biological traits passed across generations?',
        prompt: 'What branch of zoology and biology studies heredity and genetic variations in organisms?',
        term: 'Genetics',
        subtitle: 'Study of Heredity & Variations',
        studies: [
          'Gene inheritance patterns',
          'DNA mutations and variations',
          'Molecular and population genetics'
        ],
        takeaway: 'Genetics examines the transmission of hereditary traits and variations from parents to offspring.'
      },
      {
        id: 18,
        category: 'BEHAVIORAL ZOOLOGY',
        emoji: '🦅',
        situational: 'A wildlife biologist sets up camouflaged cameras to record mating dances, territory marking, and hunting techniques of wolves in the wild.',
        mainQuestion: 'Why do animals behave the way they do in nature?',
        prompt: 'What is the scientific and objective study of animal behavior under natural conditions?',
        term: 'Ethology',
        subtitle: 'Scientific Study of Animal Behavior',
        studies: [
          'Instinctive and learned behaviors',
          'Behavioral ecology (causes & evolution of behavior)',
          'Animal cognition and communication'
        ],
        takeaway: 'Ethology investigates animal behavior in natural environments and interprets it through evolutionary adaptation.'
      },
      {
        id: 19,
        category: 'ECOLOGICAL ZOOLOGY',
        emoji: '🌿',
        situational: 'A scientist studies how a population of deer affects vegetation and how environmental changes affect the deer.',
        mainQuestion: 'How does the animal interact with its environment?',
        prompt: 'What branch of zoology examines the relationships between animals and their surrounding environments?',
        term: 'Ecological Zoology (Animal Ecology)',
        subtitle: 'Animal-Environment Interactions & Energy Flow',
        studies: [
          'Adaptation and habitat interactions',
          'Population dynamics and community structure',
          'Food webs and energy flow'
        ],
        takeaway: 'Ecological Zoology studies how animal species interact with, adapt to, and influence their habitats and neighboring species.'
      },
      {
        id: 20,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🐜',
        situational: 'An agricultural researcher identifies a new species of beetle and examines its antenna structure, metamorphosis cycle, and pollination habits.',
        mainQuestion: 'What specialized field deals exclusively with insects?',
        prompt: 'What branch of systematic zoology is dedicated to the study of insects?',
        term: 'Entomology',
        subtitle: 'Study of Insects',
        studies: [
          'Insect anatomy and metamorphosis',
          'Pest control and pollination biology',
          'Diversity of six-legged hexapods'
        ],
        takeaway: 'Entomology is the scientific study of insects, the most diverse class of animals on Earth.'
      },
      {
        id: 21,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🐍',
        situational: 'A field zoologist collects data on venomous pit vipers and tree frogs living in a tropical rainforest.',
        mainQuestion: 'What branch studies both reptiles and amphibians?',
        prompt: 'What specialized branch of zoology deals with the study of reptiles and amphibians?',
        term: 'Herpetology',
        subtitle: 'Study of Reptiles & Amphibians',
        studies: [
          'Reptiles (snakes, lizards, turtles, crocodilians)',
          'Amphibians (frogs, toads, salamanders)',
          'Ectothermic (cold-blooded) tetrapods'
        ],
        takeaway: 'Herpetology focuses on the biology, ecology, and venom chemistry of amphibians and non-avian reptiles.'
      },
      {
        id: 22,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🦜',
        situational: 'A biologist uses GPS satellite tags to track the seasonal migration paths, feather aerodynamics, and nest-building habits of eagles.',
        mainQuestion: 'What field studies avian species?',
        prompt: 'What specialized branch of zoology is dedicated to the study of birds?',
        term: 'Ornithology',
        subtitle: 'Study of Birds',
        studies: [
          'Avian flight mechanics and migration',
          'Bird songs, communication, and nesting',
          'Feather anatomy and egg biology'
        ],
        takeaway: 'Ornithology is the scientific study of all aspects of bird biology, ecology, and flight mechanics.'
      },
      {
        id: 23,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🐟',
        situational: 'A marine biologist catalogues coral reef fish, sharks, and deep-sea anglerfish to analyze their gill adaptations and swimming efficiency.',
        mainQuestion: 'What field studies fishes?',
        prompt: 'What specialized branch of zoology is dedicated to the study of fishes?',
        term: 'Ichthyology',
        subtitle: 'Study of Fishes',
        studies: [
          'Jawless fish (Agnatha)',
          'Cartilaginous fish (sharks, rays)',
          'Bony fish (Osteichthyes)'
        ],
        takeaway: 'Ichthyology is the branch of zoology devoted to the study of freshwater and marine fish species.'
      },
      {
        id: 24,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🪱',
        situational: 'A medical researcher isolates parasitic tapeworms and flukes from livestock intestines to develop effective anti-parasite treatments.',
        mainQuestion: 'What branch studies parasitic worms?',
        prompt: 'What specialized branch of zoology deals with the study of parasitic worms?',
        term: 'Helminthology',
        subtitle: 'Study of Parasitic Worms (Helminths)',
        studies: [
          'Tapeworms (Cestodes)',
          'Flukes (Trematodes)',
          'Roundworms (Nematodes)'
        ],
        takeaway: 'Helminthology focuses on parasitic worms that infect humans, livestock, and wildlife.'
      },
      {
        id: 25,
        category: 'MEDICAL ZOOLOGY',
        emoji: '🦟',
        situational: 'An *Aedes aegypti* mosquito bites an infected human and transmits dengue virus to another person without becoming sick itself.',
        mainQuestion: 'What do we call an animal that transmits pathogens between hosts?',
        prompt: 'What medical zoology term describes an organism that carries and transmits infectious diseases to others?',
        term: 'Disease Vector',
        subtitle: 'Carrier & Transmitter of Pathogens',
        studies: [
          'Transmits pathogens between hosts without being harmed',
          'Mosquitoes ➔ Dengue, Malaria, Zika',
          'Fleas ➔ Plague; Ticks ➔ Lyme disease'
        ],
        takeaway: 'A disease vector is an organism (commonly an arthropod) that spreads infectious pathogens between living hosts.'
      },
      {
        id: 26,
        category: 'MEDICAL ZOOLOGY',
        emoji: '🦇',
        situational: 'Rabies virus from a bat bite or bird flu from poultry naturally crosses over and infects human patients.',
        mainQuestion: 'What do we call diseases transmitted from animals to humans?',
        prompt: 'What is the term for infectious diseases naturally transmitted between animals and humans?',
        term: 'Zoonotic Diseases (Zoonoses)',
        subtitle: 'Infections Transmitted from Animals to Humans',
        studies: [
          'Animal-to-human disease transmission',
          'Examples: Rabies, COVID-19, Avian Flu',
          'Monitored closely by public health epidemiologists'
        ],
        takeaway: 'Zoonoses are infectious diseases that naturally jump from animal reservoir populations to human hosts.'
      },
      {
        id: 27,
        category: 'MEDICAL ZOOLOGY',
        emoji: '🐀',
        situational: 'Pharmacologists test a promising new cancer therapy on lab mice and zebrafish because their cellular pathways closely mirror human biology.',
        mainQuestion: 'Why do medical researchers use surrogate animals in clinical trials?',
        prompt: 'What are animals called when used in research to study human diseases and treatments?',
        term: 'Animal Models',
        subtitle: 'Surrogate Organisms in Biomedical Research',
        studies: [
          'Used to study disease mechanisms and safety',
          'Examples: Mice, Rats, Zebrafish, Primates',
          'Provide biological data before human clinical trials'
        ],
        takeaway: 'Animal models are non-human species used in laboratories to research human disease pathology and drug treatments.'
      },
      {
        id: 28,
        category: 'AGRICULTURAL ZOOLOGY',
        emoji: '🐍',
        situational: 'Instead of spraying toxic chemical pesticides, a rice farmer releases non-venomous rat snakes into the fields to hunt crop-destroying rodents.',
        mainQuestion: 'How can natural predators replace chemical pesticides?',
        prompt: 'What agricultural practice uses natural predators, parasites, or pathogens to reduce pest populations?',
        term: 'Biological Control (Biocontrol)',
        subtitle: 'Natural Pest Population Suppression',
        studies: [
          'Eco-friendly alternative to chemical insecticides',
          'Uses natural predators (e.g. snakes for rodents, ladybugs for aphids)',
          'Maintains ecological balance and crop yield'
        ],
        takeaway: 'Biological control is an agricultural method utilizing natural animal enemies to sustainably manage crop pests.'
      },
      {
        id: 29,
        category: 'CONSERVATION ZOOLOGY',
        emoji: '🐒',
        situational: 'The Philippine Tarsier lives exclusively on a few islands in the Philippines (Bohol, Samar, Leyte) and is found nowhere else in the wild on Earth.',
        mainQuestion: 'What do we call a species restricted to a single geographic area?',
        prompt: 'What is the conservation term for a species restricted to a specific geographic region?',
        term: 'Endemic Species',
        subtitle: 'Species Unique to a Specific Location',
        studies: [
          'Found only in one specific region or country',
          'High priority for local habitat conservation',
          'Example: Philippine Tarsier, Tamaraw'
        ],
        takeaway: 'Endemic species are native and strictly confined to a single geographic territory, making them vulnerable to local habitat loss.'
      },
      {
        id: 30,
        category: 'CONSERVATION ZOOLOGY',
        emoji: '🦦',
        situational: 'Sea otters eat sea urchins; when otters are removed, urchins multiply uncontrollably and destroy entire kelp forest habitats for hundreds of other marine animals.',
        mainQuestion: 'Which species has a disproportionately huge impact on its ecosystem balance?',
        prompt: 'What ecological term describes a species whose impact is critical to holding its entire community together?',
        term: 'Keystone Species',
        subtitle: 'Disproportionately Large Ecological Impact',
        studies: [
          'Essential for community structure and biodiversity',
          'Removal causes ecosystem collapse or drastic shifts',
          'Example: Sea otters controlling urchins in kelp forests'
        ],
        takeaway: 'A keystone species exerts strong ecological regulation; without it, the entire ecosystem structure collapses.'
      },
      {
        id: 31,
        category: 'CONSERVATION ZOOLOGY',
        emoji: '🐼',
        situational: 'A conservation group features the Giant Panda and Philippine Eagle on posters and donation drives to raise global funds to protect entire forest reserves.',
        mainQuestion: 'Why do conservation groups use charismatic animals as ambassadors?',
        prompt: 'What term describes charismatic species used to raise public awareness and funding for broader conservation?',
        term: 'Flagship Species',
        subtitle: 'Charismatic Ambassador for Conservation',
        studies: [
          'Iconic, recognizable, and appealing species',
          'Generates public sympathy and financial support',
          'Protects broader umbrella ecosystems'
        ],
        takeaway: 'Flagship species serve as high-profile symbols to rally public support and funding for habitat preservation.'
      },
      {
        id: 32,
        category: 'THREATS TO BIODIVERSITY',
        emoji: '🐸',
        situational: 'The Cane Toad was introduced to eat beetles, but with no natural predators, it exploded in numbers, poisoned native predators, and depleted local food supplies.',
        mainQuestion: 'What threat occurs when non-native organisms take over a new habitat?',
        prompt: 'What are non-native organisms introduced to new environments that cause environmental and economic damage called?',
        term: 'Invasive Species',
        subtitle: 'Non-Native Organisms Causing Ecological Harm',
        studies: [
          'Outcompete native species for food and space',
          'Lack natural predators in new habitat',
          'Example: Cane toad (*Rhinella marina*)'
        ],
        takeaway: 'Invasive species disrupt native food chains, outcompete indigenous wildlife, and cause severe ecological damage.'
      }
    ]
  },

  // =========================================================================
  // TOPIC 2: TAXONOMY, PHYLOGENY & CLADISTICS
  // =========================================================================
  {
    id: 'zoology-2',
    title: 'Taxonomy, Phylogeny & Cladistics',
    badge: 'Topic 2',
    description: 'Linnaean hierarchy, binomial nomenclature, phylogenetic trees, ancestral vs derived traits, and cladistic analysis.',
    icon: '🌿',
    cards: [
      {
        id: 1,
        category: 'TAXONOMY BASICS',
        emoji: '🏷️',
        situational: 'A museum curator discovers an unnamed marine creature, documents its anatomical traits, gives it a formal Latin name, and places it into the animal classification registry.',
        mainQuestion: 'What scientific discipline identifies, names, and classifies life?',
        prompt: 'What is the science of identification, naming, and classification of species?',
        term: 'Taxonomy',
        subtitle: 'Identification, Naming, & Classification of Species',
        studies: [
          'Species identification based on physical and genetic traits',
          'Standardized binomial naming system',
          'Hierarchical grouping into classification ranks'
        ],
        takeaway: 'Taxonomy provides the universal scientific framework to identify, name, and categorize Earth\'s biodiversity.'
      },
      {
        id: 2,
        category: 'TAXONOMY BASICS',
        emoji: '👨‍🔬',
        situational: 'In the 18th century, a Swedish botanist and zoologist replaces messy multi-line descriptions with a clean, universal two-part Latin naming system.',
        mainQuestion: 'Who is recognized as the Father of Modern Taxonomy?',
        prompt: 'Which Swedish scientist developed the formal biological naming system used today?',
        term: 'Carolus Linnaeus (1707–1778)',
        subtitle: 'Father of Modern Taxonomy',
        studies: [
          'Swedish botanist, zoologist, and physician',
          'Pioneered binomial nomenclature (Genus species)',
          'Organized nature into hierarchical nested ranks'
        ],
        takeaway: 'Linnaeus revolutionized biology by introducing binomial nomenclature and standard hierarchical taxonomy.'
      },
      {
        id: 3,
        category: 'TAXONOMY BASICS',
        emoji: '✍️',
        situational: 'A biologist writes the scientific name for the African lion as *Panthera leo* and for modern humans as *Homo sapiens*, with the first word capitalized and the second lowercase.',
        mainQuestion: 'What is the universal two-part Latin naming format?',
        prompt: 'What is the formal two-part naming system for living organisms consisting of Genus and species?',
        term: 'Binomial Nomenclature',
        subtitle: 'Two-part Latin Naming System (Genus + species)',
        studies: [
          'Genus name is capitalized, species identifier is lowercase',
          'Both words are italicized (or underlined when handwritten)',
          'Replaced long, inconsistent descriptive phrases'
        ],
        takeaway: 'Binomial nomenclature assigns every living organism a unique, universal two-word scientific name.'
      },
      {
        id: 4,
        category: 'TAXONOMY BASICS',
        emoji: '📚',
        situational: 'A zoological committee references the 10th edition (published in 1758) of an ancient book to verify the earliest valid scientific name given to a bird species.',
        mainQuestion: 'What historical book is the official starting point for zoological naming?',
        prompt: 'What landmark book by Linnaeus (10th edition, 1758) is accepted as the starting point for zoological nomenclature?',
        term: 'Systema Naturae (1758, 10th Edition)',
        subtitle: 'Official Starting Point of Modern Zoological Nomenclature',
        studies: [
          'First published in 1735 by Carolus Linnaeus',
          'Classified thousands of plant, animal, and mineral species',
          '10th edition (1758) standardized zoological naming rules'
        ],
        takeaway: 'Linnaeus\' Systema Naturae (10th Edition, 1758) is the internationally accepted foundation for zoological names.'
      },
      {
        id: 5,
        category: 'TAXONOMIC HIERARCHY',
        emoji: '📶',
        situational: 'A biology student classifies the leopard (*Panthera pardus*) step by step from Domain Eukarya down to Kingdom, Phylum, Class, Order, Family, Genus, and Species.',
        mainQuestion: 'What is the nested ranking framework of biological classification?',
        prompt: 'What is the hierarchical framework of nested taxonomic ranks from broadest to most specific?',
        term: 'Taxonomic Hierarchy',
        subtitle: 'Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species',
        studies: [
          'Broadest rank: Domain (Eukarya)',
          'Intermediate ranks: Kingdom, Phylum, Class, Order, Family',
          'Most specific ranks: Genus, Species (*Panthera pardus*)'
        ],
        takeaway: 'The taxonomic hierarchy organizes life into progressively narrower nested categories from Domain to Species.'
      },
      {
        id: 6,
        category: 'THREE DOMAINS',
        emoji: '🌐',
        situational: 'Biologists divide all life on Earth into three massive domains based on cellular organization and ribosomal RNA sequences: Bacteria, Archaea, and Eukarya.',
        mainQuestion: 'What are the three highest primary domains of life?',
        prompt: 'What are the three fundamental domains of all living organisms?',
        term: 'The Three Domains of Life',
        subtitle: 'Domain Bacteria, Domain Archaea, Domain Eukarya',
        studies: [
          'Domain Bacteria (true prokaryotic bacteria)',
          'Domain Archaea (ancient extremophile prokaryotes)',
          'Domain Eukarya (organisms with membrane-bound nuclei)'
        ],
        takeaway: 'The three domains (Bacteria, Archaea, Eukarya) represent the deepest evolutionary divisions of life on Earth.'
      },
      {
        id: 7,
        category: 'PHYLOGENY',
        emoji: '🌳',
        situational: 'An evolutionary biologist maps out the family history of modern carnivores to uncover how leopards, skunks, otters, and dogs branched off from a shared ancestor.',
        mainQuestion: 'What do we call the evolutionary history and relationships of species?',
        prompt: 'What is the term for the evolutionary history and lines of descent among groups of organisms?',
        term: 'Phylogeny',
        subtitle: 'Evolutionary History & Lines of Descent',
        studies: [
          'Traces lines of descent over geological time',
          'Uncovers shared common ancestors',
          'Goal of modern classification is to reflect phylogeny'
        ],
        takeaway: 'Phylogeny describes the evolutionary relationships and historical ancestry connecting different species.'
      },
      {
        id: 8,
        category: 'PHYLOGENETIC TREES',
        emoji: '🌲',
        situational: 'A textbook displays a branching tree diagram where the branch tips show present-day mammals and the internal fork nodes represent their extinct common ancestors.',
        mainQuestion: 'How do scientists visualize evolutionary branching patterns?',
        prompt: 'What is a branching diagram representing the evolutionary history and relationships of species called?',
        term: 'Phylogenetic Tree (Tree Diagram)',
        subtitle: 'Branching Model of Evolutionary History',
        studies: [
          'Tips of branches represent present-day species of interest',
          'Branch points (nodes) represent most recent common ancestors',
          'Vertical axis implicitly represents evolutionary time moving upward'
        ],
        takeaway: 'A phylogenetic tree is a branching diagram modeling the evolutionary descent and common ancestors of a group of organisms.'
      },
      {
        id: 9,
        category: 'PHYLOGENY',
        emoji: '📖',
        situational: 'Early naturalists grouped animals strictly by surface similarity, but after 1859, scientists grouped species based on true evolutionary descent from common ancestors.',
        mainQuestion: 'What 1859 milestone established evolutionary descent as the basis for taxonomy?',
        prompt: 'Which book by Charles Darwin established evolutionary descent as the core foundation for classification?',
        term: 'On the Origin of Species (1859)',
        subtitle: 'Darwin’s Foundation for Evolutionary Classification',
        studies: [
          'Replaced arbitrary grouping by superficial looks',
          'Established "descent with modification"',
          'Connected taxonomy directly to evolutionary ancestry'
        ],
        takeaway: 'Darwin\'s 1859 work transformed taxonomy from superficial grouping to an evolutionary science based on shared ancestry.'
      },
      {
        id: 10,
        category: 'CLADISTICS',
        emoji: '🌿',
        situational: 'A researcher builds a group containing a single ancestral reptile species and ALL of its modern descendants (birds, crocodilians, dinosaurs), forming a complete monophyletic group.',
        mainQuestion: 'What method searches strictly for common ancestors and all their descendants?',
        prompt: 'What is the scientific approach that groups organisms into clades based on shared derived traits?',
        term: 'Cladistic Analysis (Cladistics)',
        subtitle: 'Searching for Monophyletic Clades',
        studies: [
          'Developed by German entomologist Willi Hennig',
          'A clade includes one common ancestor and ALL its descendants',
          'Relies strictly on sorting ancestral vs derived traits'
        ],
        takeaway: 'Cladistics organizes species into monophyletic clades based on shared derived evolutionary novelties.'
      },
      {
        id: 11,
        category: 'PHYLOGENETIC PRINCIPLE',
        emoji: '⏳',
        situational: 'Leopards and skunks share a more recent common ancestor with each other than with fish, so they are grouped together in Order Carnivora while fish branch off much earlier.',
        mainQuestion: 'How does the recency of a common ancestor dictate taxonomic grouping?',
        prompt: 'What evolutionary principle classifies species closer together if they share a more recent common ancestor?',
        term: 'Phylogenetic Principle of Classification',
        subtitle: 'Grouping by Recency of Common Ancestry',
        studies: [
          'Recent common ancestor ➔ grouped closely together',
          'Distant common ancestor ➔ grouped further apart',
          'Reflects chronological order of evolutionary divergence'
        ],
        takeaway: 'The phylogenetic principle groups species according to how recently they shared a common ancestor.'
      },
      {
        id: 12,
        category: 'TRAIT TYPES',
        emoji: '👴',
        situational: 'All vertebrates in a study possess a backbone because their original ancient ancestor already had a vertebral column hundreds of millions of years ago.',
        mainQuestion: 'What do we call a trait that was already present in the original ancestor?',
        prompt: 'What is a trait called that was present in the common ancestor of a group of interest?',
        term: 'Ancestral Trait (Plesiomorphy)',
        subtitle: 'Primitive Feature Inherited from Common Ancestor',
        studies: [
          'Present in the common ancestor of the group',
          'Examples: Vertebral column in mammals, lack of whiskers in early mice',
          'Does not distinguish closely related modern subgroups'
        ],
        takeaway: 'An ancestral trait is a primitive character state inherited unchanged from the common ancestor.'
      },
      {
        id: 13,
        category: 'TRAIT TYPES',
        emoji: '✨',
        situational: 'During mouse evolution, a new lineage develops big ears and a fuzzy tail that were completely absent in the original ancestral population.',
        mainQuestion: 'What do we call a newly evolved trait that differs from the ancestral form?',
        prompt: 'What is a trait that arose during the evolution of a lineage and differs from the ancestral state called?',
        term: 'Derived Trait (Apomorphy)',
        subtitle: 'Evolutionary Novelty Arising in a Lineage',
        studies: [
          'Novel trait arising along an evolutionary lineage',
          'Can appear through the GAIN or LOSS of a feature (e.g. taillessness)',
          'Distinguishes newer descendant branches from older ancestors'
        ],
        takeaway: 'A derived trait is an evolutionary novelty that arose in a descendant group and differs from the ancestral state.'
      },
      {
        id: 14,
        category: 'CLADISTICS',
        emoji: '🔑',
        situational: 'Both bald eagles and alligators share a muscular gizzard that evolved in their common archosaur ancestor, allowing scientists to link them together on the tree.',
        mainQuestion: 'What type of trait provides the evidence needed to build phylogenetic branch points?',
        prompt: 'What are novel derived traits shared among multiple descendant species called in cladistics?',
        term: 'Shared Derived Traits (Synapomorphies)',
        subtitle: 'Key Evidence for Building Cladograms',
        studies: [
          'Derived traits shared by two or more species in a dataset',
          'Form nested patterns that identify branching points',
          'Primary evidence used to construct phylogenetic trees'
        ],
        takeaway: 'Shared derived traits (synapomorphies) are the definitive evidence used to reconstruct evolutionary branching patterns.'
      },
      {
        id: 15,
        category: 'TREE BUILDING',
        emoji: '🐟',
        situational: 'When analyzing jaws, lungs, and fur in vertebrates, scientists use the jawless Lamprey as a distant reference species to establish which traits are primitive.',
        mainQuestion: 'What reference species acts as a baseline proxy for the ancestral state?',
        prompt: 'What is a distantly related reference species used in cladistics as a proxy for ancestral traits called?',
        term: 'Outgroup',
        subtitle: 'Distant Relative Used as Ancestral Baseline',
        studies: [
          'More distantly related to the study group than they are to one another',
          'Serves as a proxy for ancestral trait states',
          'Example: Lamprey (lacks jaws, lungs, fur, feathers)'
        ],
        takeaway: 'An outgroup provides an evolutionary baseline to determine whether traits in the study group are ancestral or derived.'
      },
      {
        id: 16,
        category: 'TREE BUILDING',
        emoji: '📊',
        situational: 'Students are given a matrix comparing Lamprey, Antelope, Bald eagle, Alligator, and Sea bass across features scored as present (+) or absent (0).',
        mainQuestion: 'What table format is used to convert morphological data into a tree?',
        prompt: 'What is the table showing presence (+) or absence (0) of traits across species used for tree building called?',
        term: 'Character Matrix (Trait Table)',
        subtitle: 'Binary Data Matrix for Cladistic Reconstruction',
        studies: [
          'Rows list morphological features (lungs, jaws, feathers, fur)',
          'Columns list study organisms and outgroup',
          'Scored as present (+) or absent (0)'
        ],
        takeaway: 'A character matrix organizes trait data in a binary table to deduce the most parsimonious evolutionary tree.'
      },
      {
        id: 17,
        category: 'VERTEBRATE EVOLUTION',
        emoji: '🦈',
        situational: 'In the vertebrate dataset, all species (Sea bass, Antelope, Eagle, Alligator) possess jaws, while the outgroup Lamprey lacks them.',
        mainQuestion: 'What was the first major shared derived trait to evolve after the jawless fish?',
        prompt: 'Which derived trait separates the jawed vertebrates from the jawless Lamprey outgroup?',
        term: 'Jaws',
        subtitle: 'First Shared Derived Trait in Gnathostome Evolution',
        studies: [
          'Shared by Sea bass, Antelope, Bald eagle, and Alligator',
          'Absent only in the Lamprey outgroup',
          'Marks the first major evolutionary branch point'
        ],
        takeaway: 'The evolution of jaws distinguishes all jawed vertebrates (gnathostomes) from ancestral jawless agnathans.'
      },
      {
        id: 18,
        category: 'VERTEBRATE EVOLUTION',
        emoji: '🫁',
        situational: 'Antelopes, eagles, and alligators possess lungs for air breathing, while the aquatic Sea bass relies on gills.',
        mainQuestion: 'What derived organ distinguishes land vertebrates from fish?',
        prompt: 'Which derived trait separates terrestrial tetrapods from the aquatic Sea bass?',
        term: 'Lungs',
        subtitle: 'Derived Trait Enabling Terrestrial Respiration',
        studies: [
          'Shared by Antelope, Bald eagle, and Alligator',
          'Absent in aquatic fishes (Sea bass and Lamprey)',
          'Facilitated vertebrate transition from water to land'
        ],
        takeaway: 'Lungs represent a key shared derived adaptation allowing tetrapod lineages to breathe atmospheric oxygen.'
      },
      {
        id: 19,
        category: 'VERTEBRATE EVOLUTION',
        emoji: '🦅',
        situational: 'Both the Bald eagle and Alligator possess a specialized muscular gizzard for grinding food, which the mammalian Antelope lacks.',
        mainQuestion: 'What shared organ unites birds and crocodilians into the Archosaur clade?',
        prompt: 'Which derived digestive feature links alligators and bald eagles on the phylogenetic tree?',
        term: 'Gizzard',
        subtitle: 'Shared Derived Trait of Archosaurs (Birds & Crocodilians)',
        studies: [
          'Shared by Alligator and Bald eagle',
          'Absent in Antelope, Sea bass, and Lamprey',
          'Defines the common archosaur evolutionary lineage'
        ],
        takeaway: 'The gizzard is a shared derived synapomorphy linking crocodilians and birds in the archosaur lineage.'
      },
      {
        id: 20,
        category: 'TRAIT TYPES',
        emoji: '🪶',
        situational: 'Fur is found ONLY in the antelope, and feathers are found ONLY in the bald eagle within the study dataset.',
        mainQuestion: 'How are unique traits found in only a single species placed on a tree?',
        prompt: 'What are derived traits unique to a single species that do not help group multiple species called?',
        term: 'Unshared Derived Traits (Autapomorphies)',
        subtitle: 'Unique Traits on Terminal Lineage Branches',
        studies: [
          'Found in only a single species in the dataset',
          'Do not help resolve branching order between species',
          'Placed at the terminal branch tip of that individual species'
        ],
        takeaway: 'Unshared derived traits (autapomorphies) define individual terminal species but do not clarify branching relationships.'
      },
      {
        id: 21,
        category: 'MOLECULAR EVIDENCE',
        emoji: '🧬',
        situational: 'Scientists compare the DNA nucleotide sequences of orthologous hemoglobin genes across chimpanzees, humans, and lemurs to calculate genetic divergence.',
        mainQuestion: 'How does modern biology infer phylogenetic trees using molecular data?',
        prompt: 'What modern molecular evidence compares DNA and protein sequences to reconstruct evolutionary trees?',
        term: 'Molecular Sequence Evidence (DNA & Proteins)',
        subtitle: 'Biochemical & Genetic Basis for Phylogeny',
        studies: [
          'Compares nucleotide sequences in orthologous genes',
          'Closely related species have few sequence differences',
          'Distantly related species accumulate more mutations over time'
        ],
        takeaway: 'Molecular sequencing uses DNA and protein sequence similarities to measure evolutionary distance and lineage divergence.'
      },
      {
        id: 22,
        category: 'APPLICATIONS OF PHYLOGENY',
        emoji: '⚖️',
        situational: 'A crime lab uses phylogenetic DNA tree analysis to match crime scene blood evidence to a suspect, and to trace the source of contaminated food.',
        mainQuestion: 'How is phylogenetics applied in legal and criminal investigations?',
        prompt: 'In which practical field is phylogenetic DNA analysis used in court cases and paternity verification?',
        term: 'Forensics (DNA Forensics)',
        subtitle: 'Phylogenetic Analysis in Legal & Criminal Investigations',
        studies: [
          'Assessing DNA evidence presented in court cases',
          'Determining paternity and suspect identification',
          'Tracing commercial food and agricultural contamination sources'
        ],
        takeaway: 'Forensic phylogenetics evaluates DNA sequence relatedness to establish legal evidence in criminal and paternity cases.'
      },
      {
        id: 23,
        category: 'APPLICATIONS OF PHYLOGENY',
        emoji: '🦠',
        situational: 'During a viral outbreak, epidemiologists sequence viral genomes and build a phylogenetic tree to trace which animal reservoir passed the virus to humans.',
        mainQuestion: 'How do public health officials trace the animal origin of new epidemics?',
        prompt: 'What critical medical application uses phylogenetic sequencing to identify the source of infectious disease outbreaks?',
        term: 'Identifying Origin of Pathogens',
        subtitle: 'Epidemiological Tracing of Disease Outbreaks',
        studies: [
          'Molecular sequencing of emerging viruses and bacteria',
          'Identifies animal host reservoirs and transmission pathways',
          'Informs public health policy and vaccine development'
        ],
        takeaway: 'Phylogenetic pathogen tracing identifies the animal sources and transmission chains of emerging disease outbreaks.'
      },
      {
        id: 24,
        category: 'SUMMARY CONCEPTS',
        emoji: '💡',
        situational: 'A biologist explains that a phylogenetic tree is not an unchangeable drawing, but a proposed model that can be revised as new genetic data is discovered.',
        mainQuestion: 'What is the true scientific nature of a phylogenetic tree diagram?',
        prompt: 'What is a phylogenetic tree in scientific terms?',
        term: 'Phylogenetic Tree as a Hypothesis',
        subtitle: 'Testable Model of Evolutionary Relationships',
        studies: [
          'Represents a working hypothesis about evolutionary history',
          'Subject to testing and revision with new data',
          'Seeks the simplest possible branching pattern (parsimony)'
        ],
        takeaway: 'Phylogenetic trees are testable evolutionary hypotheses that are updated as new morphological and genetic data emerges.'
      },
      {
        id: 25,
        category: 'METHODOLOGY SUMMARY',
        emoji: '🌐',
        situational: 'An evolutionary department uses multiple techniques—including fossil records, morphology, and molecular clocks—to reconstruct the overall history of life.',
        mainQuestion: 'What is the comprehensive broad field that investigates evolutionary history?',
        prompt: 'What comprehensive field investigates the overall evolutionary pathways and history of life using various methods?',
        term: 'Phylogenetic Analysis',
        subtitle: 'Comprehensive Field of Evolutionary History',
        studies: [
          'Broad umbrella field investigating evolutionary history',
          'Integrates fossil, morphological, and molecular data',
          'Reconstructs the tree of life across geological eras'
        ],
        takeaway: 'Phylogenetic analysis is the comprehensive discipline that investigates the evolutionary pathways of all living organisms.'
      },
      {
        id: 26,
        category: 'METHODOLOGY SUMMARY',
        emoji: '📐',
        situational: 'A systematist strictly classifies species by identifying shared derived characters (synapomorphies) to define monophyletic clades.',
        mainQuestion: 'What specific methodological approach was developed by Willi Hennig?',
        prompt: 'What specific methodology strictly sorts traits into ancestral and derived states to define monophyletic clades?',
        term: 'Cladistic Analysis (Summary)',
        subtitle: 'Strict Trait Sorting into Ancestral vs Derived States',
        studies: [
          'Specific methodological approach by Willi Hennig',
          'Relies strictly on shared derived traits (synapomorphies)',
          'Rejects paraphyletic and polyphyletic groupings'
        ],
        takeaway: 'Cladistic analysis strictly uses shared derived traits to identify monophyletic clades sharing a single common ancestor.'
      }
    ]
  },

  // =========================================================================
  // TOPIC 3: CELL STRUCTURE AND FUNCTION
  // =========================================================================
  {
    id: 'zoology-3',
    title: 'Cell Structure and Function',
    badge: 'Topic 3',
    description: 'Prokaryotes vs Eukaryotes, plasma membrane, endomembrane system, mitochondria, nucleus, and organelles.',
    icon: '🔬',
    cards: [
      {
        id: 1,
        category: 'CELL TYPES',
        emoji: '🦠',
        situational: 'A microbiologist cultures bacteria and observes that their genetic material floats freely in a nucleoid without being wrapped inside a nuclear envelope.',
        mainQuestion: 'What type of cell lacks a membrane-bound nucleus?',
        prompt: 'What are structurally simple cells that lack a membrane-bound nucleus called?',
        term: 'Prokaryotic Cells (Prokaryotes)',
        subtitle: 'Cells Lacking a Membrane-Bound Nucleus',
        studies: [
          'Lack a membrane-bound nucleus and complex organelles',
          'Structurally simple and microscopic',
          'Divided into two domains: Bacteria and Archaea'
        ],
        takeaway: 'Prokaryotes (Bacteria and Archaea) lack a membrane-enclosed nucleus and internal compartmentalized organelles.'
      },
      {
        id: 2,
        category: 'PROKARYOTES',
        emoji: '🧫',
        situational: 'Under a microscope, a doctor observes rod-shaped *E. coli*, spherical *Streptococcus*, and spiral-shaped *Spirillum* bacteria.',
        mainQuestion: 'What are the three common morphological shapes of bacteria?',
        prompt: 'What are the three primary morphological shapes of bacterial cells?',
        term: 'Three Shapes of Bacteria',
        subtitle: 'Bacillus (Rod), Coccus (Spherical), Spirilla (Spiral)',
        studies: [
          'Bacillus = Rod-shaped',
          'Coccus = Spherical / round',
          'Spirilla = Spiral-shaped'
        ],
        takeaway: 'Bacteria are classified morphologically into three basic shapes: Bacillus (rod), Coccus (sphere), and Spirilla (spiral).'
      },
      {
        id: 3,
        category: 'PROKARYOTES',
        emoji: '🌋',
        situational: 'Scientists sample boiling volcanic springs and super-salty salt flats and discover ancient prokaryotes thriving under extreme heat and salinity.',
        mainQuestion: 'What domain of prokaryotes specializes in extreme habitats?',
        prompt: 'Which domain of prokaryotes includes extremophiles like halophiles, thermophiles, and methanogens?',
        term: 'Domain Archaea',
        subtitle: 'Extremophile Prokaryotes',
        studies: [
          'Halophiles (salt-loving environments)',
          'Thermophiles (extremely hot thermal vents & springs)',
          'Methanogens (methane-producing anaerobic habitats)'
        ],
        takeaway: 'Domain Archaea consists of specialized prokaryotes that thrive in extreme habitats (high heat, high salt, anaerobic conditions).'
      },
      {
        id: 4,
        category: 'CELL TYPES',
        emoji: '🧬',
        situational: 'A biology student examines cheek cells and plant leaf cells, observing a distinct nucleus, endoplasmic reticulum, and mitochondria in each cell.',
        mainQuestion: 'What category of cells possesses a membrane-bound nucleus and organelles?',
        prompt: 'What are complex cells containing a true membrane-bound nucleus and specialized organelles called?',
        term: 'Eukaryotic Cells (Eukaryotes)',
        subtitle: 'Cells Containing Membrane-Bound Nuclei & Organelles',
        studies: [
          'Belong to Domain Eukarya',
          'Includes Protists, Fungi, Plants, and Animals',
          'Contain membrane-bound nucleus, organelles, and plasma membrane'
        ],
        takeaway: 'Eukaryotic cells contain a membrane-enclosed nucleus and compartmentalized organelles that perform specialized metabolic tasks.'
      },
      {
        id: 5,
        category: 'PLASMA MEMBRANE',
        emoji: '🛡️',
        situational: 'The outer boundary of an animal cell consists of two sheets of phospholipid molecules with hydrophilic heads facing water and hydrophobic tails tucked inside.',
        mainQuestion: 'What is the primary lipid structure of the cell membrane?',
        prompt: 'What double-layered lipid structure forms the outer protective barrier of eukaryotic cells?',
        term: 'Phospholipid Bilayer',
        subtitle: 'Double Layer of Phospholipids with Embedded Proteins',
        studies: [
          'Separates cytoplasm from extracellular environment',
          'Hydrophilic phosphate heads face watery exterior and interior',
          'Embedded proteins regulate molecular transit and signaling'
        ],
        takeaway: 'The phospholipid bilayer forms a fluid, protective double-membrane barrier regulating what enters and exits the cell.'
      },
      {
        id: 6,
        category: 'PLASMA MEMBRANE',
        emoji: '🚪',
        situational: 'The cell membrane allows vital glucose, amino acids, and oxygen to enter while blocking harmful toxins and preventing cell contents from leaking out.',
        mainQuestion: 'What property allows the membrane to choose what passes through?',
        prompt: 'What property of the plasma membrane allows necessary nutrients to pass while blocking harmful substances?',
        term: 'Selectively Permeable Membrane',
        subtitle: 'Regulated Molecular Passage for Homeostasis',
        studies: [
          'Allows necessary nutrients and gases (sugars, ions, O2) to pass',
          'Prevents passage of harmful and large foreign substances',
          'Maintains internal cellular homeostasis and integrity'
        ],
        takeaway: 'Selective permeability is the membrane\'s ability to regulate transport, keeping internal conditions stable and balanced.'
      },
      {
        id: 7,
        category: 'PLASMA MEMBRANE',
        emoji: '📡',
        situational: 'A hormone released from the brain binds to a specific protein on a liver cell membrane, triggering the cell to release glucose into the bloodstream.',
        mainQuestion: 'How do cells receive and respond to chemical signals from their environment?',
        prompt: 'What function do embedded membrane proteins serve when acting as receptors for signaling molecules?',
        term: 'Intercellular Communication (Receptors)',
        subtitle: 'Membrane Receptors & Signal Transduction',
        studies: [
          'Proteins embedded in the membrane act as receptors',
          'Bind signaling molecules (hormones, neurotransmitters)',
          'Enables cells to communicate and respond to environmental changes'
        ],
        takeaway: 'Embedded membrane receptor proteins detect external signaling molecules to coordinate cellular responses.'
      },
      {
        id: 8,
        category: 'CYTOPLASM',
        emoji: '🧪',
        situational: 'Nutrients and enzymes dissolve in a semi-fluid jelly inside the cell membrane where glucose breakdown (glycolysis) and protein assembly take place.',
        mainQuestion: 'What is the gelatinous fluid matrix filling the cell outside the nucleus?',
        prompt: 'What is the gelatinous material inside the cell membrane (containing cytosol) that houses organelles called?',
        term: 'Cytoplasm (Cytosol)',
        subtitle: 'Gelatinous Intracellular Matrix & Metabolic Site',
        studies: [
          'Gelatinous fluid located inside membrane but outside nucleus',
          'Facilitates essential metabolic processes and protein synthesis',
          'Allows movement and transport of materials and organelles'
        ],
        takeaway: 'The cytoplasm is the gelatinous medium where cellular organelles reside and vital metabolic reactions occur.'
      },
      {
        id: 9,
        category: 'THE NUCLEUS',
        emoji: '👑',
        situational: 'The master blueprint containing chromosomes and DNA instructions for building all proteins is locked securely inside a double-membrane envelope.',
        mainQuestion: 'What organelle serves as the genetic command center of the cell?',
        prompt: 'What double-membrane organelle stores genetic information (DNA) and directs protein synthesis?',
        term: 'Nucleus',
        subtitle: 'Genetic Command Center (DNA → RNA → Protein)',
        studies: [
          'Surrounded by a double membrane (nuclear envelope with pores)',
          'Stores chromosomes and genetic information (DNA)',
          'Directs cellular activities through transcription'
        ],
        takeaway: 'The nucleus is the eukaryotic control center that houses genomic DNA and coordinates protein synthesis blueprints.'
      },
      {
        id: 10,
        category: 'THE NUCLEUS',
        emoji: '🎾',
        situational: 'Inside the nucleus, a dark, dense spherical structure actively produces ribosomal RNA (rRNA) and combines it with proteins to form ribosome subunits.',
        mainQuestion: 'Where inside the nucleus are ribosome parts manufactured?',
        prompt: 'What dense region inside the nucleus produces ribosomal RNA (rRNA) and ribosome subunits?',
        term: 'Nucleolus',
        subtitle: 'Site of Ribosomal RNA (rRNA) & Ribosome Assembly',
        studies: [
          'Located inside the nucleus',
          'Synthesizes ribosomal RNA (rRNA)',
          'Assembles ribosome subunits before export to cytoplasm'
        ],
        takeaway: 'The nucleolus is the specialized nuclear region responsible for synthesizing rRNA and assembling ribosome subunits.'
      },
      {
        id: 11,
        category: 'ENERGY ORGANELLES',
        emoji: '⚡',
        situational: 'Muscle cells require huge amounts of energy to contract, using oxygen to burn glucose and generate thousands of ATP molecules inside folded inner-membrane cristae.',
        mainQuestion: 'Which organelle specializes in aerobic cellular respiration and making ATP?',
        prompt: 'What organelle is known as the "powerhouse of the cell", producing ATP through aerobic respiration?',
        term: 'Mitochondria (Singular: Mitochondrion)',
        subtitle: 'Powerhouse of the Cell (Aerobic Respiration & ATP)',
        studies: [
          'Aerobic respiration: C6H12O6 + 6O2 ➔ 6CO2 + 6H2O + ATP',
          'Extracts high amounts of usable chemical energy from glucose',
          'Abundant in high-energy cells like muscle and liver'
        ],
        takeaway: 'Mitochondria perform aerobic cellular respiration, converting glucose and oxygen into cellular energy (ATP).'
      },
      {
        id: 12,
        category: 'ENDOMEMBRANE SYSTEM',
        emoji: '🏗️',
        situational: 'A network of flattened membranes studded with thousands of tiny ribosomes folds and modifies newly synthesized proteins into glycoproteins for export.',
        mainQuestion: 'Which endoplasmic reticulum is studded with ribosomes for protein synthesis?',
        prompt: 'What organelle is studded with ribosomes on its cytoplasmic side and synthesizes and modifies proteins?',
        term: 'Rough Endoplasmic Reticulum (Rough ER)',
        subtitle: 'Ribosome-Studded ER for Protein Synthesis & Folding',
        studies: [
          'Studded with ribosomes on cytoplasmic surface',
          'Synthesizes and modifies proteins (protein anabolism)',
          'Adds sugar chains to proteins to create glycoproteins'
        ],
        takeaway: 'Rough ER is studded with ribosomes and specializes in synthesizing, folding, and modifying secretory proteins.'
      },
      {
        id: 13,
        category: 'ENDOMEMBRANE SYSTEM',
        emoji: '🧈',
        situational: 'In liver cells, a smooth membrane network synthesizes phospholipids, detoxifies alcohol and drugs, and stores calcium ions without any ribosomes attached.',
        mainQuestion: 'Which endoplasmic reticulum lacks ribosomes and specializes in lipids and detoxification?',
        prompt: 'What organelle lacks ribosomes and produces lipids, detoxifies drugs, and stores calcium ions (Ca2+)?',
        term: 'Smooth Endoplasmic Reticulum (Smooth ER)',
        subtitle: 'Lipid Synthesis, Drug Detoxification, & Calcium Storage',
        studies: [
          'Lacks ribosomes on its surface',
          'Synthesizes lipids, phospholipids, and steroid hormones',
          'Detoxifies drugs in the liver and stores Ca2+ in muscle cells'
        ],
        takeaway: 'Smooth ER lacks ribosomes and is dedicated to synthesizing lipids, detoxifying harmful substances, and storing calcium.'
      },
      {
        id: 14,
        category: 'ENDOMEMBRANE SYSTEM',
        emoji: '📦',
        situational: 'Transport vesicles arrive at the *cis face* of a stack of 3–20 curved, flattened sacs ("hollow pancakes"), where proteins are labeled, packaged into vesicles, and shipped out from the *trans face*.',
        mainQuestion: 'What organelle packages and distributes cellular products for export?',
        prompt: 'What organelle consisting of flattened saccules packages materials for export and secretion?',
        term: 'Golgi Apparatus',
        subtitle: 'Cellular Packaging & Shipping Center',
        studies: [
          'Consists of 3–20 flattened, curved saccules (stack of pancakes)',
          'Receives vesicles from ER on *cis face*',
          'Packages and ships vesicles from *trans face* for secretion (exocytosis)'
        ],
        takeaway: 'The Golgi apparatus modifies, sorts, and packages proteins and lipids into vesicles for transport inside or outside the cell.'
      },
      {
        id: 15,
        category: 'VESICLES',
        emoji: '🗑️',
        situational: 'A white blood cell engulfs an invading bacterium and fuses it with an acidic digestive vesicle whose powerful enzymes break the bacterium down into harmless molecules.',
        mainQuestion: 'What digestive organelle destroys cellular debris and pathogens?',
        prompt: 'What organelle contains powerful digestive enzymes responsible for intracellular digestion and debris breakdown?',
        term: 'Lysosomes',
        subtitle: 'Intracellular Digestion & Waste Breakdown',
        studies: [
          'Vesicles containing powerful hydrolytic digestive enzymes',
          'Breaks down carbohydrates, lipids, proteins, and nucleic acids',
          'Destroys engulfed bacteria, foreign debris, and worn-out organelles'
        ],
        takeaway: 'Lysosomes contain acidic digestive enzymes that break down cellular waste, macromolecules, and engulfed pathogens.'
      },
      {
        id: 16,
        category: 'VESICLES',
        emoji: '🧪',
        situational: 'An enzyme-filled vesicle in a kidney cell breaks down long-chain fatty acids and neutralizes toxic hydrogen peroxide produced during metabolism.',
        mainQuestion: 'What enzyme-filled vesicle breaks down fatty acids and toxic byproducts?',
        prompt: 'What enzyme-filled vesicle breaks down amino acids, fatty acids, and toxic substances?',
        term: 'Peroxisomes',
        subtitle: 'Enzyme-Filled Vesicles for Fatty Acid Oxidation & Detox',
        studies: [
          'Enzyme-filled vesicle that oxidizes fatty acids and amino acids',
          'Neutralizes toxic metabolic byproducts (e.g. hydrogen peroxide)',
          'Essential for metabolic detoxification in liver and kidney cells'
        ],
        takeaway: 'Peroxisomes are metabolic vesicles containing oxidative enzymes to break down fatty acids and neutralize toxins.'
      },
      {
        id: 17,
        category: 'VESICLES',
        emoji: '💧',
        situational: 'A cell forms a membrane-bound bubble to isolate excess water, store nutrients, or transport waste materials to the cell perimeter.',
        mainQuestion: 'What fluid-filled sacs store and isolate materials in cells?',
        prompt: 'What fluid-filled organelles isolate wastes, store nutrients, or transport materials in cells?',
        term: 'Vacuoles & Vesicles',
        subtitle: 'Storage, Transport, & Waste Isolation Sacs',
        studies: [
          'Small membrane-enclosed sac-like structures',
          'Store water, nutrients, and cellular products',
          'Isolate or dispose of waste and toxic materials'
        ],
        takeaway: 'Vacuoles and vesicles are membrane-bound sacs dedicated to storage, intracellular transport, and waste isolation.'
      },
      {
        id: 18,
        category: 'NON-MEMBRANE ORGANELLES',
        emoji: '🧵',
        situational: 'Tiny molecular machines either floating freely in the cytosol or attached to the Rough ER read messenger RNA strands and assemble amino acids into polypeptide chains.',
        mainQuestion: 'What non-membrane structures synthesize proteins in all living cells?',
        prompt: 'What cellular structures are responsible for assembling polypeptide chains during protein synthesis?',
        term: 'Ribosomes',
        subtitle: 'Protein Synthesis Factories (Free or ER-Bound)',
        studies: [
          'Composed of ribosomal RNA (rRNA) and proteins',
          'Can be free-floating in cytoplasm or bound to Rough ER',
          'Assemble amino acids into polypeptide chains (proteins)'
        ],
        takeaway: 'Ribosomes translate mRNA genetic codes into amino acid polypeptide chains during protein synthesis.'
      },
      {
        id: 19,
        category: 'NON-MEMBRANE ORGANELLES',
        emoji: '⚓',
        situational: 'During animal cell division (mitosis), barrel-shaped microtubule cylinders organize the mitotic spindle fibers to pull replicated chromosomes apart.',
        mainQuestion: 'What animal organelle serves as an anchor for the cytoskeleton and spindle fibers?',
        prompt: 'What barrel-shaped organelle (not found in most plant cells) serves as an anchor for the cytoskeleton and cell division?',
        term: 'Centriole',
        subtitle: 'Cytoskeleton Anchor & Mitotic Spindle Organizer',
        studies: [
          'Composed of arranged microtubule triplets',
          'Present in animal cells; absent in most plant cells',
          'Anchors the cytoskeleton and organizes spindle fibers during mitosis'
        ],
        takeaway: 'Centrioles organize microtubule fibers during animal cell division and act as structural anchor points.'
      },
      {
        id: 20,
        category: 'CYTOSKELETON',
        emoji: '🕸️',
        situational: 'A network of microscopic protein filaments (microfilaments, intermediate filaments, microtubules) crisscrosses the cell, maintaining its shape and moving organelles around.',
        mainQuestion: 'What internal protein network supports cell structure and movement?',
        prompt: 'What internal structural component reinforces cell shape, provides internal organization, and facilitates movement?',
        term: 'The Cytoskeleton',
        subtitle: 'Internal Protein Scaffolding for Shape & Motility',
        studies: [
          'Contributes to cell shape and mechanical strength',
          'Maintains internal organization of organelles',
          'Enables intracellular transport and whole-cell motility'
        ],
        takeaway: 'The cytoskeleton is a dynamic internal protein scaffolding that provides mechanical support, organelle organization, and motility.'
      },
      {
        id: 21,
        category: 'SURFACE PROJECTIONS',
        emoji: '🏊',
        situational: 'A single sperm cell swims using a whip-like tail, while cells lining the human airway use waving hairs to sweep mucus and trapped dust upward.',
        mainQuestion: 'What surface structures enable cellular movement and increase surface area?',
        prompt: 'What surface projections increase surface area and produce cellular movement?',
        term: 'Cilia, Flagella, and Microvilli',
        subtitle: 'Surface Projections for Locomotion & Absorption',
        studies: [
          'Cilia (short, numerous hair-like projections for sweeping fluids)',
          'Flagella (long, whip-like tails for swimming motility)',
          'Microvilli (finger-like folds that increase surface area for absorption)'
        ],
        takeaway: 'Cilia and flagella provide cellular locomotion and fluid movement, while microvilli expand cell surface area for absorption.'
      },
      {
        id: 22,
        category: 'GENE EXPRESSION',
        emoji: '➡️',
        situational: 'DNA code in the nucleus is transcribed into messenger RNA, which travels to a ribosome in the cytoplasm to be translated into a functional enzyme.',
        mainQuestion: 'What is the primary flow of genetic information in living cells?',
        prompt: 'What is the universal pathway of protein synthesis from genetic instructions?',
        term: 'Central Dogma (DNA → RNA → Protein)',
        subtitle: 'Genetic Information Flow & Protein Synthesis',
        studies: [
          'DNA (storage of genetic blueprint in nucleus)',
          'RNA (transcription of message via mRNA)',
          'Protein (translation of amino acids at ribosomes)'
        ],
        takeaway: 'Genetic information flows from DNA (transcription) to RNA and then to Protein (translation) to carry out cellular functions.'
      },
      {
        id: 23,
        category: 'ENDOMEMBRANE FLOW',
        emoji: '🚚',
        situational: 'Insulin is synthesized on the Rough ER, packaged into a transport vesicle, modified in the Golgi, and packaged into a secretory vesicle that fuses with the plasma membrane to release insulin into the blood.',
        mainQuestion: 'What pathway do secretory proteins follow from synthesis to release?',
        prompt: 'What is the sequential route taken by proteins destined for secretion outside the cell?',
        term: 'Secretory Pathway (ER → Golgi → Vesicle → Exocytosis)',
        subtitle: 'Protein Modification, Packaging, & Secretion Route',
        studies: [
          'Synthesis on Rough ER ➔ transport vesicle',
          'Processing in Golgi apparatus (*cis* to *trans* face)',
          'Shipment in secretory vesicle ➔ fusion with plasma membrane (exocytosis)'
        ],
        takeaway: 'Secretory proteins travel sequentially: Rough ER ➔ Transport Vesicle ➔ Golgi Apparatus ➔ Secretory Vesicle ➔ Exocytosis.'
      },
      {
        id: 24,
        category: 'CELL INTEGRITY',
        emoji: '⚠️',
        situational: 'A toxin creates holes in the phospholipid bilayer, causing essential ions and enzymes to leak out while water floods in, destroying the cell.',
        mainQuestion: 'What happens when the plasma membrane loses its barrier function?',
        prompt: 'What is the consequence of losing the plasma membrane barrier function in a cell?',
        term: 'Loss of Membrane Barrier & Cell Death',
        subtitle: 'Disruption of Homeostasis Leading to Cell Lysis',
        studies: [
          'Loss of selective permeability barrier',
          'Compromised cellular homeostasis and ion balance',
          'Leads to cellular swelling, lysis, and death'
        ],
        takeaway: 'Maintaining plasma membrane integrity is vital for homeostasis; barrier failure causes rapid cell lysis and death.'
      },
      {
        id: 25,
        category: 'COMPARATIVE CYTOLOGY',
        emoji: '⚖️',
        situational: 'A student compares a bacterium to a human liver cell under a microscope to distinguish between prokaryotes and eukaryotes.',
        mainQuestion: 'What is the fundamental difference between prokaryotic and eukaryotic cells?',
        prompt: 'What is the primary structural difference between prokaryotic and eukaryotic cells?',
        term: 'Prokaryotic vs. Eukaryotic Cells',
        subtitle: 'Absence vs. Presence of Membrane-Bound Nucleus & Organelles',
        studies: [
          'Prokaryotes: No true nucleus, no membrane-bound organelles, circular DNA',
          'Eukaryotes: True nucleus, membrane-bound organelles (ER, Golgi, mitochondria), linear DNA',
          'Prokaryotes are simple; Eukaryotes are compartmentalized'
        ],
        takeaway: 'Prokaryotes lack a membrane-enclosed nucleus and organelles; Eukaryotes possess a defined nucleus and specialized internal organelles.'
      },
      {
        id: 26,
        category: 'SUMMARY CONCEPTS',
        emoji: '🧩',
        situational: 'All physiological functions of animals—such as muscle contraction, nerve firing, digestion, and immunity—are carried out by coordinated eukaryotic cells.',
        mainQuestion: 'What is the fundamental structural and functional unit of all animal life?',
        prompt: 'What is the basic structural and functional unit of all animal organisms?',
        term: 'The Eukaryotic Animal Cell',
        subtitle: 'The Fundamental Unit of Animal Life',
        studies: [
          'Basic structural building block of tissues and organs',
          'Site of all essential metabolic and genetic processes',
          'Organelle coordination drives animal physiology and survival'
        ],
        takeaway: 'The eukaryotic animal cell is the basic structural and functional unit that drives all physiological processes in animals.'
      }
    ]
  }
];
