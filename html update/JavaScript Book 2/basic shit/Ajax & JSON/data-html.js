var xhr = new XMLHttpRequest();

xhr.onload = function() {
  //the following conditional ccheck will not work locally - only on a server
  if(xhr.status === 200){ //if server status was ok
    document.getElementById('content').innerHTML = xhr.responseText; //update
  }
};

xhr.open('GET', 'data/data.html', true); //prepare the request
xhr.send(null); //send the request
