$('#selector a').on('click', function(e){
  e.preventDefaul();
  var queryString = 'vote=' + event.target.id;
  $.get('votes.php', queryString, function(data){
    $('#selector').html(data);
  });
});
