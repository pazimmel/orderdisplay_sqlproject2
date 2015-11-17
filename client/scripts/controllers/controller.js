
myApp.controller('HomeController', ["$scope", "DataService", function($scope, DataService){
    $scope.message = "home page";
    $scope.dataService = DataService;



}]);

myApp.controller('AddressController', ["$scope", "DataService", function($scope, DataService){
    $scope.data = {};
    $scope.dataService = DataService;

    $scope.dataService.retrieveNames();
    $scope.data.namesArray = $scope.dataService.displayNames();

    $scope.data.addresses = $scope.dataService.displayAddresses();


}]);

myApp.controller('OrderController', ["$scope", "DataService", function($scope, DataService){
    $scope.message = "order page";
    $scope.dataService = DataService;


}]);