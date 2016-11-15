function setup() { //declare funciton
    var textInput; //create variable
    textInput = document.getElementById('username'); //get username input
    textInput.focus(); //give username focus
}

window.addEventListener('load', setup, false); //when paage loadd call setup
