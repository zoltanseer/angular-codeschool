(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function () {
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ad, ut. Neque magnam inventore maiores suscipit itaque ab sequi, laudantium excepturi ex quos perferendis, nam officia reiciendis dolor nisi accusantium.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pentagonal gem',
			price: 5,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ad, ut. Neque magnam inventore maiores suscipit itaque ab sequi, laudantium excepturi ex quos perferendis, nam officia reiciendis dolor nisi accusantium.',
			canPurchase: true,
			soldOut: false
		}
	];
})();

