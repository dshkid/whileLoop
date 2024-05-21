function sumNumbers(input) {

    let target = Number(input[0]);
    let sum = 0;
    let index = 1;
    let num = Number(input[index]);

    while (sum < target) {
        sum += num;
        index++;
        num = Number(input[index]);

        if (index >= input.length) {
            break;
        }
    }
    console.log(sum);
}
sumNumbers(['100','10','20', '30', '40']);
