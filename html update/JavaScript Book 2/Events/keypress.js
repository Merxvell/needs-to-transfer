var el; //Declare variables

function charCount(e) { //declare function
    var textEntered, charDisplay, counter, lastkey; //declare variabiables
    textEntered = document.getElementById('message').value; //users text
    charDisplay = document.getElementById('charactersLeft'); //counter element
    counter = (180 - (textEntered.length)); //num of chars left
    charDisplay.textContent = counter; //show chars left

    lastkey = document.getElementById('lastkey'); //get last key used
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; //create msg
}

el = document.getElementById('message'); //get msg element
el.addEventListener('keyup', charCount, false); //keypress event
