/*
notice the message variable. It produces a link
and then puts that link into the webpage by using
the .innerHTML function.
*/
var title;
var message;
title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';

var elTitle = document.getElementById('title-program4');
elTitle.innerHTML = title;
var elNote = document.getElementById('note-program4');
elNote.innerHTML = message;
