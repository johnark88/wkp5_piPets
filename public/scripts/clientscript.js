console.log('js sourced');

var myApp = angular.module('myApp', ['ngRoute']);

//piPetsHome controller - basic home page
myApp.controller('piPetsHome',['$scope',function($scope){
  console.log('NG');
}]);

//angular routing config for home page, add page and view all page
myApp.config(['$routeProvider',function ($routeProvider){
    $routeProvider.
    when ('/home',{
      templateUrl: "partials/home.html",
      controller: "homeController"
    }).
    when ("/addPet",
      {templateUrl: "partials/addPet.html",
      controller: "addPetController"
    }).
    when ("/viewAllPets",
      {templateUrl: "partials/viewAllPets.html",
      controller: "viewAllPetsController"
    }).
    otherwise({

      redirectTo: "/home"
    });
  }]);
