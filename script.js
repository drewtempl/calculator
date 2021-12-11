let display = '0';
let operator = '';
let operandA = '-1';
let operandB = '-1';
let answer = '';
let prefix = false;
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
    if (y == 0)
        output.textContent = "ERROR"

    else {
        answer = x / y
        output.textContent = answer;
    }
}

function mod(x, y) {
    answer = x % y
    output.textContent = answer;
}

function operate() {
    let a = parseInt(operandA);
    let b = parseInt(operandB);

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

    display = answer;
}

const numberBtn = document.querySelectorAll('.number');

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', () => {
        display += (numberBtn[i].getAttribute('data-num'))
        
        if(prefix) {
            display *= -1
            prefix = false
        }
            
        displayNum();
    })
}


function displayNum() {
    if (parseInt(display) == 0)
        display = 0;

    else if (parseInt(display) > 0 && display[0] == '0')
        display = display.slice(1)

    output.textContent = display;
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
    display = '0';
    operator = '';
    operandA = '';
    operandB = '';
    answer = '';
    output.textContent = 0;
})


const operatorBtn = document.querySelectorAll('.operator');

for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click', () => {
        operator = (operatorBtn[i].getAttribute('id'))
        if (answer)
            operandA = display;

        else
            operandA = display;
        display = '0';
    })
}

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
    operandB = display;
    operate()
})

const prefixBtn = document.querySelector('#prefix');
prefixBtn.addEventListener('click', () => {
    if(display != 0)
        display *= -1
    else
        prefix = true;
    displayNum()
})
