var fs = require("fs");
var config = JSON.parse(fs.readFileSync("./file/config.json"));
var host = config.host;
var port = config.port;

var users = {
    "1" : {
        "name" : "John",
        "empId" : "123"
    },
    "2" : {
        "name" : "Joy",
        "empId" : "456"
    }
}

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
    var user = users[request.params.id];
    if(user) {
        response.send("Name is " + user.name + " Emp id is " + user.empId);
    } else {
        response.send("Sorry can't find the user :(", 404);
    }
});


app.listen(port, host);
