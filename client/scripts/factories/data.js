
myApp.factory('DataService', ["$http", function($http){
    var names, addresses = undefined;

    var retrieveNames = function(){
        $http.get('/data/names').then(function(response){
            names = response.data;
            console.log(names);
        })
    };
    var retrieveAddresses = function(selection){
        $http.get('/data/address', {params: {name: selection.name, id: selection.id}}).then(function(response){
            addresses = response.data;
            //console.log(addresses);
        });
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
        }

    };
    return orderApi;
}]);