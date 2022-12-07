/*1. Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Вам понадобятся методы строк.*/

function ucFirst(str){
    let newStr = str[0].toUpperCase() + str.slice(1, str.length)
    return newStr
}
console.log(ucFirst('ggg'));


/*2. Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру.*/

function checkSpam(str){
    let lowerStr = str.toLowerCase()
    if (lowerStr.includes('badword') === true || lowerStr.includes('xxx') === true){
        return true;
    } else{
        return false;
    }
}
console.log(checkSpam('xXx'))

/*3. Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

Обратите внимание: метод reverse существует только у массивов.*/

function reverse(str){
    let arrayStr = str.split('');
    let reverseArrayStr = arrayStr.reverse()
    console.log(reverseArrayStr.join(''))
    return reverseArrayStr.join()
}
reverse('Helloooooo') 

/*4. Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

MAN: Manchester Piccadilly

Вывести эти строки в консоль*/

let stations = [

    'MAN675847583748sjt567654;Manchester Piccadilly',
    
    'GNF576746573fhdg4737dh4;Greenfield',
    
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    
    'SYB4f65hf75f736463;Stalybridge',
    
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    
    ];
   
for (let item of stations){
    let name = item.split(';')[1];
    let code = item.slice(0, 3);
    console.log(`${code}: ${name}`);
}

/*5. Напишите функцию, которая проверяет, можержит ли массив элементы, равные нулю. Если да - возвращает true.

Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345]*/

let arr = [12, 4, 50, 1, 0, 18, 40];

function checkArray(array){
    if (array.includes(0) === true){
        return true
    }
}
console.log(checkArray(arr))

/*6. Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

Пример:

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

console.log(unique(strings) ); должен вывести "кришна, харе, :-O"*/

function unique(arr){
    let newArr = [];
    for (let item of arr){
        if (newArr.includes(item) === false){
            newArr.push(item);
        }
    }
    return newArr
}

let strings = ["кришна", "кришна", "харе", ":)", "харе", ":3", "кришна", "кришна", ":-O"];
console.log(unique(strings));



/*7. Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.

Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.

Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:

1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.

2. Создайте общий массив с данными Жени (исправленными) и Юли.

3. Для каждой кошки этого общего массива выведите в консоль текст:

- если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет

- если котёнок - Кошка № 2 ещё котёнок

4. Вызовите функцию для двух наборов тестовых данных.

Тестовые данные:

1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]

Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]

2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]

Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]*/

function verifyCats(catsJane, catsJulia){
    catsJane.pop()
    catsJane.shift()
    let cats = catsJane.concat(catsJulia);
    cats.forEach(function(element, index){
        if (element < 2){
            console.log(`Кошка № ${index + 1} еще котенок`)
        } else{
            console.log(`Кошка № ${index + 1} взрослая ей ${element} лет`)
        }
    })
}

verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);


/*8. Решить 4 задание из прошлой темы, используя метод filter

Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]*/

let array = [5, 4, 3, 8, 0];
let newArray = array.filter((item) => item >= 2);
console.log(newArray)


/*9. Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].*/

let string =  ['yes', 'hello', 'no', 'easycode', 'what'];
let filterString = string.filter((item) => item.length > 3);
console.log(filterString);


/*10. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]*/

let arrayy = [ [14, 45], [1], ['a', 'c', 'd']]
let newArrayy = arrayy.sort((a, b) => a.length - b.length);
console.log(newArrayy);


/*11. Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)

2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)

3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)

Вызовите функцию для обоих наборов тестовых данных.

Тестовые данные:

1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]

2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

*/

function getAverageHumanAge(catAges){
    const catHumanAge = catAges.map((item) => item < 2 ? item * 10: item * 7);
    const filteredCatHumanAge = catHumanAge.filter((item) => item > 17)
    return (filteredCatHumanAge.reduce((acc, item) => acc + item) / filteredCatHumanAge.length)
}
console.log(getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]));