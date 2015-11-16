var myApp = angular.module("myApp", ['ngRoute']);

//myApp.controller("OrderManager", ["$scope", "$http", function($scope, $http){
//
//}]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: "assets/views/routes/home.html",
            controller: "HomeController"
        })
        .when('/address', {
            templateUrl: "assets/views/routes/addressDisplay.html",
            controller: "AddressController"
        })
        .when('/order', {
            templateUrl: "assets/views/routes/orderLookup.html",
            controller: "OrderController"
        })
        .otherwise('/home');
}]);