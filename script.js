let display = '0';
let operator = '';
let operandA = '';
let operandB = '';
let answer = '';
let prefix = false;
let decimal = false;
let operatorFlag = false;
let error = false;
let repeat = false;
const output = document.querySelector('.output');

//Calculator functions
function add(x, y) {
    answer = x + y
    output.textContent = answer;
}

function subtract(x, y) {
    answer = x - y
    output.textContent = answer;
}

function multiply(x, y) {
    answer = x * y
    output.textContent = answer;
}

function divide(x, y) {
    if (y == 0) {
        clear()
        output.textContent = "ERROR"
    }


    else {
        answer = x / y
        output.textContent = answer;
    }
}

function mod(x, y) {
    answer = x % y
    output.textContent = answer;
}

//converts string to floats, calls corresponding operation
function operate() {
    let a = parseFloat(operandA);
    let b = parseFloat(operandB);

    switch (operator) {
        case ('add'):
            add(a, b);
            break;

        case ('subtract'):
            subtract(a, b);
            break;

        case ('multiply'):
            multiply(a, b);
            break;

        case ('divide'):
            divide(a, b);
            break;

        case ('mod'):
            mod(a, b);
            break;
    }

    if (answer == NaN)
        display = 0;

    else
        display = answer;
}

//add number button function
const numberBtn = document.querySelectorAll('.number');
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', () => {
        display += (numberBtn[i].getAttribute('data-num'))

        if (prefix) {
            display *= -1
            prefix = false
        }

        operatorFlag = false;
        repeat = false;
        displayNum();
    })
}

//displays output
function displayNum() {
    if (parseFloat(display) == 0 && display[1] != '.')
        display = 0;

    else if (parseInt(display) > 0 && display[0] == '0')
        display = display.slice(1)

    if (display.length > 20)
        display = display.slice(0, 20);

    output.textContent = display;
}

//resets output and all variables
const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clear)

function clear() {
    display = '0';
    operator = '';
    operandA = '';
    operandB = '';
    answer = '';
    prefix = false;
    decimal = false;
    repeat = false;
    output.textContent = 0;
}

//sets operator, operates if entering a third number, overrides operator if new one is entered
const operatorBtn = document.querySelectorAll('.operator');
for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click', () => {

        if (!operatorFlag) {
            if (answer)
                operandA = display;

            else
                operandA = display;

            decimal = false;
            display = '0';

            operatorFlag = true;
        }

        if (operandA && !operatorFlag) {
            if (operandB)
                operate()

            else {
                operandB = display;
                decimal = false;
                operate();
            }
        }

        operator = (operatorBtn[i].getAttribute('id'))
        repeat = false;
    })
}

//set operand B, calls operate function
const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
    if (repeat)
        operandA = display;

    else
        operandB = display;

    decimal = false;
    repeat = true;
    operate()
})

//changes negative sign
const prefixBtn = document.querySelector('#prefix');
prefixBtn.addEventListener('click', () => {
    if (display != 0)
        display *= -1
    else
        prefix = true;
    displayNum()
})

//adds a decimal
const decimalBtn = document.querySelector('#decimal')
decimalBtn.addEventListener('click', () => {
    if (!decimal) {
        display += '.'
        decimal = true;
    }
})

//backspace function
const backspaceBtn = document.querySelector('#backspace')
backspaceBtn.addEventListener('click', () => {
    if (display.length == 2 && display[0] == '-') {
        display = '0';
        displayNum()
    }


    if (display.length > 1) {
        display = display.slice(0, display.length - 1)
        displayNum()
    }

    else {
        display = '0'
        displayNum()
    }
})