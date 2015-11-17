
myApp.factory('DataService', ["$http", "$filter", function($http, $filter){
    var names, addresses, orders = undefined;

    var retrieveNames = function(){
        $http.get('/data/names').then(function(response){
            names = response.data;
            //console.log(names);
        })
    };
    var retrieveAddresses = function(selection){
        $http.get('/data/address', {params: {name: selection.name, id: selection.id}}).then(function(response){
            addresses = response.data;
            //console.log(addresses);
        });
    };
    var retrieveOrders = function(id, startDate, endDate){
        startDate = $filter('date')(startDate, "yyyy-MM-dd");
        endDate = $filter('date')(endDate, "yyyy-MM-dd");
        //console.log(startDate, endDate);
        $http.get('/data/order', {params:{id: id, start_date:startDate, end_date: endDate}}).then(function(response){
            orders = response.data;
            console.log(orders);
        })
    };

    var orderApi = {
        retrieveNames: function(){
            retrieveNames();
        },
        displayNames: function(){
            return names;
        },
        retrieveAddresses: function(selection){
            retrieveAddresses(selection);
        },
        displayAddresses: function(){
            return addresses;
        },
        retrieveOrders: function(id, startDate, endDate){
            retrieveOrders(id, startDate, endDate);
        },
        displayOrders: function(){
            return orders;
        }

    };
    return orderApi;
}]);