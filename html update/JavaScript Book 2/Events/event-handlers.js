function checkUsername(){ //declare function
  var elMsg = document.getElementById('feedback'); //get feedback for the form
  var elUsername = document.getElementById('username'); //get username input
  if(elUsername.value.length < 5){ //if user name is to short
    elMsg.textContent = 'Username must be at least 5 characters'; //set msg
  }else{ //otherwise
    elMsg.textContent = ''; //clear message
  }
}

var elUsername = document.getElementById('username'); //get username input
elUsername.onblur = checkUsername; //when it loses focus call checkuserName()
