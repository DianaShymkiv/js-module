// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const minNumber = (firstNum, secondNum, thirdNum) => {
//     let min;
//     if (firstNum < secondNum && firstNum < thirdNum) min = firstNum;
//     if (secondNum < firstNum && secondNum < thirdNum) min = secondNum;
//     if (thirdNum < firstNum && thirdNum < secondNum) min = thirdNum;
//     console.log(min);
// }
// minNumber(prompt('enter the first number'), prompt('enter the second number'),prompt('enter the third number'));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const maxNumber = (firstNum, secondNum, thirdNum) => {
//     let max;
//     if (firstNum > secondNum && firstNum > thirdNum) max = firstNum;
//     if (secondNum > firstNum && secondNum > thirdNum) max = secondNum;
//     if (thirdNum > firstNum && thirdNum > secondNum) max = thirdNum;
//     console.log(max);
// }
// maxNumber(prompt('enter the first number'), prompt('enter the second number'), prompt('enter the third number'));

// - створити функцію яка повертає найбільше число з масиву

const randArr = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}

let arr = randArr(prompt(`enter the length of the array`));
console.log(arr);
//
// const maxNumber = (array) => {
//     let max = array[0];
//     for (const maxElement of array) {
//         if (max < maxElement) max = maxElement;
//     }
//     return max;
// }
// console.log(maxNumber(arr));

// - створити функцію яка повертає найменьше число з масиву

// let arr = randArr(prompt(`enter the length of the array`));
// console.log(arr);
//
// const minNumber = (array) => {
//     let min= array[0];
//     for (const minElement of array) {
//         if (min > minElement) min = minElement;
//     }
//     return min;
// }
// console.log(minNumber(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = randArr(prompt(`enter the length of the array`));
// console.log(arr);
//
// const sumOfArray = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// console.log(sumOfArray(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = randArr(prompt(`enter the length of the array`));
// console.log(arr);
//
// const averageValue = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//
//     return Math.round(sum / array.length);
// }
// console.log(averageValue(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const numbers = (...arr) => {
//     let min = arr[0];
//     let max = arr[0];
//     for (const number of arr) {
//         if (number < min) min = number;
//         if (number > max) max = number;
//     }
//     console.log(`Max number is`, max);
//     return min;
// }
// console.log(`Min number is `, numbers(4,5,2,1,0));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// const rand = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random()*(100-1) +1);
//     }
//     return arr;
// }
// console.log(rand(prompt(`enter the length of the array`)));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const rand = (length, minLimit, maxLimit) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random() * (maxLimit - minLimit) + minLimit);
//     }
//     return arr;
// }
// console.log(rand(prompt(`enter the length of the array`), prompt(`enter the number from which range will be`), prompt(`enter the number to which the range will be`)));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = randArr(prompt(`enter the length of the array`));
// console.log(arr);
//
// const reverse = (array) => {
//     let arrReverse = [];
//     arrReverse = arr.reverse();
//     return arrReverse;
// }
// console.log(reverse(arr));
