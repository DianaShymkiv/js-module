// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNumbers = [1, 2, 3, 4, 5];
// console.log(arrNumbers);
//
// let arrStrings = ['a', 'b', 'c', 'd', 'e'];
// console.log(arrStrings);
//
// let arr = [11, true, "okten", 3.14, '45' ];
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
//
// arr[0] = 1;
// arr[1] = false;
// arr[2] = 'owu';
// arr[3] = 5.5;
// arr[4] = 'a';
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Text</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div> index: '+ i +'</div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<20){
//     document.write('<h1>Text</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20) {
//     document.write('<h1>index: ' + i + '</h1>');
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['a', 56, true, 'owu', 3.14, 'hi', false, '1', 10, 'f'];
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['a', 56, true, 'owu', 3.14, 'hi', false, '1', 10, true];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === "boolean") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елемент

// let arr = ['a', 56, true, 'owu', 3.14, 'hi', false, '1', 10, true];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     typeof arrElement === 'number' ? console.log(arrElement) : '';
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = ['a', 56, true, 'owu', 3.14, 'hi', false, '1', 10, true];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     typeof arrElement === 'string' ? console.log(arrElement) : '';
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 1;
// arr[1] = 'a';
// arr[2] = true;
// arr[3] = 3.14;
// arr[4] = 'true';
// arr[5] = 'okten';
// arr[6] = 10;
// arr[7] = false;
// arr[8] = "1";
// arr[9] = 5;
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <=100; i++) {
//     console.log(i);
//     document.write(i + '<br>');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <100; i+=2) {
//     console.log(i);
//     document.write(i + '<br>');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2===0) {
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i+=2) {
//     console.log(i);
//     document.write(i + '<br>');
// }

