var elUsername = document.getElementById('username'); //get username input
var elMsg = document.getElementById('feedback'); //get feedback element

function checkUsername(minLength){ //delcare checkusername function
  if (elUsername.value.length < minLength){ //if username length < min length
    //set the error message
    elMsg.textContent = 'Username must be ' + minLength; //error msg
  }else{ //otherwise
    elMsg.textContent = ''; //clear error msg
  }
}

elUsername.addEventListener('blur', function(){ //when it loses focus
  checkUsername(5); //pass arguments here
}, false);
