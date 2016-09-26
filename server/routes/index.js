var router = require('express').Router();
var path = require('path');
var express =require('express');

//app.get --  serves the index -- get params
router.get("/", function(req,res){
    console.log("Here is the property: ", req.params);
    // var file = req.params || "index.html";
    res.sendFile(path.join(__dirname, "../../public/index.html"));

});
module.exports = router;
