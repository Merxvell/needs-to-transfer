var elUsername = document.getElementById('username'); //Get username input
var elMsg = document.getElementById('feedback'); //get feedback element

function checkUsername(minLength){ //delcare function
  if(elUsername.value.length < minLength){ //if username too short
    //Set message
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  }else{ //otherwise
    elMsg.innerHTML = ''; //clear message
  }
}

if(elUsername.addEventListener){ //if even listener supported
  elUsername.addEventListener('blur', function(){ //when username loses focus
    checkUsername(5); //input min value for check username and call checkUsername()
  }, false); //capture during bubble phase
}else{ //otherwise
  elUsername.attachEvent('onblur', function(){ //IE fallback: onblur
    checkUsername(5); //Call checkUsername
  });
}
