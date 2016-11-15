var score = 75;
var msg;

if(score >= 50){
msg='Congratulations!';
msg +=' Proceed to next round.';
}

var el = document.getElementById('answer5');
el.textContent = msg;
