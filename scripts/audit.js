const topic1 = require('./topic1.js');
const topic2 = require('./topic2.js');
const topic3 = require('./topic3.js');

const topics = [topic1, topic2, topic3];

console.log('=== DEFAULT PRE-LOADED TOPICS AUDIT ===');
let total = 0;
let errors = 0;

topics.forEach((d, i) => {
  console.log(`Topic ${i + 1}: ${d.title}`);
  console.log(` - Badge: ${d.badge}`);
  console.log(` - Icon: ${d.icon}`);
  console.log(` - Total Cards: ${d.cards.length}`);
  total += d.cards.length;

  const cardTypes = {};
  d.cards.forEach((c, ci) => {
    cardTypes[c.cardType || 'unknown'] = (cardTypes[c.cardType || 'unknown'] || 0) + 1;
    if (!c.question || !c.term) {
      console.error(` ❌ Error: Card #${ci + 1} missing question or term!`);
      errors++;
    }
  });
  console.log(` - Card Breakdown:`, JSON.stringify(cardTypes));
  console.log('');
});

console.log(`TOTAL PRE-LOADED TOPICS: ${topics.length}`);
console.log(`TOTAL PRE-LOADED CARDS: ${total}`);
console.log(`TOTAL ERRORS FOUND: ${errors}`);
