const score = 400; // Initialize a constant variable 'score' with the value 400
console.log(score); // Log the value of 'score' to the console

const balance = new Number(100); // Create a Number object 'balance' with the value 100
console.log(balance); // Log the 'balance' object to the console
console.log(balance.toString()); // Convert 'balance' to a string and log it to the console
console.log(balance.toFixed(2)); // Format 'balance' to 2 decimal places and log it to the console

const sf = 23.432; // Initialize a constant variable 'sf' with the value 23.432
console.log(sf.toPrecision(3)); // Format 'sf' to a string with 3 significant digits and log it to the console

const hundreds = 100000; // Initialize a constant variable 'hundreds' with the value 100000
console.log(hundreds.toLocaleString('en-IN')); // Format 'hundreds' as a localized string for India (en-IN) and log it to the console





// Log the Math object to see all available properties and methods
console.log(Math);

// Get the absolute value of -4, which is 4
console.log(Math.abs(-4));

// Round 4.6 to the nearest integer, which is 5
console.log(Math.round(4.6));

// Round 4.3 up to the nearest integer, which is 5
console.log(Math.ceil(4.3));

// Round 4.9 down to the nearest integer, which is 4
console.log(Math.floor(4.9));

// Find the minimum value among the provided numbers, which is 4
console.log(Math.min(4, 42, 5, 32, 422, 4));

// Define the range for the random number generation
const min = 10;
const max = 20;

// Generate a random integer between min (10) and max (20) inclusive
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
