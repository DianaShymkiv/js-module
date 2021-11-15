// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter a number from 0 to 59');
//
// if (time > 0 && time <= 15) {
//     console.log('first part');
// } else if (time > 15 && time <= 30) {
//     console.log('second part');
// } else if (time > 30 && time <= 45) {
//     console.log('third part');
// } else if (time > 45 && time <= 59) {
//     console.log('forth part');
// } else {
//     console.log('please enter a number from 0 to 59');
// }

//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = Math.floor((Math.random() * (31 - 1)) + 1);
// console.log(day);
// if (day > 0 && day <= 10) {
//  console.log('first part');
// } else if (day > 10 && day <= 20) {
//  console.log('second part');
// } else {
//  console.log('third part');
// }

//
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)


// let test = prompt("true or false");
// //
// // if (test === 'true') {
// //     console.log('Вірно');
// // }else{
// //     console.log('Неправильно');
// // }
//
// (test === "true") ? test = "Вірно" : test = "Неправильно";
// console.log(test);

//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('enter a number');
//
// if (a !== 0) {
//     console.log('Вірно');
// }else {
//     console.log('Неправильно');
// }

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = +prompt('enter a number of day');
//
// switch (day) {
//     case 1 :
//         console.log('monday')
//         break;
//     case 2:
//         console.log('tuesday')
//         break;
//     case 3:
//         console.log('wednesday')
//         break;
//     case 4:
//         console.log('thursday')
//         break;
//     case 5:
//         console.log('friday')
//         break;
//     case 6:
//         console.log('saturday')
//         break;
//     case 7:
//         console.log('sunday')
//         break;
//     default:
//         console.log('please enter right number');
// }

//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt();
//
// if (year % 4 === 0) {
//     console.log('Високосний рік');
// } else {
//     console.log('Невисокосний рік');
// }

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let name = prompt('Яка «офіційна» назва JavaScript?');
//
// if (name === "ECMAScript") {
//     console.log('Правильно!');
// } else {
//     console.log('Не знаєте? ECMAScript!');
// }