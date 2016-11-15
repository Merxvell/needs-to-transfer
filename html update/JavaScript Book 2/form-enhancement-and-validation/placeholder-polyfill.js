(function(){ //place code in an IIFE
	//test: create an input element, and see if the placeholder is supported
	if('placeholder' in document.createElement('input')){ 
		return;
	}

	var length = document.forms.length;	//get number of forms
	for(var i = 0, l = length; i < l; i++){	//loop through each one
		showPlaceholder(document.forms[i].elements); //call showPlaceholder()
	}

	function showPlaceholder(elements){ //Declare function
		for(var i=0, l = elements.length; i < l; i++){ //for each element
			var el = elements[i];	//store that element
			if(!el.placeholder){	//if no placeholder set
				continue;	//go to next element
			} //otherwise
			el.style.color = '#666666';	//set text to grey
			el.value = el.placeholder;	//add placeholder text

			addEvent(el, 'focus', function(){	//if it gains focus
				if(this.value === this.placeholder){	//if value=placeholder
					this.value = '';	//empty text input
					this.style.color = '#000000';	//make text black
				}
			});

			addEvent(el, 'blur', function(){	//on blur event
				if(this.value === ''){	//if the input is empty
					this.value = this.placeholder;	//make value placeholder
					this.style.color = '#666666;'	//make text gray
				}
			});
		}	//end of for loop
	}	//end showPlaceholder()
}());