var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var portDecision = process.env.PORT || 8081;

//json body parser 
app.use(bodyParser.json());

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

//data base connection
var mongoURI = "mongodb://localhost:27017/assignments";
mongoose.connect(mongoURI);


// app.get

// app.post
