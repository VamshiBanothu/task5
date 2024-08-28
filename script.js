let currentInput = '';
let operator = '';
let result = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    result = '';
    updateDisplay('0');
}

function appendNumber(number) {
    if (currentInput.length < 16) {
        currentInput += number;
        updateDisplay(currentInput);
    }
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (result !== '') {
        currentInput = result;
        result = '';
    }
    operator = op;
    currentInput += ' ' + operator + ' ';
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

function calculateResult() {
    if (currentInput === '') return;
    try {
        result = eval(currentInput);
        updateDisplay(result);
        currentInput = result;
    } catch (error) {
        updateDisplay('Error');
        currentInput = '';
    }
}
