let num1 = 8
let num2 = 3
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl=document.getElementById("sum-el")
function add() {
    sumEl.textContent = "Sum:" + (num1 + num2)
   // sumEl.textContent = "Sum:" + num1 + num2
}
let subEl=document.getElementById("sub-el")
function substract()
{
subEl.textContent="Sub:"+(num1-num2)
}
let divEl=document.getElementById("div-el")

function divide() {
    if(num2!=0)
    {
    divEl.textContent="Div:"+(num1/num2)
    }
    else
    {
        divEl.textContent="Error: Division by zero"
    }
}

let mulEl=document.getElementById("mul-el")

function multiply() {
    mulEl.textContent="Mul:"+(num1*num2)
}
