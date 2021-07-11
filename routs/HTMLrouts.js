var app = require("express").Router()
var path = require("path")

//get

app.get("/",function(req,res){
    res.sendFile(pathh.join(__dirname,"../public/index.html"))
})

app.get("/notes",function(req,res){
    res.sendFile(pathh.join(__dirname,"../public/notes.html"))
})


app.get("*",function(req,res){
    res.sendFile(pathh.join(__dirname,"../public/index.html"))
})

module.exports = app;


