(function(){
	var form	= document.getElementById('interests'); //get form
	var elements= form.elements; //all elements in form
	var options	= elements.genre;	//array: genre checkboxes
	var all		= document.getElementById('all'); //the 'all' checkbox

	function updateAll(){ 
		for (var i = 0; i < options.length; i++){ //loop through checkboxes
			options[i].checked = all.checked; //update checked property
		}
	}
	addEvent(all, 'change', updateAll); //add event listener

	function clearAllOption(e){ 
		var target = e.target || e.srcElement; //get target of event
		if(!target.checked){ //if not checked
			all.checked = false; //uncheck all checkbox
		}
	}
	for(var i = 0; i < options.length; i++){ //loop though checkboxes
		addEvent(options[i], 'change', clearAllOption); //add event listener
	}
}());