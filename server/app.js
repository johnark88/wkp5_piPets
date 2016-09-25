var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var portDecision = process.env.PORT || 8081;
// routes
// var index = require('./routes/index');
// var allPets = require('./routes/allPets');
// var savePets = require('./routes/savePets');


//json body parser
app.use(bodyParser.json());

// //routes
// app.use('/', index);
// app.use('/viewAll', allPets)
// app.use('/savePets', savePets);

//data base connection
var mongoURI = "mongodb://localhost:27017/piPets";
mongoose.connect(mongoURI);


//listen and port decision
app.listen(portDecision,function(){
console.log('Listening my good sir ', portDecision);
});

//app.get --  serves the index -- get params
app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});


app.get('/viewAll', function(req,res){
console.log('in get all router ');
if (err) {
  console.log(err);
}else {
  console.log('Connected to db!');
  res.send(allPets);
  console.log(allPets);
}
});



// app.pos
