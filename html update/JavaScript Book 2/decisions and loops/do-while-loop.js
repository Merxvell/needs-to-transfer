var i = 1;
var msg = '';

//store times table in a variable
do{
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
}while (i < 1);
//Note how this is already 1 and it STILL runs

document.getElementById('answer10').innerHTML = msg;
