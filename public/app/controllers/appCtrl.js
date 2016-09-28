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
			App.getDrinkBy(ingName)
				.then(function(data) {
					vm.processing = false;
					console.log(data);
					if(data.data.success) {
						if(data.data.data.result.length != 0) {
							vm.drinks = data.data.data.result;
							if (addIfReturnsDrink) {
								//	Add ingredient to our database
								App.addIngredient(ingName)
									.then(function (data) {
										console.log(data);
									});
							}
						}
					} else {

					}
				});
		}
		
		vm.searchIng = function() {
			vm.processing = true;
			vm.ingredients = [];
			if(vm.searchString != "") {
				App.getIngredient(vm.searchString)
					.then(function (data) {
						if (data.data.success) {
							if (data.data.ingredients) {
								for (i in data.data.ingredients) {
									vm.ingredients = data.data.ingredients;
								}
								vm.processing = false;
							}
						} else {
							vm.searchByIng(vm.searchString, true);
							vm.processing = false;
						}
					});
			}
		}

	});