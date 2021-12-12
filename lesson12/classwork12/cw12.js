// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let wrap = document.createElement('div');
wrap.style.display = 'flex';
wrap.style.justifyContent = 'center';

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        let divPost = document.createElement('div');

        for (const post of posts) {
            let div = document.createElement('div');
            div.style.width = '400px';
            div.style.margin = '15px';
            div.style.padding = '10px';
            div.style.border = '1px solid darkGrey';
            div.style.borderRadius = '10px';
            div.style.display = 'flex';
            div.style.flexDirection = 'column';
            div.style.alignItems = 'center';

            div.onmouseover = (e) => {
                div.style.backgroundColor = '#f6f6f6';
                div.style.transition = '.3s';
            }
            div.onmouseout = (e) => {
                div.style.backgroundColor = '#fff';
                div.style.transition = '.3s';
            }

            div.innerHTML = `
                <h2>ID: ${post.id}</h2>
                <h3>Title: ${post.title}</h3>
                <p><b>Body:</b> ${post.body}</p>`;

            let button = document.createElement('button');
            button.innerText = 'comments';
            button.style.boxShadow = '3px 4px 5px 1px darkGrey';
            button.style.border = '.1px solid lightGrey';
            button.style.padding = '10px';
            button.style.borderRadius = '4px';
            // button.style.fontWeight = 'bold';

            let counter = 0;
            let divC = document.createElement('div');

            button.addEventListener('click', e => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {

                                let divComment = document.createElement('div');
                                divComment.style.margin = '15px';
                                divComment.style.padding = '10px';
                                divComment.style.border = '1px solid darkGrey';
                                divComment.style.borderRadius = '10px';
                                divComment.style.boxShadow = '0 0 15px 3px lightGrey';
                                divComment.style.backgroundColor = '#fff';

                                divComment.innerHTML = `
                                        <h2>ID: ${comment.id}</h2>
                                        <h3>Name: ${comment.name}</h3>
                                        <p><b>Email:</b> ${comment.email}</p>
                                        <p><b>Body:</b> ${comment.body}</p>`;


                                divC.appendChild(divComment);
                            }
                        }
                        div.appendChild(divC);
                    })

                if (!(counter % 2)) {
                    divC.hidden = false;
                } else {
                    divC.hidden = true;
                }
                console.log(counter)
                counter++;

            })

            div.appendChild(button);
            divPost.appendChild(div);
        }
        wrap.appendChild(divPost);

    })

document.body.appendChild(wrap);
