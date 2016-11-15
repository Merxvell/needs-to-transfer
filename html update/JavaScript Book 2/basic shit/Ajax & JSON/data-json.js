



var xhr = new XMLHttpRequest(); //create XML object

xhr.onload = function() { //when readystate changed
  if(xhr.status === 200){ //if server status was ok
    responseObject = JSON.parse(xhr.responseText);

    //BUILD UP STRING WITH NEW CONTENT (can also use DOM manipulation)
    var newContent = '';
    for(var i = 0; i < responseObject.events.length; i++) { //loop through object
      newContent += '<div class="event">' ;
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + resonseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    //Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
    }
};

xhr.open('GET', 'data.json', true); //prepare the request
xhr.send(null); //send the request
