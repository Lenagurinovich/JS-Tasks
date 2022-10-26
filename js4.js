/*1. Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}*/

let i = 0;
while (i < 3){
    alert( `number ${i}!` );
    i++;
}


/*2.Перепишите код с использованием тернарного оператора

let country = 'Sweden';

let access;

if (country == 'Sweden') {

access = true;

} else{

access = false;

}*/

let country = 'Sweden';
let access = country == 'Sweden' ? true : false; 
console.log(access)


/*3. Задать массив логических значений (true/false). Например: const roles = [true, false, false, true, false]

Каждое значение обозначает админ (true) или пользователь (false).

Из этого массива сформировать массив объектов - roles, такой же длины, как и заданный массив.

У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.

Т.е. из

[true, false, false]

должно получиться

[{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]*/

const roles = [true, false, false, true, false];
let rolesNew = [];
for (item of roles){
    item = item === true ? 'admin' : 'user';
    rolesNew.push({role: item})
}
console.log(rolesNew);


//4. Создайте функцию findPositiveNumbers()

    /* 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]. Функция должна вывести в консоль все положительные числа по одному.*/

function findPositiveNumbers(){
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    for (let item of arr){
        if (item > 0){
            console.log(item);
        }
    }
}
findPositiveNumbers()

    // 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.

function findPositiveNumbers2(){
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    let newArr = []
    for (let item of arr){
        if (item > 0){
            newArr.push(item);
        }
    }
    console.log(newArr);
}
findPositiveNumbers2()

    // 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.

function findPositiveNumbers3(){
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    let newArr = []
    for (let item of arr){
        if (item > 0){
            newArr.push(item);
        }
    }
    return newArr;
}
findPositiveNumbers3()

    // 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.

function findPositiveNumbers4(arr){
    let newArr = []
    for (let item of arr){
        if (item > 0){
            newArr.push(item);
        }
    }
    return newArr;
}
console.log(findPositiveNumbers4([17, -9, 23, 56, 0]))


/*5. Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.*/

function getDegree(num1, num2){
    let array = [];
    for(let i = 0; i < num2; i++){
        array.push(num1);
    }
    return array;
}
console.log(getDegree(2, 6));


/*6. Определите массив, например let arr = [5, 4, 3, 8, 0].
Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.*/

let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a){
    let newArr = []
    for (let item of arr){
        if (item >= a){
            newArr.push(item);
        }
    }
    return newArr;
}
console.log(filterFor(arr, 5));


/*7. Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"

Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB(){
    console.log(`rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`)
}
getRandomRGB()


/*8. Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.*/

function getSquare(min, max) {
    for(let i = min; i <= max; i++){
        console.log(i**2);
    }
}
getSquare(5, 10);


/*9. Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.
Для проверки, целое ли число, вам понадобится опеатор % (подумайте, остаток от деления на какое число подойдет для вашей цели)*/

function isInteger(x){
    if (x % 2 === 1 || x % 2 === 0){
        return true;
    } else{
        return false;
    }
}
console.log(isInteger(2.5));


/*10. Написать функцию, которая принимает целое число n.   

Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.*/

function func10(n){
    for (let i = 1; i < n; i += 0.5){
        if (i % 2 === 1 || i % 2 === 0){
            console.log(i + ' integer');
        } else{
            console.log(i + ' decimal');
        }
    }
}
func10(5);