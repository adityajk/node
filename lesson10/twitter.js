var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  ,Twit = require('twit')
  , io = require('socket.io').listen(server);

server.listen(8080);

// routing
app.get('/', function (req, res) {
res.sendfile(__dirname + '/index.html');
});

var watchList = ['arvind kejrewal', 'aap'];
 var T = new Twit({
    consumer_key:         'oI2GDk1czJ3nhTMJxAw'
  , consumer_secret:      'IVwItUpccGacU03CFmLREfsbm5JPHKCLmf6cbVyQ'
  , access_token:         '2300762053-rucWmpwzvzl0OWuNHWvcU7b3zcBYXe5JKRN8xXF'
  , access_token_secret:  'JMXh9Q6D28unyJpBwOcnzQgBEaosxZZk1ySKPoTfIOru4'
})

io.sockets.on('connection', function (socket) {
  console.log('Connected');


 var stream = T.stream('statuses/filter', { track: watchList })

  stream.on('tweet', function (tweet) {

    io.sockets.emit('stream',tweet.text);


  });
 });
