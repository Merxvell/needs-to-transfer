function checkUsername(){ //Declare function
  var elMsg = document.getElementById('feedback'); //get feedback element
  if(this.value.length < 5){ //if username is less than 5
    elMsg.textContent = 'Username must be 5 characters or  more'; //msg
  }else{ //otherwise
    elMsg.textContent = ''; //clear msg
  }
}

var elUsername = document.getElementById('username'); //get username input

elUsername.addEventListener('blur', checkUsername, false); //when it loses focus call checkUsername
