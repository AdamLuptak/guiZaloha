//controler for Login
adminGuiApp.controller('LoginController',['$scope', 'showElementsService','loginService', '$location',function($scope,showElementsService,loginService,$location) {
	
	$scope.validation = false;

	showElementsService.hideEverything();
	$scope.signupForm = function(signupData){
		if(signupData.password !=null )
			if(loginService.validate(signupData))
				$location.path( "/dashboard/1" );

			else{
				$scope.validation = true;
				console.log($scope.validation );
				
			}
		};

		$scope.getValidation= function(){
			return $scope.validation;
		}

	}]);