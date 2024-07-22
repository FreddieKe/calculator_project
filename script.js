
//mathematical functions

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let arraySum = array.reduce((total, current) => {
    return total + current;
  }, 0)
  return arraySum;
};

const multiply = function(a,b) {
  return a * b
};

const divide = function(a,b) {
  return a / b;
};  

const power = function(num, pow) {
  return num ** pow;
};

const operator = function(a,b,operator) {
    switch(operator) {
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
    }
} 

//variables for input a, input b, and the operator

let firstNum = "";
let secondNum = "";
let activeOperator = "";
let displayValue = "";
let expectSecondNum = false;
let newDisplay = false;

let numberButtons = document.querySelectorAll(".numbers button");
let operatorButtons = document.querySelectorAll(".operator-button");
let display = document.querySelector(".display");
let clearButton = document.querySelector("#clear");
let equalsButton = document.querySelector("#equals");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (newDisplay === true) {
            clearDisplay();
            newDisplay = false;
        } display.textContent += button.textContent.trim();
        if (expectSecondNum === false) {
            firstNum = Number(display.textContent);
        } else {
            secondNum = Number(display.textContent);
        }
})})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeOperator = button.id;
        if (!expectSecondNum) {
            expectSecondNum = true;
        }
        newDisplay = true;
})})

let clearDisplay = function () {
    display.textContent = "";
}

clearButton.addEventListener("click", () => {
    clearDisplay();
    firstNum = "";
    secondNum = "";
    activeOperator = "";
    displayValue = "";
    expectSecondNum = false;
});

equalsButton.addEventListener("click", () => {
    display.textContent = operator(firstNum, secondNum, activeOperator);
    firstNum = Number(display.textContent);
})