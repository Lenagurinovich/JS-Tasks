/* 1.Написать функцию, которая принимает два параметра и складывает их.
Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.*/

let sum = function (a, b) {
    if (typeof a == 'number' && typeof b == 'number'){
        console.log(a + b);
    } else if (typeof a == 'undefined' || typeof b == 'undefined'){
        console.log('введите два параметра')
    }
    else if (typeof a !== 'number' || typeof b !== 'number') {
            console.log('введенные данные не являются числами');
    } 
}
sum(1, '4')


/* 2. Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
"Функция "square" не может быть вызвана без аргумента"*/

function square(a) {
    if (typeof a !== 'undefined'){
        console.log(a * a)
    } else {
        console.error('Функция "square" не может быть вызвана без аргумента')
    }
    
} 
square()


/* 3.Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом. Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let guessNum = (x) => {
    x = prompt('введите число от 1 до 10')
    while (x < 0 || x > 10){
        x = prompt('введите число от 1 до 10')
    }
    let b = getRandomInteger(1, 10);
    /*if (x < 1 && x > 10){
        console.log('')
    } else */if (x == b){
        console.log('Вы выиграли автомобиль!!');
    } else{
        console.log(`Вы не угадали, ваше число - ${x}, а выпало число ${b} :(`);
    }
}
guessNum();


/* 4. Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]*/

let arr = [5, 4, 3, 8, 0];
let filterFor = (arr, a) => {
    let newArr = []
    for (let item of arr){
        if (item >= a){
            newArr.push(item);
        }
    }
    console.log(newArr);
}
filterFor(arr, 4);

/* 5. Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.*/
let arr2 = [5, 4, 3, 8, 0, 7];
function copyArr(arr2){
    let newCopyArr = arr2.map(arr2 => arr2);
    console.log(newCopyArr);
}
copyArr(arr2);

/*6.Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.*/

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}
let sumObject = 0
function sumObjectValues(x){
    for (let key in x){
        if (typeof x[key] == 'number'){
            sumObject += x[key]
        }
    }
    return sumObject
}
sumObjectValues(objectWithNumbers);