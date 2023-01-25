/*1. Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
Выведите в консоль строку:
С помощью браузера ... я открыл страничку ... 
(необходимые значения добавьте с помощью BOM)*/

console.log(`С помощью браузера ${window.navigator.appName} я открылa страничку ${window.location.href}`)


/*2. Вывести в консоль каждое из имен (содержимое каждого li).*/

for (let item of document.querySelectorAll('li')){
    console.log(item.innerText);
}

/*3. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)*/

for (let i = 0; i < 4; i++){
    document.body.children[0].children[i].innerText = i;
}

/*4. Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.*/

let p = document.createElement('p');
p.innerText = "здесь должен быть какой-то текст, но мне лень думать, а еще спать хочется:((";
p.style.fontSize = '36px';
p.style.fontWeight = 'bold';
document.body.appendChild(p);


/*5. Написать в html тег заголовка с текстом "Сегодня:"  
После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.*/

let now = new Date();
document.querySelector('p').innerText = `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`;


/*6.Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.*/

let newElement = function(name, color, info){
    let element = document.createElement(name);
    element.style.color = color;
    element.innerText = info;
    document.body.appendChild(element);
}
newElement('div', 'red', 'содержимоеееееееееееееее');


/*7. Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.*/

for (let opt = 1960; opt < 2021; opt++){
    let option = document.createElement('option');
    document.querySelector('select').appendChild(option);
    option.innerText = opt;
}

/*8. Вставить в страницу (в html документ) ul.
Предусмотреть в коде следующий массив:


const clients = [

{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}

]



Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом



Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.*/



const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
]

for (let item of clients){
    let newLi = document.createElement('li');
    if (item.order == true){
        let order = 'оплатил';
        newLi.innerText = `Клиент ${item.name} ${order} заказ`;
    } else{
        let order = 'отменил';
        newLi.innerText = `Клиент ${item.name} ${order} заказ`;
    }
    document.querySelectorAll('ul')[1].appendChild(newLi);
}


/*9.Есть массив ссылок:
let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
Вам нужно:
1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute
element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
Вкладывать ссылки в див нужно с помощью метода appendChild или append.
3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY*/

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

let div = document.createElement('div');
div.style.background = 'purple';
div.style.padding = '15px';

for (let item of linksArr){
    let a = document.createElement('a');
    a.href = item;
    a.setAttribute('target', '_blank');
    a.innerText = 'link';
    a.style.margin = '5px'
    div.appendChild(a);
}

document.body.appendChild(div);


/*10. Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li*/

// let elementsForRemove = document.getElementsByClassName('forRemove');
// for (let item of elementsForRemove){
//     item.remove();
// }

let elementsForRemove = document.body.querySelectorAll('.forRemove')
console.log(elementsForRemove);
elementsForRemove.forEach(item => item.remove())


/*11. Создать массив объектов с полями name, age. Например:

const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},

{name:'Den', age: 43}
]

Создать в html таблицу (table).

C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.



ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.*/

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name: 'Tom', age: 25},
    {name: 'Max', age: 15},
    {name: 'Den', age: 43}
]
let table = document.body.querySelector('table');

for (let item of users){
    let tr = document.createElement('tr');
    let name = document.createElement('td');
    let age = document.createElement('td');
    name.innerText = item.name;
    age.innerText = item.age;
    name.style.color = 'red';
    age.style.color = 'blue';
    tr.appendChild(name);
    tr.appendChild(age);
    table.appendChild(tr);
}


/*12. Есть верстка: https://teenscool1.notion.site...

С помощью JavaScript:

1) Найти в коде список ul и добавить ему класс “list”.

2) На li через один (начиная с самого первого) установить класс “item”

3) На все ссылки в примере установить класс “custom-link"*/


let twelve = document.querySelector('.twelve');
let twelveUl = twelve.querySelector('ul');
twelveUl.className = 'list';
for (let i = 0; i < twelveUl.querySelectorAll('li').length; i += 2){
    twelveUl.querySelectorAll('li')[i].className = 'item';
}
for (let item of twelve.querySelectorAll('a')){
    item.className = 'custom-link';
}