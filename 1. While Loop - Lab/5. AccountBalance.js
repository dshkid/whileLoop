function accountBalance(input) {

    let index = 0;
    let money = input[index];
    let totalMoney = 0;

    while (money !== 'NoMoreMoney') {
        let moneyAsNum = Number(money);

        if (moneyAsNum < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${moneyAsNum.toFixed(2)}`);
        totalMoney += moneyAsNum;
        index++;
        money = input[index];

    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);

}
accountBalance(["5.51", "69.42", "100", 'NoMoreMoney']);