//1. Задайте в коде переменную n с числовым значением.

let n = 101;

    // 1) с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

if (n >= 0 && n <= 100){
    console.log(true);
} else{
    console.log(false);
}

    // 2) с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

if (n <= 0 || n >= 100){
    console.log(false);
} else{
        console.log(true);
    }


    
//2. Создайте объект с именами и заработными платами. Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате: Заработная плата ххх составляет ххх рублей.

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
console.log(`Заработная плата Den составляет ${engineers.Den} рублей.`)
console.log(`Заработная плата Matt составляет ${engineers.Matt} рублей.`)
console.log(`Заработная плата Steve составляет ${engineers.Steve} рублей.`)


//3. Создать массив из 5 элементов. Используя цикл for, вывести каждый второй элемент массива в консоль.

let a = [1, 2, 3, 4, 5];
for (let i = 0; i <= a.length; i += 2){
    console.log(a[i]);
}


/*4. Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]



Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

Индексу 0 соответствует число 42
Индексу 1 соответствует число 65
и т.д.*/

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for ( let i = 0; i < numbers.length; i++){
    console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
}


/* 5.Дан массив объектов, например:



let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

Добавить в каждый объект дополнительное поле usersAnswer со значением null.

Решение должно работать для массива любой длины.*/

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for (let i = 0; i < questions.length; i++){
    questions[i].usersAnswer = null;
}

console.log(questions);


/*6. Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
*/

let numbers6 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

/*1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком*/

for (item of numbers6){
    console.log(item);
}
for (let i = 0; i < numbers6.length; i++){
    console.log(numbers6[i]);
}

/*2) Посчитать и вывести в консоль сумму элементов в массиве.*/

let sum = 0;
for(item of numbers6){
    sum += item;
}
console.log(sum);

/*3) Посчитать и вывести в консоль сумму элементов в массиве.*/

let sum2 = 0;
for(item of numbers6){
    if (item % 2 === 0){
        sum2 += item;
    }
}
console.log(sum2);

/*4) Найти и вывести в консоль максимальное число массива.*/

let max = numbers6[0];
for (item of numbers6){
    if (max < item){
        max = item;
    } 
}
console.log(max);

/*5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.*/

for (let i = 0; i < numbers6.length; i++){
    if (numbers6[i] === max){
        console.log(i);
    }
}



/*7. Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.*/

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];
for (item of arr){
    if (item > 0){
        newArr.push(item);
    }
}
console.log(newArr);

/*8. Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.*/

let nums = [5, 4, 3, 8, 0];
let limit = 5;
let numsNew = [];
for (item of nums){
    if (item >= limit){
        numsNew.push(item);
    }
}
console.log(numsNew);



/*9. Существует массив объектов, описывающих пользователей, например:
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.*/

const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}];
for (item of users){
    if (item.age > 15){
        console.log(item.name);
    }
}



/*10. Задать массив слов. Например:
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
*/

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

/*1)Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):

[{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]

Вывести этот массив в консоль.*/

let vegetablesNew = [];
for (item of vegetables){
    vegetablesNew.push({word: item, length: item.length});
}
console.log(vegetablesNew);

/*2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"*/

for (item of vegetablesNew){
    console.log(item.word + ' - ' + item.length);
}