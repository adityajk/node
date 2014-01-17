var mongo = require("mongodb");
var dbHost = "127.0.0.1";
var dbPort = mongo.Connection.DEFAULT_PORT;

function getUser(userid, callback) {
    var db = new mongo.Db("nodejs-introduction", new mongo.Server(dbHost, dbPort, {}));
    db.open(function(error) {
        console.log("We are connected at " + dbHost + ":" + dbPort);
        
        db.collection("user", function(error, collection) {
            console.log("We have the collection");
            
           collection.find({"id" : userid.toString()}, function(error, cursor) {
              cursor.toArray(function(error, users) {
                  if(users.length == 0) {
                      callback(false);
                  } else {
                      callback(users[0]);
                  }
              });
           });
            
        });
    });

}

/*getUser(1, function(user) {
    if(!user) {
        console.log("No user found with id 1");
    } else {
        console.log("Found user ", user);
    }
});

getUser(2, function(user) {
    if(!user) {
        console.log("No user found with id 2");
    } else {
        console.log("Found user ", user);
    }
});

getUser(3, function(user) {
    if(!user) {
        console.log("No user found with id 3");
    } else {
        console.log("Found user ", user);
    }
});*/


module.exports.Mdb = getUser;
