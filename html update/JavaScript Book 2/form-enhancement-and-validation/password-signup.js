(function(){
	var password = document.getElementById('password'); //store password inputs
	var passwordConfirm = document.getElementById('conf-password');
	function setErrorHighlighter(e){
		var target = e.target || e.srcElement; //get target el
		if(target.value.length < 8){ //if less than 8
			target.className = 'fail'; //set class to fail
		}else{
			target.className = 'pass'; //set class to pass
		}
	}

	function removeErrorHighlighter(e){
		var target = e.target || e.srcElement; //get target el
		if(target.className === 'fail'){ //if class is fail
			target.className = ''; //clear class
		}
	}

	function passwordsMatch(e){ 
		var target = e.target || e.srcElement; //get target element
		//if value matches pwd and it is longer than 8
		if((password.value === target.value) && target.value.length >= 8){
			target.className = 'pass'; //set class to pass
		}else{
			target.className = 'fail'; //set class to fail
		}
	}

	addEvent(password, 'focus', removeErrorHighlighter);
	addEvent(password, 'blur', setErrorHighlighter);
	addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
	addEvent(passwordConfirm, 'blur', setErrorHighlighter);
}());