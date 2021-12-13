// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let buttonBack = document.createElement('button');
buttonBack.innerText = 'Back to users';

buttonBack.onclick = () => {
    history.back();
}

let buttonPost = document.createElement('button');
buttonPost.innerText = 'Posts of user';

buttonPost.onclick = () => {
    location.pathname = '/js-module/mini_project/user_posts/user_posts.html';
}

function userDetails(user, wrapper) {
    for (const key in user) {
        let div = document.createElement('div');
        if (typeof user[key] === 'object') {
            userDetails(user[key], div);
        } else {
            div.innerHTML += `<b>${key}:</b> ${user[key]}`;
        }

        wrapper.appendChild(div);
    }
}

let mainWrap = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let userId = localStorage.getItem('user_id');

        // console.log(userId);
        let wrap = document.createElement('div');
        for (const user of users) {

            let divUser = document.createElement('div');

            if (user.id == userId) {

                userDetails(user, divUser);
                wrap.appendChild(divUser);

            }
        }

        mainWrap.appendChild(wrap);
        mainWrap.appendChild(buttonBack);
        mainWrap.appendChild(buttonPost);
        document.body.appendChild(mainWrap);
    })

