// var router = require('express').Router();
// var newPet = require('../../models/addPet');
//
//
// router.post('/savePet', function(req,res){
//   console.log('in add pet post route');
//
//   var piPet = newPet(req.body);
//   console.log('piPet : ', req.body);
//
//   piPet.save(function(err){
//   if (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }else {
//     console.log('connected to the db!');
//     res.sendStatus(200);
//   }
// });
// });
//
// module.exports = router;
