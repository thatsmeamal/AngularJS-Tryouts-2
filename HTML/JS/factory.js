(function(){
	
	var app = angular.module('sample', ["ngRoute"]);

	app.controller('SampleController', function($scope, simpleFactory){
		$scope.names = simpleFactory.getCustomers();

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

	app.factory('simpleFactory',function(){
		var names = [
			{name: 'John Smith', city: 'Phoenix'}, 
			{name: 'John Doe', city: 'Washington'}, 
			{name: 'Will Smith', city: 'Detroit'}, 
			{name: 'Mark Dawn', city: 'New York'}
		];

		var factory = {};						//factory object

		factory.getCustomers = function(){
			return names;
		};

		return factory;
	});


/*
	The factory can be replaced with service as well.

	Both give us the same functionality.

	In the case of service, we need not create any object, nor return it.

	Service can be implemented as below:
*/

/*
	app.service('simpleService',function(){
		var names = [
			{name: 'John Smith', city: 'Phoenix'}, 
			{name: 'John Doe', city: 'Washington'}, 
			{name: 'Will Smith', city: 'Detroit'}, 
			{name: 'Mark Dawn', city: 'New York'}
		];

		this.getCustomers = function(){
			return names;
		};
	});

	app.controller('SampleController', function($scope, simpleService){
		$scope.names = simpleService.getCustomers();

		$scope.addCustomer = function(){
		$scope.names.push(
			{
				name: $scope.custName.name,
				city: $scope.custCity.city
			});
		};

	});
*/

})();