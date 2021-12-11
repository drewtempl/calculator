let display = '';
const output = document.querySelector('.output');

//Calculator functions
function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function mutiply(x, y){
    return x * y;
}

function divide(x, y){
    if(y == 0)
        return "ERROR"
    return x / y;
}

function operate(x, y) {

}

const numberBtn = document.querySelectorAll('.number');

for(let i = 0; i < numberBtn.length; i++)
{
    numberBtn[i].addEventListener('click', () => {
            display += (numberBtn[i].getAttribute('data-num'))
            displayNum();
    })
} 
 

function displayNum() {
    if(parseInt(display) == 0)
        display = 0;

    else if(parseInt(display) > 0 && display[0] == '0')
        display = display.slice(1)
        
    output.textContent = display;
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
    display = ''
    output.textContent = 0;
})
