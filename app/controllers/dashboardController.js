//controler for Login
adminGuiApp.controller('DashboardController',['$scope', '$routeParams','customersService','showElementsService',function($scope,$routeParams,customersService,showElementsService) {
	$scope.navBarChosser = $routeParams.navBarChosser;

	showElementsService.preForBrodcast('1','1','1', $scope.navBarChosser);
	
}]);