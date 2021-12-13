// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let buttonBack = document.createElement('button');
buttonBack.innerText = 'Back';

buttonBack.onclick = () => {
    history.back();
}

let buttonBackToUsers = document.createElement('button');
buttonBackToUsers.innerText = 'Back to users';

buttonBackToUsers.onclick = () => {
    location.pathname = '/js-module/mini_project/index.html';
}

let mainWrap = document.createElement('div');

let userId = localStorage.getItem('user_id');

fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
    .then(response => response.json())
    .then(posts => {

        let postWrap = document.createElement('div');

        for (const post of posts) {

            let divPost = document.createElement('div');

            divPost.innerHTML = `<b>Title:</b> ${post.title}`;

            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'Post details';

            buttonPost.onclick = () => {
                location.pathname = '/js-module/mini_project/post_details/post_details.html';
                localStorage.setItem('post_id', post.id);
            }

            divPost.appendChild(buttonPost);
            postWrap.appendChild(divPost);
        }

        mainWrap.appendChild(postWrap);
        mainWrap.appendChild(buttonBack);
        mainWrap.appendChild(buttonBackToUsers);
        document.body.appendChild(mainWrap);
    })
