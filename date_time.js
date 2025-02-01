// Create a new Date object with the current date and time
let myDate = new Date();

// Log the full string representation of the date and time
console.log(myDate.toString());

// Log the string representation of the date (without time)
console.log(myDate.toDateString());

// Log the locale-specific string representation of the date and time
console.log(myDate.toLocaleString());

// Log the type of the myDate variable, which should be 'object'
console.log(typeof(myDate));

// Create a new Date object for January 24, 2024
let createDate = new Date(2024, 0, 24,5,3);

// Log the string representation of the createDate (without time)
console.log(createDate.toLocaleString());

let cdate=new Date("06-12-2024");

console.log(cdate.toDateString());
console.log(cdate.getTime());


// Creating a date object
let now = new Date();
console.log(now.toString()); // Full date and time
console.log(now.toDateString()); // Date only
console.log(now.toTimeString()); // Time only
console.log(now.toISOString()); // ISO 8601 format

// Getting date components
console.log(now.getFullYear()); // Year
console.log(now.getMonth()); // Month (0-11)
console.log(now.getDate()); // Day of the month
console.log(now.getDay()); // Day of the week (0-6)
console.log(now.getHours()); // Hours
console.log(now.getMinutes()); // Minutes
console.log(now.getSeconds()); // Seconds
console.log(now.getMilliseconds()); // Milliseconds

// Setting date components
now.setFullYear(2024);
now.setMonth(0); // January
now.setDate(24);
console.log(now.toString());

// Using utility methods
console.log(Date.now()); // Current timestamp
console.log(Date.parse("2024-01-24T00:00:00Z")); // Parses a date string
console.log(new Date(Date.UTC(2024, 0, 24)).toString()); // Date in UTC
