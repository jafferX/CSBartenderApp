// Our authService, handles authentication with our backend server.
angular.module('appService', [])
	.factory('App', function($http, $window, $q) {
		var appFactory = {};

		appFactory.getIngredient = function(name) {
			return $http.get('/api/ingredient/' + name);
		};

		appFactory.addIngredient = function(name) {
			return $http.post('/api/addIngredient', { ingredientName: name });
		}

		appFactory.getDrinkBy = function(ing) {
			return $http.get('/api/getDrinkByIngredient/' + ing);
		};

		return appFactory;
	});
