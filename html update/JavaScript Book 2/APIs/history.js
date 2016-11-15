$(function(){   //DOM HAS LOADED
  function loadContent(url){ //load new content into page
    $('#container').load(url + '#container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e){ //click handler
    e.preventDefault(); //stop link loading new page
    var href = this.href; //get href attribute of link
    var $this = $(this); //store link in jQuery object
    $('a').removeClass('current'); //remove current from links
    $this.addClass('current'); //update current link
    loadContent(href); //call function: loads content
    history.pushState('', $this.text, href); //update history
  });

  window.onpopstate = function(){ //handle the back/forward buttons
    var path = location.pathname; //get the file pathname
    loadContent(path); //call function to load page
    var page = path.substring(location.pathname.lastIndexOf('/') + 1);
    $('a').removeClass('current'); //remove current from links
    $('[href="' + page + '"]').addClass('current'); //update current link
  };
});
