$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

//generate a secret number between 1 and 100 that the user will have to guess

//give feedback for guess in #feedback
	//too low/high (colder/cold), getting closer (warmer/hot), or just right
	//show the number(s) that the user guessed so far in #guessList

//enable new game to start when the user clicks on .new for New Game