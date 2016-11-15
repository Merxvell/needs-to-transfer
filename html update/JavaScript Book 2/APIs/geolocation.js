var elMap = document.getElementById('loc'); //HTML element
var msg = 'Sorry, we are unable to get your location.'; //no location msg

if(Modernizr.geolocation){ //modernizer function to check if geo is supported
  navigator.geolocation.getCurrentPosition(success, fail); //ask for location
  elMap.textContent = 'Checking location...'; //say checking
}else{ //otherwise
  elMap.textContent = msg; //error message
}

function success(position){ //success function
  msg ='<h3>Longitude:<br>' ; //longitude
  msg += position.coords.longitude + '</h3>' ; //display longitude
  msg += '<h3>Latitude:<br>'; //latitude
  msg += position.coords.latitude + '</h3>'; //display latitude
  elMap.innerHTML = msg; //show location
}

function fail(msg){ //fail function
  elMap.textContent = msg; //show text input
  console.log(msg.code); //log the error
}
