var myModule = require("./my_module.js");
var gitR = require("./github.js");
console.log(myModule.hello());



gitR.gitRepos("adityajk", function(repos) {
    console.log("Count : " , repos.length);
});
