// establishes app as variable for these specialized routs
var app = require("express").Router();
//include the node path module for accessing and manipulating file path systems
var path = require("path");

//methods to display directories
app.get("/", (req,res) => res.sendFile(path.join(__dirname,"../public/index.html")));

app.get("/notes", (req,res) => res.sendFile(path.join(__dirname,"../public/notes.html")));

//display index HTML if unknown html extension requested
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
});

// module exports
module.exports = app;


