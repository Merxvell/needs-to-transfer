$(function(){
  var ids = "";
  var $listItems = $('li');

  $listItems.on('mouseover click', function(){ //on click or hover
    ids = this.id;
    $listItems.children('span').remove(); //removes spans
    $(this).append(' <span class="priority">' + ids + '</span>');//adds a new span with it's id
  });

  $listItems.on('mouseout', function(){ //removes any span element
    $(this).children('span').remove();
  });
});
