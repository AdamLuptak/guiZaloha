//controler for Login
	eshopApp.controller('NewUser',['$scope','customersService','$routeParams','showElementsService', function($scope, customersService, $routeParams,showElementsService) {

		$scope.navBarChosser = $routeParams.navBarChosser;

	showElementsService.preForBrodcast('1','1','1', $scope.navBarChosser);
}]);