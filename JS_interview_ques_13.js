// A higher-order function is a function that either:
// 1. Takes one or more functions as arguments (callbacks).
// 2. Returns a function as its result.

// Higher-order function that returns another function
function createMultiplier(multiplier) {
    return function (num) {  // The returned function takes a number as input
        return num * multiplier; // Multiplies the input number by the multiplier
    };
}

// Creating specific multiplier functions using createMultiplier
const double = createMultiplier(2); // Function to multiply a number by 2
const triple = createMultiplier(3); // Function to multiply a number by 3

// Using the created functions
console.log(double(5));  // Output: 10 (5 * 2)
console.log(triple(5));  // Output: 15 (5 * 3)

// Example of a built-in higher-order function: .map()

const numbers = [1, 2, 3, 4, 5]; // An array of numbers

// Using .map() to apply a function to each element in the array
const squared = numbers.map(num => num * num); // Squaring each number

console.log(squared);  // Output: [1, 4, 9, 16, 25]

// The .map() function is a built-in higher-order function in JavaScript.
// It takes a function as an argument and applies it to each element in the array.

// Higher-order functions make JavaScript code more reusable and modular!
