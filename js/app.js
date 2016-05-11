//generate random number
var randomNumber;
var generateRandomNumber = function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
};
//show the number(s) that the user guessed so far in #guessList
var counter = function() {
    var guessCount = $('#count').text();
    var newValue = +guessCount + 1;
    $('#count').text(newValue);
};
//store user's guess so the user can see what they guesses previously
var newGuess;
var newList;
var listOfGuess = function() {
    newGuess = $('#userGuess').val();
    newList = $('#guessList').append("<li>" + newGuess + "</li>");
    $('#userGuess').val("");
};

$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    //generate a secret number between 1 and 100 that the user will have to guess after clicking on the submit button
    generateRandomNumber();
    $(".button").click(function(event) {
        event.preventDefault();
        var getUserGuess = $('#userGuess').val();
        var distancefromCorrectAnswer = Math.abs(randomNumber - getUserGuess);
        counter();
        listOfGuess();
        //give feedback if userGuess is correct
        if (getUserGuess == randomNumber) {
            $('#feedback').text('Correct! Click "New Game" to play again.');
        }
        //give feedback if userGuess is close to the correct number
        else if (distancefromCorrectAnswer <= 10 && distancefromCorrectAnswer >= 1) {
            $('#feedback').text("Hot!");
        }
        //give feedback if userGuess is getting closer to the correct number
        else if (distancefromCorrectAnswer <= 20 && distancefromCorrectAnswer >= 11) {
            $('#feedback').text("Warmer");
        }
        //give feedback if userGuess is farther from the correct number
        else if (distancefromCorrectAnswer <= 30 && distancefromCorrectAnswer >= 21) {
            $('#feedback').text("Cold");
        }
        //check for empty entry
        else if (isNan(newGuess)) {
            alert("Please enter a number in this field.");
        }
        //check for NaN input
        else if (!parseInt(newGuess)) {
            alert("Please enter a number.");
        }
        //check that the number is a whole number
        else if (Math.round(newGuess) != newGuess) {
            alert("Please enter a whole number.");
        }
        //give feedback if userGuess is far from the correct number
        else {
            $('#feedback').text("Very Cold");
        }
    })
    //enable new game to start when the user clicks on .new for New Game
    $('.new').click(function() {
        $('#count').text(0);
        $('#guessList').empty();
        $('#feedback').text('Make your Guess!');
    })
});


