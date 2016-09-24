var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var portDecision = process.env.PORT || 8081;

app.use(bodyParser.json());

app.listen(portDecision,function(){
console.log('Listening my good sir ', portDecision);
});
