var router = require('express').Router();
var newPet = require('../../models/addPet');

router.get('/viewAll', function(req,res){
console.log('in get all router ');
if (err) {
  console.log(err);
}else {
  console.log('Connected to db!');
  res.send(allPets);
  console.log(allPets);
}
});

router.post('/savePet', function(req,res){
  console.log('in add pet post route');

  var piPet = newPet(request.body);

  piPet.save(function(err){
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }else {
    console.log('connected to the db!');
    res.sendStatus(200);
  }
});
});
module.exports = router;
