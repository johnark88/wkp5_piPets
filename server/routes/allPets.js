var router = require('express').Router();

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


module.exports = router;
