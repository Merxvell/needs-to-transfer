//Details of the page are collected from properties of the doc object
var msg = '<p><b>page title: </b>' +  document.title + '<br />';
msg +=  '<b>page address: </b>' + document.URL + '<br />';
msg += '<b>last modified: </b>' + document.lastModified + '</p>';
//selects an element from the page using the value of its id attribute
var el = document.getElementById('footer');
el.innerHTML = msg;
