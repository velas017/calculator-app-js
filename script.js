// Access DOM elements of the calculator
const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

// Define expression and result variable
let expression = '';
let result = '';

//Define event handler for button clicks

function buttonClick(event) {
    // Get values from clicked button
    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;

    //Switch case to control the calculator
    switch (action) {
        case 'number':
            addValue(value);
            break;
        case 'clear':
            break;
    }

    //Update display
    updateDisplay(expression, result);
}

inputBox.addEventListener('click', buttonClick);

function addValue(value) {
    //Add value to expression
    expression += value;
    console.log(expression);
}

function updateDisplay(expression, result) {
    expressionDiv.textContent = expression;
    resultDiv.textContent = result;
}