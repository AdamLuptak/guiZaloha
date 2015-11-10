var adminGuiApp = angular.module('app',['ngRoute','ngResource']);

//routes privider
adminGuiApp.config(function($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl: 'view/login.html',
		controller: 'LoginController'
	})

	.when('/dashboard/:navBarChosser',{

		templateUrl: 'view/dashboard.html',
		controller: 'DashboardController'
	})

	.when('/tasks/:navBarChosser',{

		templateUrl: 'view/tasks.html',
		controller: 'TasksController'
	})
	.when('/users/:navBarChosser',{

		templateUrl: 'view/users.html',
		controller: 'UsersController'
	})
	.when('/maintanence/:navBarChosser',{
		templateUrl: 'view/maintanence.html',
		controller: 'MaintanenceController'
	})
    .when('/console/:navBarChosser',{
        templateUrl: 'view/console.html',
        controller: 'ConsoleController'
    })

	.otherwise({ 
      redirectTo: '/' 
  }); 

});

//part for navbar highLight 
adminGuiApp.factory('showElementsService', ['$rootScope', function($rootScope){
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

    


