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


// $http({
//   method: 'DELETE',
//   url: '/deletePet',
//   data: ????
// });//end http to delete selected record
}]);//end viewAllPetsController
