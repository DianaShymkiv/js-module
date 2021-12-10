// є масив -

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

let favorites = [];
localStorage.setItem('favoritesUsers', JSON.stringify(favorites));

for (const user of users) {
    let div = document.createElement('div');
    div.innerHTML = `<b>name:</b> ${user.name}, <b>age:</b> ${user.age}, <b>status:</b> ${user.status}`;

    let button = document.createElement('button');
    button.innerText = 'add to favorite';
    button.style.margin = '5px';

    div.appendChild(button);
    document.body.appendChild(div);

    button.onclick = () => {
        let data = localStorage.getItem('favoritesUsers');
        let users = JSON.parse(data);
        users.push(user);
        localStorage.setItem('favoritesUsers', JSON.stringify(users));
    }
}

// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.

let buttonFavorites = document.createElement('button');
buttonFavorites.innerText = 'favorites list';
buttonFavorites.style.margin = '5px';

buttonFavorites.onclick = () => {
    location.pathname = '/js-module/lesson11/classwork11/favorites.html';
}

document.body.appendChild(buttonFavorites);

