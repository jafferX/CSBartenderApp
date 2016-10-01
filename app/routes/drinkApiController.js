var config  = require('../../config');
var request = require('request'); //http request package

//Get requests for drink
function getRequest(href, done) {
	var options = {
		url: href,
		method: 'GET'
	}
	request(options, function(error, message, object){
		if(error) {
			done(null,error);
		}
		else {
			var json = JSON.parse(object);
			done(json);
		}
	});
}
//Given an ingredient get drinks with ingredient
function getDrinksWith(ing_name, done) {
	var href = "http://addb.absolutdrinks.com/drinks/with/" + ing_name + "/?apiKey=" + config.api_key;
	getRequest(href, done);
}

//quick search for drinks. works with search query. pull ingredient ideas from this
function getDrinkQuickSearch(ing_name, done) {
	var href = "http://addb.absolutdrinks.com/quickSearch/drinks/" + ing_name + "/?apikey=" + config.api_key;
	getRequest(href, done);
}

function getIngredientsForDrink(data)
{
	var Ids = 'IDs: [';
	var Names = 'Names: [';

	
	for (i=0; i < data.result[0].ingredients.length; i++)//for loop to fill ingredientsID array
	{
		Ids += data.result[0].ingredients[i].id + ', ';
	}
	Ids += ']';
	
	for (i=0; i < data.result[0].ingredients.length; i++)//for loop to fill ingredientsID array
	{
		Names += data.result[0].ingredients[i].textPlain + ', ';
	}
	Names += ']';
	
	
	var drinkInfo;
	drinkInfo = [data.result[0].id, data.result[0].name,Ids,Names];
	
	console.log(drinkInfo);
	
	
}






module.exports = {
	getRequest:getRequest,
	getDrinksWith:getDrinksWith,
	getDrinkQuickSearch:getDrinkQuickSearch,
	getIngredientsForDrink:getIngredientsForDrink,

}