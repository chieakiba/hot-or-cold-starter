
var randomNumber;
//generate random number
var generateRandomNumber = function() {
	randomNumber = Math.floor(Math.random() *100) +1;
};

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	//generate a secret number between 1 and 100 that the user will have to guess after clicking on the submit button
  	generateRandomNumber();
  	$(".button").click(function(event) {
  		event.preventDefault();
		  var getUserGuess = $('#userGuess').val();
  		//give feedback for guess in #feedback if the userGuess is larger than the correct number
  		if (getUserGuess > randomNumber) {
  			$('#feedback').text('Hot');
  		}
      //give feedback if userGuess is closer to the correct number
      //give feedback for guess in #feedback if the userGuess is smaller than the correct number
      else if (getUserGuess < randomNumber) {
        $('#feedback').text('Cold');
      }
      //give feedback if userGuess is farther from the correct number
  		//when user guesses the correct answer
  		else if (getUserGuess == randomNumber) {
  			$('#feedback').text("Correct!");
      }
  	})
});

//show the number(s) that the user guessed so far in #guessList

//enable new game to start when the user clicks on .new for New Game