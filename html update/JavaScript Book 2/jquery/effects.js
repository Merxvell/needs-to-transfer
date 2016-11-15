$(function(){
  $('h2').hide().slideDown(); //hide h2 then animate it in
  var $li = $('li');  //define the list items
  $li.hide().each(function(index) { //hide the list items then make the function do display them
    $(this).delay(700 * index).fadeIn(700); //fade in
  });
  $li.on('click', function() { //on click fade out
    $(this).fadeOut(700);
  });
});
