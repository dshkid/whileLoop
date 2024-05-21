function graduation(input) {

    let name = input[0];

    let index = 1;
    let CurrClass = Number(input[index]);

    let sum = 0;
    let excluded = 0;
    let grade = 0;

    while (CurrClass <= 12) {
        if (CurrClass >= 4) {
            index++;
            sum += CurrClass;
            grade++;
            CurrClass = Number(input[index]);
        } else {
            index++;
            sum += CurrClass;
            excluded++;
            grade++;
            CurrClass = Number(input[index]);
        }

        if (excluded >= 1) {
            console.log(`${name} has been excluded at ${grade} grade`);
            return;
        }
    }
    console.log(`${name} graduated. Average grade: ${(sum / grade).toFixed(2)}`);
}
graduation(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3']);

// graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);