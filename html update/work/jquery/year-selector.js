$(function(){
	var $select = $("#year");
	for(var i = 10; i < 100; i++){
		$select.append($('<option></option>').val(i).html(i));
	}
});
