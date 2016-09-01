(function(){
	
	var app = angular.module('sample', []);

	/*app.controller('SampleController', function($scope){
		$scope.names = [
			{name: 'John Smith', city: 'Phoenix'}, 
			{name: 'John Doe', city: 'Washington'}, 
			{name: 'Will Smith', city: 'Detroit'}, 
			{name: 'Mark Dawn', city: 'New York'}
		];
	});*/

	function asd($scope){
		$scope.names = [
			{name: 'John Smith', city: 'Phoenix'}, 
			{name: 'John Doe', city: 'Washington'}, 
			{name: 'Will Smith', city: 'Detroit'}, 
			{name: 'Mark Dawn', city: 'New York'}
		];
	}

	app.controller('SampleController', asd);

	/*The controller function can be defined in the above manner as well.*/

})();