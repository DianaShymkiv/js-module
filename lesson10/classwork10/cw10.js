// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement('form');
// form1.setAttribute('name','form1');
//
// let form2 = document.createElement('form');
// form2.setAttribute('name', 'form2');
//
// let inputName1 = document.createElement('input');
// inputName1.setAttribute('name', 'inputName1');
//
// let inputAge1 = document.createElement('input');
// inputAge1.setAttribute('name', 'inputAge1');
//
// let inputName2 = document.createElement('input');
// inputName2.setAttribute('name', 'inputName2');
//
// let inputAge2 = document.createElement('input');
// inputAge2.setAttribute('name', 'inputAge2');
//
// let button = document.createElement('button');
// button.innerText = 'info';
//
// button.onclick = () => {
//     console.log(document.forms.form1.inputName1.value);
//     console.log(document.forms.form1.inputAge1.value);
//     console.log(document.forms.form2.inputName2.value);
//     console.log(document.forms.form2.inputAge2.value);
// }
//
// form1.append(inputName1, inputAge1);
// form2.append(inputName2, inputAge2);
// document.body.append(form1, form2, button);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let div = document.createElement('div');
//
// let inputRows = document.createElement('input');
// inputRows.setAttribute('name', 'inputRows');
// inputRows.style.marginBottom = '5px';
//
// let inputColumns = document.createElement('input');
// inputColumns.setAttribute('name', 'inputColumns');
// let inputText = document.createElement('input');
//
// let button = document.createElement('button');
// button.innerText = 'table';
// button.style.margin = '5px';
//
// div.append(inputRows, inputColumns, inputText, button);
// document.body.appendChild(div);
//
// button.onclick = () => {
//
//     let row = inputRows.value;
//     let column = inputColumns.value;
//     let text = inputText.value;
//
//     let table = document.createElement('table');
//     div.appendChild(table);
//
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < column; j++) {
//             let td = document.createElement('td');
//             td.innerText = text;
//             td.style.border = '1px solid darkGrey';
//             table.appendChild(tr);
//             tr.appendChild(td);
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let words = ['gff', 'bvh', 'fff'];
//
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'check';
//
// document.body.append(input, button);
//
// button.onclick = () => {
//
//     for (const word of words) {
//         let xxx = input.value;
//         if (word === xxx) {
//             alert('!!!');
//         } else {
//             alert('OK');
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let words = ['gff', 'bvh', 'fff'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// let button = document.createElement('button');
// button.innerText = 'check';
//
// document.body.append(input,button);
//
// button.onclick = () => {
//     let arr = input.value.split(' ');
//     let array = [];
//
//     words.forEach(value => {
//      if (arr.includes(value)){
//          array.push(value)
//      }
//     })
//     if (array.length){
//        alert(`your string include : ${array.join()}`) ;
//     }else {
//         alert('ok')
//     }
// }



