var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

//check if one of the scores is true
var minPass = ((score1 >= pass1) || (score2 >= pass2));

//output the opposite of minPass
var msg = 'Resit required: ' + !(minPass);


var el = document.getElementById('answer4');
el.textContent = msg;
