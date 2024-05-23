const firstInput = document.querySelector('.calculator-first-input');
const secondInput = document.querySelector('.calculator-second-input');
const plusButton = document.querySelector('.calculator-plus');
const minusButton = document.querySelector('.calculator-minus');
const resultBlock = document.querySelector('.calculator-result');

console.log(firstInput);
console.log(secondInput);
console.log(plusButton);
console.log(minusButton);

plusButton.addEventListener('click', function() {
    const firstInputValue = Number(firstInput.value);
    const secondInputValue = Number(secondInput.value);
    const result = firstInputValue + secondInputValue;
    resultBlock.innerHTML = result;
}
)
minusButton.addEventListener('click', function() {
    const firstInputValue = Number(firstInput.value);
    const secondInputValue = Number(secondInput.value);
    const result = firstInputValue - secondInputValue;
    resultBlock.innerHTML = result;
}
)