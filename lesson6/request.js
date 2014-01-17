var https = require("https");

function getRepo(username, callback) {
    //var username = "adityajk";

    var options = {
        host: "api.github.com",
        path: "/users/" + username + "/repos",
        method: "GET",
        'headers': {
            'User-Agent': "adityajk"
        }
    };

    var request = https.request(options, function(response) {
        var body = '';
        response.on("data", function(chunk) {
            body += chunk.toString('utf8');
        });
        
        response.on("end", function() {
            var repos = [];
            var json = JSON.parse(body);
            json.forEach(function(repo) {
                repos.push({
                    name: repo.name,
                    description: repo.description
                });
            }); 
            callback(repos);
        });
    });
    request.end();
}

getRepo("adityajk", function(repos) {
    console.log("Aditya has " + repos.length + " repos");
});

getRepo("spring", function(repos) {
    console.log("Spring has " + repos.length + " repos");
});

