function UserCard() {

    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: Math.round(Math.random() * (3-1)+1)
    };
    return {
        putCredits: function (money) {
            if (money > 0) {
                card.balance += money;
                card.historyLogs = {operationType: 'Received credits', credits: card.balance, operationTime: '14/02/2019, 17:59:33'};
                return card.balance;
            }
        },
        takeCredits: function (money) {
            if (money > 0 && card.balance > money && card.transactionLimit > money) {
                card.balance -= money;
                return card.balance;
            }

        },
        setTransactionLimit: function (number) {
            card.transactionLimit = number;
            card.historyLogs = {operationType: 'Transaction limit change', credits: card.transactionLimit, operationTime: '14/02/2019, 17:59:59'};
            return card.transactionLimit;
        },

        transferCredits: function (numberOfCredits, otherCard) {
            this.card = otherCard
            if (card.balance > numberOfCredits && card.transactionLimit > numberOfCredits) {
                numberOfCredits = numberOfCredits * 5 / 100;
                card.historyLogs = {operationType: "Withdrawal of credits", credits: card.balance, operationTime: '14/02/2019, 17:59:44'};
                card.balance-=numberOfCredits;
                this.card.balance+=numberOfCredits;

            }
        },

        getCardOptions: function () {
            console.log(card);
        }

    };

}

let card2 = new UserCard();
let card1 = new UserCard();
card1.putCredits(50);
card1.putCredits(50);
// card1.setTransactionLimit(5000);
// card2.setTransactionLimit(2000);
// card2.putCredits(300);
card1.getCardOptions();
card2.getCardOptions();
card1.transferCredits.apply(card1,[100,card2]);
// card1.getCardOptions();
card2.getCardOptions();


// class UserAccount {
//
//     constructor(name, cards) {
//         this.name = name;
//         this.cards = cards;
//     }
//     addCard(){
//         if (this.cards.length<=3)
//         let newCard = new userCard(3);
//         user.push(newCard);
//     }
//
//     // getCardByKey(number){
//     //     if (number === 1)
//     // }
// }
//
// let user1 = new UserAccount('Bob');
