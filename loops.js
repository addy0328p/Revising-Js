// Simple for loop from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // Uncomment the next line to print a special message when element is 5
        // console.log("5 is best number");
    }
    // Uncomment the next line to print the value of element in each iteration
    // console.log(element);
}

// The following line would cause an error because `element` is block scoped and not accessible here
// console.log(element);

// Nested for loop example: outer loop runs from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Uncomment the next line to print the value of the outer loop variable
    // console.log(`Outer loop value: ${i}`);
   
    // Inner loop runs from 1 to 10
    for (let j = 1; j <= 10; j++) {
        // Uncomment the next lines to print the inner loop variable and the product of i and j
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Array iteration example
let myArray = ["flash", "batman", "superman"];
// Uncomment the next line to print the length of the array
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // Uncomment the next line to print each element of the array
    // console.log(element);
}

// Break and continue example

// Using break in a loop to stop iteration when index is 5
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break; // Exit the loop when index is 5
//     }
//     console.log(`Value of i is ${index}`);
// }

// Using continue in a loop to skip iteration when index is 5
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skip the rest of the loop body when index is 5
    }
    console.log(`Value of i is ${index}`);
}



const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")