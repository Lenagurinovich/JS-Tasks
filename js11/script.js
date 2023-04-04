// /*1. 
//     1) Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.*/

// let array = {name: 'Masha'};
// let stringArray = JSON.stringify(array);
// let newArray = JSON.parse(stringArray);


//     /*2)Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.*/

// let user = {name: 'Anonim'};
// localStorage.user = JSON.stringify(user);
// let newUser = JSON.parse(localStorage.user)


/*3.Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

Пример реализации:

https://ucarecdn.com/6e689f37-...



ПОДСКАЗКИ

- значение атрибута можно узнать с помощью метода element.getAttribute(' '). Но если атрибут стандартный, то можно его забрать с помощью одноименного свойства. Например, адрес картинки = img.src (img - переменная, в которой хранится картика).

Порядок работы:

1. Собираем изображения в массив.

2. Вешаем обработчик клика на все окно - window. Так js будет "слушать" клики и записывать в event.target тот элемент, по которому пришелся клик (event нужно обязятельно добавить как параметр в addEventListener).

window.addEventListener('click', (event => { }))

Перебираем массив картинок, сравниваем их с event.target. Забираем из картинки, на которую пришелся клик, url (значение атрибута src), вешаем на нее класс active, а у остальных картинок убираем. Записываем url активной картинки в память и ставим ее на фон body.

При загрузке страницы (в начале кода JS) добавляем проверку, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить этот класс и поставить на фон первую картинку из массива.*/




const img = document.querySelectorAll('img');
const body = document.querySelector('body');

body.style.background = `url(${localStorage.url})`;

window.addEventListener('click', (event => {
    img.forEach(element => {
        element.classList.remove('active');
        element.style.transform = 'scale(1)'
        element.style.transition = '0.3s'
        if (element === event.target){
            element.classList.add('active');
            element.style.transform = 'scale(1.1)'
            let url = element.src;
            // body.style.background = `url(${url})`;
            localStorage.url = url;
        }
    });
    body.style.background = `url(${localStorage.url})`;
    body.style.backgroundSize = '100%'
    body.style.transition = '0.3s'
}))

