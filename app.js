const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};
 

const multiply = function(num1, num2) {
	return num1 * num2
};

const divide = function(num1, num2) {
	return num1 / num2
};

const power = function(num1,num2) {
  return num1 ** num2
};
 
 
const operate = function(operation, num1, num2){
    switch(operation){
        case "add":
            return add(num1,num2)
        case "subtract":
            return subtract(num1,num2)
        case "multiply":
            return multiply(num1,num2)
        case "divide":
            return divide(num1,num2)
    }
}

console.log(operate("add",1,2))
console.log(operate("subtract",1,2))
console.log(operate("multiply",1,2))
console.log(operate("divide",1,2))