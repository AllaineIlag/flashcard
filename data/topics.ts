import { Deck } from '@/types/flashcard';

export const TOPICS: Deck[] = [
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
        analogy: 'Nanggaling ang salitang ito sa dalawang salitang Griyego: <b>"zoon"</b> na ang ibig sabihin ay <i>animal (hayop)</i>, at <b>"logos"</b> na ang ibig sabihin ay <i>to study (pag-aaral)</i>.',
        prompt: 'Ano ang pinagmulang salita at etymology ng branch of science na ito?',
        term: 'Zoology (Etymology)',
        subtitle: 'Greek: zoon (animal) + logos (to study)',
        takeaway: 'Ang Zoology ay literal na nangangahulugang "The study of animals". Ito ang pangunahing sangay ng Biology na nakatutok sa lahat ng uri ng hayop.'
      },
      {
        id: 2,
        category: 'DEFINITIONS',
        emoji: '🔬',
        analogy: 'Ito ang malawak na sangay ng <b>Biology</b> na nakatuon sa siyentipikong pag-aaral ng kaharian ng mga hayop (Kingdom Animalia), kasama ang kanilang structure, behavior, physiology, classification, at evolution.',
        prompt: 'Anong pangunahing sangay ng agham ito?',
        term: 'Zoology',
        subtitle: 'Scientific Study of Animals',
        takeaway: 'Zoology is the branch of biology concerned with the study of animals, from single-celled protozoa to complex vertebrates like humans.'
      },
      {
        id: 3,
        category: 'KINGDOM ANIMALIA',
        emoji: '🧬',
        analogy: 'Ang mga hayop ay may mga sumusunod na katangian: gawa sa maraming cells (<b>Multicellular</b>), may true nucleus (<b>Eukaryotic</b>), kumakain ng ibang organismo dahil hindi kayang gumawa ng sariling pagkain (<b>Heterotrophic</b>), at may kakayahang gumalaw (<b>Motile</b>).',
        prompt: 'Anong pangkalahatang katangian ang pinagsasaluhan ng mga miyembro ng Kingdom Animalia?',
        term: 'Characteristics of Animals',
        subtitle: 'Multicellular, Eukaryotic, Heterotrophic, Motile',
        takeaway: 'Lahat ng hayop ay Heterotrophs (consumers), Eukaryotic (may membrane-bound nucleus), at karaniwang may differentiated tissues para sa iba\'t ibang functions.'
      },
      {
        id: 4,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🏛️',
        analogy: 'Noong Ancient Period, ginamit ng sikat na Greek philosopher na ito ang <b>Empiricism</b> (observation) para uriin ang mga hayop batay sa kanilang Tirahan (aquatic vs terrestrial), Mode of reproduction, at kung may Pula silang Dugo o wala.',
        prompt: 'Sinong sinaunang philosopher / scientist ang tinutukoy dito?',
        term: 'Aristotle (Ancient Period)',
        subtitle: 'Father of Zoology / Early Empiricist',
        takeaway: 'Si Aristotle ang unang nag-classify ng animals nang sistematiko batay sa observable physical traits (habitat, reproduction, and blood presence).'
      },
      {
        id: 5,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '📜',
        analogy: 'Sa panahong ito, ang kaalaman tungkol sa mga hayop ay nakabatay lamang sa mga <b>simbolikong teksto (Bestiaries)</b> at doktrina ng simbahan, sa halip na aktwal na siyentipikong eksperimento o dissection.',
        prompt: 'Anong yugto sa kasaysayan ng Zoology ito?',
        term: 'Middle Ages (Bestiaries & Authority)',
        subtitle: 'Authority-Based Knowledge & Symbolic Animals',
        takeaway: 'Sa Middle Ages, limitado ang anatomical study dahil sa religious restrictions; ang mga hayop ay inilalarawan ayon sa religious/moral symbolism sa bestiaries.'
      },
      {
        id: 6,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🎨',
        analogy: 'Sa panahong ito muling sumigla ang siyensya: naging katanggap-tanggap na ang <b>pag-dissect ng katawan</b>, gumamit ng detalyadong illustrated anatomical drawings, at nagsimula ang paghahambing ng internal structures ng iba\'t ibang hayop.',
        prompt: 'Anong historical period ang nagpaunlad sa Comparative Anatomy?',
        term: 'Renaissance Period',
        subtitle: 'Rise of Dissection & Comparative Anatomy',
        takeaway: 'Renaissance brought empirical dissections, highly accurate scientific illustrations, and comparative anatomical studies between species.'
      },
      {
        id: 7,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🏷️',
        analogy: 'Noong 18th Century, ipinakilala niya ang <b>Binomial Nomenclature</b> (dalawang-salitang scientific name: <i>Genus species</i>, tulad ng <i>Homo sapiens</i>) at ang hierarchical system ng classification (Kingdom hanggang Species).',
        prompt: 'Sinong Swedish botanist/zoologist ang gumawa ng classification system na ito?',
        term: 'Carl Linnaeus (Linnaean Systematics)',
        subtitle: 'Binomial Nomenclature (Genus + species)',
        takeaway: 'Linnaeus standardized biological taxonomy into a universal two-part naming system (e.g. Canis lupus) and hierarchical ranks (Kingdom → Phylum → Class → Order → Family → Genus → Species).'
      },
      {
        id: 8,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '🧭',
        analogy: 'Noong 19th Century, ipinaliwanag niya kung paano nag-aadapt ang mga hayop sa kanilang paligid sa pamamagitan ng <b>Natural Selection</b>—kung saan ang mga traits na pabor sa survival ay mas naipapasa sa susunod na henerasyon.',
        prompt: 'Sinong scientist ang nagpanukala ng Theory of Evolution by Natural Selection?',
        term: 'Charles Darwin (Evolution)',
        subtitle: 'Natural Selection & Adaptation',
        takeaway: 'Darwin explained how species diversify and adapt: traits that enhance survival and reproduction become more common in a population over generations.'
      },
      {
        id: 9,
        category: 'HISTORICAL ZOOLOGY',
        emoji: '💻',
        analogy: 'Sa kasalukuyang panahon, ang zoology ay lumipat mula sa simpleng paglalarawan (descriptive) patungo sa <b>hypothesis-driven science</b> na gumagamit ng Molecular Genetics, Bioinformatics (computer analysis ng DNA), at advanced imaging.',
        prompt: 'Anong era sa kasaysayan ng Zoology ang inilalarawan dito?',
        term: 'Modern Age Zoology',
        subtitle: 'Hypothesis-Driven, Molecular & Bioinformatics',
        takeaway: 'Modern zoology integrates DNA sequencing, digital imaging, and computational tools to understand animal life at molecular, genetic, and ecological levels.'
      },
      {
        id: 10,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '📐',
        analogy: 'Ito ang sangay ng zoology na nakatutok sa pag-aaral ng <b>panlabas na anyo, hugis, at external physical structure</b> ng katawan ng mga hayop.',
        prompt: 'Anong subfield ng structural zoology ito?',
        term: 'Morphology',
        subtitle: 'Study of External Form & Structure',
        takeaway: 'Morphology examines the outward shape, size, color, patterns, and external features (e.g. limbs, wings, body segments) of organisms.'
      },
      {
        id: 11,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '🫀',
        analogy: 'Ito ang sangay na nag-aaral sa <b>panloob na istruktura (internal structure)</b> ng mga hayop—tulad ng puso, baga, bituka, at iba pang organs at organ systems sa pamamagitan ng dissection.',
        prompt: 'Anong subfield ng structural zoology ito?',
        term: 'Anatomy',
        subtitle: 'Study of Internal Structures & Organs',
        takeaway: 'Anatomy focuses on the internal organization and spatial arrangement of organs and body systems (e.g. circulatory, nervous, digestive systems).'
      },
      {
        id: 12,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '🔬',
        analogy: 'Ito ang microscopic study ng mga <b>tissues (mga grupo ng cells na may magkakatulad na function)</b> ng hayop—tulad ng muscle tissue, nervous tissue, at epithelial tissue.',
        prompt: 'Anong branch ng structural zoology ang microscopic study ng tissues?',
        term: 'Histology',
        subtitle: 'Microscopic Study of Animal Tissues',
        takeaway: 'Histology examines thin slices of animal tissues under a microscope to study their cell composition and microscopic architecture.'
      },
      {
        id: 13,
        category: 'STRUCTURAL ZOOLOGY',
        emoji: '🧫',
        analogy: 'Ito ang sangay na nakatuon sa pag-aaral ng <b>mismong cells</b>—ang kanilang internal organelles, cell membrane, division, at kung paano gumagana ang single cell ng hayop.',
        prompt: 'Anong subfield ng structural zoology ang study of cells?',
        term: 'Cytology (Cell Biology)',
        subtitle: 'Study of Cell Structure & Function',
        takeaway: 'Cytology studies the fundamental unit of life: the animal cell, its organelles (mitochondria, nucleus), and cellular processes.'
      },
      {
        id: 14,
        category: 'FUNCTIONAL ZOOLOGY',
        emoji: '⚡',
        analogy: 'Ito ang sangay na nag-aaral kung paano <b>aktwal na gumagana</b> ang mga mechanical, physical, at biochemical processes ng katawan ng hayop (hal. digestion, respiration, circulation, muscle contraction).',
        prompt: 'Anong subfield ng zoology ang nag-eexamine sa "structure-to-function"?',
        term: 'Animal Physiology',
        subtitle: 'Study of Body Functions & Processes',
        takeaway: 'Physiology explores how organs and biochemical systems work together to sustain life, following the core theme of "structure to function".'
      },
      {
        id: 15,
        category: 'PHYSIOLOGY CONCEPTS',
        emoji: '⚖️',
        analogy: 'Ito ang kakayahan ng katawan ng hayop na <b>mapanatiling balance at stable ang internal conditions</b> (tulad ng body temperature, blood sugar, at hydration) kahit na nagbabago ang lamig o init sa labas.',
        prompt: 'Anong mahalagang biological concept ang tawag sa internal balance na ito?',
        term: 'Homeostasis',
        subtitle: 'Maintenance of Stable Internal Balance',
        takeaway: 'Homeostasis is the active regulation of internal physical and chemical conditions (e.g. sweating when hot, shivering when cold) to stay alive.'
      },
      {
        id: 16,
        category: 'DEVELOPMENTAL ZOOLOGY',
        emoji: '🥚',
        analogy: 'Ito ang pag-aaral sa pagbuo at paglaki ng hayop mula sa <b>pagkaka-fertilize ng itlog hanggang sa maging embryo at fetus</b> bago ipanganak o mapisa.',
        prompt: 'Anong subfield ng developmental zoology ito?',
        term: 'Embryology',
        subtitle: 'Study of Embryos & Fetal Development',
        takeaway: 'Embryology investigates the early stages of animal development, from zygote cleavage and tissue differentiation to the formation of a fetus.'
      },
      {
        id: 17,
        category: 'DEVELOPMENTAL ZOOLOGY',
        emoji: '🧬',
        analogy: 'Ito ang siyentipikong pag-aaral sa <b>heredity (pagpapamana ng katangian)</b> at mga genetic variations mula sa mga magulang na hayop papunta sa kanilang mga supling.',
        prompt: 'Anong subfield ng biology at zoology ito?',
        term: 'Genetics',
        subtitle: 'Study of Heredity & Gene Variations',
        takeaway: 'Genetics examines how genes and chromosomes pass biological traits and variations across animal generations.'
      },
      {
        id: 18,
        category: 'BEHAVIORAL ZOOLOGY',
        emoji: '🦅',
        analogy: 'Ito ang siyentipikong pag-aaral sa <b>natural na pag-uugali (behavior)</b> ng mga hayop sa kanilang natural habitat—tulad ng mating rituals, paniningil ng teritoryo, migration, at communication.',
        prompt: 'Anong subfield ng zoology ang nakatutok sa animal behavior?',
        term: 'Ethology',
        subtitle: 'Scientific Study of Animal Behavior',
        takeaway: 'Ethology studies innate and learned animal behaviors under natural environmental conditions and interprets them through natural selection.'
      },
      {
        id: 19,
        category: 'ECOLOGICAL ZOOLOGY',
        emoji: '🌿',
        analogy: 'Ito ang pag-aaral sa <b>ugnayan ng mga hayop sa kanilang kapaligiran</b> at sa iba pang organismo—kasama ang food chains, population dynamics, at energy flow.',
        prompt: 'Anong sangay ng zoology ang tinatawag ding Animal Ecology?',
        term: 'Ecological Zoology (Animal Ecology)',
        subtitle: 'Animals and Their Environment',
        takeaway: 'Ecological Zoology connects physiology and behavior with environmental factors to guide wildlife conservation and ecosystem management.'
      },
      {
        id: 20,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🐜',
        analogy: 'Ito ang specialized na sangay ng systematic zoology na nakatuon lamang sa siyentipikong pag-aaral ng mga <b>insekto (Insects)</b> tulad ng langgam, bubuyog, paruparo, at salagubang.',
        prompt: 'Anong sangay ng zoology ang pag-aaral ng insekto?',
        term: 'Entomology',
        subtitle: 'Study of Insects',
        takeaway: 'Entomology is the study of insects, which make up over half of all known living organisms on Earth.'
      },
      {
        id: 21,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🐍',
        analogy: 'Ito ang sangay ng zoology na nag-aaral sa dalawang grupo ng hayop: ang mga <b>Reptiles</b> (ahas, bayawak, pagong) at <b>Amphibians</b> (palaka, salamander).',
        prompt: 'Anong sangay ng zoology ang pag-aaral ng reptiles at amphibians?',
        term: 'Herpetology',
        subtitle: 'Study of Reptiles & Amphibians',
        takeaway: 'Herpetology covers ectothermic (cold-blooded) tetrapods, including both non-avian reptiles and amphibians.'
      },
      {
        id: 22,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🦜',
        analogy: 'Ito ang specialized branch ng zoology na nakatutok sa pag-aaral ng mga <b>ibon (Birds)</b>—kanilang mga pakpak, huni, migration routes, at pugad.',
        prompt: 'Anong sangay ng zoology ang pag-aaral ng ibon?',
        term: 'Ornithology',
        subtitle: 'Study of Birds',
        takeaway: 'Ornithology focuses on all aspects of avian biology, including flight mechanics, bird song, nesting, and ecological roles.'
      },
      {
        id: 23,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🐟',
        analogy: 'Ito ang sangay ng zoology na nakalaan para sa pag-aaral ng lahat ng uri ng <b>isda (Fishes)</b>—mula sa jawless fish, cartilaginous fish (pating), hanggang bony fish.',
        prompt: 'Anong sangay ng zoology ang pag-aaral ng isda?',
        term: 'Ichthyology',
        subtitle: 'Study of Fishes',
        takeaway: 'Ichthyology is the branch of zoology devoted to the study of fish species living in freshwater and marine environments.'
      },
      {
        id: 24,
        category: 'TAXONOMIC BRANCHES',
        emoji: '🪱',
        analogy: 'Ito ang sangay na nag-aaral sa mga <b>parasitic worms (mga bulate)</b> tulad ng tapeworms, roundworms, at flukes na maaaring manirahan sa loob ng katawan ng tao at hayop.',
        prompt: 'Anong sangay ng zoology ang pag-aaral ng parasitic worms?',
        term: 'Helminthology',
        subtitle: 'Study of Parasitic Worms (Helminths)',
        takeaway: 'Helminthology studies parasitic flatworms, roundworms, and tapeworms that cause significant medical and veterinary diseases.'
      },
      {
        id: 25,
        category: 'MEDICAL ZOOLOGY',
        emoji: '🦟',
        analogy: 'Ito ang tawag sa hayop (karaniwang insekto tulad ng lamok na <i>Aedes aegypti</i> o pulgas) na <b>nagdadala at nagpapadala ng mikrobyo o pathogen</b> papunta sa ibang host nang hindi siya mismo nagkakasakit.',
        prompt: 'Anong medical zoology concept ang tagapagdala ng sakit na ito?',
        term: 'Disease Vector',
        subtitle: 'Transmits Pathogens Between Hosts',
        takeaway: 'A Disease Vector (e.g. mosquitoes spreading Dengue/Malaria, fleas spreading Plague) carries and transmits infectious pathogens to human or animal hosts.'
      },
      {
        id: 26,
        category: 'MEDICAL ZOOLOGY',
        emoji: '🦇',
        analogy: 'Ito ang mga nakakahawang sakit na <b>natural na naililipat mula sa hayop papunta sa tao</b> (at pabalik), tulad ng Rabies, COVID-19, Bird Flu, at Monkeypox.',
        prompt: 'Anong uri ng sakit ang tawag sa animal-to-human transmitted diseases?',
        term: 'Zoonotic Diseases (Zoonoses)',
        subtitle: 'Diseases Transmitted from Animals to Humans',
        takeaway: 'Zoonotic diseases originate in animal reservoirs and cross the species barrier to infect human populations.'
      },
      {
        id: 27,
        category: 'MEDICAL ZOOLOGY',
        emoji: '🐀',
        analogy: 'Ito ang mga hayop (tulad ng <b>Rats, Mice, Zebrafish, at Primates</b>) na ginagamit ng mga siyentipiko sa laboratoryo para pag-aralan ang mga sakit ng tao at mag-test ng bagong gamot dahil sa biological similarity nila sa atin.',
        prompt: 'Anong tawag sa mga test subjects na hayop na ito sa research?',
        term: 'Animal Models',
        subtitle: 'Surrogate Animals in Biomedical Research',
        takeaway: 'Animal models provide crucial insights into human genetics, physiology, and pharmacology before human clinical trials.'
      },
      {
        id: 28,
        category: 'AGRICULTURAL ZOOLOGY',
        emoji: '🐍',
        analogy: 'Sa halip na gumamit ng nakalalasong pesticide chemicals, gumagamit ang mga magsasaka ng <b>natural na predator o parasite</b> (hal. pagpapakawala ng ahas para ubusin ang daga/palaka sa palayan) upang kontrolin ang dami ng peste.',
        prompt: 'Anong agricultural method ang paggamit ng natural predators na ito?',
        term: 'Biological Control (Biocontrol)',
        subtitle: 'Using Natural Predators to Manage Pests',
        takeaway: 'Biological control is an eco-friendly pest management strategy using natural enemies (predators, parasitoids, or pathogens) to suppress pest populations.'
      },
      {
        id: 29,
        category: 'CONSERVATION ZOOLOGY',
        emoji: '🐒',
        analogy: 'Ito ang tawag sa isang uri ng hayop na <b>matatagpuan lamang sa isang partikular at limitadong geographic area</b> sa buong mundo at wala kahit saan pa (halimbawa: Philippine Tarsier sa Bohol/Leyte).',
        prompt: 'Anong tawag sa species na restricted lang sa isang lugar?',
        term: 'Endemic Species',
        subtitle: 'Species Restricted to a Specific Location',
        takeaway: 'Endemic species are unique to a defined geographic region (e.g. an island or country) and are especially vulnerable to extinction if their local habitat is destroyed.'
      },
      {
        id: 30,
        category: 'CONSERVATION ZOOLOGY',
        emoji: '🦦',
        analogy: 'Ito ang tawag sa isang hayop na may <b>napakalaking epekto sa buong ecosystem</b> kahit kaunti lang ang dami nila (hal. Sea otters na kumakain ng sea urchins para hindi maubos ang giant kelp forests). Kapag nawala sila, babagsak ang buong tirahan.',
        prompt: 'Anong ecological term ang tawag sa napakahalagang species na ito?',
        term: 'Keystone Species',
        subtitle: 'Disproportionately Large Ecological Impact',
        takeaway: 'A Keystone Species plays a critical role in holding an entire ecological community together; removing it causes drastic cascading changes in the ecosystem.'
      },
      {
        id: 31,
        category: 'CONSERVATION ZOOLOGY',
        emoji: '🐼',
        analogy: 'Ito ang mga <b>sikat, cute, o kahanga-hangang hayop</b> (tulad ng Giant Panda o Philippine Eagle) na ginagamit bilang "poster animal" o ambassador upang hikayatin ang publiko at makalikom ng pondo para sa kalikasan.',
        prompt: 'Anong uri ng flagship conservation category ito?',
        term: 'Flagship Species',
        subtitle: 'Charismatic Ambassador for Conservation',
        takeaway: 'Flagship species are iconic animals used by conservationists to capture public sympathy, generate funds, and protect entire habitat networks.'
      },
      {
        id: 32,
        category: 'THREATS TO BIODIVERSITY',
        emoji: '🐸',
        analogy: 'Ito ang mga <b>dayuhang organismo (hindi tubong doon)</b> na ipinasok ng tao sa bagong lugar, at dahil walang natural na predator, mabilis silang dumami at inagawan o kinain ang mga native species (halimbawa: Cane Toad sa Pilipinas).',
        prompt: 'Anong threat to biodiversity ang inilalarawan dito?',
        term: 'Invasive Species',
        subtitle: 'Non-native Organisms Causing Ecological Harm',
        takeaway: 'Invasive species outcompete native wildlife for food and space, spread diseases, and alter habitats, leading to biodiversity loss.'
      }
    ]
  },
  {
    id: 'topic-2',
    title: 'Zoology — Topic 2 (Ready for Upload)',
    badge: 'Topic 2',
    description: 'Paste or upload your second lecture PPT/notes to generate the next 30-card deck.',
    icon: '📘',
    cards: [
      {
        id: 1,
        category: 'TOPIC 2 PLACEHOLDER',
        emoji: '📘',
        analogy: 'Ito ang slot para sa pangalawang topic ng iyong subject. I-share lang ang iyong PPT o notes upang awtomatikong mag-generate ng buong deck.',
        prompt: 'Handa ka na bang i-review ang Topic 2?',
        term: 'Topic 2 Deck',
        subtitle: 'Awaiting Second Lecture Content',
        takeaway: 'Send your second presentation file to populate this deck with custom flashcards.'
      }
    ]
  },
  {
    id: 'topic-3',
    title: 'Zoology — Topic 3 (Ready for Upload)',
    badge: 'Topic 3',
    description: 'Paste or upload your third lecture PPT/notes to generate the next deck.',
    icon: '📗',
    cards: [
      {
        id: 1,
        category: 'TOPIC 3 PLACEHOLDER',
        emoji: '📗',
        analogy: 'Ito ang slot para sa pangatlong topic ng iyong subject. I-share lang ang iyong PPT o notes upang awtomatikong mag-generate ng buong deck.',
        prompt: 'Handa ka na bang i-review ang Topic 3?',
        term: 'Topic 3 Deck',
        subtitle: 'Awaiting Third Lecture Content',
        takeaway: 'Send your third presentation file to populate this deck with custom flashcards.'
      }
    ]
  }
];
