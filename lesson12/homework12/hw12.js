// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let wrap = document.createElement('div');
// wrap.style.display = 'flex';
// wrap.style.flexWrap = 'wrap';
// fetch('https://jsonplaceholder.typicode.com/posts')
//      .then(response => response.json())
//      .then(posts => {
//     for (const post of posts) {
//         let divPost = document.createElement('div');
//         divPost.style.border = '1px solid black';
//         divPost.style.margin = '10px';
//         divPost.style.padding = '5px';
//         divPost.style.width = '18%';
//
//         for (const key in post) {
//             let div = document.createElement('div');
//             div.innerHTML = `<b>${key}:</b> ${post[key]}`;
//
//             divPost.append(div);
//         }
//         wrap.appendChild(divPost);
//     }
// })
// document.body.appendChild(wrap);

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let wrap = document.createElement("div");
wrap.style.display = 'flex';
wrap.style.flexWrap = 'wrap';

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            let divComment = document.createElement("div");
            divComment.style.border = '1px solid lightGrey';
            divComment.style.borderRadius = '10px';
            divComment.style.padding = '10px';
            divComment.style.margin = '10px';
            divComment.style.width = '17%';

            divComment.onmouseover = (e) => {
                divComment.style.backgroundColor = '#f6f6f6';
            }
            divComment.onmouseout = (e) => {
                divComment.style.backgroundColor = '#fff';
            }

            for (const key in comment) {
                let div = document.createElement("div");
                div.innerHTML = `<b>${key}</b>:  ${comment[key]}`;
                divComment.appendChild(div);
            }
            wrap.appendChild(divComment);
        }
    })

document.body.appendChild(wrap);
