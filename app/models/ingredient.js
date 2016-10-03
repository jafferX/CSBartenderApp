var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	IngABV: {
		type: double,
		required: true
	},
	IngIDField: {
		type: String,
		required: true
	}
	
});

module.exports = mongoose.model('Ingredient', IngSchema);