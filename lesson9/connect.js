var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-introduction", new mongo.Server(host, port, {}));
db.open(function(error) {
    console.log("We are connected at " + host + ":" + port);
    
    db.collection("user", function(error, collection) {
        console.log("We have the collection");
        
        collection.insert({
            id: "1",
            name: "Aditya",
            email: "adityak@cdac.in",
            git_url: "https://github.com/adityajk/node"
        }, function() {
            console.log("Successfully inserted aditya");
        });
        
        collection.insert({
            id: "2",
            name: "Vivek",
            email: "vivek@cdac.in",
            git_url: "https://github.com/vivek/"
        }, function() {
            console.log("Successfully inserted Vivek");
        });
        
    });
});
