
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
    if (numAsString.includes('.')) { //checks if number is integer
        let decimalLength = numAsString.split('.')[1].length
        if (decimalLength < dpLimit 
            && decimalLength > 0
        ) {
            firstNum = Number(Number(numAsString).toFixed(decimalLength));  
        } if (decimalLength >= dpLimit) {
            firstNum = Number(Number(numAsString).toFixed(dpLimit)); //limits to max number of dp
        }
    }
}

let evaluateToDisplay = function() { //updates running total
    firstNum = operator(firstNum, secondNum, activeOperator);
    decimalLimit();
    display.textContent = firstNum;
    secondNum = ""; 
}

let updateVariables = function() { //changes relevant variable to what is on display
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
    expectNewCalculation = false;
}

//variables for input a, input b, and the operator

let firstNum = "";
let secondNum = "";
let activeOperator = "";
let displayValue = "";
let expectSecondNum = false;
let expectNewCalculation = false;
let newDisplay = false;
const dpLimit = 9;
let numbers = [0,1,2,3,4,5,6,7,8,9];

let buttons = document.querySelectorAll("button")
let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let display = document.querySelector(".display");
let clearButton = document.querySelector("#clear");
let equalsButton = document.querySelector("#equals");
let decimalButton = document.querySelector("#decimal");
let delButton = document.querySelector("#del");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (expectNewCalculation === true) {    //checks if last operation pressed was equals, in which case new calculation required
            clearDisplay();
            clearValues();
        }
        if (newDisplay === true) {
            clearDisplay();
            newDisplay = false;
        } display.textContent += button.textContent.trim(); //trim to remove spacing from html
        updateVariables(); 
})})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        expectNewCalculation = false; //tells number buttons that last operation pressed was not equals
        if (!expectSecondNum) { //checks if second variable to be updated or total
            expectSecondNum = true; 
        } else {
            if (typeof(secondNum) === "number") { //checks if there is a valid second number
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
    expectNewCalculation = true; //tells number buttons that last operation pressed was equals
})

decimalButton.addEventListener("click", () => {
    if (!display.textContent.includes(".")) { //check if number on screen already has a decimal
        display.textContent += ".";
        updateVariables();
}})

delButton.addEventListener("click", () => {
    if (expectNewCalculation === true) {    //checks if last operation pressed was equals, in which case new calculation required
        clearDisplay();
        clearValues();
    } else {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    updateVariables();}
})

addEventListener("keydown", (e) => {
    // activates buttons if corresponding key is pressed
    switch(e.key) {
        case "1":
            document.querySelector("#one").click();
            break;
        case "2":
            document.querySelector("#two").click();
            break;
        case "3":
            document.querySelector("#three").click();
            break;
        case "4":
            document.querySelector("#four").click();
            break;
        case "5":
            document.querySelector("#five").click();
            break;
        case "6":
            document.querySelector("#six").click();
            break;
        case "7":
            document.querySelector("#seven").click();
            break;
        case "8":
            document.querySelector("#eight").click();
            break;
        case "9":
            document.querySelector("#nine").click();
            break;
        case "0":
            document.querySelector("#nought").click();
            break;
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
        case ".":
            decimalButton.click();
            break;
}})

//add effects for button presses
buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
        button.style.border = "3px solid #fff685"})
    button.addEventListener("mouseup", () => {
        button.style.border = "3px solid  #0049B7";})
    button.addEventListener("mouseleave", () => {
        button.style.border = "3px solid  #0049B7";
})})


