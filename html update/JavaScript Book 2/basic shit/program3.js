/*
declares variables that are stored in strings
transfers them to html with document.getElementById
or by document.getElementByClass
*/
var username;
var message;
username ='Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name-program3');
elName.textContent = username;
var elNote = document.getElementById('note-program3');
elNote.textContent = message;
