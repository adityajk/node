var fs = require("fs");

console.log("Starting writing...");

fs.writeFileSync("./file/sample.txt", "Hello AFT !! Synchronous");

console.log("Finished");
