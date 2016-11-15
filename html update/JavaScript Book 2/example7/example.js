$(function(){ //when the DOM is ready

  var times; //Declare global variable
  $.ajax({ //setup request
    beforeSend: function(xhr){ //before requesting data
      if (xhr.overrideMimeType){ //if supported
        xhr.overrideMimeType("application/json"); //set MIME to prevent errors
      }
    }
  });

//FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimeTable(){  //Declare the function
    $.getJSON('example.json') //try to collect the JSON DATA
    .done( function(data){ //if successful
      times = data; //store it in a variable
    }).fail( function(){ //else
      $('#event').html('Sorry! We could not load the time table at the moment!'); //error message
    });
  }

  loadTimeTable(); //call the function

  //CLICK ON THE EVENT TO LOAD A TIMETABLE
  $('#content').on('click', '#event a', function(e){  //user clicks on a place
    e.preventDefault(); //prevent page from loading
    var loc = this.id.toUpperCase(); //get value of id attribute

    var newContent = ' '; //to build up timetable
    for (var i = 0; i < time[loc].length; i++){ //loop through sessions
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent +=times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>'); //display time

    $('#event a.current').removeClass('current'); //update selected link
    $(this).addClass('current'); //add current class to selected link

    $('#details').text(''); //clear third column
  });

  //CLICK ON A SESSION TO LOAD THE descriptions
  $('#content').on('click', '#sessions li a', function(e){ //click on a session
    e.preventDefault(); //prevent loading
    var fragement = this.href; //title is in href

    fragment = fragment.replace('#',' #'); //add space after #
    $('#details').load(fragment); //to load info

    $('#sessions a.current').removeClass('current'); //update selected
    $(this).addClass('current');
  });

  //CLICK ON PRIMARY NAVIGATION
  $('nav a').on('click', function(e){ //click on nav
    e.preventDefault(); //prevent loading
    var url = this.href; //get url to load

    $('nav a.current').removeClass('current'); //update nav
    $(this).addClass('current');

    $('#container').remove(); //remove old
    $('#content').load(url + ' #container').hide().fadeIn('slow'); //add new
  });
});
