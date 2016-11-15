var originalNumber = 10.23456;

var msg = '<h2>original number</h2><p>' + originalNumber + '</p>'; //or number
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>'; //3 decimal places
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>'; //3 digits

var el = document.getElementById('info');
el.innerHTML = msg;

//Math object to create rando numbers
var randomNum = Math.floor((Math.random() * 10) + 1);

var el = document.getElementById('info2');
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';
