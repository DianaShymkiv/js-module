function UserCard(key) {
    this.card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: key,
    }

    this.putCredits = function (money) {
        if (money > 0) {
            this.card.balance += money;
            this.card.historyLogs.push({
                operationType: 'Received credits',
                credits: money,
                operationTime: `${new Date()}`
            })
        }
    }
    this.takeCredits = function (money) {
        if (money > 0 && this.card.balance >= money && this.card.transactionLimit >= money) {
            this.card.balance -= money;
            this.card.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: money,
                operationTime: `${new Date()}`
            })
        } else {
            console.error('Error : not enough funds on the card');
        }

    }
    this.setTransactionLimit = function (number) {
        this.card.transactionLimit = number;
        this.card.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: number,
            operationTime: `${new Date()}`
        })
    }

    this.transferCredits = function (numberOfCredits, card) {
        if (this.card.balance > numberOfCredits && this.card.transactionLimit > numberOfCredits) {
            let transaction = numberOfCredits + (numberOfCredits * 0.005);
            this.takeCredits(transaction);
            card.putCredits(numberOfCredits);
        }
    }
    this.getCardOptions = function () {
        console.log(this.card);
    }


}

// let card2 = new UserCard(2);
// let card1 = new UserCard(1);
// card1.getCardOptions();
// card2.getCardOptions();
// card1.putCredits(100);
// card1.getCardOptions();
// card1.takeCredits(50);
// card1.getCardOptions();
// card1.setTransactionLimit(5000);
// card1.getCardOptions();
// card2.getCardOptions();
// card1.transferCredits(100,card2)
// card1.getCardOptions();
// card2.getCardOptions();

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard(key) {
        if (this.cards.length < 3) {
            this.cards.push(new UserCard(key));
        } else {
            console.error('Error : You have more than 3 cards');
        }
    }

    getCardByKey(key) {
        for (const card of user.cards) {
            if (card.key === key) {
                return card;
            }
        }
    }

}


let user = new UserAccount('Bob');
user.addCard(1);
user.addCard(2);

user.cards[0].getCardOptions();
user.cards[1].getCardOptions();


let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);


card1.getCardOptions()
card2.getCardOptions()















// function UserCard(key) {
//     this.getCardOptions = function () {
//         this.balance= 100;
//         this.transactionLimit= 100;
//         this.historyLogs= [];
//         this.key= key;
//     }
//
//     this.putCredits = function (money) {
//         if (money > 0) {
//             this.balance += money;
//             this.historyLogs.push({
//                 operationType: 'Received credits',
//                 credits: money,
//                 operationTime: `${new Date()}`
//             })
//         }
//     }
//     this.takeCredits = function (money) {
//         if (money > 0 && this.balance >= money && this.transactionLimit >= money) {
//             this.balance -= money;
//             this.historyLogs.push({
//                 operationType: 'Withdrawal of credits',
//                 credits: money,
//                 operationTime: `${new Date()}`
//             })
//         } else {
//             console.error('Error : not enough funds on the card');
//         }
//
//     }
//     this.setTransactionLimit = function (number) {
//         this.transactionLimit = number;
//         this.historyLogs.push({
//             operationType: 'Transaction limit change',
//             credits: number,
//             operationTime: `${new Date()}`
//         })
//     }
//
//     this.transferCredits = function (numberOfCredits, card) {
//         if (this.balance > numberOfCredits && this.transactionLimit > numberOfCredits) {
//             let transaction = numberOfCredits + (numberOfCredits * 0.005);
//             this.takeCredits(transaction);
//             card.putCredits(numberOfCredits);
//         }
//     }
//
//
// }
//
// // let card2 = new UserCard(2);
// // let card1 = new UserCard(1);
// // card1.getCardOptions();
// // card2.getCardOptions();
// // card1.putCredits(100);
// // card1.getCardOptions();
// // card1.takeCredits(50);
// // card1.getCardOptions();
// // card1.setTransactionLimit(5000);
// // card1.getCardOptions();
// // card2.getCardOptions();
// // card1.transferCredits(100,card2)
// // card1.getCardOptions();
// // card2.getCardOptions();
//
// class UserAccount {
//
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//     }
//
//     addCard(key) {
//         if (this.cards.length < 3) {
//             this.cards.push(new UserCard(key));
//         } else {
//             console.error('Error : You have more than 3 cards');
//         }
//     }
//
//     getCardByKey(key) {
//         for (const card of user.cards) {
//             if (card.key === key) {
//                 return card;
//             }
//         }
//     }
//
// }
//
// let user = new UserAccount('Bob');
// user.addCard(1);
// user.addCard(2);
//
// user.cards[0].getCardOptions();
// user.cards[1].getCardOptions();
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1);
// console.log(card2);
