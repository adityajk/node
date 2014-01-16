var fs = require("fs");
console.log("Starting");

var config = JSON.parse(fs.readFileSync("./file/config.json"));

console.log("contents : ", config);

fs.watchFile("./file/config.json", function(current, previous) {
    console.log("Config changed ");
    config = JSON.parse(fs.readFileSync("./file/config.json"));
    console.log("New config file ", config);
});
