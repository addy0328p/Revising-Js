// Function to generate a random color in hexadecimal format
const randomColor = function () {
    const hex = '0123456789ABCDEF'; // String containing all hexadecimal characters
    let color = '#'; // Start of the color string
    for (let i = 0; i < 6; i++) { // Loop to generate 6 hexadecimal characters
      color += hex[Math.floor(Math.random() * 16)]; // Append a random character from the hex string
    }
    return color; // Return the generated color
};
  
let intervalId; // Variable to store the interval ID

// Function to start changing the background color at intervals
const startChangingColor = function () {
    if (!intervalId) { // Check if the interval is not already set
      intervalId = setInterval(changeBgColor, 1000); // Set an interval to change background color every second
    }
  
    // Function to change the background color
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor(); // Set the background color to a random color
    }
};

// Function to stop changing the background color
const stopChangingColor = function () {
    clearInterval(intervalId); // Clear the interval
    intervalId = null; // Reset the interval ID
};
  
// Add event listener to the "Start" button to start changing color on click
document.querySelector('#start').addEventListener('click', startChangingColor);
  
// Add event listener to the "Stop" button to stop changing color on click
document.querySelector('#stop').addEventListener('click', stopChangingColor);
