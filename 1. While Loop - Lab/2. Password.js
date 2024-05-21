function password (input) {

    let userName = input[0];
    let password = input[1];
    let index = 2;
    let diffPass = input[index];

    while (diffPass !== password) {
        diffPass = input[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}
password(["Gosho", "secret", "secret"]);