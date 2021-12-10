let data = localStorage.getItem('favoritesUsers');
let users = JSON.parse(data);

for (const user of users) {
    let div = document.createElement('div');
    for (const key in user) {
        div.innerText += ` ${key}: ${user[key]}.`;
    }
    document.body.appendChild(div);

}
let buttonBack = document.createElement('button');
buttonBack.innerText = 'Back';
buttonBack.style.margin = '5px';

buttonBack.onclick =()=> {
history.back();
}

document.body.appendChild(buttonBack);
