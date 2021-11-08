const fruits = ['mango', 'banana', 'apple', 'orange', 'pineapple']

const result = fruits.filter(fruit => fruit.length > 7)
console.log(result);

//Filtering out all small values

function isBigEnough(value){
    return value >= 10
}
let filtered = [8, 10, 12, 20, 25].filter(isBigEnough)
console.log(filtered);

//Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num){
    for (let i = 2; num > i; i++ ) {
        if (num % 2 == 0){
         return false
        }
    }
    return num > 1
}
console.log(array.filter(isPrime));