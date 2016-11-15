var saying = 'Home sweet home ';
var msg = '<h2>length</h2><p>' + saying.length + '</p>'; //display length
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>'; //convert text to uppercase
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>'; //convert text to lowercase
msg += '<h2>character index: 12 </h2><p>' + saying.charAt(12) + '</p>'; //character 12
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>'; //place of ee
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>'; //location of last e
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8,14) + '</p>'; //chars between 8-14
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>'; //replacings two chars

var el = document.getElementById('info');
el.innerHTML = msg;
