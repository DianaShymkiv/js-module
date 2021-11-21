// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// const areaOfTheRectangle = (a, b) => a * b;
// console.log(areaOfTheRectangle(3, 6));

// - створити функцію яка обчислює та повертає площу кола

// const areaOfTheCircle = (r) => Math.round(Math.PI * Math.pow(r, 2));
// console.log(areaOfTheCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру

// const cylinderArea = (h, r) => Math.round(2 * Math.PI * h * r);
// console.log(cylinderArea(3, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// const printArray = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// printArray([2, 4, 6, 8, 'h', true]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const print = (text) => document.write(`<p>${text}</p>`);
// print('some text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const print = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// print(`some text`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const print = (text, count) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// print(`some text`, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const print = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// print([2, 5, true, 'h', 6.7, 'string']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
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
// const print = (users) => {
//
//     for (const user of users) {
//         for (const userElement in user) {
//             document.write(`<div>${userElement, user[userElement]}</div>`);
//
//         }
//         document.write('==================');
//     }
// }
// print(users);