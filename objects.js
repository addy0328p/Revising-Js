// Define a symbol for use as a unique property key
const mySym = Symbol("key1");

// Create an object using object literals
const JsUser = {
    name: "Aditya",
    "full name": "Aditya Pandey", // Property with space in the name
    [mySym]: "mykey1", // Property with a symbol as the key
    age: 18,
    location: "lko",
    email: "addy@google.com",
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



// *********************OBJECTS-PART-2*************************




// Creating an empty object using object literal notation
// const tinderUser = new Object()
const tinderUser = {};

// Adding properties to the tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Log the tinderUser object to the console
// console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Accessing nested properties
// console.log(regularUser.fullname.userfullname.firstname); // Output: hitesh

// Creating objects obj1, obj2, and obj4
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Merging obj1, obj2, and obj4 into a new object obj3 using spread operator
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = { ...obj1, ...obj2 };

// Log the merged object to the console
// console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2, // Changed to 2 to avoid duplicate id
        email: "h2@gmail.com" // Changed to avoid duplicate email
    },
    {
        id: 3, // Changed to 3 to avoid duplicate id
        email: "h3@gmail.com" // Changed to avoid duplicate email
    }
];

// Accessing the email property of the second user
// console.log(users[1].email); // Output: h2@gmail.com

// Log the tinderUser object to the console
// console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Getting and logging the keys, values, and entries of the tinderUser object
// console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // Output: [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// Checking if the tinderUser object has a property 'isLoggedIn'
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "addy"
};

// Destructuring the course object to extract the courseInstructor property
const { courseInstructor: instructor } = course;

// Log the instructor variable to the console
// console.log(courseInstructor); // Error: courseInstructor is not defined
console.log(instructor); // Output: hitesh

// Example of JSON-like object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Example of an array of empty objects
[
    {},
    {},
    {}
]
