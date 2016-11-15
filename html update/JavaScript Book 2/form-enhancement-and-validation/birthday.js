(function(){
	var $birth = $('#birthday'); //DOB input
	var $parentsConsent = $('#parents-consent'); //consent checkbox
	var $consentContainer = $('#consent-container'); //checkbox container

	//create the date picker using jQuery UI
	$birth.prop('type', 'text').data('type', 'date').datepicker({
		dateFormat: 'yy-mm-dd' //set date format
	});
	$birth.on('blur change', checkDate); //DOB loses focus
	function checkDate(){
		var dob = this.value.split('-');
		//Pass toggleParentsConset() the date of birth as a date object
		toggleParentsConset(new Date(dob[0], dob[1] -1, dob[2]));
	}
	function toggleParentsConsent(date){
		if(isnaN(date)) return; //stop if date is invalid
		var now = new Date(); //new date obj: today
		//IF DIFFERENCE (now minus date of birth, is less than 13 years
		//to get 13 yrs ms * sec * min * hrs * days * years
		if((now-date) < (1000 * 60 * 60 * 24 * 365 * 13)){
			$consentContainer.removeClass('hide'); //remove hide
			$parentsConsent.focus(); //give focus
		}else{
			$consentContainer.addClass('hide'); //add hide
			$parentsConsent.prop('checked', false); //set check to false
		}
	}
}());