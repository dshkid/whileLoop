function maxNumber(input) {

    let index = 0;
    let num = input[index];
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (num !== 'Stop') {
        let numAsNum = Number(num);

        if (numAsNum > maxNum) {
            maxNum = numAsNum;
        }
        index++;
        num = input[index];
    }
    console.log(maxNum);

}
maxNumber(['100', '99', '80', '70', 'Stop']);