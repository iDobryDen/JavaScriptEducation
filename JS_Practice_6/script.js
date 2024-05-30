const firstInput = document.querySelector('.calculator-first-input');
const secondInput = document.querySelector('.calculator-second-input');
const plusButton = document.querySelector('.calculator-plus');
const minusButton = document.querySelector('.calculator-minus');
const multiplyButton = document.querySelector('.calculator-multiply');
const divideButton = document.querySelector('.calculator-divide');
const resultBlock = document.querySelector('.calculator-result');

console.log(firstInput);
console.log(secondInput);
console.log(plusButton);
console.log(minusButton);

function sum(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operation(func) {
    const firstInputValue = Number(firstInput.value);
    const secondInputValue = Number(secondInput.value);
    let result = func(firstInputValue, secondInputValue);
    resultBlock.innerHTML = result;
}

plusButton.addEventListener('click', () => operation(sum));
minusButton.addEventListener('click', () => operation(minus));
multiplyButton.addEventListener('click', () => operation(multiply));
divideButton.addEventListener('click', () => operation(divide));