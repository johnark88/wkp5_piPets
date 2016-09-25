myApp.controller('viewAllPetsController', ['$scope','$http' ,function($scope, $http){
console.log('viewAllPets is here');

//if I want to add a button I would need this
// $scope.getpiPets = function (){

$http ({
  method: 'GET',
  url:'/viewAll'
}).then(function(response){
$scope.allPiPets = response;
console.log($scope.allPiPets);
});
// };//end scope getpiPets function
}]);//end viewAllPetsController
