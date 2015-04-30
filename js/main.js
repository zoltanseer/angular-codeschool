(function() {
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', function () {
		this.products = gems;
	});


	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ad, ut. Neque magnam inventore maiores suscipit itaque ab sequi, laudantium excepturi ex quos perferendis, nam officia reiciendis dolor nisi accusantium.',
			images: [
				{
					'full': 'img/gem.jpg',
					'tmb': 'img/gem_tmb.jpg'
				},
				{
					'full': 'img/gem.jpg',
					'tmb': 'img/gem_tmb.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: 'Lorem ipsum dolor',
					author: 'john.snow@tower.wf'
				},
				{
					stars: 1,
					body: 'This is ugly',
					author: 'john.doe@doe.jo'
				},
				{
					stars: 3,
					body: 'Ahumm',
					author: 'me@localhost.com'
				}
			],
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pentagonal gem',
			price: 5,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ad, ut. Neque magnam inventore maiores suscipit itaque ab sequi, laudantium excepturi ex quos perferendis, nam officia reiciendis dolor nisi accusantium.',
			images: [
				{
					'full': 'img/gem.jpg',
					'tmb': 'img/gem_tmb.jpg'
				},
				{
					'full': 'img/gem.jpg',
					'tmb': 'img/gem_tmb.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: 'Lorem ipsum dolor',
					author: 'john.snow@tower.wf'
				},
				{
					stars: 1,
					body: 'This is ugly',
					author: 'john.doe@doe.jo'
				},
				{
					stars: 3,
					body: 'Ahumm',
					author: 'me@localhost.com'
				}
			],
			canPurchase: true,
			soldOut: false
		}
	];




})();

