console.log('js sourced');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('newPet',['$scope', '$http',function($scope,$http){
  console.log('NG');

}]);
