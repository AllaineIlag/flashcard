import { Deck } from '@/types/flashcard';

export const TOPICS: Deck[] = [
  {
    "id": "zoology-1",
    "title": "Introduction to Zoology",
    "badge": "Topic 1",
    "description": "Etymology, history, characteristics of Kingdom Animalia, structural & functional branches, taxonomic divisions, and conservation.",
    "icon": "🐾",
    "cards": [
      {
        "id": 1,
        "category": "ETYMOLOGY & BASICS",
        "cardType": "history",
        "emoji": "🐾",
        "question": "Where does the word Zoology come from? Break down its two Greek root words.",
        "subtext": "Zoon = animal; Logos = to study",
        "prompt": "What is the literal translation and language origin of Zoology?",
        "term": "Zoology (Etymology)",
        "subtitle": "Greek: zoon (animal) + logos (to study)"
      },
      {
        "id": 2,
        "category": "DEFINITIONS",
        "cardType": "definition",
        "emoji": "🔬",
        "question": "What is the comprehensive branch of biology dedicated to the scientific study of animals, their behavior, physiology, classification, and evolution?",
        "prompt": "What major branch of biological science is this?",
        "term": "Zoology",
        "subtitle": "The Scientific Study of Animals"
      },
      {
        "id": 3,
        "category": "DEFINITIONS",
        "cardType": "analogy",
        "emoji": "🌳",
        "question": "Imagine biology is a giant tree. One massive trunk studies plants (botany), while this other massive trunk studies everything that moves, eats, and belongs to Kingdom Animalia.",
        "prompt": "What branch of biological science is this?",
        "term": "Zoology",
        "subtitle": "The Animal Trunk of Biological Science"
      },
      {
        "id": 4,
        "category": "DEFINITIONS",
        "cardType": "situational",
        "emoji": "🧭",
        "question": "A scientist travels to the Amazon rainforest to discover new animal species, analyze their DNA, observe their hunting habits, and record their mating calls.",
        "prompt": "What field of science is this researcher practicing?",
        "term": "Zoology",
        "subtitle": "Field and Laboratory Animal Science"
      },
      {
        "id": 5,
        "category": "KINGDOM ANIMALIA",
        "cardType": "definition",
        "emoji": "🧬",
        "question": "What are the 4 fundamental, universal characteristics shared by all organisms in Kingdom Animalia?",
        "subtext": "Multicellular, Eukaryotic, Heterotrophic, Motile",
        "prompt": "What are these 4 defining animal characteristics?",
        "term": "Characteristics of Animals",
        "subtitle": "Multicellular • Eukaryotic • Heterotrophic • Motile"
      },
      {
        "id": 6,
        "category": "KINGDOM ANIMALIA",
        "cardType": "analogy",
        "emoji": "🏭",
        "question": "Unlike plants that act as solar-powered food factories, animals must go out and search for meals, and are built from millions of advanced, nucleated building blocks working together.",
        "prompt": "What kingdom of life is described here?",
        "term": "Kingdom Animalia",
        "subtitle": "Multicellular Heterotrophic Eukaryotes"
      },
      {
        "id": 7,
        "category": "KINGDOM ANIMALIA",
        "cardType": "situational",
        "emoji": "🧫",
        "question": "A lab analyzes an unknown microscopic specimen. It lacks cell walls, consumes organic nutrients for energy, moves with muscle tissues, and is made of nucleated cells.",
        "prompt": "To which biological kingdom does this specimen belong?",
        "term": "Kingdom Animalia",
        "subtitle": "Eukaryotic Organisms with Specialized Tissues"
      },
      {
        "id": 8,
        "category": "HISTORICAL ZOOLOGY",
        "cardType": "history",
        "emoji": "🏛️",
        "question": "Who was the ancient Greek philosopher who pioneered early animal classification by observing whether animals lived on land or water and whether they had red blood?",
        "prompt": "Which ancient thinker is known as an early pioneer of zoological observation?",
        "term": "Aristotle",
        "subtitle": "Ancient Greek Pioneer of Animal Classification"
      },
      {
        "id": 9,
        "category": "HISTORICAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "📦",
        "question": "Think of him as the world's original ancient wildlife detective who first sorted creatures into neat boxes based on basic traits like living in the sea vs on dry land.",
        "prompt": "Which ancient Greek philosopher is this?",
        "term": "Aristotle",
        "subtitle": "Early Empiricism and Classification"
      },
      {
        "id": 10,
        "category": "HISTORICAL ZOOLOGY",
        "cardType": "history",
        "emoji": "📜",
        "question": "During this historical period, anatomical dissections were discouraged and animal knowledge was recorded in illustrated books filled with religious myths and moral allegories rather than scientific facts.",
        "prompt": "What historical period relied on symbolic \"bestiaries\"?",
        "term": "Middle Ages (Bestiaries)",
        "subtitle": "Authority-Based and Symbolic Zoology"
      },
      {
        "id": 11,
        "category": "HISTORICAL ZOOLOGY",
        "cardType": "history",
        "emoji": "🎨",
        "question": "During which historical revival did scholars like Andreas Vesalius and Leonardo da Vinci bring back systematic human and animal dissections paired with accurate anatomical drawings?",
        "prompt": "What historical era revived empirical anatomical dissection?",
        "term": "Renaissance Period",
        "subtitle": "Revival of Dissection and Anatomical Observation"
      },
      {
        "id": 12,
        "category": "HISTORICAL ZOOLOGY",
        "cardType": "history",
        "emoji": "🏷️",
        "question": "Which 18th-century Swedish naturalist established binomial nomenclature to give every species a standard two-part Latin scientific name (Genus species)?",
        "prompt": "Who is recognized as the Father of Modern Taxonomy?",
        "term": "Carolus Linnaeus",
        "subtitle": "Father of Modern Taxonomy"
      },
      {
        "id": 13,
        "category": "HISTORICAL ZOOLOGY",
        "cardType": "history",
        "emoji": "🐢",
        "question": "Who proposed the landmark Theory of Evolution by Natural Selection in 1859 after studying finches, tortoises, and fossils across the Galapagos Islands?",
        "prompt": "Which 19th-century naturalist authored \"On the Origin of Species\"?",
        "term": "Charles Darwin",
        "subtitle": "Theory of Evolution by Natural Selection"
      },
      {
        "id": 14,
        "category": "HISTORICAL ZOOLOGY",
        "cardType": "history",
        "emoji": "💻",
        "question": "What contemporary era of zoology shifted research from purely descriptive physical notes to DNA sequencing, molecular genetics, and computer bioinformatics?",
        "prompt": "What modern approach characterizes contemporary zoological research?",
        "term": "Modern Age Zoology",
        "subtitle": "Molecular Genetics, DNA Sequencing & Bioinformatics"
      },
      {
        "id": 15,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "📐",
        "question": "What subfield of zoology investigates the external form, shape, dimensions, and outward physical patterns of organisms?",
        "prompt": "What branch of structural zoology is this?",
        "term": "Morphology",
        "subtitle": "Study of External Form and Structure"
      },
      {
        "id": 16,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "🏎️",
        "question": "Imagine judging an automobile purely from the outside—measuring the contours, body kit, spoiler, and exterior paint job without opening the hood.",
        "prompt": "What branch of zoology focuses exclusively on outward form?",
        "term": "Morphology",
        "subtitle": "External Physical Architecture"
      },
      {
        "id": 17,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🪲",
        "question": "An entomologist measures the horn curvature, wing dimensions, and carapace patterns of different beetle species under a magnifying glass.",
        "prompt": "What branch of zoology is being applied here?",
        "term": "Morphology",
        "subtitle": "Outward Form and Physical Adaptation"
      },
      {
        "id": 18,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🫀",
        "question": "What subfield of zoology is the study of internal physical body structures, organs, and spatial relationships revealed by dissection?",
        "prompt": "What branch of structural zoology focuses on internal body organization?",
        "term": "Anatomy",
        "subtitle": "Study of Internal Structure and Organs"
      },
      {
        "id": 19,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "🔧",
        "question": "Imagine popping open the car hood to map the exact locations of the engine block, radiator, transmission, hoses, and electrical wiring.",
        "prompt": "What branch of zoology inspects internal parts and spatial layout?",
        "term": "Anatomy",
        "subtitle": "Internal Structural Organization"
      },
      {
        "id": 20,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🐸",
        "question": "A veterinary student dissects a preserved frog in the laboratory to inspect where the heart, lungs, stomach, and kidneys connect.",
        "prompt": "What anatomical discipline is the student practicing?",
        "term": "Anatomy",
        "subtitle": "Dissection and Internal Organ Mapping"
      },
      {
        "id": 21,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🔬",
        "question": "What subfield of zoology is the microscopic study of animal tissues and their cellular organization?",
        "prompt": "What branch of structural zoology is this?",
        "term": "Histology",
        "subtitle": "Microscopic Study of Animal Tissues"
      },
      {
        "id": 22,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "🧱",
        "question": "If anatomy looks at a whole brick wall, this science zooms in under a microscope to inspect the mortar and the microscopic layers of bricks.",
        "prompt": "What branch of microscopic biology is this?",
        "term": "Histology",
        "subtitle": "Tissue-Level Architecture"
      },
      {
        "id": 23,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🧪",
        "question": "A pathologist prepares an ultra-thin slice of muscle tissue, stains it with hematoxylin and eosin (pink & purple), and examines the cell matrix under a high-power microscope.",
        "prompt": "What branch of zoology and pathology is this?",
        "term": "Histology",
        "subtitle": "Tissue Staining and Microscopic Diagnostics"
      },
      {
        "id": 24,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🧫",
        "question": "What branch of structural zoology studies the structure, internal organelles, and biochemical functions of individual cells?",
        "prompt": "What branch of cell biology is this?",
        "term": "Cytology (Cell Biology)",
        "subtitle": "Study of Individual Cells and Organelles"
      },
      {
        "id": 25,
        "category": "STRUCTURAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "🏠",
        "question": "Studying the individual rooms, wiring, plumbing, and smart appliances inside a single apartment that makes up a massive skyscraper.",
        "prompt": "What branch of biology focuses on the individual cell unit?",
        "term": "Cytology (Cell Biology)",
        "subtitle": "The Fundamental Unit of Life"
      },
      {
        "id": 26,
        "category": "FUNCTIONAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "⚡",
        "question": "What subfield of zoology investigates the mechanical, physical, and biochemical functions and processes of living animal bodies?",
        "prompt": "What subfield of zoology examines how bodily systems function?",
        "term": "Animal Physiology",
        "subtitle": "Study of Bodily Functions and Processes"
      },
      {
        "id": 27,
        "category": "FUNCTIONAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "⚙️",
        "question": "While anatomy studies which parts are present, this branch studies how the parts actually run—how fuel burns, pistons pump, and electricity transmits.",
        "prompt": "What branch studies bodily mechanics and biochemical operations?",
        "term": "Animal Physiology",
        "subtitle": "Dynamic Biological Operations"
      },
      {
        "id": 28,
        "category": "FUNCTIONAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🏃",
        "question": "A sports scientist measures oxygen uptake, blood lactate levels, nerve impulses, and muscle contraction strength during animal sprinting.",
        "prompt": "What branch of zoology is this investigation applying?",
        "term": "Animal Physiology",
        "subtitle": "Organ System Coordination and Metabolism"
      },
      {
        "id": 29,
        "category": "PHYSIOLOGY CONCEPTS",
        "cardType": "definition",
        "emoji": "⚖️",
        "question": "What is the biological ability of an organism to maintain a stable, balanced internal environment despite drastic changes in the external environment?",
        "prompt": "What fundamental physiological balancing process is this?",
        "term": "Homeostasis",
        "subtitle": "Maintenance of Internal Equilibrium"
      },
      {
        "id": 30,
        "category": "PHYSIOLOGY CONCEPTS",
        "cardType": "analogy",
        "emoji": "🌡️",
        "question": "Imagine a smart household thermostat that switches on the heater when it freezes outside and switches on the AC when it boils outside, keeping the room at exactly 24°C.",
        "prompt": "What biological regulatory mechanism is this?",
        "term": "Homeostasis",
        "subtitle": "Negative Feedback Regulation"
      },
      {
        "id": 31,
        "category": "PHYSIOLOGY CONCEPTS",
        "cardType": "situational",
        "emoji": "🐫",
        "question": "A desert camel withstands 45°C daytime heat without sweating excessively and concentrates its urine so its internal water and electrolyte balance remains steady.",
        "prompt": "What physiological balancing capability is the camel demonstrating?",
        "term": "Homeostasis",
        "subtitle": "Thermoregulation and Osmoregulation"
      },
      {
        "id": 32,
        "category": "DEVELOPMENTAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🥚",
        "question": "What subfield of developmental zoology studies the growth and differentiation of an organism from egg fertilization through blastula and fetal stages until birth or hatching?",
        "prompt": "What branch of zoology is this?",
        "term": "Embryology",
        "subtitle": "Study of Embryonic and Fetal Development"
      },
      {
        "id": 33,
        "category": "DEVELOPMENTAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "🏗️",
        "question": "Watching a time-lapse video of a major construction project from the very first cornerstone laid down until the entire skyscraper opens its doors.",
        "prompt": "What developmental biological science is this?",
        "term": "Embryology",
        "subtitle": "Morphogenesis from Single Cell to Organism"
      },
      {
        "id": 34,
        "category": "DEVELOPMENTAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🧬",
        "question": "What branch of zoology studies heredity and the transmission of inherited traits and DNA variations from parents to offspring across generations?",
        "prompt": "What branch of biology is this?",
        "term": "Genetics",
        "subtitle": "Study of Heredity and DNA Variations"
      },
      {
        "id": 35,
        "category": "DEVELOPMENTAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "📖",
        "question": "Studying the master recipe book and source code passed down from master chefs to apprentice cooks that decides eye color, fur pattern, and physical traits.",
        "prompt": "What branch of biological inheritance is this?",
        "term": "Genetics",
        "subtitle": "Transmission of Biological Information"
      },
      {
        "id": 36,
        "category": "BEHAVIORAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🦅",
        "question": "What is the scientific and objective study of animal behavior under natural conditions, interpreted through evolutionary adaptation?",
        "prompt": "What specialized field of behavioral biology is this?",
        "term": "Ethology",
        "subtitle": "Scientific Study of Animal Behavior"
      },
      {
        "id": 37,
        "category": "BEHAVIORAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "🎥",
        "question": "Being a silent wildlife documentary filmmaker observing why wolves howl, birds dance for mates, and ants follow chemical scent trails in the wild.",
        "prompt": "What branch of zoology is this?",
        "term": "Ethology",
        "subtitle": "Behavioral Ecology and Adaptation"
      },
      {
        "id": 38,
        "category": "BEHAVIORAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🐒",
        "question": "Jane Goodall sits quietly in the Gombe forest for months recording how wild chimpanzees make and use tools by stripping leaves off sticks to fish for termites.",
        "prompt": "What field of zoological science was Jane Goodall conducting?",
        "term": "Ethology",
        "subtitle": "Naturalistic Animal Behavior Study"
      },
      {
        "id": 39,
        "category": "ECOLOGICAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🌿",
        "question": "What branch of zoology examines how animal species interact with, adapt to, and influence their environment and neighboring species?",
        "prompt": "What branch of zoology is also called Animal Ecology?",
        "term": "Ecological Zoology (Animal Ecology)",
        "subtitle": "Animal-Environment Interactions and Energy Flow"
      },
      {
        "id": 40,
        "category": "ECOLOGICAL ZOOLOGY",
        "cardType": "analogy",
        "emoji": "🏙️",
        "question": "Studying the economy, traffic, food supply, and community relationships of an entire city to see who provides goods, who consumes resources, and who shares territory.",
        "prompt": "What ecological branch of animal science is this?",
        "term": "Ecological Zoology (Animal Ecology)",
        "subtitle": "Ecosystem Dynamics and Food Webs"
      },
      {
        "id": 41,
        "category": "ECOLOGICAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🦌",
        "question": "A scientist studies how a population of deer affects vegetation and how environmental changes affect the deer.",
        "subtext": "Main Question: \"How does the animal interact with its environment?\"",
        "prompt": "What branch of zoology is this?",
        "term": "Ecological Zoology",
        "subtitle": "Also called Animal Ecology"
      },
      {
        "id": 42,
        "category": "TAXONOMIC BRANCHES",
        "cardType": "definition",
        "emoji": "🐜",
        "question": "What specialized branch of zoology is dedicated exclusively to the scientific study of insects (six-legged hexapods)?",
        "prompt": "What branch of systematic zoology is this?",
        "term": "Entomology",
        "subtitle": "Study of Insects"
      },
      {
        "id": 43,
        "category": "TAXONOMIC BRANCHES",
        "cardType": "definition",
        "emoji": "🐍",
        "question": "What specialized branch of zoology studies both reptiles (snakes, lizards, turtles) and amphibians (frogs, toads, salamanders)?",
        "prompt": "What branch of zoology is this?",
        "term": "Herpetology",
        "subtitle": "Study of Reptiles and Amphibians"
      },
      {
        "id": 44,
        "category": "TAXONOMIC BRANCHES",
        "cardType": "definition",
        "emoji": "🦜",
        "question": "What specialized branch of zoology is dedicated to the study of birds, their flight aerodynamics, nesting habits, and seasonal migration?",
        "prompt": "What branch of zoology is this?",
        "term": "Ornithology",
        "subtitle": "Study of Birds"
      },
      {
        "id": 45,
        "category": "TAXONOMIC BRANCHES",
        "cardType": "definition",
        "emoji": "🐟",
        "question": "What specialized branch of zoology is dedicated to the study of freshwater and marine fishes (Agnatha, Chondrichthyes, Osteichthyes)?",
        "prompt": "What branch of zoology is this?",
        "term": "Ichthyology",
        "subtitle": "Study of Fishes"
      },
      {
        "id": 46,
        "category": "TAXONOMIC BRANCHES",
        "cardType": "definition",
        "emoji": "🪱",
        "question": "What branch of zoology deals specifically with the study of parasitic worms, including tapeworms (cestodes), flukes (trematodes), and roundworms (nematodes)?",
        "prompt": "What specialized branch of zoology is this?",
        "term": "Helminthology",
        "subtitle": "Study of Parasitic Worms"
      },
      {
        "id": 47,
        "category": "TAXONOMIC BRANCHES",
        "cardType": "definition",
        "emoji": "🦁",
        "question": "What branch of zoology is devoted to the study of mammals—warm-blooded vertebrates that have fur and nurse their young with milk from mammary glands?",
        "prompt": "What branch of zoology is this?",
        "term": "Mammalogy",
        "subtitle": "Study of Mammals"
      },
      {
        "id": 48,
        "category": "TAXONOMIC BRANCHES",
        "cardType": "definition",
        "emoji": "🐌",
        "question": "What branch of zoology is dedicated to the study of mollusks like snails, clams, oysters, octopuses, and squids?",
        "prompt": "What branch of invertebrate zoology is this?",
        "term": "Malacology",
        "subtitle": "Study of Mollusks"
      },
      {
        "id": 49,
        "category": "MEDICAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🦟",
        "question": "What do we call an organism (commonly an arthropod like a mosquito, flea, or tick) that carries and transmits infectious pathogens between hosts without falling sick itself?",
        "prompt": "What medical zoology term describes this pathogen carrier?",
        "term": "Disease Vector",
        "subtitle": "Carrier and Transmitter of Pathogens"
      },
      {
        "id": 50,
        "category": "MEDICAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🦟",
        "question": "An Aedes aegypti mosquito bites an infected patient and passes the dengue virus to a healthy person through its salivary glands.",
        "prompt": "What medical role does the mosquito serve in this disease cycle?",
        "term": "Disease Vector",
        "subtitle": "Biological Vector of Infection"
      },
      {
        "id": 51,
        "category": "MEDICAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🦇",
        "question": "What is the medical term for infectious diseases that are naturally transmitted from animal reservoir populations to humans (e.g. Rabies, COVID-19, Avian Flu)?",
        "prompt": "What is the term for animal-to-human infections?",
        "term": "Zoonotic Diseases (Zoonoses)",
        "subtitle": "Infections Transmitted from Animals to Humans"
      },
      {
        "id": 52,
        "category": "MEDICAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🐁",
        "question": "What term describes non-human species (like mice, rats, or zebrafish) used in laboratory research to simulate human biology and test new medications?",
        "prompt": "What are these research animals called?",
        "term": "Animal Models",
        "subtitle": "Surrogate Organisms in Biomedical Research"
      },
      {
        "id": 53,
        "category": "AGRICULTURAL ZOOLOGY",
        "cardType": "definition",
        "emoji": "🐞",
        "question": "What agricultural practice uses natural animal predators, parasites, or pathogens to sustainably suppress crop-destroying pest populations instead of toxic chemicals?",
        "prompt": "What eco-friendly pest management practice is this?",
        "term": "Biological Control (Biocontrol)",
        "subtitle": "Natural Pest Population Suppression"
      },
      {
        "id": 54,
        "category": "AGRICULTURAL ZOOLOGY",
        "cardType": "situational",
        "emoji": "🐍",
        "question": "Instead of spraying toxic insecticides, a rice farmer releases non-venomous rat snakes and ducks into paddies to hunt rodents and golden apple snails.",
        "prompt": "What method of agricultural management is the farmer using?",
        "term": "Biological Control (Biocontrol)",
        "subtitle": "Predator-Prey Pest Management"
      },
      {
        "id": 55,
        "category": "CONSERVATION ZOOLOGY",
        "cardType": "definition",
        "emoji": "🐒",
        "question": "What is the conservation term for an animal species that is naturally restricted to one specific geographic territory and found nowhere else on Earth (e.g. Philippine Tarsier)?",
        "prompt": "What term describes species unique to a single location?",
        "term": "Endemic Species",
        "subtitle": "Species Unique to a Specific Geographic Area"
      },
      {
        "id": 56,
        "category": "CONSERVATION ZOOLOGY",
        "cardType": "definition",
        "emoji": "🦦",
        "question": "What ecological term describes a species whose impact is critical to holding its entire ecosystem together, such that its removal causes ecosystem collapse (e.g. Sea otters)?",
        "prompt": "What critical ecosystem-defining species is this?",
        "term": "Keystone Species",
        "subtitle": "Disproportionately Large Ecological Impact"
      },
      {
        "id": 57,
        "category": "CONSERVATION ZOOLOGY",
        "cardType": "situational",
        "emoji": "🦦",
        "question": "When sea otters are removed from a coastline, sea urchins multiply unchecked and devour entire underwater kelp forests, destroying habitats for hundreds of fish species.",
        "prompt": "What ecological role were the sea otters fulfilling?",
        "term": "Keystone Species",
        "subtitle": "Trophic Cascade Regulator"
      },
      {
        "id": 58,
        "category": "CONSERVATION ZOOLOGY",
        "cardType": "definition",
        "emoji": "🐼",
        "question": "What term describes charismatic, iconic animals (like the Giant Panda or Philippine Eagle) featured on campaign posters to rally public support and funds for broader habitat protection?",
        "prompt": "What conservation ambassador species is this?",
        "term": "Flagship Species",
        "subtitle": "Charismatic Ambassador for Conservation"
      },
      {
        "id": 59,
        "category": "CONSERVATION ZOOLOGY",
        "cardType": "definition",
        "emoji": "🐸",
        "question": "What term describes non-native organisms introduced to a new environment that multiply uncontrollably, lack natural predators, and cause ecological or economic harm?",
        "prompt": "What ecological threat is this?",
        "term": "Invasive Species",
        "subtitle": "Non-Native Ecological Disruptors"
      },
      {
        "id": 60,
        "category": "CONSERVATION ZOOLOGY",
        "cardType": "situational",
        "emoji": "🐸",
        "question": "The Cane Toad was introduced to eat sugarcane beetles, but with no natural predators, its population exploded, poisoning native monitor lizards and depleting local food supplies.",
        "prompt": "What category of harmful organism is the Cane Toad?",
        "term": "Invasive Species",
        "subtitle": "Exotic Invasive Population"
      }
    ]
  },
  {
    "id": "zoology-2",
    "title": "Taxonomy, Phylogeny & Cladistics",
    "badge": "Topic 2",
    "description": "Linnaean hierarchy, binomial nomenclature, phylogenetic trees, ancestral vs derived traits, and cladistic analysis.",
    "icon": "🌿",
    "cards": [
      {
        "id": 1,
        "category": "TAXONOMY BASICS",
        "cardType": "definition",
        "emoji": "🏷️",
        "question": "What is the scientific discipline dedicated to identifying, naming, and classifying living organisms into hierarchical groups?",
        "prompt": "What fundamental branch of biology is this?",
        "term": "Taxonomy",
        "subtitle": "Identification, Naming, & Classification of Species"
      },
      {
        "id": 2,
        "category": "TAXONOMY BASICS",
        "cardType": "analogy",
        "emoji": "📚",
        "question": "Imagine organizing a massive library containing millions of books by giving each book a barcode, author tag, shelf category, and aisle number so anyone worldwide can find it.",
        "prompt": "What scientific organizing discipline is this?",
        "term": "Taxonomy",
        "subtitle": "Universal Biological Cataloging"
      },
      {
        "id": 3,
        "category": "TAXONOMY BASICS",
        "cardType": "situational",
        "emoji": "🌿",
        "question": "A field biologist collects an unnamed flowering orchid in the mountains, documents its floral anatomy, assigns it a formal Latin name, and logs it in the global registry.",
        "prompt": "What scientific discipline is the biologist performing?",
        "term": "Taxonomy",
        "subtitle": "Species Discovery and Classification"
      },
      {
        "id": 4,
        "category": "TAXONOMY BASICS",
        "cardType": "history",
        "emoji": "👨‍🔬",
        "question": "Who was the 18th-century Swedish botanist and physician recognized as the \"Father of Modern Taxonomy\" for establishing binomial nomenclature and nested hierarchies?",
        "prompt": "Which historic Swedish scientist is this?",
        "term": "Carolus Linnaeus (1707–1778)",
        "subtitle": "Father of Modern Taxonomy"
      },
      {
        "id": 5,
        "category": "BINOMIAL NOMENCLATURE",
        "cardType": "definition",
        "emoji": "✍️",
        "question": "What is the formal two-part Latin scientific naming system for living organisms consisting of the Genus name (capitalized) and the specific epithet (lowercase)?",
        "prompt": "What universal biological naming system is this?",
        "term": "Binomial Nomenclature",
        "subtitle": "Two-Part Scientific Naming (Genus + species)"
      },
      {
        "id": 6,
        "category": "BINOMIAL NOMENCLATURE",
        "cardType": "analogy",
        "emoji": "📛",
        "question": "Think of it as a formal First Name (Genus) and Last Name (species) written in universal Latin, so a lion is known as *Panthera leo* by scientists in America, Japan, and the Philippines alike.",
        "prompt": "What naming convention is this?",
        "term": "Binomial Nomenclature",
        "subtitle": "Universal Two-Word Scientific Names"
      },
      {
        "id": 7,
        "category": "BINOMIAL NOMENCLATURE",
        "cardType": "concept",
        "emoji": "📝",
        "question": "How must scientific binomial names always be formatted when printed/typed versus when written by hand?",
        "subtext": "Printed: Italicized (e.g. *Homo sapiens*); Handwritten: Underlined (e.g. Homo sapiens)",
        "prompt": "What are the formal formatting rules for scientific names?",
        "term": "Italicized (Typed) / Underlined (Handwritten)",
        "subtitle": "Binomial Formatting Rules"
      },
      {
        "id": 8,
        "category": "HISTORICAL MILESTONES",
        "cardType": "history",
        "emoji": "📖",
        "question": "What landmark publication by Carolus Linnaeus (10th Edition, published in 1758) is officially recognized as the universal starting point for modern zoological nomenclature?",
        "prompt": "What historic book established formal zoological naming?",
        "term": "Systema Naturae (1758, 10th Edition)",
        "subtitle": "Official Starting Point of Modern Zoological Nomenclature"
      },
      {
        "id": 9,
        "category": "TAXONOMIC HIERARCHY",
        "cardType": "structure",
        "emoji": "🪜",
        "question": "What are the 8 standard taxonomic ranks in order from the broadest, most inclusive level down to the most specific single-species rank?",
        "subtext": "Domain ➔ Kingdom ➔ Phylum ➔ Class ➔ Order ➔ Family ➔ Genus ➔ Species",
        "prompt": "What are the 8 nested ranks of the Linnaean hierarchy?",
        "term": "8-Rank Taxonomic Hierarchy",
        "subtitle": "Domain • Kingdom • Phylum • Class • Order • Family • Genus • Species"
      },
      {
        "id": 10,
        "category": "TAXONOMIC HIERARCHY",
        "cardType": "analogy",
        "emoji": "📫",
        "question": "Imagine a postal mailing address zooming in from Country (Domain) ➔ State (Kingdom) ➔ City (Phylum) ➔ District (Class) ➔ Neighborhood (Order) ➔ Street (Family) ➔ Building (Genus) ➔ Unit Number (Species).",
        "prompt": "What biological organizing framework works like this address system?",
        "term": "Linnaean Taxonomic Hierarchy",
        "subtitle": "Nested Classification Ranks"
      },
      {
        "id": 11,
        "category": "TAXONOMIC RANKS",
        "cardType": "definition",
        "emoji": "👑",
        "question": "What is the highest, broadest, and most inclusive category in modern biological classification, positioned above Kingdom?",
        "prompt": "What is the top-level taxonomic rank?",
        "term": "Domain",
        "subtitle": "Broadest Taxonomic Rank (Bacteria, Archaea, Eukarya)"
      },
      {
        "id": 12,
        "category": "THREE DOMAINS",
        "cardType": "definition",
        "emoji": "🧬",
        "question": "What are the 3 major evolutionary domains of cellular life proposed by Carl Woese based on ribosomal RNA (rRNA) sequence analysis?",
        "subtext": "Domain Bacteria, Domain Archaea, Domain Eukarya",
        "prompt": "What are the Three Domains of Life?",
        "term": "Bacteria • Archaea • Eukarya",
        "subtitle": "The Three-Domain Classification System"
      },
      {
        "id": 13,
        "category": "TAXONOMIC RANKS",
        "cardType": "definition",
        "emoji": "🎯",
        "question": "What is the fundamental, most specific rank of taxonomy, defined as a group of organisms that can interbreed in nature and produce viable, fertile offspring?",
        "prompt": "What is the basic biological unit of classification?",
        "term": "Species",
        "subtitle": "Fundamental Unit of Biological Classification"
      },
      {
        "id": 14,
        "category": "PHYLOGENY",
        "cardType": "definition",
        "emoji": "🌳",
        "question": "What is the scientific study of the evolutionary history and genealogical relationships among individuals, populations, or species?",
        "prompt": "What field of evolutionary biology is this?",
        "term": "Phylogeny",
        "subtitle": "Evolutionary History and Lineage Relationships"
      },
      {
        "id": 15,
        "category": "PHYLOGENY",
        "cardType": "analogy",
        "emoji": "📜",
        "question": "Think of an extensive genealogical family tree that maps out your ancestral roots, grandparents, uncles, and distant cousins over millions of years of history.",
        "prompt": "What evolutionary lineage chart is this?",
        "term": "Phylogenetic Tree (Tree of Life)",
        "subtitle": "Evolutionary Genealogy"
      },
      {
        "id": 16,
        "category": "TREE ANATOMY",
        "cardType": "structure",
        "emoji": "🌱",
        "question": "In a phylogenetic tree diagram, what do we call the baseline lineage at the base of the diagram that represents the ancestral lineage common to all taxa shown?",
        "prompt": "What is the base of a phylogenetic tree called?",
        "term": "Root (Rooted Ancestor)",
        "subtitle": "Common Ancestral Lineage of the Tree"
      },
      {
        "id": 17,
        "category": "TREE ANATOMY",
        "cardType": "structure",
        "emoji": "🔀",
        "question": "In a phylogenetic tree, what does a branch point or node represent where a single lineage divides into two separate evolutionary paths?",
        "prompt": "What evolutionary event does a node signify?",
        "term": "Node (Branch Point / MRCA)",
        "subtitle": "Most Recent Common Ancestor and Lineage Split"
      },
      {
        "id": 18,
        "category": "TREE ANATOMY",
        "cardType": "structure",
        "emoji": "👯",
        "question": "What term describes two biological lineages or species that share an immediate common ancestor with each other that is not shared by any other group?",
        "prompt": "What are these closely related evolutionary pairs called?",
        "term": "Sister Taxa",
        "subtitle": "Closest Evolutionary Relatives"
      },
      {
        "id": 19,
        "category": "TREE ANATOMY",
        "cardType": "structure",
        "emoji": "🔱",
        "question": "In a phylogenetic tree, what is a branch point from which more than two descendant groups emerge simultaneously, indicating an unresolved evolutionary relationship?",
        "prompt": "What is this multi-branching unresolved point called?",
        "term": "Polytomy",
        "subtitle": "Unresolved Multi-Lineage Evolutionary Split"
      },
      {
        "id": 20,
        "category": "TREE ANATOMY",
        "cardType": "structure",
        "emoji": "🐟",
        "question": "What do we call a reference species or group that is known to have diverged before the lineage containing the species being studied, used as a baseline to determine ancestral traits?",
        "prompt": "What reference lineage is used as a baseline in cladistics?",
        "term": "Outgroup (e.g. Lamprey)",
        "subtitle": "Evolutionary Baseline Reference Taxon"
      },
      {
        "id": 21,
        "category": "CLADISTICS",
        "cardType": "definition",
        "emoji": "📐",
        "question": "What biological classification methodology, developed by Willi Hennig, reconstructs evolutionary trees strictly based on shared derived characteristics (synapomorphies)?",
        "prompt": "What phylogenetic classification system is this?",
        "term": "Cladistics (Cladistic Analysis)",
        "subtitle": "Phylogenetic Systematics Pioneered by Willi Hennig"
      },
      {
        "id": 22,
        "category": "CLADISTICS",
        "cardType": "definition",
        "emoji": "⭕",
        "question": "What term describes a valid evolutionary group (clade) that consists of an ancestral species and ALL of its evolutionary descendants without omitting any branch?",
        "prompt": "What is a complete single-ancestor clade called?",
        "term": "Monophyletic Group (Clade)",
        "subtitle": "Ancestor and ALL Descendants (Valid Clade)"
      },
      {
        "id": 23,
        "category": "CLADISTICS",
        "cardType": "analogy",
        "emoji": "✂️",
        "question": "Imagine taking scissors and snipping off a single branch from a tree. If every single twig, leaf, and sprout attached to that branch falls with it, you have cut a complete unit.",
        "prompt": "What type of evolutionary group is this?",
        "term": "Monophyletic Group (Clade)",
        "subtitle": "One Cut = Complete Evolutionary Clade"
      },
      {
        "id": 24,
        "category": "CLADISTICS",
        "cardType": "definition",
        "emoji": "✂️",
        "question": "What term describes an incomplete evolutionary group that consists of a common ancestor and SOME, but not all, of its descendants (e.g. Class Reptilia excluding birds)?",
        "prompt": "What is an incomplete evolutionary grouping called?",
        "term": "Paraphyletic Group",
        "subtitle": "Ancestor and SOME Descendants"
      },
      {
        "id": 25,
        "category": "CLADISTICS",
        "cardType": "definition",
        "emoji": "🧩",
        "question": "What term describes an unnatural group containing distantly related species derived from different lineages that does NOT include their most recent common ancestor?",
        "prompt": "What invalid multi-origin grouping is this?",
        "term": "Polyphyletic Group",
        "subtitle": "Species Grouped Without Their Common Ancestor"
      },
      {
        "id": 26,
        "category": "TRAIT STATES",
        "cardType": "definition",
        "emoji": "🏛️",
        "question": "What is the formal cladistic term for an ancestral character state that was present in the common ancestor and retained unchanged in descendant lineages?",
        "prompt": "What is an ancestral trait called in cladistics?",
        "term": "Plesiomorphy (Ancestral Trait)",
        "subtitle": "Primitive / Ancestral Character State"
      },
      {
        "id": 27,
        "category": "TRAIT STATES",
        "cardType": "definition",
        "emoji": "✨",
        "question": "What is the formal cladistic term for a novel, newly evolved derived character state that differs from the ancestral condition?",
        "prompt": "What is a derived / novel evolutionary trait called?",
        "term": "Apomorphy (Derived Trait)",
        "subtitle": "Novel / Evolved Character State"
      },
      {
        "id": 28,
        "category": "TRAIT STATES",
        "cardType": "definition",
        "emoji": "🤝",
        "question": "What term describes a shared derived character present in an ancestor and shared by two or more descendant taxa, used as the primary evidence to define monophyletic clades?",
        "prompt": "What are shared derived characters called in cladistics?",
        "term": "Synapomorphy",
        "subtitle": "Shared Derived Character (Defines Clades)"
      },
      {
        "id": 29,
        "category": "TRAIT STATES",
        "cardType": "definition",
        "emoji": "🦚",
        "question": "What term describes a unique derived character state that belongs exclusively to a single terminal branch or individual species (e.g. feathers exclusive to birds)?",
        "prompt": "What is a unique derived trait called?",
        "term": "Autapomorphy",
        "subtitle": "Unique Derived Character in a Single Lineage"
      },
      {
        "id": 30,
        "category": "TREE RECONSTRUCTION",
        "cardType": "structure",
        "emoji": "📊",
        "question": "What grid of numbers (0 = ancestral state, 1 = derived state) is created by evolutionary biologists to systematically compare anatomical or genetic traits when building trees?",
        "prompt": "What trait comparison table is this?",
        "term": "Character Matrix",
        "subtitle": "Binary Data Table for Cladistic Analysis"
      },
      {
        "id": 31,
        "category": "APPLIED PHYLOGENY",
        "cardType": "situational",
        "emoji": "🕵️‍♂️",
        "question": "Forensic geneticists sequence DNA from confiscated ivory tusks to build a phylogenetic tree that pinpoints the exact national park where illegal elephant poaching occurred.",
        "prompt": "What applied branch of evolutionary biology is this?",
        "term": "Forensic Phylogenetics",
        "subtitle": "DNA Lineage Tracing for Law Enforcement"
      },
      {
        "id": 32,
        "category": "APPLIED PHYLOGENY",
        "cardType": "situational",
        "emoji": "🦠",
        "question": "Epidemiologists sequence viral genomes from patients across hospitals and construct a phylogenetic tree to trace the exact patient-zero origin and spread of a flu outbreak.",
        "prompt": "What applied phylogenetic technique is this?",
        "term": "Pathogen Outbreak Tracing",
        "subtitle": "Molecular Epidemiology and Virus Tracking"
      }
    ]
  },
  {
    "id": "zoology-3",
    "title": "Cell Structure and Function",
    "badge": "Topic 3",
    "description": "Prokaryotes vs Eukaryotes, plasma membrane, endomembrane system, mitochondria, nucleus, and organelles.",
    "icon": "🔬",
    "cards": [
      {
        "id": 1,
        "category": "CELL TYPES",
        "cardType": "definition",
        "emoji": "🦠",
        "question": "What are structurally simple, single-celled organisms that lack a membrane-bound nucleus and internal compartmentalized organelles?",
        "prompt": "What type of cell is this?",
        "term": "Prokaryotic Cells (Prokaryotes)",
        "subtitle": "Cells Lacking a Membrane-Bound Nucleus"
      },
      {
        "id": 2,
        "category": "CELL TYPES",
        "cardType": "analogy",
        "emoji": "🏢",
        "question": "Imagine a studio apartment where the bed, kitchen, cooking stove, and workspace all share one single open room with no dividing walls or interior doors.",
        "prompt": "What type of simple cell structure is this?",
        "term": "Prokaryotic Cells",
        "subtitle": "Open Intracellular Organization"
      },
      {
        "id": 3,
        "category": "PROKARYOTES",
        "cardType": "structure",
        "emoji": "🧬",
        "question": "Inside a prokaryotic bacterial cell, what is the open, irregular region called where its single circular chromosome of DNA floats freely without a membrane envelope?",
        "prompt": "What is this open bacterial DNA region called?",
        "term": "Nucleoid",
        "subtitle": "Non-Membrane-Bound Region Containing Bacterial DNA"
      },
      {
        "id": 4,
        "category": "PROKARYOTES",
        "cardType": "structure",
        "emoji": "🧫",
        "question": "What are the 3 primary morphological shapes of bacterial cells observed under a microscope?",
        "subtext": "Bacillus (rod-shaped), Coccus (spherical), Spirilla (spiral-shaped)",
        "prompt": "What are the three fundamental shapes of bacteria?",
        "term": "Bacillus • Coccus • Spirilla",
        "subtitle": "Rod • Sphere • Spiral Bacterial Shapes"
      },
      {
        "id": 5,
        "category": "PROKARYOTES",
        "cardType": "definition",
        "emoji": "🌋",
        "question": "Which domain of prokaryotes consists of specialized extremophiles that thrive in harsh habitats like boiling thermal vents (thermophiles) and hyper-salty flats (halophiles)?",
        "prompt": "What domain of extremophile prokaryotes is this?",
        "term": "Domain Archaea",
        "subtitle": "Extremophile Prokaryotes"
      },
      {
        "id": 6,
        "category": "CELL TYPES",
        "cardType": "definition",
        "emoji": "🔬",
        "question": "What are complex cells containing a true membrane-enclosed nucleus and specialized, compartmentalized organelles (found in protists, fungi, plants, and animals)?",
        "prompt": "What category of cells is this?",
        "term": "Eukaryotic Cells (Eukaryotes)",
        "subtitle": "Cells Containing Membrane-Bound Nuclei & Organelles"
      },
      {
        "id": 7,
        "category": "CELL TYPES",
        "cardType": "analogy",
        "emoji": "🏰",
        "question": "Imagine a luxury mansion with dedicated partitioned rooms: a chef's kitchen, a private library, an electrical generator room, and an executive office, each with closed doors.",
        "prompt": "What type of compartmentalized cell is this?",
        "term": "Eukaryotic Cells",
        "subtitle": "Compartmentalized Cellular Architecture"
      },
      {
        "id": 8,
        "category": "PLASMA MEMBRANE",
        "cardType": "definition",
        "emoji": "🛡️",
        "question": "What is the dynamic outer boundary of the cell that encloses the cytoplasm, maintains cellular integrity, and regulates molecular transport?",
        "prompt": "What outer cellular boundary is this?",
        "term": "Plasma Membrane (Cell Membrane)",
        "subtitle": "Outer Cellular Boundary and Permeability Barrier"
      },
      {
        "id": 9,
        "category": "PLASMA MEMBRANE",
        "cardType": "analogy",
        "emoji": "🚧",
        "question": "Think of a high-tech perimeter security fence with automated checkpoints surrounding an entire industrial facility, deciding who enters and exits.",
        "prompt": "What cellular boundary acts like this guarded fence?",
        "term": "Plasma Membrane",
        "subtitle": "The Cell's Protective Security Boundary"
      },
      {
        "id": 10,
        "category": "PLASMA MEMBRANE",
        "cardType": "structure",
        "emoji": "🥪",
        "question": "What double-layered lipid arrangement forms the structural core of the cell membrane, with water-loving (hydrophilic) phosphate heads facing outward and water-hating (hydrophobic) fatty acid tails hidden inside?",
        "prompt": "What double lipid structure is this?",
        "term": "Phospholipid Bilayer",
        "subtitle": "Double Layer of Amphipathic Phospholipids"
      },
      {
        "id": 11,
        "category": "PLASMA MEMBRANE",
        "cardType": "definition",
        "emoji": "🚪",
        "question": "What property of the plasma membrane allows vital nutrients (glucose, amino acids) and respiratory gases ($O_2, CO_2$) to pass while blocking harmful toxins and large polar molecules?",
        "prompt": "What transport regulatory property is this?",
        "term": "Selective Permeability",
        "subtitle": "Regulated Molecular Transit for Homeostasis"
      },
      {
        "id": 12,
        "category": "PLASMA MEMBRANE",
        "cardType": "definition",
        "emoji": "📡",
        "question": "What proteins embedded on the outer surface of the plasma membrane act as biological antennas to bind hormones, neurotransmitters, and signaling molecules from other cells?",
        "prompt": "What membrane signaling components are these?",
        "term": "Membrane Receptor Proteins",
        "subtitle": "Intercellular Communication and Signal Transduction"
      },
      {
        "id": 13,
        "category": "PLASMA MEMBRANE",
        "cardType": "concept",
        "emoji": "🌊",
        "question": "What model describes the plasma membrane as a dynamic, flexible fluid lipid bilayer embedded with a mosaic of drifting proteins, glycoproteins, and cholesterol?",
        "prompt": "What famous biological membrane model is this?",
        "term": "Fluid Mosaic Model",
        "subtitle": "Singer & Nicolson Model of Membrane Structure"
      },
      {
        "id": 14,
        "category": "CYTOPLASM",
        "cardType": "definition",
        "emoji": "🧪",
        "question": "What is the semi-fluid, gelatinous matrix filling the cell interior between the nucleus and plasma membrane where metabolic reactions and glycolysis occur?",
        "prompt": "What intracellular fluid matrix is this?",
        "term": "Cytoplasm (Cytosol)",
        "subtitle": "Gelatinous Intracellular Matrix"
      },
      {
        "id": 15,
        "category": "CYTOPLASM",
        "cardType": "analogy",
        "emoji": "🍮",
        "question": "Imagine the clear gelatin in a fruit jelly mold that holds all the sliced fruits, strawberries, and grapes (organelles) suspended firmly in place.",
        "prompt": "What cellular medium acts like this suspended jelly?",
        "term": "Cytoplasm (Cytosol)",
        "subtitle": "Suspension Medium for Cellular Organelles"
      },
      {
        "id": 16,
        "category": "THE NUCLEUS",
        "cardType": "definition",
        "emoji": "👑",
        "question": "What is the prominent double-membrane organelle that securely stores genetic blueprints (DNA chromosomes) and directs all cellular growth, reproduction, and protein synthesis?",
        "prompt": "What organelle is the genetic command center of the cell?",
        "term": "Nucleus",
        "subtitle": "Genetic Command Center (Houses Genomic DNA)"
      },
      {
        "id": 17,
        "category": "THE NUCLEUS",
        "cardType": "analogy",
        "emoji": "🏛️",
        "question": "Imagine the central city hall or executive headquarters of a manufacturing city where all the master blueprints, laws, and architect designs are locked securely inside a vault.",
        "prompt": "What vital cellular organelle is this?",
        "term": "Nucleus",
        "subtitle": "The Cell's Master Blueprint Vault"
      },
      {
        "id": 18,
        "category": "THE NUCLEUS",
        "cardType": "situational",
        "emoji": "🔬",
        "question": "A molecular geneticist uses a fluorescent blue dye (DAPI) to stain chromosomes and spots them safely encapsulated inside this rounded, double-membrane compartment where transcription takes place.",
        "prompt": "What organelle is the geneticist observing?",
        "term": "Nucleus",
        "subtitle": "Site of DNA Storage and mRNA Transcription"
      },
      {
        "id": 19,
        "category": "THE NUCLEUS",
        "cardType": "structure",
        "emoji": "📦",
        "question": "Inside this organelle, what do you find suspended within the nucleoplasm?",
        "subtext": "Chromatin (DNA wrapped around histone proteins), Nucleolus, and Nuclear Matrix",
        "prompt": "What major structures are housed inside the Nucleus?",
        "term": "Chromatin and Nucleolus",
        "subtitle": "Intranuclear Components"
      },
      {
        "id": 20,
        "category": "THE NUCLEUS",
        "cardType": "structure",
        "emoji": "🚪",
        "question": "What double-membrane barrier perforated with small channel pores wraps around the nucleus to regulate the entry and exit of proteins, RNA, and macromolecules?",
        "prompt": "What is this protective nuclear boundary called?",
        "term": "Nuclear Envelope & Nuclear Pores",
        "subtitle": "Perforated Double Membrane Enclosing the Nucleus"
      },
      {
        "id": 21,
        "category": "THE NUCLEOLUS",
        "cardType": "definition",
        "emoji": "🎾",
        "question": "What dark, dense spherical structure located inside the nucleus is responsible for producing ribosomal RNA (rRNA) and assembling ribosome subunits?",
        "prompt": "What specialized intranuclear structure is this?",
        "term": "Nucleolus",
        "subtitle": "Site of Ribosomal RNA (rRNA) & Ribosome Assembly"
      },
      {
        "id": 22,
        "category": "THE NUCLEOLUS",
        "cardType": "analogy",
        "emoji": "🤖",
        "question": "Imagine a dedicated machine shop inside corporate headquarters whose only job is to build the robotic worker machines (ribosomes) before shipping them to the factory floor.",
        "prompt": "What intranuclear workshop is this?",
        "term": "Nucleolus",
        "subtitle": "Ribosome Assembly Workshop"
      },
      {
        "id": 23,
        "category": "THE NUCLEOLUS",
        "cardType": "structure",
        "emoji": "🧬",
        "question": "Inside this nuclear structure, what two components are synthesized and combined together to assemble large and small ribosome subunits?",
        "subtext": "Ribosomal RNA (rRNA) + Ribosomal Proteins",
        "prompt": "What is manufactured inside the Nucleolus?",
        "term": "Ribosome Subunits (rRNA + Proteins)",
        "subtitle": "Assembled in Nucleolus ➔ Exported to Cytoplasm"
      },
      {
        "id": 24,
        "category": "CENTRAL DOGMA",
        "cardType": "concept",
        "emoji": "🔄",
        "question": "What fundamental biological doctrine explains the flow of genetic information: DNA is transcribed into mRNA inside the nucleus, and mRNA is translated into Protein on ribosomes?",
        "prompt": "What is this core biological process called?",
        "term": "Central Dogma of Molecular Biology",
        "subtitle": "DNA ➔ mRNA (Transcription) ➔ Protein (Translation)"
      },
      {
        "id": 25,
        "category": "RIBOSOMES",
        "cardType": "definition",
        "emoji": "🧵",
        "question": "What are the tiny non-membrane-bound molecular complexes made of rRNA and proteins that carry out protein synthesis by translating mRNA codons into amino acid chains?",
        "prompt": "What protein-making molecular machines are these?",
        "term": "Ribosomes",
        "subtitle": "Sites of Protein Synthesis (Translation)"
      },
      {
        "id": 26,
        "category": "RIBOSOMES",
        "cardType": "analogy",
        "emoji": "🧑‍🍳",
        "question": "Think of tiny hardworking factory chefs who read mRNA recipe cards and stitch amino acid ingredients together into complete protein chains.",
        "prompt": "What cellular protein builders are these?",
        "term": "Ribosomes",
        "subtitle": "Molecular Assembly Workers"
      },
      {
        "id": 27,
        "category": "RIBOSOMES",
        "cardType": "structure",
        "emoji": "📍",
        "question": "In eukaryotic cells, where are ribosomes located? Contrast Free Ribosomes versus Bound Ribosomes.",
        "subtext": "Free: Float in cytosol (make internal proteins); Bound: Attached to Rough ER (make export / membrane proteins)",
        "prompt": "Where are ribosomes located in the cell?",
        "term": "Free Ribosomes vs. Bound Ribosomes",
        "subtitle": "Cytosol vs. Rough Endoplasmic Reticulum"
      },
      {
        "id": 28,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "definition",
        "emoji": "🏗️",
        "question": "What organelle is an extensive network of flattened membranous sacs studded with ribosomes on its outer surface that synthesizes, folds, and modifies proteins for export?",
        "prompt": "What ribosome-studded organelle is this?",
        "term": "Rough Endoplasmic Reticulum (Rough ER)",
        "subtitle": "Ribosome-Studded ER for Protein Synthesis & Folding"
      },
      {
        "id": 29,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "analogy",
        "emoji": "📦",
        "question": "Imagine an industrial assembly line conveyor belt studded with robotic workers that folds, modifies, and packs newly made proteins into transport vesicles for shipping.",
        "prompt": "What organelle operates like this studded assembly line?",
        "term": "Rough Endoplasmic Reticulum",
        "subtitle": "Protein Assembly and Folding Factory"
      },
      {
        "id": 30,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "structure",
        "emoji": "🔎",
        "question": "What gives the Rough Endoplasmic Reticulum its rough, bumpy appearance when viewed under an electron microscope?",
        "prompt": "What structures are attached to the cytoplasmic surface of Rough ER?",
        "term": "Attached Ribosomes",
        "subtitle": "Surface-Bound Protein Synthesis Complexes"
      },
      {
        "id": 31,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "definition",
        "emoji": "🧈",
        "question": "What organelle consists of a network of smooth tubular membranes lacking ribosomes that synthesizes lipids, detoxifies drugs and alcohol, and stores calcium ions (Ca2+)?",
        "prompt": "What ribosome-free endoplasmic reticulum is this?",
        "term": "Smooth Endoplasmic Reticulum (Smooth ER)",
        "subtitle": "Lipid Synthesis, Drug Detoxification, & Calcium Storage"
      },
      {
        "id": 32,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "analogy",
        "emoji": "🧪",
        "question": "Think of an oil and grease refinery combined with a toxic waste neutralization station and a calcium storage warehouse for muscle contractions.",
        "prompt": "What organelle fulfills these lipid and detox roles?",
        "term": "Smooth Endoplasmic Reticulum",
        "subtitle": "Lipid Factory and Hazardous Waste Neutralizer"
      },
      {
        "id": 33,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "situational",
        "emoji": "🍷",
        "question": "In human liver cells, this organelle proliferates and expands rapidly when exposed to high levels of alcohol, barbiturates, or toxins to accelerate metabolic breakdown.",
        "prompt": "What organelle expands to detoxify drugs in liver cells?",
        "term": "Smooth Endoplasmic Reticulum",
        "subtitle": "Hepatic Drug Detoxification Network"
      },
      {
        "id": 34,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "definition",
        "emoji": "🥞",
        "question": "What organelle consists of a stack of 3–20 flattened, curved membranous sacs that receives, chemically modifies, sorts, and packages proteins into vesicles for secretion?",
        "prompt": "What cellular packaging and shipping center is this?",
        "term": "Golgi Apparatus",
        "subtitle": "Cellular Packaging and Shipping Center"
      },
      {
        "id": 35,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "analogy",
        "emoji": "📬",
        "question": "Think of the central post office or Amazon distribution center where packages arrive, receive custom barcodes and address tags, and get loaded into delivery vans.",
        "prompt": "What organelle is the cell's post office?",
        "term": "Golgi Apparatus",
        "subtitle": "Protein Sorting and Secretion Center"
      },
      {
        "id": 36,
        "category": "ENDOMEMBRANE SYSTEM",
        "cardType": "structure",
        "emoji": "🚢",
        "question": "Which face of the Golgi apparatus receives transport vesicles arriving from the ER (receiving dock), and which face ships finished vesicles out toward the plasma membrane (shipping dock)?",
        "subtext": "Cis face = receiving face facing ER; Trans face = shipping face facing plasma membrane",
        "prompt": "What are the two functional faces of the Golgi apparatus?",
        "term": "Cis Face (Receiving) vs. Trans Face (Shipping)",
        "subtitle": "Directional Polarity of Golgi Saccules"
      },
      {
        "id": 37,
        "category": "VESICLES",
        "cardType": "definition",
        "emoji": "🗑️",
        "question": "What are membrane-bound digestive vesicles containing powerful acidic hydrolytic enzymes that break down worn-out organelles, cellular debris, and engulfed bacteria?",
        "prompt": "What digestive waste-disposal organelle is this?",
        "term": "Lysosomes",
        "subtitle": "Acidic Digestive and Waste Disposal Vesicles"
      },
      {
        "id": 38,
        "category": "VESICLES",
        "cardType": "analogy",
        "emoji": "♻️",
        "question": "Imagine the city's recycling crew, garbage incinerator, and hazardous demolition squad that dissolves old worn-out machinery back into raw usable materials.",
        "prompt": "What organelle acts as the cell's recycling crew?",
        "term": "Lysosomes",
        "subtitle": "Intracellular Digestion and Autophagy"
      },
      {
        "id": 39,
        "category": "VESICLES",
        "cardType": "situational",
        "emoji": "🛡️",
        "question": "A human white blood cell engulfs an invading disease-causing bacterium via phagocytosis and fuses the bacterial bubble with this acidic vesicle to dissolve and kill the germ.",
        "prompt": "What organelle dissolves the engulfed bacterium?",
        "term": "Lysosomes",
        "subtitle": "Pathogen Destruction via Acid Hydrolases"
      },
      {
        "id": 40,
        "category": "VESICLES",
        "cardType": "definition",
        "emoji": "🧪",
        "question": "What membrane-bound vesicles contain oxidative enzymes (such as catalase) that break down fatty acids and neutralize dangerous hydrogen peroxide ($H_2O_2$) into water and oxygen?",
        "prompt": "What oxidative detox organelle is this?",
        "term": "Peroxisomes",
        "subtitle": "Breakdown of Fatty Acids & Hydrogen Peroxide"
      },
      {
        "id": 41,
        "category": "VESICLES",
        "cardType": "analogy",
        "emoji": "💥",
        "question": "A specialized hazardous neutralization tank that safely disarms explosive bleach-like chemical poisons ($H_2O_2$) and turns them into harmless water ($H_2O$) and oxygen ($O_2$).",
        "prompt": "What peroxide-neutralizing vesicle is this?",
        "term": "Peroxisomes",
        "subtitle": "Catalase-Mediated Detoxification"
      },
      {
        "id": 42,
        "category": "VESICLES",
        "cardType": "definition",
        "emoji": "💧",
        "question": "What are membrane-bound storage sacs in eukaryotic cells that store water, nutrients, ions, pigments, or metabolic waste products?",
        "prompt": "What cellular storage sac is this?",
        "term": "Vacuoles",
        "subtitle": "Membrane-Bound Cellular Storage Sacs"
      },
      {
        "id": 43,
        "category": "ENERGY ORGANELLES",
        "cardType": "definition",
        "emoji": "⚡",
        "question": "What double-membrane organelle is known as the \"powerhouse of the cell\" because it generates high amounts of ATP energy through aerobic cellular respiration?",
        "prompt": "What organelle produces ATP through aerobic respiration?",
        "term": "Mitochondria (Singular: Mitochondrion)",
        "subtitle": "Powerhouse of the Cell (ATP Synthesis)"
      },
      {
        "id": 44,
        "category": "ENERGY ORGANELLES",
        "cardType": "analogy",
        "emoji": "🏭",
        "question": "Imagine a high-efficiency electrical power plant that burns fuel (glucose) using oxygen to continuously charge millions of universal battery packs (ATP) for the city.",
        "prompt": "What cellular power plant is this?",
        "term": "Mitochondria",
        "subtitle": "The Cell's ATP Energy Generating Station"
      },
      {
        "id": 45,
        "category": "ENERGY ORGANELLES",
        "cardType": "situational",
        "emoji": "🏃‍♂️",
        "question": "A marathon runner's leg muscle cells pack thousands of these organelles to continuously churn out ATP energy through oxygen-dependent aerobic respiration.",
        "prompt": "What organelle is densely packed in high-energy muscle cells?",
        "term": "Mitochondria",
        "subtitle": "Abundant in High-Energy Muscle and Liver Tissues"
      },
      {
        "id": 46,
        "category": "ENERGY ORGANELLES",
        "cardType": "structure",
        "emoji": "〰️",
        "question": "Inside a mitochondrion, what are the deeply folded inner membrane structures called that dramatically increase surface area for the electron transport chain and ATP synthase enzymes?",
        "prompt": "What are the inner membrane folds of mitochondria called?",
        "term": "Cristae (Mitochondrial Cristae)",
        "subtitle": "Folded Inner Membrane for ATP Production"
      },
      {
        "id": 47,
        "category": "ENERGY ORGANELLES",
        "cardType": "concept",
        "emoji": "🔥",
        "question": "What is the balanced biochemical equation for aerobic cellular respiration occurring inside the mitochondria?",
        "subtext": "C6H12O6 + 6O2 ➔ 6CO2 + 6H2O + 36–38 ATP",
        "prompt": "What is the formula for aerobic cellular respiration?",
        "term": "C6H12O6 + 6O2 ➔ 6CO2 + 6H2O + ATP",
        "subtitle": "Aerobic Cellular Respiration Equation"
      },
      {
        "id": 48,
        "category": "CYTOSKELETON",
        "cardType": "definition",
        "emoji": "🕸️",
        "question": "What internal network of protein filaments and microtubules extends throughout the cytoplasm to maintain cell shape, anchor organelles, and facilitate intracellular transit?",
        "prompt": "What structural internal protein network is this?",
        "term": "Cytoskeleton",
        "subtitle": "Internal Structural Framework and Highway System"
      },
      {
        "id": 49,
        "category": "CYTOSKELETON",
        "cardType": "analogy",
        "emoji": "🏗️",
        "question": "Think of the steel scaffolding, load-bearing girders, and internal railway network inside a modern skyscraper that prevents it from collapsing and guides internal elevators.",
        "prompt": "What structural framework is this?",
        "term": "Cytoskeleton",
        "subtitle": "Scaffolding and Motor Highway of the Cell"
      },
      {
        "id": 50,
        "category": "CYTOSKELETON",
        "cardType": "structure",
        "emoji": "📏",
        "question": "What are the 3 major filament types making up the eukaryotic cytoskeleton from thinnest to thickest diameter?",
        "subtext": "Microfilaments (Actin, 7nm) ➔ Intermediate Filaments (8-12nm) ➔ Microtubules (Tubulin, 25nm)",
        "prompt": "What are the three structural fibers of the cytoskeleton?",
        "term": "Microfilaments • Intermediate Filaments • Microtubules",
        "subtitle": "Actin Filaments ➔ Keratin/Lamin ➔ Tubulin Microtubules"
      },
      {
        "id": 51,
        "category": "ORGANELLES",
        "cardType": "function",
        "emoji": "🏗️",
        "question": "What pair of barrel-shaped microtubule structures (arranged in 9 triplets) acts as the main microtubule organizing center to separate chromosomes during cell division (mitosis)?",
        "prompt": "What cell division structures are these?",
        "term": "Centrosomes and Centrioles",
        "subtitle": "Microtubule Organizing Center for Mitotic Spindle"
      },
      {
        "id": 52,
        "category": "SURFACE STRUCTURES",
        "cardType": "structure",
        "emoji": "🏊",
        "question": "What are whip-like or hair-like microtubule projections (9+2 doublet arrangement) on cell surfaces that beat rhythmically to propel whole cells (sperm) or sweep mucus across airways?",
        "prompt": "What cellular motility projections are these?",
        "term": "Cilia and Flagella",
        "subtitle": "Microtubule-Based Cellular Motility Projections"
      },
      {
        "id": 53,
        "category": "SURFACE STRUCTURES",
        "cardType": "structure",
        "emoji": "🧤",
        "question": "What are tiny, finger-like membrane folds on the surface of intestinal epithelial cells that dramatically expand surface area to maximize nutrient absorption?",
        "prompt": "What surface-expanding micro-folds are these?",
        "term": "Microvilli",
        "subtitle": "Finger-Like Folds for Maximum Surface Absorption"
      }
    ]
  }
];
