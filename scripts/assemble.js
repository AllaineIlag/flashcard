const fs = require('fs');
const topic1 = require('./topic1.js');
const topic2 = require('./topic2.js');
const topic3 = require('./topic3.js');

const topics = [topic1, topic2, topic3];

const totalCards = topics.reduce((acc, t) => acc + t.cards.length, 0);

const fileContent = `import { Deck } from '@/types/flashcard';

export const TOPICS: Deck[] = ${JSON.stringify(topics, null, 2)};
`;

fs.writeFileSync('data/topics.ts', fileContent, 'utf8');
console.log(`Successfully compiled data/topics.ts with ${totalCards} total cards across ${topics.length} topics!`);
topics.forEach(t => console.log(` - ${t.title}: ${t.cards.length} cards`));
