(function(){
	
	var app = angular.module('sample', ['ngRoute']);
//The service $routeProvider(Line-24) is defined in the module ngRoute. Hence, it is to be added as a dependency.

	app.controller('SampleController', function($scope){
		$scope.names = [
			{name: 'John Smith', city: 'Phoenix'}, 
			{name: 'John Doe', city: 'Washington'}, 
			{name: 'Will Smith', city: 'Detroit'}, 
			{name: 'Mark Dawn', city: 'New York'}
		];

		$scope.addCustomer = function(){
		$scope.names.push(
		{
			name: $scope.custName.name,
			city: $scope.custCity.city
		});
	};


	});

	app.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'SampleController',
				templateUrl: 'RoutesFirst.html'
			})
			.when('/AddCustomer',
			{
				controller: 'SampleController',
				templateUrl: 'RoutesSecond.html'
			})
			.otherwise(
			{
				redirectTo: '/'
			});

	});

})();