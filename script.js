const buttons = document.querySelectorAll("button"); // Selects all buttons
const display = document.querySelector("#display"); // Selects the display input field

let currentInput = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('clear')) {
            clearDisplay();
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('equal')) {
            calculateResult();
        } else {
            appendNumber(value);
        }
    });
});

function appendNumber(number) {
    if (result) {
        clearDisplay();
    }
    currentInput += number;
    display.value = currentInput;
}

function handleOperator(op) {
    if (currentInput === '') return;
    if (firstOperand && operator) {
        secondOperand = currentInput;

        calculateResult();
        firstOperand = result;
    } else {
        firstOperand = currentInput;
    }
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (firstOperand && operator && currentInput) {
        secondOperand = currentInput;
        result = operate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
        display.value = result;
        currentInput = result;
        firstOperand = '';
        operator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    display.value = '';
}

function operate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return;
    }
}
