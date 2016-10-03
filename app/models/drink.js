//model for drinks

//name
//Drink ABV  = double that stores ABV for entire drink. Caluculated from each ind. Ingredient
//rating
//drinkIDfield - ID to search - comes from API
//drinkDiscription - brief discription of drink
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrinkSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: {
			unique: true
			},
	    DrinkABV: {
		type: double,
		required: true
		},
		rating : {
			type: String,
			required: true
		},
		drinkIDField : {
			type : String,
			required : true
		},
		drinkDiscription : {
			type : String,
			required : true
		}
	}
	
});

module.exports = mongoose.model('Drink', DrinkSchema);