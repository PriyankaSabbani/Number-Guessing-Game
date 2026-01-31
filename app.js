const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
    const range = prompt("Enter the maximum number:");

    if (!range || isNaN(range)) {
        alert("Please enter a valid number!");
        return;
    }

    const random = Math.floor(Math.random() * range) + 1;
    let guess = prompt("Guess the number:");

    while (true) {
        if (guess === "quit") {
            console.log("USER QUITS");
            break;
        } else if (Number(guess) === random) {
            console.log("Congratulations! You guessed the right number:", random);
            break;
        } else if (Number(guess) < random) {
            guess = prompt("HINT: Your guess was too small. Try again!");
        } else {
            guess = prompt("HINT: Your guess was too large. Try again!");
        }
    }
});
