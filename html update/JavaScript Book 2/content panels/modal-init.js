(function(){
  var $content = $('#shrae-options').detach(); //remove modal from page
  $('#share').on('click', function(){ //click handler to open
    modal.open({content: $content, width:340, height:300});
  });
}());
