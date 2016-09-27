var express = require('express');
var router = express.Router();

//addPet Model
var newPet = require('../../models/addPet');

//app delete function
router.delete('/', function(req,res){
  console.log("params = ", req.params);
  newPet.remove({"_id": req.params.id}, function(err) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log('removed=', req.params.id);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
