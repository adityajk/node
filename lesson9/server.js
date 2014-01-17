var fs = require("fs");
var config = JSON.parse(fs.readFileSync("./file/config.json"));
var host = config.host;
var port = config.port;

var mongoDB = require("./query.js");

var express = require("express");
var app = express();

console.log("Started");

app.use(app.router);
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response) {
    response.send("Hello Adi");
});

app.get("/hello/:text", function(request, response) {
    response.send("Hello " + request.params.text);
});

app.get("/user/:id", function(request, response) {
    
    mongoDB.Mdb(request.params.id, function(user) {
        if(!user) {
            response.send("Sorry can't find the user :(", 404);
        } else {
            response.send("Name is " + user.name + " and email is " + user.email );
        }
    });    
    
});


app.listen(port, host);
