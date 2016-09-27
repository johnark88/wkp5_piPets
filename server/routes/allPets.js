var express = require('express');
var router = express.Router();

//addPet Model
var newPet = require('../../models/addPet');

//app.get view all
router.get('/', function (req,res){
  console.log('in get all router ');
  newPet.find({}, function(err, piPetResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(piPetResults);
      console.log(piPetResults);
    }//end else
  });//end database query
});//end app.get

module.exports = router;
