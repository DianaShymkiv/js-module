// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     return a * b;
// }
//
// console.log(area(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function area(radius) {
//     return Math.PI * Math.pow( r, 2);
// }
//
// console.log(area(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function area(h, r) {
//     return Math.round(2 * Math.PI * h * r);
// }
//
// console.log(area(5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function print(arr) {
//
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//
// print([2, 'hp', true, 8, 3.2, '10']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function print(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// print('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// list('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text, numberOfRows) {
//     document.write(`<ul>`);
//     for (let i = 0; i < numberOfRows; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
//
// list('some text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list(arr) {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//
//     }
//     document.write(`</ul>`);
//
// }
//
// list(['arr', 12.3, true, '3', false, 4]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id: 1,
//         name: 'olya',
//         age: 31
//     },
//     {
//         id: 2,
//         name: 'kolya',
//         age: 30
//     },
//     {
//         id: 3,
//         name: 'lilya',
//         age: 5
//     },
//     {
//         id: 4,
//         name: 'sasha',
//         age: 18
//     },
//     {
//         id: 5,
//         name: 'Kirill',
//         age: 19
//     }
// ];
//
// function print(users) {
//     for (const user of users) {
//         document.write(`<div>`);
//         document.write(`<h2>${user.name} id - ${user.id}</h2>`);
//         document.write(`<h3>Age - ${user.age}</h3>`);
//         document.write(`</div>`);
//     }
//
// }
// print(arr);