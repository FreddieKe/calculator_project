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

console.log(operator(2,8,"subtract"));
console.log(operator(2,8,"add"));
console.log(operator(2,8,"multiply"));
console.log(operator(2,8,"divide"));

