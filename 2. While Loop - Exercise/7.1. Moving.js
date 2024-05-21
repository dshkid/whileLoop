function moving(input) {
    let winth = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let apartmentSpace = winth * length * height;

    let index = 3;
    let command = input[index];
    index++;

    while (command !== 'Done') {
        let boxesCount = Number(command);

        apartmentSpace -= boxesCount;

        if (apartmentSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(apartmentSpace)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;

        if (command === 'Done') {
            console.log(`${apartmentSpace} Cubic meters left.`);
        }

    }

}
// moving(["10", "10", "2","20", "20", "20", "20", "122"]);

moving(["10", "1", "2", "4", "6", "Done"]);