/*1. Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:

Math.round(x)

Math.ceil(x)
Math.floor(x)

В комментариях к каждой строке напишите, как работают эти округления.*/

    // округление до ближайшего целого
console.log(Math.round(5.4));
console.log(Math.round(5.5));
console.log(Math.round(5.6));

    // округление к большему целому
console.log(Math.ceil(5.4));
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.6));

    // округление к меньшему целому
console.log(Math.floor(5.4));
console.log(Math.floor(5.5));
console.log(Math.floor(5.6));



/*2. Выведите в консоль фразы в 2 строки:

Сегодня 27.10.2022 (здесь будет ваша дата)

19 часов 20 минут (здесь будет ваше время)*/

let now = new Date();
console.log(`Сегодня ${now.getDate()}`);
console.log(`${now.getHours()} часов ${now.getMinutes()} минут`);