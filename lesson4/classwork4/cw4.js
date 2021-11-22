// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber(a, b, c) {
//     let min;
//     if (a < b && a < c) min = a;
//     if (b < a && b < c) min = b;
//     if (c < b && c < b) min = c;
//     console.log(min);
// }
//
// minNumber(prompt('enter the first number'), prompt('enter the second number'), prompt('enter the third number'));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(a,b,c) {
//     let max;
//     if (a>b && a>c) max=a;
//     if (b>a && b>c) max=b;
//     if (c>b && c>a) max=c;
//     console.log(max);
// }
//
// maxNumber(prompt('enter the first number'), prompt('enter the second number'), prompt('enter the third number'));

// - створити функцію яка повертає найбільше число з масиву

function arrFunction() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * (100 - 1) + 1);
    }
    return arr;
}

let arr = arrFunction();
console.log(arr);

// function maxNumber() {
//     let max = arr[0];
//     for (const maxElement of arr) {
//         if (max < maxElement) max = maxElement;
//     }
//     return max;
// }
//
// console.log(arr);
// console.log(maxNumber(arr));

// - створити функцію яка повертає найменьше число з масиву

// function minNumber(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (min > minElement) min = minElement;
//     }
//     return min;
// }
//
// console.log(minNumber(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sumOfArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
//
// console.log(arr);
// console.log(sumOfArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function averageValue(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum+=item;
//     }
//     return sum/arr.length;
// }
//
// console.log(arr);
// console.log(averageValue(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function numbers() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const number of arguments) {
//         if (number<min) min=number;
//         if (number>max) max=number;
//     }
//     console.log(max);
//     return min;
// }
//
// numbers(2,5,7,9,12,4,5,8);

// - створити функцію яка заповнює масив рандомними числами

// function arrFunction() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * (100 - 1) + 1);
//     }
//     return arr;
// }
//
// console.log(arrFunction());

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function rand(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//
// console.log(rand(prompt('enter length of array')));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function rand(limit) {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// console.log(rand(prompt('enter the of random numbers')));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3];

// function reverseArr(arr) {
//     let arrReverse = [];
//     arrReverse = arr.reverse();
//     return arrReverse;
// }
//
// console.log(reverseArr(arr));

// function reverseArr(array) {
//     let newArr = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArr.push(array[i]);
//     }
//     return newArr;
// }
//
// console.log(reverseArr(arr));

// function reverseArr(array) {
//     let newArr = [];
//     for (let i = array.length - 1, ri = 0; i >= 0, ri < array.length; i--, ri++) {
//         newArr[ri] = array[i];
//     }
//     return newArr;
// }
//
// console.log(reverseArr(arr));

