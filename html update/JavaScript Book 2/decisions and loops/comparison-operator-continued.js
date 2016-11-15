//Can compare variables and get the output of them
//checks to see if the users total score is greater than the highest score
//for the test and stores the result in the comparison
var score1 = 90; //Round 1 score
var score2 = 95; //Round 2 score
var highScore1 = 75; //round 1 high schore
var highScore2 = 95; //round 2 high score

//Check if scores are higher than current scores
var comparison = (score1 + score2) > (highScore1 + highScore2);

var el = document.getElementById('answer2');
el.textContent = 'New high score: ' + comparison;
