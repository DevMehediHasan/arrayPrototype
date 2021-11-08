const num = [10, 5, 7, 15]
const num2 = num.map(x => x * 2)
console.log(num2);
// another way for console
console.log(num.map(x => x * 2));

//Mapping an array of numbers to an array of square roots
let numbers = [-1, 2, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
console.log(roots);