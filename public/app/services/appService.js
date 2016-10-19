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

		//search query
		appFactory.getDrinkSearch = function(ing) {
			console.log(ing);
			return $http.get('/api/getDrinkBySearch/' + ing);
		}

		appFactory.addIngredient = function(name) {
			return $http.post('/api/addIngredient', { ingredientName: name });
		}

		//Make a route that adds drinks to our database based on cards
		// XXX
		appFactory.addDrink = function(dri){
			console.log(dri);
			return $http.post('/api/addDrink', {drinkName: dri});
		}



		return appFactory;
	});
