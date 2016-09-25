myApp.controller('viewAllPetsController', ['$scope','$http' ,function($scope, $http){
  console.log('viewAllPets is here');

  $scope.allPiPets=[];
  $http ({
    method: 'GET',
    url:'/viewAll'
  }).then(function(response){
    $scope.allPiPets = response.data;
    console.log($scope.allPiPets);
  });

}]);//end viewAllPetsController
