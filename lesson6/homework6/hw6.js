// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
//
// console.log(string1);
// console.log(string1.length);
// console.log(string2);
// console.log(string2.length);
// console.log(string3);
// console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
//
// console.log(string1.toUpperCase());
// console.log(string2.toUpperCase());
// console.log(string3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let string1 = 'HELLO WORLD';
// let string2 = 'LOREM IPSUM';
// let string3 = 'JAVASCRIPT IS COOL';
//
// console.log(string1.toLowerCase());
// console.log(string2.toLowerCase());
// console.log(string3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.length)
// let trim = str.trim();
// console.log(trim);
// console.log(trim.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let stringToArray = (str) => str.split(' ');
// let arr = stringToArray(str);
// document.write(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let deleteCharacters = (str, length) => str.slice(0, length);
// document.write(deleteCharacters(str, 7));

// let str = 'Каждый охотник желает знать';
// let deleteCharacters = (str, length) => str.substr(0, length);
// document.write(deleteCharacters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insertDash = (str) => {
//     let toUpperCase = str.toUpperCase().replaceAll(' ', '-');
//     return toUpperCase;
// }
// document.write(insertDash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let toUpperCaseSymbol = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
//
// console.log(toUpperCaseSymbol(prompt(`enter the string`)));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     let string = str.split(' ');
//     let newArr = [];
//     for (const stringElement of string) {
//         let newWord = stringElement.slice(0, 1).toUpperCase() + stringElement.slice(1);
//         newArr.push(newWord);
//         console.log(string);
//     }
//     return newArr.join(' ');
// }
//
// let string = capitalize(prompt(`enter the string`));
// console.log(string);


