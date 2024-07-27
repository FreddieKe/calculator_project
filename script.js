
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
    if (b === 0) {
        return "ERROR";
    }
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

let decimalLimit = function() {
    let numAsString = firstNum.toString();
    if (numAsString.includes('.')) {
        let decimalLength = numAsString.split('.')[1].length
        if (decimalLength < dpLimit
            && decimalLength > 0
        ) {
            firstNum = Number(Number(numAsString).toFixed(decimalLength));
        } if (decimalLength >= dpLimit) {
            firstNum = Number(Number(numAsString).toFixed(dpLimit));
        }
    }
}

let evaluateToDisplay = function() {
    firstNum = operator(firstNum, secondNum, activeOperator);
    decimalLimit();
    display.textContent = firstNum;
    secondNum = "";
}

let updateVariables = function() {
    if (expectSecondNum === false) {
        firstNum = Number(display.textContent);
    } else {
        secondNum = Number(display.textContent);
    }
}

let clearValues = function() {
    firstNum = "";
    secondNum = "";
    activeOperator = "";
    displayValue = "";
    expectSecondNum = false;
}

//variables for input a, input b, and the operator

let firstNum = "";
let secondNum = "";
let activeOperator = "";
let displayValue = "";
let expectSecondNum = false;
let newDisplay = false;
const dpLimit = 9;
let numbers = [0,1,2,3,4,5,6,7,8,9];

let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let display = document.querySelector(".display");
let clearButton = document.querySelector("#clear");
let equalsButton = document.querySelector("#equals");
let decimalButton = document.querySelector("#decimal");
let delButton = document.querySelector("#del");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (newDisplay === true) {
            clearDisplay();
            newDisplay = false;
        } display.textContent += button.textContent.trim();
        updateVariables();
})})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!expectSecondNum) {
            expectSecondNum = true;
        } else {
            if (typeof(secondNum) === "number") { 
            evaluateToDisplay();
        }}
        newDisplay = true;
        activeOperator = button.id;
})})

let clearDisplay = function () {
    display.textContent = "";
}

clearButton.addEventListener("click", () => {
    clearDisplay();
    clearValues();
});

equalsButton.addEventListener("click", () => {
    evaluateToDisplay();
})

decimalButton.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
        updateVariables();
}})

delButton.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    updateVariables();
})

addEventListener("keydown", (e) => {
    console.log(e.key);
    if (numbers.includes(Number(e.key))) {
        if (newDisplay === true) {
            clearDisplay();
            newDisplay = false;
        } display.textContent += e.key;
        updateVariables();
    } switch(e.key) {
        case "Backspace":
            delButton.click();
            break;
        case "=":
            equalsButton.click();
            break;
        case "Enter":
            equalsButton.click();
            break;
        case "/":
            document.querySelector("#divide").click();
            break;
        case "*":
            document.querySelector("#multiply").click();
            break;
        case "-":
            document.querySelector("#subtract").click();
            break;
        case "+":
            document.querySelector("#add").click();
            break;
}})