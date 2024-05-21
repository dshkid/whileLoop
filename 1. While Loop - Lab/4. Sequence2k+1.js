function sequence2K(input) {

    let num = Number(input[0]);
    let sum = 1;

    while (sum <= num) {
        console.log(sum);
        sum = (sum * 2) + 1;
    }
}
sequence2K(['17']);