
var grammar = tracery.createGrammar({
  'origin': ['#tweet#'],
  'tweet': [
    'Born on this day in #year#, #person# was a talented #profession# and is often credited with the discovery of #discovery#.',
    '#profession.s.capitalize# have uncovered an incredible number of #object.s# from the mid Jurassic in a quarry in #place#.'
  ],
  'year': ['1804', '1749', '1903', '2018'],
  'person': ['Bobson Dugnutt', 'Jeromy Gride', 'Sleve McDichael'],
  'profession': ['botanist', 'entomologist', 'mycologist'],
  'object': ['fossil', 'mushroom', 'crystal'],
  'place': ['Peru', 'Antarctica', 'Dagenham'],
  'discovery': ['apples', 'glove compartments', 'salt and vinegar crisps'],
});
 
grammar.addModifiers(tracery.baseEngModifiers); 
 
const text = (grammar.flatten('#origin#'));

const textEl = document.querySelector('.js-text');
textEl.innerHTML = text;