$(function(){
  var $h2 = $('h2');
  $h2.append('<a class="show"> show </a>'); //add a show link

  $h2.on('click', function(){ //click event
    $h2.next() //select the next sibling after h2
    .fadeIn(500) //fade into view
    .children('.hot') //selects any child elemets of the ul alement with class hot
    .addClass('complete'); //add class complete to all li elements
    $h2.find('a').fadeOut(); //fade out list button
  });
});
