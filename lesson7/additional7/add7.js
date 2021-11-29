// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: {
            lat: lat,
            lng: lng
        }
    }
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyName,
        catchPhrase: catchPhrase,
        bs: bs
    }
    // this.info = function () {
    //     console.log(`
    //      id: ${this.id},
    //      name: ${this.name},
    //      username: ${this.surname},
    //      email: ${this.email},
    //      address: {
    //          street: ${this.address.street},
    //          suite: ${this.address.suite},
    //          city: ${this.address.city},
    //          zipcode: ${this.address[zipcode]},
    //          geo: {
    //              lat: ${this.address.geo.lat},
    //              lng: ${this.address.geo.lng}.
    //     `);
    //     console.log(`
    //     phone: ${this.phone},
    //     website: ${this.website},
    //     company: {
    //          name: ${this.company.name},
    //          catchPhrase: ${this.company.catchPhrase},
    //          bs: ${this.company.bs}.
    //     `);
    // }

}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Sincere@april.biz',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

// console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tags {
    constructor(nameOfTag, action, attribute) {
        this.name = nameOfTag;
        this.action = action;
        this.attr = attribute;
    };
}

let aTag = new Tags('<a>',
    `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...`,
    [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
        {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}]);

let divTag = new Tags('<div>',
    `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого...`,
    [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);

let h1Tag = new Tags('<h1>', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня',
    [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]);

let spanTag = new Tags('<span>', 'Тег <span> предназначен для определения строчных элементов документа.',
    [{
        titleOfAttr: 'accesskey',
        actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
    },
        {
            titleOfAttr: 'class',
            actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
        },
        {
            titleOfAttr: 'contenteditable',
            actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'
        }]);

let inputTag = new Tags('<input>',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса...',
    [{
        titleOfAttr: 'accept',
        actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
    },
        {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
        {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'}]);

let formTag = new Tags('<form>', 'Тег <form> устанавливает форму на веб-странице.',
    [{
        titleOfAttr: 'accept-charset',
        actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
    },
        {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
        {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'}]);

let optionTag = new Tags('<option>', ' Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
        {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}]);

let selectTag = new Tags('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также...',
    [{titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
        {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
        {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'}]);

// console.log(aTag);