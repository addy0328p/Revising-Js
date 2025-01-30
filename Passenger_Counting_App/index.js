// Initialize count to keep track of the number of people counted
let count = 0

// Get references to the HTML elements for displaying saved counts and current count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// Function to increment the count and update the displayed value
function increment() {
    count += 1  // Increase count by 1
    countEl.textContent = count  // Update the count display
}

// Function to save the current count and reset it
function save() {
    let countStr = count + " - "  // Create a string representation of the count
    saveEl.textContent += countStr  // Append the count to the saved list (Fixed the mistake)
    
    // Reset the count and update the display
    countEl.textContent = 0
    count = 0
}

// Log a message to the console
console.log("Let's count people on the subway!")
