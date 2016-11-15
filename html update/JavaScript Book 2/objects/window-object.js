//shows data about the browser
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>'; //dislays window width
msg += '<p>height: ' + window.innerHeight + '</p>'; //displays window height
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
// This property is useful to find out how many pages the user has visited in the current browsing session.
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>'; //displays screen width
msg += '<p>height: ' + window.screen.height + '</p>'; //displays screen height
var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location); //creates a popup dialog
