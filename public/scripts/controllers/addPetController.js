myApp.controller('addPetController', ['$scope', '$http' ,function($scope, $http){
console.log('addPet is here');

$scope.addNewPet = function(){
var newPet = {
  pet_name:$scope.petName,
  animal:$scope.animalType,
  age:$scope.petAge,
  petPicURL:$scope.petPic
};//end newPet object

$http ({
  method: 'POST',
  url: '/savePet',
  data: newPet
}).then(function(response){
  console.log(response,'from server');

});//end then function
};//end addNewPet function
}]);//end add pet controller
