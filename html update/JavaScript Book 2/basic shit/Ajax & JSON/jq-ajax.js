$('nav a').on('click', function(e){
  e.preventDefault();
  var url = this.href;  //URL to load
  var $content = $('#content'); //cache selection

  $('nav a.current').removeClass('current'); //update links
  $(this).addClass('current');
  $('#container').remove(); //remove content

  $.ajax({
    type: "POST", //get or post
    url: url, //path to file
    timeout: 2000, // waiting time
    beforeSend: function(){ // before ajax
      $content.append('<div id="load">Loading</div>'); //load message
    },
    complete: function(){ //once finished
      $('#loading').remove(); //clear message
    },
    success: function(data){ //show content
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function(){ //show error msg
      $('#panel').html('<div class="loading">Please try again soon.</div>');
    }
  });
});
