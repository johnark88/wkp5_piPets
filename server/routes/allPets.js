var router = require('express').Router();



router.get('/viewAll', function (req,res){
console.log('in get all router ');
newPet.find({}, function(err, piPetResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(piPetResults);
      console.log(piPetResults);
    }
  });
});


module.exports = router;
