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