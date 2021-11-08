// const array1 = [5, 8, 12, 130, 150];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i ==0) {
            return false
        }
    }
    return num > 1
}
console.log([4, 6, 8, 9, 12].findIndex(isPrime));
console.log([4, 6, 7, 9, 12].findIndex(isPrime));

//Find index using arrow function

const fruites = ['apple', 'banana', 'orange']

const index = fruites.findIndex(fruite => fruite === 'orange')

console.log(index);