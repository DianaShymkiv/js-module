// - Дано натуральное число n. Выведите все числа от 1 до n.

// const numbers = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// numbers(prompt(`enter the n`));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// const range = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//
//         }
//     } else if (b < a) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//
//         }
//     } else {
//         console.log(`Сафонов Кирило найкращий ментор`);
//     }
// }
// range(prompt(`enter the first number`), prompt(`enter the second number`));

// -  функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// const randArr = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//
// let arr = randArr(prompt(`enter the length of the array`));
// console.log(arr);
//
// let changeItem = (array, i) => {
//     if (i < array.length) {
//         let x = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = x;
//     }
//     return array;
// }
// console.log(changeItem(arr, 0));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// const arrFunction = (length) => {
//     let array = [];
//     if (length <= 100 && length >= 2) {
//         for (let i = 0; i < length; i++) {
//             array[i] = +prompt(`enter the number of the array`);
//
//         }
//     } else {
//         alert(`enter a number for 2 to 100`);
//     }
//     return array;
// }
//
// let array = arrFunction(prompt(`enter the length of the array`));
// console.log(array);
//
// const zeroFunction = (arr) => {
//     let zeroArr = [];
//     let numberArr = [];
//     for (const number of arr) {
//         if (number === 0) {
//             zeroArr.push(number);
//
//         } else {
//             numberArr.push(number);
//         }
//     }
//     return numberArr.concat(zeroArr);
// }
// console.log(zeroFunction(array));