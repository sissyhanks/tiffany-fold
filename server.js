// import and require express
//express allows us to create routing (api & HTML) server
//.... allows us to set up url paths
var express = require ("express");

//either use assigned port or use port 3000 for server ... gives access to talk to server
var port = process.env.PORT || 3000;

// binds express function to variable app
var app = express();

// exported route requirements
var api = require("./routes/APIRoutes");
var htmlR = require("./routes/HTMLroutes");

// Data transfer  Express middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));  // without this Req in routes - req.body will be undefined

//serve static files in "public" directory
app.use(express.static("public"));


//Routes
app.use(api);
app.use(htmlR);

//activates server port and logs port number when listening
app.listen(port,function(){
    console.log("App listening on port:",port)
});