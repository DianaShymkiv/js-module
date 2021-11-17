// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
//  while (i<arr.length){
//      console.log(arr[i]);
//      i++;
//  }

// 2. перебрати його циклом for

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 1;
// while (i < arr.length) {
//     console.log(arr[i] + " index: " + i );
//     i+=2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 1; i < arr.length; i+=2) {
//     console.log(arr[i] + " index: " + i );
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i]%2===0)
//         console.log(arr[i]);
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0)
//         console.log(arr[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0)
//         arr[i] = 'okten';
//     console.log(arr[i]);
// }

// 8. вивести масив в зворотньому порядку.

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let newArr = arr.reverse();
// console.log(newArr);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arr.length;
//  while (i>0){
//      console.log(arr[i]);
//      i--;
//  }

//2.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

//3.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let newArr = arr.reverse();
// let i = 1;
// while (i < newArr.length) {
//     console.log(newArr[i] + " index: " + i );
//     i+=2;
// }

//4.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arr.length - 1; i >= 0; i-=2) {
//     console.log(arr[i] + " index: " + i );
// }

//5.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let newArr = arr.reverse();
// let i = 0;
// while (i < newArr.length) {
//     if (newArr[i]%2===0)
//         console.log(newArr[i]);
//     i++;
// }

//6.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0)
//         console.log(arr[i]);
// }

//7.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0)
//         arr[i] = 'okten';
//     console.log(arr[i]);
// }
