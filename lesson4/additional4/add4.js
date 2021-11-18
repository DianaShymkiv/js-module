// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function numbers() {
//     if (arguments.length === 1) {
//         console.log(arguments);
//     } else if (arguments.length === 2) {
//         let sum = arguments[0] + arguments[1];
//         console.log(sum);
//     } else {
//         console.log('???');
//     }
// }
//
// numbers(2, 3);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

// function arrays(arr1, arr2) {
//     let sumArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sumArr[i] = arr1[i] + arr2[i];
//     }
//     return sumArr;
// }
//
// console.log(arrays([1, 2, 3, 4], [2, 3, 4, 5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keysOfObject(arr) {
//     let keys = [];
//     for (const item of arr) {
//         for (const key in item) {
//             keys.push(key);
//         }
//     }
//     return keys;
// }
//
// console.log(keysOfObject([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function meaningOfObject(arr) {
//     let meanings = [];
//     for (const item of arr) {
//         for (const key in item) {
//             meanings.push(item[key]);
//         }
//     }
//     return meanings;
// }
//
// console.log(meaningOfObject([{name: 'Dima', age: 13}, {model: 'Camry'}]));
