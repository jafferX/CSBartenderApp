// Our authService, handles authentication with our backend server.
angular.module('appService', [])
	.factory('App', function($http, $window, $q) {
		var appFactory = {};

		appFactory.getIngredient = function(name) {
			return $http.get('/api/ingredient/' + name);
		};

		appFactory.getByDrink = function(ing_name) {
			 var xhr = new XMLHttpRequest();
			 xhr.open("GET", "http://addb.absolutdrinks.com/drinks/with/" + ing_name + "?apiKey=3333501cb1af4603beccb822dc764f03", false);
			 xhr.send();
			 var responseString.JSOM.parse(xhr.responseText);
		};

		return appFactory;
	});
