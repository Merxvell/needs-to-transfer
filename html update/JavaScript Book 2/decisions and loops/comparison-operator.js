//showing that this can display true false in documents?
var pass = 50; //Pass Mark
var score = 90; //score

//check if the user has passed
var hasPassed = score >= pass;

//write the message into the Page
var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;
