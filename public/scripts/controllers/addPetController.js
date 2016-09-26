myApp.controller('addPetController', ['$scope', '$http' ,function($scope, $http){
console.log('addPet is here');



$scope.addNewPet = function(){
var newPet = {
  pet_name:$scope.petName,
  animal:$scope.animalType,
  age:$scope.petAge,
  petPicURL:$scope.petPic
};//end newPet object

$scope.serverRes=[];
$http ({
  method: 'POST',
  url: '/savePet',
  data: newPet
}).then(function(response){
  console.log(response, 'from server');
  $scope.serverRes = response.data;
  console.log($scope.serverRes, "response from server to display");
});//end then function
//resets form on submit
$scope.petName = null;
$scope.animalType = null;
$scope.petAge = null;
$scope.petPic = null;
$scope.addingPet.$setPristine();
$scope.addingPet.$setUntouched();
};//end addNewPet function

// Reset Button to set form back to empty and untouched/pristine
$scope.resetForm = function (){
  $scope.petName = null;
  $scope.animalType = null;
  $scope.petAge = null;
  $scope.petPic = null;
  $scope.addingPet.$setPristine();
  $scope.addingPet.$setUntouched();
};//end reset form
}]);//end add pet controller
