// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','hello', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello;
// hello = "hello";
// console.log(hello);
// // alert(hello);
// document.write(hello);
//
// let owu = "owu";
// console.log(owu);
// // alert(owu);
// document.write(owu);
//
// let com = "com";
// console.log(com);
// // alert(com);
// document.write(com);
//
// let ua = "ua";
// console.log(ua);
// // alert(ua);
// document.write(ua);
//
// let one = 1;
// console.log(one);
// // alert(one);
// document.write(one);
//
// let ten = 10;
// console.log(ten);
// // alert(ten);
// document.write(ten);
//
// let negativeNumber = -999;
// console.log(negativeNumber);
// // alert(negativeNumber);
// document.write(negativeNumber);
//
// let number123 = 123;
// console.log(number123);
// // alert(number123);
// document.write(number123);
//
// let PI = 3.14;
// console.log(PI);
// // alert(PI);
// document.write(PI);
//
// let floatNumber = 2.7;
// console.log(floatNumber);
// // alert(floatNumber);
// document.write(floatNumber);
//
// let number16 = 16;
// console.log(number16);
// // alert(number16);
// document.write(number16);
//
// let boolTrue = true;
// console.log(boolTrue);
// // alert(boolTrue);
// document.write(boolTrue);
//
// let boolFalse = false;
// console.log(boolFalse);
// // alert(boolFalse);
// document.write(boolFalse);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// hello = "HELLO";
// console.log(hello);
// // alert(hello);
// document.write(hello);
//
// owu = "OWU";
// console.log(owu);
// // alert(owu);
// document.write(owu);
//
// com = "COM";
// console.log(com);
// // alert(com);
// document.write(com);
//
// ua = "UA";
// console.log(ua);
// // alert(ua);
// document.write(ua);
//
// one = -1;
// console.log(one);
// // alert(one);
// document.write(one);
//
// ten = -10;
// console.log(ten);
// // alert(ten);
// document.write(ten);
//
// negativeNumber = -99;
// console.log(negativeNumber);
// // alert(negativeNumber);
// document.write(negativeNumber);
//
// number123 = -123;
// console.log(number123);
// // alert(number123);
// document.write(number123);
//
// PI = 3.1415;
// console.log(PI);
// // alert(PI);
// document.write(PI);
//
// floatNumber = 5.9;
// console.log(floatNumber);
// // alert(floatNumber);
// document.write(floatNumber);
//
// number16 = -16;
// console.log(number16);
// // alert(number16);
// document.write(number16);
//
// boolTrue = false;
// console.log(boolTrue);
// // alert(boolTrue);
// document.write(boolTrue);
//
// boolFalse = true;
// console.log(boolFalse);
// // alert(boolFalse);
// document.write(boolFalse);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = "Diana";
// let middleName = "Mykhaylivna";
// let lastName = "Shymkiv";
//
// let person = console.log(firstName + " " + middleName + " " + lastName);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = prompt("Enter your name");
// let middleName = prompt("Enter your middle name");
// let age = prompt("Enter your age");
//
// console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Визначити відповідний оператор в виразах щоб вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 == 10);
// console.log(10 !== 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(123 === '123');
// console.log(123 == '123');

//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// 205 - str - тип string, а - number. При додаванні тип number перетвориться в тип string.

// document.write(str - a + "<br/>");
// 15 - При всіх математичних діях крім додавання число, яке є стрінгою буде поводитись як number.

// document.write(str * "2" + "<br/>");
// 40 - При всіх математичних діях крім додавання число, яке є стрінгою буде поводитись як number.

// document.write(str / 2 + "<br/>");
// 10 - При всіх математичних діях крім додавання число, яке є стрінгою буде поводитись як number.