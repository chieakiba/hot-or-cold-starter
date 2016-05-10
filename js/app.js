
//generate random number
var generateRandomNumber = function() {
	Math.floor(Math.random() *100) +1;
};
//show the number(s) that the user guessed so far in #guessList

//get user guess
var getUserGuess = function() {
	'#userGuess'.val();
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
  	$(".button").click(function() {
  		generateRandomNumber();
  		//give feedback for guess in #feedback
  			//too low/high (colder/cold), getting closer (warmer/hot), or just right
  		if (getUserGuess >= (generateRandomNumber + 5) || (generateRandomNumber - 5)) {
  			console.log("Hot");
  		}
  		else if (getUserGuess > generateRandomNumber) {
  			console.log("Colder");
  		}
  		else if (getUserGuess <= generateRandomNumber) {
  			console.log("Hot");
  		}
  		else if (getUserGuess < (generateRandomNumber + 5) || (generateRandomNumber - 5)) {
  			console.log("Colder");
  		}
  	})
});

//show the number(s) that the user guessed so far in #guessList

//enable new game to start when the user clicks on .new for New Game