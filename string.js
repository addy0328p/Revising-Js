const name="hitesh"
const repoCount= 60


//String interpolation--->>>>

let a = 5;
let b = 10;
let sum = `The sum of a and b is ${a + b}`;
console.log(sum); // Output: The sum of a and b is 15

console.log(typeof(String));

const gameName=new String('adityaap');//will give object
console.log(typeof(gameName));

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


// String slicing
let text = "Hello, World!";
let sliceExample = text.slice(7, 12);  // Extracts characters from index 7 to 11 (12 is not included)
console.log(sliceExample);  // Output: 'World'

// String trimming
let trimmedText = text.trim();  // Removes any leading or trailing whitespace
console.log(trimmedText);  // Output: 'Hello, World!'


// Array slicing
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let slicexample = numbers.slice(2, 5);  // Extracts elements from index 2 to 4 (5 is not included)
console.log(slicexample);  // Output: [30, 40, 50]


// Replace a substring
let tet = "Hello, World!";
let replacedText = tet.replace("World", "Universe");
console.log(replacedText);  // Output: 'Hello, Universe!'

// Replace using a regular expression
let textWithDuplicates = "Hello, World! Hello, Everyone!";
let replacedTextRegex = textWithDuplicates.replace(/Hello/g, "Hi");
console.log(replacedTextRegex);  // Output: 'Hi, World! Hi, Everyone!'


// Replace an element in an array
let number = [10, 20, 30, 40, 50];
numbers[2] = 35;  // Replace element at index 2 (30) with 35
console.log(number);  // Output: [10, 20, 35, 40, 50]

