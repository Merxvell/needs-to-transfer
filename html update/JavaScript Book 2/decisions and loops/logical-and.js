var score1 = 8; //Round 1 score
var score2 = 8; //Round 2 score
var pass1 = 6; //Round 1 pass mark
var pass2 = 6; //Round 2 pass mark

//Check whether the user passed both rounds, store result in variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

var el = document.getElementById("answer3");
el.textContent = passBoth;
