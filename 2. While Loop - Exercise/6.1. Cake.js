function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let cakeSize = cakeLength * cakeWidth;

    let index = 2;
    let command = input[index];
    index++;

    while (command !== 'STOP') {
        let pieces = Number(command);

        cakeSize -= pieces;

        command = input[index];
        index++;

        if (cakeSize < 0) {
            console.log(`No more cake left! You need ${pieces} pieces more.`);
            return;
        }
        if (command === 'STOP') {
            console.log(`${pieces} pieces are left.`);
        }   
    }

}
// cake(["10", "10", "20", "20", "20", "20", "21"]);

cake(["10", "2", "2", "4", "6", "STOP"]);