let firstNum = ''
let secondNum = ''
let currentOperation = ''
let shouldResetScreen = false

const numButtons = document.querySelectorAll("[calculator-number")
const operatorButtons = document.querySelectorAll("[calculator-operator]")
const equalBtn = document.getElementById("equalBtn")
const pointBtn = document.getElementById("pointBtn")
const deleteBtn = document.getElementById("deleteBtn")
const clearBtn = document.getElementById("clearBtn")
const previousScreen = document.getElementById("previousScreen")
const nowScreen = document.getElementById("nowScreen")

window.addEventListener("keydown",handleKeyboardInput)
equalBtn.addEventListener("click",evaluate)
pointBtn.addEventListener("click",appendPoint)
deleteBtn.addEventListener("click",deleteNumber)
clearBtn.addEventListener("click",clear)

numButtons.forEach((button)=>
    button.addEventListener("click", ()=> appendNumber(button.textContent)) 
    )

operatorButtons.forEach((button)=>
    button.addEventListener("click",() => setOperation(button.textContent))
)

function appendNumber(number){
    if (nowScreen.textContent === '0' || shouldResetScreen) resetScreen()
    nowScreen.textContent += number
}

function resetScreen(){
    nowScreen.textContent = ''
    shouldResetScreen = false
}

function clear(){
    nowScreen.textContent = '0'
    previousScreen.textContent = ''
    firstNum = ''
    secondNum = ''
    currentOperation = ''
}

function appendPoint(){
    if (shouldResetScreen) resetScreen()
    if (nowScreen === '') nowScreen.textContent = '0'
    if (nowScreen.textContent.includes('.')) return
    nowScreen.textContent += '.'
}

function deleteNumber(){
    nowScreen.textContent = nowScreen.textContent
                .toString()
                .slice(0,-1)
}

function setOperation(operator){
    if (currentOperation !== '') evaluate ()
    firstNum = nowScreen.textContent
    currentOperation = operator  
    previousScreen.textContent = `${firstNum} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate(){
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && nowScreen.textContent === '0'){
        alert (`You can't divide by 0!`)
        return
    }
    secondNum = nowScreen.textContent 
    nowScreen.textContent = roundNumber(
        operate(currentOperation, firstNum, secondNum)
    )
    previousScreen.textContent = `${firstNum} ${currentOperation} ${secondNum}`
    currentOperation = null
}

function roundNumber(number){
    return Math.round (number*1000)/1000
}

function handleKeyboardInput(e){
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key === 'Enter')  evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') reset()
    if (e.key === "+" || e.key === '-' || e.key === '*' || e.key === '/'){
        setOperation(convertOperation(e.key))
    }
}

function convertOperation(keyboardOperator){
    if (keyboardOperator === "+") return "+"
    if (keyboardOperator === "-") return "-"
    if (keyboardOperator === "*") return "x"
    if (keyboardOperator === "/") return "÷"
}

function add (num1, num2) {
	return num1 + num2
};

function subtract(num1, num2) {
	return num1 - num2
};
 

function multiply(num1, num2) {
	return num1 * num2
};

function divide(num1, num2) {
	return num1 / num2
};
 
function operate(operation, num1, num2){
    num1 = Number(num1)
    num2 = Number (num2)
    switch(operation){
        case "+":
            return add(num1,num2)
        case "-":
            return subtract(num1,num2)
        case "x":
            return multiply(num1,num2)
        case "÷":
            if (num2===0) return null
            return divide(num1,num2)
        default:
            return null
    }
}
 