(function(){
	var type = document.getElementById('equipmentType'); //type select box
	var model= document.getElementById('model'); //model select box
	var cameras = { //objects stores cameras
		bolex: 'Bolex Paillard H8',
		yashica: 'yashica 30',
		pathescape: 'Pathescape Super-8 Relax',
		canon: 'Canon 512'
	};
	var projectors = { //store projectors
		kodak: 'Kodak Instamatic M55',
		bolex: 'Bolex Sound 715',
		eumig: 'Eumig Mark S',
		sankyo: 'Sankyo Dualux'
	};

	//WHEN THE USER CHANGES THE TYPE SELECT BOX
	addEvent(type, 'change', function(){
		if(this.value === 'choose'){ //No selection made
			model.innerHTML = '<option>Please choose a type first</option>';
			return; //no need to proceed further
		}
		var models = getModels(this.value); //select the right object

		//LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
		var options = '<option> Please choose a model </option>';
		for(var key in models){ //loop through models
			options += '<option value="' + key + '">' + models[key] + '</option>';
		} //if an option could contain a quote, key should be escaped
		model.innerHTML = options; //update select box
	});

	function getModels(equipmentType) {
		if(equipmentType === 'cameras'){ //if type is cameras
			return cameras; //return cameras object
		}else if(equipmentType === 'projectors'){ //if type is projectors
			return projectors; //return projectors object
		}
	}
}());