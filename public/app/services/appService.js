// Our authService, handles authentication with our backend server.
angular.module('appService', [])
	.factory('App', function($http, $window, $q) {
		var appFactory = {};

		appFactory.getIngredient = function(name) {
			return $http.get('/api/ingredient/' + name);
		};
		
		appFactory.getDrinkBy = function(ing) {
			return $http.get('/api/getDrinkByIngredient/' + ing);
		};

		appFactory.getByDrink = function(ing_name) {
			 return $http.get("http://addb.absolutdrinks.com/drinks/with/" + ing_name + "/?apiKey=3333501cb1af4603beccb822dc764f03");
		};

		return appFactory;
	});

