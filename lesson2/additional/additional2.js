// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     console.log('це великий масив, в якому  3 і більше елементи');
// } else {
//     console.log('це маленький масив, в якому менше 3-х елементів');
// }

//
//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let firstNumber = +prompt('enter the first number');
// let secondNumber = +prompt('enter the second number');
// let thirdNumber = +prompt('enter the third number');
//
// if ((firstNumber > secondNumber && firstNumber < thirdNumber) || (firstNumber > thirdNumber && firstNumber < secondNumber)) {
//     console.log('the first is in the middle');
// } else if ((secondNumber > firstNumber && secondNumber < thirdNumber) || (secondNumber > thirdNumber && secondNumber < firstNumber)) {
//     console.log('the second is in the middle');
// } else if ((thirdNumber > secondNumber && thirdNumber < firstNumber) || (thirdNumber > firstNumber && thirdNumber < secondNumber)) {
//     console.log('the third is in the middle');
// } else {
//     console.log('????');
// }

//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//

// let result;
// let a = +prompt('enter a number');
// let b = +prompt( 'enter a number');
//
// (a + b < 4) ? result = 'Мало' :  result = 'Багато';
// console.log(result);

//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


// let number = +prompt(' enter a number');
//
// (number < 0 ) ? console.log('the number is negative') : (number > 0 ) ? console.log('the number is positive') : console.log(" the numner is 0");