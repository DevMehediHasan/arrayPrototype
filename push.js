const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count); // expected output: 4
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals); // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// Merging two arrays
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']