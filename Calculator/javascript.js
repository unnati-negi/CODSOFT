const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

let input = '';

function initCalculator() {
    buttons.forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button));
    });
}
function handleButtonClick(button) {
    const value = button.getAttribute('data-num');

    if (!value) return;

    if (value === '=') {
        evaluateExpression();
    } else if (value === 'AC') {
        clearInput();
    } else if (value === '+/-') {
        toggleSign();
    } else {
        appendToInput(value);
    }

    updateScreen();
}


function appendToInput(value) {
    input += value;
}

function clearInput() {
    input = '';
}

function toggleSign() {
    if (input) {
        if (input.startsWith('-')) {
            input = input.slice(1);
        } else {
            input = '-' + input;
        }
    }
}

function evaluateExpression() {
    try {
        input = eval(input).toString();
    } catch {
        input = 'Error';
    }
}

function updateScreen() {
    screen.value = input || '0';
}

initCalculator();
