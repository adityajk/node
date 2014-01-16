var fs = require("fs");
console.log("Starting");
var contents = fs.readFileSync("./file/config.json");

var config = JSON.parse(contents);

console.log("Config is : ",  config);

console.log("Contents : " + config.username);

// Rest of the code goes here
