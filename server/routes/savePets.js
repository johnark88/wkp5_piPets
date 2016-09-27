var express = require('express');
var router = express.Router();

//addPet Model
var newPet = require('../../models/addPet');

//app.post for save pet
router.post('/', function(req,res){
  console.log('in add pet post route');

  var piPet = req.body;
  console.log('piPet : ', req.body);
  var pets = new newPet ({
    name: piPet.name,
    animal_type: piPet.animal_type,
    age: piPet.age,
    image:piPet.petPicURL
  });

  pets.save(function(err){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }else {
      console.log('connected to the db!');
      res.sendStatus(201);
    }//end else
  });//end save pet to database
});//end app.post


module.exports = router;
