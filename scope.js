// Example demonstrating block scope with let and const
// var c = 300 // var is function-scoped, commented out for clarity
let a = 300; // a is declared with let in the global scope
if (true) {
    let a = 10; // a is re-declared within the block scope
    const b = 20; // b is declared with const within the block scope
    // console.log("INNER: ", a); // Output: 10
}

// The outer 'a' remains unchanged
// console.log(a); // Output: 300

// b is not accessible outside the block
// console.log(b); // Uncaught ReferenceError: b is not defined

// c is accessible here if declared with var in the global scope
// console.log(c); // Output: 300 if var c is uncommented


// Example demonstrating function scope and closures
function one() {
    const username = "hitesh"; // username is scoped to the one function

    function two() {
        const website = "youtube"; // website is scoped to the two function
        console.log(username); // Output: hitesh (closure allows access to parent's scope)
    }
    // website is not accessible here
    // console.log(website); // Uncaught ReferenceError: website is not defined

    two(); // Call the inner function two
}

// one(); // Call the outer function one

// Example demonstrating nested if statements and block scope
if (true) {
    const username = "hitesh"; // username is scoped to the outer if block
    if (username === "hitesh") {
        const website = " youtube"; // website is scoped to the inner if block
        // console.log(username + website); // Output: hitesh youtube
    }
    // website is not accessible outside the inner if block
    // console.log(website); // Uncaught ReferenceError: website is not defined
}

// username is not accessible outside the if block
// console.log(username); // Uncaught ReferenceError: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function declarations are hoisted
console.log(addone(5)); // Output: 6

function addone(num) {
    return num + 1;
}

// Function expressions are not hoisted
// This will throw an error because addTwo is not defined at the time of the call
// addTwo(5); // Uncaught ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};
