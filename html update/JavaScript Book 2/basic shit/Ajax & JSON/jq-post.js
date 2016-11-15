$('#register').on('submit',function(e){ //when form is submitted
  e.preventDefault(); //prevent it from being sent
  var details = $('#register').serialize(); //serialize form data
  $.post('register.php', details, function(data){ //use $.post() to send it
    $('#register').html(data); //where to display it
  });
});
