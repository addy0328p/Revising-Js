// An array of numbers
const numbers = [1, 2, 3, 4, 5];  

// Using the map() function to create a new array where each element is doubled
const double = numbers.map(num => num * 2);  

// Printing the new array with doubled values
console.log(double);  // Output: [2, 4, 6, 8, 10]

// Printing the original array to show that it remains unchanged
console.log(numbers);  // Output: [1, 2, 3, 4, 5]

/*
  Explanation of map():
  - The .map() function is used to create a new array by applying a function to each element of the original array.
  - It does NOT modify the original array; instead, it returns a new array with transformed values.
  - Common use cases include: modifying array values, extracting properties from objects, formatting data, etc.
*/

// Example: Converting an array of temperatures from Celsius to Fahrenheit
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit);  // Output: [32, 50, 68, 86]
