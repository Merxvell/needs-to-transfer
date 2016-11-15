(function(){
	var form, options, other, otherText, hide; //declare variables
	form = document.getElementById('how-heard'); //get the form
	options = form.elements.heard;	//get the radio buttons
	other = document.getElementById('other');	//other radio button
	otherText = document.getElementById('other-text');	//other text input
	otherText.class = 'hide'; //hide text 

	for (var i = [0]; i < options.length; i++){ //loop through radios
		addEvent(options[i], 'click', radioChanged);	//add event listener
	}

	function radioChanged(){	//is othe rchecked?
		hide = other.checked ? '' : 'hide';	//text input visibility
		otherText.className = hide;	//if text input hidden
		if(hide){	//epty its contents
			otherText.value = '';
		}
	}
}());