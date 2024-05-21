function oldBooks(input) {
    let book = input[0];

    let index = 1;
    let booksName = input[index];
    index++;

    let bookCount = 0;

    while (booksName !== 'No More Books') {

        if (booksName === book) {
            console.log(`You checked ${bookCount} books and found it.`);
            break;
        }
        bookCount++;

        booksName = input[index];
        index++;
    }
    if (booksName === 'No More Books') {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount} books.`);
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);

// oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);

// oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship",
//  "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
