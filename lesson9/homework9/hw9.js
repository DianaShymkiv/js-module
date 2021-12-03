// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement = document.createElement('div');
// divElement.setAttribute('class', 'wrap');
// divElement.classList.add('collapse', 'alpha', 'beta');
// divElement.innerText = 'some text';
// divElement.style.backgroundColor = 'silver';
// divElement.style.color = 'blue';
// divElement.style.fontSize = '20px';
//
// document.body.appendChild(divElement);
// let divClone = document.getElementsByClassName('wrap');
// divClone[0].appendChild(divElement.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let ulElement = document.getElementsByClassName('menu')[0];
// for (const item of arr) {
//     let liElement = document.createElement('li');
//     liElement.innerText = item;
//
//     ulElement.appendChild(liElement);
// }

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${item.title} - ${item.monthDuration} month`;
//
//     document.body.appendChild(divElement);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     let h1Element = document.createElement('h1');
//     h1Element.classList.add('heading');
//     h1Element.innerText = `${item.title}`;
//     let pElement = document.createElement('p');
//     pElement.classList.add('description');
//     pElement.innerText = `${item.monthDuration}`;
//
//
//     divElement.appendChild(h1Element);
//     divElement.appendChild(pElement);
//     document.body.appendChild(divElement);
// }








// создать функцию которая принимает массив чисел и возвращает массив только с уникальными ( не повторяющимися ) числами
//
// Пример:
//     unique([0, 3, 0, 7, 1, 5, 1, 3, 5, 2]) -> [2, 7]
// unique([1,2,3,4,2,5,1]) -> [ 3, 4, 5 ]

// function removeUnique(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === arr[i]) {
//                 count++;
//             }
//         }
//         if (!(count >= 2)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeUnique([1, 2, 4, 2, 4, 4]));

