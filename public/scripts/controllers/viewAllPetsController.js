myApp.controller('viewAllPetsController', ['$scope','$http' ,function($scope, $http){
  console.log('viewAllPets is here');

// http request to get all pets from db
  $scope.allPiPets=[];
  $http ({
    method: 'GET',
    url:'/viewAll'
  }).then(function(response){
    $scope.allPiPets = response.data;
    console.log($scope.allPiPets);
  });//end http get all


$scope.deletePet =function(_id){
  // console.log(_id,'--=-=-=-=-=-=-=-=-=-=-=-');
  var removePet = {
    id:_id
  };//end remove pet object
console.log(removePet,'000000000000000');

$http({
  method: 'DELETE',
  url: '/deletePet',
  data: removePet,
  headers: {"Content-Type": "application/json;charset=utf-8"} //http://stackoverflow.com/a/23919029/6844212
}).then(function(response){
  console.log(response);
});
};
}]);//end viewAllPetsController
