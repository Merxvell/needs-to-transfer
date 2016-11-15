if (window.localstorage) {
    var txtUsername = document.getElementById('username'); //get form elements
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = localstorage.getItem('username'); //elements populated
    txtAnswer.value = localStorage.getItem('answer'); //by localStorage data

    txtUsername.addEventListener('input', function() {
        localStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function(){
      localStorage.setItem('input', txtAnswer.value);
  }, false);

}
