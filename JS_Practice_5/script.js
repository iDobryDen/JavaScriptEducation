const p1 ={
    name: 'Tom',
    money: 4000,
}

const p2 ={
    name: 'Peter',
    money: 3000,
}

const p3 ={
    name: 'Steve',
    money: 5555,
}

const bank = p1.money + p2.money + p3.money;

console.log(bank);

const arr = [
    {
        name: 'Tom',
        money: 4000,
    },
    {
        name: 'Peter',
        money: 6000,
    },
    {
        name: 'Steve',
        money: 7000,
    }
]

let sum = 0;

for (let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i].money;
    }

console.log(sum);

let person = {
    name: 'Gregory',
    tinkoff: 10000,
    sber: 12000,
    vtb: 5555,
    alfa: 6666,
    psb: 8002
}

let result = 0;

// for (prop in person) {
//     if (prop !== 'name')
//     result = result + person[prop];
// }

for (prop in person) {
    if (typeof person[prop] === 'number'){
        result = result + person[prop];
    }
}

console.log(result);

const pers = {
    name: 'Pete',
    banks: {
        tinkoff: 10000,
        sber: 12000,
        vtb: 5000,
        alfa: 6000,
        psb: 8000
    },
    age: 30
}

let result1 = 0;

for (prop in pers.banks){
    result1 += pers.banks[prop];
}

console.log(result1);

const str = 'aaabbbcccabc';
let sum_b = 0;
for (char of str) {
    if (char === 'b'){
        sum_b++;
    }
}

console.log(sum_b);

const names = [
    'Masha',
    'Peter',
    'Olya',
    'Dina',
    'Sergei',
    'Donovan',
    'Solomon',
    'Noah',
    'Dodik'
]
let name_with_d = 0;
// for (let i = 0; i < names.length; i++) {
//     for (char of names[i]){
//         if (char === 'D'){
//             name_with_d++;
//         }
//     }
// }

for (let i = 0; i < names.length; i++)
    {
        if (names[i][0] === 'D' || names[i][0] === 'd'){
            name_with_d++;
        }
    }


console.log(name_with_d);
