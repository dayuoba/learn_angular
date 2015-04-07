function CartController($scope) {
	$scope.items = [{
		title: 'paint pots',
		quantity: 8,
		price: 3.95
	}, {
		title: 'polka dots',
		quantity: 17,
		price: 12.95
	}, {
		title: 'pebbles',
		quantity: 6,
		price: 6.95
	}];
	$scope.remove = function(index) {
		$scope.items.splice(index, 1)
	};
}