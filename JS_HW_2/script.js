const users = [];
const users1 = new Array();

const users2 = [
    'Vasya',
    'Petya',
    'Bob'
];

const users3 = new Array('Vasya', 'Petya', 'Bob');

console.log(users2);
console.log(users3);

const users4 = [];
users4[0] = 'Vasya';
users4[1] = 'Petya';
users4[2] = 'Bob';

console.log(users4.length);

const users5 = [
    'Vasya',
    'Petya',
    'Bob'
];

console.log(...users5);

const users6 = [...users5];

console.log(users6);

const boys = ['Tom', 'Bob'];
const girls = ['Anna', 'Anya'];
const people = [...boys, ...girls];
console.log(people);

const users7 = ['Tom'];
users7.push('Brodie');
console.log(users7);

users7.unshift('Ann');
console.log(users7);

users7.pop();
console.log(users7);

users7.shift();
console.log(users7);

const users8 = ['Bob', 'Ann', 'Tom'];
users8.splice(1, 0, 'Vasya');
console.log(users8);

const users9 = [
    'bob',
    'tom',
    'ann',
    'petr',
    'vova',
    'jack'
]

users9.splice(3);

console.log(users9);

const users10 = [
    'bob',
    'tom',
    'ann',
    'tom',
    'ann',
    'jack'
];

const firstIndex = users10.indexOf('tom');
console.log(firstIndex);
const lastIndex = users10.lastIndexOf('tom');
console.log(lastIndex);

console.log(users10.includes('jack'));

const numbers = [
    -1,
    2,
    -6,
    4,
    -10
];

const q = numbers.every(function(number) {
    return number > 0
})

console.log(q);

const p = numbers.some(function(number) {
    return number > 0
})

console.log(p);

const filteredNumbers = numbers.filter(function(number) {
    return number > 0
})

console.log(filteredNumbers);

const numbers1 = [1, 2, 5, -4, 10, 100];

numbers1.forEach(function (number) {
    console.log('Квадрат числа', number, 'равен', number * number);
})

//-----------------------------------------------

const str = 'Hello';
const str1 = new String('Hello');

console.log(str);
console.log(str[0]);
console.log(str[4]);
console.log(str.length);
console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));
console.log(str.includes('llo'));

const str2 = 'Hello world!';
const str3 = str2.substring(6, 11);
console.log(str3);

console.log(str2.toLowerCase());
console.log(str2.toUpperCase());


const str4 = '        Hello          '; 
console.log(str4);
console.log(str4.trim());

const str5 = 'Hello';
const str6 = 'world';
console.log(str5 + ' ' + str6);
console.log(str5.concat(' ').concat(str6));

const str7 = 'Я пошел в магазин';
const arr7 = str7.split(' ');
console.log(arr7);
const arr8 = str7.split('а');
console.log(arr8);

const name1 = 'Вася';
const hello = `Привет, ${name1}`;
console.log(hello);


const heading1 = document.querySelector('.heading');
const btn1 = document.querySelector('.btn');
const btn2 = document.querySelector('.btn-change-name');
const inputCity = document.querySelector('.input-city');
const btn3 = document.querySelector('.btn-change-city');


const obj1 = {
    name: 'Вася',
    age: 25,
    city: 'Ижевск'
}

let str8 = '';

function makeString () {
    str8 = `<i>Пользователь</i> ${obj1.name}, ему ${obj1.age} лет, он живет в городе ${obj1.city}`
    heading1.innerHTML = str8;
}

makeString();

btn1.addEventListener('click', function() {
    obj1.age = obj1.age + 1;
    makeString();
})

const names = ['Петя', 'Bob', 'Tom', 'Mark', 'Petr']

function getRandomNumber() {
    return Math.floor(Math.random() * 10  / 2)
}

btn2.addEventListener('click', function() {
    obj1.name = names[getRandomNumber()];
    makeString();
})

btn3.addEventListener('click', function() {
    let cityValue = inputCity.value;
    obj1.city = cityValue;
    makeString();
})

const aaa = ["Бильбо", "Гэндальф", "Назгул"];
aaa.forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
  });

let fruits = ['Яблоко', 'Апельсин', 'Яблоко']

alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')










