// declare variables to hold game information
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessList = [];

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userGuess = "";
var answer = "";

// function to get a random answer
function updateAnswer() {
    answer = letters[Math.floor(Math.random() * letters.length)];
    console.log("target answer: " + answer);
}

// function to reset guesses left and guesses so far
function resetGuess() {
    guessesLeft = 10;
    guessList = [];
    console.log("guesses left: " + guessesLeft);
    console.log("guesses list: " + guessList);
}

// generate a random letter from letters array for initial answer
updateAnswer();

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    userGuess = event.key.toUpperCase(); // convert keypress to uppercase
    // console.log("keypress: " + event.key);

    // perform action only if userGuess is a letter
    if (letters.indexOf(userGuess) > -1) {
        console.log("userGuess: " + userGuess);

        // determine if user has won - update counts for guesses and wins or losses
        if (userGuess === answer) {
            alert("Correct! The answer was: " + answer);

            wins++; // increase win count
            console.log("wins: " + wins);

            updateAnswer();
            resetGuess();
        } else {
            // if there are guesses left, do not update for letters already guessed
            if (guessList.indexOf(userGuess) === -1) {
                guessList.push(userGuess); // update list of guesses
                // console.log("guesses list: " + guessList);

                guessesLeft--; // decrease guess count
                // console.log("guesses left: " + guessesLeft);
            }
        }

        // if no more guesses allowed
        if (guessesLeft === 0) {

            alert("Sorry, the correct answer was: " + answer);

            losses++; // increase losses
            console.log("losses: " + losses);

            updateAnswer();
            resetGuess();
        }

        // update score board
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById("guess-list").innerHTML = "Your guesses so far: " + guessList;
    }
}