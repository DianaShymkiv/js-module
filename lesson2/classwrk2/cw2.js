// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//

// let firstNumber = +prompt('Enter a first number');
// let secondNumber = +prompt('Enter a second number');
//
// if (firstNumber < secondNumber){
//     console.log('The second number is bigger');
// } else if (firstNumber > secondNumber){
//     console.log('The first number is bigger');
// } else {
//     console.log('Numbers are equal');
// }

//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//

// let number = prompt('enter a number from 1 to 90');
//
// if (number >= 1 && number <= 20) {
//     console.log('first');
// } else if (number >= 21 && number <= 48) {
//     console.log('second');
// } else if (number >= 49 && number <=90) {
//     console.log('third');
// } else {
//     console.log('please enter the correct number of flat')
// }

//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна
// 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('enter a number');
//
// if (number === 10) {
//     console.log('ВІРНО');
// } else {
//     console.log('НЕВІРНО');
// }

//
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = [];
//
// if (typeof x === "number") {
//     console.log(1);
// } else if (typeof x === "string") {
//     console.log(2);
// } else if (typeof x === "boolean" || typeof x === "object") {
//     console.log(3);
// } else {
//     console.log("???");
// }

//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = +prompt('enter the temperature');
//
// if (temperature>=10 && temperature <=22){
//     console.log('ми йдемо ВЧИТИСЯ');
// }else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН');
// }

//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let prize = +prompt('enter a number from 1 to 5');
//
// switch (prize) {
//     case 1:
//         console.log('Your prize is car');
//         break;
//     case 2:
//         console.log('Your prize is moto');
//         break;
//     case 3:
//         console.log('Your prize is phone');
//         break;
//     case 4:
//         console.log('Your prize is money');
//         break;
//     case 5:
//         console.log('Your prize is doll');
//         break;
//     default:
//         console.log('You havent won anything, enter the correct number');
//
// }
