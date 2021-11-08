const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop()); // expected output: "tomato"
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage"]

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

// using apply()

var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped); // 'sturgeon'