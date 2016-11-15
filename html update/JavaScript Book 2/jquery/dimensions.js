$(function(){
  var listHeight = $('#page').height(); //deeclare var to store the height of page
  $('ul').append('<p>Height: ' + listHeight + 'px</p>'); //write height at end of list
  $('li').width('50%'); //picks all the li elements and sets their width to 50% of their current width
  $('li#one').width(125); //set width of first item to 125px
  $('li#two').width('75%'); //set width of second to 75% of container
  
});
