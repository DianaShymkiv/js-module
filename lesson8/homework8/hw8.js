// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//  - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

// console.log(document.getElementById("content"));

// -- отримує текст з блоку з id "rules"

// console.log(document.getElementById(`rules`));

// -- замініть текст параграфа з id 'content' на будь-який інший

// let idContent = document.getElementById("content");
// idContent.innerText = `new text`;

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let idRules = document.getElementById(`rules`);
// idRules.innerHTML = `<b>new text</b>`;

// -- змініть кожному елементу колір фону на червоний

// let elements = document.body.children;
// for (const element of elements) {
//     element.style.backgroundColor = `red`;
// }

// -- змініть кожному елементу колір тексту на синій

// let elements = document.body.children;
// for (const element of elements) {
//     element.style.color = `blue`;
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let idRules = document.getElementById(`rules`);
// console.log(idRules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let classRules = document.getElementsByClassName(`fc_rules`);
// for (const element of classRules) {
//     element.style.color = `red`;
// }