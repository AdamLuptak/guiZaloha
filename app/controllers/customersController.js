/controler for customerControler
    adminGuiApp.controller('CustomersController',['$scope', 'customersService','$routeParams', 'showElementsService',function($scope, customersService,$routeParams,showElementsService) {
   //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();
    // initialized data from service 
    function init() {
        $scope.customers = customersService.getCustomers();
    }
    // load paramters from route
    $scope.navBarChosser = $routeParams.navBarChosser;
    //call function for update the view 
    showElementsService.preForBrodcast('1','1','1', $scope.navBarChosser);
    
    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };

}]);