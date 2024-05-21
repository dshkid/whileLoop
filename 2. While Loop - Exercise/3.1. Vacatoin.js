function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyHave = Number(input[1]);

    let index = 2;
    let operation = input[index];
    index++;

    let operationMoney = Number(input[index]);
    index++;

    let daysSpent = 0;

    let totalDays = 0;

    while (moneyHave < moneyNeeded) {


        if (operation === 'save') {
            moneyHave += operationMoney;
            daysSpent = 0;
        } else if (operation === 'spend') {
            if (operationMoney > moneyHave) {
                moneyHave = 0;
            } else {
                moneyHave -= operationMoney;
            }
            daysSpent++;
        }

        totalDays++;

        if (daysSpent === 5) {
            console.log(`You can't save the money.`);
            console.log(totalDays);
            break;
        }
        operation = input[index];
        index++;
        operationMoney = Number(input[index]);
        index++;
    }
    if (moneyHave >= moneyNeeded) {
        console.log(`You saved the money for ${totalDays} days.`);
    }

}
// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

// vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);

vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);