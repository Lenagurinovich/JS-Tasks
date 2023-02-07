/*1. Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.*/

const input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
    let li = document.createElement('li');
    document.querySelector('ul').appendChild(li);
    li.innerText = event.key;
    
})

/*2. Вставить в html тег input (просто предусмотреть в разметке).

Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value*/

const inputTwo = document.querySelector('.input2')
inputTwo.addEventListener('keyup', (event) => {
    console.log(inputTwo.value);
})

/*3. Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).*/

const form = document.querySelector('form');
const ul3 = document.querySelector('.ul3');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    let input3 = document.querySelector('.input3');
    li.innerText = input3.value;
    ul3.appendChild(li);
    input3.value = '';
})

/*4. Калькулятор. 
Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
1) решить с помощью if
2) решить с помощью evel*/

const form4 = document.querySelector('.form4');

//1)

form4.addEventListener('submit', (event) => {
    event.preventDefault();
    let input4_1 = document.querySelector('.input4_1');
    let input4_2 = document.querySelector('.input4_2');
    let select = document.querySelector('select');
    let div = document.querySelector('div');
    if (select.value == '+'){
        div.innerText = Number(input4_1.value) + Number(input4_2.value);
    } else if (select.value == '-'){
        div.innerText = input4_1.value - input4_2.value;
    } else if (select.value == '*'){
        div.innerText = input4_1.value * input4_2.value;
    } else if (select.value == '/'){
        div.innerText = input4_1.value / input4_2.value;
    } else if (select.value == '**'){
        div.innerText = input4_1.value ** input4_2.value;
    } else{
        div.innerText = input4_1.value % input4_2.value;
    }
})

//2)

form4.addEventListener('submit', (event) => {
    event.preventDefault();
    let input4_1 = document.querySelector('.input4_1');
    let input4_2 = document.querySelector('.input4_2');
    let select = document.querySelector('select');
    let div = document.querySelector('div');
    let result = eval('input4_1.value') + eval('select.value') + eval('input4_2.value');
    div.innerText = eval(result);
})


/*5. Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.*/

const button = document.querySelector('button');
button.addEventListener('mouseenter', (event) => {
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    button.style.backgroundColor = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`
})
button.addEventListener('mouseleave', (event) => {
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    button.style.transform = `rotate(${getRandomInteger(-360, 360)}deg)`})