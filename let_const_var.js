// NEVER USE VAR IN JAVASCRIPT ALWAYS USE const and Let




// Using var
var x = 10;
{
  var x = 20; // This re-declares the variable x
}
console.log(x); // Outputs 20

// Using let
let y = 10;
{
  let y = 20; // This creates a new variable y scoped to this block
}
console.log(y); // Outputs 10

// Using const
const z = 10;
// z = 20; // This would throw an error because you cannot reassign a const variable


//- **`var`**: Original variable declaration keyword in JavaScript. Has function scope, can be re-declared and updated, and is hoisted to the top of its function or global scope.
  
//- **`let`**: Introduced in ES6. Has block scope, can be updated but not re-declared within the same scope, and is not hoisted.

//- **`const`**: Introduced in ES6. Also has block scope, must be initialized with a value and cannot be reassigned, but does not imply immutability of the value it holds. Not hoisted.