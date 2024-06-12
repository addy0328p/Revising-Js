// Initializing different data types
let str = "123";
let num = 123;
let bool = true;
let arr = [1, 2, 3];
let obj = { a: 1, b: 2 };
let n = null;
let u = undefined;

// Converting String to Number and Boolean
let strToNum = Number(str);
let strToBool = Boolean(str);
console.log(typeof strToNum, strToNum); // number 123
console.log(typeof strToBool, strToBool); // boolean true

// Converting Number to String and Boolean
let numToStr = String(num);
let numToBool = Boolean(num);
console.log(typeof numToStr, numToStr); // string "123"
console.log(typeof numToBool, numToBool); // boolean true

// Converting Boolean to String and Number
let boolToStr = String(bool);
let boolToNum = Number(bool);
console.log(typeof boolToStr, boolToStr); // string "true"
console.log(typeof boolToNum, boolToNum); // number 1

// Converting Array to String and Boolean
let arrToStr = String(arr);
let arrToBool = Boolean(arr);
console.log(typeof arrToStr, arrToStr); // string "1,2,3"
console.log(typeof arrToBool, arrToBool); // boolean true

// Converting Object to String and Boolean
let objToStr = String(obj);
let objToBool = Boolean(obj);
console.log(typeof objToStr, objToStr); // string "[object Object]"
console.log(typeof objToBool, objToBool); // boolean true

// Converting null to String, Number, and Boolean
let nullToStr = String(n);
let nullToNum = Number(n);
let nullToBool = Boolean(n);
console.log(typeof nullToStr, nullToStr); // string "null"
console.log(typeof nullToNum, nullToNum); // number 0
console.log(typeof nullToBool, nullToBool); // boolean false

// Converting undefined to String, Number, and Boolean
let undefToStr = String(u);
let undefToNum = Number(u);
let undefToBool = Boolean(u);
console.log(typeof undefToStr, undefToStr); // string "undefined"
console.log(typeof undefToNum, undefToNum); // number NaN
console.log(typeof undefToBool, undefToBool); // boolean false




// Summary
// Strings can be converted to numbers and booleans.
// Numbers can be converted to strings and booleans.
// Booleans can be converted to strings and numbers.
// Arrays can be converted to strings and sometimes to numbers.
// Objects can be converted to strings and booleans.
// null and undefined can be converted to strings, numbers, and booleans.   


console.log("1" + 2 + 2); // "122"
console.log("1" + "2" + 2); // "122"
console.log(1 + 2 + "2"); // "32"

console.log(+true); // 1
console.log(+""); // 0

//PREFIX AND POSTFIX -->>>

// Initializing variables
let x = 5;
let y = 5;
let z;

// Using prefix in an expression
console.log("Prefix in Expression:");
z = ++x + 2; // x is incremented to 6, then 6 + 2 = 8 is assigned to z
console.log(`x: ${x}, z: ${z}`); // x: 6, z: 8

// Resetting variables
x = 5;
y = 5;

// Using postfix in an expression
console.log("Postfix in Expression:");
z = y++ + 2; // y is first used as 5, so 5 + 2 = 7 is assigned to z, then y is incremented to 6
console.log(`y: ${y}, z: ${z}`); // y: 6, z: 7

// Using prefix in a loop
console.log("Prefix in Loop:");
for (let i = 0; i < 3; ++i) {
    console.log(`i: ${i}`); // i increments before the loop body
}

// Using postfix in a loop
console.log("Postfix in Loop:");
for (let j = 0; j < 3; j++) {
    console.log(`j: ${j}`); // j increments after the loop body
}

// Combining prefix and postfix in one expression
console.log("Combining Prefix and Postfix:");
let p = 10;
let q = 10;
let combinedResult = ++p + q++;
console.log(`p: ${p}, q: ${q}, combinedResult: ${combinedResult}`); // p increments before addition, q increments after

// Using prefix and postfix with array indexing
console.log("Prefix and Postfix with Array Indexing:");
let ar = [10, 20, 30, 40];
let index = 0;
console.log(arr[++index]); // 20: index is incremented before accessing array
console.log(arr[index++]); // 20: index is accessed, then incremented

console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

 


// Loose Equality (==)
console.log(5 == "5"); // true: The string "5" is converted to the number 5 before comparison.
console.log(null == undefined); // true: null and undefined are considered equal when using ==.
console.log(false == 0); // true: false is converted to 0 before comparison.

// Strict Equality (===)
console.log(5 === "5"); // false: The types are different (number and string).
console.log(null === undefined); // false: The types are different (object and undefined).
console.log(false === 0); // false: The types are different (boolean and number).
console.log(5 === 5); // true: Both the value and type are the same.
