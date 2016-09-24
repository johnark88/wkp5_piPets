var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var portDecision = process.env.PORT || 8081;
var index = require('./routes/index');

//json body parser
app.use(bodyParser.json());

//listen and port decision
app.listen(portDecision,function(){
console.log('Listening my good sir ', portDecision);
});

//routes
app.use('/', index);


//data base connection
var mongoURI = "mongodb://localhost:27017/assignments";
mongoose.connect(mongoURI);


// app.get

// app.post
