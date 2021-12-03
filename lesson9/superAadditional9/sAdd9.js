// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    }, {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    }, {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    }, {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    }, {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    }, {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    }, {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    }, {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    }, {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    }, {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    }, {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let addressArray = [];
//
// for (const user of users) {
//     for (const key in user) {
//         if (typeof user[key] === 'object') {
//             addressArray.push(user[key]);
//         }
//     }
// }
// for (const address of addressArray) {
//
//     let div = document.createElement('div');
//     div.innerText = `Address: city - ${address.city} country - ${address.country} street - ${address.street} ${address.houseNumber}`;
//
//     document.body.appendChild(div);
// }
//------------------------------------------------------------------------------------------------------------------------------------
// let arr = [];
// for (const user of users) {
//
//     createDiv(user);
// }
//
// function createDiv(user) {
//     for (const key in user) {
//         if (typeof user[key] === 'object') {
//             arr.push(user[key]);
//             createDiv(user[key]);
//         }
//     }
// }
//
// for (const address of arr) {
//     let div = document.createElement('div');
//     div.innerText = `Address: city - ${address.city} country - ${address.country} street - ${address.street} ${address.houseNumber}`;
//
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//     let userDiv = document.createElement('div');
//     userDiv.style.backgroundColor = 'lightGrey';
//     userDiv.style.marginBottom = '10px';
//     userDiv.style.border = '5px solid darkGrey';
//     for (const key in user) {
//         for (const key1 in user[key]) {
//             userDiv.innerText = `name: ${user.name}
//             age: ${user.age}
//             status: ${user.status}
//             address:
//             city: ${user.address.city}
//             country: ${user.address.country}
//             street: ${user.address.street}
//             houseNumber: ${user.address.houseNumber}`
//         }
//     }
//
//     document.body.appendChild(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let userDiv = document.createElement('div');
//     let hr = document.createElement('hr');
//     userDiv.appendChild(hr);
//     for (const key in user) {
//         if (key !== 'address') {
//             let div = document.createElement('div');
//             div.style.backgroundColor = 'lightGrey';
//             div.innerHTML = `<b>${key}</b>: ${user[key]}`;
//             userDiv.appendChild(div);
//         } else {
//             let wordAddress = document.createElement('div');
//             wordAddress.style.backgroundColor = 'lightGrey';
//             wordAddress.style.fontWeight = 'bold';
//             wordAddress.innerText = 'address: ';
//             userDiv.appendChild(wordAddress);
//             for (const key1 in user[key]) {
//                 let address = document.createElement('div');
//                 address.style.backgroundColor = 'lightGrey';
//                 address.innerHTML = `<b>${key1}</b>: ${user[key][key1]}`;
//                 userDiv.appendChild(address);
//             }
//         }
//     }
//     document.body.appendChild(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     let userDiv = document.createElement('div');
//     let hr = document.createElement('hr');
//     userDiv.appendChild(hr);
//     for (const key in user) {
//         if (key !== 'address') {
//             let div = document.createElement('div');
//             div.style.backgroundColor = 'lightGrey';
//             div.innerHTML = `<b>${key}</b>: ${user[key]}`;
//             userDiv.appendChild(div);
//         } else {
//             let wordAddress = document.createElement('div');
//             wordAddress.style.backgroundColor = 'lightGrey';
//             wordAddress.innerHTML = '<b>address: </b>';
//             userDiv.appendChild(wordAddress);
//             for (const key1 in user[key]) {
//                 let address = document.createElement('div');
//                 address.style.backgroundColor = 'lightGrey';
//                 address.style.borderBottom = '1px solid darkGrey';
//                 address.innerHTML = `<b>${key1}</b>: ${user[key][key1]}`;
//                 wordAddress.appendChild(address);
//             }
//         }
//     }
//     document.body.appendChild(userDiv);
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let content = document.getElementById('content');
// let title = document.getElementsByTagName('h2');
//
// let ul = document.createElement('ul');
// for (const element of title) {
//     let li = document.createElement('li');
//     li.innerText = element.innerText;
//
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];


// rules.forEach((rule, index) => {
//     let div = document.createElement('div');
//     let id = document.createElement('div');
//     id.innerText = index + 1;
//
//     let h2 = document.createElement('h2');
//     h2.innerText = rule.title;
//     let p = document.createElement('p');
//     p.innerText = rule.body;
//
//     div.appendChild(id);
//     div.appendChild(h2);
//     div.appendChild(p);
//     document.body.appendChild(div);
// })