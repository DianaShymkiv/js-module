// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let string = (str,symbol) => {
//     let newArr = [];
//     str.split(symbol).forEach(value => newArr.push(value));
//     console.log(newArr.join(' '));
// }
// string(n2,'-');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let rand = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * (100 - 1) + 1));

    }
    return arr;
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arr = rand(prompt(`enter the length of the array`));
// console.log(arr.sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arr = rand(prompt(`enter the length of the array`));
// console.log(arr.filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = rand(prompt(`enter the length of the array`));
// console.log(arr.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         console.log(arr.sort((a, b) => a - b));
//     } else if (direction === 'descending') {
//         console.log(arr.sort((a, b) => b - a));
//     } else {
//         console.log(`please, write correct sort direction`);
//     }
// }
// sortNums(rand(prompt(`enter the length of the array`)), prompt(`enter the sort direction`));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));