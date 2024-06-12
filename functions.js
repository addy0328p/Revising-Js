// Function declaration named 'sayMyName' that logs each letter of the name to the console
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Call the 'sayMyName' function to print the name
// sayMyName()

// Function declaration named 'addTwoNumbers' that takes two parameters: number1 and number2
// It returns the sum of number1 and number2
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2;
}

// Call the 'addTwoNumbers' function with arguments 3 and 5, and store the result in a variable
const result = addTwoNumbers(3, 5);

// Log the result to the console
// console.log("Result: ", result);


// Function declaration named 'loginUserMessage' that takes an optional parameter 'username'
// It returns a login message or a prompt to enter a username
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Call 'loginUserMessage' with and without an argument and log the result
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


// Function declaration named 'calculateCartPrice' that takes two fixed parameters and a rest parameter
// It returns an array of additional arguments
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// Call 'calculateCartPrice' with multiple arguments and log the result
// console.log(calculateCartPrice(200, 400, 500, 2000))

// Define an object 'user' with properties 'username' and 'prices'
const user = {
    username: "hitesh",
    prices: 199
};

// Function declaration named 'handleObject' that takes an object as a parameter
// It logs the username and price from the object
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Call 'handleObject' with the 'user' object and a new object literal
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
});

// Define an array 'myNewArray' with some values
const myNewArray = [200, 400, 100, 600];

// Function declaration named 'returnSecondValue' that takes an array as a parameter
// It returns the second element of the array
function returnSecondValue(getArray) {
    return getArray[1];
}

// Call 'returnSecondValue' with 'myNewArray' and a new array, and log the result
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400
