var app = require("express").Router();
var path = require("path");

//get

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"../public/index.html")));

app.get("/notes", (req,res) => res.sendFile(path.join(__dirname,"../public/notes.html")));


app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
});

module.exports = app;


