//make an object literal to make a useful object
var myMammal = {
	name: 'Herb the mammal'.
	get_name : function(){
		return this.name;
	},
	says : function(){
		return this.saying || '';
	}
};