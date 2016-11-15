$(function(){
  var $p = $('p'); //get p elements
  var $cloneQuote = $p.clone(); //copy p element
  $p.remove(); //remove the paragraph
  $cloneQuote.insertAfter('h2'); //paste it into a h2

  var $moveItem = $('#one').detach(); //remove first item and store it in moveitem
  $moveItem.appendTo('ul'); //add to bottom of list
});
