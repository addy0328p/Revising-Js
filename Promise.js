// Creating a new promise
const promiseOne = new Promise(function(resolve, reject){
    // Simulate an async task using setTimeout
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // Resolving the promise after the async task is done
    }, 1000);
});

// Consuming the promise
promiseOne.then(function(){
    console.log("Promise consumed");
});

// Creating another promise
new Promise(function(resolve, reject){
    // Simulate another async task
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); // Resolving the promise after the async task is done
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});

// Creating a third promise that resolves with user data
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}); // Resolving with user data
    }, 1000);
});

// Consuming the third promise
promiseThree.then(function(user){
    console.log(user); // Logging the user data
});

// Creating a fourth promise that may resolve or reject based on a condition
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "hitesh", password: "123"}); // Resolving with user data
        } else {
            reject('ERROR: Something went wrong'); // Rejecting with an error message
        }
    }, 1000);
});

// Consuming the fourth promise
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error){
        console.log(error); // Handling any errors
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

// Creating a fifth promise that may resolve or reject based on a condition
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"}); // Resolving with user data
        } else {
            reject('ERROR: JS went wrong'); // Rejecting with an error message
        }
    }, 1000);
});

// Consuming the fifth promise using async/await
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response); // Logging the response if resolved
    } catch (error) {
        console.log(error); // Handling any errors
    }
}

consumePromiseFive();

// Example of fetching data from an API using fetch
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json(); // Parsing the JSON response
    })
    .then((data) => {
        console.log(data); // Logging the fetched data
    })
    .catch((error) => console.log(error)); // Handling any errors

// Commented out async function to fetch all users from an API
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();
