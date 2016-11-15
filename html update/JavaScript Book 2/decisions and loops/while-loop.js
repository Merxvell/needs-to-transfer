var i = 1;
var msg = '';

//Store 5 times table in a variable
while (i < 11){
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer9').innerHTML = msg;
