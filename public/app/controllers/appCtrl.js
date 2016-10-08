// We will put app logic here.
angular.module('appCtrl', [])
	.controller('appController', function() {
		var vm = this;

		var drink1 = {
			'pic': 'http://www.stonebrewing.com/sites/default/files/beer/menu/ipa_22_bottle.png',
			'name': 'Stone IPA'
		};

		var drink2 = {
			'pic': 'http://mixnsip.com/wp-content/uploads/2011/02/drink-0586ebe70e4c.jpg',
			'name': 'Appletini'
		};

		var drink3 = {
			'pic': 'http://images.wisegeek.com/cranberry-juice.jpg',
			'name': 'Cranberry Juice'
		};

		vm.drinks = [drink1, drink2, drink3];

	})
	.controller('searchController', function(App) {
		var vm = this;
		vm.ingredients = [];
		vm.drinks = [];
		vm.processing = false;

		vm.searchByIng = function(ingName, addIfReturnsDrink) {
			vm.processing = true;
		}
		
		vm.queryDrinks = function() {
			vm.processing = true;
			vm.ingredients = [];
			if(vm.searchString != "") {
				App.getDrinkSearch(vm.searchString)
				.then(function(data) {
					vm.processing = false;
					if(vm.searchString != "") {
						if(data.data.success) {
							if(data.data.data.result.length != 0) {
								vm.drinks = data.data.data.result;
							}
						} else {
							console.log('Something went wrong getting drinks');
						}
					}
				});
			} else {
				vm.drinks = [];
			}
		}

});