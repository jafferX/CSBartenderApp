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

		vm.searchIng = function() {
			App.getIngredient(vm.searchString)
				.then(function(data) {
					if(data.data.ingredients) {
						console.log(data.data.ingredients[0]);
					}
					
				});
				App.getByDrink(data.data.ingredients[0].name).then(function(data) {
						console.log(data);
					});
		}

	});