(function(){
	document.forms.register.noValidate = true;	//disable HTML5 validation
	$('form').on('submit', function(e){	//when form is submitted
		var elements = this.elements;	//Collection of form controls
		var valid = {};	//custom valid object
		var isValid;	//isValid: checks form controls
		var isFormValid;	//isFormValid: checks entire form

		//PERFORM GENERIC CHECKS (calls functions outside the event handler)
		for(var i=0, l=(elements.length-1); i < l; i++){
			//next line calls validateRequired() and validateTypes(elements[i]);
			isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
			if(!isValid){	//if it does NOT pass
				showErrorMessage(elements[i]); //show error messages
			}else{
				removeErrorMessage(elements[i]); //remove error messages
			} //end if statement
			valid[elements[i].id] = isValid //add element to the valid object
		} //end loop

		//PERFORM CUSTOM VALIDATION 
		if(!validateBio()){	//call validateBio(), if not valid
			showErrorMessage(document.getElementById('bio')); //show error
			valid.bio = false;
		}else{
			removeErrorMessage(document.getElementById('bio')); //remove error
		} 

		//validate password
		if(!validatePassword()){	//call validate password, and if not valid
			showErrorMessage(document.getElementById('password')); //show error message
			valid.password=false;
		}else{
			removeErrorMessage(document.getElementById('password')); //remove error message
		}

		//parental consent 
		if(!validateParentalConsent()){	//call validateParentalConsent, if not valid
			showErrorMessage(document.getElementById('parents-consent'));//show error message
			valid.parentsConsent=false;
		}else{
			removeErrorMessage(document.getElementById('parents-consent')); //remove error message
		}

		//DID IT PASS / CAN IT SUBMIT THE FORM?
		//Loop through valid object, if there are errors set isFormValid to false
		for(var field in valid){	//check properties of the valid object
			if(!valid[field]){	//if it's not valid
				isFormValid = false;	//set isFormValid variable to false
				break;
			}
			isFormValid = true;	//the form is valid and ok to submit
		}

		//if the form did not validate, prevent it from being submitted
		if(!isFormValid) { //if isFormValid is not true
			e.preventDefault();	//prevent the form from being submitted
		}
	});
	//END ANONYMOUSE FUNCTION TRIGGERED BY SUBMIT

	//FUNCTIONS FOR GENERIC CHECKS
	//CHECK IF THE FIELD IS REQUIRED AND IF SO DOES IT HAVE A VALUE
	function validateRequired(el){
		if(isRequired(el){	//is the element required?
			var valid = !isEmpty(el);	//is the value not empty?
			if(!valid){
				setErrorMessage(el, 'Field is required'); //set error message
			}
			return valid; //return valid variable (true or false)
		}
		return true; //if not required, all ok
	}

	//CHECK IF THE ELEMENT IS REQUIRED
	//it is called by validate required
	function isRequired(el){
	return ((typeof el.required === 'boolean') && el.required) 
	|| (typeof el.required === 'string');
	}

	//CHECK IF THE ELEMENT IS EMPTY (or its value is the same as the placeholde)
	//HTML5 browsers do allow users to enter the same text as a placeholder
	//but in this case users should not	need to
	//is called by validateRequired()
	function isEmpty(el){
		return !el.value || el.value === el.placeholder;
	}

	//check if the value fits with the type attribute
	//relies on the validateType object (shown at end of IIFE)
	function validateTypes(el){
		if(!el.value) return true; //if element has no value, return true
		var type = $(el).data('type') || el.getAttribute('type'); //or get type of input
		if(typeof validateType[type] === 'function'){ //is the type a method of vlaidate object?
			return validateType[type](el);
		}else{
			return true;
		}
	}

	//FUNCTIONS FOR CUSTOM VALIDATION

	//IF USER IS UNDER 13 CHECK THAT PARENTS CONSENT IS TICKED
	//dependency: birthday.js (otherwise check does not work)
	function validateParentsConsent(){
		var parentsConsent = document.getElementById('parents-consent');
		var consentContainer = document.getElementById('consent-container');
		var valid = true;	//variable: valid set to true
		if(consentContainer.className.indexOf('hide') === -1){ //if checkbox shown
			valid = parentsConsent.checked;	//update valid: is checked/not
			if(!valid){	//if not, set error message
				setErrorMessage(parentsConsent, 'You need your parents\ consent');
			}
		}
		return valid; //return whether valid or not
	}

	//check if the bio is less than or equal to 140 characters
	function validateBio(){
		var bio = document.getElementById('bio');
		var valid = bio.value.length <= 140;
		if(!valid){
			setErrorMessage(bio, 'Please make sure your bio does not exceed 140 characters');
		}
		return valid;		
	}

	//FUNCTIONS TO SET/GET/SHOW/REMOVE ERROR MESSAGES

	function setErrorMessage(el, message){
		$(el).data('errorMessage', message);	//store error message
	}

	function getErrorMessage(el){
		return $(el).data('errorMessage') || el.title;	//get error message or title of element
	}

	function showErrorMessage(el){
		var $el = $(el); //the element with the error
		var errorContainer = $el.siblings('.error.message');//any siblings holding error message

		if(!errorContainer.length){ //if no errors exist with the element
			//create a <span> element to hold the error and add it after the element with the error
			errorContainer = $('<span class="error message"></span>').insertAfter($el);
		}
		errorContainer.text(getErrorMessage(el)); //add error message
	}

	function removeErrorMessage(el){
		var errorContainer = $(el).siblings('.error.message'); //get the sibling of this form control used to hold error message
		errorContainer.remove();	//remove the element that contains the error message 
	}

	//OBJECT FOR CHECKING TYPES

	//checks whether data is valid, if not set error message
	//returns true if valid, false if invalid
	var validateType = {
		email: function(el){
			//regex checks for a single *
			var valid = /[^@+@[^@]+/.text(el.value); //store result of text in valid
			if(!valid){
				setErrorMessage(el, 'Please enter a valid email'); //set error message
			}
			return valid; //return the valid variable
		},
		number: function(el){ //create number() method
			var valid = /^\d+$/.test(el.value);	//store the result of test in valid
			if(!valid){
				setErrorMessage(el, 'Please enter a valid number');
			}
			return valid; //return valid variable
		},
		date: function(el){ //Create date() method
			var valid = /^(\d{2}\/\d{2}\/\d{4}-\d{2}-\d{2})$/.test(el.value);
			if(!valid){ //if the value of valid is not tue
				setErrorMessage(el, 'please enter a valid date'); //set error message
			}
			return valid; //return valid variable
		}
	};
}()); //END OF IIFE 