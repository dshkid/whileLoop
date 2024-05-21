function examPreparation(input) {
    let poorGrades = Number(input[0]);

    let index = 1;
    let problemName = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let maxPoorGrade = 0;
    let gradeCount = 0;
    let gradeSum = 0;
    let lastProblem = '';

    while (problemName !== 'Enough') {
        lastProblem = problemName;

        if (grade <= 4) {
            maxPoorGrade++;
        }
        if (maxPoorGrade === poorGrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
        }

        gradeCount++;
        gradeSum += grade;

        problemName = input[index];
        index++;

        grade = Number(input[index]);
        index++;
    }
    if (problemName === 'Enough') {
        let avgScore = gradeSum / gradeCount;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
// examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);