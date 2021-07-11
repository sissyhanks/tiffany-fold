var express = require ("express");
var port = process.env.PORT || 3000;
var app = express()
var api = require("./routs/APIRoutes")
var htmlR = require("./routs/HTMLrouts")

// Data transfer
app.use(express.json())
app.use(express.urlencoded({extended:true}))  // without this Req in routes - req.body will be undefined


//Routes
app.use(api)
app.use(htmlR)


app.listen(port,function(){
    console.log("App listening on port:",port)
})