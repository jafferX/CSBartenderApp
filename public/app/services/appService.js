// Our authService, handles authentication with our backend server.
angular.module('appService', [])
	.factory('App', function($http, $window, $q) {
		var appFactory = {};

		appFactory.getIngredient = function(name) {
			return $http.get('/api/ingredient/' + name);
		};

<<<<<<< c1fdaebf95df852c173f8b5071a44a0155498d13
=======
		appFactory.getDrinkBy = function(ing) {
			return $http.get('/api/getDrinkByIngredient/' + ing);
		};

>>>>>>> Fixed CORS
		return appFactory;
	});
