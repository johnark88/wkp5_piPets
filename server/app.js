var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var path = require('path');
var app = express();
var portDecision = process.env.PORT || 8081;


//json body parser
app.use(bodyParser.json());

// routes
var allPets = require('./routes/allPets');
app.use('/viewAll', allPets);

var savePets = require('./routes/savePets');
app.use('/savePet', savePets);

var index = require('./routes/index');
app.use('/', index);


//data base connection
var mongoURI = "mongodb://localhost:27017/piPets";
mongoose.connect(mongoURI);


//listen and port decision
app.listen(portDecision,function(){
  console.log('Listening my good sir ', portDecision);
});



//app delete function
app.delete('/deletePet/:id', function(req,res){
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

// //use this for index.html
app.use( express.static( 'public' ) );
