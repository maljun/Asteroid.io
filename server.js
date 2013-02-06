var express = require('express'),
 app = express(), 
 port = 80,
 server = app.listen(port),
 io = require('socket.io').listen(server);
 io.set('log level', 0)

app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});


io.sockets.on('connection', function (socket) {
  socket.on('playerstate', function (state) {
    socket.broadcast.emit('gamestate', state);  
  });
});

console.log("Server is listening on port " + port);