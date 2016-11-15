if (window.sessionstorage){

  var txtUsername = document.getElementById('username'); //get username
  var txtAnswer = document.getElementById('answer'); //get answer

  txtUsername.value = sessionStorage.getItem('username'); //elements populated
  txtAnswer.value = sessionStorage.getItem('answer'); //by sessionStorage

  txtUsername.addEventListener('input', function(){ //save data
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function(){ //save data
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}
