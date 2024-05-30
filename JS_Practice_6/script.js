const numberBtns = document.querySelectorAll('.calc-btn');
console.log(numberBtns);
const opertionsBtns = document.querySelectorAll('.calc-operation-btn');
console.log(opertionsBtns);
const displayBlock = document.querySelector('.calc-display');

for (let i = 0; i < numberBtns.length; i++){
    numberBtns[i].addEventListener('click', function(){
        displayBlock.innerHTML = displayBlock.innerHTML + numberBtns[i].innerHTML;
    }
)}

for (let i = 0; i < opertionsBtns.length-1; i++){
    opertionsBtns[i].addEventListener('click', function(){
        displayBlock.innerHTML = displayBlock.innerHTML + opertionsBtns[i].innerHTML;
    }
)}

opertionsBtns[opertionsBtns.length-1].addEventListener('click', function(){
    const result = eval(displayBlock.innerHTML);
    displayBlock.innerHTML = result;
})