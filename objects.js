// Define a symbol for use as a unique property key
const mySym = Symbol("key1");

// Create an object using object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // Property with space in the name
    [mySym]: "mykey1", // Property with a symbol as the key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] // Array as a property value
};

// Accessing properties using dot notation and bracket notation
// console.log(JsUser.email); // Output: hitesh@google.com
// console.log(JsUser["email"]); // Output: hitesh@google.com
// console.log(JsUser["full name"]); // Output: Hitesh Choudhary
// console.log(JsUser[mySym]); // Output: mykey1

// Updating the email property
JsUser.email = "hitesh@chatgpt.com";

// Freezing the object to prevent further modifications
// Object.freeze(JsUser);

// Attempt to update the email property after freezing the object
// This will not work if the object is frozen
JsUser.email = "hitesh@microsoft.com";

// console.log(JsUser); // Output: {name: "Hitesh", "full name": "Hitesh Choudhary", [Symbol(key1)]: "mykey1", age: 18, location: "Jaipur", email: "hitesh@chatgpt.com", isLoggedIn: false, lastLoginDays: Array(2)}

// Adding a method to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

// Adding another method that uses the 'this' keyword to access object properties
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling the methods
console.log(JsUser.greeting()); // Output: Hello JS user
console.log(JsUser.greetingTwo()); // Output: Hello JS user, Hitesh
