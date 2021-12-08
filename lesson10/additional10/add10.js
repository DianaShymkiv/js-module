// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (eventObject) {
//     const params = {
//         tag: eventObject.target.tagName,
//         classList: eventObject.target.className,
//         id: eventObject.target.id,
//         size: eventObject.target.offsetHeight + '*' + eventObject.target.offsetWidth
//     }
//     console.log(params);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (eventObject) {
//     const params = {
//         tag: eventObject.target.tagName,
//         classList: eventObject.target.className,
//         id: eventObject.target.id,
//         size: eventObject.target.offsetHeight + '*' + eventObject.target.offsetWidth
//     }
//     alert(`
//     tag: ${params.tag}
//     classList: ${params.classList}
//     id: ${params.id}
//     size: ${params.size}`)
// }

// -- взять массив пользователей

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let form = document.createElement("div");
//
// let checkStatus = document.createElement('input');
// checkStatus.setAttribute('type', 'checkbox');
//
// let checkAge = document.createElement('input');
// checkAge.setAttribute('type', 'checkbox');
//
// let checkCity = document.createElement('input');
// checkCity.setAttribute('type', 'checkbox');
//
// let button = document.createElement('button');
// button.innerText = 'check';
//
// document.body.appendChild(form);
// form.append(checkStatus, checkAge, checkCity, button);
//
// button.onclick = function (e) {
//     e.preventDefault();
//     let status = checkStatus.checked;
//     let age = checkAge.checked;
//     let city = checkCity.checked;
//     let arr = [];
//
//     if (status && age && city) {
//         arr = usersWithAddress.filter(value => value.status && value.age >= 29 && value.address.city === 'Kyiv');
//     } else if (status && age) {
//         arr = usersWithAddress.filter(value => value.status && value.age >= 29);
//     } else if (status && city) {
//         arr = usersWithAddress.filter(value => value.status && value.address.city === 'Kyiv');
//     } else if (age && city) {
//         arr = usersWithAddress.filter(value => value.age >= 29 && value.address.city === 'Kyiv');
//     } else if (status) {
//         arr = usersWithAddress.filter(value => value.status);
//     } else if (age) {
//         arr = usersWithAddress.filter(value => value.age >= 29);
//     } else if (city) {
//         arr = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//     }
//
//     let div = document.createElement("div");
//     document.body.appendChild(div);
//
//     let ul = document.createElement("ul");
//     div.appendChild(ul);
//
//     for (const user of arr) {
//         for (const key in user) {
//             if (typeof user[key] === 'object') {
//                 for (const key1 in user[key]) {
//                     let li = document.createElement('li');
//                     li.innerText = `${key1} ${user[key][key1]}`;
//                     ul.appendChild(li);
//                 }
//             } else {
//                 let li = document.createElement('li');
//                 li.innerText = `${key} ${user[key]}`;
//                 ul.appendChild(li);
//
//             }
//         }
//
//     }
//
// }

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

const wrap = document.getElementsByClassName('wrap')[0];

const xxx = (startElement) => {
    startElement.classList.add('current');
    const current = document.createElement('div');
    const prevButton = document.createElement('button');
    prevButton.innerText = 'previous element';
    const nextButton = document.createElement('button');
    nextButton.innerText = 'next element';
    startElement.parentNode.appendChild(current);
    current.appendChild(startElement);
    current.parentNode.append(prevButton, nextButton);

    let nextCheck = true;

    const steep = (list) => {
        let element;

        if (nextCheck) {
            element = list[0];
            while (element.firstElementChild) {
                element = element.firstElementChild
            }
        } else {
            element = list[list.length - 1];
        }

        element.style.backgroundColor = 'lightGrey';
        nextButton.onclick = () => {
            nextCheck = true;

            if (element.nextElementSibling) {
                element = element.nextElementSibling;
                element.style.backgroundColor = 'lightGrey';
                element.previousElementSibling.style.backgroundColor = null;

                if (element.children.length) {
                    element.style.backgroundColor = null;

                    while (element.firstElementChild?.children.length) {
                        element = element.firstElementChild;
                    }

                    steep(element.children);
                }

            } else {

                element.style.backgroundColor = null;
                while (!element.parentElement.nextElementSibling) {

                    if (element.parentElement.className.includes('current')) {

                        if (element.children.length) {
                            element = element.lastElementChild;
                        }

                        element.style.backgroundColor = 'lightGrey';
                        return;
                    }

                    element = element.parentElement;
                }

                element = element.parentElement.nextElementSibling;
                element.style.backgroundColor = 'lightGrey';
            }
        }

        prevButton.onclick = () => {

            nextCheck = false;

            if (element.previousElementSibling) {
                element = element.previousElementSibling;
                element.style.backgroundColor = 'lightGrey';
                element.nextElementSibling.style.backgroundColor = null;

                if (element.children.length) {
                    element.style.backgroundColor = null;

                    while (element.lastElementChild?.children.length) {
                        element = element.lastElementChild;
                    }

                    steep(element.children);
                }

            } else {
                element.style.backgroundColor = null;

                while (!element.parentElement.previousElementSibling) {

                    if (element.parentElement.className.includes('current')) {

                        while (element.firstElementChild) {
                            element = element.firstElementChild;
                        }

                        element.style.backgroundColor = 'lightGrey';
                        return;
                    }

                    element = element.parentElement;
                }

                element = element.parentElement.previousElementSibling;
                element.style.backgroundColor = 'lightGrey';
            }
        }
    }
    steep(startElement.children);
}
xxx(wrap);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let arrImage = ['https://static.wikia.nocookie.net/heroes-and-villians/images/8/83/Winnie_the_Pooh.png',
// 'https://clipart-best.com/img/winnie-pooh/winnie-pooh-clip-art-54.png',
// 'https://clipart-best.com/img/winnie-pooh/winnie-pooh-clip-art-63.png'];
//
// let container = document.createElement("div");
// document.body.appendChild(container);
// container.style.width = '300px';
// container.style.height = '300px';
// container.style.position = 'relative';
// container.style.overflow = 'hidden';
//
// let ul = document.createElement("ul");
// container.appendChild(ul);
//
// for (const image of arrImage) {
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.style.position = 'relative';
//     let img = document.createElement("img");
//
//     img.src = image;
//
//     img.style.display = 'block';
//     img.style.width = '300px';
//     img.style.height = '300px';
//     li.appendChild(img);
//     li.style.display = 'inline-block';
// }
// let width = 300;
// let count = 1;
//
// let prevButton = document.createElement('button');
// prevButton.innerText = 'prev';
//
// let nextButton = document.createElement('button');
// nextButton.innerText = 'next';
//
// document.body.append(prevButton, nextButton);
//
// let position = 0;
//
// prevButton.onclick = function () {
//     position += width;
//     position = Math.min(position, 0)
//     ul.style.marginLeft = position + 'px';
// }
//
// nextButton.onclick = function () {
//     position -= width;
//     position = Math.max(position, -width * (arrImage.length - count));
//     ul.style.marginLeft = position + 'px';
// }

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// document.onmousedown = function (e) {
//     e.target.style.color = 'red';
// }
// document.onmouseup = function (e) {
//     e.target.style.color = 'black';
// }
