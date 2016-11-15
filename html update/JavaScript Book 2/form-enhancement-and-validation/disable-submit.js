(function(){
	var form	 = 	document.getElementById('newPwd'); //the form
	var password =  document.getElementById('pwd'); //password input
	var submit	 =	document.getElementById('submit'); //submit button

	var submitted = false; //has form been submitted?

	submit.disabled = true;	//disable submit button
	submit.className = 'disabled';	//style submit button

	//on input: check wheter or not to enable the submit button
	addEvent(password, 'input', function(e){	//on input of password
		var target = e.target || e.srcElement;	//target of event
		submit.disabled = submitted || !target.value;	//set disabled property
		//if form has been submitted or pwd has no value set CSS to disabled
		submit.className = (!target.value || submitted) ? 'disabled' : 'enabled';
	});

	//on submit: disable the form so it cannot be submitted again
	addEvent(form, 'submit', function(e){	//on submit
		if(submit.disabled || submitted){	//if dsabled or sent
			e.preventDefault();	//stop form submission
			return;	//stop processing function
		} //otherwise
		submit.disabled = true; //disable submit button
		submitted = true;	//update submitted var
		submit.className = 'disabled';	//update style

		//Demo purposes only: What would have been sent & shown submit is disabled
		e.preventDefault();	//stop submitting
		alert('Password is ' + password.value);//show text
	});
}());