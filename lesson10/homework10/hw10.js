// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.createElement('div');
// text.setAttribute('id', 'text');
// text.innerText = 'some text';
// let button = document.createElement('button');
// button.innerText = 'delete text';
// button.onclick = function () {
//     // document.getElementById('text').hidden = true;
//     text.style.display = 'none';
// }
//
// document.body.append(text, button);

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText = 'delete';
// button.onclick = function () {
//     button.hidden = true;
// }
//
// document.body.appendChild(button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form = document.createElement('form');
//
// let input = document.createElement('input');
// input.setAttribute('type', 'number');
// input.setAttribute('name', 'age');
// let button = document.createElement('button');
// button.innerText = 'save';
//
// form.onsubmit = function (e) {
//     console.log(e)
//     e.preventDefault();
//     let age = this.age.value;
//     if (age > 18) {
//         alert(`your age is more than 18 - ${age}`);
//     } else if (age > 0 && age < 18) {
//         alert(`your age is less than 18 - ${age}`);
//     } else if (age === 18) {
//         alert('your age is 18');
//     } else {
//         alert('please, enter the valid age');
//     }
// }
//
// form.append(input, button);
// document.body.append(form);

// - Создайте меню, которое раскрывается/сворачивается при клике

// let div = document.createElement('div');
// div.innerText = 'menu';
// let button = document.createElement('button');
// button.style.margin = '5px';
// button.innerText = '...';
// let divList = document.createElement('div');
//
// let ul = document.createElement('ul');
// for (let i = 0; i < 5; i++) {
//     let li = document.createElement('li');
//     li.innerText = 'some text';
//     ul.appendChild(li);
// }
//
// let counter = 0;
// button.addEventListener("click", e => {
//     if (!(counter % 2)) {
//         ul.hidden = true
//     } else {
//         ul.hidden = false
//     }
//     counter++;
// })
//
// div.append(button, divList);
// divList.appendChild(ul);
// document.body.appendChild(div);

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let ul = document.createElement("ul");
let arr = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
];


for (const item of arr) {
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    h2.innerText = item.title;
    let p = document.createElement('p');
    p.innerText = item.body;
    let button = document.createElement('button');
    button.innerText = 'more';
    let counter = 0;
    button.addEventListener("click", e => {
        if (!(counter % 2)) {
            p.hidden = true
        } else {
            p.hidden = false
        }
        counter++;
    })

    li.append(h2, p, button);
    ul.appendChild(li);
}

document.body.appendChild(ul);
