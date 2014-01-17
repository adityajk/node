var gitR = require("./github.js");

gitR.gitRepos("adityajk", function(repos) {
    console.log("Count : " , repos.length);
});
