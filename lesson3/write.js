var fs = require("fs");

console.log("Starting writing...");

fs.writeFile("./file/sample.txt", "Hello AFT !! Synchronous", function(error) {
    console.log("Written file");
});

console.log("Finished");
