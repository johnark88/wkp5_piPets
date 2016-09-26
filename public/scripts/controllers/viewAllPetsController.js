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


$scope.deletePet = function(id){
  console.log('clicked delete', id );
      $http({
        method: 'DELETE',
        url: '/deletePet/' + id
      }).then(function successCallback(response) {
        console.log('delete res =', response);
      }, function errorCallback(response) {
        console.log('err');
        $window.reload();
      });

    };
}]);//end viewAllPetsController
