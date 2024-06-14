 // Creating a user object with properties and a method
const user = {
    username: "hitesh", // username property
    price: 999, // price property

    // Method to log a welcome message and the user object itself
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // 'this' refers to the user object
    }
}

// Calling the welcomeMessage method
// user.welcomeMessage()

// Changing the username property of the user object
// user.username = "sam"

// Calling the welcomeMessage method again to see the updated username
// user.welcomeMessage()

// Logging the global 'this' context (in browsers, it's the window object)
// console.log(this);

// Function to demonstrate 'this' keyword behavior in regular functions
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // 'this' refers to the global object (undefined in strict mode)
// }

// Calling the chai function
// chai()

// The same function as above but assigned to a variable (same behavior)
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // 'this' refers to the global object (undefined in strict mode)
// }

// Arrow function to demonstrate 'this' keyword behavior in arrow functions
const chai = () => {
    let username = "hitesh"
    console.log(this); // 'this' refers to the enclosing context (lexical scoping)
}

// Calling the chai arrow function
// chai()

// Different ways of defining an arrow function to add two numbers
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Simplified arrow function with implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// Another way to write the arrow function with implicit return
// const addTwo = (num1, num2) => ( num1 + num2 )

// Arrow function returning an object literal (wrapped in parentheses)
const addTwo = (num1, num2) => ({username: "hitesh"})

// Logging the result of the addTwo function call
console.log(addTwo(3, 4)) // { username: 'hitesh' }

// Example array
// const myArray = [2, 5, 3, 7, 8]

// Placeholder for the forEach method
// myArray.forEach()
