//controler for Login
adminGuiApp.controller('FooterHeaderController',['$scope', '$routeParams','customersService','showElementsService',function($scope,$routeParams,customersService,showElementsService) {

	$scope.headerShowTab= function(){
			return showElementsService.navBarChosser;
		}
		
		$scope.footerShow = function(){
			return parseInt(showElementsService.footerShow);
		}

		$scope.headerShow = function(){
			console.log(showElementsService.headerShow);
			return parseInt(showElementsService.headerShow);

		}
}]);