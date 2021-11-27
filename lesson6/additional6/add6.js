// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let arr = [];
//
//     for (let i = 0; i < str.length; i += n) {
//         arr.push(str.slice(i, i + n));
//
//     }
//     return arr;
//
// }
//
// console.log(cutString(prompt(`enter the string`), +prompt(`enter the n`)));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// let emailValidator = (email) => {
//     let arrAfterSnail = [];
//
//     let toUpperCaseEmail = email.toUpperCase();
//     if (toUpperCaseEmail.indexOf(`@`) >= 1) {
//         let arr = toUpperCaseEmail.split(`@`);
//         arrAfterSnail = arr.slice(1);
//         if (arrAfterSnail[0].indexOf(`.`) >= 2) {
//             console.log(`true`);
//         } else {
//             console.log(`false`);
//         }
//     }
// }
//
// emailValidator(`someeMAIL@i.ua`);

// let emailValidator = (email) => {
//     let arr = email.split(`@`);
//     let newArr = arr[1].split(`.`);
//     if (arr[0] === '' || arr[0].includes(`.`) || arr[0].length <= 2)
//         console.log(`Email is invalid`);
//     else console.log(`Email - ` + email + `- is valid`);
// }
//
// emailValidator(`some.email@gmail.com`);

// - є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let count = (str, stringsearch) => {
//     let arr = [];
//     let string = str.split('');
//     for (const strElement of string) {
//         if (!(stringsearch > 2) && strElement === stringsearch) arr.push(strElement);
//     }
//     return arr.length;
// }
// console.log(count(prompt(`enter the string`), prompt(`enter the searchElement`)));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutString = (str, n) => {
//     let string = str.split(' ', n);
//     console.log(string.join(' '));
// }
//
// cutString(prompt(`enter the string`), +prompt(`enter the count of words`));
