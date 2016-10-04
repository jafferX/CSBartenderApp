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
			return $http.get('/getDrinkBySearch/' + ing);
		}


		return appFactory;
	});

