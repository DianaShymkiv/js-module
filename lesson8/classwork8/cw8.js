// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// document.getElementById(`main_header`).classList.add(`september2021`);

// b) робить шириниу елементу ul 400px

// let ul = document.getElementsByTagName('ul');
// for (const ulElement of ul) {
//     ulElement.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linklist = document.getElementsByClassName('linkList');
// for (const linklistElement of linklist) {
//     linklistElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let listElement = document.getElementsByClassName('listElement2');
// for (const listElementElement of listElement) {
//     let xxx = listElementElement.innerText;
//     console.log(xxx);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liBackground = document.getElementsByTagName('li');
// for (const liBackgroundElement of liBackground) {
//     liBackgroundElement.style.backgroundColor = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aTags = document.getElementsByTagName('a');
// for (const aTag of aTags) {
//     aTag.classList.add('anchor');
//     console.log(aTag);
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aTags = document.getElementsByTagName('a');
// for (const aTag of aTags) {
//     if (aTag.innerText === 'link3'){
//         aTag.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aTags = document.getElementsByTagName('a');
// for (const aTag of aTags) {
//     let xxx = aTag.innerText;
//     aTag.classList.add(`element_${xxx}`);
// }
//     console.log(aTags);

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
//
// let color = prompt('enter the background color');
// for (const subHeaderElement of subHeader) {
//
//     subHeaderElement.style.backgroundColor = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
//
// let color = prompt('enter the background color');
// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.innerText === 'content 2 segment') {
//
//         subHeaderElement.style.color = color;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content1 = document.getElementsByClassName('content_1');
//
// let text = prompt('enter the text');
// for (const contentElement of content1) {
//
//     contentElement.innerText = text;
// }

// l) отримати елементи p та змінити їм padding на 20px

// let pTags = document.getElementsByTagName('p');
// for (const pTag of pTags) {
//     pTag.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
//     text2Element.innerText = 'sep-2021';
// }
