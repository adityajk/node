var http = require("http");
var fs = require("fs");
console.log("Starting");


var config = JSON.parse(fs.readFileSync("./file/config.json"));
var host = config.host;
var port = config.port;

var server = http.createServer(function(request, response) {
    console.log("Received the request" + request.url);
    
    fs.readFile("./public" + request.url, function(error, data) {
        if(error ) {
            response.writeHead(404, {"Content-type": "text/plain"});
            response.end("Page not found");
        } else {
            response.writeHead(200, {"Content-type": "text/html"});
            response.end(data);
        }
    });
}); 

server.listen(port, host, function() {
    console.log("Listening on port - " + port + " and host " + host );
});

fs.watchFile("./file/config.json", function() {
    config = JSON.parse(fs.readFileSync("./file/config.json"));
    server.close();
    
    host = config.host;
    port = config.port;
    
    server.listen(port, host, function() {
        console.log("Now Listening on new port - " + port + " and host " + host );
    });
});
