// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

function rec(user, wrapper) {
    for (const key in user) {
        let div = document.createElement('div');
        if (typeof user[key] === 'object') {
            rec(user[key], div);
        } else {
            div.innerHTML += `<b>${key}:</b> ${user[key]}`;
        }
        wrapper.appendChild(div);
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let wrap = document.createElement('div');

        for (const user of users) {

            let divUser = document.createElement('div');
            divUser.style.width = '400px';
            divUser.style.margin = '15px';
            divUser.style.padding = '20px';
            divUser.style.border = '1px solid darkGrey';
            divUser.style.borderRadius = '10px';
            divUser.style.display = 'flex';
            divUser.style.flexDirection = 'column';
            // divUser.style.alignItems = 'center';

            divUser.onmouseover = (e) => {
                divUser.style.backgroundColor = '#f6f6f6';
                divUser.style.transition = '.3s';
            };
            divUser.onmouseout = (e) => {
                divUser.style.backgroundColor = '#fff';
                divUser.style.transition = '.3s';
            };

            rec(user, divUser);

            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'Posts';

            buttonPost.style.boxShadow = '3px 4px 5px 1px darkGrey';
            buttonPost.style.border = '.1px solid lightGrey';
            buttonPost.style.padding = '10px';
            buttonPost.style.margin = '10px';
            buttonPost.style.borderRadius = '4px';

            let counter = 0;
            let counter1 = 0;
            let postWrap = document.createElement('div');

            buttonPost.addEventListener('click', e => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            let divPost = document.createElement('div');
                            divPost.style.margin = '15px';
                            divPost.style.width = '350px';
                            divPost.style.padding = '10px';
                            divPost.style.border = '1px solid darkGrey';
                            divPost.style.borderRadius = '10px';
                            divPost.style.display = 'flex';
                            divPost.style.flexDirection = 'column';
                            divPost.style.alignItems = 'center';
                            divPost.style.boxShadow = '0 0 15px 3px lightGrey';

                            divPost.onmouseover = (e) => {
                                divPost.style.backgroundColor = '#fff';
                                divPost.style.transition = '.3s';
                            };
                            divPost.onmouseout = (e) => {
                                divPost.style.backgroundColor = '#f6f6f6';
                                divPost.style.transition = '.3s';
                            };

                            if (user.id === post.userId) {
                                divPost.innerHTML = `
                                <h2>ID: ${post.id}</h2>
                                <h3>Title: ${post.title}</h3>
                                <p><b>Body:</b> ${post.body}</p>`;

                                postWrap.appendChild(divPost);
                            }

                            let buttonComments = document.createElement('button');
                            buttonComments.innerText = 'Comments';
                            buttonComments.style.boxShadow = '3px 4px 5px 1px darkGrey';
                            buttonComments.style.border = '.1px solid lightGrey';
                            buttonComments.style.padding = '10px';
                            buttonComments.style.borderRadius = '4px';

                            let commentWrap = document.createElement('div');

                            buttonComments.addEventListener('click', ev => {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(response => response.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            if (post.id === comment.postId) {

                                                let divComment = document.createElement('div');

                                                divComment.style.margin = '15px 5px 5px';
                                                divComment.style.width = '390px';
                                                divComment.style.padding = '10px';
                                                divComment.style.border = '1px solid darkGrey';
                                                divComment.style.borderRadius = '10px';
                                                divComment.style.boxShadow = '0 0 15px 3px lightGrey';
                                                divComment.style.backgroundColor = '#fff';

                                                divComment.onmouseover = (e) => {
                                                    divComment.style.backgroundColor = '#f6f6f6';
                                                    divComment.style.transition = '.3s';
                                                };
                                                divComment.onmouseout = (e) => {
                                                    divComment.style.backgroundColor = '#fff';
                                                    divComment.style.transition = '.3s';
                                                };

                                                divComment.innerHTML = `
                                                     <h2>ID: ${comment.id}</h2>
                                                     <h3>Name: ${comment.name}</h3>
                                                     <p><b>Email:</b> ${comment.email}</p>
                                                     <p><b>Body:</b> ${comment.body}</p>`;

                                                commentWrap.appendChild(divComment);
                                            }
                                        }

                                        divPost.appendChild(commentWrap);
                                    })

                                if (!(counter1 % 2)) {
                                    commentWrap.hidden = false;
                                } else {
                                    commentWrap.hidden = true;
                                }
                                counter1++;
                            })

                            divPost.appendChild(buttonComments);
                        }
                        divUser.appendChild(postWrap);
                    })
                if (!(counter % 2)) {
                    postWrap.hidden = false;
                } else {
                    postWrap.hidden = true;
                }
                counter++;
            })

            divUser.appendChild(buttonPost);
            wrap.appendChild(divUser);
        }

        document.body.appendChild(wrap);
    })