
myApp.controller('HomeController', ["$scope", "DataService", function($scope, DataService){
    $scope.message = "home page";
    $scope.dataService = DataService;
    $scope.dataService.retrieveOrder();

    console.log("othermessage...", $scope.dataService.displayOrder());
}]);

myApp.controller('AddressController', ["$scope", "DataService", function($scope, DataService){

    $scope.dataService = DataService;

    $scope.dataService.retrieveNames();
    $scope.names = $scope.dataService.displayNames();
    console.log("names message", $scope.names);

    //$scope.dataService.retrieveOrder();
    //$scope.othermessage = $scope.dataService.displayOrder();
    //
    //console.log("othermessage...", $scope.othermessage);
}]);

myApp.controller('OrderController', ["$scope", "DataService", function($scope, DataService){
    $scope.message = "order page";
    $scope.dataService = DataService;
    $scope.dataService.retrieveOrder();

    $scope.othermessage = $scope.dataService.displayOrder();
    console.log("othermessage...", $scope.othermessage);
}]);