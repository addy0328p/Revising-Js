// Create an array with initial values
const arr = [3, 42, 3, 2, 1, 34, 13];

// A shallow copy of an object or array copies the top-level properties. 
// However, if any of those properties are references to other objects or arrays, 
// the references themselves are copied, meaning the inner objects are shared between the original and the copy.

// Create a new array using the Array constructor
const arr2 = new Array(1, 2, 3);

// Log the value at index 2 of arr2, which is 3
console.log(arr2[2]);

// ARRAY METHODS---->>>>>>

// Add the element 46 to the end of arr2
arr2.push(46);

// Add the element 4 to the end of arr2
arr2.push(4);

// Remove the last element from arr2
arr2.pop();

// Add the element 9 to the beginning of arr2
arr2.unshift(9);

// Add the element 1231 to the beginning of arr2
arr2.unshift(1231);

// Remove the first element from arr2
arr2.shift();

// Log the current state of arr2
console.log(arr2);

// Check if arr2 includes the element 14, which it doesn't, so it returns false
console.log(arr2.includes(14));

// Find the index of the element 3 in arr2, which is 2
console.log(arr2.indexOf(3));

// Join all elements of arr2 into a string, separated by commas
const arr4 = arr2.join();

// Log the current state of arr2
console.log(arr2);

// Log the type of arr2, which is 'object' because arrays are objects in JavaScript
console.log(typeof(arr2));



// Create an array with initial values
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use slice to create a new array from index 2 to 5 (5 not included)
const slicedArray = originalArray.slice(2, 5);

// Log the sliced array, which is [3, 4, 5]
console.log(slicedArray);

// Log the original array to show it hasn't been modified
console.log(originalArray);


// Create an array with initial values
const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use splice to remove 3 elements starting from index 2
const deletedElements = initialArray.splice(2, 3);

// Log the array containing the removed elements, which is [3, 4, 5]
console.log(deletedElements);

// Log the modified initialArray to show it has been changed
console.log(initialArray);

// Use splice to add elements at index 2
initialArray.splice(2, 0, 'a', 'b', 'c');

// Log the modified array, which is now [1, 2, 'a', 'b', 'c', 6, 7, 8, 9]
console.log(initialArray);

// Use splice to replace elements at index 4
initialArray.splice(4, 2, 'x', 'y');

// Log the modified array, which is now [1, 2, 'a', 'b', 'x', 'y', 7, 8, 9]
console.log(initialArray);

//   IMP---------->>>>>>Effect on Original Array: The splice method modifies the original array.
//                                                The slice method does not modify the original array.



// Arrays of Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Commented out code that pushes the dc_heros array into marvel_heros array, resulting in a nested array
// marvel_heros.push(dc_heros);

// Uncomment the next two lines to see the effect of the above push
// console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // Output: "flash"

// Concatenating marvel_heros and dc_heros into a new array allHeros
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Using spread operator to combine marvel_heros and dc_heros into a new array all_new_heros
const all_new_heros = [...marvel_heros, ...dc_heros];

// Uncomment the next line to see the combined array
// console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Nested array example
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening the nested array to a single-level array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // Output: false

// Creating an array from a string (each character becomes an array element)
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]

// Trying to create an array from an object (interesting result as it returns an empty array)
console.log(Array.from({name: "hitesh"})); // Output: []

// Defining some score variables
let score1 = 100;
let score2 = 200;
let score3 = 300;

// Creating an array from the scores using Array.of
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]

