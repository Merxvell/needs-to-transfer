(function() {
    var pwd = document.getElementById('pwd');   //get password input
    var chk = document.getElementById('showPwd'); //get checkbox

    addEvent(chk, 'change', function(e) { //when user clicks checkbox
        var taget = e.target || e.srcElement; //get that element
        try { //try
            if (target.checked) { //if checked
                pwd.type = 'text';  //set pwd type to text
            } else {
                pwd.type = 'password';  //set pwd type to password
            }
        } catch (error) { //if it causes an error
            alert('This browser cannot switch type'); //say cannot switch type
        }
    });
}());
