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

let a = null;
let b = null;
let c = null;


let numberButtons = document.querySelectorAll(".numbers button");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
})

let clearDisplay = function () {
    display.textContent = "";
}

let display = document.querySelector(".display");
let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    clearDisplay();
});


    
