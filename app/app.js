var test2 = 'tank';
var eshopApp = angular.module('eshop',['ngRoute','ngResource']);



//routes privider
eshopApp.config(function($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl: 'view/login.html',
		controller: 'LoginController'
	})

	.when('/customers/:navBarChosser',{

		templateUrl: 'view/customers.html',
		controller: 'CustomersController'
	})

	.when('/customerOrders/:customerID',{

		templateUrl: 'view/customerOrders.html',
		controller: 'CustomerOrdersController'
	})
	.when('/orders/:navBarChosser',{

		templateUrl: 'view/orders.html',
		controller: 'OrdersController'
	})
	.when('/newUser/:navBarChosser',{
		templateUrl: 'view/newUser.html',
		controller: 'NewUser'
	})

	.otherwise({ 
      redirectTo: '/' 
  }); 

});

eshopApp.factory('showElementsService', ['$rootScope', function($rootScope){
	var sharedService = {};

	sharedService.message = '';
	sharedService.headerShow = '';
	sharedService.footerShow = '';
	sharedService.navBarChosser = '';

	sharedService.hideEverything = function(){
		sharedService.message = '0';
		sharedService.headerShow = '0';
		sharedService.footerShow = '0';
		sharedService.navBarChosser = '0';
	};

	sharedService.preForBrodcast = function(msg, headerShow, footerShow, navBarChosser){
		this.message = msg;
		this.headerShow = headerShow;
		this.footerShow = footerShow;
		this.navBarChosser = navBarChosser;
		this.broadcastItem();
	};
	sharedService.broadcastItem = function(){
		$rootScope.$broadcast('handleBrodcast');
	};
	return sharedService;
}]);

// eshopApp.controller('ControllerOne', ['$scope','showElementsService', function($scope,showElementsService){
// 	$scope.handleClick =function(msg){
// 		console.log("esd");

// 		showElementsService.preForBrodcast(msg);
// 	}
// 	$scope.$on('handleBrodcast',function(){
// 		$scope.message = showElementsService.message;
// 	});
// }]);

// eshopApp.controller('ControllerTwo', ['$scope','showElementsService', function($scope,showElementsService){
// 	$scope.$on('handleBrodcast',function(){
// 		$scope.message = "Two: " +  showElementsService.message;
// 	});
// }]);

// eshopApp.controller('ControllerThree', ['$scope','showElementsService', function($scope,showElementsService){
// 	$scope.$on('handleBrodcast',function(){
// 		$scope.message = "Three: " + showElementsService.message;
// 	});
// }]);

eshopApp.controller('uploader',['$scope','$http', function($scope, $http){

$scope.setFiles = function(element) {
    $scope.$apply(function(scope) {
      console.log('files:', element.files);
      $scope.imageSrc = element;
      // Turn the FileList object into an Array
        $scope.files = []
        for (var i = 0; i < element.files.length; i++) {
          $scope.files.push(element.files[i])
        }
        $scope.progressVisible = false
      });
    };

$scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };




     var fileReader = function ($q, $log,$scope) {
 
        var onLoad = function(reader, deferred, $scope) {
            return function () {
                $scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };
 
        var onError = function (reader, deferred, $scope) {
            return function () {
                $scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };
 
        var onProgress = function(reader, $scope) {
            return function (event) {
                $scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            };
        };
 
        var getReader = function(deferred, $scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, $scope);
            reader.onerror = onError(reader, deferred, $scope);
            reader.onprogress = onProgress(reader, $scope);
            return reader;
        };
 
        var readAsDataURL = function (file, $scope) {
            var deferred = $q.defer();
             
            var reader = getReader(deferred, $scope);         
            reader.readAsDataURL(file);
             
            return deferred.promise;
        };
 
        return {
            readAsDataUrl: readAsDataURL  
        };
    };


}])


